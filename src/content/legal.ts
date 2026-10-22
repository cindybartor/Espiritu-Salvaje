/* Textos legales: política de privacidad y aviso legal (RGPD, LOPDGDD y LSSI-CE).
   ⚠ Rellenar antes de publicar los datos entre corchetes: NIF, domicilio y correo de contacto
   de la autora. Son obligatorios por ley (art. 10 LSSI-CE y art. 13 RGPD). */

export const TITULAR = {
  nombre: "María del Carmen Pacheco Picazo",
  nif: "[NIF de la autora]",
  domicilio: "[Localidad y provincia de la autora], España",
  correo: "[correo de contacto, p. ej. hola@espiritusalvaje.es]",
  web: "espiritusalvaje.es",
  actualizado: "22 de octubre de 2026",
};

export interface LegalSection { h: string; p: string[] }
export interface LegalDoc { slug: string; title: string; description: string; sections: LegalSection[] }

export const privacidad: LegalDoc = {
  slug: "privacidad",
  title: "Política de privacidad",
  description: "Cómo se tratan los datos personales que envías a través del formulario de contacto de espiritusalvaje.es.",
  sections: [
    {
      h: "Responsable del tratamiento",
      p: [`${TITULAR.nombre}, NIF ${TITULAR.nif}, con domicilio en ${TITULAR.domicilio}. Contacto: ${TITULAR.correo}.`],
    },
    {
      h: "Qué datos se recogen",
      p: [
        "Únicamente los que facilitas de forma voluntaria a través del formulario de contacto: nombre, correo electrónico y el texto de tu mensaje.",
        "Este sitio no utiliza cookies de analítica ni de seguimiento, ni recoge datos de navegación identificables. Los vídeos y las imágenes se sirven desde el propio sitio.",
      ],
    },
    {
      h: "Finalidad y base legal",
      p: [
        "Tus datos se utilizan exclusivamente para leer y responder a tu mensaje. La base legal es tu consentimiento, que prestas al marcar la casilla del formulario y que puedes retirar en cualquier momento escribiendo al correo de contacto.",
      ],
    },
    {
      h: "Con quién se comparten",
      p: [
        "Cloudflare, Inc., que aloja el sitio web y procesa técnicamente el envío del formulario. Web3Forms, que entrega el mensaje por correo electrónico. Google (Gmail), donde se recibe y conserva el correo. Estos proveedores actúan como encargados del tratamiento y pueden procesar datos fuera del Espacio Económico Europeo con las garantías previstas en el RGPD (cláusulas contractuales tipo o Marco de Privacidad de Datos UE-EE. UU.).",
        "Tus datos no se venden ni se ceden a terceros con fines comerciales. La compra del libro se realiza en Amazon, que trata tus datos conforme a su propia política de privacidad.",
      ],
    },
    {
      h: "Cuánto tiempo se conservan",
      p: ["Mientras sea necesario para atender tu mensaje y, como máximo, durante un año desde la última comunicación, salvo que exista una obligación legal de conservarlos más tiempo."],
    },
    {
      h: "Tus derechos",
      p: [
        `Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a ${TITULAR.correo}. También puedes presentar una reclamación ante la Agencia Española de Protección de Datos (www.aepd.es) si consideras que tus datos no se tratan correctamente.`,
      ],
    },
  ],
};

export const avisoLegal: LegalDoc = {
  slug: "aviso-legal",
  title: "Aviso legal",
  description: "Datos identificativos del titular de espiritusalvaje.es y condiciones de uso del sitio.",
  sections: [
    {
      h: "Titular del sitio web",
      p: [
        `En cumplimiento del artículo 10 de la Ley 34/2002 (LSSI-CE), se informa de que el titular de ${TITULAR.web} es ${TITULAR.nombre}, con NIF ${TITULAR.nif} y domicilio en ${TITULAR.domicilio}. Correo electrónico de contacto: ${TITULAR.correo}.`,
      ],
    },
    {
      h: "Objeto",
      p: ["Este sitio web presenta el libro Espíritu Salvaje y a su autora, y permite a los visitantes ponerse en contacto con ella. La venta del libro se realiza a través de Amazon, en sus propias condiciones."],
    },
    {
      h: "Propiedad intelectual",
      p: ["Los textos, poemas, fotografías, ilustraciones, logotipos y demás contenidos del sitio y del libro son propiedad de la autora o cuentan con su autorización. Queda prohibida su reproducción total o parcial sin permiso previo por escrito. El diseño web es obra de Bartor Estudio."],
    },
    {
      h: "Responsabilidad",
      p: ["La titular se esfuerza por mantener la información actualizada, pero no garantiza que esté libre de errores ni se responsabiliza de los daños derivados del uso del sitio o de la imposibilidad de acceder a él."],
    },
    {
      h: "Enlaces a terceros",
      p: ["Este sitio incluye enlaces a páginas de terceros, como Amazon e Instagram. La titular no controla ni se responsabiliza de sus contenidos ni de sus políticas de privacidad."],
    },
    {
      h: "Protección de datos",
      p: ["El tratamiento de los datos personales que envías a través del formulario se describe en la política de privacidad."],
    },
    {
      h: "Legislación y jurisdicción",
      p: ["Este aviso legal se rige por la legislación española. Para cualquier controversia, las partes se someten a los juzgados y tribunales del domicilio de la titular, salvo que la normativa aplicable disponga otro fuero."],
    },
  ],
};
