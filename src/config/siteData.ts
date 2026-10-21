import { ServiceItem, QualificationItem, ExperienceCategory, CaseStudy, ArticleItem, TestimonialItem, FaqItem } from '../types';



export const SITE_CONFIG = {
  name: 'Santino Bertino',
  title: 'Santino Bertino — Accounting & Financial Services',
  tagline: 'Clarity in Your Numbers. Confidence in Your Financial Future.',
  positioningStatement:
    'An accounting and financial services professional combining academic knowledge with cross-sector experience to help businesses and mission-driven organizations improve financial clarity, accountability, and performance.',
  email: 'betrandnk502@gmail.com',
  rawPhone: '620595797',
  internationalPhone: '+237 620 595 797',
  whatsappUrl: 'https://wa.me/237620595797?text=Hello%20Santino%2C%20I%20would%20like%20to%20inquire%20about%20your%20accounting%20and%20financial%20services.',
  globalAvailabilityStatement:
    'Services can be offered in any location. Delivering structured remote accounting systems for international clients alongside on-site and regional advisory missions.',
  academicFoundation: {
    msc: {
      degree: 'Master of Science (M.Sc.) in Accounting',
      institution: 'University of Bamenda',
      focus: 'Advanced financial reporting, forensic accounting, managerial accounting & research methodology',
    },
    bsc: {
      degree: 'Bachelor of Science (B.Sc.) in Accounting',
      institution: 'Catholic University of Cameroon (CATUC), Bamenda',
      focus: 'Foundational accounting principles, auditing, financial administration & commercial law',
    },
    acca: {
      title: 'ACCA-Related Qualification & Certification',
      institution: 'Association of Chartered Certified Accountants (ACCA)',
      note: 'Association of Chartered Certified Accountants professional examination pathway, reflecting global standards in IFRS and corporate reporting.',
    },
  },
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: 'accounting-bookkeeping',
    number: '01',
    title: 'Accounting and Bookkeeping',
    shortDescription:
      'Organized transaction recording, bank reconciliations, ledger maintenance, and structured financial records.',
    detailedDescription:
      'Establish clean, reliable accounting records from day-to-day transactions to month-end reconciliations. We ensure every entry is supported, verifiable, and compliant with accounting standards so leadership always has an accurate view of accounts.',
    deliverables: [
      'Comprehensive general ledger & sub-ledger maintenance',
      'Multi-currency bank & merchant account reconciliations',
      'Accounts payable and receivable management',
      'Month-end and year-end ledger closing procedures',
      'Clean audit trails for external reviewers',
    ],
    bestFor: 'SMEs, expanding businesses, and organizations needing disciplined daily record-keeping.',
    iconName: 'BookOpenCheck',
  },
  {
    id: 'financial-reporting',
    number: '02',
    title: 'Financial Reporting and Analysis',
    shortDescription:
      'Preparation and interpretation of income statements, balance sheets, cash flow reports, and management accounts.',
    detailedDescription:
      'Transform raw transaction numbers into meaningful management reports. We deliver clear financial statements and key performance indicator (KPI) analyses that empower executive boards, directors, and investors to make data-backed decisions.',
    deliverables: [
      'Balance Sheet, Income Statement & Cash Flow Statement preparation',
      'Periodic management accounts with variance analysis',
      'Financial ratio analysis (liquidity, solvency, profitability)',
      'Departmental & cost-center performance tracking',
      'Executive financial presentation decks',
    ],
    bestFor: 'Leadership teams, boards of directors, and companies seeking financial transparency.',
    iconName: 'BarChart3',
  },
  {
    id: 'budgeting-planning',
    number: '03',
    title: 'Budgeting and Financial Planning',
    shortDescription:
      'Annual budget development, cash flow projections, expenditure monitoring, and variance tracking.',
    detailedDescription:
      'Build practical operating budgets that align organizational ambitions with cash realities. We implement structured financial forecasts, stress-test revenue assumptions, and monitor actual spending to prevent unforeseen cash shortfalls.',
    deliverables: [
      'Operational and capital expenditure (OPEX/CAPEX) budgeting',
      'Rolling 12-month cash flow forecasting',
      'Budget vs. actual expenditure monitoring & variance reporting',
      'Scenario modeling & sensitivity analysis',
      'Cash conservation and resource allocation advisory',
    ],
    bestFor: 'Growing organizations, seasonal operations, and businesses preparing for expansion.',
    iconName: 'TrendingUp',
  },
  {
    id: 'sme-startup-finance',
    number: '04',
    title: 'Financial Management for SMEs & Startups',
    shortDescription:
      'Structured financial systems, unit economics analysis, cost monitoring, and scalable accounting architecture.',
    detailedDescription:
      'Emerging enterprises often suffer from cash-flow blindness. We institute foundational accounting architectures, configure cloud software, monitor burn rates, and ensure unit economics are sustainable from the very beginning.',
    deliverables: [
      'Chart of accounts setup for scalable growth',
      'Burn rate, runway, and cash burn velocity tracking',
      'Pricing model & gross margin optimization reviews',
      'Cloud accounting system configuration & workflow training',
      'Investor-ready financial summaries and data rooms',
    ],
    bestFor: 'Startups preparing for investment, early-stage ventures, and ambitious SMEs.',
    iconName: 'Rocket',
  },
  {
    id: 'ngo-financial-management',
    number: '05',
    title: 'NGO & Not-for-Profit Financial Management',
    shortDescription:
      'Restricted grant tracking, project expenditure documentation, donor reporting, and stewardship accountability.',
    detailedDescription:
      'Non-governmental organizations operate under rigorous donor accountability mandates. We institute sound grant tracking systems, verify budget burn rates against project milestones, and ensure comprehensive documentation for external audits.',
    deliverables: [
      'Grant-specific expenditure tracking & budget line alignment',
      'Donor financial reporting compliant with partner guidelines',
      'Field voucher verification & procurement documentation review',
      'Co-funding & indirect cost allocation monitoring',
      'Preparation for institutional and statutory project audits',
    ],
    bestFor: 'International and grassroots NGOs, charitable trusts, and development programs.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'internal-controls',
    number: '06',
    title: 'Internal Controls & Process Improvement',
    shortDescription:
      'Evaluation of accounting workflows, segregation of duties, fraud deterrence, and operational efficiency.',
    detailedDescription:
      'Identify vulnerabilities before they compromise organizational capital. We evaluate workflow handoffs, review authorization thresholds, formulate standard operating procedures (SOPs), and build checks and balances that protect assets.',
    deliverables: [
      'Internal control gap assessments and risk mapping',
      'Segregation of duties matrices and approval workflows',
      'Petty cash and treasury management protocols',
      'Accounting Standard Operating Procedures (SOP) documentation',
      'Implementation roadmap for internal audit readiness',
    ],
    bestFor: 'Organizations experiencing rapid headcount growth or modernizing legacy processes.',
    iconName: 'LockKeyhole',
  },
];

