import Container from '@/components/ui/Container';
import SectionHead from '@/components/ui/SectionHead';
import { Stagger, StaggerItem } from '@/components/motion/Stagger';
import { processSteps } from '@/content/process';

export default function ProcessTimeline({ steps = processSteps.slice(0, 6) }: { steps?: typeof processSteps }) {
  return (
    <section className="border-b border-ink-100 bg-paper-raised py-20 md:py-28">
      <Container>
        <SectionHead
          index="05"
          eyebrow="Engagement"
          title="What actually happens, in order"
          intro="Nobody here has an emergency. This is a slow, document-heavy process, and knowing where it goes wrong is most of the value."
        />

        <Stagger className="mt-14 border-t border-ink-100">
          {steps.map((step) => (
            <StaggerItem key={step.order}>
              <div className="grid gap-4 border-b border-ink-100 py-7 md:grid-cols-[4rem_1fr_1.4fr_1fr] md:gap-8">
                <span className="tabular font-mono text-sm text-ink-500">{step.order}</span>
                <h3 className="text-lg tracking-[-0.01em] text-ink-900">{step.title}</h3>
                <p className="text-sm leading-relaxed text-ink-600">{step.description}</p>
                <div>
                  <p className="tabular font-mono text-xs uppercase tracking-[0.1em] text-signal-pass-ink">
                    {step.duration}
                  </p>
                  <ul className="mt-3 space-y-1.5">
                    {step.outputs.map((o) => (
                      <li key={o} className="text-xs text-ink-500">
                        {o}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
