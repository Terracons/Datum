import Container from '@/components/ui/Container';
import Reveal from '@/components/motion/Reveal';
import type { Testimonial } from '@/types';

export default function TestimonialSlab({ testimonial }: { testimonial: Testimonial }) {
  return (
    <section className="border-b border-ink-100 py-20 md:py-24">
      <Container size="content">
        <Reveal>
          <figure>
            <span className="rule-accent" aria-hidden />
            <blockquote className="mt-8 max-w-4xl text-2xl leading-[1.35] tracking-[-0.015em] text-ink-900">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 flex flex-wrap items-baseline gap-x-3 text-sm text-ink-500">
              <span className="text-ink-900">{testimonial.name}</span>
              <span aria-hidden>·</span>
              <span>{testimonial.role}</span>
              <span aria-hidden>·</span>
              <span>{testimonial.company}</span>
            </figcaption>
          </figure>
        </Reveal>
      </Container>
    </section>
  );
}
