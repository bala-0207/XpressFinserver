import { ArrowRight, Scale, Shield, BadgeCheck } from 'lucide-react'
import { COMPANY } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative py-16 md:py-24 bg-gradient-to-br from-primary via-blue-700 to-blue-900 text-white overflow-hidden">
      {/* Glossy accent elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-0 left-20 w-72 h-72 bg-white/5 rounded-full blur-3xl opacity-20" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 bg-white/15 backdrop-blur px-4 py-2 rounded-full border border-white/20">
            <BadgeCheck size={16} className="text-secondary" />
            <span className="text-sm font-semibold">{COMPANY.tagline} · {COMPANY.since}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight text-balance">
            Personal & Business Loans,{' '}
            <span className="bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent">
              Made Transparent
            </span>
          </h1>

          <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
            Compare offers from <span className="font-bold text-white">leading banks &amp; NBFCs</span> across India. Zero processing fees, no mandatory insurance, and complete transparency on hidden costs — penalty-free and complication-free.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <a
              href="#lead-form"
              className="group bg-gradient-to-r from-secondary to-yellow-400 text-primary px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:scale-105"
            >
              Apply Now
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white/15 backdrop-blur border border-white/30 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/25 transition-all duration-300 hover:border-white/50 flex items-center justify-center gap-2"
            >
              See How It Works
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
              <Scale size={16} className="text-secondary flex-shrink-0" />
              <span>Compare multiple lenders</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
              <Shield size={16} className="text-secondary flex-shrink-0" />
              <span>Zero processing fees</span>
            </div>
            <div className="flex items-center gap-2 bg-white/5 backdrop-blur px-4 py-3 rounded-lg border border-white/10">
              <BadgeCheck size={16} className="text-secondary flex-shrink-0" />
              <span>CIBIL guidance included</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
