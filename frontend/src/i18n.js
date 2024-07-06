import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import ptTranslation from './locales/pt.json'
import enTranslation from './locales/en.json'

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    detection: {
      order: ['subdomain', 'navigator']
    },
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    },
    resources: {
      en: {
        translation: enTranslation
      },
      pt: {
        translation: ptTranslation
      }
    }
  })

export default i18n
