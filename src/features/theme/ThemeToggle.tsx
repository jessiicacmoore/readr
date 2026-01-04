import { Sun, Moon } from 'lucide-react';
import { useTheme } from './useTheme';
import { Switch } from '@/components/ui/Switch';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div className="inline-flex items-center gap-2">
      <Sun
        className={`h-4 w-4 ${
          !isDark ? 'text-brand-primary' : 'text-text-muted'
        }`}
        aria-hidden
      />

      <Switch
        checked={isDark}
        onCheckedChange={toggleTheme}
        aria-label={`Theme: ${isDark ? 'Dark mode on' : 'Light mode on'}`}
      />

      <Moon
        className={`h-4 w-4 ${
          isDark ? 'text-brand-primary' : 'text-text-muted'
        }`}
        aria-hidden
      />
    </div>
  );
}
