/* Reveals por scroll. En navegadores con animation-timeline: view() todo lo hace el CSS.
   Si no hay soporte, se activa html[data-es-fallback] y un IntersectionObserver conmuta
   data-shown en cada bloque (ver las reglas de respaldo en global.css). */
export function initReveals(reduce: boolean) {
  if (reduce) return;
  const supportsView =
    typeof CSS !== "undefined" && CSS.supports && CSS.supports("animation-timeline", "view()");
  if (supportsView) return;

  const items = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-typed]"));
  if (!items.length) return;
  document.documentElement.setAttribute("data-es-fallback", "1");

  const delayOf = (el: HTMLElement) => {
    if (el.hasAttribute("data-typed")) {
      const h = el.closest("h1, h2, h3");
      const line = h ? Array.from(h.querySelectorAll("[data-typed]")).indexOf(el) : 0;
      return 90 + Math.max(0, line) * 900;
    }
    if (el.dataset.reveal === "lift" && el.parentElement) {
      const sibs = Array.from(el.parentElement.children).filter((c) => (c as HTMLElement).dataset.reveal === "lift");
      return Math.max(0, sibs.indexOf(el)) * 150;
    }
    return 0;
  };

  const timers = new WeakMap<Element, number>();
  items.forEach((el) => el.setAttribute("data-shown", "0"));

  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        const el = e.target as HTMLElement;
        window.clearTimeout(timers.get(el));
        if (e.isIntersecting) {
          timers.set(el, window.setTimeout(() => el.setAttribute("data-shown", "1"), delayOf(el)));
        } else {
          el.setAttribute("data-shown", "0");
        }
      }
    },
    // equivale a: top < 88% de la ventana y bottom > 40px
    { rootMargin: "-40px 0px -12% 0px", threshold: 0 },
  );
  items.forEach((el) => io.observe(el));
}
