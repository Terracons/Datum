import type { Metadata } from 'next';
import { company } from '@/content/company';

export const SITE_URL = 'https://datumtab.com';

export function buildMetadata(title: string, description: string, path = ''): Metadata {
  const url = `${SITE_URL}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: company.name,
      type: 'website',
      locale: 'en_US',
    },
    twitter: { card: 'summary_large_image', title, description },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: company.name,
    legalName: company.legalName,
    description:
      'Independent testing, adjusting and balancing and building commissioning agency. NEBB certified, AABC member. No installation, sales, or service work.',
    url: SITE_URL,
    telephone: company.phone.main,
    email: company.email.scope,
    foundingDate: String(company.founded),
    slogan: company.tagline,
    address: {
      '@type': 'PostalAddress',
      streetAddress: company.address.street,
      addressLocality: company.address.city,
      addressRegion: company.address.state,
      postalCode: company.address.zip,
      addressCountry: 'US',
    },
    areaServed: company.territory.map((s) => ({ '@type': 'State', name: s })),
    numberOfEmployees: { '@type': 'QuantitativeValue', value: company.stats.staff },
    hasCredential: [
      { '@type': 'EducationalOccupationalCredential', name: 'NEBB Certified Firm' },
      { '@type': 'EducationalOccupationalCredential', name: 'AABC Member Firm' },
    ],
  };
}

export function serviceJsonLd(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    serviceType: name,
    url: `${SITE_URL}${path}`,
    provider: { '@type': 'ProfessionalService', name: company.name, url: SITE_URL },
    areaServed: company.territory.map((s) => ({ '@type': 'State', name: s })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function faqJsonLd(faq: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}

export function JsonLd({ data }: { data: object }) {
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
  );
}
