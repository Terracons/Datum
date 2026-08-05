# DESIGN.md

DATUM Balance & Commissioning. This file is the single source of truth for visual
implementation. No design decision is made outside it. Every contrast ratio below was
computed, not estimated.

---

## 1. Visual theme and atmosphere

DATUM sells one thing: a number you can trust. The design has to look like the instrument
that produced it, not like the building it was taken in. That rules out the entire visual
language of construction marketing, the graphite-and-safety-orange jobsite palette, the
photography of workers against sky. What is left is the language of calibration equipment:
near-white field, deep ink, a single signal colour, and a great deal of ruled precision.

The near-white base is doing structural work. Measured data is what the site sells, and
data reads best on paper. Every data surface is a raised white panel with a hairline border
sitting on the slightly warmer field, which is the visual grammar of an instrument face set
into a housing. Nothing floats without a rule under it.

The accent does double duty, and that is the sharpest idea in the system. Signal green is
both the brand colour and the colour of a reading inside tolerance. Amber is a deviation.
Red is a deficiency. The palette and the product are the same thing, which means the
homepage hero graphic explains the entire service without a paragraph of copy.

**Key characteristics**

- Near-white field, deep ink, one committed accent
- Monospace tabular figures for every reading, delta, tolerance, tag, and date
- Hairline rules and tick marks instead of shadows and cards
- Procedural SVG mechanical schematics, no photography anywhere
- Colour is data: pass, deviation, deficiency
- Motion that settles like an instrument, never parallax
- Sentence case throughout, including headings

---

## 2. Colour palette and roles

### Surfaces

| Role | Hex | Usage |
| --- | --- | --- |
| Paper | `#FAFAFA` | Page field |
| Paper raised | `#FFFFFF` | Data panels, alternating sections |
| Paper sunken | `#F1F3F5` | Table headers, code blocks, wells |

### Ink scale

| Role | Hex | Usage | On paper |
| --- | --- | --- | --- |
| Ink 950 | `#08090B` | Reserved, deepest inverse fills | 19.0:1 |
| Ink 900 | `#111418` | Headings, primary text, inverse sections | 17.69:1 |
| Ink 800 | `#1B2026` | Inverse section dividers | 15.1:1 |
| Ink 700 | `#39424D` | Body text | 9.76:1 |
| Ink 600 | `#4E5865` | Secondary body, long-form paragraphs | 6.92:1 |
| Ink 500 | `#66707B` | Small text, labels, metadata, mono captions | 4.83:1 |
| Ink 400 | `#858F9B` | Interactive icons, form borders, non-text UI | 3.14:1 |
| Ink 300 | `#AFB7C1` | Decorative rules, tick marks | 1.94:1 |
| Ink 200 | `#D3D8DE` | Standard borders | 1.37:1 |
| Ink 100 | `#E5E9ED` | Hairline dividers | 1.17:1 |
| Ink 50 | `#F1F3F5` | Tolerance band fill | 1.06:1 |

Ink 500 and Ink 400 were both darkened during the audit. At their original values
(`#6B7681`, `#8C96A2`) they measured 4.44:1 and 2.87:1, which failed for the 11px mono
labels they were carrying. Ink 300 and lighter are never used for text.

### Signal

| Role | Hex | Usage | Contrast |
| --- | --- | --- | --- |
| Pass | `#00A86B` | In-tolerance bars, dots, accent rules | 2.95:1 on paper |
| Pass ink | `#00764B` | Accent text, links, eyebrows | 5.45:1 on paper |
| Pass wash | `#E6F6EF` | Pass chip background | pass-ink on wash 5.09:1 |
| Deviation | `#C98A00` | Out-of-tolerance bars | 2.83:1 on paper |
| Deviation ink | `#8A5D00` | Deviation text | 5.52:1 on paper |
| Deviation wash | `#FBF2DE` | Deviation chip background | ink on wash 5.17:1 |
| Deficiency | `#C8382C` | Deficiency bars | 4.96:1 on paper |
| Deficiency ink | `#9E2A20` | Deficiency text | 7.17:1 on paper |
| Deficiency wash | `#FBEBE9` | Deficiency chip background | ink on wash 6.47:1 |

