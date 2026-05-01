import { notFound } from 'next/navigation'
import { getIndustria, INDUSTRIAS } from '@/features/industrias/data'
import { IndustriaPage } from '@/features/industrias/IndustriaPage'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import type { Metadata } from 'next'

export function generateStaticParams() {
  return INDUSTRIAS.map((i) => ({ slug: i.slug }))
}

const SEO_META: Record<string, { title: string; description: string }> = {
  'manufactura': {
    title: 'Gestión de Calidad para Manufactura — ISO 9001, IATF 16949 con IA | Consultto',
    description: 'Implementa y certifica tu sistema de gestión de calidad en manufactura con IA. Control documental, no conformidades y auditorías sin papeles ni fricción.',
  },
  'automotriz': {
    title: 'Gestión de Calidad Automotriz — IATF 16949, ISO 9001 con IA | Consultto',
    description: 'Certifícate en IATF 16949 y gestiona los requisitos de calidad de la cadena automotriz con IA. APQP, PPAP, FMEA y auditorías desde una sola plataforma.',
  },
  'alimentos-y-bebidas': {
    title: 'Gestión de Inocuidad Alimentaria — ISO 22000, FSSC 22000 con IA | Consultto',
    description: 'Certifícate en inocuidad alimentaria con IA. Gestiona HACCP, prerrequisitos y auditorías desde una sola plataforma. Sin depender de consultores externos.',
  },
  'construccion': {
    title: 'Gestión de Calidad para Construcción — ISO 9001, ISO 45001 con IA | Consultto',
    description: 'Implementa ISO 9001 e ISO 45001 en construcción con IA. Gestiona seguridad laboral, calidad de obra y auditorías para ganar licitaciones y contratos corporativos.',
  },
  'tecnologia-y-software': {
    title: 'Gestión de Calidad para Tecnología — ISO 9001, ISO 27001 con IA | Consultto',
    description: 'Certifícate en ISO 9001 e ISO 27001 para empresas de tecnología con IA. Gestiona seguridad de la información, calidad de servicio y auditorías desde una sola plataforma.',
  },
  'salud-y-dispositivos-medicos': {
    title: 'Gestión de Calidad en Salud — ISO 13485, ISO 9001 con IA | Consultto',
    description: 'Implementa ISO 13485 para dispositivos médicos con IA. Trazabilidad, control de diseño, cumplimiento regulatorio y auditorías gestionadas desde una sola plataforma.',
  },
  'logistica-y-transporte': {
    title: 'Gestión de Calidad para Logística — ISO 9001, C-TPAT con IA | Consultto',
    description: 'Certifícate en ISO 9001 y C-TPAT para logística y transporte con IA. Gestiona procesos, proveedores y auditorías para cumplir con los requisitos de tus clientes corporativos.',
  },
  'servicios-profesionales': {
    title: 'Gestión de Calidad para Servicios Profesionales — ISO 9001 con IA | Consultto',
    description: 'Certifícate en ISO 9001 para servicios profesionales con IA. Estandariza procesos, mide la satisfacción del cliente y prepara auditorías sin burocracia innecesaria.',
  },
  'educacion': {
    title: 'Gestión de Calidad para Educación — ISO 9001 con IA | Consultto',
    description: 'Implementa ISO 9001 en instituciones educativas con IA. Gestiona procesos académicos y administrativos, mide resultados y mantén tu certificación activa sin complicaciones.',
  },
  'farmaceutica': {
    title: 'Gestión de Calidad Farmacéutica — BPM, ISO 9001 con IA | Consultto',
    description: 'Implementa Buenas Prácticas de Manufactura y ISO 9001 en la industria farmacéutica con IA. Control de cambios, validaciones y auditorías regulatorias desde una sola plataforma.',
  },
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const industria = getIndustria(slug)
  if (!industria) return {}
  const seo = SEO_META[slug]
  return {
    title: seo?.title ?? `${industria.name} — Gestión de Calidad con IA | Consultto`,
    description: seo?.description ?? industria.heroSubtitle,
    alternates: { canonical: `https://consultto.com/industrias/${slug}` },
  }
}

