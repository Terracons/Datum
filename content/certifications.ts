import type { Certification } from '@/types';

export const certifications: Certification[] = [
  {
    name: 'National Environmental Balancing Bureau, Certified Firm',
    abbr: 'NEBB',
    issuer: 'NEBB',
    since: 2007,
    detail:
      'Firm certification in Testing, Adjusting & Balancing and Building Systems Commissioning. Requires a qualified Certified Professional on staff, a calibrated instrument inventory reviewed annually, and firm-level accountability: NEBB can be called to arbitrate a disputed report, at our expense.',
    holders: 4,
  },
  {
    name: 'Associated Air Balance Council, Member Firm',
    abbr: 'AABC',
    issuer: 'AABC',
    since: 2009,
    detail:
      'AABC admits only independent agencies. Membership is forfeited if the firm installs, sells, or services HVAC equipment, or if it is owned in part by a firm that does. It is the closest thing this industry has to a structural conflict-of-interest rule.',
    holders: 3,
  },
  {
    name: 'Building Commissioning Professional',
    abbr: 'BCxP',
    issuer: 'ASHRAE',
    since: 2016,
    detail:
      'ASHRAE certification covering the full commissioning process from Owner’s Project Requirements through the warranty period. Requires documented project experience and a proctored exam.',
    holders: 3,
  },
  {
    name: 'Certified Commissioning Authority',
    abbr: 'CxA',
    issuer: 'AABC Commissioning Group (ACG)',
    since: 2012,
    detail:
      'The CxA credential the specification usually names when it requires an "independent third-party commissioning authority." Held by our commissioning leads.',
    holders: 3,
  },
  {
    name: 'LEED Accredited Professional, BD+C',
    abbr: 'LEED AP',
    issuer: 'USGBC / GBCI',
    since: 2010,
    detail:
      'Fundamental and Enhanced Commissioning credit documentation, prepared to the form reviewers expect. We have never had a Cx credit returned for a documentation deficiency.',
    holders: 5,
  },
  {
    name: 'Cleanroom Performance Testing, Certified Professional',
    abbr: 'NEBB CPT',
    issuer: 'NEBB',
    since: 2014,
    detail:
      'ISO 14644-1 classification and ISO 14644-3 test methods: particle count, recovery, airflow visualization, and installed filter leakage.',
    holders: 2,
  },
];

export const insurance = [
  { label: 'Professional liability (E&O)', value: '$2,000,000 per claim / $4,000,000 aggregate' },
  { label: 'General liability', value: '$2,000,000 per occurrence' },
  { label: 'Umbrella', value: '$5,000,000' },
  { label: 'Workers compensation', value: 'Statutory, EMR 0.68' },
  { label: 'Auto', value: '$1,000,000 combined single limit' },
];

export const calibration = {
  policy:
    'Every instrument that produces a number in a DATUM report is calibrated annually against NIST-traceable standards. Certificates travel with the report as an appendix, not on request.',
  interval: '12 months, or immediately after any impact event',
  lab: 'TSI Incorporated and Shortridge Instruments factory service',
};
