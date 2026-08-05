export const pledge = {
  eyebrow: 'The position',
  title: 'Independence is the product.',
  lead: 'Everything else DATUM sells (the instruments, the certifications, the twenty years) is only worth something if the number in the report is the number we measured. These are the three commitments that make that true, and what each one costs us.',
  commitments: [
    {
      index: '01',
      title: 'We do not install, sell, or service equipment.',
      body: 'No installation division. No equipment representation. No service contracts on systems we test. There is no second revenue line that a finding could threaten, and no manufacturer whose product we would rather not write up.',
      cost: 'It costs us the eighty percent of this industry’s revenue that comes from installing things.',
    },
    {
      index: '02',
      title: 'We do not subcontract to the mechanical contractor on a project we are testing.',
      body: 'The balancing agency is very often a sub to the mechanical contractor. That makes the contractor our client, and the contractor’s installation the thing we are grading. We will take TAB scope from a general contractor or a construction manager. We will not take it from the party whose work we are measuring.',
      cost: 'It costs us roughly a third of the projects we are invited to bid.',
    },
    {
      index: '03',
      title: 'Our report goes to the owner, unedited, before anyone else sees it.',
      body: 'Whoever holds our contract gets the report first, in full, including the deficiencies. Nobody gets a preview to negotiate the wording, and nobody has ever had a finding removed. Corrections of fact, yes. We get things wrong and we fix them in writing. Softening, no.',
      cost: 'It costs us repeat work from contractors who expected a draft.',
    },
  ],
  structural: {
    title: 'Why a promise is not enough',
    body: [
      'Any firm can say it is independent. Ours is checked by people other than us.',
      'AABC membership requires that a member agency perform no installation, sales, or service work, and forfeits membership if the agency does, or if a firm that owns part of it does. NEBB certification puts the firm’s name, not an individual’s, on the report, and NEBB can be called to arbitrate a disputed reading at the firm’s expense.',
      'Neither of those makes us honest. They make dishonesty expensive and visible, which is the most any structure can do.',
    ],
  },
  conflicts: {
    title: 'What we disclose, every time',
    items: [
      'Any prior work for the mechanical contractor, design engineer, or general contractor on the project, within five years.',
      'Any prior work for the owner that could be read as an ongoing relationship worth protecting.',
      'Any financial relationship with a manufacturer whose equipment appears in the scope.',
      'Any instrument in our inventory that is outside its calibration interval. It does not go in the field, and if it did, the report says so.',
    ],
  },
  refusals: {
    title: 'Work we have turned down',
    body: 'Not a boast. A description of where the line actually is, because a policy nobody has ever paid for is not a policy.',
    items: [
      {
        year: '2019',
        text: 'A $310,000 TAB and Cx package on a hospital expansion, offered as a subcontract to the mechanical contractor. We proposed the same scope contracted directly to the health system. The owner declined; the contractor hired another agency.',
      },
      {
        year: '2021',
        text: 'A request to re-issue a balance report with the deficiency log moved to an appendix and the executive summary reworded. We re-issued nothing. The log stayed on page two.',
      },
      {
        year: '2022',
        text: 'A standing service agreement worth $85,000 a year on air handlers in a portfolio we commission. Servicing the equipment we test is exactly the arrangement we tell owners not to accept.',
      },
      {
        year: '2024',
        text: 'A commissioning scope where the CxA would report to the design-build contractor and the owner would receive a summary. We offered the same fee reporting to the owner. They went elsewhere.',
      },
    ],
  },
  question: {
    title: 'The question to ask any third party',
    body: 'If you take one thing from this page, take these four questions. Ask them of us, and of whoever else is bidding.',
    items: [
      'Who holds your contract, and who does your report go to first?',
      'Does your firm, or any firm that owns part of it, install or service mechanical equipment?',
      'Has a finding ever been removed from one of your reports at a client’s request?',
      'Can I see a report you issued where the findings were unflattering to the party who hired you?',
    ],
  },
};
