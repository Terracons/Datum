import { cn } from '@/lib/utils';

export default function Tag({
  children,
  active,
  className,
}: {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em]',
        active
          ? 'border-signal-pass bg-signal-pass-wash text-signal-pass-ink'
          : 'border-ink-200 text-ink-500',
        className,
      )}
    >
      {children}
    </span>
  );
}
