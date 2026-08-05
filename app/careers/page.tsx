import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import SectionHead from '@/components/ui/SectionHead';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import CtaBand from '@/components/sections/CtaBand';
import { careersPitch, roles } from '@/content/roles';
import { company } from '@/content/company';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Careers | TAB Technicians & Commissioning Engineers | DATUM',
  'Open roles at an independent TAB and commissioning agency in Denver. Certification paid and scheduled. You will never be asked to soften a number.',
  '/careers',
);

export default function CareersPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Careers', path: '/careers' },
        ])}
      />

      <PageHeader
        eyebrow="Careers"
        title="Twenty-two people, no sales department"
        lead={careersPitch.lead}
        meta={[
          { label: 'Open roles', value: String(roles.length) },
          { label: 'Average tenure', value: '9.4 years' },
          { label: 'Certification', value: 'Paid and scheduled' },
          { label: 'Base', value: `${company.address.city}, ${company.address.state}` },
        ]}
      />

      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <SectionHead index="01" eyebrow="What it is like" title="Four things that are true here" />
          <Stagger className="mt-12 grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-4">
            {careersPitch.points.map((p, i) => (
              <StaggerItem key={p.title}>
                <div className="flex h-full flex-col bg-paper-raised p-6">
                  <span className="tabular font-mono text-xs text-ink-500">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-4 text-base leading-snug text-ink-900">{p.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-600">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <SectionHead index="02" eyebrow="Open roles" title="Currently hiring" />
          <Stagger className="mt-12 border-t border-ink-100">
            {roles.map((r) => (
              <StaggerItem key={r.slug}>
                <div className="grid gap-4 border-b border-ink-100 py-7 md:grid-cols-[1.1fr_1.6fr_auto] md:items-start md:gap-10">
                  <div>
                    <h3 className="text-lg leading-snug text-ink-900">{r.title}</h3>
                    <p className="mt-2 font-mono text-xs uppercase tracking-[0.1em] text-ink-500">
                      {r.location} · {r.type}
                    </p>
                  </div>
                  <p className="text-sm leading-relaxed text-ink-600">{r.summary}</p>
                  <Button
                    href={`mailto:${company.email.careers}?subject=${encodeURIComponent(r.title)}`}
                    variant="secondary"
                    size="sm"
                  >
                    Apply
                  </Button>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="py-20 md:py-24">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <SectionHead index="03" eyebrow="Benefits" title="What comes with it" />
            <Reveal>
              <ul className="border-t border-ink-100">
                {careersPitch.benefits.map((b) => (
                  <li key={b} className="border-b border-ink-100 py-4 text-base text-ink-700">
                    {b}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Nothing open that fits?"
        body="Send a résumé anyway. We hire ahead of need when the person is right, and field technicians with genuine mechanical experience are the hardest thing in this industry to find."
        primaryHref={`mailto:${company.email.careers}`}
        primaryLabel="Email careers"
      />
    </>
  );
}
