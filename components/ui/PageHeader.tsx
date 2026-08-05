import type { ReactNode } from 'react';
import Container from '@/components/ui/Container';
import Reveal from '@/components/motion/Reveal';
import TickRule from '@/components/graphics/TickRule';

interface Props {
  eyebrow: string;
  title: ReactNode;
  lead?: ReactNode;
  meta?: { label: string; value: string }[];
  children?: ReactNode;
}

export default function PageHeader({ eyebrow, title, lead, meta, children }: Props) {
  return (
    <header className="relative overflow-hidden border-b border-ink-100 bg-paper-raised pb-14 pt-32 md:pb-20 md:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden />
      <Container className="relative">
        <Reveal y={12}>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="mt-5 max-w-4xl text-4xl tracking-[-0.025em]">{title}</h1>
        </Reveal>
        {lead && (
          <Reveal delay={0.12}>
            <div className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-600">{lead}</div>
          </Reveal>
        )}
        {children && <div className="mt-10">{children}</div>}
        {meta && (
          <Reveal delay={0.18}>
            <div className="mt-12">
              <TickRule />
              <dl className="grid grid-cols-2 gap-8 pt-6 sm:grid-cols-4">
                {meta.map((item) => (
                  <div key={item.label}>
                    <dt className="label-mono">{item.label}</dt>
                    <dd className="tabular mt-2 font-mono text-sm text-ink-900">{item.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        )}
      </Container>
    </header>
  );
}
