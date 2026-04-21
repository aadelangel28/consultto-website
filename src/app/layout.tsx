import type { Metadata } from 'next'
import './globals.css'
import { OrganizationJsonLd, SoftwareApplicationJsonLd } from '@/components/JsonLd'

export const metadata: Metadata = {
  title: 'Consultto | Certifícate en cualquier norma con IA',
  description: 'Software de gestión de cumplimiento con Agente IA. Gestiona tu sistema, prepara auditorías y mantén tu certificación activa — sin depender de consultores externos.',
  metadataBase: new URL('https://www.consultto.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'es_MX',
    url: 'https://www.consultto.com',
    siteName: 'Consultto',
    title: 'Consultto | Certifícate en cualquier norma con IA',
    description: 'Software de gestión de cumplimiento con Agente IA. Gestiona tu sistema, prepara auditorías y mantén tu certificación activa — sin depender de consultores externos.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Consultto — Plataforma de certificación con IA',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Consultto | Certifícate en cualquier norma con IA',
    description: 'Software de gestión de cumplimiento con Agente IA.',
    images: ['/og-image.png'],
  },
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
    <html lang="es" style={{ scrollBehavior: 'smooth' }}>
      <head>
        <OrganizationJsonLd />
        <SoftwareApplicationJsonLd />
      </head>
      <body className="overflow-x-hidden">{children}</body>
    </html>
  )
}
