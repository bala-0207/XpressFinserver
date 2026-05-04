import { SERVICES } from '@/lib/constants'
import { CheckCircle2, Sparkles } from 'lucide-react'

export function Services() {
  return (
    <section id="services" className="relative py-24 md:py-40 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/20">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">What We Offer</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Services</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Two core unsecured lending categories — multiple banks and NBFCs to compare across each
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-xl rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/40 hover:border-secondary/30 hover:bg-white/80 hover:-translate-y-1"
            >
              {/* Glossy highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="mb-6">
                  <span className="inline-flex items-center gap-2 bg-gradient-to-r from-secondary/20 to-yellow-100 text-secondary px-4 py-2 rounded-lg font-bold text-sm border border-secondary/20">
                    <span className="w-2 h-2 bg-secondary rounded-full" />
                    {service.amount}
                  </span>
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{service.title}</h3>
                <p className="text-muted-foreground mb-8 leading-relaxed text-balance">{service.description}</p>
                <div className="space-y-3 mb-6">
                  {service.bullets.map((feature) => (
                    <div key={feature} className="flex items-center gap-3">
                      <CheckCircle2 size={18} className="text-secondary flex-shrink-0" />
                      <span className="text-foreground text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#lead-form"
                  className="block w-full mt-auto bg-gradient-to-r from-primary to-blue-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 text-center"
                >
                  Get a Quote
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
