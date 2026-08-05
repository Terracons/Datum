import Link from 'next/link';
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

type Variant = 'primary' | 'secondary' | 'ghost';
type Size = 'default' | 'lg' | 'sm';

const base =
  'inline-flex touch-manipulation items-center justify-center gap-2 rounded font-medium tracking-[0.01em] transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50';

const variants: Record<Variant, string> = {
  primary: 'bg-ink-900 text-paper hover:bg-signal-pass-ink',
  secondary: 'border border-ink-200 bg-paper-raised text-ink-900 hover:border-signal-pass hover:text-signal-pass-ink',
  ghost: 'text-ink-600 hover:text-signal-pass-ink',
};

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  default: 'h-11 px-6 text-sm',
  lg: 'h-13 px-8 text-base',
};

interface Props {
  children: ReactNode;
  href?: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  type?: 'button' | 'submit';
  onClick?: () => void;
  disabled?: boolean;
  download?: string;
}

export default function Button({
  children,
  href,
  variant = 'primary',
  size = 'default',
  className,
  type = 'button',
  onClick,
  disabled,
  download,
}: Props) {
  const classes = cn(base, variants[variant], sizes[size], size === 'lg' && 'h-13', className);

  if (href) {
    const external =
      href.startsWith('tel:') || href.startsWith('mailto:') || href.startsWith('http') || !!download;
    if (external) {
      return (
        <a href={href} download={download} className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
