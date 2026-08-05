'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { duration, ease, viewportOnce } from '@/lib/motion';
import { cn } from '@/lib/utils';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'section' | 'li' | 'article' | 'header';
}

/** Short travel, quick settle. This is an instrument coming to rest. */
export default function Reveal({
  children,
  className,
  delay = 0,
  y = 20,
  as = 'div',
}: RevealProps) {
  const reduced = useReducedMotion();
  const Tag = m[as];

  if (reduced) {
    const Plain = as;
    return <Plain className={className}>{children}</Plain>;
  }

  return (
    <Tag
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewportOnce}
      transition={{ duration: duration.base, ease: ease.settle, delay }}
    >
      {children}
    </Tag>
  );
}
