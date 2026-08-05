import type { ComparisonRow, Metric } from '@/types';

export const company = {
  name: 'DATUM Balance & Commissioning',
  legalName: 'DATUM Balance & Commissioning, LLC',
  short: 'DATUM',
  tagline: 'Measured, not assumed.',
  founded: 2006,
  address: {
    street: '1180 Meridian Court, Suite 210',
    city: 'Denver',
    state: 'CO',
    zip: '80204',
  },
  phone: {
    main: '(303) 555-0142',
    mainHref: 'tel:+13035550142',
    scope: '(303) 555-0148',
    scopeHref: 'tel:+13035550148',
  },
  email: {
    scope: 'scope@datumtab.com',
    reports: 'reports@datumtab.com',
    careers: 'careers@datumtab.com',
  },
  hours: 'Mon to Fri, 7:00am to 5:00pm · Night and weekend testing by schedule',
  territory: ['Colorado', 'Wyoming', 'New Mexico', 'Utah', 'Western Nebraska'],
  registrations: [
    { label: 'NEBB Certified Firm', number: 'No. 2214-TAB/BSC' },
    { label: 'AABC Member Firm', number: 'No. 1188' },
    { label: 'Colorado Professional Engineer', number: 'PE 0049217' },
    { label: 'Professional liability', number: '$2M per claim / $4M aggregate' },
  ],
  stats: {
    buildings: 312,
    deficiencies: 1847,
    recovery: 4.2,
    sqFt: 18_600_000,
    staff: 22,
    years: 20,
  },
} as const;

/** The findings counter. Hard numbers, nothing rounded up. */
export const findings: Metric[] = [
  { value: 1847, label: 'Deficiencies documented', suffix: '' },
  { value: 4.2, prefix: '$', suffix: 'M', decimals: 1, label: 'Verified energy recovery' },
  { value: 312, label: 'Buildings commissioned' },
  { value: 18.6, suffix: 'M', decimals: 1, label: 'Square feet balanced' },
];

/**
 * The homepage hero readout. Real-shaped data from a five-story medical office
 * building: what the drawings called for, and what the grille actually did.
 */
export const heroComparison: ComparisonRow[] = [
  { tag: 'AHU-2', label: 'Supply fan, total', design: 24000, measured: 23880, unit: 'cfm', tolerance: 5 },
  { tag: 'VAV-2-14', label: 'Exam suite, max', design: 1150, measured: 1128, unit: 'cfm', tolerance: 10 },
  { tag: 'VAV-2-21', label: 'Conference 240', design: 900, measured: 742, unit: 'cfm', tolerance: 10 },
  { tag: 'EF-4', label: 'Soiled holding', design: 750, measured: 410, unit: 'cfm', tolerance: 10 },
  { tag: 'CHW-P1', label: 'Chilled water, primary', design: 480, measured: 476, unit: 'gpm', tolerance: 5 },
];

export const positioning = {
  eyebrow: 'The position',
  title: 'We do not install anything. That is the point.',
  body: [
    'DATUM sells one thing: a number you can trust. We do not install equipment, we do not sell equipment, and we do not take service contracts on the systems we test. There is no second revenue line that a finding could threaten.',
    'That sounds like a small distinction until you read a balance report written by a firm that reports to the mechanical contractor. Every reading in it lands inside tolerance. Every one.',
  ],
};
