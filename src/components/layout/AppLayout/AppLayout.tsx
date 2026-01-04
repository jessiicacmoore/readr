import * as React from 'react';
import { cn } from '@/lib/cn';
import { Header } from '@/components/layout/Header';

export type AppLayoutProps = {
  children: React.ReactNode;
  constrain?: boolean;
  padded?: boolean;
  mainClassName?: string;
};

export function AppLayout({
  children,
  constrain = true,
  padded = true,
  mainClassName,
}: AppLayoutProps) {
  return (
    <div className="min-h-dvh bg-bg-app text-text-default font-sans">
      <Header />

      <main
        id="main"
        className={cn(
          padded ? 'py-6' : '',
          padded ? 'px-4 sm:px-6 lg:px-8' : '',
          constrain ? 'mx-auto w-full max-w-6xl' : 'w-full',
          mainClassName
        )}
      >
        {children}
      </main>
    </div>
  );
}
