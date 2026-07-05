# Directrices de Desarrollo — CTG Code

Este archivo contiene los comandos frecuentes, estándares de código y la arquitectura del proyecto para guiar las interacciones de desarrollo con IA.

## Comandos Frecuentes

- Iniciar entorno de desarrollo: `bun run dev`
- Generar assets (imágenes OG, etc.): `bun run prebuild`
- Construir para producción (SSG): `bun run build`
- Previsualizar build estático local: `bun run preview`
- Instalar dependencias: `bun install`

## Stack Tecnológico

- Frontend: Astro (Configurado en modo SSG por defecto para máximo rendimiento).
- Estilos: CSS Vanilla / Componentes estilizados nativos (No usar Tailwind CSS).
- Gestor de Paquetes: Bun.

## Estándares de Código y Estilos

- Tipado: TypeScript estricto (`astro/tsconfigs/strict`).
- Estilado: Diseñar interfaces con CSS limpio, estructurado y con enfoque artesanal/humano. Evitar estructuras sobrecargadas de clases utilitarias genéricas.
- Idiomas: Código, variables, rutas y configuración técnica en inglés. Documentación general (`README.md`, `CHANGELOG.md`) y commits en español.
- Mensajes de Commit: Seguir estrictamente el estándar de _Conventional Commits_ en minúsculas (ej. `feat:`, `fix:`, `chore:`, `docs:`).

## Arquitectura

- Frontend desacoplado (SSG): El sitio se compila a HTML/CSS/JS estático.
- Backend independiente: El backend funciona exclusivamente como un receptor de datos externo y no interfiere en el renderizado de la interfaz.
