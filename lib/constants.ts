// =============================================================================
// XpressFinserve - Site Content Constants
// Source of truth: https://www.xpressfinserve.com/ (homepage)
// All content here is derived from the live website. INR currency throughout.
// =============================================================================

// -----------------------------------------------------------------------------
// Lenders — ONE card per unique institution (deduplicated).
// `offers` shows what loan types each lender supports (per the website).
// `logoUrl` is optional: drop a logo file in /public/lenders/<id>.svg|png
// then set logoUrl: '/lenders/<id>.svg' here — the card auto-swaps from
// initials to real logo. The 'accent' rotates a soft pastel palette for
// visual variety; it is NOT a claim about each brand's actual colour.
// -----------------------------------------------------------------------------

export type LoanOffer = 'personal' | 'business'
export type LenderType = 'bank' | 'nbfc'
export type LenderAccent = 'blue' | 'amber' | 'emerald' | 'rose' | 'violet'

export interface Lender {
  id: string
  name: string
  initials: string
  type: LenderType
  offers: LoanOffer[]
  accent: LenderAccent
  logoUrl?: string
}

export const ALL_LENDERS: Lender[] = [
  // ---- Banks (5) ----
  { id: 'hdfc',      name: 'HDFC Bank',         initials: 'H',     type: 'bank', offers: ['personal', 'business'], accent: 'blue',    logoUrl: '/HDFC.jpg' },
  { id: 'icici',     name: 'ICICI Bank',        initials: 'IC',    type: 'bank', offers: ['personal', 'business'], accent: 'amber',   logoUrl: '/ICIC.jpg' },
  { id: 'axis',      name: 'Axis Bank',         initials: 'AX',    type: 'bank', offers: ['personal', 'business'], accent: 'rose',    logoUrl: '/AXIS.jpg' },
  { id: 'indusind',  name: 'IndusInd Bank',     initials: 'IN',    type: 'bank', offers: ['personal'],             accent: 'violet',  logoUrl: '/IndusInd.jpg' },
  { id: 'idfc',      name: 'IDFC FIRST Bank',   initials: 'ID',    type: 'bank', offers: ['personal', 'business'], accent: 'emerald', logoUrl: '/IDFC.jpg' },

  // ---- NBFCs (9) ----
  { id: 'tata',       name: 'TATA Capital',        initials: 'TC',  type: 'nbfc', offers: ['personal', 'business'], accent: 'blue',    logoUrl: '/TataCapital.jpg' },
  { id: 'lnt',        name: 'L&T Finance',         initials: 'LT',  type: 'nbfc', offers: ['personal'],             accent: 'amber',   logoUrl: '/L&T.jpg' },
  { id: 'bajaj',      name: 'Bajaj Finance',       initials: 'BJ',  type: 'nbfc', offers: ['personal', 'business'], accent: 'rose',    logoUrl: '/Bajaj.jpg' },
  { id: 'piramal',    name: 'Piramal Finance',     initials: 'PR',  type: 'nbfc', offers: ['personal', 'business'], accent: 'emerald', logoUrl: '/Piramal.jpg' },
  { id: 'incred',     name: 'InCred Finance',      initials: 'INC', type: 'nbfc', offers: ['personal', 'business'], accent: 'blue',    logoUrl: '/IncredFinance.jpg' },
  { id: 'finnable',   name: 'Finnable',            initials: 'FN',  type: 'nbfc', offers: ['personal'],             accent: 'amber',   logoUrl: '/Finnable.png' },
  { id: 'poonawalla', name: 'Poonawalla Fincorp',  initials: 'PN',  type: 'nbfc', offers: ['personal', 'business'], accent: 'rose',    logoUrl: '/Ponnawalla.jpg' },
  { id: 'flexiloans', name: 'FlexiLoans',          initials: 'FL',  type: 'nbfc', offers: ['business'],             accent: 'violet',  logoUrl: '/Flexiloans.png' },
  { id: 'lendingkart',name: 'Lendingkart',         initials: 'LK',  type: 'nbfc', offers: ['business'],             accent: 'emerald', logoUrl: '/LendingKart.png' },
]

// Derived helpers — use these in components instead of filtering inline
export const ALL_BANKS = ALL_LENDERS.filter((l) => l.type === 'bank')
export const ALL_NBFCS = ALL_LENDERS.filter((l) => l.type === 'nbfc')
export const PERSONAL_LOAN_LENDERS = ALL_LENDERS.filter((l) => l.offers.includes('personal'))
export const BUSINESS_LOAN_LENDERS = ALL_LENDERS.filter((l) => l.offers.includes('business'))

