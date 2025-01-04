import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslations from './locales/en.json';
import frTranslations from './locales/fr.json';
import esTranslations from './locales/es.json';
import ruTranslations from './locales/ru.json';
import geTranslations from './locales/ge.json';

// Vérifier si une langue est déjà définie dans le localStorage, sinon utiliser 'en' comme valeur par défaut
const savedLanguage = localStorage.getItem('language') || 'en';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: enTranslations },
      fr: { translation: frTranslations },
      es: { translation: esTranslations },
      ru: { translation: ruTranslations },
      ge: { translation: geTranslations },
    },
    lng: savedLanguage, // Charger la langue depuis le localStorage ou utiliser 'en' par défaut
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;

