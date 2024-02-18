import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageToggleButton from '../components/LanguageToggleButton'
const Navbar = () => {
        
        const { t } = useTranslation();

        return (
                <header>
                                
                                
                                        
                        <div className="navElem"><Link className="MLL" to="/" >My Legal Lawyer</Link></div>
                        <div className="navElem"><Link to="/Temp" style={{color: "white"}}>{t('Find a lawyer')}</Link></div>
                        <div className="navElem"><Link to="/history" >{t('Legal Guidebook')}</Link></div>
                        <div className="navElem"><Link to="/history" >{t('Contact Us')}</Link></div>
                        <div className="navElem"><LanguageToggleButton className="langToggle"/></div>
                        
                        
                        
                                                
                                        
                                
                        
                        
                </header>
        )
}

export default Navbar;