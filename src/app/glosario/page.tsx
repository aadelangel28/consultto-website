import type { Metadata } from 'next'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { GlosarioContent } from './GlosarioContent'

export const metadata: Metadata = {
  title: 'Glosario ISO: Términos de Calidad y Certificación | Consultto',
  description: 'Más de 100 términos clave de normas ISO, HACCP, IATF 16949 y más. Aprende qué es una no conformidad, auditoría interna, PHVA, FMEA y otros conceptos esenciales de la gestión de calidad.',
  alternates: {
    canonical: 'https://consultto.com/glosario',
  },
  openGraph: {
    title: 'Glosario de Términos ISO y Calidad | Consultto',
    description: 'Más de 100 definiciones de ISO 9001, ISO 14001, HACCP, IATF 16949 y más normas. Tu referencia rápida de gestión de calidad.',
    url: 'https://consultto.com/glosario',
    type: 'website',
  },
}

export default function GlosarioPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <GlosarioContent />
      <Footer />
    </LanguageProvider>
  )
}
