export interface ArticleContent {
  slug: string
  body: Section[]
}

export interface Section {
  type: 'paragraph' | 'heading' | 'subheading' | 'bullets' | 'quote'
  content: string | string[]
}

export const articleContent: ArticleContent[] = [
  {
    slug: 'como-preparar-auditoria-iso-9001',
    body: [
      {
        type: 'paragraph',
        content: 'Las organizaciones que fracasan en su primera auditoría de certificación ISO 9001 comparten un patrón común: confunden tener documentos con tener un sistema de gestión. Llegan a la auditoría con carpetas llenas de procedimientos que nadie usa, registros incompletos y evidencia que no responde a los requisitos de la norma.',
      },
      {
        type: 'heading',
        content: 'El error de origen: documentar en lugar de implementar',
      },
      {
        type: 'paragraph',
        content: 'La norma ISO 9001:2015 no exige una cantidad específica de documentos. Exige evidencia de que el sistema funciona. Esta distinción es fundamental. Muchas organizaciones contratan consultores que producen cientos de páginas de procedimientos genéricos, pero al momento de la auditoría no pueden demostrar que esos procedimientos se aplican en la operación diaria.',
      },
      {
        type: 'quote',
        content: 'Un sistema de gestión no es una biblioteca de documentos. Es la forma en que una organización opera, toma decisiones y mejora continuamente.',
      },
      {
        type: 'heading',
        content: 'Los 90 días que cambian el resultado',
      },
      {
        type: 'paragraph',
        content: 'En Consultto hemos acompañado a más de 200 organizaciones en su proceso de certificación. El factor más determinante del éxito no es el tamaño de la empresa ni el sector — es la calidad de la preparación en los 90 días previos a la auditoría.',
      },
      {
        type: 'subheading',
        content: 'Mes 1: Diagnóstico y brecha real',
      },
      {
        type: 'bullets',
        content: [
          'Evaluación cláusula por cláusula del estado actual vs. los requisitos de la norma',
          'Identificación de procesos críticos sin documentar o sin evidencia de ejecución',
          'Mapeo de responsables por cada requisito de la norma',
          'Priorización de brechas por nivel de riesgo en auditoría',
        ],
      },
      {
        type: 'subheading',
        content: 'Mes 2: Cierre de brechas y generación de evidencia',
      },
      {
        type: 'bullets',
        content: [
          'Actualización o creación de documentos vinculados a operación real',
          'Ejecución de al menos un ciclo completo de auditoría interna',
          'Registro de no conformidades reales y apertura de CAPAs con seguimiento',
          'Revisión por la dirección con acuerdos documentados',
        ],
      },
      {
        type: 'subheading',
        content: 'Mes 3: Simulacro y afinación final',
      },
      {
        type: 'bullets',
        content: [
          'Auditoría interna completa simulando condiciones reales de certificación',
          'Revisión de evidencia por cada cláusula aplicable',
          'Entrenamiento del equipo en respuesta a preguntas del auditor',
          'Verificación de acceso a registros durante la auditoría',
        ],
      },
      {
        type: 'heading',
        content: 'El papel del Agente IA en la preparación',
      },
      {
        type: 'paragraph',
        content: 'Una de las ventajas que Consultto ofrece a sus clientes es el Agente IA especializado en la norma correspondiente. Este agente puede responder en segundos preguntas como "¿qué evidencia necesito para la cláusula 7.2?" o "¿mi procedimiento de auditorías internas cumple con los requisitos de ISO 9001?", reduciendo significativamente el tiempo de preparación.',
      },
      {
        type: 'paragraph',
        content: 'Las organizaciones que llegan a su auditoría con el sistema operando en la realidad — no solo en papel — tienen una tasa de aprobación del 98% en primera instancia. Las que llegan con documentos sin implementar, menos del 40%.',
      },
    ],
  },
  {
    slug: 'ia-en-gestion-de-calidad',
    body: [
      {
        type: 'paragraph',
        content: 'Durante décadas, los sistemas de gestión de calidad han dependido de una premisa simple: si está documentado y hay evidencia, el sistema existe. Esta lógica, aunque válida, crea sistemas pesados, reactivos y costosos de mantener. La inteligencia artificial está cambiando esa ecuación.',
      },
      {
        type: 'heading',
        content: 'De la documentación a la inteligencia operativa',
      },
      {
        type: 'paragraph',
        content: 'Los primeros sistemas de gestión asistidos por IA no reemplazaron al profesional de calidad — le devolvieron tiempo. La diferencia entre un equipo de calidad que dedica el 70% de su tiempo a actualizar documentos y uno que dedica ese mismo tiempo a analizar tendencias y prevenir no conformidades es la diferencia entre un sistema que existe y uno que funciona.',
      },
      {
        type: 'quote',
        content: 'La IA no elimina la necesidad del criterio humano. Elimina las tareas que no requieren criterio humano.',
      },
      {
        type: 'heading',
        content: 'Casos de uso reales en gestión de calidad',
      },
      {
        type: 'bullets',
        content: [
          'Detección automática de brechas entre el sistema documentado y los requisitos normativos',
          'Generación de planes de auditoría interna basados en el historial de no conformidades',
          'Alertas preventivas sobre vencimiento de documentos críticos y fechas de auditoría',
          'Respuesta inmediata a preguntas técnicas sobre la norma en el contexto específico de la organización',
          'Análisis de causa raíz asistido para el cierre de CAPAs',
        ],
      },
      {
        type: 'heading',
        content: 'El límite de la IA en calidad',
      },
      {
        type: 'paragraph',
        content: 'Es importante ser precisos sobre lo que la IA puede y no puede hacer en este contexto. Puede procesar información, identificar patrones y generar contenido estructurado. No puede reemplazar la visita presencial de un auditor experto, el juicio sobre situaciones ambiguas o la construcción de cultura de calidad dentro de una organización.',
      },
    ],
  },
  {
    slug: 'diferencias-iso-9001-iatf-16949',
    body: [
      {
        type: 'paragraph',
        content: 'Cuando una empresa del sector automotriz recibe la exigencia de certificarse en IATF 16949, la reacción más común es asumir que ISO 9001 es suficiente base. En términos estructurales, lo es. En términos de profundidad y requisitos específicos, la distancia es significativa.',
      },
      {
        type: 'heading',
        content: 'La arquitectura de ambas normas',
      },
      {
        type: 'paragraph',
        content: 'IATF 16949:2016 incorpora todos los requisitos de ISO 9001:2015 y añade requisitos específicos del sector automotriz. No se trata de una norma alternativa sino de una extensión. Esto significa que una organización certificada en IATF 16949 también cumple con ISO 9001, pero no a la inversa.',
      },
      {
        type: 'heading',
        content: 'Diferencias críticas',
      },
      {
        type: 'bullets',
        content: [
          'IATF exige APQP (Advanced Product Quality Planning) como metodología de desarrollo de productos',
          'PPAP (Production Part Approval Process) es obligatorio para nuevos productos o cambios en procesos',
          'Control estadístico de procesos (SPC) y análisis de sistemas de medición (MSA) son requisitos explícitos',
          'La gestión de proveedores es considerablemente más exigente en IATF',
          'Los requisitos de trazabilidad son más estrictos y detallados',
        ],
      },
      {
        type: 'quote',
        content: 'El 60% de los hallazgos en auditorías IATF provienen de tres áreas: gestión de proveedores, control de cambios y mantenimiento de equipos.',
      },
    ],
  },
  {
    slug: 'errores-comunes-iso-14001',
    body: [
      {
        type: 'paragraph',
        content: 'ISO 14001 tiene la reputación de ser una norma relativamente accesible comparada con otras certificaciones. Esa percepción lleva a organizaciones a subestimar su implementación y cometer errores evitables que comprometen tanto la certificación como el valor real del sistema ambiental.',
      },
      {
        type: 'heading',
        content: 'Error 1: No identificar los aspectos ambientales significativos correctamente',
      },
      {
        type: 'paragraph',
        content: 'La identificación de aspectos e impactos ambientales es el corazón del sistema ISO 14001. Muchas organizaciones hacen este ejercicio una vez, lo documentan y no vuelven a revisarlo. El problema es que los procesos cambian, los proveedores cambian y las operaciones evolucionan.',
      },
      {
        type: 'heading',
        content: 'Error 2: Confundir cumplimiento legal con desempeño ambiental',
      },
      {
        type: 'paragraph',
        content: 'Cumplir con la legislación ambiental es una condición mínima, no un objetivo del sistema. ISO 14001 busca la mejora continua del desempeño ambiental, lo que implica establecer objetivos que vayan más allá del cumplimiento legal.',
      },
      {
        type: 'bullets',
        content: [
          'Establecer indicadores de desempeño ambiental medibles y con tendencia',
          'Revisar periódicamente la matriz de aspectos e impactos',
          'Integrar la perspectiva del ciclo de vida en las decisiones de compra',
          'Comunicar el desempeño ambiental de forma transparente',
          'Incluir a proveedores relevantes en el alcance del sistema',
        ],
      },
    ],
  },
  {
    slug: 'capa-mejora-continua',
    body: [
      {
        type: 'paragraph',
        content: 'En la mayoría de las organizaciones certificadas, el proceso de CAPA cumple exactamente la función para la que fue diseñado en papel: generar registros. Lo que raramente logra es lo que realmente importa: eliminar la causa raíz de los problemas y prevenir su recurrencia.',
      },
      {
        type: 'heading',
        content: 'El síntoma más común: CAPAs abiertos por años',
      },
      {
        type: 'paragraph',
        content: 'Cuando un auditor encuentra CAPAs abiertos desde hace 18 meses sin evidencia de avance, el problema no suele ser la falta de recursos. El problema es que la acción correctiva definida no atacó la causa raíz real, o el responsable no tiene claridad sobre qué evidencia debe generar para cerrar el CAPA.',
      },
      {
        type: 'quote',
        content: 'Un CAPA cerrado sin evidencia de efectividad es peor que un CAPA abierto. Le dice al auditor que el sistema no funciona.',
      },
      {
        type: 'heading',
        content: 'Las tres fases de un CAPA efectivo',
      },
      {
        type: 'bullets',
        content: [
          'Contención: acciones inmediatas para limitar el impacto de la no conformidad',
          'Análisis de causa raíz: uso de herramientas como 5 Porqués, Ishikawa o análisis de árbol de fallas',
          'Acción correctiva: solución dirigida a la causa raíz, no al síntoma',
        ],
      },
    ],
  },
  {
    slug: 'iso-45001-seguridad-laboral',
    body: [
      {
        type: 'paragraph',
        content: 'Durante años, la seguridad y salud en el trabajo fue vista como un departamento de cumplimiento: su función era evitar multas y accidentes. ISO 45001 representa un cambio de paradigma: la seguridad laboral como ventaja competitiva y decisión estratégica de negocio.',
      },
      {
        type: 'heading',
        content: 'El costo real de los accidentes laborales',
      },
      {
        type: 'paragraph',
        content: 'Más allá del costo humano — que es el más importante — los accidentes laborales tienen un impacto económico directo que muchas organizaciones subestiman. Incluyen costos de atención médica, sustitución temporal del trabajador, investigación del accidente, posibles sanciones legales, y el impacto en la moral y productividad del equipo.',
      },
      {
        type: 'heading',
        content: 'ISO 45001 como herramienta de negocio',
      },
      {
        type: 'bullets',
        content: [
          'Reducción de primas de seguros de responsabilidad civil y accidentes',
          'Acceso a licitaciones y clientes que exigen certificación en seguridad',
          'Mejora del clima organizacional y reducción de rotación de personal',
          'Fortalecimiento de la reputación ante inversionistas y clientes internacionales',
          'Marco sistemático para identificar y controlar riesgos operativos',
        ],
      },
      {
        type: 'quote',
        content: 'Las organizaciones con sistemas de gestión de seguridad maduros reportan hasta un 40% menos de ausentismo laboral comparadas con su sector.',
      },
    ],
  },
]
