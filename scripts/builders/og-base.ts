import puppeteer, { Browser } from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';

interface OGTemplate {
  html: string;
  width?: number;
  height?: number;
  outputPath: string;
}

/**
 * Escena de fondo de la tarjeta. Encarna el concepto de marca «el descenso»:
 *  - `descent`: el atardecer completo, del cosmos a la arena, con el sol
 *    posado en el horizonte. Es la tarjeta canónica (home, legales).
 *  - `night`: el sol YA se hundió — solo queda el rescoldo. Para la 404,
 *    la página que «se hundió con el atardecer».
 */
type OGScene = 'descent' | 'night';

interface OGTemplateContent {
  /** Etiqueta corta en voz mono sobre el titular (metadato de la marca). */
  eyebrow: string;
  headline: string;
  /** Pie opcional bajo el titular. */
  footer?: string;
  logoBase64?: string;
  scene?: OGScene;
}

export class OGImageBuilder {
  private browser: Browser | null = null;

  async initialize() {
    this.browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  }

  async generateImage({ html, width = 1200, height = 630, outputPath }: OGTemplate) {
    if (!this.browser) throw new Error('Browser not initialized. Call initialize() first.');

    const page = await this.browser.newPage();

    try {
      // 1200×630 exactos (la medida canónica de Open Graph). Se renderiza a
      // escala 1 —no 2— para que el PNG pese lo que debe: las vistas previas
      // de WhatsApp fallan por encima de ~300 KB y el resto de plataformas
      // reescalan igualmente hacia abajo.
      await page.setViewport({ width, height, deviceScaleFactor: 1 });
      await page.setContent(html, { waitUntil: 'load' });
      // Las fuentes van embebidas (base64): esperamos a que estén listas para
      // que la captura nunca salga con la tipografía de reserva.
      await page.evaluate(() => document.fonts.ready);

      const dirPath = path.dirname(outputPath);
      await fs.mkdir(dirPath, { recursive: true });

      await page.screenshot({
        path: outputPath,
        type: 'png',
        clip: { x: 0, y: 0, width, height }
      });
    } finally {
      await page.close();
    }
  }

  async close() {
    if (this.browser) {
      await this.browser.close();
      this.browser = null;
    }
  }
}

/**
 * Fuentes del sistema de diseño embebidas como base64. Se leen de los
 * paquetes @fontsource-variable ya declarados en package.json: el prebuild
 * deja de depender de la red (antes se importaban de Google Fonts, lo que
 * hacía la generación frágil y no reproducible).
 */
let fontCssCache: string | null = null;

async function loadFontCss(): Promise<string> {
  if (fontCssCache) return fontCssCache;

  const families = [
    {
      family: 'Plus Jakarta Sans',
      file: 'node_modules/@fontsource-variable/plus-jakarta-sans/files/plus-jakarta-sans-latin-wght-normal.woff2',
    },
    {
      family: 'Inter',
      file: 'node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2',
    },
    {
      family: 'JetBrains Mono',
      file: 'node_modules/@fontsource-variable/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2',
    },
  ];

  const faces = await Promise.all(
    families.map(async ({ family, file }) => {
      const buffer = await fs.readFile(path.resolve(file));
      return `
        @font-face {
          font-family: '${family}';
          src: url(data:font/woff2;charset=utf-8;base64,${buffer.toString('base64')}) format('woff2-variations');
          font-weight: 100 900;
          font-style: normal;
          font-display: block;
        }`;
    })
  );

  fontCssCache = faces.join('\n');
  return fontCssCache;
}

/** Campo de estrellas determinista (nada de random: el build es reproducible). */
const STARS: Array<[number, number, number]> = [
  [4, 12, 2], [11, 30, 1.4], [17, 8, 1.8], [23, 22, 1.2], [29, 14, 2.2],
  [35, 33, 1.4], [41, 9, 1.6], [48, 26, 2], [54, 16, 1.3], [61, 31, 1.7],
  [67, 11, 2.1], [73, 24, 1.4], [79, 17, 1.8], [85, 29, 1.5], [91, 13, 2],
  [96, 25, 1.4], [8, 40, 1.5], [26, 43, 1.3], [45, 38, 1.6], [69, 41, 1.4],
  [88, 37, 1.7], [14, 20, 1.2], [58, 6, 1.5], [82, 7, 1.3],
];

/**
 * Tarjeta Open Graph 1200×630 con el lenguaje visual del sitio: el descenso
 * (cosmos → cielo encendido → horizonte de fuego → mar → noche) como fondo,
 * el sol posado en el horizonte con su calima y su senda de reflejos, y el
 * contenido alineado a la izquierda sobre la franja oscura que garantiza el
 * contraste del texto.
 */
