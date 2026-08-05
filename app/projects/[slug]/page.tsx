import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import Tag from '@/components/ui/Tag';
import Stat from '@/components/ui/Stat';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import DesignVsMeasured from '@/components/data/DesignVsMeasured';
import DeficiencyLog from '@/components/data/DeficiencyLog';
import DuctSchematic from '@/components/graphics/DuctSchematic';
import TestimonialSlab from '@/components/sections/TestimonialSlab';
import CtaBand from '@/components/sections/CtaBand';
import ProjectCard from '@/components/projects/ProjectCard';
import { deliveryLabel, getProject, projects, sectorLabel } from '@/content/projects';
import { serviceTitle } from '@/content/services';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';
import { formatSqFt } from '@/lib/utils';

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return buildMetadata('Not found | DATUM', 'Page not found.');
  return buildMetadata(project.seo.title, project.seo.description, `/projects/${project.slug}`);
}

export default async function ProjectDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Projects', path: '/projects' },
          { name: project.title, path: `/projects/${project.slug}` },
        ])}
      />

      <PageHeader
        eyebrow={`${sectorLabel[project.sector]} · ${project.year}`}
        title={project.title}
        lead={project.brief[0]}
        meta={[
          { label: 'Client', value: project.client },
          { label: 'Location', value: project.location },
          { label: 'Area', value: `${formatSqFt(project.squareFeet)} sq ft` },
          { label: 'Delivery', value: deliveryLabel[project.delivery] },
        ]}
      >
        <div className="flex flex-wrap gap-2">
          {project.services.map((s) => (
            <Tag key={s}>{serviceTitle[s]}</Tag>
          ))}
        </div>
      </PageHeader>

      {/* metrics */}
      <section className="border-b border-ink-100 bg-paper-raised py-14">
        <Container>
          <Stagger className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {project.metrics.map((m) => (
              <StaggerItem key={m.label}>
                <Stat
                  value={m.value}
                  label={m.label}
                  prefix={m.prefix}
                  suffix={m.suffix}
                  decimals={m.decimals}
                />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* narrative */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-3 lg:gap-16">
            <Narrative index="01" title="The brief" body={project.brief} />
            <Narrative index="02" title="What we did" body={project.approach} />
            <Narrative index="03" title="What came out of it" body={project.outcome} />
          </div>
        </Container>
      </section>

      {/* the data */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 opacity-[0.14]" aria-hidden>
          <DuctSchematic seed={project.seed} density={1} />
        </div>
        <Container className="relative">
          <SectionHead
            index="04"
            eyebrow="Measured"
            title="Design intent against what the instrument read"
            intro="A selection from the report. The full document runs to every terminal on the project."
          />
          <Reveal className="mt-12">
            <DesignVsMeasured rows={project.comparison} title={`${project.client} · selected readings`} />
          </Reveal>
        </Container>
      </section>

      {/* deficiencies */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead
            index="05"
            eyebrow="Findings"
            title="The deficiency log"
            intro="Abridged to the entries that changed something. Each one carried a drawing reference and a required action, and each was re-tested by us rather than closed on a written assurance."
          />
          <Reveal className="mt-12">
            <DeficiencyLog items={project.deficiencies} title={`${project.title} · deficiency log`} />
          </Reveal>

          <Reveal delay={0.1}>
            <dl className="mt-12 grid gap-6 border-t border-ink-100 pt-8 sm:grid-cols-2 lg:grid-cols-4">
              {project.spec.map((s) => (
                <div key={s}>
                  <dd className="text-sm leading-relaxed text-ink-600">{s}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {project.testimonial && <TestimonialSlab testimonial={project.testimonial} />}

      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <div className="flex items-baseline justify-between gap-6">
            <SectionHead eyebrow="More work" title="Other projects" />
            <Link href="/projects" className="shrink-0 text-sm text-signal-pass-ink hover:text-ink-900">
              All projects
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {others.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.07}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}

function Narrative({ index, title, body }: { index: string; title: string; body: string[] }) {
  return (
    <div>
      <Reveal y={12}>
        <p className="eyebrow flex items-center gap-3">
          <span className="text-ink-500">{index}</span>
          <span className="h-px w-6 bg-signal-pass/60" aria-hidden />
          <span>{title}</span>
        </p>
      </Reveal>
      {body.map((p, i) => (
        <Reveal key={i} delay={0.06 + i * 0.05}>
          <p className="mt-5 text-base leading-relaxed text-ink-600">{p}</p>
        </Reveal>
      ))}
    </div>
  );
}
