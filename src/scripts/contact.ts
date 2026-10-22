/* Formulario de contacto: tras el envío Netlify redirige a /?enviado=1#contacto. Aquí se
   sustituye el formulario por el agradecimiento y se limpia la URL. */
export function initContact() {
  const params = new URLSearchParams(location.search);
  if (!params.has("enviado")) return;
  const form = document.querySelector<HTMLFormElement>("[data-contact-form]");
  const ok = document.querySelector<HTMLElement>("[data-contact-success]");
  if (!form || !ok) return;
  form.hidden = true;
  ok.hidden = false;
  history.replaceState(null, "", location.pathname + "#contacto");
  ok.scrollIntoView({ block: "center" });
}
