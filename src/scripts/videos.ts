/* Vídeos decorativos: siempre sin sonido, en bucle y playsinline. Los que están bajo la
   primera pantalla llevan data-src y sólo se descargan cuando se acercan al viewport.
   Si el navegador los pausa (ahorro de energía, pestaña en segundo plano…) se reintenta
   play(). El vídeo de #fragmento tiene un botón de play/pausa que respeta al lector. */
const USER_PAUSED = "data-user-paused";

function nurse(v: HTMLVideoElement) {
  if (v.hasAttribute(USER_PAUSED) || !v.getAttribute("src")) return;
  v.muted = true;
  v.volume = 0;
  v.loop = true;
  if (v.paused) {
    const p = v.play();
    if (p && typeof p.catch === "function") p.catch(() => {});
  }
}

function activate(v: HTMLVideoElement) {
  const src = v.dataset.src;
  if (src && !v.getAttribute("src")) {
    v.src = src;
    v.removeAttribute("data-src");
    v.load();
  }
  nurse(v);
}

export function initVideos() {
  const loops = Array.from(document.querySelectorAll<HTMLVideoElement>("video[data-loop]"));
  if (!loops.length) return;

  const tick = () => loops.forEach(nurse);
  loops.forEach((v) => {
    v.addEventListener("canplay", () => nurse(v));
    v.addEventListener("pause", () => window.setTimeout(() => nurse(v), 50));
  });
  document.addEventListener("visibilitychange", () => { if (!document.hidden) tick(); });
  window.setInterval(tick, 1000);

  // Carga diferida: el src se asigna cuando el vídeo está a menos de una pantalla.
  const lazy = loops.filter((v) => v.dataset.src);
  loops.filter((v) => !v.dataset.src).forEach(nurse);
  if (lazy.length) {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          io.unobserve(e.target);
          activate(e.target as HTMLVideoElement);
        }
      },
      { rootMargin: "100% 0px 100% 0px", threshold: 0 },
    );
    lazy.forEach((v) => io.observe(v));
  }

  // Botón de #fragmento
  const frag = document.querySelector<HTMLVideoElement>("[data-frag-video]");
  const btn = document.querySelector<HTMLButtonElement>("[data-frag-toggle]");
  if (frag && btn) {
    const labelPause = btn.dataset.labelPause || "Pausar el vídeo";
    const labelPlay = btn.dataset.labelPlay || "Reproducir el vídeo";
    const sync = () => {
      const playing = !frag.paused;
      btn.textContent = playing ? "❙❙" : "▶";
      const label = playing ? labelPause : labelPlay;
      btn.setAttribute("aria-label", label);
      btn.setAttribute("title", label);
    };
    frag.addEventListener("play", sync);
    frag.addEventListener("pause", sync);
    btn.addEventListener("click", () => {
      if (frag.paused) {
        frag.removeAttribute(USER_PAUSED);
        activate(frag);
        frag.muted = true;
        frag.play().catch(() => {});
      } else {
        frag.setAttribute(USER_PAUSED, "1");
        frag.pause();
      }
    });
    sync();
  }
}