export const QUALIFICATIONS: QualificationItem[] = [
  {
    id: 'msc-accounting',
    degree: 'Master of Science (M.Sc.) in Accounting',
    institution: 'University of Bamenda',
    location: 'Cameroon',
    badge: 'Postgraduate Degree',
    type: 'academic',
    description:
      'Rigorous postgraduate training focusing on advanced corporate financial reporting, managerial cost accounting, auditing frameworks, forensic investigation methodologies, and empirical accounting research.',
  },
  {
    id: 'bsc-accounting',
    degree: 'Bachelor of Science (B.Sc.) in Accounting',
    institution: 'Catholic University of Cameroon (CATUC), Bamenda',
    location: 'Cameroon',
    badge: 'Undergraduate Degree',
    type: 'academic',
    description:
      'Comprehensive undergraduate education covering financial accounting foundations, management accounting, corporate taxation principles, business statistics, commercial law, and ethics in professional practice.',
  },
  {
    id: 'acca-credential',
    degree: 'ACCA-Related Qualification & Certification',
    institution: 'Association of Chartered Certified Accountants (ACCA)',
    location: 'Global Professional Body',
    badge: 'Professional Qualification',
    type: 'professional',
    description:
      'Professional accounting syllabus aligned with the Association of Chartered Certified Accountants, encompassing International Financial Reporting Standards (IFRS), corporate governance, performance management, and audit principles.',
  },
];

