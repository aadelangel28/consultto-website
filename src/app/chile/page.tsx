import type { Metadata } from 'next'
import { getPais } from '@/features/paises/data'
import { PaisLandingPage } from '@/features/paises/PaisLandingPage'

const pais = getPais('chile')!

export const metadata: Metadata = {
  title: pais.metaTitle,
  description: pais.metaDescription,
  alternates: { canonical: 'https://consultto.com/chile' },
}

export default function Page() {
  return <PaisLandingPage pais={pais} />
}
