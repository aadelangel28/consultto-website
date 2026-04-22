import { NosotrosPage } from '@/features/nosotros/NosotrosPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos — Consultto, Plataforma de Certificación ISO con IA',
  description: 'Conoce al equipo detrás de Consultto. Ayudamos a empresas a certificarse en ISO 9001, ISO 14001, ISO 45001, ISO 27001 y más con una plataforma inteligente impulsada por IA.',
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
