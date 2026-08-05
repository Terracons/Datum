import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import SectionHead from '@/components/ui/SectionHead';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { services } from '@/content/services';

export default function ServicesGrid() {
  return (
    <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-28">
      <Container>
        <SectionHead
          index="02"
          eyebrow="Scope"
          title="Seven things we measure, and nothing we sell"
          intro="Each one produces a document somebody can act on. None of them produces an invoice for equipment."
        />

        <Stagger className="mt-14 grid gap-px border border-ink-100 bg-ink-100 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s) => (
            <StaggerItem key={s.slug}>
              <Link
                href={`/services/${s.slug}`}
                className="group flex h-full flex-col bg-paper-raised p-7 transition-colors hover:bg-paper"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl tracking-[-0.01em] text-ink-900">{s.shortTitle}</h3>
                  <ArrowUpRight
                    className="h-4 w-4 shrink-0 text-ink-400 transition-colors group-hover:text-signal-pass"
                    aria-hidden
                  />
                </div>
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-600">{s.summary}</p>
                <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.1em] text-ink-500">
                  {s.standard.split('·')[0].trim()}
                </p>
              </Link>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
