'use client';

import { m, useReducedMotion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import DesignVsMeasured from '@/components/data/DesignVsMeasured';
import TickRule from '@/components/graphics/TickRule';
import { heroComparison, company } from '@/content/company';
import { duration, ease } from '@/lib/motion';

const words = ['The', 'mechanical', 'system', 'works.', 'Now', 'prove', 'it.'];

export default function Hero() {
  const reduced = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-b border-ink-100 pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="grid-lines pointer-events-none absolute inset-0 opacity-70" aria-hidden />
      <div className="scrim-paper pointer-events-none absolute inset-x-0 bottom-0 h-40" aria-hidden />

      <Container className="relative">
        <div className="grid items-start gap-14 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
          <div>
            <m.p
              className="eyebrow"
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: ease.settle }}
            >
              Independent TAB &amp; Commissioning · Est. {company.founded}
            </m.p>

            <h1 className="mt-6 max-w-3xl text-5xl tracking-[-0.035em]">
              {words.map((word, i) => (
                <m.span
                  key={i}
                  className="mr-[0.24em] inline-block"
                  initial={reduced ? false : { opacity: 0, y: 22 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: duration.slow,
                    ease: ease.settle,
                    delay: 0.1 + i * 0.05,
                  }}
                >
                  {word}
                </m.span>
              ))}
            </h1>

            <m.p
              className="mt-8 max-w-xl text-lg text-ink-600"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: ease.settle, delay: 0.5 }}
            >
              DATUM is the independent third party that measures whether a building&rsquo;s
              mechanical systems actually perform the way the drawings said they would. We do not
              install equipment, we do not sell it, and we do not service it. There is nothing for a
              finding to threaten.
            </m.p>

            <m.div
              className="mt-10 flex flex-col gap-3 sm:flex-row"
              initial={reduced ? false : { opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: duration.base, ease: ease.settle, delay: 0.6 }}
            >
              <Button href="/reports" size="lg">
                See what a report looks like
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>
              <Button href="/independence" variant="secondary" size="lg">
                Why independence matters
              </Button>
            </m.div>

            <m.dl
              className="mt-12 grid max-w-lg grid-cols-3 gap-6"
              initial={reduced ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: duration.base, delay: 0.75 }}
            >
              {[
                ['NEBB', 'Certified firm'],
                ['AABC', 'Member agency'],
                ['0', 'Installation revenue'],
              ].map(([value, label]) => (
                <div key={label}>
                  <dt className="font-mono text-lg text-ink-900">{value}</dt>
                  <dd className="mt-1 text-xs text-ink-500">{label}</dd>
                </div>
              ))}
            </m.dl>
          </div>

          {/* the entire service, in two seconds */}
          <m.div
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: duration.hero, ease: ease.settle, delay: 0.35 }}
          >
            <div className="mb-3 flex items-baseline justify-between">
              <p className="label-mono">Medical office building · Level 2 · 04 Mar</p>
              <p className="label-mono">Sheet M-201</p>
            </div>
            <DesignVsMeasured
              rows={heroComparison}
              title="Design intent vs. measured"
              caption="Two of five outside tolerance. The conference room was 158 cfm short because a branch damper sat at 40% above a hard ceiling with no access panel. Nobody would have found it from the drawings."
            />
            <TickRule className="mt-4" />
          </m.div>
        </div>
      </Container>
    </section>
  );
}
