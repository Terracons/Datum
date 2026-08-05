import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import Reveal from '@/components/motion/Reveal';
import { pledge } from '@/content/independence';

export default function IndependencePledge() {
  return (
    <section className="border-b border-ink-100 bg-ink-900 py-20 text-ink-200 md:py-28">
      <Container>
        <Reveal y={12}>
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-signal-pass">
            {pledge.eyebrow}
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="mt-5 max-w-3xl text-3xl tracking-[-0.02em] text-paper">{pledge.title}</h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="measure mt-6 text-lg text-ink-400">{pledge.lead}</p>
        </Reveal>

        <Stagger className="mt-14 grid gap-px bg-ink-800 md:grid-cols-3">
          {pledge.commitments.map((c) => (
            <StaggerItem key={c.index}>
              <div className="flex h-full flex-col bg-ink-900 p-7">
                <span className="tabular font-mono text-xs text-signal-pass">{c.index}</span>
                <h3 className="mt-5 text-lg leading-snug text-paper">{c.title}</h3>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-500">{c.body}</p>
                <p className="mt-6 border-t border-ink-800 pt-4 text-xs leading-relaxed text-ink-500">
                  {c.cost}
                </p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>

        <Reveal delay={0.2}>
          <Link
            href="/independence"
            className="mt-10 inline-flex items-center gap-2 text-sm text-signal-pass transition-colors hover:text-paper"
          >
            The work we have turned down
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
