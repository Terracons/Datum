'use client';

import { useState } from 'react';
import { Check, Copy, Download } from 'lucide-react';
import type { SpecSection } from '@/content/engineers';
import { cn } from '@/lib/utils';

export default function SpecBlock({ section }: { section: SpecSection }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(section.body);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const download = () => {
    const blob = new Blob([section.body], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${section.slug}.txt`;
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
  };

  return (
    <article className="panel shadow-panel">
      <div className="panel-head">
        <div className="flex flex-wrap items-baseline gap-3">
          <span className="tabular font-mono text-xs text-signal-pass-ink">{section.number}</span>
          <h3 className="font-display text-base text-ink-900">{section.title}</h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copy}
            className={cn(
              'inline-flex items-center gap-1.5 rounded-sm border px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors',
              copied
                ? 'border-signal-pass bg-signal-pass-wash text-signal-pass-ink'
                : 'border-ink-200 text-ink-600 hover:border-ink-400 hover:text-ink-900',
            )}
          >
            {copied ? <Check className="h-3 w-3" aria-hidden /> : <Copy className="h-3 w-3" aria-hidden />}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            onClick={download}
            className="inline-flex items-center gap-1.5 rounded-sm border border-ink-200 px-2.5 py-1 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-600 transition-colors hover:border-ink-400 hover:text-ink-900"
          >
            <Download className="h-3 w-3" aria-hidden />
            .txt
          </button>
        </div>
      </div>

      <div className="border-b border-ink-100 px-5 py-4">
        <p className="text-sm leading-relaxed text-ink-600">{section.summary}</p>
        <p className="mt-2 font-mono text-[11px] text-ink-500">{section.note}</p>
      </div>

      <div
        className="max-h-[28rem] overflow-auto bg-paper-sunken"
        tabIndex={0}
        role="region"
        aria-label={`${section.number} ${section.title}, scrollable specification text`}
      >
        <pre className="whitespace-pre px-5 py-5 font-mono text-[12px] leading-[1.65] text-ink-700">
          {section.body}
        </pre>
      </div>
    </article>
  );
}
