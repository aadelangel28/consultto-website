import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { BlogPage } from '@/features/blog/BlogPage'

export const metadata = {
  title: 'Blog sobre Certificación ISO y Cumplimiento Normativo | Consultto',
  description: 'Guías, estrategias y casos prácticos sobre ISO 9001, ISO 14001, ISO 45001, ISO 27001 y más. Aprende a implementar y mantener tu sistema de gestión con IA.',
}

export default function Blog() {
  return (
    <LanguageProvider>
      <Navbar />
      <BlogPage />
      <Footer />
    </LanguageProvider>
  )
}
