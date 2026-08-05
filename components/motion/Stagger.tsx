'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';
import { duration, ease, viewportOnce } from '@/lib/motion';

interface StaggerProps {
  children: ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}

export function Stagger({ children, className, stagger = 0.06, delay = 0.04 }: StaggerProps) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={viewportOnce}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
      }}
    >
      {children}
    </m.div>
  );
}

export function StaggerItem({
  children,
  className,
  y = 14,
  x = 0,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  x?: number;
}) {
  const reduced = useReducedMotion();

  if (reduced) return <div className={className}>{children}</div>;

  return (
    <m.div
      className={className}
      variants={{
        hidden: { opacity: 0, y, x },
        visible: {
          opacity: 1,
          y: 0,
          x: 0,
          transition: { duration: duration.base, ease: ease.settle },
        },
      }}
    >
      {children}
    </m.div>
  );
}
