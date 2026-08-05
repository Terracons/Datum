'use client';

import { useState } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import type { Deficiency, Severity } from '@/types';
import { SeverityChip, StateChip } from '@/components/ui/StatusChip';
import { cn } from '@/lib/utils';
import { duration, ease, viewportOnce } from '@/lib/motion';

const severityOrder: Severity[] = ['critical', 'major', 'minor', 'observation'];

interface Props {
  items: Deficiency[];
  title?: string;
  filterable?: boolean;
  className?: string;
}

/**
 * The deliverable nobody in this industry shows. Rows stagger in as a list
 * being written to a record, which is exactly what a deficiency log is.
 */
export default function DeficiencyLog({ items, title = 'Deficiency log', filterable = true, className }: Props) {
  const [filter, setFilter] = useState<Severity | 'all'>('all');
  const reduced = useReducedMotion();

  const present = severityOrder.filter((s) => items.some((i) => i.severity === s));
  const visible = filter === 'all' ? items : items.filter((i) => i.severity === filter);
  const openCount = items.filter((i) => i.state !== 'verified').length;
  const visibleCount = visible.length;

  return (
    <div className={cn('panel shadow-panel', className)}>
      <div className="panel-head">
        <h3 className="font-mono text-xs uppercase tracking-[0.12em] text-ink-900">{title}</h3>
        <span className="label-mono" aria-live="polite">
          {visibleCount} shown of {items.length} logged · {openCount} open
        </span>
      </div>

      {filterable && present.length > 1 && (
        <div className="flex flex-wrap items-center gap-2 border-b border-ink-100 px-5 py-3">
          <span className="label-mono mr-1">Severity</span>
          {(['all', ...present] as (Severity | 'all')[]).map((s) => (
            <button
              key={s}
              onClick={() => setFilter(s)}
              aria-pressed={filter === s}
              className={cn(
                'inline-flex min-h-11 touch-manipulation items-center rounded-sm border px-3 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors',
                filter === s
                  ? 'border-ink-900 bg-ink-900 text-paper'
                  : 'border-ink-200 text-ink-500 hover:border-ink-400 hover:text-ink-900',
              )}
            >
              {s}
              {s !== 'all' && (
                <span className="ml-1.5 text-[10px] opacity-60">
                  {items.filter((i) => i.severity === s).length}
                </span>
              )}
            </button>
          ))}
        </div>
      )}

      <ol className="divide-y divide-ink-100">
        {visible.map((item, i) => (
          <m.li
            key={item.id}
            initial={reduced ? false : { opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={viewportOnce}
            transition={{ duration: duration.base, ease: ease.settle, delay: reduced ? 0 : i * 0.05 }}
            className="px-5 py-5"
          >
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
              <span className="tabular font-mono text-xs font-medium text-ink-900">{item.id}</span>
              <SeverityChip severity={item.severity} />
              <StateChip state={item.state} />
              <span className="ml-auto tabular font-mono text-[11px] text-ink-500">
                {item.opened}
                {item.closed && ` → ${item.closed}`}
              </span>
            </div>

            <p className="mt-3 flex flex-wrap items-baseline gap-x-2 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500">
              <span className="text-ink-900">{item.system}</span>
              <span aria-hidden>·</span>
              <span>{item.location}</span>
            </p>

            <p className="mt-3 text-sm leading-relaxed text-ink-700">{item.finding}</p>

            <p className="mt-3 border-l-2 border-signal-pass/50 pl-3 text-sm leading-relaxed text-ink-600">
              <span className="label-mono mr-2">Action</span>
              {item.action}
            </p>
          </m.li>
        ))}
      </ol>
    </div>
  );
}
