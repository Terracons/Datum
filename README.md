# DATUM Balance & Commissioning

Marketing site for a fictional independent test, adjust and balance (TAB) and building
commissioning agency. Built as a portfolio piece; a sibling to the STRATA roofing build, and
deliberately its visual inverse.

> **Measured, not assumed.**

## The idea the site rests on

Independence is the product. DATUM does not install, sell, or service mechanical equipment, and
does not subcontract to the contractor whose work it is testing. Two routes carry that
differentiation and were built first:

- `/independence`: the conflict-of-interest position, including what each commitment costs and
  the work the firm has turned down.
- `/reports`: the deliverable, shown rather than described. Nobody in this industry publishes
  their report; publishing it is the sale.

## Design system

`DESIGN.md` in the project root is the single source of truth for the visual system:
palette with every contrast ratio computed, type scale, component state matrices, spacing,
elevation, and responsive behaviour. If a value is missing there, add it there first, then
implement it.

## Stack

- Next.js 15 (App Router), React 19, TypeScript strict
- Tailwind CSS 3.4, tokens in `tailwind.config.ts`
- Framer Motion via `LazyMotion` + `domAnimation`, `m` components only
- Content as typed modules in `content/`, no CMS
- Static everywhere; the one form posts to a route handler validated with Zod

## Commands

```bash
npm install
npm run dev        # http://localhost:3000
npm run build
npm run typecheck
```

## Structure

```
app/               routes; [slug] routes use generateStaticParams
components/
  data/            DesignVsMeasured, ReadingTable, DeficiencyLog  ← the differentiator
  motion/          MotionProvider, Reveal, Stagger, CountUp
  ui/              Button, Container, SectionHead, PageHeader, Stat, Tag,
                   SpecTable, Accordion, StatusChip, SpecBlock, ServiceIcon
  graphics/        Logo, TickRule, DuctSchematic (procedural SVG, no photography)
  sections/        homepage and shared page sections
  projects/        ProjectCard, ProjectExplorer
  forms/           ScopeRequestForm
content/           company, services, projects, certifications, team, process,
                   reports, independence, engineers, roles, prequalification
lib/               motion, seo, utils, scope-request (Zod schema)
types/             domain types, including the measured-data shapes
```

## Notes

- **No photography.** Every image on the site is a procedural SVG generated from a seed, so
  server and client render identically and there are no assets to manage.
- **Colour is data.** The accent (`signal.pass` `#00A86B`) is the same green used for a passing
  reading; amber is a deviation, red a deficiency. Palette and product are the same thing.
- **No parallax.** Motion is meant to read as an instrument settling. Numbers count up, bars
  animate to their delta, log rows write themselves in.
- Everything is fictional: the company, the people, the projects, the readings. The standards
  cited are real.