const FAQ_ITEMS: Record<string, { q: string; a: string }[]> = {
  'manufactura': [
    { q: '¿Por qué las empresas manufactureras necesitan certificarse en ISO 9001?', a: 'La certificación ISO 9001 en manufactura permite ganar contratos con clientes corporativos, reducir defectos en línea, estandarizar procesos y demostrar calidad ante auditores externos. Es un requisito frecuente de clientes en sectores automotriz, aeroespacial y retail.' },
    { q: '¿Qué normas ISO aplican en la industria manufacturera?', a: 'Las normas más comunes en manufactura son ISO 9001 (calidad), ISO 14001 (gestión ambiental), ISO 45001 (seguridad laboral) e IATF 16949 para cadena automotriz. Consultto soporta todas estas normas desde una sola plataforma.' },
    { q: '¿Cómo ayuda Consultto a plantas de manufactura?', a: 'Consultto centraliza el control documental, gestión de no conformidades, auditorías internas y calibración de equipos en una sola plataforma con Agente IA. Elimina carpetas físicas y versiones desactualizadas en línea de producción.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 9001 para una empresa de manufactura?', a: 'Dependiendo del tamaño y madurez de la empresa, el proceso suele tomar entre 4 y 12 meses. Con Consultto, las empresas reducen ese tiempo significativamente al contar con Agente IA que guía cada requisito de la norma paso a paso.' },
  ],
  'automotriz': [
    { q: '¿Qué es IATF 16949 y por qué lo necesitan los proveedores automotrices?', a: 'IATF 16949 es la norma de gestión de calidad para la cadena automotriz global. Es obligatoria para proveedores de OEMs como GM, Ford, Toyota y Stellantis. Integra ISO 9001 con herramientas como APQP, PPAP, FMEA, SPC y MSA.' },
    { q: '¿Qué normas aplican en la industria automotriz?', a: 'Las principales son IATF 16949, ISO 9001 e ISO 14001. Adicionalmente, los OEMs pueden requerir cumplimiento con sus Customer Specific Requirements (CSR) particulares. Consultto gestiona todos estos requisitos desde una sola plataforma.' },
    { q: '¿Cómo gestiona Consultto los requisitos de calidad automotriz?', a: 'Consultto centraliza APQP, control de documentos, no conformidades con metodología 8D, auditorías por cláusula IATF y seguimiento de planes de control. El Agente IA interpreta los CSR de cada cliente y guía al equipo en cada requisito.' },
    { q: '¿Cuánto tarda certificarse en IATF 16949?', a: 'El proceso de certificación en IATF 16949 suele tomar entre 12 y 18 meses para empresas que parten de cero. Consultto acelera la implementación al automatizar la generación de evidencias y el seguimiento de hallazgos de auditoría.' },
  ],
  'alimentos-y-bebidas': [
    { q: '¿Por qué las empresas de alimentos necesitan ISO 22000 o FSSC 22000?', a: 'ISO 22000 y FSSC 22000 son requisitos de grandes cadenas de retail y exportación. Garantizan la inocuidad alimentaria mediante el análisis de peligros HACCP y controles preventivos. Sin estas certificaciones, muchas empresas no pueden acceder a mercados internacionales.' },
    { q: '¿Qué normas de inocuidad alimentaria gestiona Consultto?', a: 'Consultto soporta ISO 22000, FSSC 22000, HACCP, BRC Food e IFS Food. La plataforma gestiona los prerrequisitos operativos, análisis de peligros, puntos críticos de control y planes de verificación requeridos por cada esquema.' },
    { q: '¿Cómo ayuda Consultto a empresas de alimentos y bebidas?', a: 'Consultto centraliza el plan HACCP, registros de monitoreo de PCCs, control de documentos y auditorías internas en una sola plataforma. El Agente IA guía al equipo en los requisitos específicos de inocuidad y genera evidencias listas para auditor externo.' },
    { q: '¿Cuánto tiempo toma certificarse en FSSC 22000?', a: 'La certificación en FSSC 22000 generalmente toma entre 6 y 12 meses. Con Consultto, el proceso se acelera porque la plataforma estructura automáticamente los prerrequisitos, el análisis HACCP y la documentación requerida por el esquema.' },
  ],
  'construccion': [
    { q: '¿Por qué las constructoras necesitan ISO 9001 e ISO 45001?', a: 'ISO 9001 e ISO 45001 son requisitos frecuentes para participar en licitaciones públicas y contratos con empresas corporativas en construcción. ISO 9001 garantiza calidad de obra e ISO 45001 demuestra cumplimiento en seguridad laboral para trabajadores en campo.' },
    { q: '¿Qué normas ISO aplican en construcción?', a: 'Las normas más utilizadas en el sector construcción son ISO 9001 (calidad), ISO 45001 (seguridad y salud laboral) e ISO 14001 (gestión ambiental). Muchos proyectos de infraestructura requieren las tres de forma simultánea.' },
    { q: '¿Cómo gestiona Consultto el sistema de calidad en obras de construcción?', a: 'Consultto adapta el sistema de gestión a las particularidades de la construcción: obras temporales, frentes múltiples y subcontratistas. Centraliza procedimientos, registros de seguridad, no conformidades de obra y auditorías en campo desde una sola plataforma.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 9001 para una constructora?', a: 'Dependiendo del tamaño de la empresa y complejidad de los proyectos, el proceso toma entre 6 y 12 meses. Consultto reduce ese tiempo al estructurar automáticamente los procesos clave y generar la documentación necesaria para auditoría.' },
  ],
  'tecnologia-y-software': [
    { q: '¿Por qué las empresas de tecnología necesitan ISO 9001 o ISO 27001?', a: 'ISO 9001 demuestra calidad en el desarrollo y entrega de servicios de software, mientras que ISO 27001 garantiza la seguridad de la información de los clientes. Ambas son requisitos frecuentes para contratos enterprise, fintech, gobierno y exportación de servicios TI.' },
    { q: '¿Qué normas ISO aplican en empresas de tecnología y software?', a: 'Las principales son ISO 9001 (calidad de servicio), ISO 27001 (seguridad de la información) e ISO 20000 (gestión de servicios TI). Consultto soporta estas normas y adapta el sistema de gestión a metodologías ágiles y entornos de desarrollo moderno.' },
    { q: '¿Cómo ayuda Consultto a empresas de tecnología?', a: 'Consultto integra el sistema de gestión con los flujos de trabajo de empresas tech: gestión de incidentes como no conformidades, control de versiones documentales, auditorías de seguridad y seguimiento de riesgos de información desde una sola plataforma.' },
    { q: '¿Cuánto tarda certificarse en ISO 27001 para una empresa de software?', a: 'La certificación ISO 27001 toma entre 6 y 18 meses según el tamaño y complejidad de la empresa. Consultto acelera la implementación al estructurar el análisis de riesgos, los controles del Anexo A y la documentación requerida por la norma.' },
  ],
  'salud-y-dispositivos-medicos': [
    { q: '¿Por qué los fabricantes de dispositivos médicos necesitan ISO 13485?', a: 'ISO 13485 es el estándar internacional de calidad para fabricantes de dispositivos médicos. Es requisito para vender en mercados regulados como EE.UU. (FDA), Europa (CE) y México (COFEPRIS). Garantiza trazabilidad, control de diseño y gestión del riesgo del producto.' },
    { q: '¿Qué normas aplican en la industria de la salud y dispositivos médicos?', a: 'Las principales son ISO 13485 (dispositivos médicos), ISO 9001 (calidad general) e ISO 14971 (gestión de riesgos de productos sanitarios). Consultto soporta los requisitos específicos de trazabilidad y control de cambios que exige este sector.' },
    { q: '¿Cómo ayuda Consultto a empresas de dispositivos médicos?', a: 'Consultto centraliza el control de diseño, trazabilidad de lotes, gestión de reclamaciones, CAPA (acciones correctivas y preventivas) y auditorías regulatorias. El Agente IA guía al equipo en los requisitos específicos de ISO 13485 y normativa regulatoria aplicable.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 13485?', a: 'La certificación ISO 13485 generalmente toma entre 12 y 24 meses. Consultto reduce significativamente este tiempo al automatizar la generación de evidencias, el control documental y el seguimiento de auditorías requeridas por la norma.' },
  ],
  'logistica-y-transporte': [
    { q: '¿Por qué las empresas de logística necesitan ISO 9001 o C-TPAT?', a: 'ISO 9001 permite a operadores logísticos ganar contratos con clientes corporativos que exigen calidad certificada en sus proveedores de servicio. C-TPAT es requisito para exportar a EE.UU. y garantiza controles de seguridad en la cadena de suministro internacional.' },
    { q: '¿Qué normas ISO aplican en logística y transporte?', a: 'Las principales son ISO 9001 (gestión de calidad), C-TPAT (seguridad en cadena de suministro) e ISO 45001 (seguridad laboral). Para operadores de almacenes, también puede aplicar ISO 28000 de seguridad en la cadena de suministro.' },
    { q: '¿Cómo gestiona Consultto el sistema de calidad en logística?', a: 'Consultto adapta el sistema de gestión a las operaciones logísticas: procedimientos de recepción, almacenaje, distribución y devoluciones. Centraliza indicadores de servicio, no conformidades operativas y auditorías de rutas y almacenes desde una sola plataforma.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 9001 para una empresa de logística?', a: 'El proceso de certificación en ISO 9001 para logística toma entre 6 y 12 meses. Consultto acelera la implementación al estructurar automáticamente los procesos clave del sector y generar la evidencia requerida para auditoría externa.' },
  ],
  'servicios-profesionales': [
    { q: '¿Por qué las empresas de servicios profesionales se certifican en ISO 9001?', a: 'La certificación ISO 9001 en servicios profesionales diferencia a la empresa ante clientes corporativos y gobierno, demuestra metodologías estandarizadas de entrega y permite participar en licitaciones que exigen certificación como requisito.' },
    { q: '¿Qué normas ISO aplican en servicios profesionales?', a: 'La principal es ISO 9001 para gestión de calidad en la prestación de servicios. Dependiendo del sector, pueden aplicar también ISO 27001 (seguridad de información) o ISO 37001 (gestión antisoborno) para contratos con clientes de alto perfil.' },
    { q: '¿Cómo ayuda Consultto a empresas de servicios profesionales?', a: 'Consultto estandariza los procesos de entrega de servicios, mide la satisfacción del cliente, gestiona no conformidades y prepara las evidencias para auditoría externa. El Agente IA adapta los requisitos de ISO 9001 al contexto específico de cada firma de servicios.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 9001 para una firma de servicios?', a: 'Para empresas de servicios profesionales, el proceso suele tomar entre 4 y 9 meses, ya que la operación es menos compleja que manufactura. Con Consultto, la implementación es guiada paso a paso por el Agente IA reduciendo el tiempo y costo del proceso.' },
  ],
  'educacion': [
    { q: '¿Por qué las instituciones educativas se certifican en ISO 9001?', a: 'La certificación ISO 9001 en educación mejora los procesos académicos y administrativos, demuestra calidad ante autoridades y padres de familia, y es requisito en algunas convocatorias de acreditación y contratos con organismos gubernamentales.' },
    { q: '¿Qué normas ISO aplican en instituciones educativas?', a: 'La principal es ISO 9001 para gestión de calidad en procesos educativos. Para instituciones con certificaciones internacionales, también puede aplicar ISO 21001, norma específica para organizaciones educativas basada en la estructura de ISO 9001.' },
    { q: '¿Cómo ayuda Consultto a instituciones educativas?', a: 'Consultto adapta el sistema de gestión a los procesos de instituciones educativas: control de documentos académicos, gestión de no conformidades en procesos de enseñanza, medición de satisfacción de alumnos y auditorías internas del sistema.' },
    { q: '¿Cuánto tiempo toma certificarse en ISO 9001 para una institución educativa?', a: 'El proceso de certificación suele tomar entre 6 y 12 meses. Consultto facilita la implementación al estructurar los procesos clave de la institución y generar automáticamente la evidencia documentada que requiere el auditor externo.' },
  ],
  'farmaceutica': [
    { q: '¿Por qué las empresas farmacéuticas necesitan BPM e ISO 9001?', a: 'Las Buenas Prácticas de Manufactura (BPM) son obligatorias para operar y comercializar productos farmacéuticos bajo regulación de COFEPRIS, FDA o EMA. ISO 9001 complementa el sistema de calidad con un enfoque de mejora continua y gestión de riesgos.' },
    { q: '¿Qué normas aplican en la industria farmacéutica?', a: 'Las principales son BPM (Buenas Prácticas de Manufactura), ISO 9001, ICH Q10 (sistema de calidad farmacéutico) e ISO 15378 para materiales de empaque primario. Consultto soporta los requisitos documentales y de trazabilidad de todas estas normas.' },
    { q: '¿Cómo gestiona Consultto el sistema de calidad farmacéutico?', a: 'Consultto centraliza el control de cambios, validaciones, desviaciones, CAPA (acciones correctivas y preventivas), registros de lotes y auditorías regulatorias. El Agente IA guía al equipo en los requisitos de COFEPRIS y otros entes regulatorios aplicables.' },
    { q: '¿Cuánto tiempo toma implementar BPM en una empresa farmacéutica?', a: 'La implementación de un sistema BPM puede tomar entre 12 y 24 meses dependiendo de la complejidad del portafolio de productos. Consultto acelera el proceso al estructurar los procedimientos requeridos y dar trazabilidad completa desde una sola plataforma.' },
  ],
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const industria = getIndustria(slug)
  if (!industria) notFound()

  const seo = SEO_META[slug]
  const faqItems = FAQ_ITEMS[slug] ?? []

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }

  return (
    <LanguageProvider>
      <Navbar />
      {faqItems.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <IndustriaPage industria={industria} />
      <Footer />
    </LanguageProvider>
  )
}
