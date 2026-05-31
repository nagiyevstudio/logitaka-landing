import { useState, useEffect } from 'react';

export const useTheme = () => {
  // Lazily initialize state to avoid race conditions and SSR mismatches
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('logitaka-landing-theme');
      if (savedTheme) {
        return savedTheme;
      }
      if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
        return 'light';
      }
    }
    return 'dark'; // Default to dark for SSR
  });

  // Sync theme with body attribute and localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.body.setAttribute('data-theme', theme);
      localStorage.setItem('logitaka-landing-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
