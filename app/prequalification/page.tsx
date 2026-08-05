import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import SpecTable from '@/components/ui/SpecTable';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand';
import { prequalification } from '@/content/prequalification';
import { company } from '@/content/company';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Prequalification | Documents for Preconstruction | DATUM',
  'COI, W-9, EMR letter, NEBB and AABC certificates, references, instrument inventory, and a complete sample report. Most items go out the same day.',
  '/prequalification',
);

export default function PrequalificationPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Prequalification', path: '/prequalification' },
        ])}
      />

      <PageHeader
        eyebrow="Preconstruction"
        title="Everything you need to add us to a bid list"
        lead={prequalification.lead}
        meta={[
          { label: 'Field technicians', value: '14' },
          { label: 'Typical mobilization', value: '2 to 3 weeks' },
          { label: 'EMR', value: '0.68' },
          { label: 'Most items', value: 'Same day' },
        ]}
      />

      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead index="01" eyebrow="Package" title="What we can send, and how fast" />
          <Stagger className="mt-12 grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2">
            {prequalification.packages.map((p) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col bg-paper-raised p-6">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-base text-ink-900">{p.title}</h3>
                    <span className="label-mono text-signal-pass-ink">{p.turnaround}</span>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.detail}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
            <div>
              <SectionHead index="02" eyebrow="Capacity" title="What we can actually staff" />
              <Reveal className="mt-10">
                <SpecTable specs={prequalification.capacity} />
              </Reveal>
            </div>

            <div>
              <SectionHead index="03" eyebrow="Before you add us" title="One thing worth flagging" />
              <Reveal className="mt-10">
                <div className="panel p-7">
                  <p className="text-base leading-relaxed text-ink-700">{prequalification.note}</p>
                  <p className="mt-6 border-t border-ink-100 pt-5 text-sm text-ink-500">
                    Questions about terms go to{' '}
                    <a
                      href={`mailto:${company.email.scope}`}
                      className="text-signal-pass-ink hover:text-ink-900"
                    >
                      {company.email.scope}
                    </a>{' '}
                    or {company.phone.main}.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Request the prequalification package."
        body="Tell us which documents your process needs and the entity name for the certificate of insurance. Most of it is back to you the same day."
        primaryLabel="Request documents"
      />
    </>
  );
}
