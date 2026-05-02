/* ─── THEME (shared) ───────────────────────────────────────── */
function applyTheme(t) {
  document.body.setAttribute('data-theme', t);
  localStorage.setItem('logitaka-landing-theme', t);

  // Models page: swap SVG icon
  const themeIcon = document.getElementById('themeIcon');
  if (themeIcon) {
    const SUN = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
    const MOON = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    themeIcon.innerHTML = t === 'dark' ? SUN : MOON;
  }
}

function initTheme() {
  const saved = localStorage.getItem('logitaka-landing-theme');
  const preferred = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  applyTheme(saved || preferred);

  // Models page: ctrl-btn in header
  const themeToggle = document.getElementById('themeToggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }

  // Index page: theme-icon-btn in footer
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    themeBtn.addEventListener('click', () => {
      applyTheme(document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });
  }
}