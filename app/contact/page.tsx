import Container from '@/components/ui/Container';
import PageHeader from '@/components/ui/PageHeader';
import Reveal from '@/components/motion/Reveal';
import TickRule from '@/components/graphics/TickRule';
import ScopeRequestForm from '@/components/forms/ScopeRequestForm';
import { company } from '@/content/company';
import { buildMetadata, breadcrumbJsonLd, JsonLd } from '@/lib/seo';

export const metadata = buildMetadata(
  'Contact | Request a Scope or an RFP Response | DATUM',
  'Send the drawings and the specification. Scope requests are read by an engineer and quoted at a fixed fee against a written scope matrix.',
  '/contact',
);

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: 'Home', path: '/' },
          { name: 'Contact', path: '/contact' },
        ])}
      />

      <PageHeader
        eyebrow="Contact"
        title="Request a scope"
        lead="Four short steps. An engineer reads it, not a salesperson, and you get either questions about the scope or a fixed fee against a written scope matrix within one business day."
      />

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:gap-20">
            <ScopeRequestForm />

            <aside className="space-y-10">
              <Reveal>
                <div>
                  <h2 className="eyebrow-muted">Direct</h2>
                  <TickRule className="mt-3" />
                  <dl className="mt-2 space-y-5">
                    <div>
                      <dt className="text-sm text-ink-500">Main</dt>
                      <dd>
                        <a
                          href={company.phone.mainHref}
                          className="tabular font-mono text-lg text-ink-900 hover:text-signal-pass-ink"
                        >
                          {company.phone.main}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500">Scope requests and RFPs</dt>
                      <dd>
                        <a
                          href={`mailto:${company.email.scope}`}
                          className="text-base text-ink-900 hover:text-signal-pass-ink"
                        >
                          {company.email.scope}
                        </a>
                      </dd>
                    </div>
                    <div>
                      <dt className="text-sm text-ink-500">Sample reports</dt>
                      <dd>
                        <a
                          href={`mailto:${company.email.reports}`}
                          className="text-base text-ink-900 hover:text-signal-pass-ink"
                        >
                          {company.email.reports}
                        </a>
                      </dd>
                    </div>
                  </dl>
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <div>
                  <h2 className="eyebrow-muted">Office</h2>
                  <TickRule className="mt-3" />
                  <address className="mt-2 text-base not-italic leading-relaxed text-ink-600">
                    {company.address.street}
                    <br />
                    {company.address.city}, {company.address.state} {company.address.zip}
                  </address>
                  <p className="mt-4 text-sm text-ink-500">{company.hours}</p>
                </div>
              </Reveal>

              <Reveal delay={0.12}>
                <div>
                  <h2 className="eyebrow-muted">Territory</h2>
                  <TickRule className="mt-3" />
                  <p className="mt-2 text-base leading-relaxed text-ink-600">
                    {company.territory.join(' · ')}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-ink-500">
                    Cleanroom and containment work travels further. If the project is outside this
                    list, ask anyway.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={0.18}>
                <div className="panel p-6">
                  <p className="text-sm leading-relaxed text-ink-600">
                    If you are a mechanical contractor looking for a TAB sub on a project you are
                    installing, we are not able to help. That is not a judgement of you, it is the one rule
                    the whole firm is built on. We will happily give you the names of two agencies
                    who can.
                  </p>
                </div>
              </Reveal>
            </aside>
          </div>
        </Container>
      </section>
    </>
  );
}
