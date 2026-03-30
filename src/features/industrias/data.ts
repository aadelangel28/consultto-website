export interface AgentChat {
  userMessage: string
  aiIntro: string
  aiPoints: string[]
  aiFollowUp: string
}

export interface IndustriaData {
  slug: string
  name: string
  heroTitle: string
  heroSubtitle: string
  retos: { title: string; description: string }[]
  soluciones: { title: string; description: string }[]
  normas: string[]
  ctaTitle: string
  ctaSubtitle: string
  agentChat: AgentChat
}

export const INDUSTRIAS: IndustriaData[] = [
  {
    slug: 'manufactura',
    name: 'Manufactura',
    heroTitle: 'Manufactura bajo control. Sin papeles, sin fricciones.',
    heroSubtitle:
      'Consultto centraliza el sistema de gestión de tu planta para que las no conformidades se cierren, los documentos estén siempre vigentes y las auditorías lleguen sin sorpresas.',
    retos: [
      {
        title: 'No conformidades que se repiten en planta',
        description:
          'Los mismos defectos aparecen una y otra vez porque el análisis de causa raíz en manufactura se hace de forma incompleta o no queda documentado donde debe.',
      },
      {
        title: 'Versiones de documentos desactualizadas en línea',
        description:
          'Los operadores de planta trabajan con procedimientos obsoletos porque el control documental es manual y nadie tiene certeza de qué versión está vigente.',
      },
      {
        title: 'Equipos de medición sin trazabilidad de calibración',
        description:
          'Los instrumentos se usan fuera de rango porque no existe un sistema que alerte vencimientos ni registre la evidencia de calibración de cada equipo de manufactura.',
      },
      {
        title: 'Auditorías que no generan mejoras reales',
        description:
          'Las auditorías internas de planta se hacen por cumplir, sin plan estructurado por cláusula ni seguimiento real a los hallazgos detectados.',
      },
    ],
    soluciones: [
      {
        title: 'CAPA con análisis de causa raíz para planta',
        description:
          'Registra no conformidades de manufactura, guía el análisis con metodologías estructuradas (5 Porqués, Ishikawa) y hace seguimiento automático hasta el cierre verificado.',
      },
      {
        title: 'Control documental en línea de producción',
        description:
          'Cada procedimiento, instrucción técnica y política de planta tiene su versión vigente, aprobada y distribuida. Sin carpetas físicas ni correos con versiones viejas.',
      },
      {
        title: 'Calibración y mantenimiento preventivo de equipos',
        description:
          'El sistema alerta automáticamente los vencimientos de calibración de cada equipo de manufactura y registra la evidencia con trazabilidad completa.',
      },
      {
        title: 'Auditorías internas por cláusula y área',
        description:
          'Planifica el programa anual de auditorías de planta, ejecuta checklists por cláusula y genera reportes de hallazgos listos para la revisión por la dirección.',
      },
    ],
    normas: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'IATF 16949:2016', 'ISO 50001:2018'],
    ctaTitle: 'Tu planta manufacturera, certificada y funcionando.',
    ctaSubtitle: 'Deja de apagar incendios en planta. Con Consultto, tu sistema de gestión trabaja para ti.',
    agentChat: {
      userMessage: 'Tenemos una no conformidad recurrente en soldadura. Ya es la tercera vez este mes y no encontramos la causa.',
      aiIntro: 'Revisé el historial de planta. Las 3 NCs comparten la misma causa raíz probable: variación en el turno nocturno.',
      aiPoints: [
        '→ Instrucción de trabajo desactualizada (v1.2 vs v1.4 vigente)',
        '→ Equipo de soldadura sin calibración desde hace 18 días',
        '→ Sin evidencia de capacitación del operador B en los últimos 60 días',
      ],
      aiFollowUp: '¿Genero el CAPA con las acciones correctivas sugeridas?',
    },
  },
  {
    slug: 'automotriz',
    name: 'Automotriz',
    heroTitle: 'IATF 16949 cumplido. Tu lugar en la cadena asegurado.',
    heroSubtitle:
      'Los proveedores automotrices no tienen margen de error. Consultto te da el sistema para gestionar CSR, cambios de proceso y trazabilidad de lotes sin improvisaciones.',
    retos: [
      {
        title: 'Requisitos específicos de cada OEM sin control',
        description:
          'Cada cliente automotriz tiene sus propios CSR que se suman a IATF y que deben quedar documentados, comunicados y controlados de forma independiente por proveedor.',
      },
      {
        title: 'Cambios de proceso sin notificación al cliente',
        description:
          'En la cadena automotriz, cualquier cambio en proceso, material o proveedor requiere aprobación del OEM. Sin un sistema centralizado, los cambios se pierden o llegan tarde.',
      },
      {
        title: 'Proveedores críticos evaluados en hojas de cálculo',
        description:
          'La cadena de suministro automotriz exige evaluar, calificar y monitorear proveedores continuamente. Hacerlo en spreadsheets es un riesgo de certificación.',
      },
      {
        title: 'Trazabilidad de lotes que tarda días',
        description:
          'Un recall o defecto de campo exige trazabilidad total hacia atrás. Sin registros estructurados en el sector automotriz, rastrear un lote puede tomar días.',
      },
    ],
    soluciones: [
      {
        title: 'Gestión de CSR por OEM y norma IATF',
        description:
          'Registra y controla los requisitos específicos de cada cliente automotriz junto a los de IATF 16949, con evidencia de cumplimiento en un solo lugar.',
      },
      {
        title: 'Control de cambios con notificación al cliente',
        description:
          'Cada cambio en proceso o producto automotriz sigue un flujo de aprobación formal, con notificación automática al OEM y registro de evidencias.',
      },
      {
        title: 'Evaluación y desempeño de proveedores automotrices',
        description:
          'Califica a tus proveedores de la cadena automotriz, registra auditorías de segunda parte y mantén un panel de desempeño actualizado.',
      },
      {
        title: 'Trazabilidad de producción en tiempo real',
        description:
          'Vincula lotes, materiales, equipos y operadores a cada pieza fabricada para responder en minutos ante cualquier contingencia de cliente.',
      },
    ],
    normas: ['IATF 16949:2016', 'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'AIAG FMEA'],
    ctaTitle: 'Protege tu certificación IATF con un sistema que no falla.',
    ctaSubtitle: 'Implementación rápida para proveedores automotrices. Tu lugar en la cadena, protegido.',
    agentChat: {
      userMessage: 'El OEM nos notificó una desviación en el lote 4821. Necesitan trazabilidad completa antes del mediodía.',
      aiIntro: 'Localicé el lote 4821. Hay un cambio de proceso del día 14 que no fue notificado al cliente a tiempo.',
      aiPoints: [
        '→ Cambio en parámetro de torque registrado internamente pero sin aprobación del OEM',
        '→ 3 piezas del lote ya están en línea de ensamble del cliente',
        '→ CSR del cliente exige notificación en menos de 24h de detectado',
      ],
      aiFollowUp: '¿Genero el reporte de desviación y el expediente de contención para enviar al OEM?',
    },
  },
  {
    slug: 'alimentos-y-bebidas',
    name: 'Alimentos y Bebidas',
    heroTitle: 'Inocuidad alimentaria gestionada, no improvisada.',
    heroSubtitle:
      'En alimentos y bebidas, un fallo en inocuidad puede costar una certificación o algo mucho peor. Consultto te da control total sobre HACCP, PRPs y auditorías de tercera parte.',
    retos: [
      {
        title: 'PCC monitoreados en papel sin visibilidad real',
        description:
          'Los registros de monitoreo de puntos críticos en la planta de alimentos se llenan en papel y nadie tiene visibilidad en tiempo real de si los límites críticos se cumplen.',
      },
      {
        title: 'Programas prerrequisito que vencen sin alerta',
        description:
          'Los programas de limpieza, control de plagas y mantenimiento en la industria alimentaria tienen fechas críticas que se pierden entre hojas de cálculo y agendas personales.',
      },
      {
        title: 'Trazabilidad de alimentos en más de 4 horas',
        description:
          'BRC e IFS exigen demostrar trazabilidad completa en 4 horas. Sin un sistema digital en tu planta de alimentos, esto se convierte en una emergencia operativa.',
      },
      {
        title: 'No conformidades de producto sin disposición clara',
        description:
          'Las desviaciones de producto en alimentos se registran de forma inconsistente, sin análisis de causa raíz ni seguimiento hasta la disposición final del lote.',
      },
    ],
    soluciones: [
      {
        title: 'HACCP digital con monitoreo de PCC',
        description:
          'Documenta tu plan HACCP, registra el monitoreo de cada PCC de tu planta de alimentos y genera las evidencias que auditores de FSSC, BRC o IFS requieren.',
      },
      {
        title: 'Control de PRPs con alertas automáticas',
        description:
          'Gestiona todos tus programas prerrequisito alimentarios con alertas de vencimiento, registros de ejecución y evidencia fotográfica centralizada.',
      },
      {
        title: 'Trazabilidad bidireccional de lotes alimentarios',
        description:
          'Registra materias primas, insumos y productos terminados con trazabilidad completa para responder en minutos ante cualquier retiro de mercado.',
      },
      {
        title: 'Gestión de no conformidades y retiro de producto',
        description:
          'Registra desviaciones de producto alimentario, gestiona la disposición de producto no conforme y activa el protocolo de retiro cuando se necesita.',
      },
    ],
    normas: ['FSSC 22000 v6', 'BRC Food Issue 9', 'IFS Food v8', 'SQF Edition 9', 'ISO 22000:2018', 'HACCP'],
    ctaTitle: 'Tu certificación de inocuidad, sin sorpresas en la auditoría.',
    ctaSubtitle: 'Llega a cada auditoría alimentaria con toda la evidencia lista, estructurada y accesible.',
    agentChat: {
      userMessage: 'La auditoría BRC es en 15 días. ¿Qué PRPs están en riesgo y qué evidencias nos pueden faltar?',
      aiIntro: 'Revisé el estado de tus PRPs. Hay 2 programas con vencimiento crítico antes de la auditoría.',
      aiPoints: [
        '→ Control de plagas: visita de empresa certificada vence en 4 días, sin renovación programada',
        '→ Validación de limpieza CIP: último registro hace 47 días, BRC exige máximo 30',
        '→ 3 registros de monitoreo de temperatura faltantes en la semana del 18 al 24',
      ],
      aiFollowUp: '¿Genero el plan de acción con fechas límite para cerrar estas brechas antes de la auditoría?',
    },
  },
  {
    slug: 'construccion',
    name: 'Construcción',
    heroTitle: 'Calidad y seguridad en obra. Todo en un solo sistema.',
    heroSubtitle:
      'En construcción, la documentación dispersa y los incidentes sin seguimiento cuestan proyectos y contratos. Consultto centraliza la gestión de calidad de cada obra.',
    retos: [
      {
        title: 'Documentación dispersa por cada proyecto de obra',
        description:
          'Cada obra maneja sus propios documentos, formatos y versiones. Cuando termina el proyecto de construcción, la información se pierde o queda inaccesible.',
      },
      {
        title: 'Incidentes de seguridad en obra sin seguimiento',
        description:
          'Los reportes de incidentes en construcción se hacen por obligación pero raramente generan acciones correctivas que prevengan el siguiente evento.',
      },
      {
        title: 'Subcontratistas que operan fuera de estándar',
        description:
          'Los subcontratistas trabajan en obra sin que quede registro de que cumplen los estándares de calidad y seguridad del proyecto de construcción.',
      },
      {
        title: 'Punch lists sin responsable ni fecha de cierre',
        description:
          'Las observaciones de inspección de obra se acumulan sin asignación de responsable ni fecha de cierre, complicando la entrega final del proyecto.',
      },
    ],
    soluciones: [
      {
        title: 'Gestión documental por proyecto de construcción',
        description:
          'Centraliza planos, procedimientos, especificaciones técnicas y registros de cada obra con control de versiones y acceso por roles desde cualquier dispositivo.',
      },
      {
        title: 'Incidentes de seguridad con acciones correctivas',
        description:
          'Registra incidentes en construcción, analiza causas raíz y da seguimiento a las acciones correctivas hasta verificar que fueron efectivas en obra.',
      },
      {
        title: 'Control y calificación de subcontratistas',
        description:
          'Evalúa y califica a tus subcontratistas de obra, registra sus evidencias de cumplimiento y genera un historial de desempeño por empresa.',
      },
      {
        title: 'Inspecciones y checklists en campo',
        description:
          'Ejecuta inspecciones de obra desde cualquier dispositivo, registra hallazgos con fotos y asigna responsables con fecha límite de cierre.',
      },
    ],
    normas: ['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015', 'ISO 19650'],
    ctaTitle: 'Cada obra entregada a tiempo, con calidad documentada.',
    ctaSubtitle: 'Un sistema de gestión construido para el ritmo y las exigencias de la construcción.',
    agentChat: {
      userMessage: 'Tenemos 6 observaciones de seguridad abiertas de la última inspección de obra. El cliente pregunta por el estatus.',
      aiIntro: 'Revisé las 6 observaciones. Solo 1 está cerrada con evidencia completa. Las demás tienen problemas.',
      aiPoints: [
        '→ Obs. 3 y 5: responsable asignado pero sin evidencia fotográfica de cierre',
        '→ Obs. 4: venció el plazo hace 3 días, sin actualización en el sistema',
        '→ Obs. 6: requiere verificación de subcontratista Herrería Ramos, sin respuesta',
      ],
      aiFollowUp: '¿Envío recordatorio automático a los responsables y genero el reporte de estatus para el cliente?',
    },
  },
  {
    slug: 'tecnologia-y-software',
    name: 'Tecnología y Software',
    heroTitle: 'ISO 27001 y calidad de software sin frenar tu equipo.',
    heroSubtitle:
      'Las empresas de tecnología enfrentan requisitos de seguridad e ISO cada vez más exigentes. Consultto gestiona el cumplimiento normativo sin ralentizar tu operación.',
    retos: [
      {
        title: 'Riesgos de seguridad sin gestión continua',
        description:
          'ISO 27001 exige identificar, evaluar y tratar los riesgos de seguridad de la información de forma continua. Las empresas de tecnología rara vez tienen esto sistematizado.',
      },
      {
        title: 'Cambios de software sin proceso formal',
        description:
          'Los cambios en sistemas y productos de software afectan la calidad del servicio. Sin un proceso de control de cambios documentado, los incidentes son inevitables.',
      },
      {
        title: 'Incidentes de seguridad sin trazabilidad regulatoria',
        description:
          'Los incidentes de seguridad en empresas de tecnología deben documentarse, analizarse y resolverse con trazabilidad completa para cumplir regulaciones y estándares.',
      },
      {
        title: 'Planes de continuidad que nadie ha probado',
        description:
          'Los BCP existen pero nadie los prueba. Cuando ocurre un incidente real en la empresa de tecnología, la respuesta es improvisada y el tiempo de recuperación se dispara.',
      },
    ],
    soluciones: [
      {
        title: 'Gestión de riesgos de seguridad de la información',
        description:
          'Documenta tu matriz de riesgos de seguridad, registra controles implementados y genera los reportes que ISO 27001 requiere para tu empresa de tecnología.',
      },
      {
        title: 'Control de cambios de software estructurado',
        description:
          'Formaliza el proceso de gestión de cambios con aprobaciones, evaluación de impacto y registro de evidencias por cada cambio en tus sistemas.',
      },
      {
        title: 'Registro y análisis de incidentes de seguridad',
        description:
          'Centraliza los incidentes de seguridad de tu empresa de tecnología, coordina la respuesta y genera la documentación para auditorías y reguladores.',
      },
      {
        title: 'Documentación y pruebas de continuidad del negocio',
        description:
          'Mantén actualizados tus BCP, registra los simulacros realizados y gestiona las lecciones aprendidas para mejorar la respuesta ante incidentes.',
      },
    ],
    normas: ['ISO 27001:2022', 'ISO 9001:2015', 'ISO 20000-1:2018', 'SOC 2'],
    ctaTitle: 'Cumplimiento normativo que no frena tu desarrollo.',
    ctaSubtitle: 'Gestiona ISO 27001 y calidad de servicio en tu empresa de tecnología sin burocracia innecesaria.',
    agentChat: {
      userMessage: 'Detectamos acceso no autorizado a una base de datos de clientes. ¿Cómo arrancamos el protocolo de incidente?',
      aiIntro: 'Activé el protocolo ISO 27001 A.16. Este incidente califica como Severidad Alta. Pasos inmediatos:',
      aiPoints: [
        '→ Contención: revocar credenciales comprometidas y aislar el sistema afectado',
        '→ Notificación: tienes 72h para reportar a la autoridad si hay datos personales (GDPR/LFPDPPP)',
        '→ Evidencia: preservar logs de acceso antes de cualquier modificación al sistema',
      ],
      aiFollowUp: '¿Inicio el registro formal del incidente y notifico al equipo de respuesta designado?',
    },
  },
  {
    slug: 'salud-y-dispositivos-medicos',
    name: 'Salud y Dispositivos Médicos',
    heroTitle: 'Regulación médica sin brechas. Trazabilidad total.',
    heroSubtitle:
      'Los fabricantes de dispositivos médicos no pueden permitirse desvíos documentales. Consultto te da la trazabilidad, el control y la documentación que ISO 13485 y los reguladores exigen.',
    retos: [
      {
        title: 'Trazabilidad de dispositivos médicos difícil de demostrar',
        description:
          'Cada dispositivo médico debe tener trazabilidad completa desde materias primas hasta el paciente. Sin un sistema digital, este requisito regulatorio es prácticamente imposible de cumplir.',
      },
      {
        title: 'Quejas y eventos adversos sin proceso formal',
        description:
          'Las quejas de cliente y los eventos adversos de dispositivos médicos deben registrarse, analizarse y reportarse a las autoridades sanitarias en tiempo y forma.',
      },
      {
        title: 'Validaciones de proceso y software desactualizadas',
        description:
          'ISO 13485 exige validar procesos, equipos y software en el sector de dispositivos médicos. La documentación de estas validaciones es extensa y debe mantenerse vigente.',
      },
      {
        title: 'Cambios con impacto regulatorio sin evaluación',
        description:
          'Cualquier cambio en diseño, proceso o material de un dispositivo médico puede requerir notificación regulatoria. Sin un proceso formal, el riesgo de incumplimiento es alto.',
      },
    ],
    soluciones: [
      {
        title: 'Trazabilidad completa de dispositivos y componentes',
        description:
          'Registra la historia completa de cada dispositivo médico: materiales, procesos, equipos, personal y destino, con acceso inmediato en caso de retiro o inspección.',
      },
      {
        title: 'Gestión de quejas y eventos adversos médicos',
        description:
          'Centraliza las quejas de cliente de dispositivos médicos, coordina la investigación, genera el análisis de causa raíz y prepara reportes para autoridades regulatorias.',
      },
      {
        title: 'Documentación de validaciones de proceso y software',
        description:
          'Gestiona protocolos y reportes de validación de procesos médicos, limpieza, esterilización y software con control de versiones y aprobaciones electrónicas.',
      },
      {
        title: 'Control de cambios con evaluación regulatoria',
        description:
          'Evalúa el impacto regulatorio de cada cambio en dispositivos médicos, documenta la justificación y coordina las notificaciones requeridas por cada jurisdicción.',
      },
    ],
    normas: ['ISO 13485:2016', 'ISO 9001:2015', 'ISO 14971:2019', 'ISO 62304', 'FDA 21 CFR Part 820'],
    ctaTitle: 'Tu sistema de calidad médico, sin brechas regulatorias.',
    ctaSubtitle: 'Trazabilidad y control para fabricantes de dispositivos médicos que no pueden fallar.',
    agentChat: {
      userMessage: 'Recibimos una queja de campo sobre el dispositivo del lote M-2241. Posible falla en el mecanismo de cierre.',
      aiIntro: 'Localicé el lote M-2241. Hay información crítica que debes considerar antes de actuar.',
      aiPoints: [
        '→ Lote distribuido a 4 hospitales: 38 unidades en campo, 12 aún en almacén propio',
        '→ ISO 14971: el modo de falla reportado clasifica como riesgo inaceptable según tu matriz',
        '→ FDA MDR: si se confirma la falla, tienes 30 días para reportar al regulador',
      ],
      aiFollowUp: '¿Inicio la investigación formal y genero el borrador del reporte MDR mientras avanza?',
    },
  },
  {
    slug: 'logistica-y-transporte',
    name: 'Logística y Transporte',
    heroTitle: 'Logística certificada. Procesos que escalan.',
    heroSubtitle:
      'Las empresas de logística y transporte que estandarizan sus procesos retienen contratos y reducen incidentes. Consultto gestiona tu sistema de calidad operativo de punta a punta.',
    retos: [
      {
        title: 'Operaciones logísticas sin procesos estandarizados',
        description:
          'Cada bodega, ruta o terminal de logística opera de forma diferente. Sin procedimientos estandarizados, la calidad del servicio varía y los errores se multiplican.',
      },
      {
        title: 'Siniestros y mermas sin análisis de causa raíz',
        description:
          'Los accidentes, mermas y siniestros de transporte se reportan de forma inconsistente, sin análisis que prevenga los próximos eventos y reduzca costos operativos.',
      },
      {
        title: 'Requisitos de cada cliente logístico sin control',
        description:
          'Cada cliente de logística tiene sus propios KPIs, procedimientos y requisitos de calidad. Cumplirlos todos sin un sistema centralizado es prácticamente imposible.',
      },
      {
        title: 'Indicadores de transporte dispersos en múltiples sistemas',
        description:
          'Los datos de OTIF, siniestralidad y satisfacción del cliente de transporte existen en distintos sistemas, lo que dificulta la toma de decisiones en tiempo real.',
      },
    ],
    soluciones: [
      {
        title: 'Estandarización de procesos logísticos',
        description:
          'Documenta y controla los procedimientos de cada operación logística, bodega o ruta con versiones vigentes accesibles desde cualquier dispositivo en campo.',
      },
      {
        title: 'Gestión de incidentes de transporte y seguimiento',
        description:
          'Registra siniestros y mermas de transporte, analiza causas raíz y da seguimiento a las acciones correctivas hasta verificar que se resolvieron.',
      },
      {
        title: 'Control de requisitos por cliente logístico',
        description:
          'Centraliza los requisitos específicos de cada cliente con evidencia de cumplimiento, métricas de desempeño y registros de auditorías de segunda parte.',
      },
      {
        title: 'Dashboard de indicadores logísticos',
        description:
          'Consolida tus KPIs de logística y transporte en un panel en tiempo real para monitorear desempeño y tomar decisiones basadas en datos reales.',
      },
    ],
    normas: ['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015', 'CTPAT'],
    ctaTitle: 'Operaciones logísticas certificadas y bajo control.',
    ctaSubtitle: 'Estandariza, mide y mejora cada eslabón de tu cadena logística con Consultto.',
    agentChat: {
      userMessage: 'Tuvimos un siniestro en ruta hoy. Carga parcialmente dañada. El cliente ya nos contactó. ¿Qué hago?',
      aiIntro: 'Entendido. Para este tipo de incidente de transporte necesitas actuar en los próximos 60 minutos.',
      aiPoints: [
        '→ Documentar: fotos de la carga, número de guía, placas y nombre del operador en el sistema ahora',
        '→ Cliente: tienes SLA de notificación de 2h según el contrato de servicio registrado',
        '→ Análisis: el operador tiene 2 incidentes similares en los últimos 90 días en la misma ruta',
      ],
      aiFollowUp: '¿Abro el reporte de incidente, notifico al cliente y genero la alerta de patrón de riesgo en esa ruta?',
    },
  },
  {
    slug: 'servicios-profesionales',
    name: 'Servicios Profesionales',
    heroTitle: 'ISO 9001 para tu firma, sin complicar la operación.',
    heroSubtitle:
      'Las empresas de servicios profesionales que se certifican demuestran que su calidad está en los procesos, no solo en las personas. Consultto lo hace posible.',
    retos: [
      {
        title: 'Servicios que dependen de personas, no de procesos',
        description:
          'El conocimiento crítico en firmas de servicios profesionales vive en la cabeza de los empleados senior. Cuando uno sale, la calidad del servicio cae inmediatamente.',
      },
      {
        title: 'Satisfacción del cliente sin medición formal',
        description:
          'En servicios profesionales se asume que los clientes están satisfechos porque no se quejan. Sin métricas formales, es imposible detectar problemas antes de perder un contrato.',
      },
      {
        title: 'Entregables al cliente sin revisión documentada',
        description:
          'Los entregables de servicios profesionales pasan por revisiones informales sin un proceso de aprobación documentado ni criterios de aceptación definidos.',
      },
      {
        title: 'Capacitación del equipo sin evidencia ni seguimiento',
        description:
          'La formación del equipo de servicios se hace de forma informal. No hay registro de competencias ni de la efectividad de las capacitaciones realizadas.',
      },
    ],
    soluciones: [
      {
        title: 'Documentación de procesos clave de servicio',
        description:
          'Captura el conocimiento de tu firma en procedimientos, instructivos y políticas que garanticen la consistencia del servicio sin importar quién lo ejecuta.',
      },
      {
        title: 'Medición formal de satisfacción del cliente',
        description:
          'Registra encuestas, retroalimentación y quejas de clientes de servicios profesionales con análisis de tendencias y acciones de mejora documentadas.',
      },
      {
        title: 'Control de entregables y aprobaciones de cliente',
        description:
          'Gestiona las revisiones y aprobaciones de propuestas y entregables de tu firma con trazabilidad completa del proceso de calidad.',
      },
      {
        title: 'Gestión de competencias y formación del equipo',
        description:
          'Registra las competencias requeridas por rol en tu firma de servicios, las capacitaciones realizadas y evalúa la efectividad de cada programa.',
      },
    ],
    normas: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018'],
    ctaTitle: 'Tu firma de servicios certificada en ISO 9001.',
    ctaSubtitle: 'Demuestra a tus clientes que la calidad de tu firma está en los procesos, no solo en las personas.',
    agentChat: {
      userMessage: 'Un cliente rechazó el entregable final del proyecto. Dice que no cumple lo acordado en el contrato.',
      aiIntro: 'Revisé el expediente del proyecto. El problema tiene un antecedente claro en el proceso.',
      aiPoints: [
        '→ No hay registro de aprobación del alcance en la etapa 2, solo un correo informal del cliente',
        '→ Los criterios de aceptación del entregable nunca quedaron documentados en el sistema',
        '→ Este es el 2do proyecto con este cliente que termina con observaciones de entrega',
      ],
      aiFollowUp: '¿Genero el análisis de causa raíz y el plan de mejora para evitar que se repita en futuros proyectos?',
    },
  },
  {
    slug: 'educacion',
    name: 'Educación',
    heroTitle: 'Calidad educativa que se puede demostrar y acreditar.',
    heroSubtitle:
      'Las instituciones educativas que se certifican en ISO 21001 demuestran un compromiso real con la mejora continua. Consultto adapta la gestión de calidad al ritmo del sector educativo.',
    retos: [
      {
        title: 'Procesos educativos sin estandarización institucional',
        description:
          'Cada docente o departamento de la institución aplica sus propios criterios. Sin procedimientos comunes, la calidad de la experiencia educativa varía enormemente.',
      },
      {
        title: 'Indicadores de desempeño educativo sin consolidar',
        description:
          'Los datos de desempeño académico existen en distintos sistemas pero nunca se consolidan en indicadores que guíen la toma de decisiones institucional.',
      },
      {
        title: 'Quejas de alumnos y padres sin proceso formal',
        description:
          'Las quejas en instituciones educativas se atienden de forma reactiva y sin registro formal, lo que impide identificar patrones y mejorar la experiencia.',
      },
      {
        title: 'Evidencias de acreditación difíciles de reunir',
        description:
          'Los organismos acreditadores del sector educativo exigen evidencia de procesos de mejora continua que raramente está documentada de forma organizada.',
      },
    ],
    soluciones: [
      {
        title: 'Documentación de procesos académicos y administrativos',
        description:
          'Estandariza los procesos clave de tu institución educativa con procedimientos accesibles para todo el personal docente y administrativo.',
      },
      {
        title: 'Indicadores de calidad educativa en un dashboard',
        description:
          'Consolida métricas académicas, de satisfacción y operativas de tu institución en un panel que apoye la toma de decisiones de la dirección.',
      },
      {
        title: 'Gestión formal de quejas de la comunidad educativa',
        description:
          'Registra, analiza y da respuesta formal a quejas y sugerencias de alumnos, padres y personal de la institución con trazabilidad completa.',
      },
      {
        title: 'Evidencias organizadas para acreditación educativa',
        description:
          'Centraliza la documentación requerida por organismos acreditadores del sector educativo con acceso organizado por criterio y ciclo de evaluación.',
      },
    ],
    normas: ['ISO 21001:2018', 'ISO 9001:2015'],
    ctaTitle: 'Una institución educativa que mejora continuamente.',
    ctaSubtitle: 'Gestión de calidad adaptada al ritmo y las necesidades del sector educativo.',
    agentChat: {
      userMessage: 'El organismo acreditador nos pide evidencia de mejora continua de los últimos 2 ciclos. Tenemos 10 días.',
      aiIntro: 'Encontré las acciones de mejora de ambos ciclos en el sistema. Hay suficiente evidencia, pero necesita organizarse.',
      aiPoints: [
        '→ Ciclo 2022–2023: 8 acciones registradas, 6 con evidencia completa y cierre verificado',
        '→ Ciclo 2023–2024: 11 acciones, 3 aún abiertas que podrían verse mal ante el acreditador',
        '→ Falta consolidar indicadores de satisfacción estudiantil en un solo informe por ciclo',
      ],
      aiFollowUp: '¿Genero el informe de mejora continua estructurado por ciclo y criterio de acreditación?',
    },
  },
  {
    slug: 'farmaceutica',
    name: 'Farmacéutica',
    heroTitle: 'BPM sin desvíos. Inspecciones sin sorpresas.',
    heroSubtitle:
      'Las empresas farmacéuticas no tienen margen de error ante reguladores. Consultto gestiona desvíos, validaciones y cambios con la trazabilidad que BPM exige.',
    retos: [
      {
        title: 'Desvíos y OOS sin investigación rigurosa',
        description:
          'Los resultados fuera de especificación y los desvíos de proceso farmacéutico deben investigarse con rigor científico y documentarse con evidencia completa para el regulador.',
      },
      {
        title: 'Documentación de validaciones desactualizada',
        description:
          'Los protocolos y reportes de validación farmacéutica son extensos, requieren aprobaciones múltiples y deben mantenerse actualizados durante toda la vida del producto.',
      },
      {
        title: 'Cambios con variación regulatoria sin proceso formal',
        description:
          'Cualquier cambio en formulación, proceso o equipo farmacéutico puede requerir variación ante la autoridad sanitaria. Sin un sistema formal, el riesgo regulatorio es alto.',
      },
      {
        title: 'Proveedores de materia prima sin cualificación activa',
        description:
          'BPM exige cualificar y monitorear continuamente a los proveedores de materias primas críticas. La documentación de este proceso es extensa y auditada por cada inspección.',
      },
    ],
    soluciones: [
      {
        title: 'Gestión de desvíos farmacéuticos con análisis de impacto',
        description:
          'Registra desvíos de proceso y resultados OOS, guía la investigación de causa raíz y documenta la disposición de lote farmacéutico con trazabilidad regulatoria completa.',
      },
      {
        title: 'Control de documentación de validación BPM',
        description:
          'Gestiona protocolos, reportes y matrices de validación farmacéutica con aprobaciones electrónicas, control de versiones y acceso auditable en cada inspección.',
      },
      {
        title: 'Control de cambios con expediente regulatorio',
        description:
          'Evalúa el impacto regulatorio de cada cambio farmacéutico, coordina las aprobaciones internas y genera los expedientes de soporte para variaciones ante autoridades.',
      },
      {
        title: 'Cualificación y auditoría de proveedores BPM',
        description:
          'Gestiona el programa de cualificación de proveedores farmacéuticos, registra auditorías de segunda parte y mantén el estatus de aprobado actualizado ante cada inspección.',
      },
    ],
    normas: ['GMP Farmacéutica', 'ISO 9001:2015', 'ICH Q10', 'ICH Q9', 'NOM-059-SSA1', 'FDA 21 CFR Part 211'],
    ctaTitle: 'Cumplimiento BPM sin desvíos que comprometan tu operación.',
    ctaSubtitle: 'Sistema de calidad farmacéutica diseñado para pasar inspecciones regulatorias sin sorpresas.',
    agentChat: {
      userMessage: 'Resultado OOS en lote FA-3301. Control de calidad necesita saber los pasos exactos de la investigación BPM.',
      aiIntro: 'Iniciando protocolo OOS según ICH Q10 y BPM. La investigación tiene dos fases obligatorias.',
      aiPoints: [
        '→ Fase 1 (laboratorio): verificar errores de muestreo, equipos y analista antes de asumir falla del lote',
        '→ Fase 2 (producción): si Fase 1 no concluye, revisar registros de manufactura del lote FA-3301',
        '→ Plazo: COFEPRIS exige conclusión documentada en máximo 30 días hábiles desde la detección',
      ],
      aiFollowUp: '¿Abro el expediente OOS, asigno al responsable de investigación y activo el bloqueo preventivo del lote?',
    },
  },
]

export function getIndustria(slug: string): IndustriaData | undefined {
  return INDUSTRIAS.find((i) => i.slug === slug)
}
