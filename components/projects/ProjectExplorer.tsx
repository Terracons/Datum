'use client';

import { useCallback, useMemo } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { AnimatePresence, m, useReducedMotion } from 'framer-motion';
import type { Project, Sector, ServiceSlug } from '@/types';
import ProjectCard from './ProjectCard';
import { sectorLabel } from '@/content/projects';
import { serviceTitle } from '@/content/services';
import { cn } from '@/lib/utils';
import { duration, ease } from '@/lib/motion';

/**
 * Filter state lives in the URL, not in React state, so a filtered view can be
 * linked, bookmarked, and reached with the back button.
 */
export default function ProjectExplorer({ projects }: { projects: Project[] }) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const reduced = useReducedMotion();

  const sector = (searchParams.get('sector') ?? 'all') as Sector | 'all';
  const service = (searchParams.get('service') ?? 'all') as ServiceSlug | 'all';

  const setParam = useCallback(
    (key: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      if (value === 'all') params.delete(key);
      else params.set(key, value);
      const query = params.toString();
      router.replace(query ? `${pathname}?${query}` : pathname, { scroll: false });
    },
    [pathname, router, searchParams],
  );

  const sectors = useMemo(
    () => Array.from(new Set(projects.map((p) => p.sector))) as Sector[],
    [projects],
  );
  const serviceOptions = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.services))) as ServiceSlug[],
    [projects],
  );

  const visible = projects.filter(
    (p) =>
      (sector === 'all' || p.sector === sector) &&
      (service === 'all' || p.services.includes(service)),
  );

  return (
    <div>
      <div className="space-y-4 border-y border-ink-100 py-5">
        <FilterRow label="Sector">
          <FilterButton active={sector === 'all'} onClick={() => setParam('sector', 'all')}>
            All
          </FilterButton>
          {sectors.map((s) => (
            <FilterButton key={s} active={sector === s} onClick={() => setParam('sector', s)}>
              {sectorLabel[s]}
            </FilterButton>
          ))}
        </FilterRow>

        <FilterRow label="Service">
          <FilterButton active={service === 'all'} onClick={() => setParam('service', 'all')}>
            All
          </FilterButton>
          {serviceOptions.map((s) => (
            <FilterButton key={s} active={service === s} onClick={() => setParam('service', s)}>
              {serviceTitle[s]}
            </FilterButton>
          ))}
        </FilterRow>
      </div>

      <p aria-live="polite" className="label-mono mt-5">
        {visible.length} {visible.length === 1 ? 'project' : 'projects'}
      </p>

      <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <m.div
              key={p.slug}
              initial={reduced ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduced ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: duration.base, ease: ease.settle }}
            >
              <ProjectCard project={p} />
            </m.div>
          ))}
        </AnimatePresence>
      </div>

      {visible.length === 0 && (
        <div className="mt-10">
          <p className="text-base text-ink-600">
            No projects match that combination. The site shows six of three hundred and twelve, so
            the gap is more likely ours than yours.
          </p>
          <button
            onClick={() => router.replace(pathname, { scroll: false })}
            className="mt-4 inline-flex min-h-11 touch-manipulation items-center text-sm text-signal-pass-ink hover:text-ink-900"
          >
            Clear both filters
          </button>
        </div>
      )}
    </div>
  );
}

function FilterRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="label-mono mr-2 w-14 shrink-0">{label}</span>
      {children}
    </div>
  );
}

function FilterButton({
  children,
  active,
  onClick,
}: {
  children: React.ReactNode;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        'inline-flex min-h-11 touch-manipulation items-center rounded-sm border px-3 font-mono text-[11px] uppercase tracking-[0.1em] transition-colors',
        active
          ? 'border-ink-900 bg-ink-900 text-paper'
          : 'border-ink-200 text-ink-500 hover:border-ink-400 hover:text-ink-900',
      )}
    >
      {children}
    </button>
  );
}
