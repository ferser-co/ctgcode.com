import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

type Locales = Record<'es' | 'en', LocaleContent>;

/** El titular es el eslogan oficial de la marca, tal cual. */
const locales: Locales = {
  es: {
    eyebrow: 'Estudio de software · Cartagena',
    headline: 'Construyendo el futuro digital desde el Caribe',
    footer:
      'Desarrollo de software a la medida y soluciones web de alto rendimiento.',
  },
  en: {
    eyebrow: 'Software studio · Cartagena',
    headline: 'Building the digital future from the Caribbean',
    footer:
      'Custom software development and high-performance web solutions.',
  },
};

export async function buildHomeOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para el Home...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [lang, content] of Object.entries(locales)) {
    const html = await createOGHTML({ ...content, logoBase64 });

    const outputPath = path.resolve(`./public/images/og/${lang}/home.png`);
    await builder.generateImage({ html, outputPath });
    console.log(`  -> Creada: public/images/og/${lang}/home.png`);
  }
}
