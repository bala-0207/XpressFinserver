import Image from 'next/image'
import { Zap, ArrowUpRight, ShieldCheck } from 'lucide-react'
import { INSTANT_LOAN_PARTNERS } from '@/lib/constants'

// -----------------------------------------------------------------------------
// InstantLoans — section showing partner-direct application links.
// Each card opens the lender's portal in a new tab with our DSA / partner
// tracking codes already attached (so commissions are attributed correctly).
// rel="noopener noreferrer" prevents the new tab from accessing window.opener.
// -----------------------------------------------------------------------------

export function InstantLoans() {
  return (
    <section
      id="instant-loans"
      className="relative py-20 md:py-28 bg-gradient-to-br from-blue-50 via-white to-amber-50 overflow-hidden"
    >
      {/* Decorative blurs */}
      <div className="absolute top-20 -right-20 w-96 h-96 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-secondary/15 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/30">
            <Zap size={16} className="fill-secondary" />
            <span className="text-sm font-bold tracking-wide uppercase">Instant Apply</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4 text-balance">
            Need It Faster? Apply Directly.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Skip the form &mdash; apply straight on the lender&apos;s portal through our partner channel. Decisions in minutes for eligible applicants.
          </p>
        </div>

        {/* Partner cards (2-up grid) */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {INSTANT_LOAN_PARTNERS.map((partner) => (
            <article
              key={partner.id}
              className="group relative bg-white rounded-2xl p-8 border-2 border-border hover:border-secondary shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
            >
              {/* Subtle "instant" ribbon in corner */}
              <div className="absolute -top-3 -right-3 bg-gradient-to-br from-secondary to-yellow-400 text-primary text-[10px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md flex items-center gap-1">
                <Zap size={10} className="fill-primary" />
                Instant
              </div>

              {/* Logo */}
              <div className="relative w-full h-20 mb-6 flex items-center justify-start">
                <Image
                  src={partner.logoUrl}
                  alt={`${partner.lenderName} logo`}
                  width={200}
                  height={80}
                  className="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Lender + product names */}
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-1">
                {partner.lenderName}
              </h3>
              <p className="text-secondary text-sm font-bold mb-4 uppercase tracking-wide">
                {partner.productName}
              </p>

              {/* Short description */}
              <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                {partner.description}
              </p>

              {/* Trust micro-line */}
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-5">
                <ShieldCheck size={14} className="text-primary flex-shrink-0" />
                <span>Secure application via official lender portal</span>
              </div>

              {/* Primary CTA — opens in new tab with security flags */}
              <a
                href={partner.applyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group/btn inline-flex items-center justify-center gap-2 bg-gradient-to-r from-primary to-blue-700 text-white px-6 py-3.5 rounded-lg font-bold hover:shadow-lg transition-all duration-300 hover:scale-[1.02]"
                aria-label={`Apply for ${partner.productName} on ${partner.lenderName}'s portal (opens in new tab)`}
              >
                Apply Now
                <ArrowUpRight
                  size={18}
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                />
              </a>
            </article>
          ))}
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
          Don&apos;t see your preferred lender here?{' '}
          <a href="#lead-form" className="text-primary font-semibold hover:text-secondary transition-colors">
            Use the Get Your Quote form
          </a>{' '}
          and we&apos;ll match you with the best option from our full network.
        </p>
      </div>
    </section>
  )
}
