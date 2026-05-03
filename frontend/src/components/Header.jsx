import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useLocation } from 'react-router-dom';
import LanguageSwitcher from './LanguageSwitcher';
import { useTheme } from '../hooks/useTheme';

const Header = () => {
  const { t } = useTranslation();
  const { toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const navItems = t('landing.ui.nav', { returnObjects: true }) || [];

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`} id="site-header">
      <div className="header-inner">
        <Link className="brand" to="/" aria-label="Logitaka">
          <img className="brand-logo brand-logo-dark" src="/assets/logo-logitaka-bb.svg" alt="Logitaka" height="28" />
          <img className="brand-logo brand-logo-light" src="/assets/logo-logitaka-wb.svg" alt="Logitaka" height="28" />
          <span className="brand-name-group">
            <span className="brand-name">Logitaka</span>
            <span className="brand-tagline">{t('landing.ui.brandTagline')}</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="header-nav desktop-only" aria-label="Primary">
          <ul className="header-nav-list">
            {navItems.map((item, index) => {
              const isHash = item.href.startsWith('#');
              return (
                <li key={index}>
                  {isHash ? (
                    <Link to={`/${item.href}`}>{item.label}</Link>
                  ) : (
                    <Link to={item.href}>{item.label}</Link>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="header-controls">
          <div className="desktop-only">
            <LanguageSwitcher />
          </div>
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
              {navItems.map((item, index) => {
                const isHash = item.href.startsWith('#');
                return (
                  <li key={index} style={{ animationDelay: `${index * 0.05}s` }}>
                    {isHash ? (
                      <Link to={`/${item.href}`}>{item.label}</Link>
                    ) : (
                      <Link to={item.href}>{item.label}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <div className="mobile-menu-footer">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
