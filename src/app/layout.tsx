import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Consultto | Certifícate en cualquier norma con IA',
  description: 'Software de gestión de cumplimiento con Agente IA. Gestiona tu sistema, prepara auditorías y mantén tu certificación activa — sin depender de consultores externos.',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