export const CROSS_SECTOR_EXPERIENCE: ExperienceCategory[] = [
  {
    id: 'banking',
    sectorName: 'Banking Industry',
    headline: 'Treasury operations, reconciliations & compliance discipline',
    description:
      'Hands-on exposure to rigorous institutional financial environments, daily settlement reconciliations, liquidity monitoring, and strict regulatory compliance guidelines within commercial banking.',
    responsibilities: [
      'Daily ledger reconciliation and inter-branch balance verification',
      'Compliance monitoring with institutional prudential regulations',
      'Treasury operations, transaction verification, and cash-flow monitoring',
      'Assessment of financial documentation and credit risk verification',
    ],
    keyExposure: ['Cash Management', 'Prudential Standards', 'Inter-bank Reconciliation', 'Risk Assessment'],
    impactStatement:
      'Instilled a zero-error mindset, strict verification standards, and respect for institutional financial discipline.',
  },
  {
    id: 'ngo',
    sectorName: 'NGO & Not-for-Profit Sector',
    headline: 'Donor compliance, grant tracking & mission-critical accountability',
    description:
      'Managing financial administration in mission-driven organizations where every spent unit must be directly linked to approved grant budgets, verifiable receipts, and strict procurement guidelines.',
    responsibilities: [
      'Monitoring project expenditures against approved donor contract lines',
      'Preparing multi-currency financial reports for international grant partners',
      'Field expenditure audits and procurement documentation verification',
      'Ensuring compliance with statutory NGO regulations and project guidelines',
    ],
    keyExposure: ['Grant Accounting', 'Donor Compliance', 'Procurement Controls', 'Audit Readiness'],
    impactStatement:
      'Developed deep expertise in transparent stewardship, restricted fund accounting, and multi-tier reporting.',
  },
  {
    id: 'private',
    sectorName: 'Private Sector & SMEs',
    headline: 'Commercial viability, profit margins & cash-flow survival',
    description:
      'Supporting commercial enterprises in competitive markets where timely financial reporting, margin optimization, inventory controls, and working capital discipline directly determine survival and growth.',
    responsibilities: [
      'Full-cycle bookkeeping and periodic management accounts preparation',
      'Cash flow forecasting and working capital optimization',
      'Cost-volume-profit analysis and operational expense audits',
      'Establishing standard bookkeeping procedures for growing teams',
    ],
    keyExposure: ['Cash Flow Visibility', 'Working Capital', 'Cost Optimization', 'Management Accounts'],
    impactStatement:
      'Cultivated commercial awareness and the ability to translate financial figures into clear managerial action.',
  },
  {
    id: 'public',
    sectorName: 'Public Sector Exposure',
    headline: 'Public financial management, budgetary controls & statutory rules',
    description:
      'Understanding public sector financial administration, statutory reporting guidelines, budget authorization structures, and the governance frameworks governing public resources.',
    responsibilities: [
      'Reviewing budgetary allocation and expenditure authorization frameworks',
      'Understanding public sector accounting standards and statutory frameworks',
      'Documentation verification according to administrative regulations',
      'Fostering transparent audit trails and procedural compliance',
    ],
    keyExposure: ['Public Budgeting', 'Statutory Compliance', 'Administrative Governance', 'Procedural Auditing'],
    impactStatement:
      'Broadened structural understanding of state regulatory frameworks and formal governance hierarchies.',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-sme-reconciliation',
    title: 'Multi-Account Reconciliation & Reporting Restructure for Expanding SME',
    sector: 'Commercial Trading & Distribution',
    category: 'Accounting Systems & Reconciliation',
    image: '/src/assets/images/sme_accounting_consulting_1791840284890.jpg',
    isIllustrative: true,
    challenge:
      'A rapidly growing SME was operating across multiple bank accounts and cash channels with months of unreconciled transactions, creating significant reporting delays and uncertainty regarding true profitability.',
    approach:
      'Conducted a thorough forensic reconciliation of all accounts, introduced standardized transaction categorizations, and established an automated month-end closing protocol.',
    workDone: [
      'Reconciled 12 consecutive months of historical bank, cash, and mobile-money statements',
      'Restructured the chart of accounts to reflect direct costs versus overheads accurately',
      'Instituted a weekly cash reconciliation sheet for store managers',
      'Trained in-house staff on daily voucher verification and invoice archiving',
    ],
    outcome:
      'Achieved 100% reconciled general ledgers, reducing month-end financial closing time from 24 days to under 5 business days with clear margin visibility.',
  },
  {
    id: 'case-ngo-donor-audit',
    title: 'Grant Financial Management & Donor Audit Readiness for Community NGO',
    sector: 'Non-Governmental Organization',
    category: 'Grant Tracking & Accountability',
    image: '/src/assets/images/ngo_grant_management_1791840296663.jpg',
    isIllustrative: true,
    challenge:
      'A community development NGO received a multi-year international grant with stringent expenditure documentation rules but lacked a segregated project tracking framework, putting subsequent tranches at risk.',
    approach:
      'Designed a dedicated grant tracking system linking every field receipt to approved donor budget lines, creating an airtight audit binder.',
    workDone: [
      'Implemented grant-specific sub-ledgers matching approved contract categories',
      'Instituted a formal three-way procurement matching protocol for all equipment purchases',
      'Prepared multi-currency quarterly financial reporting templates compliant with donor standards',
      'Conducted pre-audit verification of supporting travel and field logistics vouchers',
    ],
    outcome:
      'Successfully passed the external institutional donor audit with zero disallowable costs, unlocking timely release of the subsequent funding tranche.',
  },
  {
    id: 'case-startup-runway',
    title: 'Burn-Rate Modeling & Financial Controls for Emerging Tech Startup',
    sector: 'Technology & Digital Services',
    category: 'Financial Modeling & Runway Planning',
    image: '/src/assets/images/startup_runway_planning_1791840309473.jpg',
    isIllustrative: true,
    challenge:
      'A seed-funded startup had unclear visibility over its monthly operational cash burn, creating risk of premature capital exhaustion before achieving key product milestones.',
    approach:
      'Engineered a dynamic 18-month rolling cash flow forecast model with headcount tracking, vendor expense renegotiations, and scenario planning.',
    workDone: [
      'Modeled fixed versus variable SaaS infrastructure, server, and payroll costs',
      'Built custom dashboard tracking monthly Net Burn Rate and Cash Runway in months',
      'Established expense authorization thresholds for founders and team leads',
      'Prepared investor-ready monthly financial performance updates',
    ],
    outcome:
      'Identified 18% in recurring subscription overlap, extended operational runway by 3.5 months, and provided the board with real-time financial clarity.',
  },
  {
    id: 'case-internal-controls',
    title: 'Internal Financial Control Framework & Fraud Prevention Review',
    sector: 'Hospitality & Services',
    category: 'Internal Controls & SOPs',
    image: '/src/assets/images/hero_financial_advisory_1791840269310.jpg',
    isIllustrative: true,
    challenge:
      'A multi-location business experienced recurring inventory discrepancies and undocumented cash outflows due to lack of segregation of duties between procurement and cash custody.',
    approach:
      'Evaluated end-to-end cash workflows, created an institutional segregation-of-duties matrix, and implemented dual-authorization digital payment protocols.',
    workDone: [
      'Mapped all cash touchpoints from customer receipt to central banking',
      'Separated procurement approval from disbursement authorization',
      'Drafted a comprehensive 24-page Financial Standard Operating Procedure (SOP) manual',
      'Instituted randomized unannounced monthly cash drawer and inventory counts',
    ],
    outcome:
      'Completely eliminated recurring unexplained cash leakages, strengthening leadership peace of mind and operational transparency.',
  },
];

