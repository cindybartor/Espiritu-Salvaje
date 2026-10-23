/* Carta lacrada de #paraquien: cuando la escena asoma (un tercio visible), se añade la clase
   `in` y el CSS encadena papel → frases → sello. Ocurre una sola vez. */
export function initCarta(reduce: boolean) {
  const scene = document.querySelector<HTMLElement>("[data-carta]");
  if (!scene) return;
  if (reduce) { scene.classList.add("in"); return; }
  const io = new IntersectionObserver(
    (entries) => {
      if (!entries.some((e) => e.isIntersecting)) return;
      io.disconnect();
      scene.classList.add("in");
    },
    { threshold: 0.3 },
  );
  io.observe(scene);
}
