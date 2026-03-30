import { notFound } from 'next/navigation'
import { getIndustria, INDUSTRIAS } from '@/features/industrias/data'
import { IndustriaPage } from '@/features/industrias/IndustriaPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return INDUSTRIAS.map((i) => ({ slug: i.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industria = getIndustria(slug)
  if (!industria) return {}
  return {
    title: `${industria.name} | Consultto`,
    description: industria.heroSubtitle,
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industria = getIndustria(slug)
  if (!industria) notFound()

  return (
    <LanguageProvider>
      <Navbar />
      <IndustriaPage industria={industria} />
      <Footer />
    </LanguageProvider>
  )
}
