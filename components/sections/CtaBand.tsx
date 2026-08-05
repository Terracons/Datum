import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import Reveal from '@/components/motion/Reveal';
import TickRule from '@/components/graphics/TickRule';
import { company } from '@/content/company';

export default function CtaBand({
  title = 'Send us the drawings. We will tell you what it takes to measure it.',
  body = 'Scope requests are read by an engineer, not a salesperson, and quoted at a fixed fee against a defined scope matrix. If the project is not a fit, we will say so and tell you who is.',
  primaryHref = '/contact',
  primaryLabel = 'Request a scope',
}: {
  title?: string;
  body?: string;
  primaryHref?: string;
  primaryLabel?: string;
}) {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="panel px-8 py-12 shadow-panel md:px-14 md:py-16">
            <TickRule accent className="mb-10 max-w-[12rem]" />
            <h2 className="max-w-3xl text-3xl tracking-[-0.02em]">{title}</h2>
            <p className="measure mt-6 text-lg text-ink-600">{body}</p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button href={primaryHref} size="lg">
                {primaryLabel}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href={company.phone.mainHref} variant="secondary" size="lg">
                {company.phone.main}
              </Button>
              <span className="mt-2 text-sm text-ink-500 sm:ml-4 sm:mt-0">{company.hours}</span>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
