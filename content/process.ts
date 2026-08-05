import type { ProcessStep } from '@/types';

export const processSteps: ProcessStep[] = [
  {
    order: '01',
    title: 'Scope and fee, fixed',
    duration: '3 to 5 days',
    description:
      'We read the drawings and the specification before we quote. The proposal states exactly how many terminals, hoods, and pieces of equipment will be tested, and at what sampling rate. A fixed fee removes the incentive to stop measuring early.',
    outputs: ['Scope matrix by system', 'Fixed fee, no allowances', 'Named field lead'],
  },
  {
    order: '02',
    title: 'Design review',
    duration: '2 to 3 weeks',
    description:
      'Commissioning only. We review the mechanical design against the Owner’s Project Requirements while it is still a drawing. Finding a balancing damper that was never drawn costs nothing on paper and thousands in the ceiling.',
    outputs: ['Design review log', 'OPR / BOD gap list', 'Testability comments'],
  },
  {
    order: '03',
    title: 'Submittals and installation verification',
    duration: 'Ongoing through construction',
    description:
      'We check that what was submitted matches what was specified, and later that what was installed matches what was submitted. Access doors, test ports, and straight duct runs get verified before the ceiling closes.',
    outputs: ['Submittal review comments', 'Installation checklists', 'Field observation reports'],
  },
  {
    order: '04',
    title: 'Static readings and prefunctional checks',
    duration: '1 to 2 weeks',
    description:
      'Fan and pump curves, motor amperage, static profiles across every coil and filter bank. This is where a fan that cannot make design flow is identified, before anyone spends two weeks chasing terminals it was never going to feed.',
    outputs: ['Fan and pump test sheets', 'Prefunctional checklists', 'Early deficiency notice'],
  },
  {
    order: '05',
    title: 'Test, adjust, balance',
    duration: '2 to 6 weeks',
    description:
      'Every terminal measured, adjusted, and re-measured. Hydronic loops balanced proportionally from the index circuit out. Readings are recorded in the field on instruments whose calibration certificates are in the appendix.',
    outputs: ['Terminal readings, all devices', 'Proportional balance record', 'Marked-up drawings'],
  },
  {
    order: '06',
    title: 'Functional performance testing',
    duration: '1 to 3 weeks',
    description:
      'Commissioning only. Sequences are exercised, not observed: we fail the sensor, drop the pressure, force the changeover, and record what the system actually does against what the sequence says it should.',
    outputs: ['FPT scripts and results', 'Trend analysis', 'Controls deficiency log'],
  },
  {
    order: '07',
    title: 'Report to the owner, first',
    duration: '5 to 10 days',
    description:
      'The report goes to whoever holds our contract, unedited, before it goes to the contractor. Deficiencies are logged with a location, a drawing reference, and a required action. Nobody gets a preview to negotiate the wording.',
    outputs: ['Final TAB / Cx report', 'Deficiency log', 'Calibration certificates'],
  },
  {
    order: '08',
    title: 'Reinspection and the ten-month review',
    duration: 'As corrected · 10 months',
    description:
      'Every deficiency is re-tested, not signed off on a promise. Ten months into occupancy, before the warranty closes, we come back and check the systems against the seasons they had not yet seen.',
    outputs: ['Reinspection record', 'Ten-month review report', 'Warranty claim support'],
  },
];

export const engagementFaq = [
  {
    q: 'Who should hold the TAB contract?',
    a: 'The owner, or the owner’s representative. When the balancing agency is a sub to the mechanical contractor, the agency’s client is the party whose work it is grading. That arrangement is common, it is permitted by most specifications, and it is the single most reliable way to get a report with no findings in it.',
  },
  {
    q: 'How long does a TAB engagement take?',
    a: 'For a typical 100,000 sq ft office or medical office building: two to four weeks of field time once the systems are running and the controls are functional. The variable is almost never our speed. It is whether the system is actually ready to be balanced.',
  },
  {
    q: 'What happens when you find something serious?',
    a: 'You hear about it that day, by phone, not in a report ten days later. A deficiency that will change a schedule or a budget does not wait for the document. The written log follows.',
  },
  {
    q: 'Will you re-test another agency’s report?',
    a: 'Yes. We do verification sampling on completed balance reports: typically ten to fifteen percent of terminals, chosen by us, not by the party being checked. Occasionally the original numbers hold up exactly. It is worth knowing which case you are in.',
  },
  {
    q: 'Do you work for contractors at all?',
    a: 'We accept TAB scope from general contractors, because that is how many projects are structured and refusing would mean not working on them. What we do not do is subcontract to the mechanical contractor whose installation we are measuring, and our report goes to the owner regardless of who signs the check.',
  },
];
