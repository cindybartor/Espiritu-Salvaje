/* Datos globales del sitio: enlaces, SEO y pie de página.
   Todo el copy de las secciones vive en src/content/copy.ts. */

export const SITE_URL = "https://espiritusalvaje.es";
export const AMAZON_URL = "https://amzn.eu/d/0dynUTLq";
export const INSTAGRAM_URL = "https://www.instagram.com/libroespiritusalvaje/";
export const FACEBOOK_URL = "https://www.facebook.com/IndiaSalvaje/";
export const YOUTUBE_URL = "https://www.youtube.com/@IndiaSelva";
export const LINKEDIN_URL = "https://www.linkedin.com/in/mari-carmen-pacheco-espiritusalvaje/";

export const author = {
  name: "Mari Carmen Pacheco Picazo",
  fullName: "María del Carmen Pacheco Picazo",
  /* retrato usado en los datos estructurados (Person) */
  photo: "/uploads/foto-autora-web.png",
};

export const seo = {
  title: "Espíritu Salvaje — Poemas y reflexiones de Mari Carmen Pacheco Picazo",
  description:
    "35 años de cuadernos personales. Poemas y reflexiones de una mujer que aprendió a renacer. Disponible en Amazon en tapa blanda y Kindle.",
  /* imagen apaisada 1200×630 para WhatsApp, Instagram, Facebook y LinkedIn */
  ogImage: `${SITE_URL}/uploads/og-espiritu-salvaje.jpg`,
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageAlt: "Portada del libro Espíritu Salvaje de Mari Carmen Pacheco Picazo",
};

export const bookJsonLd = {
  "@context": "https://schema.org",
  "@type": "Book",
  "@id": `${SITE_URL}/#libro`,
  name: "Espíritu Salvaje",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/uploads/cover-hero-v5.png`,
  description:
    "Treinta y cinco años de cuadernos personales convertidos en un libro de poemas y reflexiones. El viaje de la niña que escribía a los diez años hasta el renacer de la mujer adulta.",
  isbn: "979-8272706386",
  bookFormat: "https://schema.org/Paperback",
  inLanguage: "es",
  genre: ["Poesía", "Memorias"],
  keywords: "poesía, memorias, duelo, dependencia emocional, superación personal, renacer, noche oscura del alma, libro de poemas en español",
  datePublished: "2025",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    bestRating: "5",
    worstRating: "1",
    reviewCount: "6",
  },
};

/* Con "/#…" los enlaces funcionan también desde las páginas legales. */
export const navLinks = [
  { label: "Inicio", href: "/#hero" },
  { label: "El libro", href: "/#etapas" },
  { label: "Autora", href: "/#autora" },
  { label: "Reseñas", href: "/#resenas" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contacto", href: "/#contacto" },
];

export const nav = {
  cta: "Comprar en Amazon",
  ctaCompact: "Comprar",
  logoAlt: "Espíritu Salvaje, libro de Mari Carmen Pacheco Picazo",
};

export const footer = {
  author: author.fullName,
  links: [
    { label: "Instagram", href: INSTAGRAM_URL },
    { label: "Facebook", href: FACEBOOK_URL },
    { label: "YouTube", href: YOUTUBE_URL },
    { label: "LinkedIn", href: LINKEDIN_URL },
    { label: "Contacto", href: "/#contacto" },
    { label: "Comprar", href: AMAZON_URL },
    { label: "Aviso legal", href: "/aviso-legal" },
    { label: "Privacidad", href: "/privacidad" },
  ],
  legal: "© 2026 María del Carmen Pacheco Picazo · Todos los derechos reservados · Web diseñada por Bartor Estudio",
};
