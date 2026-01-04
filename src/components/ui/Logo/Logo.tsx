import { cn } from '@/lib/cn';

type LogoSize = 'sm' | 'md' | 'lg';

const sizeClasses: Record<LogoSize, string> = {
  sm: 'text-lg',
  md: 'text-xl',
  lg: 'text-2xl',
};

type BaseProps = {
  size?: LogoSize;
  href?: string;
  children?: React.ReactNode;
};

type SpanProps = BaseProps & React.ComponentPropsWithoutRef<'span'>;
type AnchorProps = BaseProps & React.ComponentPropsWithoutRef<'a'>;

export function Logo({
  href,
  size = 'md',
  className,
  children = 'Readr',
  ...rest
}: SpanProps | AnchorProps) {
  const classes = cn(
    'inline-flex items-baseline font-serif font-semibold tracking-tight',
    'text-brand-primary',
    sizeClasses[size],
    href &&
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-focus-ring focus-visible:ring-offset-2 focus-visible:ring-offset-bg-app',
    className
  );

  if (href) {
    const anchorProps = rest as React.ComponentPropsWithoutRef<'a'>;

    return (
      <a
        href={href}
        className={classes}
        aria-label="Readr home"
        {...anchorProps}
      >
        {children}
      </a>
    );
  }

  const spanProps = rest as React.ComponentPropsWithoutRef<'span'>;

  return (
    <span className={classes} {...spanProps}>
      {children}
    </span>
  );
}
