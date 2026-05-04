import { HOW_IT_WORKS } from '@/lib/constants'
import { ArrowRight } from 'lucide-react'

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 md:py-40 bg-gradient-to-b from-blue-50 via-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-40 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">How It Works</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get funded in 4 simple steps and start growing your business
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 md:gap-4">
          {HOW_IT_WORKS.map((item, index) => (
            <div key={index} className="relative group">
              <div className="bg-white/60 backdrop-blur-lg rounded-2xl p-8 shadow-lg hover:shadow-xl border border-white/40 hover:border-secondary/40 transition-all duration-300 h-full hover:bg-white/80 hover:-translate-y-1">
                <div className="bg-gradient-to-br from-secondary to-yellow-400 text-primary w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-6">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
              </div>
              {index < HOW_IT_WORKS.length - 1 && (
                <div className="hidden md:flex absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-secondary" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
