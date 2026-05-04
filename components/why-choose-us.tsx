import { WHY_CHOOSE_US } from '@/lib/constants'
import { Sparkles } from 'lucide-react'

export function WhyChooseUs() {
  return (
    <section id="why-us" className="relative py-24 md:py-40 bg-gradient-to-b from-white via-blue-50/40 to-white overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-32 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-32 -left-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/20">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Your Advocate in Unsecured Lending</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We don&apos;t just find you a loan &mdash; we empower you with the knowledge and leverage to secure the best loan, penalty-free and complication-free.
          </p>
        </div>

        {/* 2x2 grid of value-prop blocks */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {WHY_CHOOSE_US.map((item) => (
            <article
              key={item.number}
              className="group relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 md:p-10 border border-white/50 hover:border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white/90 hover:-translate-y-1"
            >
              {/* Big numeral background */}
              <span
                aria-hidden
                className="absolute top-4 right-6 text-7xl md:text-8xl font-black text-primary/5 group-hover:text-secondary/10 transition-colors duration-300 select-none leading-none"
              >
                {item.number}
              </span>

              <div className="relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-secondary/20 to-yellow-100 mb-6 border border-secondary/20">
                  <span className="text-secondary font-bold">{item.number}</span>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 group-hover:text-secondary transition-colors">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Closing line */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-base md:text-lg text-foreground font-medium">
            <span className="text-primary font-bold">In short:</span> we act as your expert guide &mdash; focused on transparency, cost savings, and financial empowerment.
          </p>
        </div>
      </div>
    </section>
  )
}
