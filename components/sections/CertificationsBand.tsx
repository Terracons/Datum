import Link from 'next/link';
import Container from '@/components/ui/Container';
import Reveal from '@/components/motion/Reveal';
import { certifications } from '@/content/certifications';

export default function CertificationsBand() {
  return (
    <section className="border-b border-ink-100 bg-paper-raised py-16">
      <Container>
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <Reveal y={12}>
            <p className="max-w-md text-sm leading-relaxed text-ink-600">
              Certification does not make a firm honest. It makes dishonesty expensive and visible,
              which is the most any structure can do.{' '}
              <Link href="/certifications" className="text-signal-pass-ink hover:text-ink-900">
                Full credentials
              </Link>
              .
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <ul className="flex flex-wrap items-center gap-x-10 gap-y-4">
              {certifications.map((c) => (
                <li key={c.abbr} className="text-center">
                  <p className="font-display text-xl tracking-[0.06em] text-ink-900">{c.abbr}</p>
                  <p className="tabular mt-1 font-mono text-[11px] text-ink-500">since {c.since}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
