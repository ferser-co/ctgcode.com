# Registro de Cambios

Todos los cambios notables en este proyecto serán documentados en este archivo bajo el estándar [Keep a Changelog](https://keepachangelog.com/).

---

## [0.1.0] - 2026-07-02

### Añadido

- **`.gitignore`**: Configuración base para omitir dependencias de Node, archivos de entorno local y directorios generados por los builds de Astro.
- **`LICENSE.md`**: Implementación de los términos de propiedad intelectual con reserva absoluta de derechos y validez legal bajo la normativa colombiana.
- **`README.md`**: Creación de la documentación inicial del proyecto, detallando la arquitectura de software, stack tecnológico e identidad de marca.
- **`CHANGELOG.md`**: Inicialización de este archivo para el seguimiento estructurado del ciclo de vida y control de versiones del repositorio.

## [0.2.0] - 2026-07-02

### Añadido

- Estructura base del framework Astro configurada para Generación de Sitios Estáticos (SSG).
- Entorno de TypeScript estricto mediante el archivo `tsconfig.json`.
- Archivo de directrices operativas `CLAUDE.md` para el contexto de asistentes de IA.

### Cambiado

- Guía de inicialización en la documentación para reflejar el uso de pnpm en lugar de npm.

## [0.2.1] - 2026-07-02

### Cambiado

- Corregida la sección de estructura del repositorio en el `README.md` para adaptarla a la configuración actual del entorno.

## [0.2.2] - 2026-07-02

### Cambiado

- Actualizada la sección del stack tecnológico en el `README.md` para remover Tailwind CSS y referencias a plataformas externas de despliegue, reflejando el enfoque de CSS nativo y pnpm.

## [0.3.0] - 2026-07-05

### Añadido

- **`src/content.config.ts`**: Definición de Astro Content Collections para gestionar contenido multiidioma con esquema tipado (título, descripción, nombre de página, idioma, imagen OG).
- **`src/pages/index.astro`**: Enrutador principal de idiomas con detección automática basada en `accept-language` header (defecto español). Incluye:
  - Diseño visual con gradiente atardecer-océano (8 pasos: púrpura oscuro → naranja → azul cielo)
  - Esferas flotantes animadas con blur y opacidad
  - Logo prominente (200x200px) con animación pulse
  - Títulos y subtítulos con fuentes Plus Jakarta Sans e Inter Variable
  - Botones de acción para rutas localizadas (es/en)
  - Redirección automática comentada para activar en producción
- **`scripts/builders/og-base.ts`**: Template actualizado para generación de imágenes OpenGraph con estética coherente:
  - Fondo con gradiente matching del sitio (135deg, 8 pasos)
  - Esferas de fondo difuminadas (naranja y azul)
  - Logo centrado de 120px con drop-shadow
  - Tipografía Plus Jakarta Sans con gradiente de texto para headlines
  - Layout vertical centrado

### Cambiado

- **`CLAUDE.md`**: Corregido gestor de paquetes de `pnpm` a `Bun` con todos los comandos actualizados:
  - `bun install` (instalar dependencias)
  - `bun run dev` (servidor de desarrollo)
  - `bun run build` (build para producción)
  - `bun run preview` (previsualización)
  - `bun run prebuild` (generar imágenes OG)
- **`README.md`**:
  - Actualizado gestor de paquetes a Bun con descripción de ventajas
  - Todos los comandos de pnpm → bun run
  - Añadida sección "Generar Imágenes OG" con comando prebuild
  - Completada y detallada la sección "Estructura del Repositorio" con árbol visual del proyecto incluyendo:
    - Rutas localizadas (`en/`, `es/`)
    - Estructura completa de `src/` (layouts, pages, components, data, styles, assets)
    - Carpeta `scripts/` con builders de OG images
    - Directorio `public/images/og/` para imágenes generadas
    - Explicación de directorios clave

### Técnico

- TypeScript estricto en todo el código
- Paleta de colores: Atardecer/Océano (#051c36, #0a1929, #5a2a60, #d65a3a, #ff8c42, #87ceeb)
- Animaciones CSS: `float` (20s-30s) para esferas, `pulse-logo` (3s) para logo
- Responsive: Media queries en 768px y 480px

## [0.4.0] - 2026-07-07

### Añadido

- **`src/components/ui/RouterPage.astro`** y **`src/styles/router-page.css`**: nueva experiencia visual de transición inicial con fondo ambientado, marca, acciones de idioma y estado de detección del navegador.
- **`src/pages/404.astro`**: página 404 personalizada con la misma estética del router y acciones de retorno al inicio.
- **`public/images/og/en/home.png`** y **`public/images/og/es/home.png`**: actualización de las imágenes Open Graph de la home para reflejar la nueva identidad visual.

### Cambiado

- **`src/pages/index.astro`**: reemplazada la landing anterior por una vista de enrutamiento inicial que detecta el idioma del navegador y redirige a la ruta correspondiente.
- **`src/layouts/Layout.astro`**: ajuste del layout principal para incluir metadatos SEO más completos, tags de Open Graph/Twitter, carga de fuentes y configuración básica de Google Ads.
- **`src/styles/global.css`**: añadidos estilos base para el esquema de color oscuro, tipografía general y reset visual del documento.
- **`README.md`**: documentación actualizada para reflejar la estructura y los scripts del proyecto en su estado actual.
- **`package.json`**: configuración del proyecto ajustada para incluir dependencias y scripts alineados con la nueva experiencia y la generación de assets.

### Técnico

- Se incorporaron nuevas dependencias para tipografías avanzadas y Partytown.
- Se reorganizó la estructura de páginas para soportar una entrada de idioma más consistente en el flujo de navegación.

## [0.5.0] - 2026-07-10

### Añadido

- **Sistema de diseño "atardecer" modular en `src/styles/`**, repartido por responsabilidad para localizar cada cosa con facilidad:
  - **`tokens.css`**: fuente de verdad del sistema — paleta cruda, temperatura (gradientes y resplandores del atardecer), color semántico, escala de spacing «marea», tipografía fluida, radios y elevación, movimiento (duraciones y curvas), grid de 12 columnas con _breakout_ y capas z-index.
  - **`reset.css`**: reset moderno del documento.
  - **`base.css`**: estilos de elementos base — titulares con jerarquía real, cuerpo, enlaces con subrayado que «atardece», código/mono y foco visible accesible.
  - **`layout.css`**: primitivas de composición (`.u-grid` con _breakout_, `.stack`, `.cluster`, `.section`).
  - **`tones.css`**: temperatura de sección (`[data-tone]` night/sea/sand) para que el sitio «atardezca» al hacer scroll.
  - **`identity.css`**: helpers de identidad de marca (`.text-sunset`, `.eyebrow`).
  - **`motion.css`**: accesibilidad del movimiento (`prefers-reduced-motion`).

### Cambiado

- **`src/styles/global.css`**: convertido en punto de entrada (_barrel_) que solo orquesta los parciales del sistema en orden de cascada; ya no contiene reglas propias.
- **`src/layouts/Layout.astro`**: carga de tipografías alineada a la variante variable de Plus Jakarta Sans.
- **`package.json`**: reemplazada la dependencia estática `@fontsource/plus-jakarta-sans` por la variable `@fontsource-variable/plus-jakarta-sans`.

### Corregido

- **Resolución de la tipografía Plus Jakarta Sans**: el paquete variable no estaba declarado y el `@import` con _specifier_ pelado fallaba en postcss (`ENOENT`), lo que rompía el renderizado de cualquier página que cargara `global.css`. Ahora la dependencia se declara y las fuentes se importan por ruta explícita (`.../index.css`).

### Técnico

- La separación en parciales conserva el mismo orden de cascada que el archivo único anterior, sin cambios visuales.
- Los estilos específicos de componentes se cargan desde su propio componente (patrón ya usado por `router-page.css`), no desde el _barrel_ global.

## [0.6.0] - 2026-07-10

### Añadido

- **`src/components/global/Navbar.astro`** y **`src/styles/navbar.css`**: cabecera responsiva del sitio — barra _sticky_ translúcida con filo de atardecer, navegación con voz mono y numeración `01/02/03`, switch de idioma (ES↔EN) y CTA. En móvil (<60rem) la navegación se colapsa en un overlay a pantalla completa con bloqueo de scroll del documento; accesible por teclado (`aria-expanded`, `inert`, cierre con `Escape`).
- **`src/components/ui/CTA.astro`** y **`src/styles/cta.css`**: botón de acción de marca «el faro del atardecer». Componente parametrizado (`href`/`size`) pero de estilo fijo: en reposo el atardecer orbita el contorno, una brasa arde en el interior, un haz de luz barre la superficie y un sol late junto al texto; al pasar/enfocar «rompe el molde» (se descuadra e inclina con una onda expansiva). Contraste AA en ambos estados y respeta `prefers-reduced-motion`.
- **`src/components/pages/Home.astro`** y **`src/styles/home.css`**: composición de la página de inicio como única fuente de la verdad, parametrizada por idioma.

### Cambiado

- **`src/assets/logo.svg`**, **`public/favicon.svg`** y **`public/favicon.ico`**: llaves separadas del sol para que el conjunto respire y quede más cuadrado y simétrico (antes parecía un «ojo» con pupila vertical).
- **`src/pages/es/index.astro`** y **`src/pages/en/index.astro`**: reducidas a delegar en el componente `Home` pasando el idioma, eliminando la estructura y los estilos duplicados entre ambas.
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: ampliado el esquema con `nav.cta`, `nav.openMenu`, `nav.closeMenu` y `hero.eyebrow`.

### Técnico

- Los estilos de cada componente se movieron a su propia hoja en `src/styles/` importada desde el componente (patrón de `router-page.css`); los componentes ya no llevan `<style>` inline.
- El comportamiento de cliente (toggle del menú, bloqueo de scroll, medición de la altura de la barra) permanece colocado en el `<script>` del propio `Navbar.astro`.

## [0.7.0] - 2026-07-10

### Añadido

- **`src/components/pages/NotFound.astro`** y **`src/styles/not-found.css`**: página 404 «el náufrago». El «0» del 404 es el sol del logo hundiéndose en el horizonte; los «4» flotan como boyas y el mar (panel con `backdrop-filter`) sumerge la mitad inferior. Textos y coordenadas de puerto en voz mono; una sola ruta con textos ES/EN según el navegador.
- **`src/components/pages/Router.astro`** y **`src/styles/router.css`**: nueva página de entrada «la carta de navegación». Una brújula construida con el sol del logo (sus 8 rayos son la rosa de los vientos) busca el rumbo y, al detectar el idioma, la aguja se asienta (resorte amortiguado) sobre la orilla `es`/`en`. Responsive con contenedor acotado al viewport.
- **`src/styles/identity.css`**: helper `.brand-mono` — marca mínima «{ ctgcode }» para páginas fuera del flujo (router, 404); las llaves se abren al hover y se recogen al pulsar.
- **`src/styles/base.css`**: barra de scroll con estética de atardecer (pulgar ámbar→coral→ocaso sobre carril de mar profundo).
- **`src/components/ui/CTA.astro`** y **`src/styles/cta.css`**: refracción térmica («aire caliente») sobre el texto del CTA al hover, con ruido de turbulencia que muta en el tiempo (SVG `feTurbulence` + `feDisplacementMap`).
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: secciones `notFound` y `router` en el esquema y ambos idiomas.

### Cambiado

- **`src/pages/404.astro`** y **`src/pages/index.astro`**: reducidas a delegar en los componentes `NotFound` y `Router`.
- **`src/pages/index.astro`**: la entrada detecta el idioma del navegador, orienta la brújula y **redirige automáticamente** (`window.location.replace`) a la ruta localizada.

### Corregido

- **Bloqueo de la interacción en móvil por el _long-press_ nativo de los `<a>`**: al mantener pulsado un enlace, el callout/preview y el arrastre nativos podían quedar colgados y capturar los toques, dejando el sitio inservible hasta recargar. Cortado a nivel global en el `a` de `base.css` (`-webkit-touch-callout`, `-webkit-user-drag`, `touch-action: manipulation`); los controles añaden `user-select: none` y `draggable="false"`.

### Eliminado

- **`src/components/ui/RouterPage.astro`** y **`src/styles/router-page.css`**: reemplazados por la nueva página de entrada (`Router.astro` / `router.css`).

### Técnico

- Las páginas fuera del flujo (`404`, entrada) siguen el patrón del proyecto: ruta delgada → componente en `components/pages/` → hoja propia en `src/styles/`.
- Toda animación respeta `prefers-reduced-motion`; en el CTA se apaga además el filtro SVG (que el `@media` global de movimiento no alcanza al SMIL).

## [0.8.0] - 2026-07-10

### Añadido

- **`src/components/global/Footer.astro`** y **`src/styles/footer.css`**: cierre del sitio «el fondo del mar» — el opuesto de la navbar. El sol del logo se hunde tras el filo superior, la navegación son marcas de profundidad de una sonda (numeración `01`–`04`), un botón de luz fría (bioluminiscencia turquesa) vuelve a la superficie, y al fondo la marca «CTGCODE» yace medio hundida, recortada y disuelta por un _mask_ hacia la oscuridad. Incluye la invitación de cierre con el CTA.
- **`src/styles/tones.css`**: nuevo tono de sección `[data-tone="abyss"]` (un paso más hondo que la noche) para el footer.
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: sección `footer` en el esquema y ambos idiomas.

### Cambiado

- **`src/data/locales/{es,en}.ts`**: el `hero` adopta el eslogan oficial de la marca — «Construyendo el futuro digital desde el Caribe» (título) y una descripción alineada («Desarrollo de software a la medida y soluciones web de alto rendimiento desde Cartagena para el mundo»). El `<title>` SEO de la home pasa a reflejar el eslogan.
- **`src/components/pages/Home.astro`**: monta el `Footer` al pie de la página.
- **`README.md`**: eslogan oficial en la introducción.

## [0.9.0] - 2026-07-11

### Añadido

- **`.github/workflows/deploy.yml`**: workflow de despliegue continuo a GitHub Pages (build de Astro y publicación automática en cada push a `main`).

### Cambiado

- **`astro.config.mjs`**: `output: "static"` explícito para el build de GitHub Pages.

### Corregido

- **CI**: dependencia `libasound` ajustada para compatibilidad con la imagen reciente de Ubuntu en el runner de despliegue.

## [0.10.0] - 2026-07-11

### Añadido

- **Hero de la home «la mesa de trabajo a la hora dorada»** (`src/components/pages/Home.astro` + `src/styles/home.css`): la primera cara del sitio, con composición asimétrica sobre una rejilla de 12 columnas. Titular fragmentado en tres voces y tres sangrías (mono → display en gradiente → remate con cursor que respira) y una ventana de código desfasada en diagonal donde un snippet TypeScript se escribe en vivo (resaltado de sintaxis hecho en build, sin JS de librerías) y, al terminar, «compila»: el sol tras la ventana se enciende, la luz de estado vira a turquesa y la salida reporta `200 OK`. Decoradores de mesa de trabajo — sello circular giratorio, stickers de código pegados torcidos, coordenadas de Cartagena al margen y línea de horizonte —, microinteracciones con propósito y entrada escalonada; todo respeta `prefers-reduced-motion`.
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: el `hero` crece con el snippet de código, el título segmentado, los estados de compilación, la salida del build y los chips.

### Corregido

- **Responsive del hero**: se saca el hero de `u-grid` y se acota con su propio contenedor, de modo que la ventana de código ya no desborda en móvil (su scroll horizontal queda contenido dentro de la ventana). El titular en gradiente deja de recortar los descendentes (la «g» de «digital»).

## [0.11.0] - 2026-07-11

### Cambiado

- **Ruteo por idioma sin redirección (SEO)**: el español (idioma por defecto) pasa a vivir en la raíz `/` como contenido real e indexable, y los idiomas adicionales bajo `/<lang>` (por ahora `/en`). Se elimina la página de enrutamiento con redirección automática, que impedía a Google rastrear el contenido real del sitio.
- **`src/layouts/Layout.astro`**: el idioma llega por prop (no por `Astro.params`), lo que da URLs canónicas correctas por idioma; se añaden alternativas `hreflang` (`es-CO`, `en`, `x-default`) y `og:locale` dinámico para SEO multiidioma. `theme-color` actualizado a `#0a1c2b` (el fondo real del sitio).
- **`Navbar` y `Footer`**: los enlaces y el intercambio de idioma se reconstruyen con el nuevo helper de rutas.
- **`src/data/i18n.ts`**: nuevo helper `localizedPath(lang, subpath)` como fuente única de rutas localizadas.

### Añadido

- **`src/components/global/LangNotice.astro`** y **`src/styles/lang-notice.css`**: aviso discreto que, solo si el idioma del navegador difiere del de la página y existe esa versión, invita a cambiar de idioma —en el idioma de destino—. No redirige de forma automática: solo cambia si el usuario pulsa, y recuerda el descarte.
- **`src/data/locales/{es,en}.ts`**: sección `langNotice`.

### Eliminado

- **`src/components/pages/Router.astro`** y **`src/styles/router.css`**: la página de enrutamiento por redirección, ya innecesaria. También la ruta `src/pages/es/` (el español ahora es la raíz) y la sección `router` del esquema i18n.

## [0.12.0] - 2026-07-11

### Añadido

- **`src/components/global/CookieBanner.astro`** y **`src/styles/cookie-banner.css`**: banner de consentimiento de cookies. Aparece solo si el usuario aún no ha decidido; al aceptar o rechazar actualiza el consentimiento en gtag y **guarda la preferencia** (no se vuelve a preguntar). No bloquea la interacción y habla el idioma de la página.
- **`src/data/locales/{es,en}.ts`**: sección `cookies`.

### Cambiado

- **`src/layouts/Layout.astro`**: implementado **Google Consent Mode v2**. El consentimiento arranca **denegado** (`ad_storage`, `ad_user_data`, `ad_personalization`, `analytics_storage`) **antes** de cargar `gtag.js`; solo se concede si el usuario acepta, y la preferencia guardada se reaplica en cada visita. Los scripts de Google Tag pasan al hilo principal (el orden que exige el consentimiento no lo garantiza Partytown). El banner se monta en todas las páginas.
- **`src/components/global/LangNotice.astro`**: espera a que se resuelva el consentimiento de cookies antes de mostrarse, para no solapar dos avisos.

## [0.13.0] - 2026-07-11

### Cambiado

- **Rendimiento · fuentes**: se cargan solo por el eje `wght` (`wght.css`; se descartan italic/opsz que no se usaban) y una sola vez (se elimina la importación duplicada entre `Layout` y `global.css`). Se **precargan** (`<link rel="preload">`) los `.woff2` latin del contenido visible para mejorar LCP y CLS. El subconjunto latin ya se descargaba solo vía `unicode-range`.
- **Rendimiento · Google Tag**: `gtag.js` se carga ahora de forma **diferida** (`requestIdleCallback` o primera interacción). El `consent default` (denegado) y los comandos `config` se encolan de inmediato, así que no se pierde medición y el arranque deja de ejecutar ~90 KB de terceros en el hilo principal.

### Eliminado

- **`@astrojs/partytown`**: quedó sin uso al diferir `gtag.js`; se retira la integración de `astro.config.mjs` y la dependencia (menos peso muerto).

## [0.14.0] - 2026-07-11

### Corregido

- **Accesibilidad · contraste (AA)**:
  - El `eyebrow` sobre secciones claras (`[data-tone="sand"]`) usaba ámbar sobre crema (ilegible); ahora vira a un ocaso oscuro mediante el nuevo token `--color-eyebrow`.
  - El selector de idioma de la navbar sube de `--color-text-subtle` a `--color-text-muted`.
  - Los índices numerados (`01/02…`) de navbar y footer suben su opacidad de 0.55 a 0.75.
- **Accesibilidad · árbol para agentes**: el aviso de idioma dejaba `role="status"` sobre un `<aside>` (rol no apropiado para ese elemento); pasa a `<div role="status">`.

## [0.15.0] - 2026-07-11

### Corregido

- **SEO · dominio de producción**: `siteConfig.url` pasa de `http://localhost:4321` a `https://ctgcode.com`. Las URLs **canónicas**, los `hreflang` y los `og:url` dejan de apuntar a `localhost` y usan el dominio real; así casan con el `sitemap-index.xml` y el `robots.txt` ya generados.

## [0.16.0] - 2026-07-12

### Cambiado

- **El footer absorbe el contacto y se convierte en el cierre de venta** (`Footer.astro` + `footer.css`): bajo «¿Zarpamos?» vive ahora el **formulario de contacto** (nombre, correo y «tu idea»), cuyo submit es el propio CTA «el faro del atardecer». Los campos son pozos en el lecho marino que se encienden en ámbar al enfocarlos, con etiquetas en la voz mono (`// nombre`). Al lado, el **directorio** en columnas: navegación (la sonda `01–04`), canales de atención (WhatsApp Business, Instagram, Facebook, LinkedIn y correo, con códigos `wa/ig/fb/in/@`) e información legal (Política de privacidad y Términos y condiciones, con rutas localizadas por idioma).
- **El ancla `#contact` vive ahora en el footer**: los CTA de la navbar y del hero aterrizan directamente en el formulario, en cualquier página que use el footer.
- **`src/components/pages/Home.astro`**: se elimina la sección independiente de contacto (absorbida por el footer).
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: el `footer` crece con el formulario (etiquetas y placeholders), los encabezados de grupo y los textos/slugs legales.

## [0.17.0] - 2026-07-14

### Añadido

- **Sección «nosotros» — «los cuatro principios** (`src/components/sections/About.astro` + `src/styles/about.css`): los valores corporativos como rosa de los vientos — Confianza es el norte (`000°`), Excelencia el este por donde sale el sol (`090°`), Resiliencia el sur de mar abierto (`180°`) e Innovación el oeste hacia lo que viene (`270°`). Bento **asimétrico** sobre el cielo ligeramente estrellado; cada carta lleva grados y apodo en voz mono más una **aguja apuntando a su rumbo**. La celda destacada es el compromiso con el cliente: una **carta cálida (tono `sand`)** que se lee mirando al cielo — «Tu éxito es nuestro puerto» — con las soluciones (robustas, escalables, de alto impacto y rendimiento, con tecnologías y estándares modernos) y la firma de terminal `$ rumbo fijado → tu éxito`.
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: sección `about` en el esquema y ambos idiomas.
- **`src/components/sections/`**: nueva carpeta para las secciones de página reutilizables.

## [0.18.0] - 2026-07-19

### Añadido

- **Rediseño «el descenso» — del espacio a la arena de Cartagena**: la home se recorre ahora como un **viaje vertical al hacer scroll**, un atardecer que cae mientras bajas. Cinco altitudes encadenadas por sus temperaturas de sección: **cosmos** (Hero) → **cirros** (About) → **horizonte de fuego** (Projects) → **mar** (Services) → **arena de noche** (Footer/Contacto). Las costuras entre secciones son continuas: cada `[data-tone]` cierra en el color exacto con el que abre el siguiente, y algunos elementos (el sello del estudio, el rescoldo del sol, los cirros) **cruzan** la frontera para que nada se corte en seco.
- **`src/components/backdrop/`**: nueva familia de componentes de **escenografía atmosférica**, aislados, reutilizables y `aria-hidden`, con su CSS y su script co-ubicados. `Starfield` (carta estelar de navegación con Crux y Polaris; al tocar el cielo nace una estrella), `Cirrus` (cirros encendidos que derivan), `Sun` (el sol desciende con el scroll medido por un anillo de sextante, con senda de reflejos), `Waves` (el mar de frente: olas que **vienen** creciendo en perspectiva y **rompen**, resacas que vuelven, y cuya geometría se **remodela** en el viaje), `CompassRose` (rosa de los vientos como marca de agua) y `NightSand` (la orilla del puerto: rompiente que va y viene, boya y grano de arena).
- **`src/styles/tokens.css`**: ampliación de paleta muestreada del atardecer real de Cartagena (índigo, violeta, magenta, rosa, carmesí, escarlata, agua-abismo, arena-noche, espuma) y nuevo gradiente maestro `--gradient-descent` (la columna del atardecer).

### Cambiado

- **Estilos co-ubicados** (`src/components/**` + `src/styles/`): cada componente pasa a vivir en su carpeta con su hoja al lado (`Nombre/Nombre.astro` + `Nombre.css`); en `src/styles/` queda **solo** el sistema de diseño transversal. Las rutas de importación de páginas y componentes se ajustan al nuevo árbol.
- **Nuevos tonos del descenso** (`src/styles/tones.css`): `cosmos`, `dusk`, `horizon` y `sand-night` (más `sea`, redefinido a azul profundo para que lea «mar»). El crema `sand` queda reservado a páginas-documento. Todos cumplen contraste AA.
- **Hero, About y Footer**: rediseño completo (escena atmosférica + contenido) sobre el nuevo lenguaje. El Hero aprovecha el ancho en pantallas grandes (consola y titular mayores) sin abultarse en portátiles chicos.
- **`src/styles/tokens.css`**: `--gradient-sunset` y `--palette-night` se rehacen hacia el arco oscuro/rojizo del concepto; superficies y sombras se retiñen del azul al púrpura-noche.

### Nota

- **Projects y Services** se montan en este pase **solo con su escena de fondo y su altura reservada** (sin contenido ni copy inventados); se rellenarán sección por sección dentro de la cáscara ya coherente.

### Técnico

- Toda la escenografía anima **solo `transform`/`opacity`**; el descenso del sol interpola por `requestAnimationFrame` (movimiento sedoso, no a saltos de scroll) y la remodelación de las olas usa SMIL (`<animate>` sobre el atributo `d`). Cada escena honra `prefers-reduced-motion` con una **«postal» estática** equivalente (se congela, no se apaga), y el SMIL se pausa por script porque la regla global de movimiento reducido no lo alcanza. La coreografía se calcula por el **progreso propio de cada sección**, así el contenido futuro de Projects/Services podrá cambiar de altura sin desincronizar sol ni olas.

## [0.19.0] - 2026-07-19

### Añadido

- **Páginas legales con contenido real** (`src/components/sections/LegalDoc/`): la Política de Privacidad y los Términos y Condiciones dejan de ser cáscaras vacías. Un único componente `LegalDoc` renderiza ambos documentos en los dos idiomas desde los locales. Estética **sobria**: sin escenografía ni movimiento, medida de lectura corta y jerarquía tipográfica limpia, pero **dentro de la paleta oscura del sitio** (aquí no hay modo claro); la marca solo asoma en el eyebrow mono, la numeración `01/02` de los artículos y el filo de atardecer bajo el título.
- **`src/data/legal.ts`**: datos del responsable (nombre, NIT, correo y fecha de revisión) centralizados en un único punto que alimenta los cuatro documentos. Expone `legalDataPending`, que saca las páginas del índice mientras falten datos.
- **Imágenes OG para todas las páginas**: `home`, `privacy`, `terms` y `404` en español e inglés (8 tarjetas). Plantilla rediseñada con el lenguaje «descenso» —el atardecer completo, el sol posado en el horizonte y su senda de reflejos—; la 404 usa una escena `night` propia (el sol ya se hundió).
- **Datos estructurados JSON-LD** (`src/data/schema.ts`): grafo con `Organization` (Cartagena de Indias, fundación 2026, correo, teléfono, redes y materias que domina el estudio), `WebSite` —de donde sale el nombre del sitio que muestra Google—, `SiteNavigationElement` y el tipo específico de cada página (`WebPage`, `PrivacyPolicyPage`, `TermsOfServicePage`) con sus migas.
- **`public/images/brand/logo.png`**: logo en ráster, requisito de Google para la propiedad `logo` de `Organization` (no admite SVG). Se reutiliza como `apple-touch-icon`.

### Cambiado

- **`public/robots.txt`**: rastreo declarado **agente por agente** para GEO/AIO (GPTBot, OAI-SearchBot, ChatGPT-User, ClaudeBot, Claude-SearchBot, anthropic-ai, Google-Extended, PerplexityBot, Applebot-Extended, CCBot y demás). Varios de ellos **no heredan** el permiso de `User-agent: *`, así que sin nombrarlos el sitio quedaba fuera de las respuestas generativas.
- **Metadatos completos** (`src/layouts/Layout.astro`): `og:site_name`, `og:image:type/width/height/alt`, `og:locale:alternate`, `twitter:image:alt` y una directiva `robots` con `max-image-preview:large` y `max-snippet:-1` (permiten la tarjeta con imagen grande y que los motores citen con contexto).
- **Generación de OG** (`scripts/builders/`): las fuentes se embeben en base64 desde los paquetes `@fontsource-variable` ya declarados, en vez de descargarlas de Google Fonts; el prebuild deja de depender de la red. Las tarjetas se renderizan a 1200×630 exactos para que pesen por debajo del umbral que WhatsApp necesita para mostrar la vista previa.

### Corregido

- **Canónicas y `hreflang` de las páginas legales**: se construían con el identificador interno de página, así que la privacidad en español declaraba `ctgcode.com/privacy/` cuando su ruta real es `/privacidad/` (y `/terms/` frente a `/terminos/`). Ahora se resuelve el **slug real de cada idioma**.
- **Títulos y descripciones duplicados**: Privacidad y Términos anunciaban el título y la descripción del Home, dejando tres URLs con los mismos metadatos. Cada documento tiene ya los suyos.
- **Barra final inconsistente**: las canónicas emitían `/privacidad` mientras el sitemap listaba `/privacidad/`; para Google eran dos URLs distintas de la misma página. `localizedPath` añade ahora la barra final a las rutas (nunca a las anclas).
- **La 404 se declara `noindex`**: antes era indexable como cualquier otra página.

### Técnico

- Los identificadores de página (`pageName`) siguen siendo estables e internos; la traducción a slug real vive en `pageSlug()` (`src/data/i18n.ts`), único punto donde se resuelve la equivalencia. El JSON-LD se omite por completo en las páginas fuera del índice y escapa `<` para que su contenido no pueda cerrar el `<script>` que lo aloja.

## [0.20.0] - 2026-07-19

### Añadido

- **Sección de proyectos en la Home — «el escaparate»** (`src/components/sections/Projects/`): con un solo trabajo entregable, la pieza NO es una rejilla esperando compañía, sino un **caso destacado a ancho completo**. El argumento son cifras verificables —rendimiento, SEO y accesibilidad medidos con PageSpeed Insights, citando herramienta y fecha— en vez de adjetivos. Dos salidas deliberadas: el sitio en producción del cliente (la prueba) y la página que engloba todo el trabajo (la continuidad).
- **`src/components/ui/ScrollShot/`**: componente reutilizable que **recorre el sitio del cliente sin salir del nuestro**. Una captura de página completa vive dentro de un marco con barra de navegador y se traslada conforme bajas; el teléfono se le superpone en una esquina y avanza a otra velocidad, porque sincronizados se leen mecánicos y desfasados dan profundidad. Sirve las capturas con `<picture>` en cadena de respaldo **AVIF → WebP → PNG**: el navegador se queda con el primer formato que entienda (642 KB en AVIF frente a 3.3 MB del PNG de reserva).
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: sección `projects` en el esquema y en ambos idiomas, con el slug localizado de la página índice (`/proyectos/` · `/projects/`).

### Cambiado

- **`src/components/pages/Home/Home.astro`**: la sección `#projects` deja de ser una cáscara con escena reservada y pasa a montar el caso destacado; la escena del sol viaja ahora dentro del propio componente.

### Técnico

- El recorrido de las capturas se ata **al marco**, no a la sección: vale 0 justo cuando el marco asoma en pantalla. Atarlo a la sección —mucho más alta y con el marco a media altura— hacía que al llegar a verlo el progreso fuera ya del 45 %, y el visitante se perdía la cabecera del sitio capturado. Además el recorrido se **limita en unidades de viewport**, porque estas capturas son larguísimas (la móvil ronda 1:19) y recorrerlas enteras las hacía pasar volando: con el tope, la velocidad queda por debajo de 1× respecto al scroll. Que no se llegue al pie es aceptable; perderse la cabecera, no.
- El contraste sobre la banda de fuego se resuelve **apartando el sol** en móvil (se corre a estribor y encoge) y con un velo oscuro bajo la tarjeta, no con sombras detrás del texto.
- Cabecera y caso comparten una sola rejilla en escritorio, de modo que la tarjeta arranca a la altura del titular sin márgenes negativos que se descuadren al cambiar el texto. Desde 90rem la tarjeta se lleva algo más de ancho (6/5 en vez de 7/5) para que las cuatro cifras entren en una sola fila.

## [0.21.0] - 2026-07-21

### Añadido

- **Sección de servicios en la Home — «la hondura»** (`src/components/sections/Services/`): el hueco reservado del mar deja de ser solo escena. La composición **no es una rejilla de tarjetas iguales**, porque los servicios no pesan igual: una pieza a ancho completo para el servicio insignia y, debajo, una retícula desnivelada 7/5 con los dos servicios de apoyo a babor —texto corrido con un filo que se enciende, sin cajas— y las preguntas frecuentes a estribor, en un aparte de filo punteado.
- **Acordeón de FAQ sin una línea de JavaScript**: `<details>`/`<summary>` con el atributo `name` compartido, que lo hace **excluyente de forma nativa** (al abrir una pregunta se cierra la anterior). El signo `+` se convierte en `−` recogiendo su propia barra vertical.
- **Nodo `FAQPage` en el grafo JSON-LD** (`src/data/schema.ts`): se inyecta **solo** en la Home, con las mismas cinco preguntas que lee una persona en el acordeón. Nunca en las páginas legales, donde ese contenido no está.
- **Logotipos del stack** (`src/assets/`): once marcas —Astro, CSS, FastAPI, htmx, JavaScript, Jinja, PostgreSQL, Python, REST API, Rust y TypeScript— sustituyen a las píldoras de texto en los tres servicios. El registro `TECH` del componente resuelve cada clave a su logo y su nombre; los locales solo guardan las claves, porque las marcas no se traducen.
- **Rótulo propio al pasar sobre cada logotipo**: reemplaza al tooltip del navegador, que llega tarde y se pinta con los colores del sistema. Voz mono ámbar sobre superficie de noche, con su puntita de anclaje.
- **La insignia del servicio destacado**: un gallardete con la estrella dentro, dibujado en SVG con el mismo trazo abierto que el resto de instrumentos del sitio.
- **Reflectores sobre el recuadro insignia**: dos haces que cuelgan de lo alto y se cruzan sobre la pieza —cálido por babor, frío por estribor—, sumados con `screen` y respirando desfasados.
- **Estrella al pulsar dentro del recuadro insignia**: misma mecánica que el cielo del hero, pero con una estrella de cinco puntas de verdad en vez de un punto con destellos en cruz.
- **`src/data/i18n.ts`** y **`src/data/locales/{es,en}.ts`**: sección `services` en el esquema y en ambos idiomas, con el slug localizado de la página índice (`/servicios/` · `/services/`).

### Cambiado

- **`src/components/pages/Home/Home.astro`**: la sección `#services` deja de ser una cáscara con escena reservada; las olas y la rosa de los vientos viajan ahora dentro del propio componente.
- **La rosa de los vientos navega a estribor** (`Home.css`): ocupa el hueco que el titular deja a su derecha en vez de quedar debajo del texto. Su anclaje pasa de porcentaje a `rem`, porque en porcentaje se descolgaba hacia el medio al crecer la sección.
- **`src/assets/astro.svg`**: el logotipo llega en un solo `path` monocromo; se separa en dos para recuperar la llama naranja de la marca.

### Técnico

- Los logotipos se pintan con `<img>` e importación `?url`, **no incrustados en línea**. `postgresql`, `rest-api` y `rust` traen su propia hoja `<style>` con clases genéricas (`.st0`, `.st1`) y `python` define degradados con ids `A`/`B`: conviviendo en un mismo documento esas clases e ids son globales y se pisan entre sí. Dentro de un `<img>` cada SVG es un documento aparte.
- **Las placas claras bajo los logotipos no son decoración**: cinco de los once vienen en negro o casi (`astro`, `jinja` y `rest-api` no declaran `fill`; `rust` es `#252422`; `htmx`, `#111111`) y sobre el azul de la sección desaparecerían. La placa en tono arena los hace legibles a todos y unifica formatos que van de `viewBox 0 0 24 24` a `0 0 630 630`.
- `astro.svg` traía dentro un `@media (prefers-color-scheme: dark)` que pintaba el logo de blanco. Dentro de un `<img>` esa consulta obedece al **tema del sistema operativo**, no al de la página: cualquiera con el SO en modo oscuro habría visto el logo blanco sobre la placa clara. Los colores quedan fijos en el propio archivo.
- Los titulares de la sección usan `text-wrap: pretty` y no el `balance` que heredan del sistema: repartir las líneas a la par dejaba media caja vacía a la derecha en móvil (el título del servicio destacado aprovechaba el 59 % del ancho; ahora, el 94 %). El título insignia lleva además su propia curva de tamaño, porque el mínimo de `--text-2xl` solo dejaba entrar dos palabras por línea a 390 px; el tope en escritorio sigue siendo el mismo.
- El recuadro insignia declara `grid-template-rows` **explícitas**: sin ellas, el `-1` con el que la columna de logotipos llega hasta abajo no tiene última línea a la que apuntar —se resuelve como `2 / 1`— y los mandaba a la fila del rótulo.
- Los haces van en `z-index: 0` con el contenido por encima. No podían ir en `z-index: -1`: el `backdrop-filter` de la tarjeta crea contexto de apilamiento y habrían quedado detrás de su propio fondo.
- La apertura del acordeón se anima con `::details-content` e `interpolate-size: allow-keywords` **acotado al bloque de FAQ**, sin tocar la raíz del documento; donde no hay soporte, la respuesta aparece de golpe.
- Sobre el `FAQPage`: desde 2023 Google reserva el resultado enriquecido de FAQ a sitios gubernamentales y de salud, así que **no va a pintar el acordeón en la SERP** de un estudio de software. Se declara igual porque cumple el otro propósito del grafo: dar a los motores generativos respuestas atribuibles sobre plazos, costos, stack, soporte y cobertura en vez de dejar que las improvisen.
- El enlace al catálogo apunta a `/servicios/` · `/services/`, que todavía no existen (mismo estado que `/proyectos/`). Los slugs ya viven en los locales, así que crear la página no obligará a tocar el componente.

## [0.22.0] - 2026-07-21

### Añadido

- **Página de proyectos — «la bitácora»** (`src/components/pages/Projects/`, rutas `/proyectos/` · `/en/projects/`): el cuaderno abierto entero, asiento por asiento, con lo que hay a bordo. No clona el Home: **el atardecer (sol, olas, cirros, la rosa que gira) es la escena del Home y aquí no se repite**; solo se hereda el cielo estrellado de la portada. El resto vive sobre la noche y se ordena por composición: numeración de asientos, voz mono, acentos cálidos y asimetría en zigzag.
- **Cuatro asientos, cada uno en su punto**: lo **entregado** (Recogras, con la captura recortada a su primer pliegue); **Helio**, el producto propio en construcción, cuyo visual es el **plano (wireframe) de su panel dibujándose** bajo una línea de escaneo —lo honesto cuando aún no hay captura—; las **tres plantillas web**, en filas intercaladas (imagen a un lado, ficha al otro, empezando y terminando con la imagen a babor); y las **tres automatizaciones**, con un **diagrama de flujo** (disparadores → núcleo → salida) por el que viajan los pulsos.
- **Textura de fondo: la carta náutica en frío** (`.log-backdrop`): rejilla de carta, dos abanicos de líneas de rumbo desde puntos opuestos, lavados fríos que respiran y un cielo que tiñe la franja alta y se disuelve en la noche —la costura portada → primer asiento es un solo lienzo, sin corte.
- **Migas de pan**, visibles (`Inicio / Proyectos`) y en el grafo JSON-LD (`BreadcrumbList`), en ambos idiomas; más un nodo `ItemList` (`src/data/schema.ts`) que enumera el inventario de la bitácora en el orden en que se lee.
- **`StackList`** (`src/components/pages/Projects/StackList.astro`): el stack de una pieza con la regla **todo íconos o todo texto**, nunca mezclado —si toda la lista tiene logo se pintan las placas (como en Servicios del Home); si alguna no lo tiene, la lista entera cae a texto.
- **Enlace «Proyectos»** en la navbar y en el footer (numeración `01…04`, idioma al `05`), con su etiqueta en `nav.projects` de ambos locales.
- **Imágenes de las tres plantillas** (`src/assets/plantilla_web_*`): servicios profesionales, negocios locales y startups, en la cadena AVIF → WebP → PNG.
- **Builder de la imagen OG de la página** (`scripts/builders/projects-og.ts`), registrado en `run-builders.ts`.
- **Micro-interacciones**: revelado escalonado al entrar en viewport, el wireframe que se dibuja solo, los pulsos del diagrama de flujo y la aguja del cierre que oscila —todo se apaga con `prefers-reduced-motion`.

### Cambiado

- **`Navbar.astro`** recibe `pageName` y con él **traduce el slug** en el conmutador de idioma; suma «Proyectos» a la navegación numerada.
- **`Footer.astro`** suma «Proyectos» al mapa del sitio y corre el idioma al índice `05`.
- **`src/data/i18n.ts`** y **`locales/{es,en}.ts`**: esquema `projectsPage` en ambos idiomas, `nav.projects` y el slug localizado (`/proyectos/` · `/projects/`) resuelto por `pageSlug`.
- **El nombre de la miga en el grafo** se limpia de la coletilla de marca: `«Proyectos — CTG Code»` → `«Proyectos»`.

### Corregido

- **El conmutador de idioma llevaba a rutas inexistentes**: desde `/privacidad/` saltaba a `/en/privacidad/` (404) porque no traducía el slug —la ruta real es `/en/privacy/`. Ahora la navbar resuelve el slug por `pageName`, así que cada idioma cae en su URL real.

### Técnico

- El CTA del cierre baja al `#contact` **de la misma página** (el footer vive en toda página) con scroll suave, en vez de navegar al Home y bajar allí —eso no tenía sentido; una flecha `↓` lo anuncia.
- Las capturas de plantilla miden `1905×770` (alguna `771`): el marco fija la relación `1905/770` y recorta con `overflow`, así el píxel de más queda fuera. La de Recogras es una página larga (`1905×7368`), que se recorta a su primer pliegue con `aspect-ratio` + máscara de fundido: se lee «esto sigue» en vez de mostrar la página entera.
- Un `grid-column` sin acotar (`.bt-head--right` del bloque de Helio) se filtraba a la cabecera de automatizaciones y le rompía la rejilla en 12 columnas fantasma; las colocaciones de rejilla quedan **acotadas a su sección**.
- La página se compone con el patrón del sistema (ruta delgada → componente en `components/pages/Projects/` → hoja co-ubicada); textos en los locales bajo `LocaleSchema`; ninguna escena de `backdrop/` del descenso salvo `Starfield` en la portada.

## [0.23.0] - 2026-07-22

### Añadido

- **Pipeline de despliegue centralizado multilingüe** (`.github/workflows/deploy.yml`): automatización en GitHub Actions para compilar la aplicación principal `ctgcode.com` y realizar la clonación y doble compilación (Español e Inglés) de las tres plantillas independientes (`plantilla-negocio-local`, `plantilla-servicios-profesionales`, `plantilla-producto-startup`).
- Soporte para el evento `repository_dispatch` (`update-projects`) que permite disparar el despliegue automático desde los repositorios individuales de cada plantilla.

### Técnico

- Integración de variables de entorno `BASE_PATH` y `PUBLIC_LOCALE` para generar las salidas estáticas en subdirectorios coordinados (`/plantilla-*/` y `/en/template-*/`) compilados directamente a la carpeta `dist/` para GitHub Pages.

## [0.23.1] - 2026-07-24

### Corregido

- **LCP móvil disparado por la animación de entrada del hero** (PageSpeed móvil ~3.7 s de LCP frente a 99 en escritorio): el elemento LCP de la portada es el texto `.hero-lead`, que entraba con un fundido (`opacity` de 0 a 1) tras un `animation-delay`. Como el reloj de la animación es de pared, en móvil (CPU y red limitados) el pintado del texto quedaba a la espera del fundido y el LCP se apilaba sobre el FCP. Ahora el texto se pinta visible en el primer frame.

### Técnico

- `@keyframes hero-rise` (`Home.css`) anima **solo `translate`** (capa de composición), nunca `opacity`: el «subir y asentarse» escalonado de la portada se conserva idéntico, pero ni el elemento LCP ni el resto del contenido esperan al fundido para hacerse visibles. Medido con throttling móvil, el _render delay_ del LCP baja de ~1459 ms a ~600 ms sin tocar el diseño ni el CLS (se mantiene en 0). Las animaciones de entrada del sistema deben mover `translate`/`transform`, no `opacity`, en cualquier contenido que pueda ser el elemento LCP.

## [0.23.2] - 2026-07-24

### Cambiado

- **Las secciones bajo el pliegue del Home (About, Projects, Services) difieren su render** con `content-visibility: auto` + `contain-intrinsic-size`: el navegador salta el maquetado y pintado de esas escenas —cargadas de SVG decorativo (carta náutica, cirros, sol, olas, rosa de los vientos, diagramas de flujo)— hasta que se acercan al viewport. El primer render solo trabaja el hero. `auto` memoriza el alto real de cada sección tras su primer pintado, así que el reparto sigue sin saltos (CLS 0) y las revelaciones al hacer scroll y los anclajes (`#services`, `#contact`) funcionan igual.

### Técnico

- Medido con CPU 4×, el maquetado inicial baja de **364 ms (1251 nodos) a 153 ms (291 nodos)** y el recálculo de estilo de **315 ms a 45 ms** —el hilo principal ya no procesa toda la página antes del primer pintado—, mejorando LCP y Speed Index en móvil. Es solo salto de trabajo fuera de pantalla: ni la estructura, ni los estilos, ni el orden visual cambian.

## [0.23.3] - 2026-07-24

### Corregido

- **Error en consola por CSP: el beacon de Cloudflare Web Analytics quedaba bloqueado**. La `Content-Security-Policy` (`Layout.astro`) no incluía el origen de Cloudflare Insights, así que `static.cloudflareinsights.com/beacon.min.js` violaba `script-src` y no cargaba —bajaba la nota de _Prácticas recomendadas_ (errores de navegador en consola). Se añade `https://static.cloudflareinsights.com` a `script-src` y `https://cloudflareinsights.com` a `connect-src` (el destino del envío de métricas).

### Cambiado

- **CSP endurecida contra XSS** (auditoría de _Prácticas recomendadas_): se añaden `base-uri 'self'` (impide inyectar etiquetas `<base>` que secuestren rutas relativas) y `object-src 'none'` (prohíbe `<object>`/`<embed>`/plugins). Sin fallback a `default-src`, `base-uri` quedaba abierto; ahora la política cubre ambos vectores que Lighthouse marcaba.

## [0.24.0] - 2026-07-24

### Añadido

- **Notificación automática a IndexNow tras cada despliegue** (`.github/workflows/deploy.yml`, job `indexnow`): al terminar el deploy, un job lee el `sitemap-index.xml` ya publicado, extrae las 14 URLs (páginas ES/EN + las seis de plantillas) y las envía a `www.bing.com/indexnow` (cualquier endpoint IndexNow comparte el aviso con Yandex y demás, pero se usa el de Bing porque es donde se verifica en Bing Webmaster Tools). Así el recrawl se dispara al instante en vez de esperar al rastreo periódico, complementando los sitemaps ya registrados. La clave de verificación vive en `public/234f3a26e66c418f8923f549ce9fd3a9.txt`.

### Técnico

- El job `indexnow` corre con `needs: deploy` (solo si el despliegue tuvo éxito). Reintenta la lectura del sitemap hasta 6 veces (por la propagación del CDN) y registra en el log el payload y la respuesta de IndexNow; si no logra reunir URLs o IndexNow responde un código distinto de 200/202, **falla de forma visible** (`::error::` + `exit 1`) para poder diagnosticarlo —el despliegue ya se publicó en un job aparte, así que esto no revierte nada—. No usa `set -e` a propósito: rompía el reintento (`[ -n "$urls" ] && break` abortaba el job con el sitemap aún sin propagar). El payload JSON se arma con `jq`; se envían todas las URLs del sitemap en cada despliegue (el sitio es pequeño e IndexNow admite reenvíos).

## [0.24.1] - 2026-07-24

### Corregido

- **El sol con su sextante (y su resplandor) se cortaban en seco en la costura entre secciones** del Home. La causa: `content-visibility: auto` (añadido en 0.23.2) impone `contain: paint`, que recorta cualquier desbordamiento a la caja de la sección —y las escenas de Projects (el sol) y Services (olas + rosa de los vientos) están hechas justo para desbordar y fluir hacia la sección vecina, sin `overflow: hidden`—. Se retira `content-visibility` de `.projects` y `.services`; las escenas vuelven a cruzar la costura sin corte. Se conserva en `.about`, que ya recortaba con `overflow: hidden` (misma caja, sin regresión visual) y sigue difiriendo su render.

