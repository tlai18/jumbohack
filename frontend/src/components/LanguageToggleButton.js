import React from 'react';
import { useTranslation } from 'react-i18next';


function LanguageToggleButton() {
const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <button className="langToggle" onClick={toggleLanguage}>
      {i18n.language === 'en' ? 'Switch to Spanish' : 'Switch to English'}
    </button>
  );
}

export default LanguageToggleButton;

