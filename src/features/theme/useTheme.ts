import { useEffect, useState } from 'react';
import {
  getPreferredTheme,
  getStoredTheme,
  setTheme,
  type Theme,
} from './theme';

export function useTheme() {
  const [theme, setThemeState] = useState<Theme>(() => {
    return getStoredTheme() ?? getPreferredTheme();
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    setThemeState(next);
  };

  const chooseTheme = (next: Theme) => {
    setTheme(next);
    setThemeState(next);
  };

  return { theme, toggleTheme, setTheme: chooseTheme };
}
