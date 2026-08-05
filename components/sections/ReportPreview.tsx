import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/motion/Reveal';
import ReadingTable from '@/components/data/ReadingTable';
import DeficiencyLog from '@/components/data/DeficiencyLog';
import { sampleDeficiencies, sampleReadingColumns, sampleReadingRows } from '@/content/reports';

export default function ReportPreview() {
  return (
    <section className="border-b border-ink-100 py-20 md:py-28">
      <Container>
        <SectionHead
          index="04"
          eyebrow="The deliverable"
          title="Nobody in this industry shows you the report."
          intro="Which is strange, because the report is the entire product. Here are two pages of one, unredacted apart from the client name."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <ReadingTable
              title="Terminal readings · L2 supply"
              meta="Sheet 14 of 148"
              columns={sampleReadingColumns}
              rows={sampleReadingRows}
              caption="Preliminary and final both shown. An agency that publishes only final readings is asking you to take the adjustment on faith."
            />
          </Reveal>

          <Reveal delay={0.08}>
            <DeficiencyLog items={sampleDeficiencies.slice(0, 3)} filterable={false} />
          </Reveal>
        </div>

        <Reveal delay={0.14}>
          <Link
            href="/reports"
            className="mt-10 inline-flex items-center gap-2 text-sm text-signal-pass-ink transition-colors hover:text-ink-900"
          >
            See the full set of deliverables
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
