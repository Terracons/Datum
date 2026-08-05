'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { m, useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu } from 'lucide-react';
import Logo from '@/components/graphics/Logo';
import MobileDrawer from './MobileDrawer';
import { primaryNav } from './nav';
import { company } from '@/content/company';
import { cn } from '@/lib/utils';
import { ease } from '@/lib/motion';

export default function Header() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => setCompact(v > 72));

  return (
    <>
      <m.header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b transition-colors duration-300',
          compact
            ? 'border-ink-100 bg-paper/90 backdrop-blur-md'
            : 'border-transparent bg-transparent',
        )}
        initial={false}
        animate={{ height: compact ? 62 : 80 }}
        transition={{ duration: 0.28, ease: ease.out }}
      >
        <div className="mx-auto flex h-full max-w-container items-center justify-between px-6 md:px-12 lg:px-20">
          <Link href="/" aria-label={`${company.name}, home`} className="text-ink-900">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {primaryNav.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + '/');
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? 'page' : undefined}
                  className={cn(
                    'relative text-sm transition-colors duration-200',
                    active ? 'text-ink-900' : 'text-ink-600 hover:text-ink-900',
                  )}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-1.5 left-0 h-px w-full bg-signal-pass" aria-hidden />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href={company.phone.mainHref}
              className="tabular hidden font-mono text-sm text-ink-500 transition-colors hover:text-ink-900 md:inline"
            >
              {company.phone.main}
            </a>

            <Link
              href="/contact"
              className="hidden h-10 items-center rounded bg-ink-900 px-5 text-sm font-medium text-paper transition-colors hover:bg-signal-pass-ink sm:inline-flex"
            >
              Request a Scope
            </Link>

            <button
              onClick={() => setOpen(true)}
              className="-mr-2 flex h-11 w-11 touch-manipulation items-center justify-center text-ink-900 lg:hidden"
              aria-label="Open navigation"
              aria-expanded={open}
              aria-controls="mobile-navigation"
            >
              <Menu className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>
      </m.header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} />
    </>
  );
}
