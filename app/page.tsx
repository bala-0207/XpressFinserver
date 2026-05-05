import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { Stats } from '@/components/stats'
import { Vision } from '@/components/vision'
import { Services } from '@/components/services'
import { Features } from '@/components/features'
import { WhyChooseUs } from '@/components/why-choose-us'
import { HowItWorks } from '@/components/how-it-works'
import { Lenders } from '@/components/lenders'
import { InstantLoans } from '@/components/instant-loans'
import { LeadForm } from '@/components/lead-form'
import { Branches } from '@/components/branches'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Stats />
      <Vision />
      <Services />
      <Features />
      <WhyChooseUs />
      <HowItWorks />
      <Lenders />
      <InstantLoans />
      <LeadForm />
      <Branches />
      <Contact />
      <Footer />
    </main>
  )
}
