import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import React, { useEffect } from 'react';
import LanguageToggleButton from '../components/LanguageToggleButton'
const Navbar = () => {
        console.log("running navbar")
        const googleTranslateElementInit = () => {
                new window.google.translate.TranslateElement({ pageLanguage: 'en', layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT }, 'google_translate_element')
        }
        useEffect(() => {
                const addScript = document.createElement('script');
                addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
                document.body.appendChild(addScript);
                window.googleTranslateElementInit = googleTranslateElementInit;
            
                // Cleanup function
                return () => {
                    document.body.removeChild(addScript);
                    delete window.googleTranslateElementInit;
                };
        }, []);

        
        const { t } = useTranslation();

        return (
                <navbar>
                        
                        <div className="navElem"><Link className="MLL" to="/" >My Lingual Lawyer</Link></div>
                        <div className="navElem"><Link to="/lawyer" style={{color: "white"}}>{t('Find a lawyer')}</Link></div>
                        <div className="navElem"><Link to="/history" >{t('Legal Guidebook')}</Link></div>
                        <div className="navElem"><Link to="/contact" >{t('Contact Us')}</Link></div>
                        <div className="navElem" id="langbar">Select a language: <div id="google_translate_element"></div> </div>
                        {/* <div><LanguageToggleButton className="langToggle"/></div> */}

                </navbar>
        )
}

export default Navbar;