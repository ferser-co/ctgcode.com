import es from './locales/es';
import en from './locales/en';

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
 *   localizedPath('es')            -> '/'
 *   localizedPath('en')            -> '/en/'
 *   localizedPath('es', '#contact') -> '/#contact'
 *   localizedPath('en', '#contact') -> '/en/#contact'
 */
export function localizedPath(
    lang: keyof typeof locales,
    subpath = '',
): string {
    const base = lang === defaultLang ? '' : `/${lang}`;
    const clean = subpath.replace(/^\//, '');
    return `${base}/${clean}`;
}