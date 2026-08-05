import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHead from '@/components/ui/SectionHead';
import Reveal from '@/components/motion/Reveal';
import { positioning } from '@/content/company';
import { pledge } from '@/content/independence';

export default function Positioning() {
  return (
    <section className="border-b border-ink-100 py-20 md:py-28">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
          <SectionHead index="01" eyebrow={positioning.eyebrow} title={positioning.title} />

          <div>
            {positioning.body.map((p, i) => (
              <Reveal key={i} delay={0.06 * i}>
                <p className="measure mb-5 text-lg leading-relaxed text-ink-600">{p}</p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <ol className="mt-8 border-t border-ink-100">
                {pledge.commitments.map((c) => (
                  <li key={c.index} className="flex gap-5 border-b border-ink-100 py-5">
                    <span className="tabular font-mono text-xs text-ink-500">{c.index}</span>
                    <p className="text-base leading-relaxed text-ink-900">{c.title}</p>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal delay={0.26}>
              <Link
                href="/independence"
                className="mt-8 inline-flex items-center gap-2 text-sm text-signal-pass-ink transition-colors hover:text-ink-900"
              >
                What each of those costs us
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}