export async function createOGHTML(content: OGTemplateContent): Promise<string> {
  const {
    eyebrow,
    headline,
    footer,
    logoBase64 = '',
    scene = 'descent',
  } = content;

  const fontCss = await loadFontCss();
  const isNight = scene === 'night';

  const stars = STARS.map(
    ([x, y, r]) =>
      `<circle cx="${x}%" cy="${y}%" r="${r}" fill="#f6f1e7" opacity="${(
        0.25 +
        (r - 1.2) * 0.55
      ).toFixed(2)}" />`
  ).join('');

  return `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8" />
<style>
  ${fontCss}

  * { margin: 0; padding: 0; box-sizing: border-box; }

  body {
    width: 1200px;
    height: 630px;
    overflow: hidden;
    position: relative;
    font-family: 'Inter', sans-serif;
    color: #f6f1e7;
    /* El descenso, comprimido en la tarjeta: cosmos arriba, el fuego del
       horizonte abajo, el mar hundiéndose en la noche. */
    background: linear-gradient(
      180deg,
      #0b0718 0%,
      #17103a 18%,
      #241a5c 33%,
      #5a2b86 46%,
      #97306f 57%,
      #cf4a5a 64%,
      ${isNight ? '#8d2a3a' : '#d81f27'} 69%,
      ${isNight ? '#5d2144' : '#ef5a24'} 72.5%,
      #2a1440 74%,
      #1d1236 86%,
      #0b0718 100%
    );
  }

  /* La bóveda: estrellas solo en la franja alta */
  .sky { position: absolute; inset: 0 0 55% 0; }

  /* El sol posado en el horizonte: se recorta por la mitad (clip-path) para
     que la línea del agua lo corte, como en el sitio. */
  .sun {
    position: absolute;
    left: 63%;
    top: 72.5%;
    width: 232px;
    height: 232px;
    transform: translate(-50%, -50%);
    clip-path: inset(0 0 50% 0);
  }
  .sun-core {
    position: absolute;
    inset: 32%;
    border-radius: 50%;
    background: radial-gradient(circle at 50% 42%, #ffb54d 0%, #ffb54d 46%, #ef5a24 84%, #d81f27 100%);
    box-shadow: 0 0 60px 14px rgba(239, 90, 36, .55);
    opacity: ${isNight ? '0' : '1'};
  }
  .sun-halo {
    position: absolute;
    inset: 0;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,181,77,.55) 0%, rgba(239,90,36,.28) 42%, transparent 70%);
    opacity: ${isNight ? '.45' : '1'};
  }

  /* La calima: el aire encendido pegado a la línea del horizonte */
  .haze {
    position: absolute;
    left: 63%;
    top: 72.5%;
    width: 780px;
    height: 120px;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    background: radial-gradient(ellipse at center, rgba(239,90,36,.5) 0%, rgba(216,31,39,.26) 45%, transparent 75%);
    filter: blur(26px);
    opacity: ${isNight ? '.5' : '1'};
  }

  /* La senda de reflejos sobre el agua */
  .glitter {
    position: absolute;
    left: 63%;
    top: 73.5%;
    width: 96px;
    height: 150px;
    transform: translateX(-50%);
    clip-path: polygon(34% 0, 66% 0, 100% 100%, 0 100%);
    background-image: repeating-linear-gradient(
      to bottom,
      rgba(255,181,77,.55) 0 2px,
      transparent 2px 9px
    );
    -webkit-mask-image: linear-gradient(to bottom, #000 0%, transparent 92%);
    opacity: ${isNight ? '.3' : '.85'};
  }

  /* Un velo oscuro a la izquierda: garantiza contraste AA del texto sobre
     la franja encendida sin apagar la escena. */
  .veil {
    position: absolute;
    inset: 0;
    background: linear-gradient(100deg, rgba(11,7,24,.92) 0%, rgba(11,7,24,.78) 42%, rgba(11,7,24,.12) 68%, transparent 84%);
  }

  .content {
    position: absolute;
    inset: 0;
    padding: 72px 80px;
    display: flex;
    flex-direction: column;
  }

  /* Lockup de marca */
  .brand { display: flex; align-items: center; gap: 18px; }
  .brand img { width: 64px; height: 64px; }
  .brand-name {
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 34px;
    letter-spacing: -.02em;
  }
  .brand-name span { color: #ef5a24; }

  .eyebrow {
    margin-top: auto;
    font-family: 'JetBrains Mono', monospace;
    font-size: 21px;
    font-weight: 500;
    letter-spacing: .16em;
    text-transform: uppercase;
    color: #ffb54d;
  }

  h1 {
    margin-top: 20px;
    font-family: 'Plus Jakarta Sans', sans-serif;
    font-weight: 800;
    font-size: 64px;
    line-height: 1.1;
    letter-spacing: -.025em;
    max-width: 820px;
    text-wrap: balance;
  }

  .lead {
    margin-top: 22px;
    font-size: 25px;
    line-height: 1.4;
    color: #cbb8c4;
    max-width: 760px;
  }

  /* Coordenadas: la firma náutica de la marca */
  .coords {
    margin-top: auto;
    display: flex;
    align-items: center;
    gap: 14px;
    font-family: 'JetBrains Mono', monospace;
    font-size: 18px;
    letter-spacing: .1em;
    color: rgba(246,241,231,.62);
  }
  .coords::before {
    content: '';
    width: 46px;
    height: 2px;
    background: linear-gradient(90deg, #ffb54d, #ef5a24);
  }
</style>
</head>
<body>
  <svg class="sky" xmlns="http://www.w3.org/2000/svg">${stars}</svg>

  <div class="haze"></div>
  <div class="sun">
    <div class="sun-halo"></div>
    <div class="sun-core"></div>
  </div>
  <div class="glitter"></div>
  <div class="veil"></div>

  <div class="content">
    <div class="brand">
      ${logoBase64 ? `<img src="${logoBase64}" alt="" />` : ''}
      <span class="brand-name">CTG<span>Code</span></span>
    </div>

    <p class="eyebrow">${eyebrow}</p>
    <h1>${headline}</h1>
    ${footer ? `<p class="lead">${footer}</p>` : ''}

    <p class="coords">10.4236° N — 75.5518° W · Cartagena de Indias</p>
  </div>
</body>
</html>`;
}
