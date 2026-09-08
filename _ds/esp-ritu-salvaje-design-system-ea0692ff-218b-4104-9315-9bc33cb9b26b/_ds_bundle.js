/* @ds-bundle: {"format":4,"namespace":"EspRituSalvajeDesignSystem_ea0692","components":[{"name":"NightBackdrop","sourcePath":"components/atmosphere/NightBackdrop.jsx"},{"name":"Section","sourcePath":"components/atmosphere/Section.jsx"},{"name":"BookCover","sourcePath":"components/content/BookCover.jsx"},{"name":"MarkedList","sourcePath":"components/content/MarkedList.jsx"},{"name":"Prose","sourcePath":"components/content/Prose.jsx"},{"name":"QuoteBlock","sourcePath":"components/content/QuoteBlock.jsx"},{"name":"SectionTitle","sourcePath":"components/content/SectionTitle.jsx"},{"name":"TitleAccent","sourcePath":"components/content/SectionTitle.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Eyebrow.jsx"},{"name":"LinkCta","sourcePath":"components/core/LinkCta.jsx"},{"name":"Ornament","sourcePath":"components/core/Ornament.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"NavBar","sourcePath":"components/navigation/NavBar.jsx"},{"name":"SiteFooter","sourcePath":"components/navigation/SiteFooter.jsx"}],"sourceHashes":{"components/atmosphere/NightBackdrop.jsx":"cffc5e855b98","components/atmosphere/Section.jsx":"7957f65648df","components/content/BookCover.jsx":"a1b16af6c45c","components/content/MarkedList.jsx":"f0f5c10c1780","components/content/Prose.jsx":"ac6daaabcc69","components/content/QuoteBlock.jsx":"5e7f570906d0","components/content/SectionTitle.jsx":"76c48a358f73","components/core/Button.jsx":"56c36fa344fa","components/core/Eyebrow.jsx":"cba95369a601","components/core/LinkCta.jsx":"c2effb949697","components/core/Ornament.jsx":"1468980ea1d3","components/forms/Checkbox.jsx":"e5e955ef56b4","components/forms/Input.jsx":"5b310d440ac8","components/navigation/NavBar.jsx":"85e3373ba228","components/navigation/SiteFooter.jsx":"68ebb040b52d","ui_kits/web/Hero.jsx":"7295a9b67582","ui_kits/web/Sections.jsx":"547e81d3d2a7"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.EspRituSalvajeDesignSystem_ea0692 = window.EspRituSalvajeDesignSystem_ea0692 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/atmosphere/NightBackdrop.jsx
try { (() => {
const DROPS = [{
  left: "12%",
  delay: "0s",
  dur: "12s"
}, {
  left: "28%",
  delay: "4s",
  dur: "14s"
}, {
  left: "44%",
  delay: "8s",
  dur: "10s"
}, {
  left: "62%",
  delay: "2s",
  dur: "13s"
}, {
  left: "78%",
  delay: "6s",
  dur: "11s"
}, {
  left: "90%",
  delay: "10s",
  dur: "15s"
}];
const EMBERS = [{
  left: "20%",
  delay: "0s",
  dur: "20s"
}, {
  left: "40%",
  delay: "5s",
  dur: "25s"
}, {
  left: "60%",
  delay: "10s",
  dur: "22s"
}, {
  left: "75%",
  delay: "15s",
  dur: "18s"
}];
const CSS = `
@keyframes esBloodDrip{0%{transform:translateY(0);opacity:0}10%{opacity:.6}85%{opacity:.6}100%{transform:translateY(110vh);opacity:0}}
@keyframes esFloatEmber{0%{transform:translateY(0) translateX(0);opacity:0}10%{opacity:.8}50%{transform:translateY(-50vh) translateX(20px);opacity:1}90%{opacity:.4}100%{transform:translateY(-100vh) translateX(-20px);opacity:0}}
.es-drop{position:absolute;width:4px;height:30px;top:-60px;border-radius:0 0 50% 50%;opacity:.6;filter:blur(.3px);background:linear-gradient(180deg,transparent 0%,var(--accent-wound) 50%,#8B1810 100%);animation:esBloodDrip 12s ease-in infinite}
.es-ember{position:absolute;bottom:0;width:3px;height:3px;border-radius:50%;background:var(--accent-primary);box-shadow:var(--shadow-ember);opacity:0;animation:esFloatEmber 20s ease-in-out infinite}
@media (prefers-reduced-motion:reduce){.es-drop,.es-ember{animation:none;opacity:.35}}`;

/* Escenografía de la "noche oscura": bosque en degradado, viñeta, gotas de sangre y ascuas doradas. */
function NightBackdrop({
  drops = true,
  embers = true,
  vignette = true,
  sideShadows = true,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    "aria-hidden": "true",
    style: {
      position: "absolute",
      inset: 0,
      zIndex: 0,
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, CSS), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "radial-gradient(ellipse 80% 60% at 50% 40%,rgba(94,100,62,.25) 0%,transparent 50%),radial-gradient(ellipse 40% 30% at 50% 50%,rgba(225,197,135,.15) 0%,transparent 60%),var(--gradient-night)"
    }
  }), sideShadows ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      width: "30%",
      background: "radial-gradient(ellipse 70% 90% at 0% 70%,rgba(6,16,3,.95) 0%,transparent 60%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 0,
      bottom: 0,
      right: 0,
      width: "30%",
      background: "radial-gradient(ellipse 70% 90% at 100% 70%,rgba(6,16,3,.95) 0%,transparent 60%)"
    }
  })) : null, vignette ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      background: "var(--vignette)"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      overflow: "hidden"
    }
  }, drops ? DROPS.map((d, i) => /*#__PURE__*/React.createElement("span", {
    key: "d" + i,
    className: "es-drop",
    style: {
      left: d.left,
      animationDelay: d.delay,
      animationDuration: d.dur
    }
  })) : null, embers ? EMBERS.map((e, i) => /*#__PURE__*/React.createElement("span", {
    key: "e" + i,
    className: "es-ember",
    style: {
      left: e.left,
      animationDelay: e.delay,
      animationDuration: e.dur
    }
  })) : null));
}
Object.assign(__ds_scope, { NightBackdrop });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atmosphere/NightBackdrop.jsx", error: String((e && e.message) || e) }); }

