import { CONTACT } from '@/lib/constants'
import { Mail, Phone, MapPin } from 'lucide-react'

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Have questions about personal or business loans? Our team is ready to help you find the perfect lender — and avoid the hidden costs.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <a href={CONTACT.phoneHref} className="text-primary hover:text-secondary transition-colors font-medium">
                    {CONTACT.phone}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">Reach out for loan offer details</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <a href={CONTACT.emailHref} className="text-primary hover:text-secondary transition-colors font-medium break-all">
                    {CONTACT.email}
                  </a>
                  <p className="text-muted-foreground text-sm mt-1">We&apos;ll get back to you promptly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-secondary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Office Branches</h3>
                  <p className="text-muted-foreground">
                    {CONTACT.branchCities.join(' · ')}
                  </p>
                  <p className="text-muted-foreground text-sm">Tamil Nadu, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-md border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Quick Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="contact-email"
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  placeholder="Your message..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-bold hover:opacity-90 transition-opacity"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
