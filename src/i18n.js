import { initReactI18next } from "react-i18next";
import i18n from "i18next";

import translationBG from './locales/bg/translation.json';
import translationEN from './locales/en/translation.json';

// the translations
const resources = {
  bg: {
    translation: translationBG
  },
  en: {
    translation: translationEN
  }
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    // react: {
    //   useSuspense: false
    // },
    keySeparator: false, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

export default i18n;