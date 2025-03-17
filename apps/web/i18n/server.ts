import { createInstance } from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslations from "../localization/en.json";
import esTranslations from "../localization/es.json";

export default async function initTranslations(locale: string) {
  const i18nInstance = createInstance();

  await i18nInstance.use(initReactI18next).init({
    resources: {
      en: {
        translation: enTranslations,
      },
      es: {
        translation: esTranslations,
      },
    },
    lng: locale,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

  return i18nInstance;
}
