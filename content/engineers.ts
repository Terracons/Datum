/**
 * Spec language engineers can paste into their own documents. Free, and it
 * gets DATUM named in specifications, which is how this industry actually
 * generates work.
 */

export interface SpecSection {
  slug: string;
  number: string;
  title: string;
  summary: string;
  note: string;
  body: string;
}

export const specSections: SpecSection[] = [
  {
    slug: '23-05-93-tab',
    number: '23 05 93',
    title: 'Testing, Adjusting, and Balancing for HVAC',
    summary:
      'The independence language is in 1.3.B. It is the paragraph most TAB specifications are missing, and the reason so many balance reports have no findings in them.',
    note: 'Written to CSI three-part format. Bracketed items are project decisions.',
    body: `SECTION 23 05 93
TESTING, ADJUSTING, AND BALANCING FOR HVAC

PART 1 - GENERAL

1.1  SUMMARY
     A.  This Section includes testing, adjusting, and balancing of HVAC
         systems to produce design objectives, including:
         1.  Balancing airflow within distribution systems, including
             submains, branches, and terminals, to indicated quantities.
         2.  Adjusting total system to provide indicated quantities.
         3.  Measuring electrical performance of HVAC equipment.
         4.  Setting quantitative performance of HVAC equipment.
         5.  Verifying that automatic control devices are functioning
             properly.
         6.  Reporting results of activities and procedures specified in
             this Section.

1.2  DEFINITIONS
     A.  TAB Agency: The independent entity engaged to perform the work of
         this Section.
     B.  Deficiency: Any measured condition outside the tolerance stated in
         Article 3.2, or any condition that prevents a system from being
         balanced to design.

1.3  QUALITY ASSURANCE
     A.  TAB Agency Qualifications: An entity certified by NEBB or AABC as a
         TAB agency, with a currently certified Professional or Test and
         Balance Engineer who will be responsible for the work and who will
         sign the final report.

     B.  TAB Agency Independence: The TAB Agency shall be independent of all
         other entities performing work on this Project. The TAB Agency
         shall not:
         1.  Install, furnish, sell, or service HVAC equipment or systems.
         2.  Be owned in whole or in part by, or share common ownership
             with, any entity performing installation work on this Project.
         3.  Be engaged as a subcontractor to the Mechanical Contractor
             whose installation is the subject of the testing.
         4.  Hold any financial interest in the outcome of the testing
             other than the fee for performing it.
         The TAB Agency shall disclose in writing, with its proposal, any
         work performed for the Mechanical Contractor, the General
         Contractor, or the design professional of record within the
         preceding five (5) years.

     C.  TAB Agency Engagement: The TAB Agency shall be engaged [by the
         Owner directly] [under the General Contractor, reporting to the
         Owner]. The final report shall be issued to the Owner
         simultaneously with, or in advance of, issuance to any other
         party. No party shall review or comment on findings prior to
         issuance to the Owner.

     D.  Instrumentation: All instruments shall be calibrated within twelve
         (12) months preceding the work, against standards traceable to
         NIST. Calibration certificates shall be included as an appendix to
         the final report.

1.4  SUBMITTALS
     A.  Qualification data, including certification numbers and the
         disclosure required by 1.3.B.
     B.  Instrument list with model numbers and calibration dates.
     C.  Sample report format prior to commencement of field work.
     D.  Draft report within [ten (10)] days of field completion.
     E.  Final report, signed and certified.

PART 2 - PRODUCTS  (Not Applicable)

PART 3 - EXECUTION

3.1  PREPARATION
     A.  The TAB Agency shall not begin balancing until systems are
         complete and operable, including:
         1.  Filters clean and installed.
         2.  Duct systems complete, sealed, and leak-tested.
         3.  Access to all balancing devices provided and verified.
         4.  Automatic control systems complete and functional, with
             terminal units under control.
     B.  The TAB Agency shall report in writing any condition preventing
         commencement. Balancing an incomplete system produces a report
         that documents nothing.

3.2  TOLERANCES
     A.  Air outlets and inlets: plus or minus ten percent (10%) of design.
     B.  Air systems serving critical spaces, including operating rooms,
         isolation rooms, laboratories, and cleanrooms: plus or minus five
         percent (5%) of design.
     C.  Hydronic systems: plus or minus five percent (5%) of design.
     D.  Fan and pump total: plus or minus five percent (5%) of design.
     E.  Values outside these tolerances shall be reported as measured. No
         value shall be adjusted, rounded, or interpolated to fall within
         tolerance.

3.3  PROCEDURES, AIR SYSTEMS
     A.  Verify fan capability at design conditions before balancing
         terminals. Record fan speed, motor amperage, and static pressure
         profile across each component.
     B.  Balance proportionally from the index terminal, adjusting the fan
         to the minimum speed satisfying all terminals.
     C.  Measure one hundred percent (100%) of terminal devices. Sampling
         is not permitted for initial balancing.
     D.  Traverse main and branch ducts by the Log-Tchebycheff method where
         straight duct permits.
     E.  Determine outside air quantity by [direct measurement] [temperature
         mixing calculation] and state the method used.

3.4  PROCEDURES, HYDRONIC SYSTEMS
     A.  Identify the index circuit by measurement.
     B.  Balance proportionally from the index circuit outward.
     C.  Record system differential temperature at design and part load.
     D.  Record final pump impeller trim or drive speed with corresponding
         head and flow.

3.5  REPORTING
     A.  The final report shall include, at minimum:
         1.  Executive summary stating whether the systems meet design.
         2.  Deficiency log immediately following the executive summary,
             each item identified by unique number, system, location,
             drawing reference, severity, and required corrective action.
         3.  Every reading taken, with design value and percent of design
             calculated.
         4.  Fan, pump, and equipment test sheets.
         5.  Marked-up drawings showing final device positions.
         6.  Instrument calibration certificates.
     B.  Reading data shall additionally be provided in machine-readable
         format (CSV or equivalent).
     C.  Deficiencies shall not be relocated to an appendix, summarized in
         aggregate, or omitted.

3.6  REINSPECTION
     A.  The TAB Agency shall re-test each deficiency after correction.
         Written confirmation from the correcting party is not acceptable
         in place of measurement.

END OF SECTION`,
  },
  {
    slug: '01-91-13-cx',
    number: '01 91 13',
    title: 'General Commissioning Requirements',
    summary:
      'Aligned to ASHRAE Guideline 0 and Standard 202. Includes the design-phase engagement language that determines whether commissioning is a quality process or a witness at the end.',
    note: 'Pairs with 23 08 00 for HVAC-specific commissioning requirements.',
    body: `SECTION 01 91 13
GENERAL COMMISSIONING REQUIREMENTS

PART 1 - GENERAL

1.1  SUMMARY
     A.  Commissioning is a quality-focused process for verifying that
         facility systems perform in accordance with the Owner's Project
         Requirements (OPR). It is not a substitute for the Contractor's
         quality control, nor for the design professional's construction
         administration.

1.2  COMMISSIONING AUTHORITY
     A.  The Commissioning Authority (CxA) shall be engaged by the Owner
         directly and shall report to the Owner.
     B.  CxA Qualifications: Certified as a Commissioning Authority by
         ACG (CxA), ASHRAE (BCxP), or equivalent, with documented
         experience on not fewer than [five (5)] projects of comparable
         type and scale.
     C.  CxA Independence: The CxA shall have no financial interest in the
         Project other than the commissioning fee, shall not be affiliated
         with the design professional of record or any contractor
         performing work on the Project, and shall not furnish, install, or
         service equipment on the Project.
     D.  The CxA shall be engaged not later than [completion of schematic
         design]. Engagement after construction documents are complete
         forfeits the design-phase value of the process.

1.3  COMMISSIONED SYSTEMS
     A.  [HVAC systems and associated controls]
     B.  [Building automation system]
     C.  [Domestic hot water systems]
     D.  [Emergency power and transfer]
     E.  [Lighting controls]
     F.  [Building envelope, per 01 91 16]

1.4  CxA RESPONSIBILITIES
     A.  Review or develop the OPR and review the Basis of Design.
     B.  Perform design reviews at [design development] and [ninety percent
         (90%) construction documents]. Comments shall be logged, tracked,
         and formally responded to by the design team.
     C.  Develop the Commissioning Plan.
     D.  Review submittals for commissioned equipment for conformance with
         the OPR.
     E.  Develop prefunctional checklists and functional performance test
         (FPT) procedures.
     F.  Witness and direct functional performance testing.
     G.  Review trend data at not greater than fifteen (15) minute
         intervals for a minimum of [three (3)] weeks prior to acceptance.
     H.  Compile the Systems Manual.
     I.  Verify operator training and record the sessions.
     J.  Conduct a warranty-period review at [ten (10)] months after
         Substantial Completion.

1.5  FUNCTIONAL PERFORMANCE TESTING
     A.  Testing shall be active. Sequences shall be exercised by inducing
         the conditions to which they respond, including sensor failure,
         loss of power, changeover, and setpoint excursion. Observation of
         a system operating in a steady state does not constitute a
         functional test.
     B.  One hundred percent (100%) of unique control sequences shall be
         tested. Where multiple identical units exist, [twenty percent
         (20%)] shall be tested; failure of any unit shall require testing
         of all.
     C.  Failed tests shall be corrected by the responsible Contractor and
         retested in full. Partial retesting is not acceptable.

1.6  ISSUES LOG
     A.  The CxA shall maintain a commissioning issues log accessible to
         the Owner, design team, and Contractor throughout the Project.
     B.  Each issue shall identify the system, location, description,
         responsible party, and status.
     C.  The log shall be issued to the Owner in full at Substantial
         Completion, including open items.

END OF SECTION`,
  },
  {
    slug: 'scope-checklist',
    number: 'Reference',
    title: 'TAB / Cx Scope Checklist',
    summary:
      'What to confirm is in the scope before it goes out to bid. Written for a specifier deciding what to ask for, not for a lawyer.',
    note: 'Not a specification section. A one-page decision aid.',
    body: `TAB / Cx SCOPE CHECKLIST
DATUM Balance & Commissioning

CONTRACTING
[ ] Who holds the TAB / Cx contract? (Owner is strongly preferred.)
[ ] Does the report go to the Owner first, in full, unedited?
[ ] Is the agency prohibited from subcontracting to the Mechanical
    Contractor whose work is being tested?
[ ] Is a five-year relationship disclosure required with the proposal?

COVERAGE
[ ] Is 100% terminal measurement required, or is sampling permitted?
[ ] Are critical spaces called out with a tighter tolerance? (5% vs 10%)
[ ] Are room pressure relationships in scope, with the operating mode
    stated?
[ ] Is outside air determination required, and is the method specified?
[ ] Are fume hoods tested to ASHRAE 110 as-installed, or only face
    velocity?
[ ] Are cleanrooms classified in a stated occupancy state?

READINESS
[ ] Is there a written readiness checklist the systems must pass before
    TAB begins?
[ ] Is access to every balancing device required to be verified before
    ceiling closeout?
[ ] Who pays for return trips caused by systems that were not ready?

COMMISSIONING
[ ] Is the CxA engaged before the end of schematic design?
[ ] How many design reviews, and at what milestones?
[ ] Is functional testing required to be active (induced conditions)?
[ ] Is trend review required prior to acceptance, and for how long?
[ ] Is a ten-month warranty review included?

DELIVERABLES
[ ] Is the deficiency log required to appear before the appendices?
[ ] Is machine-readable reading data (CSV) required?
[ ] Are calibration certificates required to be attached?
[ ] Is re-testing by the agency required, rather than written
    confirmation from the correcting party?`,
  },
];

export function getSpecSection(slug: string) {
  return specSections.find((s) => s.slug === slug);
}

export const engineerNotes = [
  {
    title: 'Name the tolerance twice',
    body: 'Specify ±10% for general air and ±5% for critical spaces explicitly. Agencies default to the looser number when only one is stated, and a 10% band on an operating room is not a defensible position.',
  },
  {
    title: 'Say who the report goes to',
    body: 'A specification that requires an independent agency but is silent on who receives the report has not required independence. It has required a certification number.',
  },
  {
    title: 'Require re-test, not confirmation',
    body: 'Without this line, deficiencies get closed by an email from the party who caused them. Three words in 3.6 prevents it.',
  },
  {
    title: 'Put readiness in writing',
    body: 'Most TAB schedule overruns are not the agency’s. Define what "ready to balance" means and who pays for the trip when it is not.',
  },
];
