import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

type Locales = Record<'es' | 'en', LocaleContent>;

/**
 * La 404 usa la escena `night`: el sol YA se hundió. Es coherente con el
 * texto de la página («esta página se hundió con el atardecer») y distingue
 * la tarjeta de un vistazo cuando alguien comparte un enlace roto.
 */
const locales: Locales = {
  es: {
    eyebrow: 'error 404 · ruta no encontrada',
    headline: 'Esta página se hundió con el atardecer',
    footer: 'El faro sigue encendido para guiarte de vuelta a puerto.',
  },
  en: {
    eyebrow: 'error 404 · route not found',
    headline: 'This page sank with the sunset',
    footer: 'The lighthouse is still on to guide you back to harbor.',
  },
};

export async function buildNotFoundOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para la 404...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const [lang, content] of Object.entries(locales)) {
    const html = await createOGHTML({ ...content, logoBase64, scene: 'night' });

    const outputPath = path.resolve(`./public/images/og/${lang}/404.png`);
    await builder.generateImage({ html, outputPath });
    console.log(`  -> Creada: public/images/og/${lang}/404.png`);
  }
}
