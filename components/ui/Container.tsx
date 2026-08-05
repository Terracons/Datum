import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

export default function Container({
  children,
  className,
  size = 'default',
}: {
  children: ReactNode;
  className?: string;
  size?: 'default' | 'content' | 'narrow';
}) {
  return (
    <div
      className={cn(
        'mx-auto w-full px-6 md:px-12 lg:px-20',
        size === 'default' && 'max-w-container',
        size === 'content' && 'max-w-content',
        size === 'narrow' && 'max-w-3xl',
        className,
      )}
    >
      {children}
    </div>
  );
}
