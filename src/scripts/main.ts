/* Punto de entrada del JS de la página. Cada módulo es independiente y tolera que su
   bloque no exista. Todo se desactiva con prefers-reduced-motion salvo los vídeos. */
import { initIntro } from "./intro";
import { initVideos } from "./videos";
import { initReveals } from "./reveals";
import { initWords } from "./words";
import { initDeal } from "./deal";
import { initPara } from "./para";
import { initTrail } from "./trail";
import { initContact } from "./contact";

const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

initIntro(reduce);
initVideos();
initReveals(reduce);
initWords(reduce);
initDeal(reduce);
initPara(reduce);
initTrail(reduce);
initContact();
