import clsx from 'clsx';
import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({
  variant = 'primary',
  className,
  type,
  children,
  ...rest
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 whitespace-nowrap ' +
    'rounded-radius-md px-4 py-2 text-sm font-medium ' +
    'transition-colors ' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 ' +
    'focus-visible:ring-offset-bg-app ' +
    'disabled:pointer-events-none disabled:opacity-50';

  const variants = {
    primary:
      'bg-brand-primary text-brand-primary-text hover:bg-brand-primary-hover shadow-shadow-sm',
    secondary:
      'bg-bg-surface text-text-default border border-border-default hover:bg-bg-surface-hover shadow-shadow-sm',
  };

  return (
    <button
      type={type ?? 'button'}
      className={clsx(base, variants[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
}
