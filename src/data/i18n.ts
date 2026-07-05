import es from './locales/es';
import en from './locales/en';

export type LocaleSchema = {
    nav: {
        home: string;
        services: string;
        contact: string;
    };
    hero: {
        title: string;
        description: string;
    };
};

export const languages = {
    es: 'Español',
    en: 'English',
} as const;

export const defaultLang = 'es';

export const locales = { es, en } as const;