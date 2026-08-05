import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import DesignVsMeasured from '@/components/data/DesignVsMeasured';
import ReadingTable from '@/components/data/ReadingTable';
import DeficiencyLog from '@/components/data/DeficiencyLog';
import CtaBand from '@/components/sections/CtaBand';
import {
  reportPrinciples,
  reportSamples,
  sampleComparison,
  sampleDeficiencies,
  sampleReadingColumns,
  sampleReadingRows,
} from '@/content/reports';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Sample Reports | What You Actually Receive | DATUM',
  'Real TAB and commissioning deliverables, shown rather than described: terminal reading schedules, design-vs-measured comparisons, and the deficiency log on page two.',
  '/reports',
);

export default function ReportsPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Sample Reports', path: '/reports' },
        ])}
      />

      <PageHeader
        eyebrow="The deliverable"
        title="This is the product. So here it is."
        lead="Balance reports are famously ugly PDFs that nobody outside the trade can read, which is convenient for agencies that would rather their findings were not read. Below is what DATUM actually issues, taken from live projects with the client names removed and nothing else changed."
        meta={[
          { label: 'Typical TAB report', value: '148 pages' },
          { label: 'Typical Cx report', value: '320 pages' },
          { label: 'Reading data', value: 'CSV, always' },
          { label: 'Deficiency log', value: 'Page 2, never an appendix' },
        ]}
      />

      {/* page 1: the comparison */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead
            index="01"
            eyebrow="Executive summary"
            title="Design versus measured, on one page"
            intro="The first thing an owner sees is not a table of readings. It is which systems met design and which did not, with the tolerance band drawn so the judgement is visible rather than asserted."
          />
          <Reveal className="mt-12">
            <DesignVsMeasured
              rows={sampleComparison}
              title="Level 2 · Summary by terminal"
              caption="Three in tolerance, two deviations, one deficiency. The soiled holding exhaust at 54.7% of design is the one that matters: that room could not be held negative to the corridor, which is an infection control problem rather than a comfort problem."
            />
          </Reveal>
        </Container>
      </section>

      {/* page 2: the log */}
      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <SectionHead
            index="02"
            eyebrow="Page two"
            title="The deficiency log, where it belongs"
            intro="Every finding carries a unique ID, a system, a location, a drawing reference, a severity, and a required action with a responsible party. It is tracked from open to verified, and we re-test rather than accept written confirmation."
          />
          <Reveal className="mt-12">
            <DeficiencyLog items={sampleDeficiencies} title="Deficiency log · Rev 2" />
          </Reveal>
        </Container>
      </section>

      {/* the readings */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead
            index="03"
            eyebrow="The record"
            title="Every reading, preliminary and final"
            intro="Not a sample, not a summary. If we measured it, it is in here, with the design value beside it and the percentage already calculated so nobody has to trust that the division was done correctly."
          />
          <Reveal className="mt-12">
            <ReadingTable
              title="Terminal readings · L2 supply and return"
              meta="Sheet 14 of 148"
              columns={sampleReadingColumns}
              rows={sampleReadingRows}
              caption="Two of the three diffusers in room 224 below 77% of design is a pattern, not two problems. The log entry names the branch damper above the hard ceiling, not the diffusers."
            />
          </Reveal>
        </Container>
      </section>

      {/* principles */}
      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <SectionHead
            index="04"
            eyebrow="Rules"
            title="Six things every DATUM report does"
            intro="None of these are industry standard. All of them should be."
          />
          <Stagger className="mt-14 grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
            {reportPrinciples.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col bg-paper-raised p-7">
                  <span className="tabular font-mono text-xs text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-lg leading-snug text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* the full set */}
      <section className="py-20 md:py-24">
        <Container>
          <SectionHead
            index="05"
            eyebrow="Deliverables"
            title="What arrives, by service"
            intro="Every one of these is available as a complete redacted sample on request. We send the whole document, findings included, not an excerpt."
          />

          <Stagger className="mt-14 grid gap-6 md:grid-cols-2">
            {reportSamples.map((r) => (
              <StaggerItem key={r.slug}>
                <article className="panel flex h-full flex-col p-7">
                  <div className="flex flex-wrap items-baseline justify-between gap-3">
                    <h3 className="text-xl tracking-[-0.01em] text-ink-900">{r.title}</h3>
                    <span className="label-mono">{r.kind}</span>
                  </div>
                  <p className="mt-4 text-sm leading-relaxed text-ink-600">{r.summary}</p>

                  <ul className="mt-6 flex-1 space-y-2 border-t border-ink-100 pt-5">
                    {r.contains.map((c) => (
                      <li key={c} className="flex gap-3 text-sm text-ink-600">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-signal-pass" aria-hidden />
                        {c}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 border-t border-ink-100 pt-4">
                    <div className="flex items-baseline gap-2">
                      <dt className="label-mono">Typical length</dt>
                      <dd className="tabular font-mono text-xs text-ink-900">{r.pages} pp</dd>
                    </div>
                    <div className="flex items-baseline gap-2">
                      <dt className="label-mono">Format</dt>
                      <dd className="font-mono text-xs text-ink-900">{r.format}</dd>
                    </div>
                  </dl>
                </article>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <CtaBand
        title="Ask for a complete sample report."
        body="Not an excerpt and not a template: a real redacted report from a project of your type, with the deficiency log intact. It is the fastest way to tell whether an agency is worth hiring, ours or anyone else's."
        primaryLabel="Request a sample report"
      />
    </>
  );
}
