import es from './locales/es';
import en from './locales/en';

/**
 * Documento legal (privacidad, términos). `summary` alimenta la meta
 * description: cada página legal necesita la suya, no la del home.
 */
export type LegalDocument = {
    title: string;
    summary: string;
    intro: string;
    sections: {
        heading: string;
        body?: string;
        items?: { term?: string; text: string }[];
    }[];
};

export type LocaleSchema = {
    nav: {
        home: string;
        services: string;
        contact: string;
        cta: string;
        openMenu: string;
        closeMenu: string;
    };
    hero: {
        eyebrow: string;
        title: string;
        titlePre: string;
        titleMark: string;
        titlePost: string;
        description: string;
        file: string;
        code: string[];
        statusBuilding: string;
        statusReady: string;
        output: string;
        secondary: string;
        scroll: string;
        chipA: string;
        chipB: string;
    };
    about: {
        eyebrow: string;
        title: string;
        tag: string;
        portLabel: string;
        commitment: {
            eyebrow: string;
            title: string;
            body: string;
            signature: string;
        };
        /** Orden fijo: confianza (000°), excelencia (090°), resiliencia (180°),
         *  innovación (270°) — las cartas del bento se mapean por posición. */
        values: {
            bearing: string;
            tagline: string;
            name: string;
            body: string;
        }[];
    };
    legal: {
        /** Etiqueta mono sobre el título del documento. */
        eyebrow: string;
        updatedLabel: string;
        /** Aviso visible mientras falten datos del responsable (ver data/legal.ts). */
        pendingNotice: string;
        privacy: LegalDocument;
        terms: LegalDocument;
    };
    notFound: {
        status: string;
        title: string;
        lead: string;
        cta: string;
        coords: string;
    };
    langNotice: {
        message: string;
        action: string;
        dismiss: string;
    };
    cookies: {
        message: string;
        accept: string;
        reject: string;
    };
    footer: {
        eyebrow: string;
        claim: string;
        lead: string;
        surface: string;
        colophon: string;
        rights: string;
        nav: string;
        legal: string;
        channels: string;
        privacy: string;
        privacySlug: string;
        terms: string;
        termsSlug: string;
        email: string;
        form: {
            name: string;
            namePlaceholder: string;
            email: string;
            emailPlaceholder: string;
            message: string;
            messagePlaceholder: string;
            cta: string;
        };
        success: string;
        messageSent: string;
        error: string;
        messageError: string;
        formReset: string;
    };
};

export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export const defaultLang = 'es';

export const locales = { es, en } as const;

/**
 * Construye una ruta localizada. El idioma por defecto (es) vive en la raíz;
 * los demás bajo /<lang>. Sin redirecciones: cada idioma es una URL real.
 *   localizedPath('es')                -> '/'
 *   localizedPath('en')                -> '/en/'
 *   localizedPath('es', 'privacidad')  -> '/privacidad/'
 *   localizedPath('es', '#contact')    -> '/#contact'
 *   localizedPath('en', '#contact')    -> '/en/#contact'
 */
export function localizedPath(
    lang: keyof typeof locales,
    subpath = '',
): string {
    const base = lang === defaultLang ? '' : `/${lang}`;
    const clean = subpath.replace(/^\//, '');

    if (!clean) return `${base}/`;

    // Anclas y consultas cuelgan de la raíz del idioma: nunca barra final.
    if (clean.startsWith('#') || clean.startsWith('?')) {
        return `${base}/${clean}`;
    }

    // Rutas reales CON barra final: el SSG emite `/privacidad/index.html`, y
    // así las canónicas casan exactamente con lo que lista el sitemap (sin
    // barra, Google veía dos URLs distintas para la misma página).
    return `${base}/${clean}/`;
}

/**
 * Traduce un `pageName` (identificador interno y estable, p. ej. `privacy`)
 * al slug REAL de esa página en un idioma dado (`privacidad` en español).
 *
 * Sin esto las canónicas y los hreflang de las páginas legales apuntaban a
 * rutas inexistentes: se declaraba `/privacy/` cuando la ruta en español es
 * `/privacidad/`.
 */
export function pageSlug(
    lang: keyof typeof locales,
    pageName: string,
): string {
    switch (pageName) {
        case 'home':
            return '';
        case 'privacy':
            return locales[lang].footer.privacySlug;
        case 'terms':
            return locales[lang].footer.termsSlug;
        default:
            return pageName;
    }
}