**On the two bar colours below 3:1.** `pass` at 2.95:1 and `deviation` at 2.83:1 sit under
the 3:1 threshold for graphics required to understand content. They are kept at the briefed
values because the bar is never the sole carrier of the status: every row states the
measured value, the signed delta, and a text chip reading "In tolerance", "Deviation", or
"Deficiency". Remove the text and these two values must be darkened to `#00A66A` and
`#C28500` respectively, which is where they cross 3.0:1.

### Inverse sections

| Pair | Contrast |
| --- | --- |
| Paper on Ink 900 | 17.69:1 |
| Ink 300 on Ink 900 | 9.12:1 |
| Ink 400 on Ink 900 | 6.16:1 |
| Pass on Ink 900 | 5.99:1 |

Signal green passes comfortably as text on the dark sections, which is why the accent can
be used for body-size text there but not on paper.

---

## 3. Typography

**Display and body:** IBM Plex Sans, 400 / 500 / 600
**Mono:** JetBrains Mono, 400 / 500 / 600

Inter was removed. It is the most over-used interface typeface on the web and reads as a
default rather than a decision. IBM Plex was drawn for technical documentation, which is
what this site is. Two families instead of three also removes a font request.

All sizes are fluid via `clamp()` in `theme.extend.fontSize`, so no component sets a
breakpoint for type.

| Role | Family | Size | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- |
| Display hero | Plex Sans | `clamp(3.25rem, 2.4rem + 4.3vw, 5.75rem)` | 500 | 0.96 | -0.035em |
| Display large | Plex Sans | `clamp(2.625rem, 2.15rem + 2.4vw, 4rem)` | 500 | 1.02 | -0.025em |
| Section heading | Plex Sans | `clamp(2.0625rem, 1.83rem + 1.2vw, 2.875rem)` | 500 | 1.06 | -0.02em |
| Sub-heading | Plex Sans | `clamp(1.625rem, 1.5rem + 0.7vw, 2.0625rem)` | 500 | 1.12 | -0.015em |
| Card title | Plex Sans | `clamp(1.3125rem, 1.24rem + 0.4vw, 1.5rem)` | 500 | 1.2 | -0.01em |
| Body large | Plex Sans | `clamp(1.125rem, 1.07rem + 0.28vw, 1.25rem)` | 400 | 1.6 | 0 |
| Body | Plex Sans | `clamp(1rem, 0.97rem + 0.15vw, 1.0625rem)` | 400 | 1.7 | 0 |
| Small | Plex Sans | `clamp(0.875rem, 0.85rem + 0.12vw, 0.9375rem)` | 400 | 1.55 | 0 |
| Eyebrow | JetBrains Mono | `clamp(0.75rem, 0.73rem + 0.1vw, 0.8125rem)` | 400 | 1.45 | 0.16em, uppercase |
| Label mono | JetBrains Mono | 11px | 400 | 1.45 | 0.12em, uppercase |
| Reading value | JetBrains Mono | 14px | 400 | 1.5 | 0, tabular-nums |
| Tag / chip | JetBrains Mono | 10-11px | 400 | 1 | 0.1em, uppercase |

Every numeric context carries `font-variant-numeric: tabular-nums` through the `.tabular`
utility. Headings use `text-wrap: balance`, paragraphs `text-wrap: pretty`.

---

## 4. Component stylings

### Primary button

| Property | Value |
| --- | --- |
| Background | `#111418` |
| Text | `#FAFAFA` |
| Font | Plex Sans, 14px, 500 |
| Height / padding | 44px / 0 24px (lg: 52px / 0 32px) |
| Radius | 3px |
| Hover background | `#00764B` |
| Focus ring | 2px solid `#00764B`, offset 2px |
| Disabled | opacity 0.5 |
| Transition | color, background-color, border-color, box-shadow, 200ms |

