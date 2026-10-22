/**
 * Formulario de contacto → correo de la autora vía Web3Forms (gratuito, sin cuenta de pago).
 * Cloudflare Pages Function: se despliega sola desde /functions y responde en POST /api/contacto.
 *
 * Secreto (Cloudflare → proyecto → Settings → Variables and Secrets, en Production y Preview):
 *   WEB3FORMS_KEY  clave de acceso de Web3Forms. Se obtiene en https://web3forms.com introduciendo
 *                  el Gmail del libro: ellos envían la clave a ese correo y las entregas llegan ahí.
 *
 * La clave nunca llega al navegador: el formulario envía a esta función y es la función quien
 * habla con Web3Forms. Anti-spam: campo trampa "bot-field" (oculto) y límites de tamaño.
 * Con JavaScript el formulario envía por fetch y recibe JSON; sin JavaScript, el navegador hace
 * el POST normal y se le redirige a /?enviado=1#contacto (o /?error=…).
 */
interface Env { WEB3FORMS_KEY?: string }

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const clean = (v: FormDataEntryValue | null, max = 500) => (typeof v === "string" ? v.trim().slice(0, max) : "");

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
  const wantsJson = (request.headers.get("accept") || "").includes("application/json");
  const reply = (ok: boolean, error?: string, status = 200) => {
    if (wantsJson) return json(ok ? { ok } : { ok, error }, status);
    const url = new URL(request.url);
    url.pathname = "/";
    url.search = ok ? "?enviado=1" : `?error=${error || "send_failed"}`;
    url.hash = "contacto";
    return Response.redirect(url.toString(), 303);
  };

  let data: FormData;
  try { data = await request.formData(); } catch { return reply(false, "bad_request", 400); }
  if (clean(data.get("bot-field"))) return reply(true); // bot: fingimos éxito y no enviamos nada

  const nombre = clean(data.get("nombre"), 120);
  const email = clean(data.get("email"), 200);
  const mensaje = clean(data.get("mensaje"), 4000);
  if (!nombre || !email || !mensaje) return reply(false, "missing_fields", 422);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return reply(false, "bad_email", 422);
  if (!env.WEB3FORMS_KEY) return reply(false, "not_configured", 503);

  let res: Response;
  try {
    res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "content-type": "application/json", accept: "application/json" },
      body: JSON.stringify({
        access_key: env.WEB3FORMS_KEY,
        subject: `Espíritu Salvaje · mensaje de ${nombre}`,
        from_name: "Web Espíritu Salvaje",
        name: nombre,
        email, // Web3Forms lo usa como reply-to
        message: mensaje,
      }),
    });
  } catch {
    return reply(false, "send_failed", 502);
  }
  const body = (await res.json().catch(() => ({}))) as { success?: boolean };
  if (!res.ok || !body.success) return reply(false, "send_failed", 502);
  return reply(true);
};
