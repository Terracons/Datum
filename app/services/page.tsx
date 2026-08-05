import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import ServiceIcon from '@/components/ui/ServiceIcon';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand';
import { services } from '@/content/services';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Services | TAB, Commissioning, Cleanroom & Containment | DATUM',
  'Air and hydronic balancing, building and retro-commissioning, cleanroom certification, sound and vibration, and ASHRAE 110 fume hood testing. Independent, NEBB certified.',
  '/services',
);

export default function ServicesPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Services', path: '/services' },
        ])}
      />

      <PageHeader
        eyebrow="Scope"
        title="Seven things we measure"
        lead="Every service below ends in a document somebody can act on. None of them ends in an invoice for equipment, because we do not sell any."
        meta={[
          { label: 'Governing standards', value: 'NEBB · AABC · ASHRAE · ISO' },
          { label: 'Fee structure', value: 'Fixed, against a scope matrix' },
          { label: 'Sampling, first balance', value: '100% of terminals' },
          { label: 'Report goes to', value: 'The owner, first' },
        ]}
      />

      <section className="py-20 md:py-24">
        <Container>
          <Stagger className="grid gap-px border border-ink-100 bg-ink-100 md:grid-cols-2">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col bg-paper-raised p-8 transition-colors hover:bg-paper"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex h-10 w-10 items-center justify-center border border-ink-100 text-signal-pass-ink">
                      <ServiceIcon name={s.icon} />
                    </span>
                    <ArrowUpRight
                      className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-signal-pass"
                      aria-hidden
                    />
                  </div>

                  <h2 className="mt-6 text-2xl tracking-[-0.015em] text-ink-900">{s.title}</h2>
                  <p className="mt-4 flex-1 text-base leading-relaxed text-ink-600">{s.summary}</p>

                  <dl className="mt-7 border-t border-ink-100 pt-4">
                    <dt className="label-mono">Standard</dt>
                    <dd className="mt-1.5 font-mono text-xs leading-relaxed text-ink-500">
                      {s.standard}
                    </dd>
                  </dl>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
