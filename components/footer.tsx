import { CONTACT, COMPANY } from '@/lib/constants'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-gradient-to-b from-primary via-blue-800 to-blue-900 text-white py-16 md:py-20 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-secondary to-yellow-400 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-primary font-bold text-lg">X</span>
              </div>
              <span className="font-bold text-lg">{COMPANY.name}</span>
            </div>
            <p className="text-blue-100 text-sm leading-relaxed mb-4">
              {COMPANY.tagline} &mdash; {COMPANY.since}.
            </p>
            <p className="text-blue-100/80 text-xs leading-relaxed">
              Personal &amp; business loan brokerage. Compare offers from leading banks &amp; NBFCs across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-5 text-white">Quick Links</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="#about" className="hover:text-secondary transition-colors font-medium">About Us</a></li>
              <li><a href="#services" className="hover:text-secondary transition-colors font-medium">Services</a></li>
              <li><a href="#why-us" className="hover:text-secondary transition-colors font-medium">Why Choose Us</a></li>
              <li><a href="#how-it-works" className="hover:text-secondary transition-colors font-medium">How It Works</a></li>
              <li><a href="#lenders" className="hover:text-secondary transition-colors font-medium">Our Lenders</a></li>
              <li><a href="#locations" className="hover:text-secondary transition-colors font-medium">Branches</a></li>
            </ul>
          </div>

          {/* Apply */}
          <div>
            <h4 className="font-bold mb-5 text-white">Apply</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li><a href="#lead-form" className="hover:text-secondary transition-colors font-medium">Get Your Quote</a></li>
              <li><a href="#contact" className="hover:text-secondary transition-colors font-medium">Contact Us</a></li>
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-secondary transition-colors font-medium">
                  Call {CONTACT.phone}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-5 text-white">Contact</h4>
            <ul className="space-y-3 text-blue-100 text-sm">
              <li>
                <a href={CONTACT.phoneHref} className="hover:text-secondary transition-colors font-medium">
                  {CONTACT.phone}
                </a>
              </li>
              <li>
                <a href={CONTACT.emailHref} className="hover:text-secondary transition-colors font-medium break-all">
                  {CONTACT.email}
                </a>
              </li>
              <li className="pt-2 text-blue-100/80">
                {CONTACT.branchCities.join(' · ')}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-blue-100">
            <p>&copy; {currentYear} {COMPANY.name}. All rights reserved.</p>
            <div className="flex gap-6 mt-6 md:mt-0">
              <a href="#" className="text-blue-100 hover:text-secondary transition-colors font-medium">Privacy Policy</a>
              <a href="#" className="text-blue-100 hover:text-secondary transition-colors font-medium">Terms of Service</a>
              <a href="#" className="text-blue-100 hover:text-secondary transition-colors font-medium">Disclaimer</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
