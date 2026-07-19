import { siteConfig } from './site';
import { locales, localizedPath, pageSlug } from './i18n';

/**
 * Datos estructurados (JSON-LD, schema.org).
 *
 * Sirven a dos públicos a la vez:
 *  - Buscadores clásicos: identifican la entidad, el nombre del sitio que se
 *    muestra en el resultado y la jerarquía de páginas.
 *  - Motores generativos / asistentes (GEO · AIO): un grafo explícito les
 *    evita adivinar qué es CTG Code, dónde opera y cómo contactarlo.
 *
 * Todo lo declarado aquí es información REAL y ya pública en el sitio.
 */

const ORG_ID = `${siteConfig.url}/#organization`;
const SITE_ID = `${siteConfig.url}/#website`;

/** Perfiles oficiales (los mismos que enlaza el footer). */
const SAME_AS = [
  'https://www.instagram.com/ctgcode/',
  'https://www.facebook.com/ctgcode',
  'https://www.linkedin.com/company/ctgcode/',
];

/**
 * Materias que domina el estudio. No es relleno: es lo que permite a un motor
 * generativo responder «¿quién hace X en Cartagena?» con esta ficha.
 */
const KNOWS_ABOUT = [
  'Desarrollo de software a la medida',
  'Desarrollo web de alto rendimiento',
  'Aplicaciones web',
  'Arquitectura de software',
  'Automatización de procesos',
  'Integraciones y APIs',
];

interface PageSchemaInput {
  lang: keyof typeof locales;
  pageName: string;
  canonicalUrl: string;
  title: string;
  description: string;
  ogImageUrl: string;
  /** Las páginas fuera del índice no aportan nada al grafo. */
  noindex: boolean;
}

/** La organización: la ficha de identidad de CTG Code. */
function organization() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: siteConfig.name,
    url: `${siteConfig.url}/`,
    logo: {
      '@type': 'ImageObject',
      url: `${siteConfig.url}/images/brand/logo.png`,
      width: 800,
      height: 800,
    },
    image: `${siteConfig.url}/images/brand/logo.png`,
    description: locales.es.hero.description,
    slogan: locales.es.hero.title,
    foundingDate: '2026',
    founder: {
      '@type': 'Person',
      name: siteConfig.author,
    },
    email: `mailto:contacto@ctgcode.com`,
    telephone: '+573052532602',
    // Solo ciudad: el estudio trabaja en remoto y no recibe clientes en un
    // local, así que declarar una calle sería falso.
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cartagena de Indias',
      addressRegion: 'Bolívar',
      addressCountry: 'CO',
    },
    areaServed: [
      { '@type': 'Country', name: 'Colombia' },
      { '@type': 'Place', name: 'Worldwide' },
    ],
    knowsAbout: KNOWS_ABOUT,
    sameAs: SAME_AS,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: 'contacto@ctgcode.com',
        telephone: '+573052532602',
        availableLanguage: ['es', 'en'],
        areaServed: 'Worldwide',
      },
    ],
  };
}

/** El sitio: de aquí sale el NOMBRE que Google muestra sobre el resultado. */
function website(lang: keyof typeof locales) {
  return {
    '@type': 'WebSite',
    '@id': SITE_ID,
    url: `${siteConfig.url}/`,
    name: siteConfig.name,
    description: locales[lang].hero.description,
    inLanguage: lang === 'es' ? 'es-CO' : 'en',
    publisher: { '@id': ORG_ID },
  };
}

/** Navegación principal: ayuda a Google a entender la estructura del sitio. */
function siteNavigation(lang: keyof typeof locales) {
  const t = locales[lang];
  const home = localizedPath(lang);

  return {
    '@type': 'SiteNavigationElement',
    '@id': `${siteConfig.url}/#navigation`,
    name: [t.nav.home, t.nav.services, t.nav.contact],
    url: [
      `${siteConfig.url}${home}`,
      `${siteConfig.url}${home}#services`,
      `${siteConfig.url}${home}#contact`,
    ],
  };
}

/**
 * Tipo de página según su papel. schema.org tiene tipos específicos para los
 * documentos legales: usarlos es más preciso que un `WebPage` genérico.
 */
function webPageType(pageName: string): string {
  switch (pageName) {
    case 'home':
      return 'WebPage';
    case 'privacy':
      return 'PrivacyPolicyPage';
    case 'terms':
      return 'TermsOfServicePage';
    default:
      return 'WebPage';
  }
}

/** Migas: home → página actual (solo cuando no es la propia home). */
function breadcrumb(
  lang: keyof typeof locales,
  pageName: string,
  canonicalUrl: string,
  title: string,
) {
  if (pageName === 'home') return null;

  return {
    '@type': 'BreadcrumbList',
    '@id': `${canonicalUrl}#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: locales[lang].nav.home,
        item: `${siteConfig.url}${localizedPath(lang)}`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: title,
        item: canonicalUrl,
      },
    ],
  };
}

/**
 * Construye el grafo completo de la página. Se devuelve `null` en las páginas
 * fuera del índice (404): no tiene sentido describirlas.
 */
export function buildSchema({
  lang,
  pageName,
  canonicalUrl,
  title,
  description,
  ogImageUrl,
  noindex,
}: PageSchemaInput): string | null {
  if (noindex) return null;

  const crumbs = breadcrumb(lang, pageName, canonicalUrl, title);

  const page: Record<string, unknown> = {
    '@type': webPageType(pageName),
    '@id': `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: title,
    description,
    inLanguage: lang === 'es' ? 'es-CO' : 'en',
    isPartOf: { '@id': SITE_ID },
    about: { '@id': ORG_ID },
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: ogImageUrl,
      width: 1200,
      height: 630,
    },
  };

  if (crumbs) page.breadcrumb = { '@id': crumbs['@id'] };

  const graph: unknown[] = [
    organization(),
    website(lang),
    siteNavigation(lang),
    page,
  ];

  if (crumbs) graph.push(crumbs);

  // Se escapa `<` para que el JSON no pueda cerrar el <script> que lo aloja.
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph })
    .replace(/</g, '\\u003c');
}

/** Alias de página → slug real, reexportado por comodidad del Layout. */
export { pageSlug };
