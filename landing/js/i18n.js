/* ─── I18N SHARED HELPERS ──────────────────────────────────── */
const SUPPORTED_LOCALES = ['ru', 'en', 'az'];
const STORAGE_KEYS = {
  locale: 'logitaka-landing-locale',
  theme: 'logitaka-landing-theme',
};

function getInitialLocale() {
  // 1. Check URL path (e.g., /en/index.html)
  const pathParts = window.location.pathname.split('/');
  for (const part of pathParts) {
    if (SUPPORTED_LOCALES.includes(part)) return part;
  }

  // 2. Check localStorage
  const stored = localStorage.getItem(STORAGE_KEYS.locale);
  if (SUPPORTED_LOCALES.includes(stored)) return stored;
  
  return 'az';
}

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}
function switchLanguage(targetLocale) {
  const currentPath = window.location.pathname;
  const pathParts = currentPath.split(/);
  let currentLocaleInPath = null;
  for (const l of SUPPORTED_LOCALES) {
    if (pathParts.includes(l)) { currentLocaleInPath = l; break; }
  }

  if (currentLocaleInPath === targetLocale) return;

  localStorage.setItem(STORAGE_KEYS.locale, targetLocale);
  let newPath;
  if (currentLocaleInPath) {
    newPath = currentPath.replace(//, //);
  } else {
    const fileName = pathParts[pathParts.length - 1] || index.html;
    newPath = //;
  }
  window.location.href = newPath;
}