// -----------------------------------------------------------------------------
// Instant Loans — direct partner application links.
//
// These are co-branded application URLs where the user lands directly on the
// lender's portal with XpressFinserve's partner / DSA tracking codes embedded.
// The codes are needed for attribution / commission tracking and must NOT be
// stripped. Each link opens in a new tab so the user does not lose this site.
// -----------------------------------------------------------------------------

export interface InstantLoanPartner {
  id: string
  lenderName: string
  productName: string
  description: string
  logoUrl: string
  applyUrl: string
}

export const INSTANT_LOAN_PARTNERS: InstantLoanPartner[] = [
  {
    id: 'poonawalla-instant',
    lenderName: 'Poonawalla Fincorp',
    productName: 'Instant Pocket Loan',
    description:
      'Quick personal loan with instant decision — apply directly on Poonawalla’s portal with our partner code pre-filled.',
    logoUrl: '/Ponnawalla.jpg',
    applyUrl:
      'https://instant-pocket-loan.poonawallafincorp.com/?redirectto=primepl&utm_DSA_Code=PTN00405&UTM_Partner_AgentCode=pavisekar134@gmail.com&UTM_Partner_Name=DSA_XPRESS_FINSERVE&UTM_SM_Name=abdul.basha@poonawallafincorp.com',
  },
  {
    id: 'indusind-easycredit',
    lenderName: 'IndusInd Bank',
    productName: 'Indus EasyCredit Personal Loan',
    description:
      'Get a personal loan offer from IndusInd Bank in minutes — apply through our partner channel.',
    logoUrl: '/IndusInd.jpg',
    applyUrl:
      'https://induseasycredit.indusind.bank.in/customer/personal-loan/new-lead?utm_source=assisted&utm_medium=IBLV2179&utm_campaign=Personal-Loan&utm_content=1',
  },
]

// -----------------------------------------------------------------------------
// Branches (the 4 physical office locations — used by branches.tsx)
// State + city dropdowns for the lead form live in lib/indian-locations.ts
// -----------------------------------------------------------------------------

export const BRANCHES = [
  { city: 'Chennai', state: 'Tamil Nadu', address: 'Chennai, Tamil Nadu, India' },
  { city: 'Coimbatore', state: 'Tamil Nadu', address: 'Coimbatore, Tamil Nadu, India' },
  { city: 'Madurai', state: 'Tamil Nadu', address: 'Madurai, Tamil Nadu, India' },
  { city: 'Theni', state: 'Tamil Nadu', address: 'Theni, Tamil Nadu, India' },
]

// -----------------------------------------------------------------------------
// Loan types & form fields
// -----------------------------------------------------------------------------

export const LOAN_TYPES = [
  { value: 'personal', label: 'Personal Loan' },
  { value: 'business', label: 'Business Loan' },
] as const

export const FORM_FIELDS = [
  { name: 'loanType', label: 'Loan Type', type: 'select' },
  { name: 'businessName', label: 'Business Name', placeholder: 'Required for business loans', type: 'text' },
  { name: 'loanAmount', label: 'Loan Amount Needed', placeholder: 'e.g., ₹5,00,000', type: 'text' },
  { name: 'loanPurpose', label: 'Purpose of Loan', placeholder: 'Working capital, expansion, personal need, etc.', type: 'text' },
  { name: 'firstName', label: 'First Name', placeholder: 'Your first name', type: 'text' },
  { name: 'lastName', label: 'Last Name', placeholder: 'Your last name', type: 'text' },
  { name: 'email', label: 'Email', placeholder: 'your@email.com', type: 'email' },
  { name: 'phone', label: 'Phone Number', placeholder: '+91 98765 43210', type: 'tel' },
  { name: 'city', label: 'City', type: 'select' },
]

// -----------------------------------------------------------------------------
// Services (the two real product lines)
// -----------------------------------------------------------------------------

export const SERVICES = [
  {
    title: 'Personal Loan',
    description:
      'Unsecured personal loans from 5 leading banks and 7 NBFCs. Compare rates, processing fees and hidden charges side-by-side and pick what truly fits your needs.',
    amount: '5 Banks + 7 NBFCs',
    type: 'personal',
    bullets: [
      'Zero processing fees options',
      'No mandatory insurance bundling',
      'Transparent pre-closing & part-payment terms',
    ],
  },
  {
    title: 'Business Loan',
    description:
      'Unsecured business financing from 4 banks and 7 NBFCs. Fast approvals, competitive rates, no hidden fees — for MSMEs and growing enterprises.',
    amount: '4 Banks + 7 NBFCs',
    type: 'business',
    bullets: [
      'Fast turnaround for working capital needs',
      'Comparison across multiple lenders',
      'Transparent fee structure',
    ],
  },
]

// -----------------------------------------------------------------------------
// Features ("Why XpressFinserve" — derived from the homepage value props)
// -----------------------------------------------------------------------------

