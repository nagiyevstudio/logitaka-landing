import { useTranslation } from 'react-i18next';
import { useState, useRef, useEffect } from 'react';

const SUPPORTED_LOCALES = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' }
];

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLocale = SUPPORTED_LOCALES.find(l => l.code === i18n.language) || SUPPORTED_LOCALES[0];

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Desktop Version: Dropdown */}
      <div className="language-dropdown desktop-only" ref={dropdownRef}>
        <button 
          className="lang-btn-current" 
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
          type="button"
        >
          {currentLocale.label}
          <span className={`lang-arrow ${isOpen ? 'up' : ''}`}>▾</span>
        </button>
        
        {isOpen && (
          <ul className="lang-list">
            {SUPPORTED_LOCALES.map((locale) => (
              <li key={locale.code}>
                <button 
                  className={`lang-option ${i18n.language === locale.code ? 'is-active' : ''}`}
                  onClick={() => handleLanguageChange(locale.code)}
                  type="button"
                >
                  {locale.label}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Mobile Version: Permanent Inline Segmented Control */}
      <div className="language-segmented mobile-only">
        {SUPPORTED_LOCALES.map((locale) => {
          const isActive = i18n.language === locale.code;
          return (
            <button
              key={locale.code}
              className={`lang-segment-btn ${isActive ? 'is-active' : ''}`}
              onClick={() => handleLanguageChange(locale.code)}
              type="button"
            >
              {locale.label}
            </button>
          );
        })}
      </div>
    </>
  );
};

export default LanguageSwitcher;
