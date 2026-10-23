import { defineConfig } from "astro/config";

// Sitio estático de una sola página. Se publica en Netlify desde `dist/`.
export default defineConfig({
  site: "https://espiritusalvaje.es",
  trailingSlash: "ignore",
  // CSS embebido en el HTML: una sola petición bloqueante menos antes del primer pintado.
  build: { inlineStylesheets: "always" },
  image: {
    // Las imágenes de `src/assets/uploads` se convierten a WebP en el build.
    service: { entrypoint: "astro/assets/services/sharp" },
  },
});
