import { useEffect, useState } from 'react';

import { useTheme } from '../hooks/useTheme';

const Header = ({ lang = 'en', navItems = [], brandTagline = 'AI‑Powered OS', loginLabel = 'Log In' }) => {
  const { toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const getHref = (itemHref) => {
    const isHash = itemHref.startsWith('#');
    if (isHash) {
      return `/${itemHref}`;
    }
    return itemHref;
  };

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} id="site-header">
      <div className="header-inner">
        <a className="brand" href="/" aria-label="Logitaka">
          <img className="brand-logo brand-logo-dark" src="/assets/logo-logitaka-bb.svg" alt="Logitaka" height="28" />
          <img className="brand-logo brand-logo-light" src="/assets/logo-logitaka-wb.svg" alt="Logitaka" height="28" />
          <span className="brand-name-group">
            <span className="brand-name">Logitaka</span>
            <span className="brand-tagline">{brandTagline}</span>
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="header-nav desktop-only" aria-label="Primary">
          <ul className="header-nav-list">
            {navItems.map((item, index) => (
              <li key={index}>
                <a href={getHref(item.href)}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-controls">

          <button className="theme-icon-btn" onClick={toggleTheme} type="button" aria-label="Toggle theme">
            <span className="theme-icon-sun" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <circle cx="12" cy="12" r="4" />
                <line x1="12" y1="2" x2="12" y2="4" />
                <line x1="12" y1="20" x2="12" y2="22" />
                <line x1="2" y1="12" x2="4" y2="12" />
                <line x1="20" y1="12" x2="22" y2="12" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </span>
            <span className="theme-icon-moon" aria-hidden="true">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            </span>
          </button>

          {/* Desktop Login Button */}
          <a href="https://app.logitaka.com/app/login" className="header-login-btn desktop-only">
            {loginLabel}
          </a>

          {/* Burger Button */}
          <button 
            className={`burger-btn ${isMenuOpen ? 'active' : ''}`} 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`mobile-menu ${isMenuOpen ? 'is-open' : ''}`}>
        <div className="mobile-menu-inner">
          <nav className="mobile-nav">
            <ul className="mobile-nav-list">
              {navItems.map((item, index) => (
                <li key={index} style={{ animationDelay: `${index * 0.05}s` }} onClick={() => setIsMenuOpen(false)}>
                  <a href={getHref(item.href)}>{item.label}</a>
                </li>
              ))}
            </ul>
            <div className="mobile-login-btn-container" style={{ animationDelay: `${navItems.length * 0.05}s` }}>
              <a href="https://app.logitaka.com/app/login" className="mobile-login-btn" onClick={() => setIsMenuOpen(false)}>
                {loginLabel}
              </a>
            </div>
          </nav>
          <div className="mobile-menu-footer">
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
