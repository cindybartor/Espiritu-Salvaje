# Espíritu Salvaje

Sitio de una página del libro *Espíritu Salvaje*, de Mari Carmen Pacheco Picazo.

## Contenido

| Ruta | Qué es |
| --- | --- |
| `index.html` | La página completa (marcado, estilos y lógica) |
| `support.js` | Runtime que monta la página |
| `image-slot.js` | Componente de hueco de imagen |
| `_ds/` | Sistema de diseño: tokens, tipografías y componentes |
| `uploads/` | Imágenes y vídeos |
| `robots.txt`, `sitemap.xml` | SEO |

## Publicar

Es un sitio estático: no hay build. Sirve la carpeta tal cual.

- **Netlify / Vercel:** arrastra la carpeta, o conecta el repositorio y deja el comando de build vacío y el directorio de publicación en la raíz.
- **GitHub Pages:** Settings → Pages → Deploy from a branch → `main` / `/ (root)`.
- **Local:** `python3 -m http.server` y abre http://localhost:8000

## Dominio

`https://espiritusalvaje.es/` está fijado en el canonical, en las etiquetas Open Graph, en el JSON-LD y en el sitemap. Si cambia el dominio, hay que actualizarlo en `index.html` y `sitemap.xml`.
