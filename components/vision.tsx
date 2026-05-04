import Image from 'next/image'
import { COMPANY } from '@/lib/constants'

export function Vision() {
  return (
    <section id="about" className="relative py-24 md:py-40 bg-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-balance">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              {COMPANY.vision}
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {COMPANY.shortPitch} Here's how we turn the opaque lending process into a clear advantage for you.
            </p>
            <ul className="space-y-4">
              {[
                'Independent advice — we work for you, not the lenders',
                'Compare offers from multiple banks & NBFCs in one view',
                'Full transparency on processing fees, insurance, and hidden charges',
                'Expert guidance even when you have CIBIL/credit challenges',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-secondary font-bold text-xl mt-0.5 flex-shrink-0">✓</span>
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative group">
            {/* Soft glow halo behind the image */}
            <div className="absolute -inset-2 bg-gradient-to-br from-secondary/30 to-primary/30 rounded-2xl blur-xl opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

            {/* Image frame — keeps the rounded card aesthetic from the placeholder */}
            <div className="relative rounded-2xl overflow-hidden border border-white/40 shadow-lg group-hover:shadow-2xl transition-all duration-500 aspect-[4/3] bg-muted">
              <Image
                src="/image1.jpg"
                alt={`${COMPANY.name} \u2014 ${COMPANY.tagline}`}
                fill
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
