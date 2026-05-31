import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Footer = () => {
  const { t } = useTranslation();

  const navItems = t('landing.footer.nav', { returnObjects: true }) || [];
  const legalItems = t('landing.footer.legal', { returnObjects: true }) || [];

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <Link className="brand" to="/">
              <img className="brand-logo brand-logo-dark" src="/assets/logo-logitaka-bb.svg" alt="Logitaka" height="28" />
              <img className="brand-logo brand-logo-light" src="/assets/logo-logitaka-wb.svg" alt="Logitaka" height="28" />
              <span className="brand-name-group">
                <span className="brand-name">Logitaka</span>
                <span className="brand-tagline">{t('landing.ui.brandTagline')}</span>
              </span>
            </Link>
            <p className="footer-tagline">{t('landing.footer.tagline')}</p>
          </div>
          
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul>
              {navItems.map((item, index) => {
                const isExternal = item.href.startsWith('http');
                const isHash = item.href.startsWith('#');
                return (
                  <li key={index}>
                    {isExternal ? (
                      <a href={item.href}>{item.label}</a>
                    ) : (
                      <Link to={isHash ? `/${item.href}` : item.href}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="footer-right">
            <ul className="footer-legal-list">
              {legalItems.map((item, index) => (
                <li key={index}><Link to={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{t('landing.footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
