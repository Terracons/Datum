import { cn } from '@/lib/utils';

/**
 * The mark is a survey datum: a fixed reference point on a baseline, with the
 * measurement ticks running off it.
 */
export default function Logo({
  className,
  markOnly = false,
}: {
  className?: string;
  markOnly?: boolean;
}) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <svg width="26" height="16" viewBox="0 0 26 16" fill="none" aria-hidden className="shrink-0">
        {/* measurement ticks */}
        <g stroke="currentColor" strokeWidth="1" opacity="0.4">
          <line x1="1" y1="4" x2="1" y2="10" />
          <line x1="6" y1="6" x2="6" y2="10" />
          <line x1="11" y1="6" x2="11" y2="10" />
          <line x1="20" y1="6" x2="20" y2="10" />
          <line x1="25" y1="4" x2="25" y2="10" />
        </g>
        {/* baseline */}
        <line x1="0" y1="11" x2="26" y2="11" stroke="currentColor" strokeWidth="1.5" />
        {/* the datum itself */}
        <path d="M15.5 4.5 L19 10.5 L12 10.5 Z" fill="var(--g-pass)" />
      </svg>
      {!markOnly && (
        <span className="font-display text-lg font-medium uppercase tracking-[0.14em] text-ink-900">
          Datum
        </span>
      )}
    </span>
  );
}
