import ActiveHeader from '@/components/ActiveHeader'
import HeroSection from '@/components/HeroSection'
import HowItWorksSection from '@/components/HowItWorksSection'
import CTASection from '@/components/CTASection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <ActiveHeader />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <HeroSection />
        <HowItWorksSection />
        <CTASection />
        <Footer />
      </div>
    </main>
  )
}
