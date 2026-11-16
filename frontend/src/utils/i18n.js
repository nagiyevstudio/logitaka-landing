import enTranslation from '../locales/en/translation.json';
import azTranslation from '../locales/az/translation.json';

const dictionaries = {
  en: enTranslation,
  az: azTranslation
};

export const DEFAULT_LOCALE = 'en';

export const SUPPORTED_LOCALES = [
  { code: 'en', label: 'EN' },
  { code: 'az', label: 'AZ' }
];

export function detectLocale(pathname = '') {
  const first = pathname.split('/').filter(Boolean)[0];
  return dictionaries[first] ? first : DEFAULT_LOCALE;
}

function lookup(dict, key) {
  let current = dict;
  for (const part of key.split('.')) {
    if (current === undefined || current === null) return undefined;
    current = current[part];
  }
  return current;
}

export function getT(lang = DEFAULT_LOCALE) {
  const dict = dictionaries[lang] || dictionaries[DEFAULT_LOCALE];

  return function t(key) {
    let value = lookup(dict, key);
    if (value === undefined && dict !== dictionaries[DEFAULT_LOCALE]) {
      // Fall back to English so a missing translation never shows a raw key
      value = lookup(dictionaries[DEFAULT_LOCALE], key);
    }
    if (value === undefined) {
      console.warn(`Translation key not found: ${key}`);
      return key;
    }
    return value;
  };
}

// Home path for a locale: "/" for English, "/az/" for Azerbaijani
export function getLocalizedPath(targetLang) {
  return targetLang === DEFAULT_LOCALE ? '/' : `/${targetLang}/`;
}
