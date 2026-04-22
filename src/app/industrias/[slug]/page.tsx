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

const SEO_META: Record<string, { title: string; description: string }> = {
  'manufactura': {
    title: 'Gestión de Calidad para Manufactura — ISO 9001, IATF 16949 con IA | Consultto',
    description: 'Implementa y certifica tu sistema de gestión de calidad en manufactura con IA. Control documental, no conformidades y auditorías sin papeles ni fricción.',
  },
  'automotriz': {
    title: 'Gestión de Calidad Automotriz — IATF 16949, ISO 9001 con IA | Consultto',
    description: 'Certifícate en IATF 16949 y gestiona los requisitos de calidad de la cadena automotriz con IA. APQP, PPAP, FMEA y auditorías desde una sola plataforma.',
  },
  'alimentos-y-bebidas': {
    title: 'Gestión de Inocuidad Alimentaria — ISO 22000, FSSC 22000 con IA | Consultto',
    description: 'Certifícate en inocuidad alimentaria con IA. Gestiona HACCP, prerrequisitos y auditorías desde una sola plataforma. Sin depender de consultores externos.',
  },
  'construccion': {
    title: 'Gestión de Calidad para Construcción — ISO 9001, ISO 45001 con IA | Consultto',
    description: 'Implementa ISO 9001 e ISO 45001 en construcción con IA. Gestiona seguridad laboral, calidad de obra y auditorías para ganar licitaciones y contratos corporativos.',
  },
  'tecnologia-y-software': {
    title: 'Gestión de Calidad para Tecnología — ISO 9001, ISO 27001 con IA | Consultto',
    description: 'Certifícate en ISO 9001 e ISO 27001 para empresas de tecnología con IA. Gestiona seguridad de la información, calidad de servicio y auditorías desde una sola plataforma.',
  },
  'salud-y-dispositivos-medicos': {
    title: 'Gestión de Calidad en Salud — ISO 13485, ISO 9001 con IA | Consultto',
    description: 'Implementa ISO 13485 para dispositivos médicos con IA. Trazabilidad, control de diseño, cumplimiento regulatorio y auditorías gestionadas desde una sola plataforma.',
  },
  'logistica-y-transporte': {
    title: 'Gestión de Calidad para Logística — ISO 9001, C-TPAT con IA | Consultto',
    description: 'Certifícate en ISO 9001 y C-TPAT para logística y transporte con IA. Gestiona procesos, proveedores y auditorías para cumplir con los requisitos de tus clientes corporativos.',
  },
  'servicios-profesionales': {
    title: 'Gestión de Calidad para Servicios Profesionales — ISO 9001 con IA | Consultto',
    description: 'Certifícate en ISO 9001 para servicios profesionales con IA. Estandariza procesos, mide la satisfacción del cliente y prepara auditorías sin burocracia innecesaria.',
  },
  'educacion': {
    title: 'Gestión de Calidad para Educación — ISO 9001 con IA | Consultto',
    description: 'Implementa ISO 9001 en instituciones educativas con IA. Gestiona procesos académicos y administrativos, mide resultados y mantén tu certificación activa sin complicaciones.',
  },
  'farmaceutica': {
    title: 'Gestión de Calidad Farmacéutica — BPM, ISO 9001 con IA | Consultto',
    description: 'Implementa Buenas Prácticas de Manufactura y ISO 9001 en la industria farmacéutica con IA. Control de cambios, validaciones y auditorías regulatorias desde una sola plataforma.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industria = getIndustria(slug)
  if (!industria) return {}
  const seo = SEO_META[slug]
  return {
    title: seo?.title ?? `${industria.name} — Gestión de Calidad con IA | Consultto`,
    description: seo?.description ?? industria.heroSubtitle,
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
