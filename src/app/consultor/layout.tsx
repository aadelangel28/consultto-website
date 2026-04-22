import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Habla con un Consultor de Certificación y Cumplimiento Normativo | Consultto',
  description: '¿Tienes dudas sobre ISO 9001, IATF 16949, FSSC 22000, HACCP, ISO 45001 u otra norma? Habla directamente con un consultor especializado. Te respondemos en menos de 30 minutos.',
}

export default function ConsultorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
