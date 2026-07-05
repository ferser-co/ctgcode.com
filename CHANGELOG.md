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
