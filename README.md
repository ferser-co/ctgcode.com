# CTG Code — Sitio Web Oficial

Repositorio oficial del sitio web de **CTG Code** (ctgcode.com), un estudio independiente de ingeniería de software y desarrollo backend robusto. Este sitio está diseñado bajo una arquitectura web moderna, priorizando un rendimiento impecable, interfaces inmersivas en modo oscuro y una velocidad de carga óptima.

---

## Stack Tecnológico

El proyecto está estructurado utilizando herramientas de última generación para garantizar el menor tiempo de carga y un rendimiento sobresaliente:

- **Framework Principal:** [Astro](https://astro.build/) (Aprovechando su arquitectura nativa orientada a la Generación de Sitios Estáticos — SSG).
- **Estilos y UI:** CSS Vanilla / Componentes estilizados nativos (Enfoque limpio y estructurado sin dependencias de frameworks utilitarios externos).
- **Gestor de Paquetes:** [Bun](https://bun.sh/) (Runtime JavaScript ultrarrápido con gestor de paquetes integrado, optimizado para máximo rendimiento).

---

## Estructura del Repositorio

El proyecto se organiza bajo una arquitectura desacoplada y estática. La estructura completa es:

```
ctgcode.com/
├── src/
│   ├── content.config.ts          # Definición de colecciones de contenido (Astro Content Collections)
│   ├── layouts/
│   │   └── Layout.astro           # Componente de layout principal con SEO y metadatos OG
│   ├── pages/
│   │   ├── index.astro            # Enrutador principal con detección de idioma
│   │   ├── en/
│   │   │   ├── index.astro        # Página principal en inglés
│   │   │   └── 404.astro          # Página 404 en inglés
│   │   └── es/
│   │       ├── index.astro        # Página principal en español
│   │       └── 404.astro          # Página 404 en español
│   ├── components/
│   │   ├── global/                # Componentes globales reutilizables
│   │   └── ui/                    # Componentes UI específicos
│   ├── data/
│   │   ├── i18n.ts                # Configuración de idiomas y traducciones
│   │   ├── site.ts                # Datos generales del sitio
│   │   └── locales/
│   │       ├── en.ts              # Traducciones en inglés
│   │       └── es.ts              # Traducciones en español
│   ├── styles/
│   │   └── global.css             # Estilos globales (CSS Vanilla)
│   └── assets/                    # Recursos multimedia (imágenes, fuentes, etc.)
├── scripts/
│   ├── generate-all-og.ts         # Script maestro de generación de imágenes OG
│   └── builders/
│       ├── og-base.ts             # Template base para imágenes OG con estética del sitio
│       └── build-home.ts          # Builder específico para OG home (es/en)
├── public/
│   └── images/
│       └── og/
│           ├── es/
│           │   └── home.png       # Imagen OG para home en español
│           └── en/
│               └── home.png       # Imagen OG para home en inglés
├── astro.config.mjs               # Configuración principal de Astro (SSG, adaptadores, etc.)
├── tsconfig.json                  # Configuración de TypeScript (modo strict)
├── package.json                   # Dependencias del proyecto y scripts
├── CLAUDE.md                      # Directrices de desarrollo para asistentes de IA
├── CHANGELOG.md                   # Registro histórico de cambios del sistema
├── LICENSE.md                     # Términos de licencia y derechos de autor (Colombia)
└── README.md                      # Este archivo - documentación del proyecto
```

### Directorios Clave

- **`src/`**: Código fuente de la aplicación con arquitectura modular (páginas, componentes, layouts, datos y estilos).
- **`scripts/`**: Herramientas de automatización, incluyendo generación de imágenes OG mediante Puppeteer.
- **`public/`**: Archivos estáticos finales (imágenes generadas, favicons, fuentes y recursos globales).
- **Archivos de configuración**: `astro.config.mjs`, `tsconfig.json` y `package.json` definen el comportamiento del framework, tipado y dependencias.

---

## Inicialización del Proyecto

El entorno de desarrollo local se gestiona mediante Bun y está configurado bajo una arquitectura de Generación de Sitios Estáticos (SSG) con Astro:

### Instalar Dependencias

Descarga y vincula los módulos necesarios para el proyecto:

```bash
bun install
```

### Servidor de Desarrollo

Inicia el entorno local con recarga en vivo para validar los cambios en tiempo real:

```bash
bun run dev
```

### Generar Imágenes OG

Genera las imágenes Open Graph optimizadas para redes sociales y preview de enlaces:

```bash
bun run prebuild
```

### Compilar para Producción

Genera la versión optimizada y estática del sitio (SSG) dentro del directorio `dist/`:

```bash
bun run build
```

### Previsualizar Producción

Levanta un servidor local para probar los archivos estáticos ya compilados antes del despliegue real:

```bash
bun run preview
```
