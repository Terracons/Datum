import type { TeamMember } from '@/types';

export const team: TeamMember[] = [
  {
    name: 'Ruth Ortega-Vance',
    role: 'Principal',
    credentials: ['PE', 'NEBB CP', 'BCxP'],
    since: 2006,
    bio: 'Founded DATUM after eleven years as a mechanical designer, having watched three of her own designs get certified as balanced when they demonstrably were not. Signs every report that leaves the office.',
  },
  {
    name: 'Desmond Achebe',
    role: 'Director of Commissioning',
    credentials: ['BCxP', 'CxA', 'LEED AP BD+C'],
    since: 2009,
    bio: 'Runs the Cx practice: design reviews, functional performance testing, and the systems manual nobody else wants to write. Has issued 41 design-phase reviews that changed a drawing before it was built.',
  },
  {
    name: 'Priya Raghunathan',
    role: 'Director of TAB',
    credentials: ['NEBB CP', 'AABC TBE'],
    since: 2011,
    bio: 'Owns the field standard. Wrote our internal procedure for hydronic proportional balancing, which is stricter than the one we are required to follow.',
  },
  {
    name: 'Marcus Feld',
    role: 'Senior Commissioning Engineer',
    credentials: ['PE', 'CxA'],
    since: 2013,
    bio: 'Central plants and controls. Spends most of his time in trend data, where the deficiencies that survive a functional test tend to hide.',
  },
  {
    name: 'Alina Sokolova',
    role: 'Cleanroom & Containment Lead',
    credentials: ['NEBB CPT', 'ASHRAE 110'],
    since: 2015,
    bio: 'ISO 14644 classification and ASHRAE 110 fume hood containment. Runs the tracer gas rig personally on every hood test.',
  },
  {
    name: 'Trey Okonkwo',
    role: 'Energy Manager, Retro-Cx',
    credentials: ['CEM', 'BCxP'],
    since: 2017,
    bio: 'Builds the measurement and verification case for retro-commissioning work: what a fix should save, and then what it actually saved twelve months on.',
  },
  {
    name: 'Bernadette Hu',
    role: 'Senior TAB Technician',
    credentials: ['NEBB CT'],
    since: 2012,
    bio: 'Eleven thousand terminal readings and counting. The person the contractor least wants to see holding a flow hood, which is the highest compliment in this trade.',
  },
  {
    name: 'Owen Radcliffe',
    role: 'Reports & Quality',
    credentials: ['NEBB CT'],
    since: 2018,
    bio: 'Every report is read line by line against the field sheets before it is issued. He is the reason our deficiency logs cite a drawing sheet number.',
  },
];

export const teamStats: { value: number; label: string; decimals?: number }[] = [
  { value: 22, label: 'Staff' },
  { value: 14, label: 'Field technicians' },
  { value: 9.4, decimals: 1, label: 'Average years with DATUM' },
  { value: 17, label: 'Individual certifications held' },
];
