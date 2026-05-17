import type { Metadata } from 'next'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { IntegracionesPage } from '@/features/landing/components/IntegracionesPage'

export const metadata: Metadata = {
  title: 'Integraciones | Consultto — Conecta tu SGC con cualquier sistema',
  description: 'Consultto se integra con ERPs, plataformas de calidad, RRHH y más a través de su REST API abierto. Compatible con SAP, Microsoft 365, Zapier y cientos de herramientas.',
  alternates: { canonical: 'https://consultto.com/integraciones' },
  openGraph: {
    title: 'Integraciones | Consultto',
    description: 'REST API abierto y compatible con cualquier sistema. Desde tu ERP hasta tu plataforma de gestión de proveedores.',
    url: 'https://consultto.com/integraciones',
    type: 'website',
  },
}

export default function Page() {
  return (
    <LanguageProvider>
      <Navbar />
      <IntegracionesPage />
      <Footer />
    </LanguageProvider>
  )
}
