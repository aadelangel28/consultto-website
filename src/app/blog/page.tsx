import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { BlogPage } from '@/features/blog/BlogPage'

export const metadata = {
  title: 'Blog | Consultto',
  description: 'Perspectivas sobre certificación, cumplimiento normativo y gestión de calidad.',
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
