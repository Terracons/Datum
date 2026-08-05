'use client';

import { AnimatePresence, m } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
import { primaryNav, secondaryNav } from './nav';
import { company } from '@/content/company';
import { ease } from '@/lib/motion';

export default function MobileDrawer({ open, onClose }: { open: boolean; onClose: () => void }) {
  const panelRef = useRef<HTMLDivElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    // Remember what opened the drawer so focus can go back there on close.
    returnFocusRef.current = document.activeElement as HTMLElement | null;

    const focusable = () =>
      Array.from(
        panelRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ) ?? [],
      );

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }
      // Trap Tab inside the dialog: without this, focus walks out into the
      // page behind the scrim, which is invisible to a keyboard user.
      if (e.key !== 'Tab') return;
      const items = focusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement;

      if (e.shiftKey && (active === first || active === panelRef.current)) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
      returnFocusRef.current?.focus();
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <m.div
          className="fixed inset-0 z-[60] lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <div className="absolute inset-0 bg-ink-900/25 backdrop-blur-sm" onClick={onClose} aria-hidden />
          <m.div
            ref={panelRef}
            id="mobile-navigation"
            tabIndex={-1}
            role="dialog"
            aria-modal="true"
            aria-label="Site navigation"
            className="absolute right-0 top-0 flex h-full w-full max-w-sm flex-col overflow-y-auto overscroll-contain border-l border-ink-100 bg-paper px-6 pb-16 pt-6 outline-none"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.28, ease: ease.out }}
          >
            <div className="flex justify-end">
              <button
                onClick={onClose}
                className="-mr-2 flex h-11 w-11 items-center justify-center text-ink-500 hover:text-ink-900"
                aria-label="Close navigation"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>

            <nav className="mt-4 flex flex-col" aria-label="Primary">
              {primaryNav.map((item, i) => (
                <m.div
                  key={item.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.045, duration: 0.3, ease: ease.out }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="block border-b border-ink-100 py-4 font-display text-2xl text-ink-900 hover:text-signal-pass-ink"
                  >
                    {item.label}
                  </Link>
                </m.div>
              ))}
            </nav>

            <nav className="mt-8 flex flex-col gap-3" aria-label="Secondary">
              {secondaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  className="text-sm text-ink-500 hover:text-signal-pass-ink"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-10">
              <p className="eyebrow">Direct</p>
              <a
                href={company.phone.mainHref}
                className="tabular mt-3 block font-mono text-lg text-ink-900 hover:text-signal-pass-ink"
              >
                {company.phone.main}
              </a>
              <a
                href={`mailto:${company.email.scope}`}
                className="mt-1 block text-sm text-ink-500 hover:text-signal-pass-ink"
              >
                {company.email.scope}
              </a>
            </div>
          </m.div>
        </m.div>
      )}
    </AnimatePresence>
  );
}
