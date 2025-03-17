"use client";

import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../localization/en.json";
import esTranslations from "../localization/es.json";

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: enTranslations,
    },
    es: {
      translation: esTranslations,
    },
  },
  lng: "es",
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
  react: {
    useSuspense: false,
  },
});

export default i18next;
