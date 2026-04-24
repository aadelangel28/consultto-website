export interface PaisData {
  slug: string
  nombre: string
  organismoLocal: string
  organismoDesc: string
  heroTitle: string
  heroSubtitle: string
  contexto: string
  normasDestacadas: { codigo: string; nombre: string; porQue: string; href: string }[]
  sectores: string[]
  stats: { value: string; label: string }[]
  metaTitle: string
  metaDescription: string
}

export const PAISES: PaisData[] = [
  {
    slug: 'mexico',
    nombre: 'México',
    organismoLocal: 'IMNC',
    organismoDesc: 'Instituto Mexicano de Normalización y Certificación',
    heroTitle: 'Software de gestión de calidad en México',
    heroSubtitle: 'Certifícate en ISO 9001, IATF 16949, FSSC 22000 y más con una plataforma diseñada para la industria mexicana. Sin consultores externos, sin papeles.',
    contexto: 'En México, la certificación es un requisito cada vez más frecuente para ganar licitaciones de gobierno, entrar a cadenas de suministro automotriz en el Bajío y Monterrey, y exportar productos alimenticios. El organismo nacional de normalización es el IMNC, y las certificaciones son emitidas por organismos acreditados ante la EMA (Entidad Mexicana de Acreditación).',
    normasDestacadas: [
      {
        codigo: 'ISO 9001',
        nombre: 'Gestión de Calidad',
        porQue: 'Requisito frecuente en licitaciones públicas federales y contratos con clientes corporativos.',
        href: '/normas/iso-9001',
      },
      {
        codigo: 'IATF 16949',
        nombre: 'Calidad Automotriz',
        porQue: 'Obligatorio para proveedores de armadoras como GM, Ford, Stellantis, Toyota y BMW en el Bajío y Monterrey.',
        href: '/normas/iatf-16949',
      },
      {
        codigo: 'FSSC 22000',
        nombre: 'Inocuidad Alimentaria',
        porQue: 'Requerido por cadenas de retail y exportación. México es uno de los mayores exportadores de alimentos de LATAM.',
        href: '/normas/fssc-22000',
      },
      {
        codigo: 'ISO 45001',
        nombre: 'Seguridad Laboral',
        porQue: 'Cumple con las reformas a la NOM-035 y demuestra compromiso con la seguridad de los trabajadores.',
        href: '/normas/iso-45001',
      },
    ],
    sectores: ['Automotriz', 'Manufactura', 'Alimentos y Bebidas', 'Logística', 'Construcción', 'Farmacéutica'],
    stats: [
      { value: '+12,000', label: 'empresas certificadas en ISO 9001 en México' },
      { value: '3er lugar', label: 'en LATAM por número de certificaciones ISO' },
      { value: '80%', label: 'de licitaciones federales exigen certificación' },
    ],
    metaTitle: 'Software de Gestión de Calidad en México — ISO 9001, IATF, FSSC | Consultto',
    metaDescription: 'Certifícate en ISO 9001, IATF 16949, FSSC 22000, ISO 45001 y más en México. Plataforma de gestión normativa con IA para empresas mexicanas. Sin consultores externos.',
  },
  {
    slug: 'colombia',
    nombre: 'Colombia',
    organismoLocal: 'ICONTEC',
    organismoDesc: 'Instituto Colombiano de Normas Técnicas y Certificación',
    heroTitle: 'Software de gestión de calidad en Colombia',
    heroSubtitle: 'Certifícate en ISO 9001, ISO 14001, HACCP y más con una plataforma diseñada para empresas colombianas. Sin consultores externos, sin papeles.',
    contexto: 'En Colombia, la certificación ISO es un habilitador clave para contratar con el Estado a través del SECOP y para acceder a mercados de exportación en flores, café, alimentos y manufactura. El ICONTEC es el organismo nacional de normalización y uno de los más reconocidos de América Latina. Las certificaciones son emitidas por organismos acreditados ante el ONAC (Organismo Nacional de Acreditación de Colombia).',
    normasDestacadas: [
      {
        codigo: 'ISO 9001',
        nombre: 'Gestión de Calidad',
        porQue: 'Requisito habitual en procesos de contratación pública (SECOP) y para proveedores de grandes empresas.',
        href: '/normas/iso-9001',
      },
      {
        codigo: 'ISO 14001',
        nombre: 'Gestión Ambiental',
        porQue: 'Exigido por clientes internacionales y en sectores con alto impacto ambiental como minería, flores y agroindustria.',
        href: '/normas/iso-14001',
      },
      {
        codigo: 'HACCP',
        nombre: 'Inocuidad Alimentaria',
        porQue: 'Obligatorio para exportadores de alimentos y bebidas. Colombia exporta café, flores y alimentos procesados a más de 50 países.',
        href: '/normas/haccp',
      },
      {
        codigo: 'ISO 45001',
        nombre: 'Seguridad Laboral',
        porQue: 'Reemplaza la OHSAS 18001 y es cada vez más exigida en sectores de construcción, minería y manufactura.',
        href: '/normas/iso-45001',
      },
    ],
    sectores: ['Agroindustria', 'Flores y Exportación', 'Manufactura', 'Construcción', 'Minería', 'Servicios'],
    stats: [
      { value: '+8,000', label: 'empresas certificadas en ISO 9001 en Colombia' },
      { value: 'ICONTEC', label: 'referente de normalización en LATAM desde 1963' },
      { value: '70%', label: 'de contratos estatales favorecen empresas certificadas' },
    ],
    metaTitle: 'Software de Gestión de Calidad en Colombia — ISO 9001, HACCP, ISO 14001 | Consultto',
    metaDescription: 'Certifícate en ISO 9001, ISO 14001, HACCP, ISO 45001 y más en Colombia. Plataforma de gestión normativa con IA para empresas colombianas. Sin consultores externos.',
  },
  {
    slug: 'argentina',
    nombre: 'Argentina',
    organismoLocal: 'IRAM',
    organismoDesc: 'Instituto Argentino de Normalización y Certificación',
    heroTitle: 'Software de gestión de calidad en Argentina',
    heroSubtitle: 'Certifícate en ISO 9001, ISO 22000, GMP Farmacéutica y más con una plataforma diseñada para empresas argentinas. Sin consultores externos, sin papeles.',
    contexto: 'En Argentina, la certificación normativa es especialmente relevante para exportar a Europa y Estados Unidos, y para cumplir con los requisitos de ANMAT en el sector farmacéutico y alimentario. El IRAM es el organismo nacional de normalización y el principal referente en certificaciones ISO del país. La presencia de industria farmacéutica, agroindustria y manufactura hace que ISO 9001, ISO 22000 y las BPM sean las normas más demandadas.',
    normasDestacadas: [
      {
        codigo: 'ISO 9001',
        nombre: 'Gestión de Calidad',
        porQue: 'Requisito frecuente para exportar y para contratos con clientes multinacionales en manufactura y servicios.',
        href: '/normas/iso-9001',
      },
      {
        codigo: 'ISO 22000',
        nombre: 'Inocuidad Alimentaria',
        porQue: 'Argentina es uno de los mayores exportadores de alimentos del mundo. ISO 22000 es requisito de mercados europeos y asiáticos.',
        href: '/normas/iso-22000',
      },
      {
        codigo: 'GMP Farmacéutica',
        nombre: 'Buenas Prácticas de Manufactura',
        porQue: 'Requisito de ANMAT para fabricación y exportación de medicamentos. Argentina tiene una industria farmacéutica de clase mundial.',
        href: '/normas/gmp-farmaceutica',
      },
      {
        codigo: 'ISO 14001',
        nombre: 'Gestión Ambiental',
        porQue: 'Exigido por cadenas globales de suministro y como ventaja competitiva en sectores agroindustriales y manufactureros.',
        href: '/normas/iso-14001',
      },
    ],
    sectores: ['Farmacéutica', 'Agroindustria', 'Manufactura', 'Alimentos y Bebidas', 'Automotriz', 'Servicios Profesionales'],
    stats: [
      { value: '+7,000', label: 'empresas certificadas en ISO 9001 en Argentina' },
      { value: 'IRAM', label: 'referente de normalización desde 1935' },
      { value: 'Top 3', label: 'industria farmacéutica más grande de LATAM' },
    ],
    metaTitle: 'Software de Gestión de Calidad en Argentina — ISO 9001, ISO 22000, GMP | Consultto',
    metaDescription: 'Certifícate en ISO 9001, ISO 22000, GMP Farmacéutica, ISO 14001 y más en Argentina. Plataforma de gestión normativa con IA para empresas argentinas. Sin consultores externos.',
  },
  {
    slug: 'chile',
    nombre: 'Chile',
    organismoLocal: 'INN',
    organismoDesc: 'Instituto Nacional de Normalización',
    heroTitle: 'Software de gestión de calidad en Chile',
    heroSubtitle: 'Certifícate en ISO 9001, ISO 14001, ISO 45001 y más con una plataforma diseñada para empresas chilenas. Sin consultores externos, sin papeles.',
    contexto: 'En Chile, la certificación ISO es un requisito frecuente para proveedores de grandes empresas mineras, agroindustriales y de servicios, así como para cumplir con exigencias de licitaciones públicas a través de ChileCompra. El INN es el organismo nacional de normalización, y las certificaciones son emitidas por organismos acreditados ante el INN. Los sectores de minería, agroindustria y servicios financieros son los que más demandan certificaciones de calidad y medio ambiente.',
    normasDestacadas: [
      {
        codigo: 'ISO 9001',
        nombre: 'Gestión de Calidad',
        porQue: 'Requisito habitual en licitaciones de ChileCompra y para ser proveedor homologado de grandes empresas mineras y retail.',
        href: '/normas/iso-9001',
      },
      {
        codigo: 'ISO 14001',
        nombre: 'Gestión Ambiental',
        porQue: 'Obligatorio para proveedores del sector minero y empresas con compromisos de sustentabilidad ambiental.',
        href: '/normas/iso-14001',
      },
      {
        codigo: 'ISO 45001',
        nombre: 'Seguridad Laboral',
        porQue: 'Crítico en minería, construcción y manufactura. Reduce accidentes y es exigido por grandes operadores.',
        href: '/normas/iso-45001',
      },
      {
        codigo: 'ISO 27001',
        nombre: 'Seguridad de la Información',
        porQue: 'Creciente demanda en el sector financiero, tecnología y servicios profesionales para proteger datos de clientes.',
        href: '/normas/iso-27001',
      },
    ],
    sectores: ['Minería', 'Agroindustria', 'Construcción', 'Servicios Financieros', 'Tecnología', 'Retail'],
    stats: [
      { value: '+5,000', label: 'empresas certificadas en ISO 9001 en Chile' },
      { value: '1er lugar', label: 'en LATAM en facilidad para hacer negocios' },
      { value: '60%', label: 'de proveedores mineros requieren ISO 9001 o ISO 14001' },
    ],
    metaTitle: 'Software de Gestión de Calidad en Chile — ISO 9001, ISO 14001, ISO 45001 | Consultto',
    metaDescription: 'Certifícate en ISO 9001, ISO 14001, ISO 45001, ISO 27001 y más en Chile. Plataforma de gestión normativa con IA para empresas chilenas. Sin consultores externos.',
  },
  {
    slug: 'peru',
    nombre: 'Perú',
    organismoLocal: 'INACAL',
    organismoDesc: 'Instituto Nacional de Calidad',
    heroTitle: 'Software de gestión de calidad en Perú',
    heroSubtitle: 'Certifícate en ISO 9001, HACCP, ISO 45001 y más con una plataforma diseñada para empresas peruanas. Sin consultores externos, sin papeles.',
    contexto: 'En Perú, la certificación ISO es un habilitador clave para acceder a licitaciones públicas, exportar productos agroindustriales y cumplir con los estándares de seguridad en minería y construcción. El INACAL es el organismo nacional de normalización creado en 2014. Los sectores de agroindustria, minería y construcción son los que más demandan certificaciones ISO, especialmente ISO 9001, ISO 45001 y HACCP.',
    normasDestacadas: [
      {
        codigo: 'ISO 9001',
        nombre: 'Gestión de Calidad',
        porQue: 'Requisito frecuente en licitaciones públicas del Estado peruano y para homologación de proveedores en minería.',
        href: '/normas/iso-9001',
      },
      {
        codigo: 'HACCP',
        nombre: 'Inocuidad Alimentaria',
        porQue: 'Obligatorio para exportadores de alimentos. Perú es uno de los mayores exportadores de espárragos, arándanos y quinua del mundo.',
        href: '/normas/haccp',
      },
      {
        codigo: 'ISO 45001',
        nombre: 'Seguridad Laboral',
        porQue: 'Crítico en minería y construcción, dos de los sectores más importantes de la economía peruana.',
        href: '/normas/iso-45001',
      },
      {
        codigo: 'ISO 14001',
        nombre: 'Gestión Ambiental',
        porQue: 'Exigido por clientes internacionales y como requisito de responsabilidad ambiental en minería y agroindustria.',
        href: '/normas/iso-14001',
      },
    ],
    sectores: ['Minería', 'Agroindustria', 'Construcción', 'Pesca y Acuicultura', 'Manufactura', 'Servicios'],
    stats: [
      { value: '+4,000', label: 'empresas certificadas en ISO 9001 en Perú' },
      { value: 'INACAL', label: 'organismo nacional de calidad desde 2014' },
      { value: 'Top 5', label: 'exportador mundial de productos agroindustriales' },
    ],
    metaTitle: 'Software de Gestión de Calidad en Perú — ISO 9001, HACCP, ISO 45001 | Consultto',
    metaDescription: 'Certifícate en ISO 9001, HACCP, ISO 45001, ISO 14001 y más en Perú. Plataforma de gestión normativa con IA para empresas peruanas. Sin consultores externos.',
  },
]

export function getPais(slug: string): PaisData | undefined {
  return PAISES.find((p) => p.slug === slug)
}
