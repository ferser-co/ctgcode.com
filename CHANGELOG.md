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
