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

const SEO_META: Record<string, { title: string; description: string }> = {
  'iso-9001': {
    title: 'ISO 9001:2015 — Software de Gestión de Calidad con IA | Consultto',
    description: 'Implementa y mantén tu certificación ISO 9001 con inteligencia artificial. Gestiona documentos, no conformidades y auditorías desde una sola plataforma. Sin consultores externos.',
  },
  'iso-14001': {
    title: 'ISO 14001:2015 — Sistema de Gestión Ambiental con IA | Consultto',
    description: 'Certifícate en ISO 14001 y gestiona tus aspectos ambientales con IA. Control de cumplimiento legal, objetivos ambientales y auditorías internas en una sola plataforma.',
  },
  'iso-45001': {
    title: 'ISO 45001:2018 — Sistema de Gestión de Seguridad Laboral con IA | Consultto',
    description: 'Implementa ISO 45001 y reduce accidentes con un sistema de gestión de seguridad y salud en el trabajo respaldado por IA. Identifica peligros, gestiona riesgos y prepara auditorías.',
  },
  'iso-27001': {
    title: 'ISO 27001 — Sistema de Gestión de Seguridad de la Información con IA | Consultto',
    description: 'Certifícate en ISO 27001 y protege la información de tu empresa con IA. Gestiona controles de seguridad, evalúa riesgos y mantén tu SGSI activo entre auditorías.',
  },
  'iso-22000': {
    title: 'ISO 22000 — Sistema de Gestión de Inocuidad Alimentaria con IA | Consultto',
    description: 'Implementa ISO 22000 y garantiza la inocuidad de tus productos con IA. HACCP, programas de prerrequisitos y auditorías gestionadas desde una sola plataforma.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const norma = getNorma(slug)
  if (!norma) return {}
  const seo = SEO_META[slug]
  return {
    title: seo?.title ?? `${norma.code}${norma.version} — ${norma.fullName} | Consultto`,
    description: seo?.description ?? norma.tagline,
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
