import { OGImageBuilder, createOGHTML } from './og-base';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

interface LocaleContent {
  eyebrow: string;
  headline: string;
  footer: string;
}

/** `page` es el `pageName` que usa el Layout para resolver la ruta de la OG. */
interface LegalPage {
  page: 'privacy' | 'terms';
  locales: Record<'es' | 'en', LocaleContent>;
}

const pages: LegalPage[] = [
  {
    page: 'privacy',
    locales: {
      es: {
        eyebrow: 'Legal · CTG Code',
        headline: 'Política de privacidad',
        footer: 'Cómo tratamos tus datos y qué cookies usamos.',
      },
      en: {
        eyebrow: 'Legal · CTG Code',
        headline: 'Privacy policy',
        footer: 'How we handle your data and which cookies we use.',
      },
    },
  },
  {
    page: 'terms',
    locales: {
      es: {
        eyebrow: 'Legal · CTG Code',
        headline: 'Términos y condiciones',
        footer: 'Las condiciones de uso del sitio y de nuestros servicios.',
      },
      en: {
        eyebrow: 'Legal · CTG Code',
        headline: 'Terms & conditions',
        footer: 'The conditions for using the site and our services.',
      },
    },
  },
];

export async function buildLegalOG(builder: OGImageBuilder): Promise<void> {
  console.log('[i] Generando imágenes OG para las páginas legales...');

  const logoSvg = await readFile('./src/assets/logo.svg', 'utf-8');
  const logoBase64 = `data:image/svg+xml;base64,${Buffer.from(logoSvg).toString('base64')}`;

  for (const { page, locales } of pages) {
    for (const [lang, content] of Object.entries(locales)) {
      const html = await createOGHTML({ ...content, logoBase64 });

      const outputPath = path.resolve(`./public/images/og/${lang}/${page}.png`);
      await builder.generateImage({ html, outputPath });
      console.log(`  -> Creada: public/images/og/${lang}/${page}.png`);
    }
  }
}
