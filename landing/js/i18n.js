/* ─── I18N SHARED HELPERS ──────────────────────────────────── */
const SUPPORTED_LOCALES = ['ru', 'en', 'az'];
const STORAGE_KEYS = {
  locale: 'logitaka-landing-locale',
  theme: 'logitaka-landing-theme',
};

function getInitialLocale() {
  const stored = localStorage.getItem(STORAGE_KEYS.locale);
  if (SUPPORTED_LOCALES.includes(stored)) return stored;
  return 'az';
}

function getInitialTheme() {
  const stored = localStorage.getItem(STORAGE_KEYS.theme);
  if (stored === 'light' || stored === 'dark') return stored;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}