/* Punto de entrada del JS de la página. Cada módulo es independiente y tolera que su
   bloque no exista. Todo se desactiva con prefers-reduced-motion salvo los vídeos. */
import { initIntro } from "./intro";
import { initVideos } from "./videos";
import { initReveals } from "./reveals";
import { initWords } from "./words";
import { initDeal } from "./deal";
import { initTrail } from "./trail";
import { initContact } from "./contact";
import { initCarta } from "./carta";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

initIntro(reduce);
initVideos();
initReveals(reduce);
initWords(reduce);
initDeal(reduce);
initTrail(reduce);
initContact();
initCarta(reduce);
