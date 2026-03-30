import { notFound } from 'next/navigation'
import { getNorma, NORMAS } from '@/features/normas/data'
import { NormaPage } from '@/features/normas/NormaPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return NORMAS.map((n) => ({ slug: n.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const norma = getNorma(slug)
  if (!norma) return {}
  return {
    title: `${norma.code}${norma.version} | Consultto`,
    description: norma.tagline,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const norma = getNorma(slug)
  if (!norma) notFound()

  return (
    <LanguageProvider>
      <Navbar />
      <NormaPage norma={norma} />
      <Footer />
    </LanguageProvider>
  )
}
