import type { ComparisonRow, Deficiency, ReadingColumn, ReadingRow, ReportSample } from '@/types';

export const reportSamples: ReportSample[] = [
  {
    slug: 'tab-final',
    title: 'Final TAB Report',
    kind: 'Air & hydronic balancing',
    pages: 148,
    format: 'PDF + machine-readable CSV of every reading',
    summary:
      'The whole record: every terminal, every fan, every pump, preliminary and final, with the percentage of design calculated for you rather than left as an exercise.',
    contains: [
      'Terminal reading schedule, all devices',
      'Fan and pump test sheets with static profiles',
      'Outside air determination with method stated',
      'Room pressurization schedule',
      'Marked-up drawings, damper positions',
      'Deficiency log',
      'Instrument calibration certificates',
    ],
  },
  {
    slug: 'deficiency-log',
    title: 'Deficiency Log',
    kind: 'Issued with every report',
    pages: 12,
    format: 'PDF + live issue tracker during construction',
    summary:
      'Findings with a location, a drawing reference, a severity, and a required action. Tracked from open to verified, with the re-test date on the record.',
    contains: [
      'Unique ID carried across all revisions',
      'System, location, and drawing sheet reference',
      'Severity: critical, major, minor, observation',
      'Required action and responsible party',
      'Open date, closed date, verification method',
    ],
  },
  {
    slug: 'cx-final',
    title: 'Final Commissioning Report',
    kind: 'New construction Cx',
    pages: 320,
    format: 'PDF + systems manual',
    summary:
      'Design review logs, prefunctional checklists, functional test scripts and results, trend analysis, and the open-item list handed to the facilities team on day one.',
    contains: [
      'OPR and BOD review',
      'Design review logs, two rounds',
      'Prefunctional checklists by equipment',
      'FPT scripts with pass/fail and re-test record',
      'Trend analysis, 15-minute interval',
      'Training records',
      'Open-item log at turnover',
    ],
  },
  {
    slug: 'rcx-findings',
    title: 'Retro-Cx Findings Register',
    kind: 'Existing buildings',
    pages: 46,
    format: 'PDF + spreadsheet model',
    summary:
      'Every finding with an annual saving, an implementation cost, and a simple payback. Measures that do not pay back are still in the register, labelled as what they are.',
    contains: [
      'Ranked measures with cost and saving',
      'Simple payback and blended portfolio payback',
      'Implementation scope ready for competitive bid',
      'Utility incentive eligibility',
      'M&V plan and 12-month verification',
    ],
  },
  {
    slug: 'iso-certificate',
    title: 'ISO 14644 Classification Certificate',
    kind: 'Cleanroom',
    pages: 24,
    format: 'PDF with sample location map and video',
    summary:
      'Classification with the occupancy state named on the certificate, sample locations mapped, and the airflow visualization video attached rather than described.',
    contains: [
      'Classification result with occupancy state',
      'Sample location map and calculation',
      'Installed filter leakage scan record',
      'Pressure cascade and recovery results',
      'Airflow visualization video',
    ],
  },
  {
    slug: 'ashrae-110',
    title: 'ASHRAE 110 Containment Report',
    kind: 'Fume hoods',
    pages: 38,
    format: 'PDF + recorded video per hood',
    summary:
      'As-installed containment rating at the sash height people actually work at, with cross-draft measurements so a failure can be attributed to the hood or the room.',
    contains: [
      'Face velocity grid, average and uniformity',
      'AI rating at stated sash height',
      'Cross-draft measurements at the face',
      'Smoke visualization video',
      'Sash alarm verification',
    ],
  },
];

/* ------------- the live sample rendered on /reports ------------- */

export const sampleComparison: ComparisonRow[] = [
  { tag: 'VAV-2-04', label: 'Open office north', design: 1250, measured: 1244, unit: 'cfm', tolerance: 10 },
  { tag: 'VAV-2-07', label: 'Open office east', design: 1100, measured: 1071, unit: 'cfm', tolerance: 10 },
  { tag: 'VAV-2-11', label: 'Huddle 218', design: 400, measured: 356, unit: 'cfm', tolerance: 10 },
  { tag: 'VAV-2-14', label: 'Conference 224', design: 900, measured: 742, unit: 'cfm', tolerance: 10 },
  { tag: 'VAV-2-19', label: 'Lab support 231', design: 1600, measured: 1584, unit: 'cfm', tolerance: 5 },
  { tag: 'EF-4', label: 'Soiled holding, exhaust', design: 750, measured: 410, unit: 'cfm', tolerance: 10 },
];

export const sampleReadingColumns: ReadingColumn[] = [
  { key: 'device', label: 'Device' },
  { key: 'room', label: 'Room' },
  { key: 'design', label: 'Design', align: 'right', mono: true, unit: 'cfm' },
  { key: 'prelim', label: 'Preliminary', align: 'right', mono: true, unit: 'cfm' },
  { key: 'final', label: 'Final', align: 'right', mono: true, unit: 'cfm' },
  { key: 'pct', label: '% of design', align: 'right', mono: true },
];

