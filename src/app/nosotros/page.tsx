import { NosotrosPage } from '@/features/nosotros/NosotrosPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Nosotros | Consultto',
  description: 'Consultto nació para que las empresas puedan certificarse y mantener su certificación sin estrés ni complicaciones.',
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <NosotrosPage />
      <Footer />
    </LanguageProvider>
  )
}
