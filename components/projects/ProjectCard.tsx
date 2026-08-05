import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import DuctSchematic from '@/components/graphics/DuctSchematic';
import Tag from '@/components/ui/Tag';
import type { Project } from '@/types';
import { deliveryLabel, sectorLabel } from '@/content/projects';
import { formatSqFt } from '@/lib/utils';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col border border-ink-100 bg-paper-raised transition-shadow hover:shadow-lift"
    >
      <div className="relative h-44 overflow-hidden border-b border-ink-100 bg-paper-sunken">
        <DuctSchematic seed={project.seed} density={0.55} className="opacity-70" />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-4 py-2.5">
          <span className="tabular font-mono text-[11px] text-ink-500">{project.year}</span>
          <span className="tabular font-mono text-[11px] text-ink-500">
            {formatSqFt(project.squareFeet)} sq ft
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg leading-snug tracking-[-0.01em] text-ink-900">{project.title}</h3>
          <ArrowUpRight
            className="mt-1 h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-signal-pass"
            aria-hidden
          />
        </div>
        <p className="mt-2 text-sm text-ink-500">{project.location}</p>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{project.brief[0]}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          <Tag>{sectorLabel[project.sector]}</Tag>
          <Tag>{deliveryLabel[project.delivery]}</Tag>
        </div>
      </div>
    </Link>
  );
}
