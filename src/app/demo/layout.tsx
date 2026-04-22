import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Agenda una Demo Gratuita — Plataforma de Certificación ISO | Consultto',
  description: 'Solicita tu demo gratuita de 30 minutos. Te mostramos cómo Consultto acelera tu certificación ISO con inteligencia artificial. Sin compromiso.',
}

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return children
}
