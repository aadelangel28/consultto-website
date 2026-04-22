import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { PlataformaPage } from '@/features/plataforma/PlataformaPage'

export const metadata = {
  title: 'Plataforma de Certificación y Cumplimiento Normativo con IA | Consultto',
  description: 'Gestiona ISO 9001, ISO 14001, ISO 45001, ISO 27001 y más desde una sola plataforma con IA. Control documental, auditorías y preparación de certificación en un solo lugar.',
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <PlataformaPage />
      <Footer />
    </LanguageProvider>
  )
}
