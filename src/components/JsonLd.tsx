export function OrganizationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Consultto',
    url: 'https://www.consultto.com',
    logo: 'https://www.consultto.com/icon-192.png',
    description:
      'Software de gestión de cumplimiento con Agente IA. Gestiona tu sistema, prepara auditorías y mantén tu certificación activa.',
    sameAs: [],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'sales',
      availableLanguage: ['Spanish'],
    },
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function SoftwareApplicationJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: 'Consultto',
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    url: 'https://www.consultto.com',
    description:
      'Plataforma SaaS para gestión de sistemas de calidad y cumplimiento normativo con Agente IA. ISO 9001, ISO 14001, ISO 45001, ISO 27001 y más.',
    offers: {
      '@type': 'Offer',
      availability: 'https://schema.org/InStock',
    },
    featureList: [
      'Agente IA especializado en normas ISO',
      'Gestión de no conformidades',
      'Preparación de auditorías',
      'Documentación automatizada',
      'Mejora continua integrada',
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}

export function FaqJsonLd() {
  const faqs = [
    {
      question: '¿Qué hace diferente a Consultto de otras soluciones CMS?',
      answer:
        'Consultto combina tecnología con IA y consultoría presencial para que tu sistema funcione de verdad, no solo en el papel. No venimos a decirte qué hacer — venimos a hacerlo contigo.',
    },
    {
      question: '¿Necesito tener conocimientos previos en ISO 9001 u otras normas?',
      answer:
        'No. Nuestro agente de IA y nuestro equipo de consultores te guían en todo el proceso. El conocimiento técnico es nuestra responsabilidad, no la tuya.',
    },
    {
      question: '¿Cuánto tiempo toma obtener la certificación?',
      answer:
        'Con Consultto el proceso es significativamente más rápido que con los métodos tradicionales. La mayoría de nuestros clientes tienen su sistema operando en semanas, no meses.',
    },
    {
      question: '¿Qué pasa después de obtener la certificación?',
      answer:
        'No desaparecemos. Continuamos operando el sistema contigo, realizamos auditorías de mantenimiento y nos aseguramos de que la calidad sea parte del ADN de tu organización.',
    },
    {
      question: '¿Para qué tipo y tamaño de empresas es Consultto?',
      answer:
        'Trabajamos con empresas de todos los tamaños que buscan implementar o mejorar su sistema de gestión de calidad, desde PyMEs hasta empresas medianas.',
    },
    {
      question: '¿Qué normas manejan?',
      answer:
        'ISO 9001, ISO 14001, ISO 45001, FSSC 22000, ISO 27001, ISO 13485, IATF 16949, ISO 50001 y otras normas de gestión.',
    },
  ]

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
