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
  'iso-13485': {
    title: 'ISO 13485 — Gestión de Calidad para Dispositivos Médicos con IA | Consultto',
    description: 'Certifícate en ISO 13485 y cumple los requisitos regulatorios de dispositivos médicos con IA. Trazabilidad, control de diseño y auditorías gestionadas desde una sola plataforma.',
  },
  'iatf-16949': {
    title: 'IATF 16949 — Sistema de Calidad Automotriz con IA | Consultto',
    description: 'Implementa IATF 16949 y cumple los requisitos de calidad de la cadena automotriz global con IA. Gestiona APQP, PPAP, FMEA y auditorías desde una sola plataforma.',
  },
  'iso-50001': {
    title: 'ISO 50001 — Sistema de Gestión de Energía con IA | Consultto',
    description: 'Certifícate en ISO 50001 y reduce tu consumo energético con IA. Gestiona objetivos de energía, indicadores de desempeño energético y auditorías desde una sola plataforma.',
  },
  'fssc-22000': {
    title: 'FSSC 22000 — Certificación de Inocuidad Alimentaria GFSI con IA | Consultto',
    description: 'Implementa FSSC 22000 y accede a los mercados globales de alimentos con una certificación reconocida por el GFSI. Gestiona prerrequisitos, HACCP y auditorías con IA.',
  },
  'brc-food': {
    title: 'BRCGS Food Safety — Certificación para Proveedores de Retail con IA | Consultto',
    description: 'Certifícate en BRCGS Food Safety y vende a los principales retailers globales. Gestiona los requisitos de la norma, auditorías y no conformidades con IA.',
  },
  'ifs-food': {
    title: 'IFS Food — Certificación de Calidad Alimentaria para Retail con IA | Consultto',
    description: 'Obtén la certificación IFS Food y accede a las cadenas de distribución europeas. Gestiona los requisitos, auditorías y documentación con IA desde una sola plataforma.',
  },
  'sqf': {
    title: 'SQF — Safe Quality Food Certification con IA | Consultto',
    description: 'Certifícate en SQF y cumple los requisitos de inocuidad y calidad del mercado norteamericano. Gestiona tu sistema SQF con IA: prerrequisitos, HACCP y auditorías.',
  },
  'haccp': {
    title: 'HACCP — Sistema de Análisis de Peligros y Puntos Críticos de Control con IA | Consultto',
    description: 'Implementa HACCP correctamente con IA. Identifica peligros, define puntos críticos de control y mantén la evidencia de monitoreo lista para cualquier auditoría.',
  },
  'gmp-farmaceutica': {
    title: 'BPM Farmacéuticas — Buenas Prácticas de Manufactura con IA | Consultto',
    description: 'Implementa Buenas Prácticas de Manufactura farmacéuticas con IA. Gestiona documentación, control de cambios, validaciones y auditorías regulatorias desde una sola plataforma.',
  },
  'as9100': {
    title: 'AS9100 — Sistema de Gestión de Calidad Aeroespacial con IA | Consultto',
    description: 'Certifícate en AS9100 y cumple los requisitos de calidad de la industria aeroespacial con IA. Gestiona trazabilidad, control de configuración y auditorías desde una sola plataforma.',
  },
  'ctpat': {
    title: 'C-TPAT — Programa de Seguridad de la Cadena de Suministro con IA | Consultto',
    description: 'Implementa C-TPAT y asegura tu cadena de suministro para el comercio con Estados Unidos. Gestiona requisitos de seguridad, evaluaciones y documentación con IA.',
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
