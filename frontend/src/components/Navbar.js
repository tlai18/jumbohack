import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageToggleButton from '../components/LanguageToggleButton'
const Navbar = () => {
        
        const { t } = useTranslation();

        return (
                <navbar style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)' }}>
                                    
                        <div className="navElem"><Link className="MLL" to="/" >My Lingual Lawyer</Link></div>
                        <div className="navElem"><Link to="/lawyer" style={{color: "white"}}>{t('Find a lawyer')}</Link></div>
                        <div className="navElem"><Link to="/history" >{t('Legal Guidebook')}</Link></div>
                        <div className="navElem"><Link to="/contact" >{t('Contact Us')}</Link></div>
                        <div><LanguageToggleButton className="langToggle"/></div>
                        
                </navbar>
        )
}

export default Navbar;