export const FEATURES = [
  {
    icon: '⚖️',
    title: 'Compare Multiple Lenders',
    description: 'See loan offers from multiple leading banks & NBFCs in one place — pick the best rate.',
  },
  {
    icon: '🚫',
    title: 'Zero Processing Fees',
    description: 'We guide you toward loans with zero up-front processing charges. Maximise what stays in your pocket.',
  },
  {
    icon: '🛡️',
    title: 'No Mandatory Insurance',
    description: 'Avoid bundled insurance premiums. Decide if and when you actually need coverage.',
  },
  {
    icon: '🔍',
    title: 'Transparency on Hidden Costs',
    description: 'Pre-closing charges, part-payment rules — we share everything most lenders try to hide.',
  },
  {
    icon: '📈',
    title: 'CIBIL & Credit Guidance',
    description: 'A poor credit score is not the end. We help you understand and resolve report issues.',
  },
  {
    icon: '🤝',
    title: 'Your Lending Advocate',
    description: 'Independent advice since 2015. We work for you, not the lenders.',
  },
]

// -----------------------------------------------------------------------------
// "Why Choose Us" — the 4 detailed value-prop blocks (full text from homepage)
// -----------------------------------------------------------------------------

export const WHY_CHOOSE_US = [
  {
    number: '01',
    title: 'The Ultimate Comparison Advantage',
    description:
      'Stop guessing which bank has the best rate. We provide a single, clear view of loan offers from multiple leading banks — all in one place. You immediately see the best rates and terms tailored to your financial needs.',
  },
  {
    number: '02',
    title: 'Zero-Fee Guarantee & Maximum Savings',
    description:
      'Our goal is to maximise the money that stays in your pocket. We actively guide you toward loans with zero processing fees and no mandatory insurance — eliminating up-front costs and unnecessary add-on premiums.',
  },
  {
    number: '03',
    title: 'Total Transparency on Hidden Costs',
    description:
      'Avoid future financial surprises. We explicitly share pre-closing charges and part-payment rules across all major banks, ensuring you maintain full control over your loan repayment.',
  },
  {
    number: '04',
    title: 'Expert Guidance for CIBIL/Credit Challenges',
    description:
      'A less-than-perfect credit score should not be a permanent roadblock. We offer actionable advice and strategies to understand, correct and resolve your credit report problems — improving your future financial eligibility.',
  },
]

// -----------------------------------------------------------------------------
// How It Works (simplified to match real workflow)
// -----------------------------------------------------------------------------

export const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Share Your Need',
    description: 'Tell us your loan type, amount and basic profile via our quick form or Google Form.',
  },
  {
    step: 2,
    title: 'Get Compared Offers',
    description: 'We bring you offers from multiple banks and NBFCs side-by-side, with full fee transparency.',
  },
  {
    step: 3,
    title: 'Pick the Best Deal',
    description: 'We help you understand pre-closing charges, part-payment rules and hidden costs before you sign.',
  },
  {
    step: 4,
    title: 'Loan Disbursed',
    description: 'Once approved, your funds are disbursed quickly so you can move forward.',
  },
]

// -----------------------------------------------------------------------------
// Stats (only verifiable, non-fabricated numbers)
// -----------------------------------------------------------------------------

const FOUNDED_YEAR = 2015
const _yearsServing = new Date().getFullYear() - FOUNDED_YEAR

export interface Stat {
  label: string
  value: number
  prefix?: string
  suffix?: string
  formatted?: boolean
}

export const STATS: Stat[] = [
  { label: 'Years of Service', value: _yearsServing, suffix: '+' },
  { label: 'Cities Served', value: 4, suffix: '' },
  { label: 'Partner Banks', value: 5, suffix: '' },
  { label: 'Partner NBFCs', value: 9, suffix: '' },
]

// -----------------------------------------------------------------------------
// Company / Contact (single source of truth)
// -----------------------------------------------------------------------------

export const COMPANY = {
  name: 'XpressFinserve',
  tagline: 'Your Advocate in Unsecured Lending',
  since: 'Since 2015',
  foundedYear: FOUNDED_YEAR,
  vision:
    'To be the global leader in inclusive financial solutions, responsibly unlocking potential and providing immediate, fair, and flexible access to capital for every creditworthy individual, regardless of their background.',
  shortPitch:
    "We don't just find you a loan; we empower you with the knowledge and leverage to secure the best loan, penalty-free and complication-free.",
}

export const CONTACT = {
  email: 'customercare@xpressfinserve.com',
  phone: '+91 95663 02177',
  phoneHref: 'tel:+919566302177',
  emailHref: 'mailto:customercare@xpressfinserve.com',
  branchCities: ['Chennai', 'Coimbatore', 'Madurai', 'Theni'],
}