// components/atmosphere/Section.jsx
try { (() => {
const BG = {
  page: "var(--bg-page)",
  deep: "var(--bg-deep)",
  night: "var(--bg-night)",
  dawn: "linear-gradient(180deg,var(--bg-deep) 0%,var(--bg-page) 40%,var(--bg-night) 100%)"
};

/* Sección de página: ritmo vertical largo, brillo interior opcional (la luz nace de dentro). */
function Section({
  children,
  tone = "page",
  glow = "none",
  id,
  tight = false,
  align = "left",
  maxWidth = "var(--measure-page)",
  style
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: id,
    style: {
      position: "relative",
      overflow: "hidden",
      padding: (tight ? "var(--section-y-tight)" : "var(--section-y)") + " var(--page-x)",
      background: BG[tone] || BG.page,
      textAlign: align,
      ...style
    }
  }, glow === "gold" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "800px",
      height: "800px",
      transform: "translate(-50%,-50%)",
      background: "var(--glow-center)",
      pointerEvents: "none"
    }
  }) : null, glow === "wound" ? /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: "50%",
      left: "50%",
      width: "800px",
      height: "800px",
      transform: "translate(-50%,-50%)",
      background: "var(--glow-wound)",
      opacity: 0.4,
      pointerEvents: "none"
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      zIndex: 2,
      maxWidth,
      marginLeft: "auto",
      marginRight: "auto"
    }
  }, children));
}
Object.assign(__ds_scope, { Section });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/atmosphere/Section.jsx", error: String((e && e.message) || e) }); }

// components/content/BookCover.jsx
try { (() => {
/* Marco del libro: doble filete dorado, sombra negra con halo de sangre. */
function BookCover({
  src,
  alt = "Espíritu Salvaje",
  ratio = "3 / 4.5",
  placeholder,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      position: "relative",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      height: "100%",
      position: "relative",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: src ? 0 : "40px",
      border: "1px solid var(--border-hairline)",
      boxShadow: "var(--shadow-card)",
      background: src ? "var(--bg-night)" : "linear-gradient(135deg,rgba(10,24,8,.9),rgba(19,42,16,.9)), var(--glow-center)"
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: alt,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
      display: "block"
    }
  }) : /*#__PURE__*/React.createElement("div", {
    style: {
      textAlign: "center",
      color: "var(--accent-primary)",
      opacity: 0.6,
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "14px",
      letterSpacing: "3px",
      lineHeight: 2
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      display: "block",
      fontSize: "24px",
      letterSpacing: "4px",
      color: "var(--accent-primary)",
      marginBottom: "12px",
      fontWeight: 400,
      fontStyle: "normal",
      textTransform: "uppercase"
    }
  }, alt), placeholder), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: "24px",
      border: "1px solid var(--rule-faint)",
      pointerEvents: "none"
    }
  })));
}
Object.assign(__ds_scope, { BookCover });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/BookCover.jsx", error: String((e && e.message) || e) }); }

