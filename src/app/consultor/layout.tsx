import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Habla con un Consultor de Certificación ISO | Consultto',
  description: '¿Tienes dudas sobre tu certificación ISO? Habla directamente con un consultor especializado. Te respondemos en menos de 30 minutos.',
}

export default function ConsultorLayout({ children }: { children: React.ReactNode }) {
  return children
}
