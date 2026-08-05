# Architecture

## Rendering

Every route is statically rendered. `/services/[slug]` and `/projects/[slug]` enumerate their
params from the content modules via `generateStaticParams`. The only dynamic surface is
`POST /api/scope-request`.

Next.js 15 passes `params` as a Promise; both detail routes await it.

## Content

Content lives in `content/*.ts` as typed modules, validated by the compiler rather than by a CMS.
The domain types in `types/index.ts` are the contract. The interesting ones:

- `ComparisonRow`: one design-vs-measured pair with a tolerance band, in percent of design.
- `ReadingColumn` / `ReadingRow` / `ReadingCell`: a generic reading schedule. A cell can carry a
  status (`pass | deviation | deficiency`) alongside its value, which is how colour gets into a
  table without a parallel status column.
- `Deficiency`: a log entry: id, system, location, severity, state, finding, action, dates.

`lib/utils.ts` owns the judgement calls: `deltaPercent`, `statusFor` (inside the band is a pass;
past double the band is a deficiency rather than a deviation), and the class maps that turn a
status into text, bar, and chip styling.

## Data components

`components/data/*` is where the portfolio value sits. They take domain types, not props soup:

- `DesignVsMeasured`: client component. Each row draws a track with the tolerance band as a grey
  field, a design marker at 68% of the track, and a bar that animates to `measured / design`.
  Colour comes from `statusFor`.
- `ReadingTable`: server component. Tabular figures, right-aligned numerics, per-cell status.
- `DeficiencyLog`: client component. Severity filter, rows staggered in left-to-right.

## Motion

`MotionProvider` wraps the tree in `LazyMotion` with `domAnimation` and `strict`, so only `m.*`
components are used and the full motion bundle never ships. Consequences worth knowing:

- Layout animations need `domMax` and are therefore not used.
- Every motion component checks `useReducedMotion()` and returns a plain element instead.

Tokens live in `lib/motion.ts`. `ease.settle` is the house curve.

## Forms

`lib/scope-request.ts` exports one Zod schema used by both the client form and the route handler,
so the two cannot drift. The form validates per step for required fields, then parses the whole
payload with the schema before submitting and jumps back to the first step with a problem. A
hidden honeypot field is accepted silently server-side.

## SEO

`lib/seo.tsx` centralises metadata and JSON-LD: `organizationJsonLd` in the root layout,
`serviceJsonLd` and `faqJsonLd` on service pages, `breadcrumbJsonLd` everywhere else. `sitemap.ts`
and `robots.ts` derive from the same content modules the pages do.


## Filter state

`/projects` keeps its sector and service filters in the URL, not in React state, so a
filtered view can be linked and reached with the back button. `ProjectExplorer` reads
`useSearchParams` and writes with `router.replace(..., { scroll: false })`, which means the
page needs a `Suspense` boundary to stay statically rendered.

## Graphics tokens

Procedural SVG cannot consume Tailwind classes for `fill` and `stroke`, so the graphics
palette is mirrored as CSS custom properties (`--g-*`) in `globals.css` and referenced from
`DuctSchematic`, `TickRule`, and `Logo`. Before this, two schematic colours had already
drifted from the palette after a token change. No hex literals remain in the graphics
components.

## Security posture

`next.config.ts` sets CSP, HSTS, `X-Content-Type-Options`, `X-Frame-Options`,
`Referrer-Policy`, `Permissions-Policy`, and COOP on every route. The scope-request handler
is the only write path on the site: it rate limits to five submissions per IP per ten
minutes, rejects bodies over 64 KB before parsing, validates with the shared Zod schema,
accepts honeypot hits silently, and logs the shape of a request without its contact
details. The rate limiter is in-memory, so behind more than one instance it needs to move
to Redis.

## Accessibility decisions worth remembering

- The mobile drawer traps Tab and restores focus to the trigger on close. Without the trap,
  focus walks into the page behind the scrim, which is invisible to a keyboard user.
- Horizontally scrollable tables and the spec blocks are `role="region"` with `tabIndex={0}`
  so the scroll is reachable by keyboard, and their scrollbars are deliberately visible.
- Checkbox groups in the scope form are labelled with `role="group"` and
  `aria-labelledby`, not a `label htmlFor` pointing at a control that does not exist.
- ISO dates in deficiency logs are intentional. A report log is locale-neutral by
  convention, so `Intl.DateTimeFormat` is not used there.
