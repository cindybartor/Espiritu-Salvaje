/* "Este libro es para ti si…": el bloque se fija (sticky) mientras el lector recorre
   100svh + n×62svh y muestra una frase cada vez, con puntos indicadores. La página
   conserva su scroll nativo: nada captura la rueda ni el tacto.
   Las frases siempre pasan en orden: si el scroll salta más de una zona (Av Pág, barra
   espaciadora, un arrastre rápido), las intermedias se muestran un instante cada una. */
const STEP_MS = 900; // tiempo mínimo que cada frase queda visible

export function initPara(reduce: boolean) {
  const root = document.querySelector<HTMLElement>("[data-para]");
  if (!root || reduce) return;
  const inner = root.querySelector<HTMLElement>("[data-para-sticky]");
  const list = root.querySelector<HTMLElement>("[data-para-list]");
  const dots = root.querySelector<HTMLElement>("[data-para-dots]");
  const items = Array.from(root.querySelectorAll<HTMLElement>("[data-para-item]"));
  const dotEls = Array.from(root.querySelectorAll<HTMLElement>("[data-para-dot]"));
  if (!inner || !list || items.length < 2) return;

  let shown = -1; // frase visible ahora
  let target = 0; // frase que corresponde a la posición de scroll
  let timer = 0;

  // La lista apilada (estado sin JS) pasa a ser una frase fija cada vez.
  const oneUp = () => {
    root.style.height = "calc(100svh + " + items.length * 62 + "svh)";
    inner.style.position = "sticky";
    inner.style.top = "0";
    inner.style.minHeight = "100svh";
    list.style.display = "grid";
    list.style.gap = "0";
    list.style.minHeight = "clamp(150px, 24vh, 260px)";
    list.style.alignItems = "center";
    items.forEach((el) => { el.style.gridArea = "1 / 1"; });
    if (dots) dots.style.display = "flex";
  };

  const render = (idx: number) => {
    items.forEach((el, i) => {
      const on = i === idx;
      el.style.opacity = on ? "1" : "0";
      el.style.transform = on ? "translateY(0)" : "translateY(" + (i < idx ? -20 : 20) + "px)";
      el.style.pointerEvents = on ? "auto" : "none";
    });
    dotEls.forEach((d, i) => {
      const on = i === idx;
      d.style.opacity = on ? "1" : ".28";
      d.style.transform = on ? "scale(1.5)" : "scale(1)";
    });
  };

  // Avanza de una en una hacia la frase objetivo.
  const tick = () => {
    timer = 0;
    if (shown === target) return;
    shown = shown < 0 ? target : shown + Math.sign(target - shown);
    render(shown);
    if (shown !== target) timer = window.setTimeout(tick, STEP_MS);
  };

  const apply = () => {
    const r = root.getBoundingClientRect();
    // altura del bloque fijo en lugar de innerHeight: en iOS innerHeight cambia con la barra
    const travel = Math.max(1, r.height - inner.getBoundingClientRect().height);
    const p = Math.min(1, Math.max(0, -r.top / travel));
    target = Math.min(items.length - 1, Math.floor(p * items.length));
    if (!timer) tick();
  };

  oneUp();
  apply();
  window.addEventListener("scroll", apply, { passive: true });
  const onResize = () => { oneUp(); apply(); };
  window.addEventListener("resize", onResize);
  window.addEventListener("orientationchange", onResize);
}