export const sampleReadingRows: ReadingRow[] = [
  {
    id: 'D-2-101',
    cells: {
      device: 'D-2-101',
      room: '218 Huddle',
      design: 200,
      prelim: 164,
      final: { value: 198, status: 'pass' },
      pct: { value: '99.0%', status: 'pass' },
    },
  },
  {
    id: 'D-2-102',
    cells: {
      device: 'D-2-102',
      room: '218 Huddle',
      design: 200,
      prelim: 151,
      final: { value: 158, status: 'deviation' },
      pct: { value: '79.0%', status: 'deviation' },
    },
  },
  {
    id: 'D-2-118',
    cells: {
      device: 'D-2-118',
      room: '224 Conference',
      design: 300,
      prelim: 244,
      final: { value: 296, status: 'pass' },
      pct: { value: '98.7%', status: 'pass' },
    },
  },
  {
    id: 'D-2-119',
    cells: {
      device: 'D-2-119',
      room: '224 Conference',
      design: 300,
      prelim: 210,
      final: { value: 218, status: 'deficiency' },
      pct: { value: '72.7%', status: 'deficiency' },
    },
  },
  {
    id: 'D-2-120',
    cells: {
      device: 'D-2-120',
      room: '224 Conference',
      design: 300,
      prelim: 226,
      final: { value: 228, status: 'deficiency' },
      pct: { value: '76.0%', status: 'deficiency' },
    },
  },
  {
    id: 'R-2-041',
    cells: {
      device: 'R-2-041',
      room: '224 Conference',
      design: 750,
      prelim: 690,
      final: { value: 738, status: 'pass' },
      pct: { value: '98.4%', status: 'pass' },
    },
  },
];

export const sampleDeficiencies: Deficiency[] = [
  {
    id: 'DEF-014',
    system: 'VAV-2-14',
    location: 'L2 · Conference 224',
    severity: 'critical',
    state: 'verified',
    finding:
      'Terminal delivering 742 cfm against 900 cfm design (82.4%). Two of three diffusers below 77% of design. Branch damper BD-2-9 found at approximately 40% open above hard ceiling, no access panel provided. Ref. M-201, detail 4.',
    action:
      'Provide access panel per spec 23 05 00 §3.2.C, open damper, re-balance branch. DATUM to re-test all three diffusers and the return.',
    opened: '2025-03-04',
    closed: '2025-03-21',
  },
  {
    id: 'DEF-015',
    system: 'EF-4',
    location: 'L1 · Soiled holding 118',
    severity: 'critical',
    state: 'reinspect',
    finding:
      'Exhaust measured 410 cfm against 750 cfm design (54.7%). Room could not be held negative to the corridor with the door closed. Fan running at nameplate amperage, suggesting a duct restriction rather than fan capacity.',
    action:
      'Mechanical contractor to inspect duct run above L1 corridor for construction debris or closed fire damper. Re-test required before occupancy.',
    opened: '2025-03-04',
  },
  {
    id: 'DEF-016',
    system: 'VAV-2-11',
    location: 'L2 · Huddle 218',
    severity: 'major',
    state: 'contractor',
    finding:
      'Terminal at 89% of design. Minimum airflow set at 15% in the controller against a 30% scheduled minimum; box is below its measurable range at minimum.',
    action: 'Controls contractor to correct minimum per schedule M-601. Re-measure at minimum and maximum.',
    opened: '2025-03-05',
  },
  {
    id: 'DEF-017',
    system: 'AHU-2',
    location: 'Penthouse',
    severity: 'minor',
    state: 'open',
    finding:
      'Filter section differential 0.61 in wg on new filters against 0.35 in wg clean. Filter frames not gasketed; bypass observed at four frame joints with smoke.',
    action: 'Gasket filter frames and re-measure section differential.',
    opened: '2025-03-05',
  },
  {
    id: 'DEF-018',
    system: 'General',
    location: 'L2 · Ceiling, grid E to H',
    severity: 'observation',
    state: 'open',
    finding:
      'Eleven balancing dampers installed above hard ceiling with no access. Not a deficiency against the current balance, but every one of them is a future service call that requires demolition.',
    action: 'Noted for owner. Recommend access panels before ceiling closeout.',
    opened: '2025-03-05',
  },
];

export const reportPrinciples = [
  {
    title: 'Every reading, not a summary',
    body: 'If we measured it, it is in the report. Agencies that publish only totals are hiding the distribution, and the distribution is where the problems are.',
  },
  {
    title: 'Percent of design, calculated',
    body: 'A column of measured values means nothing without the design value beside it. We do the division so nobody has to trust that it was done.',
  },
  {
    title: 'Deficiencies on page two',
    body: 'Not in an appendix. The findings are the reason the report exists, and they sit immediately after the executive summary.',
  },
  {
    title: 'Machine-readable, always',
    body: 'Every report ships with a CSV of the reading data. Your energy model, your CMMS, and the next agency to touch the building can all use it.',
  },
  {
    title: 'Calibration certificates attached',
    body: 'The certificate for every instrument that produced a number, in the appendix, unrequested. A reading is only as good as the last time the instrument was checked.',
  },
  {
    title: 'Written so a non-engineer can act on it',
    body: 'The executive summary states what is wrong, what it will take to fix, and what happens if it is not fixed. In sentences.',
  },
];