// components/content/MarkedList.jsx
try { (() => {
function Item({
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("li", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontWeight: 300,
      fontSize: "var(--type-list)",
      lineHeight: 1.6,
      color: "var(--text-heading)",
      position: "relative",
      paddingLeft: "48px",
      textAlign: "left",
      maxWidth: "var(--measure-list)",
      margin: "0 auto",
      transform: hover ? "translateX(8px)" : "none",
      transition: "transform var(--dur-mid) var(--ease)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: "6px",
      fontStyle: "normal",
      fontSize: "22px",
      color: hover ? "var(--accent-primary)" : "var(--accent-wound)",
      transition: "color var(--dur-mid) var(--ease)"
    }
  }, "\u2726"), children);
}

/* Lista marcada con ✦ en sangre oscura — el "esto es para ti si…" de la marca. */
function MarkedList({
  items = [],
  style
}) {
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "40px",
      ...style
    }
  }, items.map((it, i) => /*#__PURE__*/React.createElement(Item, {
    key: i
  }, it)));
}
Object.assign(__ds_scope, { MarkedList });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/MarkedList.jsx", error: String((e && e.message) || e) }); }

// components/content/Prose.jsx
try { (() => {
/* Cuerpo de texto largo: Inter 300/16 con interlínea 1.9. <strong> dorado, <em> crema cursiva. */
function Prose({
  children,
  size = "16px",
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "es-prose",
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 300,
      fontSize: size,
      lineHeight: "var(--lh-body)",
      color: "var(--text-body)",
      display: "flex",
      flexDirection: "column",
      gap: "24px",
      textWrap: "pretty",
      ...style
    }
  }, /*#__PURE__*/React.createElement("style", null, ".es-prose strong{color:var(--accent-primary);font-weight:400}.es-prose em{color:var(--text-heading);font-style:italic}.es-prose p{margin:0}"), children);
}
Object.assign(__ds_scope, { Prose });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/Prose.jsx", error: String((e && e.message) || e) }); }

// components/content/SectionTitle.jsx
try { (() => {
function SectionTitle({
  children,
  level = 2,
  size = "display-3",
  italic = false,
  align = "left",
  color,
  style
}) {
  const Tag = "h" + level;
  const sizes = {
    hero: "var(--type-hero)",
    "display-1": "var(--type-display-1)",
    "display-2": "var(--type-display-2)",
    "display-3": "var(--type-display-3)"
  };
  return /*#__PURE__*/React.createElement(Tag, {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: italic ? 300 : 400,
      fontStyle: italic ? "italic" : "normal",
      fontSize: sizes[size] || sizes["display-3"],
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--track-tight)",
      color: color || (italic ? "var(--accent-primary)" : "var(--text-heading)"),
      textAlign: align,
      margin: 0,
      textWrap: "pretty",
      ...style
    }
  }, children);
}

/* Énfasis interno del titular: cursiva dorada ligera. Úsalo en lugar de <em> suelto. */
function TitleAccent({
  children
}) {
  return /*#__PURE__*/React.createElement("em", {
    style: {
      fontStyle: "italic",
      fontWeight: 300,
      color: "var(--accent-primary)"
    }
  }, children);
}
Object.assign(__ds_scope, { SectionTitle, TitleAccent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/SectionTitle.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const BASE = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "10px",
  fontFamily: "var(--font-ui)",
  fontSize: "var(--type-label)",
  fontWeight: 500,
  textTransform: "uppercase",
  textDecoration: "none",
  cursor: "pointer",
  border: "1px solid var(--accent-primary)",
  background: "transparent",
  transition: "color var(--dur-mid) var(--ease), background var(--dur-mid) var(--ease), box-shadow var(--dur-mid) var(--ease), transform var(--dur-mid) var(--ease)"
};
const VARIANTS = {
  outline: {
    padding: "20px 48px",
    letterSpacing: "var(--track-label)",
    borderRadius: "var(--radius-none)",
    color: "var(--accent-primary)"
  },
  solid: {
    padding: "24px 68px",
    letterSpacing: ".42em",
    borderRadius: "var(--radius-none)",
    color: "var(--text-on-gold)",
    background: "var(--accent-primary)"
  },
  nav: {
    padding: "12px 28px",
    letterSpacing: "var(--track-label)",
    borderRadius: "var(--radius-hairline)",
    color: "var(--accent-primary)"
  }
};
const HOVER = {
  outline: {
    background: "var(--accent-primary)",
    color: "var(--text-on-gold)"
  },
  solid: {
    background: "transparent",
    color: "var(--accent-primary)",
    transform: "translateY(-2px)",
    boxShadow: "var(--shadow-lift)"
  },
  nav: {
    background: "var(--accent-primary)",
    color: "var(--text-on-gold)"
  }
};
function Button({
  variant = "outline",
  href,
  children,
  arrow = false,
  disabled = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  const Tag = href && !disabled ? "a" : "button";
  const css = {
    ...BASE,
    ...(VARIANTS[variant] || VARIANTS.outline),
    ...(hover && !disabled ? HOVER[variant] || HOVER.outline : null),
    ...(disabled ? {
      opacity: 0.4,
      cursor: "not-allowed"
    } : null),
    ...style
  };
  return /*#__PURE__*/React.createElement(Tag, {
    href: href,
    onClick: disabled ? undefined : onClick,
    disabled: Tag === "button" ? disabled : undefined,
    style: css,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false)
  }, children, arrow ? /*#__PURE__*/React.createElement("span", {
    style: {
      transform: hover ? "translateX(6px)" : "none",
      transition: "transform var(--dur-fast) var(--ease)"
    }
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Eyebrow.jsx
try { (() => {
function Eyebrow({
  children,
  rules = false,
  align = "center",
  style
}) {
  const rule = {
    display: "inline-block",
    width: "40px",
    height: "1px",
    background: "var(--accent-primary)",
    opacity: 0.5,
    verticalAlign: "middle",
    margin: "0 20px"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-eyebrow)",
      fontWeight: 400,
      letterSpacing: rules ? "var(--track-hero-eyebrow)" : "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      opacity: 0.85,
      textAlign: align,
      ...style
    }
  }, rules ? /*#__PURE__*/React.createElement("span", {
    style: rule
  }) : null, children, rules ? /*#__PURE__*/React.createElement("span", {
    style: rule
  }) : null);
}
Object.assign(__ds_scope, { Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Eyebrow.jsx", error: String((e && e.message) || e) }); }

// components/core/LinkCta.jsx
try { (() => {
function LinkCta({
  href = "#",
  children,
  arrow = true,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-block",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-label)",
      fontWeight: 500,
      letterSpacing: "var(--track-label)",
      textTransform: "uppercase",
      textDecoration: "none",
      padding: "12px 0",
      paddingLeft: hover ? "8px" : 0,
      color: hover ? "var(--text-heading)" : "var(--accent-primary)",
      borderBottom: "1px solid " + (hover ? "var(--text-heading)" : "var(--accent-primary)"),
      transition: "all var(--dur-fast) var(--ease)",
      ...style
    }
  }, children, arrow ? " →" : null);
}
Object.assign(__ds_scope, { LinkCta });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/LinkCta.jsx", error: String((e && e.message) || e) }); }

// components/core/Ornament.jsx
try { (() => {
/* Ornamento tipográfico: nunca decorativo por decorar — marca el respiro entre secciones. */
function Ornament({
  variant = "stars",
  count = 3,
  style
}) {
  if (variant === "vertical") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "1px",
        height: "80px",
        background: "var(--rule-vertical)",
        opacity: 0.4,
        margin: "0 auto",
        ...style
      }
    });
  }
  if (variant === "rule") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "1px",
        background: "var(--rule-gold)",
        opacity: 0.4,
        ...style
      }
    });
  }
  if (variant === "wound") {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        width: "100%",
        height: "2px",
        background: "var(--rule-blood)",
        opacity: 0.4,
        ...style
      }
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "20px",
      letterSpacing: "12px",
      color: "var(--accent-primary)",
      opacity: 0.5,
      textAlign: "center",
      ...style
    }
  }, Array.from({
    length: count
  }, () => "✦").join(" "));
}
Object.assign(__ds_scope, { Ornament });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Ornament.jsx", error: String((e && e.message) || e) }); }

// components/content/QuoteBlock.jsx
try { (() => {
function QuoteBlock({
  children,
  attribution,
  variant = "fragment",
  ornaments = false,
  style
}) {
  const isClosing = variant === "closing";
  return /*#__PURE__*/React.createElement("figure", {
    style: {
      margin: 0,
      maxWidth: "var(--measure-quote)",
      marginLeft: "auto",
      marginRight: "auto",
      textAlign: "center",
      ...style
    }
  }, ornaments ? /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    variant: "stars",
    style: {
      margin: "20px 0"
    }
  }) : null, /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      fontFamily: "var(--font-display)",
      fontWeight: 300,
      fontStyle: "italic",
      fontSize: isClosing ? "var(--type-quote)" : "var(--type-quote-lg)",
      lineHeight: isClosing ? 1.4 : "var(--lh-quote)",
      color: isClosing ? "var(--accent-primary)" : "var(--text-heading)",
      padding: isClosing ? "50px 20px" : 0,
      borderTop: isClosing ? "1px solid var(--border-hairline)" : "none",
      borderBottom: isClosing ? "1px solid var(--border-hairline)" : "none",
      textWrap: "pretty"
    }
  }, children), ornaments ? /*#__PURE__*/React.createElement(__ds_scope.Ornament, {
    variant: "stars",
    style: {
      margin: "20px 0"
    }
  }) : null, attribution ? /*#__PURE__*/React.createElement("figcaption", {
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-eyebrow)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: "var(--accent-primary)",
      opacity: 0.7,
      marginTop: "40px"
    }
  }, "\u2014 ", attribution) : null);
}
Object.assign(__ds_scope, { QuoteBlock });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/content/QuoteBlock.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  checked = false,
  onChange,
  id,
  style
}) {
  const fid = id || "es-check";
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      display: "flex",
      alignItems: "flex-start",
      gap: "12px",
      cursor: "pointer",
      fontFamily: "var(--font-ui)",
      fontWeight: 300,
      fontSize: "var(--type-body-sm)",
      lineHeight: 1.6,
      color: "var(--text-body)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    id: fid,
    type: "checkbox",
    checked: checked,
    onChange: onChange,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true",
    style: {
      flex: "0 0 auto",
      width: "16px",
      height: "16px",
      marginTop: "3px",
      border: "1px solid " + (checked ? "var(--border-strong)" : "var(--border-hairline)"),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "var(--accent-primary)",
      fontSize: "11px",
      lineHeight: 1,
      transition: "border-color var(--dur-fast) var(--ease)"
    }
  }, checked ? "✦" : ""), /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  multiline = false,
  required = false,
  id,
  style
}) {
  const [focus, setFocus] = React.useState(false);
  const Tag = multiline ? "textarea" : "input";
  const fid = id || "es-" + (label || type).replace(/\s+/g, "-").toLowerCase();
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      ...style
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: fid,
    style: {
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-eyebrow)",
      letterSpacing: "var(--track-eyebrow)",
      textTransform: "uppercase",
      color: focus ? "var(--accent-primary)" : "var(--text-body)",
      transition: "color var(--dur-fast) var(--ease)"
    }
  }, label) : null, /*#__PURE__*/React.createElement(Tag, {
    id: fid,
    type: multiline ? undefined : type,
    placeholder: placeholder,
    value: value,
    onChange: onChange,
    required: required,
    rows: multiline ? 4 : undefined,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      fontFamily: "var(--font-ui)",
      fontWeight: 300,
      fontSize: "var(--type-body-sm)",
      color: "var(--text-heading)",
      background: "transparent",
      border: "none",
      outline: "none",
      borderBottom: "1px solid " + (focus ? "var(--border-strong)" : "var(--border-hairline)"),
      padding: "10px 0",
      resize: multiline ? "vertical" : undefined,
      transition: "border-color var(--dur-fast) var(--ease)"
    }
  }));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/navigation/NavBar.jsx
