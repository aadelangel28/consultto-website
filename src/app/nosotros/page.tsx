import { NosotrosPage } from '@/features/nosotros/NosotrosPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Quiénes Somos — Consultto, Plataforma de Certificación y Cumplimiento Normativo',
  description: 'Conoce al equipo detrás de Consultto. Ayudamos a empresas a certificarse en ISO 9001, ISO 14001, ISO 45001, IATF 16949, FSSC 22000, ISO 27001 y más con inteligencia artificial.',
  alternates: { canonical: 'https://consultto.com/nosotros' },
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
