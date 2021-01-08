import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';

import translationEN from './en/translation.json';
import translationTR from './tr/translation.json';
import { initReactI18next } from 'react-i18next';

export const resources = {
    en: {
        translation: translationEN,
    },
    tr: {
        translation: translationTR,
    },
} as const;

i18n.use(detector).use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    debug: true,
    resources,
});
