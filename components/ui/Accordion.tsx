'use client';

import { useState } from 'react';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Accordion({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  const reduced = useReducedMotion();

  return (
    <div className="border-t border-ink-100">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className="border-b border-ink-100">
            <h3>
              <button
                id={`accordion-trigger-${i}`}
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                aria-controls={`accordion-panel-${i}`}
                className="flex w-full touch-manipulation items-start justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg text-ink-900">{item.q}</span>
                <Plus
                  className={cn(
                    'mt-1 h-4 w-4 shrink-0 text-signal-pass transition-transform duration-300',
                    isOpen && 'rotate-45',
                  )}
                  aria-hidden
                />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen && (
                <m.div
                  id={`accordion-panel-${i}`}
                  role="region"
                  aria-labelledby={`accordion-trigger-${i}`}
                  initial={reduced ? false : { height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={reduced ? undefined : { height: 0, opacity: 0 }}
                  transition={{ duration: 0.26 }}
                  className="overflow-hidden"
                >
                  <p className="measure pb-6 text-base leading-relaxed text-ink-600">{item.a}</p>
                </m.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
