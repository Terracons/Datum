import type { Spec } from '@/types';

export default function SpecTable({ specs }: { specs: Spec[] }) {
  return (
    <dl className="border-t border-ink-100">
      {specs.map((s) => (
        <div
          key={s.label}
          className="flex flex-col gap-1 border-b border-ink-100 py-3.5 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <dt className="text-sm text-ink-500">{s.label}</dt>
          <dd className="tabular font-mono text-sm text-ink-900 sm:text-right">{s.value}</dd>
        </div>
      ))}
    </dl>
  );
}
