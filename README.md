# CTG Code — Sitio Web Oficial

Repositorio oficial del sitio web de **CTG Code** (ctgcode.com), un estudio independiente de ingeniería de software y desarrollo backend robusto. Este sitio está diseñado bajo una arquitectura web moderna, priorizando un rendimiento impecable, interfaces inmersivas en modo oscuro y una velocidad de carga óptima.

---

## Stack Tecnológico

El proyecto está estructurado utilizando herramientas de última generación para garantizar el menor tiempo de carga y un rendimiento sobresaliente:

- **Framework Principal:** [Astro](https://astro.build/) (Aprovechando su arquitectura nativa orientada a la Generación de Sitios Estáticos — SSG).
- **Estilos y UI:** CSS Vanilla / Componentes estilizados nativos (Enfoque limpio y estructurado sin dependencias de frameworks utilitarios externos).
- **Gestor de Paquetes:** [pnpm](https://pnpm.io/) (Eficiencia en el manejo de dependencias y rendimiento en el entorno local).

---

## Estructura del Repositorio

El proyecto se organiza bajo una arquitectura desacoplada y estática, distribuyendo sus componentes principales de la siguiente forma:

- `src/`: Código fuente de la aplicación, incluyendo páginas, componentes de Astro y estilos nativos.
- `public/`: Archivos estáticos globales (imágenes, fuentes, favicons y recursos del sistema).
- `astro.config.mjs`: Archivo central de configuración y comportamiento del framework.
- `tsconfig.json`: Directrices y estándares de tipado estricto para TypeScript.
- `CLAUDE.md`: Configuración operativa y estándares de desarrollo para asistentes de IA.
- `.gitignore`: Exclusión de directorios de dependencias (`node_modules`), compilaciones de producción e información sensible de configuración local.
- `LICENSE.md`: Términos de propiedad intelectual y derechos de autor vigentes en Colombia.
- `CHANGELOG.md`: Registro estructurado y cronológico de los cambios del sistema.
- `README.md`: Documentación técnica y especificaciones del stack.

---

## Inicialización del Proyecto

El entorno de desarrollo local se gestiona mediante pnpm y está configurado bajo una arquitectura de Generación de Sitios Estáticos (SSG) con Astro:

### Instalar Dependencias

Descarga y vincula los módulos necesarios para el proyecto:

```bash
pnpm install

```

### Servidor de Desarrollo

Inicia el entorno local con recarga en vivo para validar los cambios en tiempo real:

```bash
pnpm dev

```

### Compilar para Producción

Genera la versión optimizada y estática del sitio (SSG) dentro del directorio `dist/`:

```bash
pnpm build

```

### Previsualizar Producción

Levanta un servidor local para probar los archivos estáticos ya compilados antes del despliegue real:

```bash
pnpm preview

```
