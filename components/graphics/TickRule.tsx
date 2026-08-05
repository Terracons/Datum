import { cn } from '@/lib/utils';

/**
 * A ruled edge. Minor ticks every 8 units, major every 48, on a hairline.
 * Used the way a rule is used on a drawing: to separate and to imply measurement.
 */
export default function TickRule({
  className,
  accent = false,
}: {
  className?: string;
  accent?: boolean;
}) {
  return (
    <div className={cn('relative h-4 w-full', className)} aria-hidden>
      <div className={cn('absolute inset-x-0 top-0 h-px', accent ? 'bg-signal-pass' : 'bg-ink-200')} />
      <svg className="absolute inset-x-0 top-0 h-3 w-full" preserveAspectRatio="none">
        <defs>
          <pattern id="tick-minor" width="8" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="4" stroke="var(--g-ink-200)" strokeWidth="1" />
          </pattern>
          <pattern id="tick-major" width="48" height="12" patternUnits="userSpaceOnUse">
            <line x1="0" y1="0" x2="0" y2="9" stroke="var(--g-ink-300)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="12" fill="url(#tick-minor)" />
        <rect width="100%" height="12" fill="url(#tick-major)" />
      </svg>
    </div>
  );
}
