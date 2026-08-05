import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import TickRule from '@/components/graphics/TickRule';
import CtaBand from '@/components/sections/CtaBand';
import { pledge } from '@/content/independence';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Independence | We Do Not Install Anything | DATUM',
  'The conflict-of-interest position, in full: what DATUM will not do, what each commitment costs us, and the work we have turned down to keep it true.',
  '/independence',
);

export default function IndependencePage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Independence', path: '/independence' },
        ])}
      />

      <PageHeader eyebrow="The position" title={pledge.title} lead={pledge.lead} />

      {/* the three commitments */}
      <section className="border-b border-ink-100 py-20 md:py-28">
        <Container>
          <Stagger className="grid gap-px bg-ink-100 md:grid-cols-3">
            {pledge.commitments.map((c) => (
              <StaggerItem key={c.index}>
                <div className="flex h-full flex-col bg-paper p-8">
                  <span className="tabular font-mono text-xs text-signal-pass-ink">{c.index}</span>
                  <h2 className="mt-5 text-xl leading-snug tracking-[-0.01em] text-ink-900">
                    {c.title}
                  </h2>
                  <p className="mt-5 flex-1 text-base leading-relaxed text-ink-600">{c.body}</p>
                  <p className="mt-7 border-t border-ink-100 pt-4 font-mono text-xs leading-relaxed text-ink-500">
                    {c.cost}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* structural */}
      <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal y={12}>
              <h2 className="text-3xl tracking-[-0.02em]">{pledge.structural.title}</h2>
            </Reveal>
            <div>
              {pledge.structural.body.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p className="measure mb-5 text-lg leading-relaxed text-ink-600">{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* disclosure */}
      <section className="border-b border-ink-100 py-20 md:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <Reveal y={12}>
              <h2 className="text-3xl tracking-[-0.02em]">{pledge.conflicts.title}</h2>
            </Reveal>
            <Stagger className="border-t border-ink-100">
              {pledge.conflicts.items.map((item, i) => (
                <StaggerItem key={item}>
                  <div className="flex gap-5 border-b border-ink-100 py-5">
                    <span className="tabular font-mono text-xs text-ink-500">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <p className="text-base leading-relaxed text-ink-700">{item}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </Container>
      </section>

      {/* refusals: the proof */}
      <section className="border-b border-ink-100 bg-ink-900 py-20 text-ink-400 md:py-28">
        <Container>
          <Reveal y={12}>
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-pass">Proof</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="mt-5 text-3xl tracking-[-0.02em] text-paper">{pledge.refusals.title}</h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="measure mt-6 text-lg text-ink-500">{pledge.refusals.body}</p>
          </Reveal>

          <Stagger className="mt-14 border-t border-ink-800">
            {pledge.refusals.items.map((item) => (
              <StaggerItem key={item.year}>
                <div className="grid gap-4 border-b border-ink-800 py-6 md:grid-cols-[6rem_1fr] md:gap-10">
                  <span className="tabular font-mono text-sm text-signal-pass">{item.year}</span>
                  <p className="max-w-3xl text-base leading-relaxed text-ink-400">{item.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      {/* the four questions */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
            <div>
              <Reveal y={12}>
                <h2 className="text-3xl tracking-[-0.02em]">{pledge.question.title}</h2>
              </Reveal>
              <Reveal delay={0.06}>
                <p className="mt-6 text-lg leading-relaxed text-ink-600">{pledge.question.body}</p>
              </Reveal>
              <Reveal delay={0.12}>
                <TickRule accent className="mt-8 max-w-[10rem]" />
              </Reveal>
            </div>

            <Stagger>
              {pledge.question.items.map((q, i) => (
                <StaggerItem key={q}>
                  <div className="mb-4 flex gap-5 border border-ink-100 bg-paper-raised p-6">
                    <span className="tabular font-mono text-xs text-signal-pass-ink">
                      Q{i + 1}
                    </span>
                    <p className="text-lg leading-snug text-ink-900">{q}</p>
                  </div>
                </StaggerItem>
              ))}
              <StaggerItem>
                <Button href="/reports" variant="secondary" className="mt-4">
                  Our answer to the fourth one
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Button>
              </StaggerItem>
            </Stagger>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Ask us the four questions."
        body="We will answer them in writing, with the disclosure attached, before you have decided anything. If the answers do not hold up, you have lost an email."
      />
    </>
  );
}
