# Espíritu Salvaje — landing (Astro)

Página única del libro **Espíritu Salvaje**, de Mari Carmen Pacheco Picazo. Recreación en Astro
del prototipo de `design_handoff_espiritu_salvaje/`, con la misma estructura de proyecto que el
sitio de Bartor: componentes `.astro`, CSS con tokens y scripts vanilla, sin React en el cliente.

## Comandos

```bash
npm install
npm run dev       # http://localhost:4321
npm run build     # genera dist/
npm run preview
```

Netlify: `npm run build` → publica `dist/` (ver `netlify.toml`).

## Dónde se edita cada cosa

| Qué                                   | Dónde                                   |
| ------------------------------------- | --------------------------------------- |
| Textos de todas las secciones         | `src/content/copy.ts`                   |
| Enlaces (Amazon, Instagram), SEO, pie | `src/content/site.ts`                   |
| Tokens (colores, tipografía, espacios)| `src/styles/tokens/*.css`               |
| Ajustes globales y keyframes          | `src/styles/global.css`                 |
| Componentes del sistema de diseño     | `src/components/ds/`                    |
| Una sección = un componente           | `src/components/sections/`              |
| Orden de las secciones                | `src/pages/index.astro`                 |
| `<head>` (meta, OG, JSON-LD)          | `src/layouts/Base.astro`                |
| Interacciones                         | `src/scripts/` (intro, reveals, words, deal, para, trail, videos) |
| Imágenes (se optimizan a WebP)        | `src/assets/uploads/`                   |
| Vídeos y portada para Open Graph      | `public/uploads/`                       |
| Fuentes Fraunces y Renaissance        | `public/fonts/`                         |

Las FAQ de `copy.ts` alimentan a la vez la sección y el JSON-LD `FAQPage`.

## Notas de implementación

- Los reveals usan `animation-timeline: view()`. Donde no hay soporte, `src/scripts/reveals.ts`
  activa `html[data-es-fallback]` y un IntersectionObserver conmuta `data-shown`.
- Las secciones recortan con `overflow: clip` y no con `overflow: hidden`: `hidden` crea un
  contenedor de scroll y desactiva `view()`; `clip` recorta sin crearlo.
- Con `prefers-reduced-motion` se desactivan todas las animaciones y se muestra el estado final.
- La intro se muestra en cada visita (como en el prototipo). Sin JavaScript no aparece.