### Secondary button

| Property | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Border | 1px solid `#D3D8DE` |
| Text | `#111418` |
| Hover border / text | `#00A86B` / `#00764B` |
| Focus ring | as primary |

### Data panel

| Property | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Border | 1px solid `#E5E9ED` |
| Radius | 0 |
| Header | flex, baseline, 20px / 14px padding, bottom hairline |
| Shadow | `0 1px 2px rgba(17,20,24,0.04), 0 8px 24px -12px rgba(17,20,24,0.14)` |

Panels are square. Rounding a data surface makes it a card, and a card reads as marketing.

### Input

| Property | Value |
| --- | --- |
| Background | `#FFFFFF` |
| Border | 1px solid `#858F9B` (3.28:1, meets the non-text minimum) |
| Height / padding | 48px / 0 16px |
| Radius | 2px |
| Placeholder | `#66707B` |
| Focus | border `#00A86B`, ring 3px `rgba(0,168,107,0.2)` |
| Error border | `#C8382C` |
| Error text | `#9E2A20`, with `role="alert"` and `aria-describedby` |

### Filter and chip controls

Minimum 44px tall with `touch-manipulation`. Selected state is `#111418` fill with
`#FAFAFA` text, never colour alone.

### Navigation

Fixed, transparent at rest, `#FAFAFA` at 90% with backdrop blur past 72px of scroll.
Height 80px collapsing to 62px. Active link carries a 1px `#00A86B` underline plus
`aria-current="page"`.

---

## 5. Layout

**Base unit:** 4px. **Scale:** 4, 8, 12, 16, 24, 32, 48, 64, 96, 128, and a 208px section rhythm.

| Property | Value |
| --- | --- |
| Max container | 1400px |
| Max content | 1200px |
| Max measure | 68ch |
| Gutters | 24px / 48px (md) / 80px (lg) |
| Section padding | 80px mobile, 112px desktop |
| Radius scale | 2px small, 3px default, 6px large |

The 68ch measure is enforced by a `.measure` utility on every long-form paragraph. Wide
containers are for data, narrow measures are for prose, and the two never share a column.

---

## 6. Depth and elevation

| Level | Name | Value | Usage |
| --- | --- | --- | --- |
| 0 | Flat | none | Default. Most of the site. |
| 1 | Panel | `0 1px 2px rgba(17,20,24,0.04), 0 8px 24px -12px rgba(17,20,24,0.14)` | Data panels |
| 2 | Lift | `0 2px 4px rgba(17,20,24,0.05), 0 18px 40px -20px rgba(17,20,24,0.22)` | Project card hover |
| 3 | Overlay | backdrop `rgba(17,20,24,0.25)` with 4px blur | Mobile drawer scrim |

Shadows derive from the ink, never pure black. Elevation is used sparingly: this system
separates with rules, not with height.

---

## 7. Do's and don'ts

### Do

1. Put every reading in `JetBrains Mono` with `.tabular` so columns align without a table.
2. Derive status colour from `statusFor()` in `lib/utils.ts`, never by hand.
3. Pair every colour-coded status with its text label.
4. Use `#00764B` for accent text and `#00A86B` for fills. They are not interchangeable.
5. Set long-form prose in `.measure` (68ch).
6. Break the layout pattern between consecutive sections.
7. Draw separation with a hairline or a `TickRule`, not a shadow.
8. Animate numbers to their measured value. That is the house gesture.
9. Keep headings sentence case, including page titles.
10. Generate imagery procedurally from a seed via `DuctSchematic`.

### Don't

1. No photography. Not stock, not AI-generated, not a hero image.
2. No parallax. It is imprecise, and precision is the brand.
3. No rounded corners above 6px, and none at all on data panels.
4. No purple, no teal-and-coral, no gradient meshes behind text.
5. No raw hex in a component. If a value is missing, add the token.
6. No Inter, Roboto, Arial, Helvetica, Open Sans, or Space Grotesk.
7. No text on Ink 400 or lighter.
8. No em dashes or en dashes anywhere in the copy.
9. No decorative emoji.
10. No case study without findings in it.

