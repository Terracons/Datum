/* ---------------------------------------------------------------- primitives */

export interface Metric {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  label: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface SeoMeta {
  title: string;
  description: string;
}

/* ------------------------------------------------------------------ measured */

/** How a measured value sits against its design value and tolerance band. */
export type MeasureStatus = 'pass' | 'deviation' | 'deficiency';

/** One design-vs-measured pair. Tolerance is a percentage of design. */
export interface ComparisonRow {
  tag: string;
  label: string;
  design: number;
  measured: number;
  unit: string;
  /** Acceptance band, ± percent of design. NEBB default for air is 10. */
  tolerance?: number;
}

export type ColumnAlign = 'left' | 'right';

export interface ReadingColumn {
  key: string;
  label: string;
  align?: ColumnAlign;
  mono?: boolean;
  /** Rendered under the column label, e.g. "cfm" or "°F". */
  unit?: string;
}

export type ReadingCell = string | number | { value: string | number; status: MeasureStatus };

export interface ReadingRow {
  id: string;
  cells: Record<string, ReadingCell>;
}

export type Severity = 'critical' | 'major' | 'minor' | 'observation';
export type DeficiencyState = 'open' | 'contractor' | 'reinspect' | 'verified';

export interface Deficiency {
  id: string;
  system: string;
  location: string;
  severity: Severity;
  state: DeficiencyState;
  finding: string;
  action: string;
  opened: string;
  closed?: string;
}

/* ------------------------------------------------------------------ services */

export type ServiceSlug =
  | 'air-balancing'
  | 'hydronic-balancing'
  | 'commissioning'
  | 'retro-commissioning'
  | 'cleanroom-certification'
  | 'sound-vibration'
  | 'fume-hood-testing';

export interface Instrument {
  name: string;
  model: string;
  calibration: string;
}

export interface Service {
  slug: ServiceSlug;
  title: string;
  shortTitle: string;
  summary: string;
  icon: string;
  lead: string;
  standard: string;
  /** The problem, in the owner's words. */
  problem: string[];
  method: { name: string; body: string }[];
  deliverables: string[];
  instruments: Instrument[];
  specs: Spec[];
  typicalFindings: string[];
  faq?: { q: string; a: string }[];
  seo: SeoMeta;
}

/* ------------------------------------------------------------------ projects */

export type Sector =
  | 'healthcare'
  | 'laboratory'
  | 'higher-ed'
  | 'k12'
  | 'office'
  | 'data-center'
  | 'industrial'
  | 'civic';

export type Delivery = 'new-construction' | 'retro-commissioning' | 'recertification' | 'tenant-fitout';

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface Project {
  slug: string;
  title: string;
  client: string;
  location: string;
  sector: Sector;
  delivery: Delivery;
  services: ServiceSlug[];
  year: string;
  squareFeet: number;
  featured: boolean;
  brief: string[];
  approach: string[];
  outcome: string[];
  metrics: [Metric, Metric, Metric, Metric];
  comparison: ComparisonRow[];
  deficiencies: Deficiency[];
  spec: string[];
  testimonial?: Testimonial;
  seed: number;
  seo: SeoMeta;
}

/* ------------------------------------------------------------------- company */

export interface ProcessStep {
  order: string;
  title: string;
  duration: string;
  description: string;
  outputs: string[];
}

export interface Certification {
  name: string;
  abbr: string;
  issuer: string;
  since: number;
  detail: string;
  holders?: number;
}

export interface TeamMember {
  name: string;
  role: string;
  credentials: string[];
  since: number;
  bio: string;
}

export interface Role {
  slug: string;
  title: string;
  location: string;
  type: string;
  summary: string;
}

export interface ReportSample {
  slug: string;
  title: string;
  kind: string;
  pages: number;
  format: string;
  summary: string;
  contains: string[];
}
