import type { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  variant?: 'primary' | 'secondary';
};

export function Button({
  variant = 'primary',
  children,
  ...rest
}: ButtonProps) {
  return (
    <button data-variant={variant} {...rest}>
      {children}
    </button>
  );
}
