import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultto | Certifícate en cualquier norma con IA',
  description: 'Software de gestión de cumplimiento con Agente IA. Gestiona tu sistema, prepara auditorías y mantén tu certificación activa — sin depender de consultores externos.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body>{children}</body>
    </html>
  )
}
