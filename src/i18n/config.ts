import i18n from 'i18next';
import detector from 'i18next-browser-languagedetector';
import Backend from 'i18next-chained-backend';
import LocalStorageBackend from 'i18next-localstorage-backend';
import HttpApi from 'i18next-http-backend'; // fallback http load
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

i18n.use(Backend)
    .use(detector)
    .use(initReactI18next)
    .init({
        lng: 'en',
        fallbackLng: 'en',
        backend: {
            backends: [
                LocalStorageBackend, // primary
                HttpApi, // fallback
            ],
            backendOptions: [
                {
                    // prefix for stored languages
                    prefix: 'i18next_res_',

                    // expiration
                    expirationTime: 7 * 24 * 60 * 60 * 1000,

                    // Version applied to all languages, can be overriden using the option `versions`
                    defaultVersion: '',

                    // language versions
                    versions: {},

                    // can be either window.localStorage or window.sessionStorage. Default: window.localStorage
                    store: window.localStorage,
                },
                {
                    loadPath: '/locales/{{lng}}/{{ns}}.json', // xhr load path for my own fallback
                },
            ],
        },
        debug: true,
        resources,
    });

export default i18n;
