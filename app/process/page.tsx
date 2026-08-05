import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import Accordion from '@/components/ui/Accordion';
import Reveal from '@/components/motion/Reveal';
import ProcessTimeline from '@/components/sections/ProcessTimeline';
import CtaBand from '@/components/sections/CtaBand';
import { engagementFaq, processSteps } from '@/content/process';
import { buildMetadata, breadcrumbJsonLd, faqJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Process | What a TAB or Cx Engagement Looks Like | DATUM',
  'From fixed-fee scope through design review, static readings, balancing, functional testing, the report, and the ten-month warranty review.',
  '/process',
);

export default function ProcessPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Process', path: '/process' },
        ])}
      />
      <JsonLd data={faqJsonLd(engagementFaq)} />

      <PageHeader
        eyebrow="Engagement"
        title="Eight stages, and where each one usually goes wrong"
        lead="Nobody in this business has an emergency. It is a slow, credential-driven, document-heavy process, and most of the value of hiring an experienced agency is that we know which stage is about to cost you a schedule."
        meta={[
          { label: 'Typical Cx engagement', value: '14 to 22 months' },
          { label: 'Typical TAB engagement', value: '4 to 8 weeks field' },
          { label: 'Fee structure', value: 'Fixed against scope matrix' },
          { label: 'Warranty review', value: '10 months post-occupancy' },
        ]}
      />

      <ProcessTimeline steps={processSteps} />

      <section className="py-20 md:py-24">
        <Container size="content">
          <SectionHead eyebrow="Questions" title="What owners ask before signing" />
          <Reveal className="mt-12">
            <Accordion items={engagementFaq} />
          </Reveal>
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
