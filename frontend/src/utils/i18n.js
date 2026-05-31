import azTranslation from '../locales/az/translation.json';
import enTranslation from '../locales/en/translation.json';
import ruTranslation from '../locales/ru/translation.json';

const dictionaries = {
  az: azTranslation,
  en: enTranslation,
  ru: ruTranslation
};

export const SUPPORTED_LOCALES = [
  { code: 'az', label: 'AZ' },
  { code: 'en', label: 'EN' },
  { code: 'ru', label: 'RU' }
];

/**
 * Returns a translation function for the specified language
 * @param {string} lang - The locale ('az', 'en', 'ru')
 * @returns {(key: string) => any} The t() function
 */
export function getT(lang) {
  const dict = dictionaries[lang] || dictionaries.az;
  
  return function t(key) {
    const parts = key.split('.');
    let current = dict;
    
    for (const part of parts) {
      if (current === undefined || current === null) {
        console.warn(`Translation key not found: ${key} (failed at "${part}")`);
        return key;
      }
      current = current[part];
    }
    
    if (current === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    
    return current;
  };
}

/**
 * Helper to construct the localized URL path
 * @param {string} targetLang - Target locale ('az', 'en', 'ru')
 * @param {string} currentPath - Current pathname from Astro.url.pathname
 * @returns {string} The new localized path
 */
export function getLocalizedPath(targetLang, currentPath) {
  // Strip trailing slash if present
  let cleanPath = currentPath;
  if (cleanPath.endsWith('/') && cleanPath !== '/') {
    cleanPath = cleanPath.slice(0, -1);
  }

  // Remove existing locale prefixes ('/en' or '/ru')
  const pathParts = cleanPath.split('/');
  if (pathParts[1] === 'en' || pathParts[1] === 'ru') {
    pathParts.splice(1, 1);
  }
  cleanPath = pathParts.join('/') || '/';

  // Construct new path
  if (targetLang === 'az') {
    return cleanPath;
  }
  
  return cleanPath === '/' ? `/${targetLang}` : `/${targetLang}${cleanPath}`;
}
