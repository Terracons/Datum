'use client';

import { m, useReducedMotion } from 'framer-motion';
import type { ComparisonRow } from '@/types';
import { StatusChip } from '@/components/ui/StatusChip';
import {
  cn,
  deltaPercent,
  formatDelta,
  formatNumber,
  statusBar,
  statusFor,
  statusText,
} from '@/lib/utils';
import { duration, ease, viewportOnce } from '@/lib/motion';

/** Design sits at 68% of the track, leaving room for anything over. */
const DESIGN_STOP = 68;

interface Props {
  rows: ComparisonRow[];
  title?: string;
  caption?: string;
  className?: string;
  /** Hide the panel chrome when embedding inside another panel. */
  bare?: boolean;
}

export default function DesignVsMeasured({ rows, title, caption, className, bare }: Props) {
  const reduced = useReducedMotion();

  const body = (
    <div className="divide-y divide-ink-100">
      {rows.map((row, i) => {
        const status = statusFor(row);
        const pct = row.design === 0 ? 0 : (row.measured / row.design) * DESIGN_STOP;
        const band = row.tolerance ?? 10;
        const bandLeft = DESIGN_STOP * (1 - band / 100);
        const bandWidth = DESIGN_STOP * (band / 100) * 2;
        const delta = deltaPercent(row);
        const decimals = row.design < 10 ? 3 : 0;

        return (
          <div key={`${row.tag}-${row.label}`} className="px-4 py-3.5 sm:px-5">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="tabular font-mono text-xs tracking-[0.06em] text-ink-900">
                {row.tag}
              </span>
              <span className="flex-1 text-sm text-ink-600">{row.label}</span>
              <StatusChip status={status} />
            </div>

            <div className="mt-2.5 flex items-center gap-4">
              {/* the track */}
              <div className="relative h-7 flex-1">
                {/* tolerance band */}
                <div
                  className="absolute inset-y-0 rounded-sm bg-ink-50"
                  style={{ left: `${bandLeft}%`, width: `${bandWidth}%` }}
                  aria-hidden
                />
                {/* baseline */}
                <div className="absolute inset-x-0 bottom-0 h-px bg-ink-100" aria-hidden />
                {/* design marker */}
                <div
                  className="absolute inset-y-0 w-px bg-ink-400"
                  style={{ left: `${DESIGN_STOP}%` }}
                  aria-hidden
                />
                {/* measured bar */}
                <m.div
                  className={cn('absolute inset-y-1.5 left-0 rounded-[1px]', statusBar[status])}
                  initial={reduced ? false : { width: 0 }}
                  whileInView={{ width: `${Math.min(pct, 100)}%` }}
                  viewport={viewportOnce}
                  transition={{
                    duration: duration.slow,
                    ease: ease.settle,
                    delay: reduced ? 0 : 0.05 * i,
                  }}
                />
              </div>

              {/* readout */}
              <div className="flex shrink-0 items-baseline gap-3 sm:gap-5">
                <span className="tabular hidden font-mono text-xs text-ink-500 sm:inline">
                  {formatNumber(row.design, decimals)}
                </span>
                <span className={cn('tabular font-mono text-sm', statusText[status])}>
                  {formatNumber(row.measured, decimals)}
                  <span className="ml-1 text-[11px] text-ink-500">{row.unit}</span>
                </span>
                <span
                  className={cn('tabular w-16 text-right font-mono text-xs', statusText[status])}
                >
                  {formatDelta(delta)}
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );

  if (bare) return <div className={className}>{body}</div>;

  return (
    <figure className={cn('panel shadow-panel', className)}>
      <div className="panel-head">
        <figcaption className="font-mono text-xs uppercase tracking-[0.12em] text-ink-900">
          {title ?? 'Design vs. measured'}
        </figcaption>
        <div className="flex items-center gap-4">
          <Legend />
        </div>
      </div>

      {/* column key */}
      <div className="hidden items-center justify-end gap-5 border-b border-ink-100 px-5 py-2 sm:flex">
        <span className="label-mono w-full text-left">
          Bar shows measured against design; grey band is the acceptance tolerance
        </span>
        <span className="label-mono w-[3.5rem] shrink-0 text-right">Design</span>
        <span className="label-mono w-[5.5rem] shrink-0 text-right">Measured</span>
        <span className="label-mono w-16 shrink-0 text-right">Δ</span>
      </div>

      {body}

      {caption && (
        <p className="border-t border-ink-100 px-5 py-3 text-xs leading-relaxed text-ink-500">
          {caption}
        </p>
      )}
    </figure>
  );
}

function Legend() {
  return (
    <ul className="flex items-center gap-3">
      {(
        [
          ['pass', 'In tolerance'],
          ['deviation', 'Deviation'],
          ['deficiency', 'Deficiency'],
        ] as const
      ).map(([key, label]) => (
        <li key={key} className="flex items-center gap-1.5">
          <span className={cn('h-2 w-2 rounded-full', statusBar[key])} aria-hidden />
          <span className="label-mono">{label}</span>
        </li>
      ))}
    </ul>
  );
}
