import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import SpecTable from '@/components/ui/SpecTable';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand';
import { calibration, certifications, insurance } from '@/content/certifications';
import { company } from '@/content/company';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Certifications | NEBB, AABC, BCxP, CxA, LEED AP | DATUM',
  'Firm and individual certifications, insurance limits, registrations, and the instrument calibration policy. Everything a specifier or preconstruction team needs on file.',
  '/certifications',
);

export default function CertificationsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Certifications', path: '/certifications' },
        ])}
      />

      <PageHeader
        eyebrow="Credentials"
        title="Certification does not make a firm honest"
        lead="It makes dishonesty expensive and visible, which is the most any structure can do. Here is every credential DATUM holds, what it actually requires, and what it would cost us to lose it."
        meta={[
          { label: 'NEBB certified since', value: '2007' },
          { label: 'AABC member since', value: '2009' },
          { label: 'Individual certifications', value: '17' },
          { label: 'EMR', value: '0.68' },
        ]}
      />

      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead index="01" eyebrow="Firm and individual" title="What each credential requires" />
          <Stagger className="mt-14 border-t border-ink-100">
            {certifications.map((c) => (
              <StaggerItem key={c.abbr}>
                <div className="grid gap-4 border-b border-ink-100 py-7 md:grid-cols-[8rem_1fr_1.6fr] md:gap-10">
                  <div>
                    <p className="font-display text-2xl tracking-[0.04em] text-ink-900">{c.abbr}</p>
                    <p className="tabular mt-1 font-mono text-xs text-ink-500">since {c.since}</p>
                  </div>
                  <div>
                    <h3 className="text-base leading-snug text-ink-900">{c.name}</h3>
                    <p className="mt-2 font-mono text-xs text-ink-500">{c.issuer}</p>
                    {c.holders && (
                      <p className="mt-2 font-mono text-xs text-signal-pass-ink">
                        {c.holders} on staff
                      </p>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-ink-600">{c.detail}</p>
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
              <SectionHead index="02" eyebrow="Registrations" title="On file and current" />
              <Reveal className="mt-10">
                <SpecTable
                  specs={company.registrations.map((r) => ({ label: r.label, value: r.number }))}
                />
              </Reveal>
              <Reveal delay={0.08} className="mt-10">
                <h3 className="label-mono">Territory</h3>
                <p className="mt-3 text-base text-ink-600">{company.territory.join(' · ')}</p>
              </Reveal>
            </div>

            <div>
              <SectionHead index="03" eyebrow="Insurance" title="Limits carried" />
              <Reveal className="mt-10">
                <SpecTable specs={insurance} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHead index="04" eyebrow="Instruments" title="Calibration policy" />
            <div>
              <Reveal>
                <p className="measure text-lg leading-relaxed text-ink-600">{calibration.policy}</p>
              </Reveal>
              <Reveal delay={0.08} className="mt-8">
                <SpecTable
                  specs={[
                    { label: 'Interval', value: calibration.interval },
                    { label: 'Service', value: calibration.lab },
                    { label: 'Certificates', value: 'Attached to every report, unrequested' },
                    { label: 'Out-of-calibration instruments', value: 'Do not go in the field' },
                  ]}
                />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need documents for a prequalification package?"
        body="Certificates, COI, EMR letter, safety program, references, and instrument inventory. Most of it goes out the same day."
        primaryHref="/prequalification"
        primaryLabel="Prequalification package"
      />
    </>
  );
}