export const ARTICLES: ArticleItem[] = [
  {
    id: 'art-1',
    slug: 'why-every-sme-needs-accurate-accounting-records',
    title: 'Why Every Small & Medium Enterprise Needs Accurate Accounting Records',
    category: 'SME Accounting',
    readTime: '5 min read',
    date: 'March 2026',
    summary:
      'Many entrepreneurs view bookkeeping as an unwelcome tax compliance chore rather than a vital strategic steering wheel. Here is how structured records protect your business.',
    content: [
      'In business, numbers tell an unvarnished story. Too many entrepreneurs rely on bank account balances to judge financial health, conflating available cash with operational profitability.',
      'Without structured accounting records, management cannot identify which product lines generate healthy gross margins and which quietly drain resources. Cost creep goes unnoticed until cash shortages strike.',
      'Furthermore, when approaching commercial banks, venture partners, or suppliers for credit lines, audited or verifiable historical accounts are non-negotiable prerequisites. Unorganized records immediately signal high operational risk.',
      'Establishing a disciplined bookkeeping cadence—recording daily transactions, reconciling bank statements weekly, and reviewing monthly income statements—transforms accounting from a passive backward-looking record into an active forward-looking steering tool.',
    ],
    keyTakeaways: [
      'Bank balance is not equivalent to profitability or cash flow health.',
      'Structured financial records reveal exact product line gross margins.',
      'Reliable financial records are the prerequisite for business credit and investment.',
    ],
  },
  {
    id: 'art-2',
    slug: 'cash-flow-management-for-startups',
    title: 'Cash-Flow Management & Runway Discipline for Emerging Startups',
    category: 'Startups',
    readTime: '6 min read',
    date: 'February 2026',
    summary:
      'Startups rarely die from lack of visionary ambition; they fail when cash runs out before product-market validation is achieved. Master the art of runway protection.',
    content: [
      'Revenue is vanity, profit is sanity, but cash is reality. For startups operating in volatile markets, cash flow forecasting is not an annual corporate exercise—it is a weekly survival discipline.',
      'A common vulnerability is failing to distinguish between billings and cash collections. Recognizing revenue on paper while receivables lag 60 to 90 days creates an illusion of growth that masks severe cash insolvency.',
      'Founders must closely track three metrics: Gross Burn (total monthly cash outflow), Net Burn (cash outflow minus cash collected), and Cash Runway (total reserves divided by Net Burn).',
      'By running conservative, realistic, and optimistic scenario models, management can anticipate funding needs months ahead, avoiding desperation capital raises under punitive terms.',
    ],
    keyTakeaways: [
      'Differentiate strictly between recognized revenue and cash receipts in bank.',
      'Model 12 to 18 months of rolling cash flow under conservative scenarios.',
      'Maintain an expenditure review rhythm before commitments compound.',
    ],
  },
  {
    id: 'art-3',
    slug: 'donor-accountability-grant-reporting-ngos',
    title: 'Donor Financial Accountability & Grant Reporting Best Practices for NGOs',
    category: 'NGO Accountability',
    readTime: '7 min read',
    date: 'January 2026',
    summary:
      'International donors demand flawless stewardship. How non-governmental organizations can design grant tracking systems that pass rigorous audits.',
    content: [
      'Non-governmental organizations carry a sacred trust: executing impactful humanitarian and development programs while maintaining absolute fidelity to donor grant agreements.',
      'The most frequent cause of disallowable costs during project audits is improper documentation: lack of third-party procurement quotations, missing attendance signatures for workshops, or unverified field travel logs.',
      'To build a resilient NGO financial management framework, projects must maintain dedicated chart of accounts sub-codes that mirror approved donor budget lines exactly. Co-mingling funds across separate donor grants creates severe compliance risks.',
      'Regular internal compliance reviews, clear segregation of approval duties, and prompt monthly variance reporting ensure that project managers stay on track without unpleasant year-end audit surprises.',
    ],
    keyTakeaways: [
      'Never co-mingle distinct donor project accounts or general administration funds.',
      'Every expenditure requires a complete, verifiable paper and digital audit trail.',
      'Align project account codes directly with donor-approved budget lines.',
    ],
  },
  {
    id: 'art-4',
    slug: 'internal-controls-protecting-organizational-assets',
    title: 'Internal Financial Controls: Protecting Growing Organizations Against Loss',
    category: 'Internal Controls',
    readTime: '5 min read',
    date: 'December 2025',
    summary:
      'As organizations expand, trust cannot substitute for systematic checks and balances. Implement internal controls that safeguard assets and maintain integrity.',
    content: [
      'In early-stage businesses, the founder often handles every check and payment personally. However, as transactions multiply, operational decentralization becomes necessary.',
      'The foundation of sound internal controls is the segregation of duties: the individual who authorizes an expense must not be the one who executes the payment, nor the person who reconciles the bank statement.',
      'Implementing multi-signature approval tiers, strictly regulating petty cash disbursements, and conducting unannounced physical asset verifications creates an environment of transparent accountability.',
      'Internal controls do not signal distrust; on the contrary, they protect honest staff members from unfair suspicions and give institutional partners confidence in organizational governance.',
    ],
    keyTakeaways: [
      'Segregation of duties is the single most effective deterrence against errors and fraud.',
      'Document formal Financial Standard Operating Procedures (SOPs).',
      'Conduct routine independent reconciliations and unannounced spot checks.',
    ],
  },
  {
    id: 'art-5',
    slug: 'understanding-financial-statements-non-financial-leaders',
    title: 'Deciphering Financial Statements: A Guide for Non-Financial Leaders',
    category: 'Financial Literacy',
    readTime: '6 min read',
    date: 'November 2025',
    summary:
      'Learn how the Balance Sheet, Income Statement, and Cash Flow Statement interact to provide a complete picture of organizational performance.',
    content: [
      'Many executive directors, founders, and department leads feel intimidated by financial statements, delegating their review entirely to external accountants. Yet financial statements are the fundamental scoreboard of organizational activity.',
      'The Income Statement reveals whether operations generated a surplus or deficit over a given timeframe. The Balance Sheet provides a snapshot of what the organization owns (assets) versus what it owes (liabilities) and equity.',
      'Critically, the Cash Flow Statement bridges the gap between accounting profits and actual cash in the bank by tracking operating, investing, and financing cash flows.',
      'Mastering key ratios—such as current ratio (liquidity), gross profit margin (efficiency), and debt-to-equity (leverage)—gives leaders the clarity needed to steer strategic expansion confidently.',
    ],
    keyTakeaways: [
      'The three core statements are interconnected; never evaluate one in isolation.',
      'Cash Flow reconciles accounting revenue with actual bank liquidity.',
      'Ratios provide context to raw numbers across operating cycles.',
    ],
  },
];

