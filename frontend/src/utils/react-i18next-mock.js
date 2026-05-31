import { getT } from './i18n.js';

// Global cache to maintain stable references of t() functions across renders
const tCache = {};

export function useTranslation() {
  const lang = globalThis.currentLanguage || (typeof document !== 'undefined' ? document.documentElement.lang : 'az');
  
  if (!tCache[lang]) {
    tCache[lang] = getT(lang);
  }
  
  return {
    t: tCache[lang],
    i18n: {
      language: lang,
      changeLanguage: (code) => {
        // URL redirection handles language changes in Astro, so this is a safe no-op
      }
    }
  };
}

export const Trans = ({ children }) => children;
export const Helmet = () => null;
export const HelmetProvider = ({ children }) => children;
