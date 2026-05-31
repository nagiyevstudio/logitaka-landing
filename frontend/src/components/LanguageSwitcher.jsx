import { useState, useRef, useEffect } from 'react';

const SUPPORTED_LOCALES = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' }
];

const getLocalizedPath = (targetLang, currentPath) => {
  let cleanPath = currentPath;
  if (cleanPath.endsWith('/') && cleanPath !== '/') {
    cleanPath = cleanPath.slice(0, -1);
  }
  const pathParts = cleanPath.split('/');
  if (pathParts[1] === 'en' || pathParts[1] === 'ru') {
    pathParts.splice(1, 1);
  }
  cleanPath = pathParts.join('/') || '/';

  if (targetLang === 'az') {
    return cleanPath;
  }
  return cleanPath === '/' ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
};

const LanguageSwitcher = ({ lang = 'az' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const currentLocale = SUPPORTED_LOCALES.find(l => l.code === lang) || SUPPORTED_LOCALES[0];

  const handleLanguageChange = (code) => {
    if (typeof window !== 'undefined') {
      const currentPath = window.location.pathname;
      window.location.href = getLocalizedPath(code, currentPath);
    }
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
    <div className="language-dropdown" ref={dropdownRef}>
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
                className={`lang-option ${lang === locale.code ? 'is-active' : ''}`}
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
  );
};

export default LanguageSwitcher;
