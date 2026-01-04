export type Theme = 'light' | 'dark';

const STORAGE_KEY = 'theme';

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
}

export function setTheme(theme: Theme) {
  applyTheme(theme);
  localStorage.setItem(STORAGE_KEY, theme);
}

export function getStoredTheme(): Theme | null {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === "light" || stored === "dark" ? stored : null;
}

export function getPreferredTheme(): Theme {
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function initTheme() {
  applyTheme(getStoredTheme() ?? getPreferredTheme());
}