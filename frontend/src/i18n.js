import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
            "apple": "apple",
            "banana": "banana"     
             // add other translations here
        },
      },
      de: {
        translation: {
        
            "apple": "SPANISH_APPLE",
            "banana": "SPANISH_BANANA"     
            // add other translations here
        }
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // React already safes from XSS
    },
  });

export default i18n;
