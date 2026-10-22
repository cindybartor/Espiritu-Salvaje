/* Textos palabra por palabra (#libertad y #libertad-cierre). Arrancan cuando la sección
   ocupa la franja entre el 20% y el 70% de la ventana; el intervalo lo marca data-word-ms. */
export function initWords(reduce: boolean) {
  const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-words]"));
  if (!sections.length) return;

  const start = (sec: HTMLElement) => {
    const words = Array.from(sec.querySelectorAll<HTMLElement>("[data-word]"));
    if (!words.length) return;
    if (reduce) { words.forEach((w) => w.classList.add("on")); return; }
    const ms = Number(sec.dataset.wordMs) || 150;
    let i = 0;
    const timer = window.setInterval(() => {
      words[i]?.classList.add("on");
      i++;
      if (i >= words.length) window.clearInterval(timer);
    }, ms);
  };

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (!e.isIntersecting) continue;
        io.unobserve(e.target);
        start(e.target as HTMLElement);
      }
    },
    { rootMargin: "-20% 0px -30% 0px", threshold: 0 },
  );
  sections.forEach((s) => io.observe(s));
}
