# Brand

## Position

A datum is the fixed reference point every other measurement is taken from. The firm is the
independent third party that verifies whether a mechanical system performs the way the drawings
said it would. Independence is the product; everything else is evidence for it.

Voice: plain, specific, unhurried. Numbers over adjectives. Nobody visiting this site has an
emergency, and the site is a dossier, not a lead magnet. Where a claim is made, the cost of keeping
it is stated next to it.

## Palette

Deliberately the inverse of STRATA's graphite-and-amber industrial weight. This should read as
instrumentation: calibration equipment, not a jobsite.

| Token | Value | Use |
| --- | --- | --- |
| `paper` | `#FAFAFA` | Page field |
| `paper.raised` | `#FFFFFF` | Panels, alternating sections |
| `paper.sunken` | `#F1F3F5` | Table headers, code blocks |
| `ink.900` | `#111418` | Headings, inverse sections |
| `ink.600` / `ink.500` | `#4E5865` / `#66707B` | Body, secondary |
| `ink.100` | `#E5E9ED` | Hairlines |
| `signal.pass` | `#00A86B` | Accent **and** in-tolerance data |
| `signal.pass-ink` | `#00764B` | Accent text on near-white (contrast) |
| `signal.deviation` | `#C98A00` | Outside tolerance, not yet a finding |
| `signal.deficiency` | `#C8382C` | Written up |

The accent doing double duty as the pass/fail data colour is the point: the palette and the
product are the same thing. `pass` is for fills and bars, `pass-ink` for text, because `#00A86B`
measures 2.95:1 against `#FAFAFA` and fails as body text.

Every pair was computed during the audit, and two tokens moved as a result: `ink.500`
from `#6B7681` (4.44:1, failing) to `#66707B`, and `ink.400` from `#8C96A2` (2.87:1) to
`#858F9B`. Nothing lighter than `ink.400` carries text. Full ratio table in `DESIGN.md`.

## Type

Mono-forward, more so than STRATA. Every reading, delta, tolerance, tag, and date is monospace
with tabular figures (`.tabular`), so columns of numbers line up without a table.

- Display: IBM Plex Sans, 500/600
- Body: IBM Plex Sans, 400/500
- Mono: JetBrains Mono, 400/500/600

Inter was removed in the design audit. It is the most over-used interface face on the web
and reads as a default rather than a decision. IBM Plex was drawn for technical
documentation, which is what this site is, and dropping to two families also removes a
font request. Banned outright: Inter, Roboto, Arial, Helvetica, Open Sans, Space Grotesk.

`.eyebrow` and `.label-mono` are the two recurring mono utilities.

## Motif

Thin measurement rules, tick marks, tolerance bands, plotted points. `TickRule` is a ruled edge
with minor ticks at 8px and major at 48px; it separates sections the way a rule separates fields
on a drawing. `DuctSchematic` renders single-line mechanical plans procedurally from a seed.
There is no photography anywhere on the site, by design.

## Motion

An instrument settling, not a building being revealed. Short travel (10 to 24px), fast settle,
`ease.settle` = `[0.22, 1, 0.36, 1]`.

- Numbers count up to their measured value. This is the core gesture.
- Design-vs-measured bars animate to their delta on scroll.
- Deficiency rows stagger in left-to-right, as a list being logged.
- No parallax. It is imprecise, and precision is the brand.
