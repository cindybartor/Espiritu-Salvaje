// Genera favicon.png, apple-touch-icon.png y la imagen Open Graph 1200×630.
// Uso: npm run og  (regenera favicon.png, apple-touch-icon.png y uploads/og-espiritu-salvaje.jpg)
import sharp from "sharp";
import { readFileSync } from "node:fs";
import { join } from "node:path";

const root = process.argv[2] ?? process.cwd();
const pub = join(root, "public");
const assets = join(root, "src", "assets", "uploads");

const svg = readFileSync(join(pub, "favicon.svg"));
await sharp(svg, { density: 384 }).resize(48, 48).png().toFile(join(pub, "favicon.png"));
await sharp(svg, { density: 384 }).resize(180, 180).png().toFile(join(pub, "apple-touch-icon.png"));

// Fondo: verde noche con halo dorado que nace del centro-derecha (donde está el libro).
const bg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <radialGradient id="g" cx="68%" cy="50%" r="55%">
      <stop offset="0%" stop-color="#E1C587" stop-opacity=".22"/>
      <stop offset="45%" stop-color="#132A10" stop-opacity=".6"/>
      <stop offset="100%" stop-color="#061003" stop-opacity="1"/>
    </radialGradient>
  </defs>
  <rect width="1200" height="630" fill="#0A1808"/>
  <rect width="1200" height="630" fill="url(#g)"/>
  <rect x="0" y="626" width="1200" height="4" fill="#570503" opacity=".8"/>
</svg>`);

const cover = await sharp(join(assets, "cover-hero-v5.png")).resize({ height: 560 }).toBuffer();
const coverMeta = await sharp(cover).metadata();
const logo = await sharp(join(assets, "logo-navbar-v2.png")).resize({ width: 520 }).toBuffer();
const logoMeta = await sharp(logo).metadata();
const sub = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="560" height="120">
  <text x="0" y="28" font-family="Georgia, serif" font-style="italic" font-size="26" fill="#FDF3D0" fill-opacity=".9">Poesías, pensamientos y reflexiones</text>
  <text x="0" y="74" font-family="Arial, Helvetica, sans-serif" font-size="15" letter-spacing="4" fill="#E1C587" fill-opacity=".85">MARI CARMEN PACHECO PICAZO</text>
  <text x="0" y="108" font-family="Arial, Helvetica, sans-serif" font-size="13" letter-spacing="3" fill="#FDF3D0" fill-opacity=".55">DISPONIBLE EN AMAZON · TAPA DURA · TAPA BLANDA · KINDLE</text>
</svg>`);

await sharp(bg)
  .composite([
    { input: cover, left: 1200 - (coverMeta.width ?? 350) - 90, top: Math.round((630 - 560) / 2) },
    { input: logo, left: 90, top: 190 },
    { input: sub, left: 90, top: 190 + (logoMeta.height ?? 93) + 36 },
  ])
  .jpeg({ quality: 88, mozjpeg: true })
  .toFile(join(pub, "uploads", "og-espiritu-salvaje.jpg"));

console.log("ok", coverMeta.width, logoMeta.height);
