import type { Role } from '@/types';

export const roles: Role[] = [
  {
    slug: 'tab-technician',
    title: 'TAB Technician',
    location: 'Denver, CO · Field',
    type: 'Full-time',
    summary:
      'Field measurement across air and hydronic systems. NEBB CT within eighteen months, paid for and scheduled on work time. Two years of mechanical field experience matters more than a degree.',
  },
  {
    slug: 'commissioning-engineer',
    title: 'Commissioning Engineer',
    location: 'Denver, CO · Hybrid',
    type: 'Full-time',
    summary:
      'Design review, functional performance testing, and trend analysis on healthcare and laboratory projects. Mechanical engineering degree, three to seven years in design or commissioning, PE track supported.',
  },
  {
    slug: 'cleanroom-technician',
    title: 'Cleanroom Certification Technician',
    location: 'Denver, CO · Field, regional travel',
    type: 'Full-time',
    summary:
      'ISO 14644 classification and ASHRAE 110 containment testing. Detail tolerance is the whole job: the difference between a 0.009% and a 0.011% leak is the difference between a certificate and a corrective action.',
  },
  {
    slug: 'reports-analyst',
    title: 'Reports & Quality Analyst',
    location: 'Denver, CO · Hybrid',
    type: 'Full-time',
    summary:
      'Read every report against the field sheets before it is issued. Catch the transposed digit, the missing drawing reference, the deficiency written so vaguely nobody could act on it.',
  },
];

export const careersPitch = {
  lead: 'DATUM is 22 people. There is no sales department, which means the work has to be good enough to generate the next job by itself.',
  points: [
    {
      title: 'Certification is paid and scheduled',
      body: 'NEBB and AABC certification costs money and takes study time. Both come out of the company’s pocket and the company’s calendar, not yours.',
    },
    {
      title: 'You will never be asked to soften a number',
      body: 'It has not happened here and it will not. If a client pushes, that is a principal’s problem, not a technician’s.',
    },
    {
      title: 'Field work has an end time',
      body: 'Night and weekend testing exists and is scheduled in advance, paid at premium, and followed by the time back. Sixty-hour weeks are a planning failure, not a badge.',
    },
    {
      title: 'Small firm, whole projects',
      body: 'You will see a project from scope through report, not one slice of it. That is the fastest way to become genuinely good at this, and the reason people stay.',
    },
  ],
  benefits: [
    'Medical, dental, and vision, 100% of employee premium',
    '401(k) with 5% match, vested immediately',
    'Company vehicle for field staff',
    'All certification and continuing education paid',
    'Four weeks PTO to start, five at year five',
    'Profit share, paid annually to everyone',
  ],
};
