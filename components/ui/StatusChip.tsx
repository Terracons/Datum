import type { MeasureStatus, Severity, DeficiencyState } from '@/types';
import { cn, statusChip, statusLabel } from '@/lib/utils';

export function StatusChip({
  status,
  label,
  className,
}: {
  status: MeasureStatus;
  label?: string;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]',
        statusChip[status],
        className,
      )}
    >
      <span
        className={cn(
          'h-1.5 w-1.5 rounded-full',
          status === 'pass' && 'bg-signal-pass',
          status === 'deviation' && 'bg-signal-deviation',
          status === 'deficiency' && 'bg-signal-deficiency',
        )}
        aria-hidden
      />
      {label ?? statusLabel[status]}
    </span>
  );
}

const severityMap: Record<Severity, MeasureStatus> = {
  critical: 'deficiency',
  major: 'deficiency',
  minor: 'deviation',
  observation: 'pass',
};

export function SeverityChip({ severity }: { severity: Severity }) {
  return <StatusChip status={severityMap[severity]} label={severity} />;
}

const stateStyle: Record<DeficiencyState, string> = {
  open: 'border-ink-200 text-ink-600',
  contractor: 'border-ink-200 text-ink-600',
  reinspect: 'border-signal-deviation/40 text-signal-deviation-ink',
  verified: 'border-signal-pass/40 text-signal-pass-ink',
};

const stateLabel: Record<DeficiencyState, string> = {
  open: 'Open',
  contractor: 'With contractor',
  reinspect: 'Awaiting re-test',
  verified: 'Verified closed',
};

export function StateChip({ state }: { state: DeficiencyState }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-sm border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.1em]',
        stateStyle[state],
      )}
    >
      {stateLabel[state]}
    </span>
  );
}
