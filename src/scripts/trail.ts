/* Rastro de sangre tras el puntero. Cada gota sigue al ratón con su propia transición
   (de 160 ms a 3600 ms), lo que crea la estela. Sin puntero (hover: none) o con
   movimiento reducido no se activa. */
export function initTrail(reduce: boolean) {
  const layer = document.querySelector<HTMLElement>("[data-trail]");
  if (!layer) return;
  if (reduce || window.matchMedia("(hover: none)").matches) { layer.remove(); return; }
  const dots = Array.from(layer.querySelectorAll<HTMLElement>("[data-trail-dot]"));
  if (!dots.length) return;

  let shown = false;
  window.addEventListener(
    "pointermove",
    (e) => {
      if (!shown) { shown = true; layer.classList.add("is-on"); }
      const t = "translate3d(" + e.clientX + "px," + e.clientY + "px,0)";
      for (const d of dots) d.style.transform = t;
    },
    { passive: true },
  );
}
