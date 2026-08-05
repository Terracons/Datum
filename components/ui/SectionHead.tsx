import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';
import Reveal from '@/components/motion/Reveal';

interface Props {
  index?: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  className?: string;
  align?: 'left' | 'center';
  as?: 'h1' | 'h2';
}

export default function SectionHead({
  index,
  eyebrow,
  title,
  intro,
  className,
  align = 'left',
  as = 'h2',
}: Props) {
  const Heading = as;
  return (
    <div className={cn(align === 'center' && 'text-center', className)}>
      <Reveal y={12}>
        <p className="eyebrow flex items-center gap-3">
          {index && <span className="text-ink-500">{index}</span>}
          {index && <span className="h-px w-6 bg-signal-pass/60" aria-hidden />}
          <span>{eyebrow}</span>
        </p>
      </Reveal>
      <Reveal delay={0.06}>
        <Heading
          className={cn(
            'mt-5 max-w-4xl tracking-[-0.02em]',
            as === 'h1' ? 'text-4xl' : 'text-3xl',
            align === 'center' && 'mx-auto',
          )}
        >
          {title}
        </Heading>
      </Reveal>
      {intro && (
        <Reveal delay={0.12}>
          <div className={cn('measure mt-6 text-lg text-ink-600', align === 'center' && 'mx-auto')}>
            {intro}
          </div>
        </Reveal>
      )}
    </div>
  );
}
