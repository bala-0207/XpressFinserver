# XpressFinserve — Project Context

> Authoritative project context. Read this first before making any changes.

---

## What This Project Is

A Next.js single-page marketing website for **XpressFinserve**, a loan brokerage based in Tamil Nadu, India.

**Live website:** https://www.xpressfinserve.com/
**This codebase:** Replaces / mirrors the live website with a modern Next.js implementation.

### Business in one paragraph
XpressFinserve has been operating since 2015 as an unsecured lending brokerage. They help individuals and businesses compare loan offers from multiple Indian banks and NBFCs, with a strong emphasis on transparency: zero processing fees, no mandatory insurance, and full visibility into hidden costs (pre-closing charges, part-payment rules). They also offer CIBIL/credit score guidance.

### Audience
- **Primary:** Individuals seeking personal loans (5 banks + 8 NBFCs)
- **Secondary:** Small/medium businesses seeking unsecured business loans (4 banks + 6 NBFCs)
- **Geography:** Tamil Nadu — branches in Chennai, Coimbatore, Madurai, Theni
- **Currency:** INR (₹) throughout

### Real Contact (single source of truth)
| Field | Value |
|---|---|
| Public email | `customercare@xpressfinserve.com` |
| Public phone | `+91 95663 02177` |
| Lead recipient (internal) | `silambarasan@xpressfinserve.com` (configured via `LEAD_TO_EMAIL` env var) |
| Branch cities | Chennai · Coimbatore · Madurai · Theni |

All public-facing values live in `lib/constants.ts` under the `CONTACT` and `COMPANY` exports. The internal lead recipient lives in `.env.local` (never hardcoded) — see Open Items section below.

---

## Architecture

```
XpressFinserver/
├── app/
│   ├── layout.tsx          # Root layout, metadata, Inter font
│   ├── page.tsx            # Single-page composition of all sections
│   ├── globals.css         # Tailwind v4 + theme tokens
│   └── api/
│       └── lead/
│           └── route.ts    # POST /api/lead — receives form, validates, sends email
├── components/
│   ├── navigation.tsx      # Sticky top nav + mobile menu
│   ├── hero.tsx            # Hero with primary CTA + 'See How It Works'
│   ├── stats.tsx           # Animated counter for 4 verifiable stats
│   ├── vision.tsx          # #about — Vision statement (from website)
│   ├── services.tsx        # #services — Personal & Business loan cards
│   ├── features.tsx        # 6 short advantage cards
│   ├── why-choose-us.tsx   # #why-us — 4 detailed value-prop blocks
│   ├── how-it-works.tsx    # #how-it-works — 4-step process
│   ├── lenders.tsx         # #lenders — individual cards per institution
│   ├── lead-form.tsx       # #lead-form — inline form, POSTs to /api/lead
│   ├── branches.tsx        # #locations — 4 Tamil Nadu branches
│   ├── contact.tsx         # #contact — Phone/email + quick message form
│   ├── footer.tsx          # Brand + links + contact
│   └── ui/                 # shadcn/ui primitives (DO NOT EDIT manually)
├── lib/
│   ├── constants.ts        # SINGLE SOURCE OF TRUTH for all copy & data
│   ├── email.ts            # Resend send + HTML email template (server-only)
│   └── utils.ts            # cn() helper
├── hooks/                  # (currently unused custom hooks)
├── public/                 # Static assets
│   └── lenders/            # Drop bank/NBFC logos here
├── styles/                 # (currently empty)
├── .env.example            # Template for env vars (committed)
└── .env.local              # Real env vars (gitignored, you create this)
```

### Tech Stack
- **Next.js** 16.1.6 (App Router)
- **React** 19.2.4
- **TypeScript** 5.7.3
- **Tailwind CSS** v4 (with `@tailwindcss/postcss`)
- **shadcn/ui** (Radix-based component primitives)
- **lucide-react** for icons
- **pnpm** as package manager

### Theme Tokens
The design uses CSS variables / Tailwind tokens — DO NOT hardcode colors:
- `text-primary` / `bg-primary` — Deep blue (brand primary)
- `text-secondary` / `bg-secondary` — Yellow/gold (brand accent)
- `text-foreground`, `text-muted-foreground`
- `border-border`, `bg-muted`

Gradients commonly used:
- `from-primary via-blue-700 to-blue-900` — Hero / Stats / Footer dark sections
- `from-secondary to-yellow-400` — CTAs / accents

---

## Single Source of Truth: `lib/constants.ts`

All site copy and structured data lives here. **If you need to change a phone number, email, lender list, city, etc. — change it in `constants.ts` only.**

Key exports:
| Export | What it is |
|---|---|
| `COMPANY` | Brand info: name, tagline, since, vision, foundedYear |
| `CONTACT` | Email, phone, branch cities (no Google Form URL anymore) |
| `PERSONAL_LOAN_BANKS` / `PERSONAL_LOAN_NBFCS` (REMOVED, see ALL_LENDERS) | — |
| `BUSINESS_LOAN_BANKS` / `BUSINESS_LOAN_NBFCS` (REMOVED, see ALL_LENDERS) | — |
| `ALL_LENDERS` | **One entry per unique institution** (14 total). Each has `id`, `name`, `initials`, `type` (bank \| nbfc), `offers` (personal \| business \| both), `accent` colour, optional `logoUrl` |
| `ALL_BANKS` / `ALL_NBFCS` | Filtered helpers, derived from `ALL_LENDERS` |
| `PERSONAL_LOAN_LENDERS` / `BUSINESS_LOAN_LENDERS` | Filtered by `offers`, derived |
| `CITIES` / `BRANCHES` | Tamil Nadu cities (4) |
| `LOAN_TYPES` | Personal/Business radio options |
| `SERVICES` | The 2 product cards |
| `FEATURES` | 6 short advantage cards |
| `WHY_CHOOSE_US` | 4 detailed value-prop blocks (full website text) |
| `HOW_IT_WORKS` | 4-step process |
| `STATS` | Years of service, cities, partner banks/NBFCs |

