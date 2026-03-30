import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultto — Sistema de Gestión de Calidad con IA',
  description: 'Certifícate en cualquier norma y mantén tu sistema operando. Software inteligente y expertos humanos para ISO 9001, ISO 14001, IATF 16949 y más.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
