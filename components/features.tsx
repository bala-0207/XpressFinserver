import { FEATURES } from '@/lib/constants'
import { Sparkles } from 'lucide-react'

export function Features() {
  return (
    <section className="relative py-24 md:py-40 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-40 -left-40 w-80 h-80 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 -right-40 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full mb-6 border border-secondary/20">
            <Sparkles size={16} />
            <span className="text-sm font-semibold">Our Advantages</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">
            Why XpressFinserve?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Independent advice, total transparency, and your interests first — since 2015
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {FEATURES.map((feature, index) => (
            <div 
              key={index} 
              className="group relative p-8 rounded-2xl bg-white/60 backdrop-blur-lg border border-white/40 hover:border-secondary/40 shadow-lg hover:shadow-2xl transition-all duration-300 hover:bg-white/80 hover:-translate-y-2"
            >
              {/* Glossy highlight */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-yellow-100 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-3xl">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-secondary transition-colors">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-balance">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
