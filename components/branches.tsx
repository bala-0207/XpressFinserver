import { BRANCHES, CONTACT } from '@/lib/constants'
import { MapPin, Phone, Mail } from 'lucide-react'

export function Branches() {
  return (
    <section id="locations" className="relative py-24 md:py-40 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-40 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6 text-balance">Our Office Branches</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Serving customers across Tamil Nadu &mdash; visit any of our 4 branches
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {BRANCHES.map((branch, index) => (
            <div key={index} className="group relative bg-white/60 backdrop-blur-lg rounded-2xl p-8 border border-white/40 hover:border-secondary/40 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white/80">
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary/20 to-yellow-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">{branch.city}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{branch.state}</p>
                  <div className="flex flex-col gap-2 text-sm">
                    <a
                      href={CONTACT.phoneHref}
                      className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 font-medium whitespace-nowrap"
                    >
                      <Phone size={16} className="flex-shrink-0" />
                      <span>{CONTACT.phone}</span>
                    </a>
                    <a
                      href={CONTACT.emailHref}
                      className="text-primary hover:text-secondary transition-colors inline-flex items-center gap-2 font-medium break-all"
                    >
                      <Mail size={16} className="flex-shrink-0" />
                      <span>{CONTACT.email}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
