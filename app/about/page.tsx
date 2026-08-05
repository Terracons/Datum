import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import Stat from '@/components/ui/Stat';
import Tag from '@/components/ui/Tag';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CertificationsBand from '@/components/sections/CertificationsBand';
import CtaBand from '@/components/sections/CtaBand';
import { company } from '@/content/company';
import { team, teamStats } from '@/content/team';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'About | Independent TAB & Commissioning Agency | DATUM',
  'Twenty-two people in Denver who measure mechanical systems and write down what they find. Founded 2006. NEBB certified, AABC member.',
  '/about',
);

export default function AboutPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
        ])}
      />

      <PageHeader
        eyebrow="The firm"
        title="A datum is the fixed point every other measurement is taken from"
        lead="That is the whole business. Twenty-two people who put instruments on mechanical systems and write down what the instruments said, for owners who need a number they can hold somebody to."
        meta={[
          { label: 'Founded', value: String(company.founded) },
          { label: 'Staff', value: String(company.stats.staff) },
          { label: 'Buildings', value: String(company.stats.buildings) },
          { label: 'Base', value: `${company.address.city}, ${company.address.state}` },
        ]}
      />

      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHead index="01" eyebrow="Origin" title="Why the firm exists" />
            <div className="space-y-5">
              <Reveal>
                <p className="measure text-lg leading-relaxed text-ink-600">
                  Ruth Ortega-Vance spent eleven years as a mechanical designer before founding
                  DATUM. In that time she watched three of her own designs get certified as balanced
                  when the buildings demonstrably were not: rooms that could not hold pressure,
                  fans riding their curves at full speed, reports where every single terminal landed
                  within three percent of design.
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="measure text-lg leading-relaxed text-ink-600">
                  None of those agencies were dishonest in any way they would have recognised. They
                  were subcontractors to the mechanical contractor, being paid by the party whose
                  work they were grading, under a schedule that treated a finding as a delay. The
                  structure produced the result.
                </p>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="measure text-lg leading-relaxed text-ink-600">
                  DATUM was set up to have a different structure, and then to make that structure
                  the thing it sells. Twenty years on, we still do not install anything.
                </p>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      <section className="border-b border-ink-100 bg-paper-raised py-14">
        <Container>
          <Stagger className="grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4">
            {teamStats.map((s) => (
              <StaggerItem key={s.label}>
                <Stat value={s.value} label={s.label} decimals={s.decimals} />
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead
            index="02"
            eyebrow="People"
            title="Who signs the report"
            intro="In this business the individual credentials matter as much as the firm's, because the specification usually names them. Every certification below is current."
          />

          <Stagger className="mt-14 grid gap-px border border-ink-100 bg-ink-100 md:grid-cols-2">
            {team.map((m) => (
              <StaggerItem key={m.name}>
                <article className="flex h-full flex-col bg-paper-raised p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg tracking-[-0.01em] text-ink-900">{m.name}</h3>
                    <span className="tabular font-mono text-xs text-ink-500">since {m.since}</span>
                  </div>
                  <p className="mt-1 text-sm text-signal-pass-ink">{m.role}</p>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{m.bio}</p>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {m.credentials.map((c) => (
                      <Tag key={c}>{c}</Tag>
                    ))}
                  </div>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CertificationsBand />

      <CtaBand />
    </>
  );
}
