import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import SpecTable from '@/components/ui/SpecTable';
import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import DuctSchematic from '@/components/graphics/DuctSchematic';
import ProjectCard from '@/components/projects/ProjectCard';
import CtaBand from '@/components/sections/CtaBand';
import { getService, services } from '@/content/services';
import { projects } from '@/content/projects';
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, serviceJsonLd, JsonLd } from '@/lib/seo';

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return buildMetadata('Not found | DATUM', 'Page not found.');
  return buildMetadata(service.seo.title, service.seo.description, `/services/${service.slug}`);
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = projects.filter((p) => p.services.includes(service.slug)).slice(0, 3);
  const seedIndex = services.findIndex((s) => s.slug === service.slug);

  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
          { name: service.shortTitle, path: `/services/${service.slug}` },
        ])}
      />
      <JsonLd
        data={serviceJsonLd(service.title, service.seo.description, `/services/${service.slug}`)}
      />
      {service.faq && <JsonLd data={faqJsonLd(service.faq)} />}

      <PageHeader eyebrow={service.shortTitle} title={service.title} lead={service.lead} />

      {/* the problem */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHead
              index="01"
              eyebrow="Why people call"
              title="What this usually looks like before we arrive"
            />
            <Stagger className="border-t border-ink-100">
              {service.problem.map((p, i) => (
                <StaggerItem key={p}>
                  <div className="flex gap-5 border-b border-ink-100 py-5">
                    <span className="tabular font-mono text-xs text-ink-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-relaxed text-ink-700">{p}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* method */}
      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <SectionHead
            index="02"
            eyebrow="Method"
            title="How the work is actually done"
            intro={service.standard}
          />
          <Stagger className="mt-14 grid gap-px border border-ink-100 bg-ink-100 md:grid-cols-2">
            {service.method.map((m, i) => (
              <StaggerItem key={m.name}>
                <div className="flex h-full flex-col bg-paper-raised p-7">
                  <span className="tabular font-mono text-xs text-signal-pass-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg leading-snug text-ink-900">{m.name}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{m.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* deliverables + specs */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead index="03" eyebrow="Deliverables" title="What you receive" />
              <Stagger className="mt-10 border-t border-ink-100">
                {service.deliverables.map((d) => (
                  <StaggerItem key={d}>
                    <div className="flex gap-4 border-b border-ink-100 py-3.5">
                      <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-signal-pass" aria-hidden />
                      <p className="text-sm leading-relaxed text-ink-700">{d}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
              <Reveal delay={0.1}>
                <Link
                  href="/reports"
                  className="mt-8 inline-flex items-center gap-2 text-sm text-signal-pass-ink hover:text-ink-900"
                >
                  See a sample of these documents
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </Reveal>
            </div>

            <div>
              <SectionHead index="04" eyebrow="Parameters" title="Standards and tolerances" />
              <Reveal className="mt-10">
                <SpecTable specs={service.specs} />
              </Reveal>

              <Reveal delay={0.08} className="mt-12">
                <h3 className="label-mono">Instruments used</h3>
                <div className="panel mt-4">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="border-b border-ink-100 bg-paper-sunken">
                        <th scope="col" className="label-mono px-4 py-2.5 text-left font-medium">
                          Instrument
                        </th>
                        <th scope="col" className="label-mono px-4 py-2.5 text-left font-medium">
                          Model
                        </th>
                        <th scope="col" className="label-mono px-4 py-2.5 text-left font-medium">
                          Calibration
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.instruments.map((inst) => (
                        <tr key={inst.model} className="border-b border-ink-100 last:border-0">
                          <td className="px-4 py-2.5 text-ink-700">{inst.name}</td>
                          <td className="px-4 py-2.5 font-mono text-xs text-ink-900">{inst.model}</td>
                          <td className="px-4 py-2.5 text-xs text-ink-500">{inst.calibration}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* typical findings */}
      <section className="relative overflow-hidden border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-[0.18] lg:block" aria-hidden>
          <DuctSchematic seed={seedIndex + 2} density={0.8} />
        </div>
        <Container className="relative">
          <SectionHead
            index="05"
            eyebrow="Findings"
            title="Things we have actually found doing this"
            intro="Not hypotheticals. Each of these came out of a real report, and each of them was invisible from the drawings."
          />
          <Stagger className="mt-12 max-w-3xl border-t border-ink-100">
            {service.typicalFindings.map((f) => (
              <StaggerItem key={f}>
                <div className="flex gap-4 border-b border-ink-100 py-4">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-signal-deviation" aria-hidden />
                  <p className="text-base leading-relaxed text-ink-700">{f}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {service.faq && (
        <section className="border-b border-ink-100 py-20 md:py-24">
          <Container size="content">
            <SectionHead index="06" eyebrow="Questions" title="Asked often enough to answer here" />
            <Reveal className="mt-12">
              <Accordion items={service.faq} />
            </Reveal>
          </Container>
        </section>
      )}

      {related.length > 0 && (
        <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
          <Container>
            <SectionHead eyebrow="Related work" title="Projects with this in scope" />
            <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.07}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </Container>
        </section>
      )}

      <CtaBand
        title={`Scope a ${service.shortTitle.toLowerCase()} engagement.`}
        body="Send the drawings and the specification. You will get a fixed fee against a written scope matrix that states exactly what will be tested and at what sampling rate."
      />
    </>
  );
}
