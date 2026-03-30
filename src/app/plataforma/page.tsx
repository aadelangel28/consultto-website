import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { PlataformaPage } from '@/features/plataforma/PlataformaPage'

export const metadata = {
  title: 'Plataforma | Consultto',
  description: 'La plataforma de gestión de calidad con IA. Documentación, auditorías, CAPAs y mejora continua en un solo sistema.',
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