### The AI slop test

If someone saw this and was told AI made it, would they believe it? The tells to watch for
specifically here: a centred hero over a gradient, three evenly weighted feature cards,
a stock photograph of a technician with a clipboard, and any sentence containing
"comprehensive solutions".

---

## 8. Responsive behaviour

| Name | Width | Container padding | Grid |
| --- | --- | --- | --- |
| Mobile | 320-639px | 24px | 1 column |
| sm | 640px | 24px | 1-2 columns |
| md | 768px | 48px | 2 columns |
| lg | 1024px | 80px | 3 columns, split heroes |
| xl | 1280px | 80px | as lg, wider measure |
| 2xl | 1536px | 80px | container caps at 1400px |

- Touch targets 44px minimum, 8px minimum spacing. Filter chips, nav toggles, and checkbox
  chips all carry `min-h-11` and `touch-manipulation`.
- Type scales fluidly with `clamp()`. No component declares a breakpoint for font size.
- Data tables scroll horizontally inside a `role="region"` with `tabIndex={0}` so the
  scroll is reachable by keyboard, and the scrollbar stays visible.
- `DesignVsMeasured` drops the design column below 640px, keeping tag, bar, measured value,
  and delta.
- Mobile drawer traps focus, locks scroll, contains overscroll, and restores focus on close.

---

## 9. Agent prompt guide

### Quick reference

```
Field            #FAFAFA      Raised          #FFFFFF     Sunken     #F1F3F5
Heading          #111418      Body            #39424D     Secondary  #4E5865
Small / label    #66707B      Icons / borders #858F9B     Hairline   #E5E9ED
Accent text      #00764B      Accent fill     #00A86B     Wash       #E6F6EF
Deviation        #8A5D00 text / #C98A00 fill / #FBF2DE wash
Deficiency       #9E2A20 text / #C8382C fill / #FBEBE9 wash
Display / body   IBM Plex Sans        Data   JetBrains Mono, tabular-nums
```

**Data panel.** "Build a panel on `#FFFFFF` with a 1px `#E5E9ED` border, no radius, and
shadow `0 1px 2px rgba(17,20,24,0.04), 0 8px 24px -12px rgba(17,20,24,0.14)`. Header row:
flex, baseline aligned, 20px horizontal and 14px vertical padding, bottom hairline
`#E5E9ED`, title in JetBrains Mono 12px uppercase 0.12em tracking `#111418`, meta on the
right in 11px `#66707B`."

**Reading row.** "Tag in JetBrains Mono 12px `#111418`. Label in Plex Sans 14px `#4E5865`.
Status chip: 10px mono uppercase, 0.1em tracking, 1px border and wash background from the
status. Track 28px tall with the tolerance band in `#F1F3F5`, a 1px `#858F9B` design marker
at 68%, and the measured bar in the status colour easing to `measured / design` over 700ms
on `cubic-bezier(0.22, 1, 0.36, 1)`."

**Section heading.** "Eyebrow in JetBrains Mono 12-13px uppercase 0.16em `#00764B`,
preceded by an index in `#858F9B` and a 24px hairline in `#00A86B` at 60% opacity. Heading
below at the section scale, 500 weight, -0.02em, sentence case, max-width 4xl. Intro
paragraph in body large `#4E5865` constrained to 68ch."

**Primary CTA.** "44px tall, `#111418` background, `#FAFAFA` text, Plex Sans 14px 500,
24px horizontal padding, 3px radius, hover to `#00764B`, focus ring 2px `#00764B` offset
2px, transition on color, background-color, border-color, box-shadow at 200ms."

---

*Generated against the built system and verified. Contrast ratios computed with the
relative luminance formula, not estimated.*
