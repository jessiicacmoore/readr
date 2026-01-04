import * as React from 'react';
import { cn } from '@/lib/cn';
import { Logo } from '@/components/ui/Logo';
import { ThemeToggle } from '@/features/theme';

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  logoHref?: string;
}

export function Header({ logoHref = '/', className, ...rest }: HeaderProps) {
  return (
    <header
      className={cn(
        [
          'sticky top-0 z-50 w-full',
          'bg-bg-app/80 backdrop-blur',
          'border-b border-border-default',
        ].join(' '),
        className
      )}
      {...rest}
    >
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <Logo href={logoHref} />
        </div>

        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
