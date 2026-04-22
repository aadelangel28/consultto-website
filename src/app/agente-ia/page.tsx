import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { AgenteIAPage } from '@/features/agente-ia/AgenteIAPage'

export const metadata = {
  title: 'Agente IA para Certificación y Cumplimiento Normativo — Disponible 24/7 | Consultto',
  description: 'Tu experto en normas ISO, FSSC, HACCP, IATF y más, disponible las 24 horas. Prepara auditorías, redacta procedimientos y analiza no conformidades con IA.',
  alternates: { canonical: 'https://consultto.com/agente-ia' },
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <AgenteIAPage />
      <Footer />
    </LanguageProvider>
  )
}