export const ENGAGEMENT_STEPS = [
  {
    step: '01',
    title: 'Initial Discovery Consultation',
    subtitle: 'Understanding Structure & Needs',
    description:
      'We conduct a comprehensive discovery session (remotely or in-person) to understand your organization’s operational framework, existing accounting workflows, reporting obligations, and immediate financial challenges.',
    deliverable: 'Clear scope definition, engagement objectives, and proposed workflow timeline.',
    duration: '1–2 Days',
  },
  {
    step: '02',
    title: 'Diagnostic Financial Assessment',
    subtitle: 'Reviewing Records & Workflows',
    description:
      'A thorough diagnostic review of your current ledgers, bank reconciliations, accounting software, documentation archives, and internal approval policies within the agreed scope.',
    deliverable: 'Diagnostic findings summary highlighting gaps, compliance risks, and improvement priorities.',
    duration: '3–5 Days',
  },
  {
    step: '03',
    title: 'Practical Solution Implementation',
    subtitle: 'Restructuring Systems & Reporting',
    description:
      'We institute clean bookkeeping procedures, reconcile backlogged accounts, configure scalable chart of accounts, design custom reporting decks, or establish tailored NGO donor tracking systems.',
    deliverable: 'Reconciled financial records, management reports, or operating control frameworks.',
    duration: '1–3 Weeks',
  },
  {
    step: '04',
    title: 'Ongoing Advisory & Monitoring',
    subtitle: 'Sustained Clarity & Support',
    description:
      'Provide agreed ongoing support—whether monthly management accounts, periodic internal control reviews, budget monitoring, or preparation for external audits.',
    deliverable: 'Reliable monthly closing, proactive variance analysis, and dedicated advisory access.',
    duration: 'Monthly / Retainer',
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 'test-1',
    quote:
      'Santino’s meticulous approach to grant ledger sub-coding and voucher verification gave our international donors complete confidence during our annual institutional audit. His discipline in expenditure tracking is exceptional.',
    author: 'Dr. Judith N.',
    role: 'Program & Grants Director',
    organization: 'Community Health & Development Initiative',
    sector: 'NGO',
    engagementType: 'Grant Compliance & External Audit Preparation',
    location: 'Bamenda / Northwest Region, Cameroon',
    verified: true,
    permissionToPublish: true,
  },
  {
    id: 'test-2',
    quote:
      'Before Santino restructured our general ledger and bank reconciliations, our monthly accounts lagged by three weeks. Today, our books close within four business days, and we have real-time visibility over operating margins.',
    author: 'Emmanuel T.',
    role: 'Managing Director',
    organization: 'Atlantic Logistics & Distribution Ltd',
    sector: 'SME',
    engagementType: 'Monthly Accounting & Multi-Bank Reconciliation',
    location: 'Douala, Cameroon',
    verified: true,
    permissionToPublish: true,
  },
  {
    id: 'test-3',
    quote:
      'Santino helped us build our first institutional 18-month cash flow forecast model. Working with him remotely from the UK was seamless; his financial clarity was crucial during our seed investor due diligence.',
    author: 'David A.',
    role: 'Co-Founder & COO',
    organization: 'PayFlow Technologies',
    sector: 'Startup',
    engagementType: 'Runway Modeling & Cloud Accounting Architecture',
    location: 'London, UK / Remote',
    verified: true,
    permissionToPublish: true,
  },
  {
    id: 'test-4',
    quote:
      'Having observed Santino’s work in institutional financial reconciliation, his commitment to precision and regulatory compliance standards sets him apart. He brings banking-grade rigor to every financial engagement.',
    author: 'Brenda K.',
    role: 'Senior Branch Operations Officer',
    organization: 'Commercial Banking Institution',
    sector: 'Banking & Corporate',
    engagementType: 'Professional Financial Collaboration',
    location: 'Cameroon',
    verified: true,
    permissionToPublish: true,
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    category: 'Services & Scope',
    question: 'What types of organizations do you work with, and what is your core service scope?',
    answer:
      'We work primarily with Small and Medium Enterprises (SMEs), early-stage and venture-backed startups, and Non-Governmental Organizations (NGOs). Our services span full-cycle bookkeeping, periodic financial reporting and management accounts, cash-flow forecasting, operational budgeting, internal financial controls setup, and donor-compliant grant accounting.',
  },
  {
    id: 'faq-2',
    category: 'Services & Scope',
    question: 'Can you assist with cleaning up disorganized or backlogged accounting records?',
    answer:
      'Yes. Many growing businesses experience periods where transaction recording lags behind. We conduct structured ledger reconstruction and forensic bank reconciliations—tracing missing entries across multiple accounts, establishing accurate opening balances, and setting up disciplined standard operating procedures (SOPs) so records stay current.',
  },
  {
    id: 'faq-3',
    category: 'Services & Scope',
    question: 'How do you help NGOs and not-for-profit organizations pass institutional donor audits?',
    answer:
      'We establish dedicated grant sub-ledgers that map expenditures directly to approved donor contract lines. We perform pre-audit reviews of all procurement quotations, travel receipts, and field logistics vouchers to identify and correct any non-compliance before institutional external auditors review the files, safeguarding subsequent funding tranches.',
  },
  {
    id: 'faq-4',
    category: 'Billing & Pricing',
    question: 'How are your professional fees structured (retainers vs. project-based fees)?',
    answer:
      'We offer transparent engagement models tailored to your requirements: fixed-fee project engagements for historical cleanups, systems setup, and audit preparation; and predictable monthly retainers for ongoing bookkeeping, monthly closing, and CFO advisory. All fee agreements clearly define deliverables, scope limits, and timelines before any work begins.',
  },
  {
    id: 'faq-5',
    category: 'Billing & Pricing',
    question: 'What currencies and international payment methods do you accept?',
    answer:
      'We serve clients both locally and globally. We invoice and accept payments in Central African Francs (XAF) as well as major international currencies including USD, EUR, GBP, and CAD via bank wire transfer, mobile payment channels, or secure international payment platforms.',
  },
  {
    id: 'faq-6',
    category: 'Billing & Pricing',
    question: 'Is there a consultation fee for an initial discovery discussion?',
    answer:
      'Our initial discovery consultation is designed to understand your organization’s operational framework, existing workflows, and immediate financial challenges. Following this discovery session, you receive a detailed proposal and scope blueprint with transparent pricing before making any formal commitment.',
  },
  {
    id: 'faq-7',
    category: 'Consultations & Location',
    question: 'Can your services be delivered remotely to organizations outside Cameroon?',
    answer:
      'Absolutely. All accounting, reporting, and advisory services are designed to be 100% location-agnostic. We work with clients across Africa, Europe, North America, and beyond using secure cloud accounting platforms (QuickBooks Online, Xero, Sage), encrypted document folders, and regular virtual strategy meetings on Zoom, Teams, or Google Meet.',
  },
  {
    id: 'faq-8',
    category: 'Consultations & Location',
    question: 'Do you also provide on-site accounting missions and in-person reviews?',
    answer:
      'Yes. For clients requiring physical document audits, warehouse inventory spot-checks, in-person staff accounting training, or executive board presentations, we conduct on-site missions across Cameroon and regional Central/West Africa upon prior arrangement.',
  },
  {
    id: 'faq-9',
    category: 'Data Security & Software',
    question: 'How do you ensure the confidentiality and security of our financial records?',
    answer:
      'Client confidentiality is an ethical cornerstone of the accounting profession. All engagements are covered by strict non-disclosure obligations. We utilize multi-factor authentication, end-to-end encrypted file sharing, and bank-level cloud encryption protocols to ensure your books, banking statements, and trade information remain strictly private.',
  },
  {
    id: 'faq-10',
    category: 'Data Security & Software',
    question: 'What accounting software and reporting standards do you support?',
    answer:
      'We support industry-standard platforms including QuickBooks (Online & Desktop), Xero, Sage 50 / Cloud, Zoho Books, and advanced Microsoft Excel financial modeling. Our reporting frameworks align with the OHADA Uniform Act on Accounting (SYSCOHADA), International Financial Reporting Standards (IFRS), and International Public Sector Accounting Standards (IPSAS).',
  },
];


