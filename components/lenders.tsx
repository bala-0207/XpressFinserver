import Image from 'next/image'
import { ALL_BANKS, ALL_NBFCS, type Lender } from '@/lib/constants'
import { Sparkles, Landmark, Building2 } from 'lucide-react'

// -----------------------------------------------------------------------------
// Per-lender accent palette. Class strings are written literally here so
// Tailwind's content scanner picks them up at build time.
// -----------------------------------------------------------------------------
const ACCENT_STYLES: Record<
  Lender['accent'],
  { wrap: string; text: string; ring: string }
> = {
  blue:    { wrap: 'bg-blue-50',    text: 'text-blue-700',    ring: 'ring-blue-200' },
  amber:   { wrap: 'bg-amber-50',   text: 'text-amber-700',   ring: 'ring-amber-200' },
  emerald: { wrap: 'bg-emerald-50', text: 'text-emerald-700', ring: 'ring-emerald-200' },
  rose:    { wrap: 'bg-rose-50',    text: 'text-rose-700',    ring: 'ring-rose-200' },
  violet:  { wrap: 'bg-violet-50',  text: 'text-violet-700',  ring: 'ring-violet-200' },
}

// -----------------------------------------------------------------------------
// LenderCard — one card per institution.
// If `logoUrl` is set, shows a real logo on a clean white canvas (no tinted
// background, since brand colours could clash). If no logo, falls back to
// the initials placeholder on a soft pastel background.
// -----------------------------------------------------------------------------
function LenderCard({ lender }: { lender: Lender }) {
  const accent = ACCENT_STYLES[lender.accent]
  const hasLogo = Boolean(lender.logoUrl)

  return (
    <article
      className="group relative bg-white rounded-2xl p-5 border border-border hover:border-secondary/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
    >
      {/* Logo / Initials area
          - With logo: wider 4:3 white frame, image is contained (never cropped)
          - Without logo: square pastel-tinted box with initials */}
      {hasLogo ? (
        <div className="relative w-full h-20 mb-4 rounded-xl bg-white border border-border/60 group-hover:border-secondary/30 overflow-hidden flex items-center justify-center p-2 transition-colors duration-300">
          <Image
            src={lender.logoUrl as string}
            alt={`${lender.name} logo`}
            fill
            sizes="(max-width: 640px) 45vw, (max-width: 1024px) 22vw, 180px"
            className="object-contain p-1 transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      ) : (
        <div
          className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 ring-1 ${accent.wrap} ${accent.ring} group-hover:scale-110 transition-transform duration-300`}
        >
          <span className={`font-black text-lg tracking-tight ${accent.text}`}>
            {lender.initials}
          </span>
        </div>
      )}

      {/* Name */}
      <h3 className="text-sm md:text-base font-bold text-foreground mb-3 leading-tight min-h-[2.5rem] flex items-center group-hover:text-primary transition-colors">
        {lender.name}
      </h3>

      {/* Loan type badges */}
      <div className="flex flex-wrap gap-1.5 justify-center mt-auto">
        {lender.offers.includes('personal') && (
          <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
            Personal
          </span>
        )}
        {lender.offers.includes('business') && (
          <span className="text-[10px] font-semibold uppercase tracking-wide px-2 py-1 rounded-full bg-amber-100 text-amber-800 border border-amber-200">
            Business
          </span>
        )}
      </div>
    </article>
  )
}

// -----------------------------------------------------------------------------
// LenderGrid — section header + grid of LenderCards
// -----------------------------------------------------------------------------
function LenderGrid({
  title,
  subtitle,
  icon: Icon,
  lenders,
}: {
  title: string
  subtitle: string
  icon: typeof Landmark
  lenders: Lender[]
}) {
  return (
    <div className="mb-16 last:mb-0">
      {/* Section header */}
      <div className="flex items-end justify-between gap-4 mb-8 border-b border-border pb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 bg-gradient-to-br from-primary/10 to-blue-100 rounded-xl flex items-center justify-center shrink-0">
            <Icon size={20} className="text-primary" />
          </div>
          <div>
            <h3 className="text-2xl md:text-3xl font-bold text-primary leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
          </div>
        </div>
        <span className="hidden sm:inline-flex shrink-0 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold border border-secondary/20">
          {lenders.length} {lenders.length === 1 ? 'partner' : 'partners'}
        </span>
      </div>

      {/* Card grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-5">
        {lenders.map((lender) => (
          <LenderCard key={lender.id} lender={lender} />
        ))}
      </div>
    </div>
  )
}

// -----------------------------------------------------------------------------
// Main section
// -----------------------------------------------------------------------------
export function Lenders() {
  return (
    <section id="lenders" className="relative py-24 md:py-40 bg-white overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 pointer-events-none" />
      <div className="absolute bottom-20 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/20">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Our Lender Network</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Banks &amp; NBFCs We Work With
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {ALL_BANKS.length} leading banks and {ALL_NBFCS.length} trusted NBFCs &mdash; tagged by what each offers
          </p>
        </div>

        {/* Banks */}
        <LenderGrid
          title="Banks"
          subtitle={`${ALL_BANKS.length} leading private & nationalised banks`}
          icon={Landmark}
          lenders={ALL_BANKS}
        />

        {/* NBFCs */}
        <LenderGrid
          title="NBFCs"
          subtitle={`${ALL_NBFCS.length} trusted non-banking financial companies`}
          icon={Building2}
          lenders={ALL_NBFCS}
        />

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Want to know which lender offers the best rate for <em>your</em> profile?
          </p>
          <a
            href="#lead-form"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-blue-700 text-white px-8 py-3 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-105"
          >
            Compare Offers Now
          </a>
        </div>
      </div>
    </section>
  )
}
