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

Cloudflare Pages: build `npm run build`, salida `dist/`, variable `NODE_VERSION=22`. El formulario lo sirve la
Pages Function `functions/api/contacto.ts` vía Web3Forms (gratuito); único secreto: `WEB3FORMS_KEY`,
obtenido en web3forms.com con el Gmail del libro (las entregas llegan a ese correo).

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
| Vídeos, OG y favicon                  | `public/uploads/`, `public/`            |
| Formulario de contacto (backend)      | `functions/api/contacto.ts`             |
| Fuentes Fraunces y Renaissance        | `public/fonts/`                         |

Las FAQ de `copy.ts` alimentan a la vez la sección y el JSON-LD `FAQPage`.

## Notas de implementación

- Los reveals usan `animation-timeline: view()`. Donde no hay soporte, `src/scripts/reveals.ts`
  activa `html[data-es-fallback]` y un IntersectionObserver conmuta `data-shown`.
- Las secciones recortan con `overflow: clip` y no con `overflow: hidden`: `hidden` crea un
  contenedor de scroll y desactiva `view()`; `clip` recorta sin crearlo.
- Con `prefers-reduced-motion` se desactivan todas las animaciones y se muestra el estado final.
- La intro se muestra en cada visita (decisión de la autora). Sin JavaScript no aparece.