---

## Page Composition (top to bottom)

1. **Navigation** — sticky, links: About, Services, Why Us, How It Works, Lenders, Branches, Contact
2. **Hero** — tagline + 2 CTAs (Apply Now → form / See How It Works → #how-it-works)
3. **Stats** — 4 verifiable numbers (years, cities, banks, NBFCs)
4. **Vision** (`#about`) — Real vision statement from website + 4 trust bullets
5. **Services** (`#services`) — Personal Loan + Business Loan cards
6. **Features** — 6 short advantage cards
7. **Why Choose Us** (`#why-us`) — 4 detailed value-prop blocks (the centerpiece)
8. **How It Works** (`#how-it-works`) — 4-step process
9. **Lenders** (`#lenders`) — Two subsections (Banks / NBFCs), each lender as its own individual card with initials placeholder + name + Personal/Business badges. Logos can be added via `/public/lenders/<id>.svg`.
10. **Lead Form** (`#lead-form`) — Inline form (Loan Type + 8 fields). Submit POSTs to `/api/lead` → emails the lead to `LEAD_TO_EMAIL`. Includes hidden honeypot field for spam protection.
11. **Branches** (`#locations`) — 4 Tamil Nadu cities
12. **Contact** (`#contact`) — Phone/email + Quick Message form
13. **Footer** — Brand, Quick Links, Apply, Contact

---

## Open Items / Known Issues

### Lender name typos (carried verbatim from website)
The live website lists two names that appear to be typos. **They are kept verbatim in this codebase** to match the website exactly. Update if a corrected version is preferred:
- `L&D Finance` — likely should be `L&T Finance` (Larsen & Toubro)
- `Sri Ram Finance` — likely should be `Shriram Finance`

### Adding lender logos
`components/lenders.tsx` renders one card per institution. Each card shows initials by default. To swap in a real logo:
1. Drop the file in `/public/lenders/<id>.<ext>` (use the `id` from `ALL_LENDERS` in `constants.ts`).
2. Set `logoUrl: '/lenders/<id>.<ext>'` on that lender's entry in `constants.ts`.
See `public/lenders/README.md` for the full guide and supported ids.

### Subpages not yet built
The live website has these pages that are currently stubs (empty content when fetched):
- `/Services`
- `/Loan-Offers`
- `/Contact-Us`

This codebase is currently **single-page only** (everything on `/`). If subpages need to be built, content needs to be supplied.

### Lead form is wired up via Resend
`components/lead-form.tsx` POSTs JSON to `app/api/lead/route.ts`, which:
1. Validates input with zod (server-side, regardless of what the client sends)
2. Checks honeypot field (silently succeeds for bots)
3. Calls `sendLeadEmail()` in `lib/email.ts`, which uses the Resend SDK
4. Returns `{ ok: true }` or `{ ok: false, error: '...' }`

Leads are emailed to whatever address is set in `LEAD_TO_EMAIL` (default: `silambarasan@xpressfinserve.com`).

**Required env vars** (in `.env.local`, never committed):
- `RESEND_API_KEY` — from https://resend.com/api-keys
- `LEAD_TO_EMAIL` — recipient (e.g., `silambarasan@xpressfinserve.com`)
- `LEAD_FROM_EMAIL` — sender. Use `XpressFinserve Leads <onboarding@resend.dev>` until you verify the domain.

See `.env.example` for the full template.

**Domain verification (recommended for production):**
- Visit https://resend.com/domains, add `xpressfinserve.com`, follow DNS instructions.
- Once verified, change `LEAD_FROM_EMAIL` to e.g. `XpressFinserve Leads <noreply@xpressfinserve.com>` so emails don't look like spam.

### Unused / placeholder
- `hooks/` directory currently contains nothing referenced by the app
- `styles/` directory empty (Tailwind config + globals.css is sufficient)
- Footer social/legal links go to `#` (no privacy/terms pages yet)

---

## Conventions

1. **Never hardcode contact info, lender names, city names, or copy in components.** Pull from `lib/constants.ts`.
2. **Use theme tokens** (`text-primary`, `text-secondary`, etc.) — don't hardcode hex colors.
3. **Components are server components by default.** Add `'use client'` only when needed (currently: `navigation.tsx`, `stats.tsx`, `lead-form.tsx`).
4. **All interactive sections have anchor IDs** (`#about`, `#services`, etc.) used by nav links and intra-page CTAs.
5. **Currency is INR** — use `₹` not `$`. Use Indian number formatting (`5,00,000` not `500,000`) where amounts appear.

---

## Constraints When Modifying

- **Do not break** Next.js App Router conventions or build config (`next.config.mjs`, `tsconfig.json`, `package.json`)
- **Do not edit files in** `components/ui/` manually — these are shadcn primitives
- **Always run** the site locally (`pnpm dev`) and click through every section after changes
- **Constants first, components second** — change `lib/constants.ts` before touching any component when adjusting copy
