import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { AgenteIAPage } from '@/features/agente-ia/AgenteIAPage'

export const metadata = {
  title: 'Agente IA | Consultto',
  description: 'Tu experto en sistemas de gestión de calidad, disponible 24/7. Responde preguntas, guía documentación y prepara tus auditorías.',
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
