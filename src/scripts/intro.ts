/* Cortina de intro. Intenta reproducir con sonido; si el navegador lo bloquea, sigue sin
   sonido. Se cierra al terminar el vídeo, si hay error, al pulsar "Saltar" o a los 20 s
   (failsafe), con un fundido de 0,9 s. Con movimiento reducido se cierra al instante. */
export function initIntro(reduce: boolean) {
  const root = document.querySelector<HTMLElement>("[data-intro]");
  if (!root) return;
  const video = root.querySelector("video");
  const soundBtn = root.querySelector<HTMLButtonElement>("[data-intro-sound]");
  const skipBtn = root.querySelector<HTMLButtonElement>("[data-intro-skip]");
  if (!video || !soundBtn || !skipBtn) { root.remove(); return; }

  if (reduce) { root.remove(); return; }

  let done = false;
  let sound = false;
  const LABEL_ON = "Silenciar";
  const LABEL_OFF = "Activar sonido";

  const setLabel = () => {
    const label = sound ? LABEL_ON : LABEL_OFF;
    soundBtn.textContent = label;
    soundBtn.setAttribute("aria-label", label);
  };

  const end = () => {
    if (done) return;
    done = true;
    root.classList.add("is-fading");
    window.setTimeout(() => {
      try { video.pause(); video.removeAttribute("src"); video.load(); } catch { /* noop */ }
      root.remove();
    }, 950);
  };

  video.addEventListener("ended", end);
  video.addEventListener("error", end);
  skipBtn.addEventListener("click", end);
  soundBtn.addEventListener("click", () => {
    sound = !sound;
    video.muted = !sound;
    if (sound) {
      if (video.volume < 0.2) video.volume = 0.9;
      video.play().catch(() => {});
    }
    setLabel();
  });

  // Con sonido primero; los navegadores sólo lo permiten si ya hubo interacción.
  video.muted = false;
  video.volume = 0.9;
  const attempt = video.play();
  if (attempt && typeof attempt.then === "function") {
    attempt
      .then(() => { sound = true; setLabel(); })
      .catch(() => {
        video.muted = true;
        sound = false;
        setLabel();
        video.play().catch(end);
      });
  }

  window.setTimeout(end, 20000);
}
