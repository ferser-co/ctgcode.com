# CTG Code — Sitio Web Oficial

> **Construyendo el futuro digital desde el Caribe.**

Repositorio oficial del sitio web de **CTG Code** (ctgcode.com), un estudio independiente de ingeniería de software y desarrollo backend robusto. Este sitio está diseñado bajo una arquitectura web moderna, priorizando un rendimiento impecable, interfaces inmersivas en modo oscuro y una velocidad de carga óptima.

---

## Stack Tecnológico

El proyecto está estructurado utilizando herramientas de última generación para garantizar el menor tiempo de carga y un rendimiento sobresaliente:

- **Framework Principal:** [Astro](https://astro.build/) (Aprovechando su arquitectura nativa orientada a la Generación de Sitios Estáticos — SSG).
- **Estilos y UI:** CSS Vanilla / Componentes estilizados nativos (Enfoque limpio y estructurado sin dependencias de frameworks utilitarios externos).
- **Gestor de Paquetes:** [Bun](https://bun.sh/) (Runtime JavaScript ultrarrápido con gestor de paquetes integrado, optimizado para máximo rendimiento).

---

## Estructura del Repositorio

El proyecto se organiza bajo una arquitectura estática y modular, con Astro como motor principal. La estructura actual del repositorio es la siguiente:

```text
ctgcode.com/
├── .github/                       # Automatización de GitHub (CI/CD).
│   └── workflows/                 # Workflows de GitHub Actions.
│       └── deploy.yml             # Despliegue continuo del sitio a GitHub Pages.
├── .vscode/                       # Configuración local de VS Code para el proyecto: extensiones recomendadas y lanzamiento del servidor.
│   ├── extensions.json            # Recomendaciones de extensiones para trabajar con Astro y el flujo del proyecto.
│   └── launch.json                # Configuración de depuración para iniciar el servidor de desarrollo.
├── public/                        # Archivos estáticos servidos directamente por el sitio.
│   ├── favicon.ico                # Favicon del sitio en formato .ico.
│   ├── favicon.svg                # Favicon del sitio en formato .svg.
│   ├── robots.txt                 # Reglas para rastreadores; enlaza el sitemap.
│   └── images/                    # Recursos gráficos públicos, incluyendo imágenes Open Graph.
│       └── og/                    # Imágenes OG generadas para compartir enlaces en redes sociales.
│           ├── en/                # Versión en inglés de la imagen OG de la home.
│           │   └── home.png       # Imagen OG para la landing page en inglés.
│           └── es/                # Versión en español de la imagen OG de la home.
│               └── home.png       # Imagen OG para la landing page en español.
├── scripts/                       # Scripts de automatización y generación de assets del proyecto.
│   ├── builders/                  # Builders específicos para generar recursos como imágenes OG.
│   │   ├── home-og.ts             # Genera las imágenes OG de la página de inicio para los idiomas soportados.
│   │   └── og-base.ts             # Define la plantilla base y el motor para renderizar imágenes OG con Puppeteer.
│   └── run-builders.ts            # Script principal que orquesta la generación de assets prebuild.
├── src/                           # Código fuente principal del sitio.
│   ├── assets/                    # Recursos estáticos del frontend, como logos e ilustraciones.
│   │   └── logo.svg               # Logo principal de CTG Code usado en la interfaz y en las OG images.
│   ├── components/                # Componentes reutilizables del sitio.
│   │   ├── global/                # Componentes globales y de alcance transversal.
│   │   │   ├── CookieBanner.astro # Consentimiento de cookies (Google Consent Mode v2), denegado por defecto.
│   │   │   ├── Footer.astro       # Cierre del sitio «el fondo del mar»: invitación, mapa, colofón y marca hundida.
│   │   │   ├── LangNotice.astro   # Aviso de idioma disponible (cambio manual, sin redirección automática).
│   │   │   └── Navbar.astro       # Cabecera responsiva: marca, navegación, switch de idioma, CTA y menú móvil.
│   │   ├── pages/                 # Componentes de composición de páginas completas.
│   │   │   ├── Home.astro         # Composición de la home (única fuente de la verdad), parametrizada por idioma.
│   │   │   └── NotFound.astro     # Página 404 «el náufrago».
│   │   └── ui/                    # Componentes de interfaz reutilizables.
│   │       └── CTA.astro          # Botón de acción de marca («el faro del atardecer»).
│   ├── content.config.ts          # Definición de colecciones de contenido y su validación con Astro Content Collections.
│   ├── data/                      # Datos estáticos y configuración reutilizable.
│   │   ├── i18n.ts                # Definición de idiomas y estructura de traducciones.
│   │   ├── site.ts                # Datos generales del sitio como nombre, autor y URL base.
│   │   └── locales/               # Archivos de traducciones por idioma.
│   │       ├── en.ts              # Traducciones en inglés.
│   │       └── es.ts              # Traducciones en español.
│   ├── layouts/                   # Layouts base de la aplicación.
│   │   └── Layout.astro           # Layout principal con SEO, metadata OG y carga de estilos globales.
│   ├── pages/                     # Páginas y rutas del sitio.
│   │   ├── 404.astro              # Página 404 (delega en el componente NotFound).
│   │   ├── index.astro            # Home en español (idioma por defecto en la raíz; delega en Home).
│   │   └── en/                    # Idiomas adicionales bajo /<lang>.
│   │       └── index.astro        # Home en inglés (delega en el componente Home).
│   └── styles/                    # Sistema de diseño y estilos de componentes.
│       ├── global.css             # Punto de entrada (barrel) que orquesta el sistema de diseño.
│       ├── tokens.css             # Tokens del sistema: paleta, color, spacing, tipografía, movimiento…
│       ├── reset.css              # Reset moderno del documento.
│       ├── base.css               # Elementos base: titulares, texto, enlaces, código, foco y scrollbar.
│       ├── layout.css             # Primitivas de composición (grid con breakout, stack, cluster, section).
│       ├── tones.css              # Temperatura de sección ([data-tone]): el atardecer al hacer scroll.
│       ├── identity.css           # Helpers de identidad de marca (.text-sunset, .eyebrow, .brand-mono).
│       ├── motion.css             # Accesibilidad del movimiento (prefers-reduced-motion).
│       ├── cookie-banner.css      # Estilos del banner de cookies (components/global/CookieBanner.astro).
│       ├── cta.css                # Estilos del CTA de marca (components/ui/CTA.astro).
│       ├── footer.css             # Estilos del footer (components/global/Footer.astro).
│       ├── home.css               # Estilos de la home (components/pages/Home.astro).
│       ├── lang-notice.css        # Estilos del aviso de idioma (components/global/LangNotice.astro).
│       ├── navbar.css             # Estilos de la navbar (components/global/Navbar.astro).
│       └── not-found.css          # Estilos de la 404 (components/pages/NotFound.astro).
├── .gitignore                     # Reglas de Git para ignorar artefactos generados y archivos locales no deseados.
├── astro.config.mjs               # Configuración principal de Astro y sus integraciones.
├── bun.lock                       # Lockfile de Bun para reproducibilidad de dependencias.
├── CHANGELOG.md                   # Registro histórico de cambios del proyecto.
├── CLAUDE.md                      # Instrucciones de desarrollo y contexto para asistentes de IA.
├── LICENSE.md                     # Términos de licencia del proyecto.
├── package.json                   # Dependencias, scripts y metadatos del proyecto.
├── README.md                      # Documentación principal del repositorio.
└── tsconfig.json                  # Configuración de TypeScript con tipado estricto.
```

### Directorios clave

- **.vscode/**: Mantiene configuraciones útiles para el desarrollo en VS Code, como extensiones recomendadas y un launch task para el servidor.
- **public/**: Aloja los recursos estáticos accesibles directamente desde la web, como favicons e imágenes OG.
- **scripts/**: Centraliza la automatización de generación de assets y otros procesos auxiliares del prebuild.
- **src/**: Contiene la lógica, las páginas, los componentes y los estilos del sitio.

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
