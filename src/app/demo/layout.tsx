import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda una Demo Gratuita — Plataforma de Certificación y Cumplimiento | Consultto',
  description: 'Solicita tu demo gratuita de 30 minutos. Te mostramos cómo Consultto acelera tu certificación en ISO 9001, IATF 16949, FSSC 22000, HACCP, ISO 27001 y más con IA.',
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
