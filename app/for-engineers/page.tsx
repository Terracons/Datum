import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import SpecBlock from '@/components/ui/SpecBlock';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand';
import { engineerNotes, specSections } from '@/content/engineers';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'For Engineers | CSI Spec Language, 23 05 93 & 01 91 13 | DATUM',
  'Free, paste-able CSI specification language for TAB and commissioning, including the independence and reporting clauses most specifications are missing.',
  '/for-engineers',
);

export default function ForEngineersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'For Engineers', path: '/for-engineers' },
        ])}
      />

      <PageHeader
        eyebrow="For specifiers"
        title="Spec language you can paste into your own documents"
        lead="Free, unbranded, and written to be used rather than to be admired. Take it wholesale, edit it, put your own firm's name on it. We would rather every TAB specification in the region had an independence clause in it than have this page generate a single lead."
        meta={[
          { label: 'Format', value: 'CSI three-part' },
          { label: 'Licence', value: 'Use freely, no attribution' },
          { label: 'Sections', value: String(specSections.length) },
          { label: 'Last reviewed', value: 'January 2026' },
        ]}
      />

      <section className="border-b border-ink-100 py-16 md:py-20">
        <Container>
          <SectionHead
            index="01"
            eyebrow="Four clauses that matter"
            title="If you change nothing else, change these"
          />
          <Stagger className="mt-12 grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {engineerNotes.map((n, i) => (
              <StaggerItem key={n.title}>
                <div className="flex h-full flex-col bg-paper-raised p-6">
                  <span className="tabular font-mono text-xs text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-base leading-snug text-ink-900">{n.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{n.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <SectionHead
            index="02"
            eyebrow="Sections"
            title="Take what you need"
            intro="Bracketed items are project decisions. Nothing here names DATUM, and nothing here is written so that only DATUM could meet it."
          />

          <div className="mt-12 space-y-10">
            {specSections.map((s, i) => (
              <Reveal key={s.slug} delay={i * 0.05}>
                <SpecBlock section={s} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Want us to review your draft specification?"
        body="Send the TAB or commissioning section before it goes out. We will mark it up and send it back, at no cost and with no expectation that we bid the work. A better specification makes every agency on the list behave better, including the ones we compete with."
        primaryLabel="Send a draft spec"
      />
    </>
  );
}
