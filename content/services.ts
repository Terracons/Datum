import type { Service, ServiceSlug } from '@/types';

export const services: Service[] = [
  {
    slug: 'air-balancing',
    title: 'Testing, Adjusting & Balancing: Air',
    shortTitle: 'Air Balancing',
    summary:
      'Every diffuser, every VAV box, measured and adjusted to design. Then measured again and written down.',
    icon: 'Wind',
    lead: 'A mechanical system is a set of assumptions until somebody puts an instrument on it. Air balancing is where the assumptions get tested: fan capacity, terminal flow, room pressure relationships, and the outside air the code officer will ask about.',
    standard: 'NEBB Procedural Standard for TAB of Environmental Systems, 8th edition · AABC National Standards, 2016',
    problem: [
      'The building is occupied and half the complaints are on the same side of the floor.',
      'The mechanical contractor’s balance report shows every terminal within 3% of design. All 412 of them.',
      'Outside air cannot be demonstrated to the code official, and occupancy is in eleven days.',
      'The fan is running at 92% speed at design load and nobody knows why.',
    ],
    method: [
      {
        name: 'Fan and system capacity first',
        body: 'Before a single terminal is touched, we establish that the air handler can deliver design flow: fan curve verification, motor amperage against nameplate, and a static pressure profile across every component. If the fan cannot make the number, balancing the terminals is theatre.',
      },
      {
        name: 'Proportional balancing, index terminal out',
        body: 'Terminals are balanced proportionally from the index run, the hungriest branch, outward, so the system settles at the lowest fan energy that satisfies every device. Setting each box independently to design produces a balanced-looking report and a fan riding its curve at full speed.',
      },
      {
        name: 'Every device, not a sample',
        body: 'Constant volume diffusers by flow hood, VAV boxes at maximum and minimum through the controls interface, exhaust by hood or traverse. Sampling is for verification work on somebody else’s report, not for a first balance.',
      },
      {
        name: 'Pressure relationships as designed',
        body: 'Isolation rooms, soiled holding, pharmacy, kitchen, parking. Room-to-room differentials are measured with the doors closed and the system in the operating mode the sequence actually calls for, not the one that is convenient to create.',
      },
    ],
    deliverables: [
      'Terminal reading schedule: design, preliminary, final, percent of design',
      'Fan and air handler test sheets with static profiles',
      'Outside air determination, method stated',
      'Room pressurization schedule with differentials',
      'Marked-up mechanical drawings showing damper positions',
      'Deficiency log with drawing references and required actions',
      'Instrument calibration certificates',
    ],
    instruments: [
      { name: 'Capture hood', model: 'Shortridge CFM-88', calibration: 'Annual, factory' },
      { name: 'Micromanometer', model: 'Shortridge ADM-870C', calibration: 'Annual, factory' },
      { name: 'Rotating vane anemometer', model: 'TSI 5725', calibration: 'Annual, NIST-traceable' },
      { name: 'Hot-wire anemometer', model: 'TSI 9565-P', calibration: 'Annual, factory' },
      { name: 'Digital tachometer', model: 'Extech 461895', calibration: 'Annual, NIST-traceable' },
    ],
    specs: [
      { label: 'Governing standard', value: 'NEBB 8th ed. / AABC 2016' },
      { label: 'Air tolerance, supply & return', value: '±10% of design' },
      { label: 'Air tolerance, critical spaces', value: '±5% of design' },
      { label: 'Traverse method', value: 'Log-Tchebycheff' },
      { label: 'Sampling rate, first balance', value: '100% of terminals' },
      { label: 'Sampling rate, verification', value: '10 to 15%, agency-selected' },
      { label: 'Report turnaround', value: '5 to 10 business days' },
    ],
    typicalFindings: [
      'Fire-smoke damper left at 60% open above an inaccessible ceiling',
      'VAV minimum set in the controller below the box’s measurable range',
      'Return path blocked by a full-height wall built after the ceiling grid',
      'Outside air damper linkage disconnected, economizer never operating',
      'Two branch dampers installed backwards from the drawing',
    ],
    faq: [
      {
        q: 'Can you balance while the building is occupied?',
        a: 'Yes, and often it is the only honest way to do it: an empty building has different door positions, different heat gain, and no one to complain. Night and weekend field work is scheduled at no premium.',
      },
      {
        q: 'What if the system cannot reach design?',
        a: 'We document it, quantify the shortfall, and identify the cause: fan, duct, damper, or design. The report says the system does not meet design and why. It does not say the system is balanced.',
      },
    ],
    seo: {
      title: 'Air Balancing (TAB) | NEBB Certified | DATUM',
      description:
        'Independent air balancing to NEBB and AABC standards. Every terminal measured, fan capacity verified first, deficiencies logged with drawing references. Denver and the Mountain West.',
    },
  },
  {
    slug: 'hydronic-balancing',
    title: 'Hydronic Balancing',
    shortTitle: 'Hydronic Balancing',
    summary:
      'Chilled and hot water flow verified across the whole loop, from the index coil back to the pump.',
    icon: 'Waves',
    lead: 'Water is less forgiving than air, and harder to fake. A hydronic system that has never been proportionally balanced will heat and cool the first half of the building beautifully while the far coils starve, and the plant will burn its way through the difference.',
    standard: 'NEBB Procedural Standard, 8th edition, Section 6 · ASHRAE Standard 111',
    problem: [
      'The chiller short-cycles at part load and nobody can say what the actual system delta-T is.',
      'The far end of the loop cannot hold setpoint on a design day, and the answer so far has been more pump.',
      'Circuit setters were installed but never set. Several are still at the factory position.',
      'Pump energy is 30% over the model and the balance report says the loop is balanced.',
    ],
    method: [
      {
        name: 'Establish the index circuit',
        body: 'The circuit with the highest pressure drop sets the operating point for the whole system. We find it by measurement, not by looking at the drawing, because the drawing does not know about the strainer somebody left in.',
      },
      {
        name: 'Proportional balance outward',
        body: 'Each branch is set as a ratio of the index circuit, then the system is re-proportioned as the pump settles. The result is design flow to every coil at the lowest head the pump can deliver it with.',
      },
      {
        name: 'Delta-T verification at the plant',
        body: 'System delta-T is measured at design load and at part load. Low delta-T syndrome is a plant-level symptom of terminal-level problems: three-way valves left in bypass, coils fouled, control valves oversized. We locate which.',
      },
      {
        name: 'Pump trim documented',
        body: 'Final pump impeller trim or VFD speed is recorded with the head and flow it produces. That number is what an energy model can be reconciled against later.',
      },
    ],
    deliverables: [
      'Coil-by-coil flow schedule: design, final, percent of design',
      'Pump test sheets with head, flow, amperage, and speed',
      'System delta-T at design and part load',
      'Index circuit identification and proportional balance record',
      'Control valve and circuit setter position record',
      'Deficiency log with required actions',
    ],
    instruments: [
      { name: 'Differential pressure kit', model: 'TA Scope with wireless sensors', calibration: 'Annual, factory' },
      { name: 'Ultrasonic flow meter', model: 'Fuji Portaflow 33-Hydro', calibration: 'Annual, factory' },
      { name: 'Digital thermometer, dual probe', model: 'Fluke 54-II B', calibration: 'Annual, NIST-traceable' },
      { name: 'Clamp meter, true RMS', model: 'Fluke 376 FC', calibration: 'Annual, NIST-traceable' },
    ],
    specs: [
      { label: 'Governing standard', value: 'NEBB 8th ed. / ASHRAE 111' },
      { label: 'Hydronic tolerance', value: '±5% of design' },
      { label: 'Balance method', value: 'Proportional, index circuit' },
      { label: 'Flow measurement', value: 'Balancing valve ΔP or ultrasonic' },
      { label: 'Delta-T verification', value: 'Design and part load' },
      { label: 'Report turnaround', value: '5 to 10 business days' },
    ],
    typicalFindings: [
      'Three-way valve piped so the bypass is always open',
      'Circuit setters installed downstream of the coil with no straight run',
      'Air never purged from the top of the riser; two floors never saw flow',
      'Primary pump running at full speed against a nearly closed system',
      'Coil piped backwards, parallel flow instead of counterflow',
    ],
    seo: {
      title: 'Hydronic Balancing | Chilled & Hot Water | DATUM',
      description:
        'Proportional hydronic balancing to NEBB and ASHRAE 111. Index circuit identified by measurement, delta-T verified at the plant, pump trim documented.',
    },
  },
  {
    slug: 'commissioning',
    title: 'Building Commissioning',
    shortTitle: 'Commissioning',
    summary:
      'New construction. Verify that what the design intended is what actually got built and actually works.',
    icon: 'ClipboardCheck',
    lead: 'Commissioning is a quality process, not a punch list. It starts at design, follows the equipment through submittal and installation, and ends with a system that has been made to fail on purpose so that everyone knows what it does when it fails by accident.',
    standard: 'ASHRAE Guideline 0-2019 · ASHRAE Standard 202-2018 · LEED v4.1 EA Prerequisite and Credit',
    problem: [
      'The design team, the contractor, and the owner have three different understandings of what the sequence does.',
      'Substantial completion is in six weeks and the controls contractor has not demonstrated a single sequence.',
      'The building will be turned over with no systems manual and no trained operating staff.',
      'The last building did this too, and the facilities team has been fighting it for four years.',
    ],
    method: [
      {
        name: 'Owner’s Project Requirements, written down',
        body: 'If the OPR does not exist, we write it with the owner before reviewing anything. Commissioning against an unwritten intent is just opinion with a checklist stapled to it.',
      },
      {
        name: 'Design review while it is still paper',
        body: 'Two reviews, typically at design development and 90% construction documents. We look for sequences that cannot be tested, equipment that cannot be accessed, and control points that do not exist for the sequence that requires them.',
      },
      {
        name: 'Functional performance testing, actively',
        body: 'We do not watch a system run. We fail the lead pump, drive the space sensor out of range, drop the duct static, simulate loss of power, and force every changeover. The system either does what the sequence says or it goes in the log.',
      },
      {
        name: 'Trend review before acceptance',
        body: 'Two to four weeks of trend data at fifteen-minute intervals. Simultaneous heating and cooling, hunting valves, and sequences that only misbehave at 4am show up in trends and in nothing else.',
      },
      {
        name: 'Systems manual and operator training',
        body: 'Assembled as a working document for the people who will run the building, not a binder of submittals. Training is recorded, and the recording is turned over.',
      },
    ],
    deliverables: [
      'Owner’s Project Requirements and Basis of Design review',
      'Commissioning plan',
      'Design review logs, two rounds',
      'Prefunctional checklists by equipment',
      'Functional performance test scripts and results',
      'Trend analysis report',
      'Systems manual',
      'Training records and recordings',
      'Final commissioning report with open-item log',
    ],
    instruments: [
      { name: 'Data logger network', model: 'Onset HOBO MX series', calibration: 'Annual, NIST-traceable' },
      { name: 'Portable pressure transducer set', model: 'Setra 267', calibration: 'Annual, factory' },
      { name: 'Power quality analyzer', model: 'Fluke 1736', calibration: 'Annual, factory' },
      { name: 'Thermal imager', model: 'FLIR E76', calibration: 'Annual, factory' },
    ],
    specs: [
      { label: 'Governing guideline', value: 'ASHRAE Guideline 0 / Std 202' },
      { label: 'Design reviews', value: '2 rounds (DD, 90% CD)' },
      { label: 'FPT coverage', value: '100% of unique sequences' },
      { label: 'Trend interval', value: '15 minutes, 2 to 4 weeks' },
      { label: 'Warranty review', value: '10 months post-occupancy' },
      { label: 'LEED', value: 'Fundamental and Enhanced Cx' },
    ],
    typicalFindings: [
      'Economizer high-limit set to a value that disables free cooling year-round',
      'Simultaneous heating and cooling in 31 of 88 zones, visible only in trends',
      'Emergency power transfer sequence never tested with mechanical load connected',
      'Static pressure reset programmed but the reset never enabled',
      'Two air handlers sharing a sensor address, one of them reading the other’s space',
    ],
    faq: [
      {
        q: 'When should the CxA be brought on?',
        a: 'Before schematic design is complete. The cheapest deficiency to fix is the one that is still a line on a drawing. Bringing a commissioning authority in at 95% construction gets you a witness, not a quality process.',
      },
      {
        q: 'Does this satisfy LEED?',
        a: 'Yes. We hold Fundamental and Enhanced Commissioning scope on LEED v4 and v4.1 projects and prepare the credit documentation in the form GBCI reviewers expect.',
      },
    ],
    seo: {
      title: 'Building Commissioning (Cx) | Independent CxA | DATUM',
      description:
        'Independent third-party commissioning to ASHRAE Guideline 0 and Standard 202. Design review, functional performance testing, trend analysis, systems manual, 10-month review.',
    },
  },
  {
    slug: 'retro-commissioning',
    title: 'Retro-Commissioning',
    shortTitle: 'Retro-Cx',
    summary:
      'Existing buildings. Find the drift, quantify it in dollars, and recover the energy without a capital project.',
    icon: 'RotateCcw',
    lead: 'Every building drifts. Overrides get left in, sensors fail low, schedules get extended for a weekend event in 2019 and never get put back. Retro-commissioning is the discipline of finding that drift and costing it, before anyone proposes replacing equipment that works.',
    standard: 'ASHRAE Guideline 0.2-2015 · ASHRAE Standard 211 (energy audit alignment)',
    problem: [
      'Energy use per square foot has climbed 14% in three years with no change in occupancy.',
      'The portfolio has 40 buildings and no way to rank which one to touch first.',
      'A capital request for new equipment is on the table and nobody has proven the existing equipment is the problem.',
      'Utility rebate program requires a retro-commissioning study by an independent provider.',
    ],
    method: [
      {
        name: 'Screen the portfolio before touching one building',
        body: 'Utility data, EUI benchmarking, and a two-hour walkthrough per building produce a ranked list. Spending the study budget on the building with the largest recoverable gap beats spreading it evenly.',
      },
      {
        name: 'Trend first, walk second',
        body: 'Four weeks of BAS trends at fifteen-minute intervals before the site investigation. The data tells us where to look; the walkthrough confirms why. It is faster and it finds things a walkthrough never will.',
      },
      {
        name: 'Cost every finding',
        body: 'Each measure gets an estimated annual saving, an implementation cost, and a simple payback. Findings that do not pay back are still reported, since they may matter for comfort or compliance, but they are labelled honestly.',
      },
      {
        name: 'Measure and verify what was implemented',
        body: 'Twelve months after implementation we reconcile predicted savings against metered reality, using IPMVP Option B or C. That number is the only one worth putting in a board report.',
      },
    ],
    deliverables: [
      'Portfolio screening and ranked opportunity list',
      'Trend analysis report',
      'Findings register with cost, saving, and payback per measure',
      'Implementation scope suitable for competitive bid',
      'Utility incentive application support',
      'Measurement and verification report at 12 months',
    ],
    instruments: [
      { name: 'Data logger network', model: 'Onset HOBO MX series', calibration: 'Annual, NIST-traceable' },
      { name: 'Portable power meter', model: 'DENT ELITEpro XC', calibration: 'Annual, factory' },
      { name: 'Ultrasonic flow meter', model: 'Fuji Portaflow 33-Hydro', calibration: 'Annual, factory' },
      { name: 'Thermal imager', model: 'FLIR E76', calibration: 'Annual, factory' },
    ],
    specs: [
      { label: 'Typical study duration', value: '8 to 14 weeks' },
      { label: 'Typical simple payback', value: '0.4 to 2.2 years' },
      { label: 'Trend period', value: '4 weeks minimum, pre-implementation' },
      { label: 'M&V protocol', value: 'IPMVP Option B or C' },
      { label: 'Verified recovery to date', value: '$4.2M across 312 buildings' },
      { label: 'Screening rate', value: '2 hours per building' },
    ],
    typicalFindings: [
      'Night setback disabled during a 2019 event and never re-enabled: $18,400/yr',
      'Chilled water reset schedule overridden at the operator workstation: $31,200/yr',
      'Three air handlers running 24/7 to serve one after-hours tenant on floor 2',
      'Outside air damper minimum position 40% above code requirement',
      'Two hundred VAV boxes at a minimum flow set for the previous floor plan',
    ],
    seo: {
      title: 'Retro-Commissioning (RCx) | Energy Recovery | DATUM',
      description:
        'Retro-commissioning for existing buildings and portfolios. Trend-driven investigation, findings costed with payback, IPMVP measurement and verification at 12 months.',
    },
  },
  {
    slug: 'cleanroom-certification',
    title: 'Cleanroom Certification',
    shortTitle: 'Cleanroom Certification',
    summary:
      'ISO 14644 classification and recertification, with the test report a regulator will accept.',
    icon: 'ShieldCheck',
    lead: 'A cleanroom is a controlled environment or it is a room with expensive filters in it. Classification testing determines which, on the day of the test, under the occupancy state that was agreed in writing.',
    standard: 'ISO 14644-1:2015 classification · ISO 14644-2:2015 monitoring · ISO 14644-3:2019 test methods · USP <797> / <800> alignment',
    problem: [
      'Annual recertification is due and the last report did not state the occupancy state it was tested in.',
      'A regulatory inspection is scheduled and the room has been modified since it was classified.',
      'Particle counts pass but the room takes eleven minutes to recover after a door event.',
      'The compounding pharmacy needs USP <797> documentation and the previous vendor tested to the wrong standard.',
    ],
    method: [
      {
        name: 'Airflow volume and velocity',
        body: 'Supply volume by capture hood or velocity grid, air change rate calculated per room volume, and unidirectional flow velocity measured on a defined grid 150mm from the filter face.',
      },
      {
        name: 'Installed filter leakage',
        body: 'HEPA and ULPA filters and their seals scanned per ISO 14644-3 with a photometer or discrete particle counter. Leaks are located, marked, and re-scanned after repair.',
      },
      {
        name: 'Airborne particle classification',
        body: 'Sample locations calculated from room area, sample volume per ISO 14644-1 Annex A, and results reported with the 95% upper confidence limit where the standard requires it.',
      },
      {
        name: 'Recovery and visualization',
        body: 'Recovery rate testing after a controlled challenge, and airflow visualization recorded on video so the client can see the pattern rather than read about it.',
      },
    ],
    deliverables: [
      'ISO 14644-1 classification report with sample location map',
      'Installed filter leakage scan record',
      'Airflow volume, velocity, and air change rate schedule',
      'Room pressurization cascade',
      'Recovery test results',
      'Airflow visualization video',
      'Temperature and humidity verification',
      'Certificate of classification with occupancy state stated',
    ],
    instruments: [
      { name: 'Discrete particle counter', model: 'Lighthouse Solair 3100+', calibration: 'Annual, factory, ISO 21501-4' },
      { name: 'Aerosol photometer', model: 'ATI 2i', calibration: 'Annual, factory' },
      { name: 'Aerosol generator', model: 'ATI TDA-4B', calibration: 'N/A' },
      { name: 'Thermal anemometer', model: 'TSI 9565-P with probe', calibration: 'Annual, factory' },
      { name: 'Micromanometer', model: 'Shortridge ADM-870C', calibration: 'Annual, factory' },
    ],
    specs: [
      { label: 'Classification standard', value: 'ISO 14644-1:2015' },
      { label: 'Test methods', value: 'ISO 14644-3:2019' },
      { label: 'Particle counter compliance', value: 'ISO 21501-4' },
      { label: 'Occupancy states', value: 'As-built, at-rest, operational' },
      { label: 'Recertification interval', value: '6 or 12 months by class' },
      { label: 'Report turnaround', value: '3 to 5 business days' },
    ],
    typicalFindings: [
      'Filter gasket compressed unevenly at one corner: 0.019% leak',
      'Room classified at-rest but operated with equipment that was never in the room during the test',
      'Pressure cascade reversed between anteroom and buffer room with the door closed',
      'Recovery time 11 minutes against a 20-minute requirement, passing but trending',
    ],
    seo: {
      title: 'Cleanroom Certification | ISO 14644 | DATUM',
      description:
        'ISO 14644-1 cleanroom classification and recertification: filter leakage scanning, particle count, recovery, visualization. USP 797 and 800 aligned documentation.',
    },
  },
  {
    slug: 'sound-vibration',
    title: 'Sound & Vibration Testing',
    shortTitle: 'Sound & Vibration',
    summary:
      'NC and RC levels in occupied spaces, and the source identification that makes a complaint fixable.',
    icon: 'AudioLines',
    lead: 'Noise complaints are the most subjective thing in a building and the easiest to make objective. An octave band measurement turns "the conference room is loud" into a number, a curve, and usually a specific piece of equipment.',
    standard: 'ASHRAE Handbook, HVAC Applications, Ch. 49 · ANSI/ASA S12.2 · NEBB Sound & Vibration Procedural Standard',
    problem: [
      'The executive conference room measures NC-45 against an NC-30 specification and nobody can say why.',
      'A rooftop unit is transmitting structure-borne vibration into the floor below.',
      'The open office is uncomfortable but the sound level meter reads a perfectly normal dBA.',
      'Tenant lease requires documented NC levels before occupancy.',
    ],
    method: [
      {
        name: 'Octave band, not dBA',
        body: 'A single A-weighted number hides the low-frequency rumble that causes most HVAC complaints. We measure in octave bands from 63 Hz to 8 kHz and plot against NC and RC curves.',
      },
      {
        name: 'Source isolation by shutdown',
        body: 'Systems are shut down and restarted individually while measurements run, which turns a composite noise level into an attributable one. Background is measured with everything off.',
      },
      {
        name: 'Vibration at the source and the receiver',
        body: 'Triaxial accelerometer readings at the equipment base, the isolators, and the structure below. Isolator deflection is measured, not assumed from the submittal.',
      },
    ],
    deliverables: [
      'Octave band sound pressure levels by room',
      'NC and RC curve plots with the governing band identified',
      'Background level with systems off',
      'Source attribution by system',
      'Vibration readings with isolator deflection',
      'Recommended corrections with expected reduction',
    ],
    instruments: [
      { name: 'Type 1 sound level meter', model: 'Larson Davis 831C', calibration: 'Annual, factory' },
      { name: 'Acoustic calibrator', model: 'Larson Davis CAL200', calibration: 'Annual, NIST-traceable' },
      { name: 'Triaxial accelerometer', model: 'PCB 356A16', calibration: 'Annual, factory' },
      { name: 'Vibration analyzer', model: 'SKF Microlog AX', calibration: 'Annual, factory' },
    ],
    specs: [
      { label: 'Meter class', value: 'Type 1 / Class 1' },
      { label: 'Frequency range', value: '63 Hz to 8 kHz octave bands' },
      { label: 'Criteria curves', value: 'NC, RC, RC Mark II' },
      { label: 'Field calibration', value: 'Before and after each session' },
      { label: 'Typical office target', value: 'NC-30 to NC-35' },
      { label: 'Report turnaround', value: '5 business days' },
    ],
    typicalFindings: [
      'Fan blade pass frequency at 125 Hz driving NC-42 in a room specified at NC-30',
      'Spring isolators bottomed out under a unit 400 lb heavier than the submittal',
      'Duct-borne noise through a return path with no lining for the first 20 feet',
      'Diffuser neck velocity 40% above the manufacturer’s NC-30 selection',
    ],
    seo: {
      title: 'Sound & Vibration Testing | NC / RC Levels | DATUM',
      description:
        'Octave band sound testing and vibration analysis for occupied buildings. NC and RC curve documentation, source attribution by system shutdown, isolator deflection verified.',
    },
  },
  {
    slug: 'fume-hood-testing',
    title: 'Fume Hood Testing',
    shortTitle: 'Fume Hood Testing',
    summary:
      'ASHRAE 110 containment verification. Face velocity is not containment, and the difference matters.',
    icon: 'FlaskConical',
    lead: 'A fume hood at 100 fpm face velocity can still spill contaminant into the breathing zone of the person standing at it. Tracer gas containment testing is the only method that measures what actually matters, which is whether the person is protected.',
    standard: 'ASHRAE 110-2016 · ANSI/AIHA Z9.5 · NFPA 45',
    problem: [
      'The lab is being commissioned and the hoods have only ever had face velocity checked.',
      'An EHS audit requires as-installed ASHRAE 110 testing and none exists.',
      'Hoods pass at the sash height nobody works at.',
      'A researcher reported an odour at the hood face and there is no baseline to compare against.',
    ],
    method: [
      {
        name: 'Face velocity profile, gridded',
        body: 'Velocity measured on a defined grid across the sash opening at working height, with the average and the uniformity both reported. A hood averaging 100 fpm with a 40 fpm dead zone is a failed hood.',
      },
      {
        name: 'Tracer gas containment, AM and AI',
        body: 'Sulfur hexafluoride released at a controlled rate inside the hood while a mannequin-mounted detector samples the breathing zone. As-manufactured and as-installed ratings are reported separately, because the room the hood sits in changes the answer.',
      },
      {
        name: 'Cross-draft and room interaction',
        body: 'Room air velocities at the hood face, effect of door swings, adjacent traffic, and supply diffuser throw. Most containment failures in a properly built hood are caused by the room, not the hood.',
      },
      {
        name: 'Smoke visualization, recorded',
        body: 'Local and large-volume smoke challenge recorded on video, including sash movement and the reverse-flow condition at the airfoil.',
      },
    ],
    deliverables: [
      'Face velocity grid with average and uniformity',
      'ASHRAE 110 AI rating at stated sash height',
      'Cross-draft measurements',
      'Smoke visualization video',
      'Sash alarm and monitor verification',
      'Pass / fail against the stated control level',
    ],
    instruments: [
      { name: 'Tracer gas detector', model: 'MIRAN SapphIRe 205B', calibration: 'Annual, factory' },
      { name: 'SF6 ejector and mannequin', model: 'Per ASHRAE 110 Fig. 3', calibration: 'Flow verified per test' },
      { name: 'Thermal anemometer', model: 'TSI 9565-P', calibration: 'Annual, factory' },
      { name: 'Smoke generator', model: 'Regin Visual Smoke', calibration: 'N/A' },
    ],
    specs: [
      { label: 'Test standard', value: 'ASHRAE 110-2016' },
      { label: 'Typical control level', value: 'AI 0.05 ppm' },
      { label: 'Face velocity target', value: '80 to 100 fpm at 18 in sash' },
      { label: 'Velocity uniformity', value: '±20% of average' },
      { label: 'Tracer gas', value: 'Sulfur hexafluoride (SF6)' },
      { label: 'Test duration per hood', value: '45 to 90 minutes' },
    ],
    typicalFindings: [
      'Hood passes at 18 in sash, fails at the 28 in height researchers actually use',
      'Supply diffuser 3 ft from the hood face producing a 90 fpm cross-draft',
      'Sash alarm set point 25% below the velocity required for containment',
      'Airfoil bypass blocked by stored equipment inside the hood',
    ],
    seo: {
      title: 'Fume Hood Testing | ASHRAE 110 Containment | DATUM',
      description:
        'ASHRAE 110 fume hood containment testing with tracer gas. As-installed ratings, face velocity grids, cross-draft analysis, recorded smoke visualization.',
    },
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export const serviceTitle: Record<ServiceSlug, string> = services.reduce(
  (acc, s) => ({ ...acc, [s.slug]: s.shortTitle }),
  {} as Record<ServiceSlug, string>,
);
