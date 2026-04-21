import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { FaqJsonLd } from '@/components/JsonLd'
import { Navbar } from '@/features/landing/components/Navbar'
import { HeroSection } from '@/features/landing/components/HeroSection'
import { WhatWeDoSection } from '@/features/landing/components/WhatWeDoSection'
import { FeaturesSection } from '@/features/landing/components/FeaturesSection'
import { ComparisonSection } from '@/features/landing/components/ComparisonSection'
import { StatsSection } from '@/features/landing/components/StatsSection'
import { FAQSection } from '@/features/landing/components/FAQSection'
import { CTASection } from '@/features/landing/components/CTASection'
import { Footer } from '@/features/landing/components/Footer'

export default function Home() {
  return (
    <LanguageProvider>
      <FaqJsonLd />
      <main>
        <Navbar />
        <HeroSection />
        <WhatWeDoSection />
        <StatsSection />
        <FeaturesSection />
        <ComparisonSection />
        <FAQSection />
        <CTASection />
        <Footer />
      </main>
    </LanguageProvider>
  )
}
