import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  headline: string;
  footer: string;
}

type Locales = Record<'es' | 'en', LocaleContent>;

const locales: Locales = {
  es: {
    headline: 'Desarrollo de Software a la Medida, sin intermediarios',
    footer: 'Desde Cartagena para el mundo',
  },
  en: {
    headline: 'Custom Software Development, no middlemen',
    footer: 'From Cartagena to the world',
  },
};

export async function buildHomeOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para el Home...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [lang, content] of Object.entries(locales)) {
    const html = createOGHTML({
      headline: content.headline,
      footer: content.footer,
      logoBase64,
    });

    const outputPath = path.resolve(`./public/images/og/${lang}/home.png`);
    await builder.generateImage({ html, outputPath });
    console.log(`  -> Creada: public/images/og/${lang}/home.png`);
  }
}