export interface Article {
  slug: string
  category: string
  title: string
  excerpt: string
  author: string
  authorRole: string
  date: string
  readTime: string
  image: string
  featured?: boolean
}

export const articles: Article[] = [
  {
    slug: 'como-preparar-auditoria-iso-9001',
    category: 'Certificación',
    title: 'Cómo preparar a tu organización para una auditoría de certificación ISO 9001 en 90 días',
    excerpt: 'Las organizaciones que fracasan en su primera auditoría de certificación comparten un patrón común: confunden tener documentos con tener un sistema. En este artículo explicamos el enfoque que usamos con más de 200 empresas para llegar a la auditoría con evidencia real y estructurada.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '24 mar 2025',
    readTime: '8 min',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200&q=80',
    featured: true,
  },
  {
    slug: 'diferencias-iso-9001-iatf-16949',
    category: 'Normas',
    title: 'ISO 9001 vs. IATF 16949: qué cambia y qué significa para la industria automotriz',
    excerpt: 'La IATF 16949 no es simplemente una versión más exigente de ISO 9001. Es una norma con lógica propia, diseñada para la cadena de suministro automotriz global. Entender las diferencias es el primer paso para implementarla sin duplicar esfuerzos.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '18 mar 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
  },
  {
    slug: 'ia-en-gestion-de-calidad',
    category: 'Tecnología',
    title: 'El rol de la inteligencia artificial en los sistemas de gestión de calidad modernos',
    excerpt: 'La IA no reemplaza al profesional de calidad — lo potencia. Analizamos cómo las organizaciones líderes están integrando agentes de IA para reducir el tiempo de preparación de auditorías, automatizar el seguimiento de no conformidades y mantener su sistema vivo entre certificaciones.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '10 mar 2025',
    readTime: '7 min',
    image: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80',
  },
  {
    slug: 'errores-comunes-iso-14001',
    category: 'Certificación',
    title: 'Los cinco errores más comunes al implementar ISO 14001 y cómo evitarlos',
    excerpt: 'Después de acompañar a decenas de organizaciones en su proceso de certificación ambiental, identificamos un conjunto de errores que se repiten con consistencia preocupante. La mayoría son evitables con una planificación adecuada.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '3 mar 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  },
  {
    slug: 'capa-mejora-continua',
    category: 'Gestión',
    title: 'No conformidades efectivas: cómo transformar una no conformidad en una oportunidad de mejora real',
    excerpt: 'El proceso de acciones correctivas y preventivas es uno de los pilares de cualquier sistema de gestión. Sin embargo, en la mayoría de las organizaciones se convierte en un trámite burocrático. Aquí explicamos qué separa una No conformidad funcional de uno que solo existe en papel.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '24 feb 2025',
    readTime: '6 min',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
  },
  {
    slug: 'iso-45001-seguridad-laboral',
    category: 'Normas',
    title: 'ISO 45001: por qué la seguridad laboral es también una decisión de negocio',
    excerpt: 'Las organizaciones que implementan ISO 45001 no solo reducen accidentes — mejoran su reputación ante clientes, reducen costos de seguros y fortalecen su cultura organizacional. Analizamos el caso de negocio detrás de la norma.',
    author: 'Equipo Consultto',
    authorRole: 'Especialistas en SGC',
    date: '17 feb 2025',
    readTime: '5 min',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  },
]

export const categories = ['Todos', 'Certificación', 'Auditorías', 'Normas', 'Industrias', 'Tecnología', 'Gestión']
