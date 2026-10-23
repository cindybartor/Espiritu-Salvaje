/* La baraja de #etapas: las cartas esperan apiladas en el centro del bloque y, cuando el
   bloque entra en pantalla (top < 72% de la ventana), cada una se desliza hasta el sitio
   que ya ocupa en el flujo normal. Las posiciones se miden, nunca se escriben a mano.
   Por debajo de 900px no hay desplazamiento: sólo fundido (0,7 s). */
const TILT = [{ sr: -5, rot: -7 }, { sr: 3, rot: 5 }, { sr: -1, rot: -3.5 }];

export function initDeal(reduce: boolean) {
  const stage = document.querySelector<HTMLElement>("[data-deal]");
  if (!stage) return;
  const cards = Array.from(stage.querySelectorAll<HTMLElement>("[data-deal-card]"));
  if (!cards.length) return;

  let dealt = reduce;
  let narrow = window.innerWidth < 900;
  let offsets: { dx: number; dy: number }[] = [];

  const measure = () => {
    narrow = window.innerWidth < 900;
    if (narrow) {
      offsets = cards.map(() => ({ dx: 0, dy: 0 }));
    } else {
      const box = stage.getBoundingClientRect();
      const ox = box.left + box.width / 2;
      const oy = box.top + box.height / 2;
      offsets = cards.map((el, i) => {
        const prevT = el.style.transform;
        const prevTr = el.style.transition;
        el.style.transition = "none";
        el.style.transform = "none";
        const r = el.getBoundingClientRect();
        el.style.transform = prevT;
        void el.offsetWidth;
        el.style.transition = prevTr;
        // unos píxeles de desorden por carta para que la pila parezca una baraja
        return {
          dx: Math.round(ox - (r.left + r.width / 2)) + i * 5,
          dy: Math.round(oy - (r.top + r.height / 2)) + i * 4,
        };
      });
    }
    apply();
  };

  const apply = () => {
    stage.style.setProperty("--k", dealt ? "0" : "1");
    stage.style.setProperty("--co", narrow ? "calc(1 - var(--k, 0))" : "1");
    stage.style.setProperty("--dur", reduce ? "0s" : narrow ? ".7s" : "1.15s");
    stage.style.setProperty("--durT", reduce ? "0s" : ".8s");
    const textStep = reduce ? 0 : narrow ? 140 : 260;
    const textLead = reduce ? 0 : narrow ? 90 : 780;
    cards.forEach((el, i) => {
      const tilt = TILT[i] || { sr: 0, rot: 0 };
      const off = offsets[i] || { dx: 0, dy: 0 };
      el.style.setProperty("--dx", off.dx + "px");
      el.style.setProperty("--dy", off.dy + "px");
      el.style.setProperty("--sr", narrow ? "0" : String(tilt.sr));
      el.style.setProperty("--rot", narrow ? "0" : String(tilt.rot));
      el.style.setProperty("--d", (reduce ? 0 : i * (narrow ? 140 : 260)) + "ms");
      const text = el.parentElement?.querySelector<HTMLElement>("[data-deal-text]");
      if (text) text.style.setProperty("--dt", textLead + i * textStep + "ms");
    });
  };

  const deal = () => {
    if (dealt) return;
    dealt = true;
    apply();
  };

  measure();
  if (dealt) return;

  // Las cartas se re-miden si cambia el ancho o cuando acaban de cargar sus imágenes.
  let timer = 0;
  const remeasure = () => { window.clearTimeout(timer); timer = window.setTimeout(measure, 140); };
  window.addEventListener("resize", remeasure);
  cards.forEach((el) => {
    const img = el.querySelector("img");
    if (img && !img.complete) img.addEventListener("load", remeasure, { once: true });
  });

  const io = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) { io.disconnect(); deal(); }
    },
    // equivale a: top < 72% de la ventana y bottom > 10%
    { rootMargin: "-10% 0px -28% 0px", threshold: 0 },
  );
  io.observe(stage);
  // Último recurso: el texto nunca puede quedarse oculto.
  window.setTimeout(() => { io.disconnect(); deal(); }, 20000);
}