try { (() => {
function NavLink({
  href,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? "var(--accent-primary)" : "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--type-label)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase",
      fontWeight: 400,
      transition: "color var(--dur-fast) var(--ease)",
      whiteSpace: "nowrap"
    }
  }, children);
}
function NavBar({
  brand = "Espíritu Salvaje",
  links = [],
  cta,
  ctaHref = "#comprar",
  compact = false,
  position = "fixed",
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position,
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      padding: compact ? "20px 24px" : "var(--nav-y) var(--nav-x)",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: "24px",
      background: "var(--veil-top)",
      backdropFilter: "blur(var(--blur-veil))",
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "18px",
      fontWeight: 500,
      letterSpacing: "var(--track-logo)",
      color: "var(--accent-primary)",
      textTransform: "uppercase"
    }
  }, brand), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: compact ? "20px" : "48px",
      alignItems: "center"
    }
  }, compact ? null : links.map(l => /*#__PURE__*/React.createElement(NavLink, {
    key: l.href,
    href: l.href
  }, l.label)), cta ? /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "nav",
    href: ctaHref
  }, cta) : null));
}
Object.assign(__ds_scope, { NavBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/NavBar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SiteFooter.jsx
try { (() => {
function FooterLink({
  href,
  children
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      color: hover ? "var(--accent-primary)" : "var(--text-body)",
      textDecoration: "none",
      fontSize: "var(--type-eyebrow)",
      letterSpacing: "var(--track-nav)",
      textTransform: "uppercase",
      transition: "color var(--dur-fast) var(--ease)"
    }
  }, children);
}
function SiteFooter({
  title = "Espíritu Salvaje",
  author,
  links = [],
  legal,
  style
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      padding: "80px 40px 40px",
      background: "var(--bg-night)",
      textAlign: "center",
      borderTop: "1px solid rgba(225,197,135,.1)",
      fontFamily: "var(--font-ui)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "28px",
      color: "var(--accent-primary)",
      marginBottom: "12px",
      letterSpacing: "3px",
      fontWeight: 400
    }
  }, title), author ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-label)",
      color: "var(--text-body)",
      letterSpacing: "3px",
      marginBottom: "40px",
      textTransform: "uppercase"
    }
  }, author) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "40px",
      marginBottom: "40px",
      flexWrap: "wrap"
    }
  }, links.map(l => /*#__PURE__*/React.createElement(FooterLink, {
    key: l.href,
    href: l.href
  }, l.label))), legal ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: "var(--type-fine)",
      color: "var(--text-muted)",
      letterSpacing: "2px",
      lineHeight: 1.8
    }
  }, legal) : null);
}
Object.assign(__ds_scope, { SiteFooter });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SiteFooter.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Hero.jsx
try { (() => {
const {
  NightBackdrop,
  Eyebrow,
  Button
} = window.EspRituSalvajeDesignSystem_ea0692;
const heroStyles = {
  section: {
    minHeight: "100vh",
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "120px 40px 80px",
    overflow: "hidden"
  },
  sectionMobile: {
    padding: "100px 24px 60px"
  },
  content: {
    position: "relative",
    zIndex: 10,
    textAlign: "center",
    maxWidth: "900px"
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 400,
    fontSize: "var(--type-hero)",
    lineHeight: "var(--lh-hero)",
    color: "var(--accent-primary)",
    letterSpacing: "var(--track-display)",
    textShadow: "var(--shadow-text-deep), var(--shadow-text-glow)",
    display: "block",
    margin: 0
  },
  title2: {
    fontFamily: "var(--font-display)",
    fontWeight: 700,
    fontStyle: "italic",
    fontSize: "var(--type-hero)",
    lineHeight: "var(--lh-hero)",
    background: "var(--gradient-wood)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    letterSpacing: "var(--track-display)",
    filter: "drop-shadow(0 6px 20px rgba(0,0,0,.6))",
    display: "block",
    position: "relative",
    marginTop: "-10px",
    margin: "-10px 0 0"
  },
  subtitle: {
    fontFamily: "var(--font-display)",
    fontWeight: 300,
    fontStyle: "italic",
    fontSize: "var(--type-lede)",
    color: "var(--text-heading)",
    maxWidth: "var(--measure-prose)",
    margin: "0 auto 40px",
    lineHeight: 1.5,
    opacity: 0.9
  },
  quote: {
    fontFamily: "var(--font-display)",
    fontStyle: "italic",
    fontWeight: 300,
    fontSize: "clamp(15px,1.5vw,19px)",
    color: "var(--text-body)",
    maxWidth: "560px",
    margin: "0 auto 60px",
    lineHeight: 1.8
  },
  micro: {
    marginTop: "28px",
    fontFamily: "var(--font-ui)",
    fontSize: "var(--type-eyebrow)",
    color: "var(--text-muted)",
    letterSpacing: "var(--track-nav)"
  },
  scroll: {
    position: "absolute",
    bottom: "40px",
    left: "50%",
    transform: "translateX(-50%)",
    fontFamily: "var(--font-ui)",
    color: "var(--accent-primary)",
    opacity: 0.5,
    fontSize: "10px",
    letterSpacing: "var(--track-label)",
    textTransform: "uppercase",
    zIndex: 10,
    animation: "esFadeUpDown 3s ease-in-out infinite",
    whiteSpace: "nowrap"
  }
};
function Hero({
  mobile
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "hero",
    style: {
      ...heroStyles.section,
      ...(mobile ? heroStyles.sectionMobile : null)
    }
  }, /*#__PURE__*/React.createElement("style", null, "@keyframes esFadeUpDown{0%,100%{transform:translate(-50%,0);opacity:.4}50%{transform:translate(-50%,-10px);opacity:.9}}"), /*#__PURE__*/React.createElement(NightBackdrop, null), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.content
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    rules: !mobile,
    style: {
      marginBottom: "60px"
    }
  }, "Poes\xEDas, pensamientos y reflexiones"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginBottom: "60px"
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.title
  }, "Esp\xEDritu"), /*#__PURE__*/React.createElement("h1", {
    style: heroStyles.title2
  }, "Salvaje")), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.subtitle
  }, "Una vida escrita en cuadernos:", /*#__PURE__*/React.createElement("br", null), "del amor adolescente a la libertad de renacer."), /*#__PURE__*/React.createElement("p", {
    style: heroStyles.quote
  }, "Si alguna vez te has sentido perdida, rota, enamorada,", /*#__PURE__*/React.createElement("br", null), "vulnerable o renaciendo\u2026 en estas p\xE1ginas vas a reconocerte."), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    href: "#comprar",
    arrow: true
  }, "Ll\xE9vate Esp\xEDritu Salvaje"), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.micro
  }, "DISPONIBLE EN TAPA BLANDA \xB7 KINDLE")), /*#__PURE__*/React.createElement("div", {
    style: heroStyles.scroll
  }, "Baja para descubrir \u2193"));
}
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web/Sections.jsx
try { (() => {
const {
  Section,
  QuoteBlock,
  SectionTitle,
  TitleAccent,
  Prose,
  BookCover,
  MarkedList,
  Eyebrow,
  LinkCta,
  Button,
  Ornament
} = window.EspRituSalvajeDesignSystem_ea0692;
function FragmentSection({
  mobile
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    align: "center",
    maxWidth: "var(--measure-quote)",
    style: mobile ? {
      padding: "var(--section-y-mobile) var(--page-x-mobile)"
    } : null
  }, /*#__PURE__*/React.createElement(Ornament, {
    variant: "vertical",
    style: {
      marginBottom: "40px"
    }
  }), /*#__PURE__*/React.createElement(QuoteBlock, {
    ornaments: true,
    attribution: "De Esp\xEDritu Salvaje"
  }, "Sigo siendo aquella ni\xF1a rebelde", /*#__PURE__*/React.createElement("br", null), "que quer\xEDa volar, como un \xE1guila,", /*#__PURE__*/React.createElement("br", null), "hacia lo m\xE1s alto del cielo", /*#__PURE__*/React.createElement("br", null), "y zambullirse a lo m\xE1s profundo del oc\xE9ano,", /*#__PURE__*/React.createElement("br", null), "como una sirena."), /*#__PURE__*/React.createElement(Ornament, {
    variant: "vertical",
    style: {
      marginTop: "40px"
    }
  }));
}
function AboutSection({
  mobile
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "libro",
    tone: "page",
    tight: true,
    glow: "wound",
    style: mobile ? {
      padding: "var(--section-y-mobile) var(--page-x-mobile)"
    } : null
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: mobile ? "1fr" : "1fr 1.1fr",
      gap: mobile ? "60px" : "var(--grid-gap)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(BookCover, {
    src: "../../assets/book-mockup-wrapped.png",
    style: mobile ? {
      maxWidth: "320px",
      margin: "0 auto"
    } : null
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, {
    align: "left",
    style: {
      marginBottom: "24px"
    }
  }, "Sobre el libro"), /*#__PURE__*/React.createElement(SectionTitle, {
    style: {
      marginBottom: "40px"
    }
  }, "Una vida entre ", /*#__PURE__*/React.createElement(TitleAccent, null, "dos tapas.")), /*#__PURE__*/React.createElement(Prose, null, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement("strong", null, "Esp\xEDritu Salvaje"), " es un viaje de 32 a\xF1os contado a trav\xE9s de palabras. Empieza con una ni\xF1a de 12 a\xF1os que escribe poes\xEDas para entender lo que siente, y termina con una mujer que ha renacido despu\xE9s de atravesar p\xE9rdidas, amores intensos, caos, dependencia emocional y la noche oscura del alma."), /*#__PURE__*/React.createElement("p", null, "Son textos que evolucionan contigo: la inocencia, la pasi\xF3n, el error, la ca\xEDda, el duelo y, finalmente, la reconstrucci\xF3n. ", /*#__PURE__*/React.createElement("em", null, "Romperte por completo para construirte de nuevo.")), /*#__PURE__*/React.createElement("p", null, "Una historia real, sincera, imperfecta y profundamente humana.")), /*#__PURE__*/React.createElement(LinkCta, {
    href: "#comprar",
    style: {
      marginTop: "30px"
    }
  }, "Comprar en Amazon"))));
}
function ForWhomSection({
  mobile
}) {
  return /*#__PURE__*/React.createElement(Section, {
    tone: "deep",
    align: "center",
    glow: "wound",
    maxWidth: "var(--measure-quote)",
    style: mobile ? {
      padding: "var(--section-y-mobile) var(--page-x-mobile)"
    } : null
  }, /*#__PURE__*/React.createElement(Eyebrow, {
    style: {
      marginBottom: "32px"
    }
  }, "Para ti"), /*#__PURE__*/React.createElement(SectionTitle, {
    italic: true,
    size: "display-2",
    align: "center",
    style: {
      marginBottom: "100px"
    }
  }, "Este libro es para ti si\u2026"), /*#__PURE__*/React.createElement(MarkedList, {
    items: ["…has atravesado un duelo que aún no sabes nombrar.", "…has amado de forma intensa y has tenido que aprender a soltar.", "…te reconstruyes después de una caída.", "…buscas palabras para nombrar lo que sientes.", "…te emociona la poesía honesta, sin filtros, sin disfraces."]
  }));
}
function ClosingSection({
  mobile
}) {
  return /*#__PURE__*/React.createElement(Section, {
    id: "comprar",
    tone: "dawn",
    align: "center",
    glow: "gold",
    maxWidth: "900px",
    style: mobile ? {
      padding: "var(--section-y-mobile) var(--page-x-mobile)"
    } : {
      padding: "var(--space-14) var(--page-x)"
    }
  }, /*#__PURE__*/React.createElement(SectionTitle, {
    size: "display-1",
    align: "center",
    italic: true,
    style: {
      color: "var(--text-heading)",
      marginBottom: "30px",
      lineHeight: 1.2
    }
  }, "Hay libros que se leen.", /*#__PURE__*/React.createElement("br", null), "Y hay libros en los que ", /*#__PURE__*/React.createElement(TitleAccent, null, "te reconoces.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-display)",
      fontStyle: "italic",
      fontSize: "var(--type-lede)",
      color: "var(--text-body)",
      marginBottom: "100px"
    }
  }, "Esp\xEDritu Salvaje pertenece al segundo grupo."), /*#__PURE__*/React.createElement(QuoteBlock, {
    variant: "closing",
    style: {
      margin: "80px auto"
    }
  }, "\"Hace falta tocar fondo", /*#__PURE__*/React.createElement("br", null), "para subir con m\xE1s impulso.\""), /*#__PURE__*/React.createElement(Button, {
    variant: "solid",
    href: "#",
    arrow: true
  }, "Conseguir mi ejemplar"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "28px",
      fontFamily: "var(--font-ui)",
      fontSize: "var(--type-eyebrow)",
      color: "var(--text-muted)",
      letterSpacing: "var(--track-label)"
    }
  }, "TAPA BLANDA \xB7 KINDLE"));
}
Object.assign(window, {
  FragmentSection,
  AboutSection,
  ForWhomSection,
  ClosingSection
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web/Sections.jsx", error: String((e && e.message) || e) }); }

__ds_ns.NightBackdrop = __ds_scope.NightBackdrop;

__ds_ns.Section = __ds_scope.Section;

__ds_ns.BookCover = __ds_scope.BookCover;

__ds_ns.MarkedList = __ds_scope.MarkedList;

__ds_ns.Prose = __ds_scope.Prose;

__ds_ns.QuoteBlock = __ds_scope.QuoteBlock;

__ds_ns.SectionTitle = __ds_scope.SectionTitle;

__ds_ns.TitleAccent = __ds_scope.TitleAccent;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.LinkCta = __ds_scope.LinkCta;

__ds_ns.Ornament = __ds_scope.Ornament;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.NavBar = __ds_scope.NavBar;

__ds_ns.SiteFooter = __ds_scope.SiteFooter;

})();
