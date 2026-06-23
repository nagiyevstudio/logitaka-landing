import enTranslation from '../locales/en/translation.json';

const dictionaries = {
  en: enTranslation
};

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'EN' }
];

export function detectLocale() {
  return 'en';
}

export function getT() {
  const dict = dictionaries.en;
  
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

export function getLocalizedPath(targetLang, currentPath) {
  return '/';
}
