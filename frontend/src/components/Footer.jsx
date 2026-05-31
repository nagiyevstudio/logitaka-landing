const Footer = ({
  lang = 'az',
  navItems = [],
  legalItems = [],
  brandTagline = 'AI‑Powered OS',
  tagline = 'The system keeps order — you just live.',
  copyright = '© 2026 Logitaka. All rights reserved.'
}) => {
  const getHref = (href) => {
    if (href.startsWith('http') || href.startsWith('mailto')) {
      return href;
    }
    const isHash = href.startsWith('#');
    if (isHash) {
      return lang === 'az' ? `/${href}` : `/${lang}/${href}`;
    }
    return lang === 'az' ? href : `/${lang}${href}`;
  };

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-top">
          <div className="footer-brand">
            <a className="brand" href={lang === 'az' ? '/' : `/${lang}`}>
              <img className="brand-logo brand-logo-dark" src="/assets/logo-logitaka-bb.svg" alt="Logitaka" height="28" />
              <img className="brand-logo brand-logo-light" src="/assets/logo-logitaka-wb.svg" alt="Logitaka" height="28" />
              <span className="brand-name-group">
                <span className="brand-name">Logitaka</span>
                <span className="brand-tagline">{brandTagline}</span>
              </span>
            </a>
            <p className="footer-tagline">{tagline}</p>
          </div>
          
          <nav className="footer-nav" aria-label="Footer navigation">
            <ul>
              {navItems.map((item, index) => (
                <li key={index}>
                  <a href={getHref(item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="footer-right">
            <ul className="footer-legal-list">
              {legalItems.map((item, index) => (
                <li key={index}>
                  <a href={getHref(item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <span>{copyright}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
