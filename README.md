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

El proyecto se organiza bajo una arquitectura estática y modular, con Astro como motor principal. En vez de un árbol exhaustivo —el proyecto crece con frecuencia—, esta es la organización por directorios y, sobre todo, sus **convenciones**:

```text
ctgcode.com/
├── .github/workflows/   # Automatización CI/CD (despliegue continuo).
├── .vscode/             # Configuración local de VS Code (extensiones, launch del server).
├── public/              # Estáticos servidos tal cual: favicons, robots.txt, imágenes OG.
├── scripts/             # Tooling de build en Node: generación de assets del prebuild (OG).
└── src/                 # Código fuente del sitio.
    ├── assets/          # Recursos del frontend (logo, íconos SVG).
    ├── components/      # Componentes CO-UBICADOS, agrupados por alcance:
    │   ├── global/      #   transversales (Navbar, Footer, CookieBanner, LangNotice).
    │   ├── sections/    #   secciones de página reutilizables (About…).
    │   ├── backdrop/    #   escenografía atmosférica de fondo (Starfield, Sun, Waves…).
    │   ├── pages/       #   composición de páginas completas (Home, NotFound…).
    │   └── ui/          #   interfaz reutilizable (CTA…).
    ├── data/            # Datos y configuración: site.ts, i18n.ts, locales/{es,en}.ts.
    ├── layouts/         # Layout base (SEO, metadata OG, carga del sistema de diseño).
    ├── pages/           # Rutas del sitio (delgadas: importan y renderizan componentes).
    └── styles/          # SISTEMA DE DISEÑO transversal (solo esto; ver convenciones).
```

En la raíz viven los archivos de configuración y meta del proyecto: `astro.config.mjs`, `tsconfig.json`, `package.json`, `bun.lock`, `.gitignore` y la documentación (`README.md`, `CHANGELOG.md`, `CLAUDE.md`, `LICENSE.md`).

### Convenciones

Estas reglas mantienen el árbol predecible sin documentar cada archivo nuevo: basta con seguirlas.

- **Estilos co-ubicados.** Cada componente vive en su carpeta con su hoja al lado (`components/<cat>/Nombre/Nombre.astro` + `Nombre.css`), importada con `import "./Nombre.css"`. En `src/styles/` vive **solo** el sistema de diseño transversal: un _barrel_ `global.css` que orquesta los parciales `tokens`, `reset`, `base`, `layout`, `tones`, `identity` y `motion`. Nada de estilos de componente sueltos ahí.
- **Scripts de cliente.** El comportamiento propio de un componente se queda en el componente (Vite lo empaqueta y deduplica por página). `scripts/` en la raíz es **solo** tooling de build (Node, prebuild).
- **Escenografía de fondo.** Los elementos decorativos del «descenso» (cosmos, cirros, sol, mar, arena) son componentes propios y reutilizables en `components/backdrop/`, aislados y `aria-hidden`; cada sección monta su fondo importándolos, sin CSS duplicado.
- **Páginas delgadas.** Las rutas en `src/pages/` solo importan y renderizan su componente de `components/pages/`; los textos visibles siempre salen de `data/locales/{es,en}.ts`.

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
