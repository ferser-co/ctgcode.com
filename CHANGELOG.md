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
