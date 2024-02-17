import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next';
import LanguageToggleButton from '../components/LanguageToggleButton'
const Navbar = () => {
        const { t } = useTranslation();

        return (
                <header>
                        <div className="container">
                                <Link to="/">
                                        <h1>JumboShare</h1>
                                </Link>
                                <nav>
                                        <div>
                                                <Link to="/Temp">{t('apple')}</Link>
                                                <Link to="/history">{t('banana')}</Link>
                                                <LanguageToggleButton />
                                        </div>
                                </nav>
                        </div>
                </header>
        )
}

export default Navbar;