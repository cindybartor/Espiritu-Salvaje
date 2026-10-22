/**
 * Formulario de contacto → e-mail por Resend. Cloudflare Pages Function: se despliega sola
 * desde /functions y responde en POST /api/contacto.
 *
 * Secretos (Cloudflare → proyecto → Settings → Variables and Secrets, en Production y Preview):
 *   RESEND_API_KEY  clave de Resend con permiso sólo de envío
 *   CONTACT_TO      correo(s) de destino, separados por comas (el correo personal de la autora)
 *   CONTACT_FROM    remitente verificado en Resend (por defecto "Espíritu Salvaje Web <web@bartor.eu>")
 *
 * Anti-spam: campo trampa "bot-field" (oculto) y límites de tamaño. Sin cookies ni rastreo.
 * Con JavaScript el formulario envía por fetch y recibe JSON; sin JavaScript, el navegador
 * hace el POST normal y se le redirige a /?enviado=1#contacto.
 */
interface Env { RESEND_API_KEY?: string; CONTACT_TO?: string; CONTACT_FROM?: string }

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json; charset=utf-8", "cache-control": "no-store" } });
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c] as string);
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
  if (!env.RESEND_API_KEY || !env.CONTACT_TO) return reply(false, "not_configured", 503);

  const to = env.CONTACT_TO.split(",").map((x) => x.trim()).filter(Boolean);
  const from = env.CONTACT_FROM || "Espíritu Salvaje Web <web@bartor.eu>";
  const html = `<div style="font:15px/1.5 -apple-system,Segoe UI,sans-serif;color:#111">
    <h2 style="margin:0 0 14px;font-weight:600">Nuevo mensaje desde espiritusalvaje.es</h2>
    <table cellpadding="0" cellspacing="0" style="border-collapse:collapse">
      <tr><td style="padding:4px 14px 4px 0;color:#666">Nombre</td><td style="padding:4px 0">${esc(nombre)}</td></tr>
      <tr><td style="padding:4px 14px 4px 0;color:#666">Email</td><td style="padding:4px 0">${esc(email)}</td></tr>
    </table>
    <p style="margin:18px 0 6px;color:#666">Mensaje</p>
    <p style="white-space:pre-wrap;margin:0">${esc(mensaje)}</p>
    <p style="margin:24px 0 0;color:#999;font-size:13px">Responde a este correo para contestar directamente a ${esc(nombre)}.</p>
  </div>`;
  const text = `Nombre: ${nombre}\nEmail: ${email}\n\nMensaje:\n${mensaje}`;

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${env.RESEND_API_KEY}`, "content-type": "application/json" },
    body: JSON.stringify({ from, to, reply_to: email, subject: `Espíritu Salvaje · mensaje de ${nombre}`, html, text }),
  });
  if (!res.ok) return reply(false, "send_failed", 502);
  return reply(true);
};
