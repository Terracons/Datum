# Content map

Everything is fictional. The standards, credentials, and instrument models referenced are real,
and the failure modes described are the ones that actually turn up in this work.

| Module | Holds |
| --- | --- |
| `company.ts` | Identity, contact, registrations, the findings counter, and the homepage hero readout (`heroComparison`) |
| `services.ts` | Seven services: problem, method, deliverables, instruments, specs, typical findings, FAQ |
| `projects.ts` | Six projects with metrics, a design-vs-measured selection, and an abridged deficiency log |
| `independence.ts` | The three commitments and their cost, the structural argument, disclosures, refusals, and the four questions |
| `reports.ts` | Deliverable descriptions plus the live sample data rendered on `/reports` |
| `engineers.ts` | Paste-able CSI sections (23 05 93, 01 91 13) and a scope checklist |
| `certifications.ts` | Firm and individual credentials, insurance limits, calibration policy |
| `team.ts` · `roles.ts` · `process.ts` · `prequalification.ts` | People, hiring, engagement stages, preconstruction documents |

## Editing rules

- A project without findings does not go on the site. A case study with no findings is an
  advertisement.
- Any claim about independence is followed by what it costs. `pledge.commitments[].cost` is not
  decorative.
- Readings must be internally consistent: `statusFor()` derives pass/deviation/deficiency from
  `design`, `measured`, and `tolerance`, so a row cannot be labelled one thing and drawn another.
- Tolerances follow the trade: ±10% general air, ±5% critical spaces and hydronic.
