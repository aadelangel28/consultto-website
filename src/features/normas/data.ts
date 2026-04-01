export interface NormaData {
  slug: string
  code: string
  version: string
  fullName: string
  categoria: string
  tagline: string
  description: string
  scope: string
  industrias: string[]
  stats: { value: string; label: string }[]
  requisitos: { clause: string; title: string; description: string }[]
  comoGestiona: { title: string; description: string }[]
  ctaTitle: string
  ctaSubtitle: string
}

export const NORMAS: NormaData[] = [
  {
    slug: 'iso-9001',
    code: 'ISO 9001',
    version: ':2015',
    fullName: 'Sistemas de Gestión de la Calidad',
    categoria: 'Calidad',
    tagline: 'La norma de calidad más reconocida del mundo, implementada sin papeles ni fricción.',
    description:
      'ISO 9001:2015 establece los requisitos para un sistema de gestión de la calidad orientado a la satisfacción del cliente y la mejora continua. Es la norma de referencia para cualquier organización que busca demostrar capacidad para entregar productos y servicios conformes de forma consistente.',
    scope: 'Cualquier organización, sin importar tamaño, sector o tipo de producto o servicio.',
    industrias: ['Manufactura', 'Servicios Profesionales', 'Construcción', 'Tecnología', 'Logística'],
    stats: [
      { value: '1.1M+', label: 'empresas certificadas en el mundo' },
      { value: '170+', label: 'países con organizaciones certificadas' },
      { value: '98%', label: 'de clientes exigen ISO 9001 a sus proveedores' },
    ],
    requisitos: [
      {
        clause: '§4.1',
        title: 'Contexto de la organización',
        description:
          'Identificar factores internos y externos que afectan la capacidad de lograr los resultados previstos del SGC, incluyendo partes interesadas y sus requisitos.',
      },
      {
        clause: '§6.1',
        title: 'Acciones para abordar riesgos y oportunidades',
        description:
          'Planificar acciones para abordar los riesgos y oportunidades identificados, garantizando que el SGC logre sus resultados y promueva la mejora continua.',
      },
      {
        clause: '§8.4',
        title: 'Control de procesos externos',
        description:
          'Asegurar que los procesos, productos y servicios proporcionados externamente cumplen los requisitos establecidos mediante evaluación y seguimiento de proveedores.',
      },
      {
        clause: '§10.2',
        title: 'No conformidad y acción correctiva',
        description:
          'Gestionar las no conformidades, implementar acciones correctivas, revisar su eficacia y documentar evidencia para prevenir la recurrencia.',
      },
    ],
    comoGestiona: [
      {
        title: 'Control documental centralizado',
        description:
          'Todos los documentos del SGC viven en Consultto con control de versiones, flujos de aprobación y distribución automática. Sin carpetas compartidas ni versiones desactualizadas en planta.',
      },
      {
        title: 'Gestión de No conformidades con causa raíz',
        description:
          'Registra no conformidades, ejecuta análisis de causa raíz con metodologías guiadas (5 Porqués, Ishikawa) y da seguimiento automático hasta el cierre verificado con evidencia.',
      },
      {
        title: 'Auditorías internas por cláusula',
        description:
          'Planifica el programa anual, ejecuta checklists estructurados por cláusula ISO 9001 y genera reportes de hallazgos listos para la revisión por la dirección.',
      },
      {
        title: 'Indicadores y revisión por la dirección',
        description:
          'Panel de KPIs con satisfacción del cliente, eficacia de acciones correctivas y cumplimiento de objetivos de calidad. Genera el informe de revisión por la dirección en un clic.',
      },
    ],
    ctaTitle: 'Tu certificación ISO 9001, sin el caos documental.',
    ctaSubtitle:
      'Implementa, certifícate y mantén tu sistema de calidad operando — todo desde una sola plataforma.',
  },
  {
    slug: 'iso-14001',
    code: 'ISO 14001',
    version: ':2015',
    fullName: 'Sistemas de Gestión Ambiental',
    categoria: 'Medio Ambiente',
    tagline: 'Cumple tus compromisos ambientales y demuéstralo con evidencia sólida ante cualquier auditoría.',
    description:
      'ISO 14001:2015 establece los criterios para un sistema de gestión ambiental que permite a las organizaciones mejorar su desempeño medioambiental mediante un uso más eficiente de los recursos. Ayuda a las empresas a identificar, gestionar, monitorear y controlar sus impactos ambientales de manera integral.',
    scope: 'Organizaciones de cualquier tipo que buscan gestionar sus responsabilidades ambientales.',
    industrias: ['Manufactura', 'Construcción', 'Minería', 'Energía', 'Logística'],
    stats: [
      { value: '420K+', label: 'certificados ISO 14001 activos globalmente' },
      { value: '60%', label: 'de reducción de residuos reportada por certificados' },
      { value: '40+', label: 'requisitos legales ambientales integrados' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Aspectos e impactos ambientales',
        description:
          'Identificar los aspectos ambientales de las actividades, productos y servicios que la organización puede controlar, y determinar cuáles son significativos.',
      },
      {
        clause: '§6.1.3',
        title: 'Obligaciones de cumplimiento',
        description:
          'Determinar y tener acceso a los requisitos legales y otros requisitos ambientales aplicables, y cómo aplican a la organización.',
      },
      {
        clause: '§8.1',
        title: 'Planificación y control operacional',
        description:
          'Establecer controles para gestionar los aspectos ambientales significativos, incluyendo situaciones de emergencia y respuesta ante derrames o accidentes.',
      },
      {
        clause: '§9.1',
        title: 'Seguimiento y medición',
        description:
          'Monitorear, medir, analizar y evaluar el desempeño ambiental mediante indicadores definidos, asegurando equipos de medición calibrados y registros verificables.',
      },
    ],
    comoGestiona: [
      {
        title: 'Matriz de aspectos e impactos',
        description:
          'Identifica, evalúa y prioriza aspectos ambientales con criterios de significancia. Actualización automática al cambiar procesos y alertas cuando cambia la legislación aplicable.',
      },
      {
        title: 'Registro de requisitos legales',
        description:
          'Centraliza todas las obligaciones de cumplimiento ambiental — leyes, permisos, normas — con seguimiento de vencimientos y evidencia de cumplimiento por período.',
      },
      {
        title: 'Monitoreo de objetivos ambientales',
        description:
          'Define metas de reducción de huella ambiental, registra métricas periódicas y visualiza el progreso en tableros ejecutivos listos para auditoría.',
      },
      {
        title: 'Planes de emergencia y simulacros',
        description:
          'Gestiona los planes de respuesta ambiental, programa simulacros y registra la evidencia de preparación y entrenamiento del personal.',
      },
    ],
    ctaTitle: 'Gestión ambiental sin burocracia, con evidencia real.',
    ctaSubtitle:
      'Consultto convierte tu SGA en un sistema vivo que cumple, mejora y se prepara para cualquier auditoría.',
  },
  {
    slug: 'iso-45001',
    code: 'ISO 45001',
    version: ':2018',
    fullName: 'Sistemas de Gestión de la Seguridad y Salud en el Trabajo',
    categoria: 'Seguridad Laboral',
    tagline: 'Protege a tu equipo y demuestra un sistema de seguridad que realmente funciona.',
    description:
      'ISO 45001:2018 especifica los requisitos para un sistema de gestión de la seguridad y salud en el trabajo, con el propósito de prevenir lesiones y deterioro de la salud relacionados con el trabajo. Es el estándar internacional que reemplazó a OHSAS 18001 y adopta el enfoque de liderazgo y participación de los trabajadores.',
    scope: 'Todo tipo de organizaciones, independientemente de su tamaño, industria o naturaleza de las actividades.',
    industrias: ['Manufactura', 'Construcción', 'Minería', 'Logística', 'Industria Química'],
    stats: [
      { value: '2.78M', label: 'trabajadores mueren anualmente por accidentes laborales en el mundo' },
      { value: '85%', label: 'de accidentes prevenibles con un SGS efectivo' },
      { value: '50%+', label: 'de reducción de incidentes reportada por certificados' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Identificación de peligros y evaluación de riesgos',
        description:
          'Establecer, implementar y mantener procesos para identificar peligros en forma proactiva, evaluar riesgos y determinar los controles necesarios.',
      },
      {
        clause: '§7.4',
        title: 'Comunicación y participación de trabajadores',
        description:
          'Establecer mecanismos de comunicación interna y externa sobre SST, y asegurar la participación y consulta activa de los trabajadores en las decisiones del sistema.',
      },
      {
        clause: '§8.2',
        title: 'Preparación y respuesta ante emergencias',
        description:
          'Preparar planes de respuesta para situaciones de emergencia potenciales, incluyendo evacuación, primeros auxilios y comunicación con autoridades.',
      },
      {
        clause: '§10.1',
        title: 'Incidentes, no conformidades y acciones correctivas',
        description:
          'Investigar incidentes y no conformidades de SST, implementar acciones correctivas basadas en análisis de causa raíz y evaluar su eficacia.',
      },
    ],
    comoGestiona: [
      {
        title: 'Registro y seguimiento de incidentes',
        description:
          'Captura accidentes, incidentes y casi-accidentes en tiempo real desde cualquier dispositivo. El sistema guía la investigación de causa raíz y hace seguimiento automático de las acciones hasta el cierre.',
      },
      {
        title: 'Identificación de peligros y controles',
        description:
          'Gestiona la matriz IPER con criterios estandarizados, vincula peligros a controles operacionales y genera alertas cuando vencen revisiones periódicas.',
      },
      {
        title: 'Gestión de competencias y capacitaciones',
        description:
          'Registra los perfiles de riesgo por puesto, planifica capacitaciones obligatorias de SST y genera evidencia de entrenamiento lista para inspecciones de autoridades.',
      },
      {
        title: 'Inspecciones de seguridad y auditorías',
        description:
          'Ejecuta inspecciones de campo con checklists digitales, asigna hallazgos a responsables y consolida el programa anual de auditorías internas de SST.',
      },
    ],
    ctaTitle: 'Un sistema de seguridad que protege y certifica.',
    ctaSubtitle:
      'Con Consultto, la gestión de SST deja de ser reactiva. Prevén, registra y demuestra mejora continua.',
  },
  {
    slug: 'iso-22000',
    code: 'ISO 22000',
    version: ':2018',
    fullName: 'Sistemas de Gestión de la Inocuidad Alimentaria',
    categoria: 'Inocuidad Alimentaria',
    tagline: 'Controla los peligros alimentarios en cada etapa de la cadena y llega a la auditoría con confianza.',
    description:
      'ISO 22000:2018 define los requisitos para un sistema de gestión de la inocuidad alimentaria que integra los principios HACCP con los programas de requisitos previos. Aplica a cualquier organización en la cadena alimentaria que necesita demostrar su capacidad de controlar peligros y garantizar que los alimentos son seguros para el consumo.',
    scope: 'Toda organización en la cadena alimentaria: productores, procesadores, distribuidores, transportistas y minoristas.',
    industrias: ['Alimentos y Bebidas', 'Agricultura', 'Logística Alimentaria', 'Restauración', 'Retail Alimentario'],
    stats: [
      { value: '42K+', label: 'certificados ISO 22000 en más de 140 países' },
      { value: '600M', label: 'personas afectadas por enfermedades de transmisión alimentaria cada año' },
      { value: '3x', label: 'más exportaciones a mercados premium con certificación' },
    ],
    requisitos: [
      {
        clause: '§6.1',
        title: 'Programas de prerrequisitos (PPR)',
        description:
          'Establecer, implementar, mantener y actualizar los PPR necesarios para controlar la probabilidad de introducción de peligros relacionados con la inocuidad alimentaria.',
      },
      {
        clause: '§8.5',
        title: 'Análisis de peligros',
        description:
          'Realizar el análisis de peligros basado en la información preliminar para determinar cuáles son significativos y qué nivel de control es necesario.',
      },
      {
        clause: '§8.8',
        title: 'Verificación del plan de control de peligros',
        description:
          'Establecer, implementar y mantener actividades de verificación que confirmen que el plan de control de peligros se está aplicando eficazmente.',
      },
      {
        clause: '§9.2',
        title: 'Auditoría interna del SGIA',
        description:
          'Realizar auditorías internas a intervalos planificados para evaluar que el sistema de gestión de inocuidad se implementa y se mantiene eficazmente.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plan HACCP y análisis de peligros',
        description:
          'Construye el plan HACCP digital con identificación de peligros biológicos, químicos y físicos, determinación de PCC, límites críticos y acciones correctivas integradas.',
      },
      {
        title: 'Control de PPR operacionales',
        description:
          'Registra el seguimiento diario de programas de prerrequisitos (limpieza, control de plagas, cadena de frío) con alertas automáticas ante desviaciones.',
      },
      {
        title: 'Trazabilidad de lote a lote',
        description:
          'Consulta el historial completo de cualquier lote — desde materias primas hasta distribución — en segundos. Esencial para retiros de mercado eficientes.',
      },
      {
        title: 'Gestión de no conformidades alimentarias',
        description:
          'Registra productos no conformes, gestiona disposiciones (rechazo, reproceso, liberación condicional) y genera evidencia de segregación para auditorías.',
      },
    ],
    ctaTitle: 'Inocuidad alimentaria gestionada con precisión.',
    ctaSubtitle:
      'Controla peligros, documenta evidencia y certifícate en ISO 22000 sin el caos de las hojas de cálculo.',
  },
  {
    slug: 'iso-13485',
    code: 'ISO 13485',
    version: ':2016',
    fullName: 'Sistemas de Gestión de la Calidad para Dispositivos Médicos',
    categoria: 'Dispositivos Médicos',
    tagline: 'Cumple con los requisitos regulatorios más exigentes del mundo médico, sin perder el ritmo de innovación.',
    description:
      'ISO 13485:2016 especifica los requisitos para un sistema de gestión de la calidad aplicado a la fabricación y comercialización de dispositivos médicos. Es un requisito esencial para acceder a los mercados de la Unión Europea (marcado CE) y satisface en gran parte los requisitos del FDA QSR de EE.UU.',
    scope: 'Fabricantes, distribuidores, importadores y proveedores de servicios en la cadena de valor de dispositivos médicos.',
    industrias: ['Dispositivos Médicos', 'Farmacéutica', 'Diagnóstico In Vitro', 'Salud Digital', 'Manufactura Médica'],
    stats: [
      { value: '28K+', label: 'organizaciones certificadas ISO 13485 globalmente' },
      { value: '€115B', label: 'valor del mercado europeo de dispositivos médicos' },
      { value: '100%', label: 'de fabricantes MD requieren ISO 13485 para marcado CE' },
    ],
    requisitos: [
      {
        clause: '§4.2',
        title: 'Requisitos de documentación y archivo',
        description:
          'Mantener un sistema de documentación riguroso que incluya el expediente del dispositivo, procedimientos de control, registros de fabricación y trazabilidad por número de serie o lote.',
      },
      {
        clause: '§7.3',
        title: 'Diseño y desarrollo',
        description:
          'Planificar y controlar el diseño del dispositivo médico con entradas, salidas, revisiones, verificación, validación y control de cambios documentados.',
      },
      {
        clause: '§8.2.1',
        title: 'Retroalimentación y vigilancia post-mercado',
        description:
          'Recopilar información sobre la experiencia post-producción del dispositivo, incluyendo quejas, incidentes y reportes de vigilancia post-comercialización.',
      },
      {
        clause: '§8.5.2',
        title: 'Acciones correctivas y acciones preventivas',
        description:
          'Implementar un proceso robusto de No conformidades que identifique causas raíz, defina e implemente acciones, y verifique su eficacia con evidencia objetiva.',
      },
    ],
    comoGestiona: [
      {
        title: 'Expediente del dispositivo médico',
        description:
          'Centraliza toda la documentación técnica del dispositivo: diseño, especificaciones, validaciones, marcado y certificados. Acceso controlado con auditoría de cambios completa.',
      },
      {
        title: 'Gestión de quejas y vigilancia post-mercado',
        description:
          'Captura quejas de clientes, las clasifica según su criticidad, vincula con No conformidad si aplica y genera los reportes regulatorios para autoridades sanitarias.',
      },
      {
        title: 'Control de No conformidades con trazabilidad regulatoria',
        description:
          'Gestiona acciones correctivas y preventivas con los campos requeridos por ISO 13485, FDA y MDR europeo. Evidencia siempre disponible para inspecciones.',
      },
      {
        title: 'Calificación de proveedores críticos',
        description:
          'Evalúa, califica y re-evalúa periódicamente a proveedores de componentes críticos. Genera la lista de proveedores aprobados y el historial de desempeño.',
      },
    ],
    ctaTitle: 'Gestión de calidad para dispositivos médicos sin fricciones regulatorias.',
    ctaSubtitle:
      'Consultto te da el sistema documental y la trazabilidad que exigen FDA, MDR y los organismos notificados.',
  },
  {
    slug: 'iatf-16949',
    code: 'IATF 16949',
    version: ':2016',
    fullName: 'Sistema de Gestión de la Calidad para la Industria Automotriz',
    categoria: 'Calidad Automotriz',
    tagline: 'El estándar que abre puertas a OEM globales, gestionado sin la complejidad que lo caracteriza.',
    description:
      'IATF 16949:2016 es el estándar de gestión de calidad específico para la industria automotriz, desarrollado por el International Automotive Task Force. Incorpora los requisitos de ISO 9001:2015 y añade requerimientos específicos de la cadena de suministro automotriz, incluyendo herramientas de calidad como APQP, PPAP, FMEA, MSA y SPC.',
    scope: 'Fabricantes de componentes, sistemas y materiales para la cadena de suministro automotriz (OEM y Tier 1/2).',
    industrias: ['Automotriz', 'Manufactura de Componentes', 'Estampado Metálico', 'Plásticos Automotrices', 'Electrónica Automotriz'],
    stats: [
      { value: '69K+', label: 'sitios certificados IATF 16949 en el mundo' },
      { value: '4M+', label: 'empleados en organizaciones certificadas' },
      { value: '100%', label: 'de OEM globales exigen IATF 16949 a Tier 1' },
    ],
    requisitos: [
      {
        clause: '§8.3',
        title: 'Planificación avanzada de la calidad (APQP)',
        description:
          'Aplicar el proceso de planeación avanzada de la calidad del producto para gestionar el desarrollo de nuevos productos o cambios, integrando las entradas del cliente.',
      },
      {
        clause: '§8.6.5',
        title: 'Proceso de aprobación de partes de producción (PPAP)',
        description:
          'Obtener la aprobación del cliente mediante el proceso PPAP antes de lanzar producción de partes nuevas o modificadas, con toda la documentación requerida.',
      },
      {
        clause: '§8.5.6',
        title: 'Control de cambios',
        description:
          'Gestionar los cambios en procesos de manufactura, instalaciones y equipos con notificación al cliente y re-validación antes de la implementación.',
      },
      {
        clause: '§10.2',
        title: 'Gestión de no conformidades y devoluciones',
        description:
          'Responder a no conformidades de campo y devoluciones de clientes con análisis de causa raíz documentado y acciones correctivas dentro de los plazos del cliente.',
      },
    ],
    comoGestiona: [
      {
        title: 'Gestión de PPAP y aprobación de partes',
        description:
          'Organiza los 18 elementos del PPAP por parte y número de pieza, gestiona revisiones de clientes y mantiene el archivo de aprobaciones listo para auditorías del OEM.',
      },
      {
        title: 'FMEA de proceso y producto',
        description:
          'Construye y mantiene los análisis de modo y efecto de falla con RPN, acciones de reducción de riesgo y re-evaluación posterior. Vinculado al control de cambios.',
      },
      {
        title: 'Respuesta a problemas de campo (8D)',
        description:
          'Gestiona los reportes de problemas de cliente con el formato 8D, seguimiento de plazos de respuesta y escalamiento automático ante riesgos de penalización.',
      },
      {
        title: 'Control estadístico de proceso (SPC)',
        description:
          'Registra datos de SPC por característica especial, calcula Cpk/Cp automáticamente y alerta cuando el proceso se desvía de los límites de control.',
      },
    ],
    ctaTitle: 'IATF 16949 gestionado con la precisión que los OEM exigen.',
    ctaSubtitle:
      'Documentación, PPAP, FMEA y 8D centralizados. Tu cadena de suministro automotriz, siempre lista para auditoría.',
  },
  {
    slug: 'iso-50001',
    code: 'ISO 50001',
    version: ':2018',
    fullName: 'Sistemas de Gestión de la Energía',
    categoria: 'Energía',
    tagline: 'Reduce tu consumo energético con un sistema que mide, analiza y mejora en ciclos continuos.',
    description:
      'ISO 50001:2018 establece los requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de la energía. Ayuda a las organizaciones a crear políticas de eficiencia energética, fijar metas y objetivos medibles, y tomar decisiones basadas en datos para reducir el consumo y la factura energética.',
    scope: 'Organizaciones de cualquier sector que utilizan energía y buscan mejorar continuamente su desempeño energético.',
    industrias: ['Manufactura Intensiva', 'Hospitales', 'Centros de Datos', 'Hoteles', 'Edificios Comerciales'],
    stats: [
      { value: '18K+', label: 'organizaciones certificadas ISO 50001' },
      { value: '30%', label: 'de reducción en consumo energético promedio reportada' },
      { value: '10x', label: 'retorno de inversión típico en el primer año de implementación' },
    ],
    requisitos: [
      {
        clause: '§6.3',
        title: 'Revisión energética y línea de base',
        description:
          'Realizar un análisis del uso y consumo de energía, identificar las áreas de uso significativo y establecer una línea de base energética para medir mejoras.',
      },
      {
        clause: '§6.4',
        title: 'Indicadores de desempeño energético (IDE)',
        description:
          'Determinar los IDEs apropiados para medir el desempeño energético y establecer metodologías para su medición, monitoreo y análisis periódico.',
      },
      {
        clause: '§8.1',
        title: 'Planificación y control operacional energético',
        description:
          'Establecer criterios operacionales para los usos significativos de energía y comunicarlos a quienes influyen en el desempeño energético de la organización.',
      },
      {
        clause: '§9.1',
        title: 'Monitoreo, medición y análisis',
        description:
          'Monitorear y medir las características clave que determinan el desempeño energético, incluyendo los IDEs, el progreso hacia objetivos y la evaluación del consumo real vs. esperado.',
      },
    ],
    comoGestiona: [
      {
        title: 'Tablero de indicadores energéticos',
        description:
          'Visualiza los IDEs en tiempo real con comparativas contra la línea de base, desglose por área o proceso, y tendencias históricas para la toma de decisiones.',
      },
      {
        title: 'Registro de oportunidades de mejora energética',
        description:
          'Captura proyectos de eficiencia, calcula el ahorro estimado vs. real y prioriza según ROI. El sistema hace seguimiento hasta la verificación del ahorro obtenido.',
      },
      {
        title: 'Gestión de medidores y fuentes de energía',
        description:
          'Administra el inventario de medidores, programa calibraciones y concentra las lecturas de electricidad, gas, vapor y otras fuentes en un solo repositorio.',
      },
      {
        title: 'Planes de acción y objetivos energéticos',
        description:
          'Define metas de reducción por período, asigna responsables, programa revisiones y genera los informes de desempeño energético para la revisión por la dirección.',
      },
    ],
    ctaTitle: 'Menos consumo energético, más competitividad.',
    ctaSubtitle:
      'Implementa ISO 50001 con un sistema que realmente mide, identifica desperdicios y documenta el ahorro.',
  },
  {
    slug: 'iso-27001',
    code: 'ISO 27001',
    version: ':2022',
    fullName: 'Sistemas de Gestión de la Seguridad de la Información',
    categoria: 'Seguridad de la Información',
    tagline: 'Protege los activos de información de tu organización y demuestra ciberseguridad de clase mundial.',
    description:
      'ISO 27001:2022 especifica los requisitos para establecer, implementar, mantener y mejorar un sistema de gestión de la seguridad de la información (SGSI). Incluye 93 controles organizados en cuatro categorías que protegen la confidencialidad, integridad y disponibilidad de la información.',
    scope: 'Organizaciones de cualquier sector que gestionan información sensible: clientes, empleados, propiedad intelectual o datos financieros.',
    industrias: ['Tecnología y Software', 'Servicios Financieros', 'Salud Digital', 'Gobierno', 'Consultoría'],
    stats: [
      { value: '70K+', label: 'certificados ISO 27001 activos en el mundo' },
      { value: '$4.45M', label: 'costo promedio global de una brecha de datos en 2023' },
      { value: '93', label: 'controles de seguridad en la versión 2022' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Evaluación de riesgos de seguridad de la información',
        description:
          'Definir y aplicar un proceso de evaluación de riesgos de SI que identifique, analice y evalúe los riesgos asociados a los activos de información de la organización.',
      },
      {
        clause: '§6.1.3',
        title: 'Tratamiento de riesgos',
        description:
          'Seleccionar opciones de tratamiento de riesgos apropiadas, determinar los controles del Anexo A necesarios y preparar una declaración de aplicabilidad (SoA).',
      },
      {
        clause: '§8.2',
        title: 'Evaluación de riesgos periódica',
        description:
          'Realizar evaluaciones de riesgos a intervalos planificados o cuando ocurran cambios significativos en la organización o su contexto de seguridad.',
      },
      {
        clause: '§A.5',
        title: 'Controles organizacionales (Anexo A)',
        description:
          'Implementar los 37 controles organizacionales del Anexo A que apliquen según la declaración de aplicabilidad, incluyendo políticas, clasificación de activos e inteligencia de amenazas.',
      },
    ],
    comoGestiona: [
      {
        title: 'Inventario y clasificación de activos de información',
        description:
          'Registra todos los activos de información con su propietario, clasificación de confidencialidad y valoración. La base para un análisis de riesgos riguroso y documentado.',
      },
      {
        title: 'Evaluación y tratamiento de riesgos de SI',
        description:
          'Ejecuta la metodología de riesgos ISO 27001 con matrices de probabilidad e impacto, opciones de tratamiento y Plan de Tratamiento de Riesgos (PTR) vinculado a controles.',
      },
      {
        title: 'Gestión de incidentes de seguridad',
        description:
          'Registra, clasifica e investiga incidentes de seguridad de la información con línea temporal, impacto evaluado y acciones correctivas conforme al Anexo A.',
      },
      {
        title: 'Declaración de aplicabilidad (SoA) actualizada',
        description:
          'Mantiene la SoA con el estado de implementación de cada control del Anexo A, la justificación de inclusión/exclusión y la evidencia de aplicación.',
      },
    ],
    ctaTitle: 'Seguridad de la información certificada y documentada.',
    ctaSubtitle:
      'Con Consultto, tu SGSI es una ventaja competitiva — no una carga de cumplimiento.',
  },
  {
    slug: 'fssc-22000',
    code: 'FSSC 22000',
    version: ' v6',
    fullName: 'Food Safety System Certification',
    categoria: 'Inocuidad Alimentaria',
    tagline: 'La certificación de inocuidad alimentaria más reconocida por los grandes retailers globales.',
    description:
      'FSSC 22000 v6 es un esquema de certificación de inocuidad alimentaria reconocido por el Global Food Safety Initiative (GFSI) que combina ISO 22000, los requisitos específicos del sector (ISO/TS) y requisitos adicionales FSSC. Es exigida por retailers líderes mundiales como Walmart, Carrefour y Tesco a sus proveedores.',
    scope: 'Organizaciones en la cadena de suministro alimentario: fabricantes, empacadores, transportistas y proveedores de servicios alimentarios.',
    industrias: ['Alimentos y Bebidas', 'Empaque Alimentario', 'Ingredientes y Aditivos', 'Logística Alimentaria', 'Agricultura'],
    stats: [
      { value: '37K+', label: 'sitios certificados FSSC 22000 en el mundo' },
      { value: '180+', label: 'países donde está presente la certificación' },
      { value: '100%', label: 'de reconocimiento GFSI para acceso a retailers globales' },
    ],
    requisitos: [
      {
        clause: 'ISO 22000 §8.5',
        title: 'Sistema de gestión de peligros (HACCP)',
        description:
          'Implementar un sistema HACCP completo con análisis de peligros, determinación de PCC, límites críticos, monitoreo y acciones correctivas documentadas.',
      },
      {
        clause: 'ISO/TS §2.1',
        title: 'Programas de prerrequisitos específicos del sector',
        description:
          'Implementar los PPR específicos del sector alimentario (ISO/TS 22002-1 para fabricación de alimentos) que cubran infraestructura, saneamiento y control de alérgenos.',
      },
      {
        clause: 'FSSC §2.5',
        title: 'Control de alérgenos',
        description:
          'Documentar el programa de gestión de alérgenos incluyendo evaluación de riesgos, validación de limpieza, etiquetado y comunicación en la cadena de suministro.',
      },
      {
        clause: 'FSSC §2.7',
        title: 'Supervisión de servicios y compras',
        description:
          'Gestionar la aprobación y seguimiento de proveedores de materias primas, materiales de empaque y servicios con impacto en la inocuidad alimentaria.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plan HACCP y monitoreo de PCC',
        description:
          'Gestiona el plan HACCP digital con todos los peligros, PCC, límites críticos y acciones correctivas. Registra el monitoreo diario y alerta automáticamente ante desviaciones de límites.',
      },
      {
        title: 'Control de alérgenos y trazabilidad',
        description:
          'Gestiona la declaración de alérgenos por producto, el programa de limpieza validado y la trazabilidad de materias primas alérgenas desde el proveedor hasta el producto terminado.',
      },
      {
        title: 'Auditorías internas FSSC 22000',
        description:
          'Checklists de auditoría estructurados para los requisitos ISO 22000, ISO/TS y adicionales FSSC v6. Genera reportes comparables con los de una auditoría de certificación.',
      },
      {
        title: 'Gestión de proveedores alimentarios',
        description:
          'Aprueba, evalúa y re-evalúa proveedores con criterios de inocuidad, gestiona certificados de proveedor y genera la lista de proveedores aprobados actualizada.',
      },
    ],
    ctaTitle: 'Certifícate en FSSC 22000 y abre puertas a los grandes retailers.',
    ctaSubtitle:
      'Consultto organiza todos los requisitos FSSC 22000 en un sistema digital que tu equipo puede operar sin depender de consultores.',
  },
  {
    slug: 'brc-food',
    code: 'BRC Food',
    version: ' Issue 9',
    fullName: 'Global Standard for Food Safety',
    categoria: 'Seguridad Alimentaria',
    tagline: 'El estándar del retail británico que abre mercados premium en Europa y el mundo anglosajón.',
    description:
      'BRC Food Issue 9 es el estándar de seguridad alimentaria del British Retail Consortium, reconocido por GFSI y requerido por los principales retailers del Reino Unido y Europa. Define requisitos rigurosos de seguridad alimentaria, calidad, legalidad e integridad del proceso productivo para proveedores de alimentos.',
    scope: 'Fabricantes y procesadores de alimentos que suministran a retailers, especialmente en mercados del Reino Unido, Europa y países anglosajones.',
    industrias: ['Procesamiento de Alimentos', 'Productos de Panadería', 'Cárnicos y Lácteos', 'Bebidas', 'Congelados'],
    stats: [
      { value: '30K+', label: 'sitios certificados BRC Food en el mundo' },
      { value: '130+', label: 'países con empresas certificadas BRC' },
      { value: '£180B', label: 'en compras de retailers que exigen BRC a sus proveedores' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Plan de seguridad alimentaria (HACCP)',
        description:
          'Desarrollar e implementar un plan HACCP completo basado en los principios del Codex Alimentarius, con análisis documentado de todos los peligros significativos.',
      },
      {
        clause: '§3',
        title: 'Sistema de gestión de la seguridad alimentaria',
        description:
          'Mantener un sistema documental actualizado que cubra políticas, manuales, procedimientos y registros del proceso de fabricación conforme a BRC Issue 9.',
      },
      {
        clause: '§5',
        title: 'Control de productos',
        description:
          'Implementar controles de alérgenos, autenticidad de productos, gestión de reclamaciones, trazabilidad y procedimientos de retiro del mercado documentados y probados.',
      },
      {
        clause: '§6',
        title: 'Control del proceso',
        description:
          'Establecer controles documentados para todas las etapas del proceso productivo, incluyendo parámetros críticos, instrucciones de trabajo y registros de control.',
      },
    ],
    comoGestiona: [
      {
        title: 'Documentación BRC Issue 9 estructurada',
        description:
          'Organiza todos los documentos del sistema BRC por sección del estándar. Control de versiones, aprobaciones y distribución digitalizada para planta y oficinas.',
      },
      {
        title: 'Programa de auditorías internas BRC',
        description:
          'Ejecuta auditorías internas con checklists específicos para cada sección del BRC Issue 9. Los hallazgos se convierten automáticamente en no conformidades con seguimiento.',
      },
      {
        title: 'Gestión de reclamaciones de cliente',
        description:
          'Registra, clasifica y analiza tendencias en reclamaciones. Genera los KPIs de reclamaciones que los auditores BRC revisan durante la certificación.',
      },
      {
        title: 'Control de alérgenos y autenticidad',
        description:
          'Gestiona el programa de alérgenos, la declaración de autenticidad de ingredientes y los ensayos de verificación requeridos por BRC Issue 9.',
      },
    ],
    ctaTitle: 'BRC Food Issue 9 gestionado sin el caos documental.',
    ctaSubtitle:
      'Llega a tu auditoría BRC con toda la evidencia organizada y tu equipo preparado para responder cualquier pregunta.',
  },
  {
    slug: 'ifs-food',
    code: 'IFS Food',
    version: ' v8',
    fullName: 'International Featured Standards Food',
    categoria: 'Seguridad Alimentaria',
    tagline: 'El estándar preferido por los retailers alemanes y franceses para asegurar la calidad alimentaria.',
    description:
      'IFS Food v8 es un estándar de auditoría reconocido por GFSI desarrollado para evaluar el sistema de gestión de la calidad y la seguridad alimentaria de los fabricantes de productos de marca de distribuidor. Es un requisito de entrada para los principales retailers de Alemania, Francia y el resto de Europa continental.',
    scope: 'Fabricantes de alimentos que producen productos de marca propia para retailers europeos, especialmente en mercados DACH y francófonos.',
    industrias: ['Productos Marca Propia', 'Snacks y Galletas', 'Salsas y Condimentos', 'Lácteos', 'Productos Congelados'],
    stats: [
      { value: '14K+', label: 'sitios certificados IFS Food en el mundo' },
      { value: '90+', label: 'países con presencia IFS Food' },
      { value: '€800B', label: 'mercado europeo de productos de marca propia' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Sistema de gestión de la seguridad y calidad alimentaria',
        description:
          'Implementar y mantener un sistema de gestión integrado que cubra los requisitos de HACCP, gestión documental y gestión de riesgos de calidad e inocuidad.',
      },
      {
        clause: '§3',
        title: 'Gestión de recursos',
        description:
          'Asegurar la competencia, higiene personal y programas de formación del personal en contacto con alimentos, con registros actualizados.',
      },
      {
        clause: '§4',
        title: 'Planificación y proceso productivo',
        description:
          'Controlar todos los parámetros del proceso productivo — materias primas, recetas, embalaje, etiquetado, condiciones de proceso — con registros verificables.',
      },
      {
        clause: '§5',
        title: 'Medición, análisis y mejora',
        description:
          'Ejecutar auditorías internas, gestionar no conformidades, reclamaciones de clientes y análisis de defectos con tendencias y acciones de mejora documentadas.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plan HACCP adaptado a IFS v8',
        description:
          'Estructura el análisis de peligros con los criterios específicos de IFS Food v8, incluyendo medidas de control validadas y el programa de monitoreo digitalizado.',
      },
      {
        title: 'Gestión de especificaciones de producto',
        description:
          'Centraliza las especificaciones técnicas de todos los productos, materias primas y materiales de empaque. Controla versiones y aprobaciones del cliente.',
      },
      {
        title: 'KPIs de calidad e IFS Score tracking',
        description:
          'Monitorea los indicadores de calidad del proceso y estima el puntaje IFS esperado comparando tus prácticas contra los criterios del estándar.',
      },
      {
        title: 'Gestión de no conformidades y defectos',
        description:
          'Registra defectos por tipo, analiza tendencias, gestiona acciones correctivas y genera el reporte de gestión de calidad que los auditores IFS evalúan.',
      },
    ],
    ctaTitle: 'IFS Food v8 sin la presión documental del día antes.',
    ctaSubtitle:
      'Con Consultto, tu sistema IFS está siempre en estado de auditoría. Sin carreras de último minuto.',
  },
  {
    slug: 'sqf',
    code: 'SQF',
    version: ' Edition 9',
    fullName: 'Safe Quality Food',
    categoria: 'Seguridad Alimentaria',
    tagline: 'El estándar GFSI preferido por el mercado norteamericano para asegurar inocuidad y calidad en alimentos.',
    description:
      'SQF Edition 9 es un programa de certificación de gestión de la calidad e inocuidad alimentaria reconocido por GFSI y administrado por la Food Marketing Institute (FMI) de EE.UU. Cubre toda la cadena de suministro alimentaria con niveles de certificación específicos: Fundamentos SQF, Calidad SQF e Inocuidad SQF.',
    scope: 'Toda la cadena de suministro alimentaria en Norteamérica: producción primaria, fabricación, distribución y retail.',
    industrias: ['Alimentos Procesados', 'Distribución Alimentaria', 'Frutas y Verduras Frescas', 'Productos del Mar', 'Granos y Cereales'],
    stats: [
      { value: '5K+', label: 'sitios certificados SQF en Norteamérica' },
      { value: '35+', label: 'años de historia del programa SQF' },
      { value: '3', label: 'niveles de certificación según complejidad del negocio' },
    ],
    requisitos: [
      {
        clause: '§2.1',
        title: 'Compromiso gerencial y revisión del sistema',
        description:
          'La alta gerencia debe demostrar compromiso visible con la inocuidad alimentaria, designar un SQF Practitioner calificado y revisar el sistema periódicamente.',
      },
      {
        clause: '§2.4',
        title: 'Sistema de inocuidad alimentaria (HACCP)',
        description:
          'Desarrollar un plan de inocuidad alimentaria basado en HACCP que identifique y controle los peligros significativos para la salud del consumidor.',
      },
      {
        clause: '§2.6',
        title: 'Identificación del producto, trazabilidad y retiro',
        description:
          'Mantener un sistema de identificación y trazabilidad de producto que permita ejecutar un retiro completo del mercado dentro de 4 horas.',
      },
      {
        clause: '§11',
        title: 'Buenas prácticas de manufactura (cGMP)',
        description:
          'Implementar cGMP para el control del ambiente de fabricación, higiene personal, control de plagas, limpieza y mantenimiento de instalaciones.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plan de inocuidad SQF con flujo HACCP',
        description:
          'Construye el plan de inocuidad con el flujo de proceso, análisis de peligros, PCC y PPRO. Cumple con el formato requerido para la certificación SQF Edition 9.',
      },
      {
        title: 'Registros de cGMP y verificación diaria',
        description:
          'Captura registros de verificación de cGMP, limpieza y desinfección desde dispositivos móviles. El sistema detecta brechas y alerta al SQF Practitioner.',
      },
      {
        title: 'Simulacro de retiro del mercado',
        description:
          'Documenta y ejecuta ejercicios de retiro del mercado, registra el tiempo de respuesta y genera evidencia del cumplimiento del requisito de 4 horas.',
      },
      {
        title: 'Gestión documental del Código SQF',
        description:
          'Organiza todos los documentos del sistema SQF con el módulo aplicable a tu categoría de producto, control de versiones y distribución digital.',
      },
    ],
    ctaTitle: 'SQF Edition 9 gestionado con la rigurosidad que el mercado americano exige.',
    ctaSubtitle:
      'Un sistema que te prepara para la auditoría SQF desde el primer día, sin depender de consultores externos.',
  },
  {
    slug: 'haccp',
    code: 'HACCP',
    version: '',
    fullName: 'Análisis de Peligros y Puntos Críticos de Control',
    categoria: 'Inocuidad Alimentaria',
    tagline: 'El sistema científico de control de peligros alimentarios que está en la base de toda certificación de inocuidad.',
    description:
      'HACCP (Hazard Analysis and Critical Control Points) es el sistema preventivo de inocuidad alimentaria reconocido internacionalmente por el Codex Alimentarius y exigido por regulaciones de todo el mundo. Los 7 principios HACCP son la base de todas las certificaciones de inocuidad: FSSC 22000, BRC, IFS, SQF e ISO 22000.',
    scope: 'Toda empresa que procesa, transforma, transporta o sirve alimentos al consumidor final o como ingrediente.',
    industrias: ['Alimentos y Bebidas', 'Restauración Colectiva', 'Procesamiento Cárnico', 'Lácteos', 'Catering y Servicio de Alimentos'],
    stats: [
      { value: '50+', label: 'años de historia del sistema HACCP desde la NASA' },
      { value: '7', label: 'principios que estructuran el sistema completo' },
      { value: '100%', label: 'de normas GFSI requieren un HACCP documentado como base' },
    ],
    requisitos: [
      {
        clause: 'Principio 1',
        title: 'Análisis de peligros',
        description:
          'Identificar y evaluar todos los peligros biológicos, químicos y físicos que pueden ocurrir en cada etapa del proceso productivo y determinar medidas de control.',
      },
      {
        clause: 'Principio 2–3',
        title: 'Determinación de PCC y límites críticos',
        description:
          'Identificar los Puntos de Control Crítico (PCC) donde el control es esencial para prevenir o eliminar el peligro, y establecer los límites críticos para cada PCC.',
      },
      {
        clause: 'Principio 4–5',
        title: 'Monitoreo y acciones correctivas',
        description:
          'Establecer procedimientos de monitoreo para cada PCC y definir las acciones correctivas a tomar cuando el monitoreo indica que un PCC no está bajo control.',
      },
      {
        clause: 'Principio 6–7',
        title: 'Verificación y documentación',
        description:
          'Establecer procedimientos de verificación para confirmar que el plan HACCP funciona eficazmente, y mantener la documentación y registros del sistema completos.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plan HACCP digital con los 7 principios',
        description:
          'Construye el plan HACCP completo con flujo de proceso, análisis de peligros, determinación de PCC, límites críticos y acciones correctivas en una herramienta guiada.',
      },
      {
        title: 'Registro de monitoreo de PCC',
        description:
          'Captura registros de monitoreo de PCC desde dispositivos móviles o integrados a equipos, con alertas automáticas cuando se detecta una desviación de límite crítico.',
      },
      {
        title: 'Gestión de desviaciones y acciones correctivas',
        description:
          'Registra y gestiona cada desviación detectada en un PCC con la disposición del producto afectado, la acción correctiva aplicada y la evidencia de verificación.',
      },
      {
        title: 'Verificación y validación del plan',
        description:
          'Programa y registra las actividades de verificación (auditorías, análisis de producto, revisión de registros) y la validación periódica del plan HACCP completo.',
      },
    ],
    ctaTitle: 'Tu plan HACCP, siempre actualizado y listo para auditoría.',
    ctaSubtitle:
      'Deja de gestionar el HACCP en hojas de cálculo. Con Consultto, está vivo, monitorizado y con evidencia siempre disponible.',
  },
  {
    slug: 'gmp-farmaceutica',
    code: 'GMP',
    version: ' Farmacéutica',
    fullName: 'Buenas Prácticas de Manufactura Farmacéutica',
    categoria: 'Farmacéutica',
    tagline: 'El estándar regulatorio que separa a los fabricantes farmacéuticos confiables de los que pierden licencias.',
    description:
      'Las GMP Farmacéuticas (Buenas Prácticas de Manufactura) son los estándares de calidad exigidos por las autoridades regulatorias mundiales (FDA, EMA, COFEPRIS) para asegurar que los medicamentos son consistentemente producidos y controlados de acuerdo a los estándares de calidad. Aplican durante todo el ciclo de vida del producto.',
    scope: 'Fabricantes, acondicionadores y distribuidores de medicamentos, principios activos farmacéuticos (API) y productos biológicos.',
    industrias: ['Farmacéutica', 'Biotecnología', 'Principios Activos (API)', 'Laboratorio de Control de Calidad', 'Contract Manufacturing'],
    stats: [
      { value: '3K+', label: 'plantas farmacéuticas inspeccionadas por FDA anualmente' },
      { value: '483', label: 'observaciones promedio por planta en inspecciones FDA' },
      { value: '100%', label: 'de medicamentos aprobados requieren GMP continuo' },
    ],
    requisitos: [
      {
        clause: '§211.68',
        title: 'Sistemas computarizados y validación',
        description:
          'Todos los sistemas computarizados utilizados en manufactura, controles de laboratorio o registros deben estar validados con evidencia documentada de idoneidad para el uso previsto.',
      },
      {
        clause: '§211.100',
        title: 'Procedimientos escritos de manufactura',
        description:
          'Tener procedimientos escritos aprobados para todas las operaciones de manufactura y controles de proceso, con registros de su cumplimiento.',
      },
      {
        clause: '§211.192',
        title: 'Revisión de registros de producción y laboratorio',
        description:
          'Revisar todos los registros de producción y control de laboratorio antes de liberar cada lote, incluyendo investigación completa de desviaciones.',
      },
      {
        clause: '§211.198',
        title: 'Gestión de quejas y retiros de mercado',
        description:
          'Mantener un sistema de recepción, clasificación e investigación de quejas con impacto en la calidad y seguridad del medicamento.',
      },
    ],
    comoGestiona: [
      {
        title: 'Gestión de lotes y registros de fabricación',
        description:
          'Centraliza los registros maestros de manufactura (BMR), los registros de lote, las desviaciones y las investigaciones OOS/OOT en un sistema con controles de acceso por rol.',
      },
      {
        title: 'Control de cambios y gestión del ciclo de vida',
        description:
          'Gestiona los cambios en procesos, fórmulas, equipos e instalaciones con evaluación de impacto regulatorio, aprobaciones multi-nivel y notificaciones a las autoridades.',
      },
      {
        title: 'Programa de calificación y validación',
        description:
          'Administra el plan maestro de validación, los protocolos de IQ/OQ/PQ, la revalidación periódica y los paquetes de validación de sistemas computarizados.',
      },
      {
        title: 'Revisión anual del producto (APR)',
        description:
          'Genera la revisión anual del producto con análisis de tendencias de lotes, quejas, desviaciones, cambios y resultados de estabilidad. Cumple con ICH Q10.',
      },
    ],
    ctaTitle: 'GMP Farmacéutica gestionada con el rigor que las autoridades exigen.',
    ctaSubtitle:
      'Documentación, validaciones, lotes y No conformidades centralizadas. Tu planta siempre en estado de inspección.',
  },
  {
    slug: 'as9100',
    code: 'AS9100',
    version: ' Rev D',
    fullName: 'Sistema de Gestión de la Calidad para Aeroespacial, Espacio y Defensa',
    categoria: 'Aeroespacial y Defensa',
    tagline: 'La norma de calidad de la industria aeroespacial más exigente del mundo, ahora sin el peso documental.',
    description:
      'AS9100 Rev D es el estándar de gestión de la calidad desarrollado por el International Aerospace Quality Group (IAQG) para la industria aeroespacial, espacial y de defensa. Se basa en ISO 9001:2015 y añade más de 100 requisitos adicionales específicos del sector, incluyendo gestión de riesgos, control de configuración y gestión de la seguridad del producto.',
    scope: 'Fabricantes de componentes, sistemas y servicios para la industria aeroespacial, espacial y de defensa, incluyendo Tier 1, 2 y 3.',
    industrias: ['Aeroespacial', 'Defensa', 'Motores y Turbinas', 'Aviónica', 'MRO Aeroespacial'],
    stats: [
      { value: '22K+', label: 'organizaciones certificadas AS9100 en el mundo' },
      { value: '$838B', label: 'valor del mercado aeroespacial global en 2023' },
      { value: '100%', label: 'de integradores aeroespaciales exigen AS9100 en su cadena' },
    ],
    requisitos: [
      {
        clause: '§8.1.1',
        title: 'Planificación y gestión de riesgos operacionales',
        description:
          'Implementar un proceso formal de gestión de riesgos durante la planificación y ejecución de los procesos del producto, con criterios de aceptación definidos.',
      },
      {
        clause: '§8.4',
        title: 'Control de cadena de suministro aeroespacial',
        description:
          'Aplicar los requisitos de AS9100 a los proveedores externos, incluyendo la comunicación de los requisitos del cliente final, y gestionar el flujo abajo de la cadena.',
      },
      {
        clause: '§8.5.5',
        title: 'Preservación y control de configuración',
        description:
          'Mantener la configuración del producto a lo largo de la producción y servicio, controlando las desviaciones, permisos de desviación y disposiciones de no conformidades.',
      },
      {
        clause: '§8.7.1',
        title: 'Control de producto no conforme',
        description:
          'Gestionar rigurosamente los productos no conformes con segregación física, identificación, evaluación de usar-tal-como-está (Use As Is) y aprobación de Material Review Board.',
      },
    ],
    comoGestiona: [
      {
        title: 'Gestión de riesgos del programa aeroespacial',
        description:
          'Registra y gestiona los riesgos por programa o producto con probabilidad, severidad, plan de mitigación y seguimiento de la efectividad. Integrado al control de cambios.',
      },
      {
        title: 'Control de no conformidades y Material Review Board',
        description:
          'Gestiona el proceso de disposición de no conformidades con participación del MRB, clasificación de Use As Is / Repair / Scrap y notificación al cliente cuando aplica.',
      },
      {
        title: 'Gestión de primeros artículos (FAI)',
        description:
          'Administra los reportes de inspección de primer artículo (AS9102) por número de parte, con evidencia de características dimensionales, funcionales y de proceso.',
      },
      {
        title: 'Control de configuración y registro de desviaciones',
        description:
          'Gestiona los permisos de desviación y los waiver de cliente, asegurando trazabilidad completa entre la configuración aprobada y el producto entregado.',
      },
    ],
    ctaTitle: 'AS9100 Rev D sin la complejidad que frena a los proveedores aeroespaciales.',
    ctaSubtitle:
      'Cumple los requisitos más exigentes del sector aeroespacial con un sistema digital que trabaja contigo, no contra ti.',
  },
  {
    slug: 'ctpat',
    code: 'CTPAT',
    version: '',
    fullName: 'Customs Trade Partnership Against Terrorism',
    categoria: 'Seguridad de Cadena de Suministro',
    tagline: 'El programa de seguridad aduanera de EE.UU. que protege tu acceso al mercado norteamericano.',
    description:
      'CTPAT es un programa voluntario de la Oficina de Aduanas y Protección Fronteriza de EE.UU. (CBP) que establece criterios mínimos de seguridad para toda la cadena de suministro internacional. Las empresas certificadas obtienen beneficios como menor inspección en frontera, tramitación prioritaria y acceso al carril FAST.',
    scope: 'Importadores, exportadores, transportistas, operadores logísticos y fabricantes que operan en la cadena de suministro México–EE.UU. o Canadá–EE.UU.',
    industrias: ['Logística y Transporte', 'Manufactura', 'Comercio Internacional', 'Maquiladora', 'Distribución'],
    stats: [
      { value: '11K+', label: 'empresas socias CTPAT activas en la frontera' },
      { value: '50%', label: 'menos inspecciones físicas en frontera para socios certificados' },
      { value: '$800B+', label: 'en comercio bilateral México–EE.UU. protegido por el programa' },
    ],
    requisitos: [
      {
        clause: 'Criterio 1',
        title: 'Seguridad física de instalaciones',
        description:
          'Las instalaciones deben contar con perímetros seguros, control de acceso, iluminación adecuada y sistemas de vigilancia que prevengan el acceso no autorizado y la introducción de contrabando.',
      },
      {
        clause: 'Criterio 2',
        title: 'Control de acceso y gestión de personal',
        description:
          'Implementar procesos de verificación de antecedentes para empleados, visitantes y proveedores de servicios. Incluye controles de identificación y procedimientos para empleados que terminan su relación laboral.',
      },
      {
        clause: 'Criterio 3',
        title: 'Seguridad del transporte y sellos',
        description:
          'Controlar la integridad de los contenedores y remolques mediante sellos de alta seguridad ISO 17712, registros de inspección de unidades y procedimientos de verificación de 7 puntos.',
      },
      {
        clause: 'Criterio 4',
        title: 'Seguridad de la información y socios comerciales',
        description:
          'Proteger los sistemas de TI que procesan información aduanera y evaluar periódicamente la seguridad de los socios comerciales en la cadena de suministro internacional.',
      },
    ],
    comoGestiona: [
      {
        title: 'Registro y seguimiento de sellos de seguridad',
        description:
          'Gestiona el inventario de sellos ISO 17712, registra la aplicación y remoción por unidad, operador y ruta, con alertas automáticas ante inconsistencias en el número de sello.',
      },
      {
        title: 'Inspecciones de vehículos con checklists de 7 puntos',
        description:
          'Ejecuta checklists digitales de inspección de unidades (cabina, chasis, compartimientos, etc.) desde cualquier dispositivo, con evidencia fotográfica y firma del operador.',
      },
      {
        title: 'Gestión de incidentes de seguridad en frontera',
        description:
          'Registra incidentes de seguridad, coordina la investigación, documenta las acciones correctivas y genera los reportes que CBP puede solicitar durante una validación.',
      },
      {
        title: 'Evaluación de socios comerciales y proveedores',
        description:
          'Gestiona el programa de evaluación de socios CTPAT, registra cuestionarios de seguridad, visitas de verificación y mantiene el estatus de cumplimiento actualizado por proveedor.',
      },
    ],
    ctaTitle: 'Mantén tu certificación CTPAT y tu acceso al mercado norteamericano.',
    ctaSubtitle: 'Gestiona los criterios de seguridad aduanera sin papeles ni procesos manuales que te pongan en riesgo.',
  },
]

export function getNorma(slug: string): NormaData | undefined {
  return NORMAS.find((n) => n.slug === slug)
}

export function generateStaticParams() {
  return NORMAS.map((n) => ({ slug: n.slug }))
}
