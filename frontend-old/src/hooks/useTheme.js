import { useState, useEffect } from 'react';

export const useTheme = () => {
  const getInitialTheme = () => {
    const savedTheme = localStorage.getItem('logitaka-landing-theme');
    if (savedTheme) return savedTheme;
    
    // Fallback to system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
      return 'light';
    }
    return 'dark'; // Default to dark if no preference
  };

  const [theme, setTheme] = useState(getInitialTheme());

  useEffect(() => {
    document.body.setAttribute('data-theme', theme);
    localStorage.setItem('logitaka-landing-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return { theme, toggleTheme };
};
