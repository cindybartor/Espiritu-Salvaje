/* Formulario de contacto. Con JavaScript se envía por fetch a /api/contacto (Cloudflare
   Pages Function) y se muestra el agradecimiento sin recargar. Sin JavaScript, el POST
   normal termina en /?enviado=1#contacto (o /?error=…), que también se gestiona aquí. */
export function initContact() {
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const ok = document.querySelector<HTMLElement>("[data-contact-success]");
  const err = document.querySelector<HTMLElement>("[data-contact-error]");
  if (!form || !ok || !err) return;

  const showSuccess = () => {
    form.hidden = true;
    err.hidden = true;
    ok.hidden = false;
    ok.scrollIntoView({ block: "center" });
  };
  const showError = () => {
    err.hidden = false;
    err.scrollIntoView({ block: "nearest" });
  };

  const params = new URLSearchParams(location.search);
  if (params.has("enviado") || params.has("error")) {
    if (params.has("enviado")) showSuccess(); else showError();
    history.replaceState(null, "", location.pathname + "#contacto");
  }

  const button = form.querySelector<HTMLButtonElement>("button[type=submit]");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    err.hidden = true;
    if (button) button.disabled = true;
    try {
      const res = await fetch(form.action, {
        method: "POST",
        body: new FormData(form),
        headers: { accept: "application/json" },
      });
      const body = await res.json().catch(() => ({ ok: false }));
      if (res.ok && body.ok) { form.reset(); showSuccess(); } else showError();
    } catch {
      showError();
    } finally {
      if (button) button.disabled = false;
    }
  });
}
