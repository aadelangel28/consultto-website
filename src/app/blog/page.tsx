import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { BlogPage } from '@/features/blog/BlogPage'

export const metadata = {
  title: 'Blog sobre Certificación y Cumplimiento Normativo | Consultto',
  description: 'Guías y estrategias sobre ISO 9001, ISO 14001, ISO 45001, ISO 27001, IATF 16949, FSSC 22000, HACCP y más. Implementa y mantén tu sistema de gestión con IA.',
  alternates: { canonical: 'https://consultto.com/blog' },
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
