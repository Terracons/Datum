import Link from 'next/link';
import Logo from '@/components/graphics/Logo';
import Container from '@/components/ui/Container';
import TickRule from '@/components/graphics/TickRule';
import { company } from '@/content/company';
import { services } from '@/content/services';
import { secondaryNav } from './nav';

export default function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-paper-raised pb-14 pt-16">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-ink-500">
              An independent testing, adjusting and balancing and commissioning agency. We do not
              install, sell, or service mechanical equipment. NEBB certified since 2007.
            </p>
            <p className="mt-5 font-mono text-xs uppercase tracking-[0.14em] text-signal-pass-ink">
              {company.tagline}
            </p>
          </div>

          <div>
            <h2 className="eyebrow-muted">Services</h2>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-sm text-ink-600 transition-colors hover:text-signal-pass-ink"
                  >
                    {s.shortTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-muted">Company</h2>
            <ul className="mt-5 space-y-3">
              <li>
                <Link href="/independence" className="text-sm text-ink-600 hover:text-signal-pass-ink">
                  Independence
                </Link>
              </li>
              <li>
                <Link href="/reports" className="text-sm text-ink-600 hover:text-signal-pass-ink">
                  Sample Reports
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-sm text-ink-600 hover:text-signal-pass-ink">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-ink-600 hover:text-signal-pass-ink">
                  About
                </Link>
              </li>
              {secondaryNav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-ink-600 hover:text-signal-pass-ink">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="eyebrow-muted">Contact</h2>
            <address className="mt-5 space-y-3 text-sm not-italic text-ink-600">
              <p>
                {company.address.street}
                <br />
                {company.address.city}, {company.address.state} {company.address.zip}
              </p>
              <p>
                <a href={company.phone.mainHref} className="tabular font-mono hover:text-signal-pass-ink">
                  {company.phone.main}
                </a>
                <span className="block text-ink-500">Main</span>
              </p>
              <p>
                <a href={`mailto:${company.email.scope}`} className="hover:text-signal-pass-ink">
                  {company.email.scope}
                </a>
                <span className="block text-ink-500">Scope requests and RFPs</span>
              </p>
              <p className="text-ink-500">{company.hours}</p>
            </address>
          </div>
        </div>

        <TickRule className="mt-16" />

        <div className="flex flex-col gap-4 pt-6 text-xs text-ink-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {company.legalName}.{' '}
            <span className="tabular font-mono">
              {company.registrations
                .slice(0, 2)
                .map((r) => r.number)
                .join(' · ')}
            </span>
          </p>
          <p>A fictional company. Built as a portfolio demonstration.</p>
        </div>
      </Container>
    </footer>
  );
}
