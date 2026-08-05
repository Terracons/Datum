import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import type { ComparisonRow, MeasureStatus } from '@/types';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number, decimals = 0) {
  return n.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

export function formatSqFt(n: number) {
  return n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : n.toLocaleString('en-US');
}

/** Signed percentage difference between measured and design. */
export function deltaPercent(row: Pick<ComparisonRow, 'design' | 'measured'>) {
  if (row.design === 0) return 0;
  return ((row.measured - row.design) / row.design) * 100;
}

export function formatDelta(pct: number, decimals = 1) {
  const sign = pct > 0 ? '+' : pct < 0 ? '−' : '±';
  return `${sign}${Math.abs(pct).toFixed(decimals)}%`;
}

/**
 * Inside the band is a pass. Outside it, we call anything past double the
 * band a deficiency: that is the line at which a system gets written up
 * rather than adjusted.
 */
export function statusFor(row: ComparisonRow): MeasureStatus {
  const band = row.tolerance ?? 10;
  const delta = Math.abs(deltaPercent(row));
  if (delta <= band) return 'pass';
  if (delta <= band * 2) return 'deviation';
  return 'deficiency';
}

export const statusLabel: Record<MeasureStatus, string> = {
  pass: 'In tolerance',
  deviation: 'Deviation',
  deficiency: 'Deficiency',
};

export const statusText: Record<MeasureStatus, string> = {
  pass: 'text-signal-pass-ink',
  deviation: 'text-signal-deviation-ink',
  deficiency: 'text-signal-deficiency-ink',
};

export const statusBar: Record<MeasureStatus, string> = {
  pass: 'bg-signal-pass',
  deviation: 'bg-signal-deviation',
  deficiency: 'bg-signal-deficiency',
};

export const statusChip: Record<MeasureStatus, string> = {
  pass: 'border-signal-pass/40 bg-signal-pass-wash text-signal-pass-ink',
  deviation: 'border-signal-deviation/40 bg-signal-deviation-wash text-signal-deviation-ink',
  deficiency: 'border-signal-deficiency/40 bg-signal-deficiency-wash text-signal-deficiency-ink',
};

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}
