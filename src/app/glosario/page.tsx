'use client'

import { useState, useMemo, useRef } from 'react'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

const TERMINOS: { term: string; category: string; definition: string }[] = [
  // A
  { term: 'Acción correctiva', category: 'Mejora', definition: 'Acción tomada para eliminar la causa de una no conformidad detectada u otra situación no deseable, con el fin de evitar que vuelva a ocurrir.' },
  { term: 'Acción preventiva', category: 'Mejora', definition: 'Acción tomada para eliminar la causa de una no conformidad potencial u otra situación potencialmente no deseable antes de que ocurra.' },
  { term: 'Acreditación', category: 'Sistema de gestión', definition: 'Reconocimiento formal por parte de un organismo de acreditación (como EMA, ENAC o INMETRO) de que un organismo de certificación, laboratorio o entidad de inspección es competente para realizar tareas específicas.' },
  { term: 'Alcance del sistema de gestión', category: 'Sistema de gestión', definition: 'Límites y aplicabilidad del sistema de gestión de una organización, incluyendo los productos, servicios, procesos, sitios y partes interesadas considerados.' },
  { term: 'Alta dirección', category: 'Liderazgo', definition: 'Persona o grupo de personas que dirige y controla una organización al más alto nivel. En ISO 9001, tiene responsabilidades específicas en el liderazgo y compromiso con el sistema de gestión.' },
  { term: 'Análisis de causa raíz', category: 'Mejora', definition: 'Metodología sistemática para identificar la causa fundamental de un problema o no conformidad, en lugar de tratar solo los síntomas. Herramientas comunes: 5 Por qués, diagrama de Ishikawa.' },
  { term: 'Análisis de riesgos', category: 'Riesgos', definition: 'Proceso de identificar, estimar y evaluar los riesgos que pueden afectar el logro de los objetivos de la organización. Base del pensamiento basado en riesgos en ISO 9001:2015.' },
  { term: 'APQP', category: 'Automotriz', definition: 'Advanced Product Quality Planning (Planeación Avanzada de la Calidad del Producto). Proceso estructurado para diseñar y desarrollar productos en la industria automotriz, requerido por IATF 16949.' },
  { term: 'AS9100', category: 'Normas', definition: 'Norma de sistema de gestión de calidad específica para la industria aeroespacial, basada en ISO 9001 con requisitos adicionales de seguridad, trazabilidad y control de procesos críticos.' },
  { term: 'Aseguramiento de calidad', category: 'Sistema de gestión', definition: 'Parte de la gestión de calidad orientada a proporcionar confianza en que se cumplirán los requisitos de calidad. Se enfoca en la prevención de defectos, no en su detección.' },
  { term: 'Auditoría', category: 'Auditoría', definition: 'Proceso sistemático, independiente y documentado para obtener evidencias de auditoría y evaluarlas objetivamente para determinar el grado en que se cumplen los criterios de auditoría.' },
  { term: 'Auditoría de segunda parte', category: 'Auditoría', definition: 'Auditoría realizada por clientes u otras personas con interés en la organización, como auditores de proveedores. También llamada auditoría de cliente o de proveedor.' },
  { term: 'Auditoría de tercera parte', category: 'Auditoría', definition: 'Auditoría realizada por organismos externos independientes, como organismos de certificación o autoridades reguladoras. Es la base para obtener certificaciones formales.' },
  { term: 'Auditoría interna', category: 'Auditoría', definition: 'Auditoría realizada por o en nombre de la propia organización para revisar el sistema de gestión. También llamada auditoría de primera parte.' },
  // B
  { term: 'Benchmarking', category: 'Mejora', definition: 'Proceso de comparar el desempeño, procesos y prácticas de una organización con los de otras organizaciones reconocidas como líderes, con el fin de identificar oportunidades de mejora.' },
  { term: 'BPM (Buenas Prácticas de Manufactura)', category: 'Regulatorio', definition: 'Conjunto de lineamientos que garantizan que los productos farmacéuticos, alimenticios o cosméticos se producen de forma consistente y controlada, minimizando riesgos de contaminación.' },
  { term: 'BRC Food', category: 'Normas', definition: 'Estándar de seguridad alimentaria de la British Retail Consortium, exigido por grandes cadenas de retail globales. Evalúa producción, higiene, trazabilidad y gestión de alérgenos en plantas de alimentos.' },
  // C
  { term: 'Cadena de suministro', category: 'Sistema de gestión', definition: 'Red de organizaciones, personas, actividades, información y recursos involucrados en la producción y entrega de un producto o servicio desde el proveedor hasta el cliente final.' },
  { term: 'Calibración', category: 'Medición', definition: 'Operación que establece la relación entre los valores indicados por un instrumento de medición y los valores correspondientes de una magnitud realizada por patrones de referencia trazables.' },
  { term: 'Certificación', category: 'Sistema de gestión', definition: 'Reconocimiento formal otorgado por un organismo de certificación acreditado de que el sistema de gestión de una organización cumple con los requisitos de una norma específica.' },
  { term: 'Competencia', category: 'Liderazgo', definition: 'Capacidad para aplicar conocimientos y habilidades con el fin de lograr los resultados previstos. ISO 9001 exige que la organización determine y asegure la competencia del personal que afecta el desempeño del sistema.' },
  { term: 'Conformidad', category: 'Sistema de gestión', definition: 'Cumplimiento de un requisito. Opuesto a no conformidad. Una organización en conformidad cumple con los requisitos de la norma, del cliente y/o los regulatorios aplicables.' },
  { term: 'Contexto de la organización', category: 'Sistema de gestión', definition: 'Combinación de factores internos y externos que pueden afectar el enfoque de la organización para desarrollar y lograr sus objetivos. Incluye el análisis FODA y de partes interesadas.' },
  { term: 'Control de cambios', category: 'Documentación', definition: 'Proceso sistemático para gestionar modificaciones a procesos, productos, servicios o documentos, asegurando que se evalúen, aprueben, implementen y registren de forma controlada.' },
  { term: 'Control de documentos', category: 'Documentación', definition: 'Proceso para gestionar la creación, revisión, aprobación, distribución, acceso y disposición de los documentos del sistema de gestión, asegurando que solo se usen versiones vigentes.' },
  { term: 'Control estadístico de procesos (SPC)', category: 'Automotriz', definition: 'Metodología que usa técnicas estadísticas para monitorear y controlar un proceso productivo, permitiendo detectar variaciones antes de que produzcan defectos.' },
  { term: 'CTPAT', category: 'Normas', definition: 'Customs-Trade Partnership Against Terrorism. Programa voluntario de la aduana de EE.UU. que certifica a empresas que implementan controles de seguridad en su cadena de suministro internacional.' },
  { term: 'CSR (Customer Specific Requirements)', category: 'Automotriz', definition: 'Requisitos específicos del cliente (OEM) que complementan los requisitos de IATF 16949 y deben cumplirse adicionalmente por los proveedores de la cadena automotriz.' },
  // D
  { term: 'Defecto', category: 'Mejora', definition: 'Incumplimiento de un requisito asociado a un uso previsto o especificado. A diferencia de la no conformidad, el defecto implica responsabilidad legal ya que se relaciona con el uso del producto.' },
  { term: 'Desempeño', category: 'Medición', definition: 'Resultado medible relativo al logro de objetivos de calidad, seguridad, ambiente u otras dimensiones del sistema de gestión.' },
  { term: 'Desviación', category: 'Mejora', definition: 'Apartamiento de los requisitos especificados. Puede ser temporal (permiso de desviación antes de producir) o permanente (concesión después de producir). Requiere autorización formal.' },
  { term: 'Diagrama de Ishikawa', category: 'Mejora', definition: 'También conocido como diagrama de causa-efecto o espina de pescado. Herramienta visual para identificar y organizar las posibles causas de un problema, agrupadas en categorías (las 6M).' },
  { term: 'Documento', category: 'Documentación', definition: 'Información y el medio en que está contenida. En sistemas de gestión incluye procedimientos, instrucciones de trabajo, especificaciones, planes y formularios.' },
  // E
  { term: 'Eficacia', category: 'Medición', definition: 'Grado en que se realizan las actividades planificadas y se logran los resultados planificados. Una acción es eficaz cuando alcanza el objetivo propuesto.' },
  { term: 'Eficiencia', category: 'Medición', definition: 'Relación entre el resultado alcanzado y los recursos utilizados. Una acción es eficiente cuando logra el objetivo con el menor uso posible de recursos.' },
  { term: 'Enfoque al cliente', category: 'Sistema de gestión', definition: 'Principio fundamental de la gestión de calidad que orienta todos los esfuerzos de la organización hacia el entendimiento y cumplimiento de los requisitos del cliente para lograr su satisfacción.' },
  { term: 'Enfoque basado en procesos', category: 'Sistema de gestión', definition: 'Principio que reconoce que los resultados se logran más eficientemente cuando las actividades y recursos relacionados se gestionan como procesos con entradas, actividades, salidas e indicadores definidos.' },
  { term: 'Evidencia objetiva', category: 'Auditoría', definition: 'Datos que respaldan la existencia o veracidad de algo. En auditorías, es la información verificable basada en hechos, obtenida mediante observación, medición o prueba.' },
  // F
  { term: 'FMEA (Failure Mode and Effect Analysis)', category: 'Automotriz', definition: 'Análisis de Modo y Efecto de Falla. Metodología estructurada para identificar modos de falla potenciales en productos y procesos, evaluar su severidad, ocurrencia y detectabilidad.' },
  { term: 'FODA', category: 'Sistema de gestión', definition: 'Herramienta de análisis estratégico que evalúa las Fortalezas, Oportunidades, Debilidades y Amenazas de una organización. Requerida para determinar el contexto en ISO 9001:2015.' },
  { term: 'FSSC 22000', category: 'Normas', definition: 'Food Safety System Certification 22000. Esquema de certificación de inocuidad reconocido por GFSI que combina ISO 22000 con requisitos adicionales del sector. Ampliamente requerido en la industria alimentaria global.' },
  // G
  { term: 'Gestión ambiental', category: 'Sistema de gestión', definition: 'Sistema estructurado conforme a ISO 14001 para identificar, controlar y mejorar el impacto ambiental de una organización, cumpliendo la legislación aplicable y promoviendo la mejora continua ambiental.' },
  { term: 'Gestión de calidad', category: 'Sistema de gestión', definition: 'Actividades coordinadas para dirigir y controlar una organización en lo relativo a la calidad, incluyendo el establecimiento de políticas, objetivos, planificación, control y mejora.' },
  { term: 'Gestión del riesgo', category: 'Riesgos', definition: 'Actividades coordinadas para dirigir y controlar una organización en lo relativo al riesgo, incluyendo la identificación, análisis, evaluación, tratamiento y monitoreo de riesgos.' },
  { term: 'GFSI', category: 'Inocuidad', definition: 'Global Food Safety Initiative. Organización que establece los criterios de referencia para los esquemas de certificación de inocuidad alimentaria. Reconoce estándares como FSSC 22000, BRC, IFS y SQF.' },
  // H
  { term: 'HACCP', category: 'Inocuidad', definition: 'Hazard Analysis and Critical Control Points (Análisis de Peligros y Puntos Críticos de Control). Metodología preventiva para identificar y controlar los peligros significativos para la inocuidad alimentaria.' },
  { term: 'Hallazgo de auditoría', category: 'Auditoría', definition: 'Resultados de la evaluación de la evidencia de auditoría recopilada frente a los criterios de auditoría. Los hallazgos pueden ser conformidades, no conformidades u oportunidades de mejora.' },
  { term: 'Herramientas de calidad', category: 'Mejora', definition: 'Conjunto de técnicas y métodos usados para analizar, controlar y mejorar la calidad de procesos y productos. Las 7 herramientas básicas incluyen: diagrama de Ishikawa, Pareto, histograma, gráficas de control, entre otras.' },
  // I
  { term: 'IATF 16949', category: 'Normas', definition: 'Norma de sistema de gestión de calidad específica para la industria automotriz global. Reemplazó a ISO/TS 16949. Integra los requisitos de ISO 9001 con requisitos adicionales del sector: APQP, PPAP, SPC, MSA y FMEA.' },
  { term: 'IFS Food', category: 'Normas', definition: 'International Featured Standards Food. Certificación requerida por distribuidores europeos para garantizar que los procesos de fabricación de alimentos cumplen altos estándares de calidad e inocuidad.' },
  { term: 'Indicador clave de desempeño (KPI)', category: 'Medición', definition: 'Medida cuantificable usada para evaluar el desempeño de un proceso, área o sistema de gestión en relación con los objetivos establecidos.' },
  { term: 'Información documentada', category: 'Documentación', definition: 'Término usado en las normas ISO de la familia de alto nivel para referirse tanto a los documentos (procedimientos, instrucciones) como a los registros (evidencias de actividades realizadas).' },
  { term: 'Inocuidad alimentaria', category: 'Inocuidad', definition: 'Garantía de que los alimentos no causarán daño al consumidor cuando se preparen o consuman de acuerdo con su uso previsto. Concepto central de HACCP, ISO 22000 y FSSC 22000.' },
  { term: 'Inspección', category: 'Medición', definition: 'Evaluación de la conformidad mediante observación y juicio acompañado, cuando sea apropiado, de medición, ensayo o calibración. Puede realizarse sobre materias primas, producto en proceso o producto terminado.' },
  { term: 'Instrucción de trabajo', category: 'Documentación', definition: 'Documento que describe en detalle cómo realizar una tarea específica. Más detallado que un procedimiento, se usa cuando la ausencia de instrucciones podría afectar la calidad o seguridad.' },
  { term: 'ISO 9001', category: 'Normas', definition: 'Norma internacional de sistemas de gestión de la calidad publicada por ISO. Es la más certificada del mundo. Especifica los requisitos que debe cumplir una organización para demostrar su capacidad de proporcionar productos y servicios que satisfagan al cliente.' },
  { term: 'ISO 14001', category: 'Normas', definition: 'Norma internacional de sistemas de gestión ambiental. Define los requisitos para que una organización establezca, implemente, mantenga y mejore continuamente su desempeño ambiental.' },
  { term: 'ISO 22000', category: 'Normas', definition: 'Norma internacional de sistemas de gestión de la inocuidad de los alimentos. Integra los principios HACCP con los requisitos de un sistema de gestión completo para controlar los peligros relacionados con la seguridad alimentaria.' },
  { term: 'ISO 27001', category: 'Normas', definition: 'Norma internacional de sistemas de gestión de la seguridad de la información. Especifica los requisitos para establecer, implementar, mantener y mejorar un sistema de seguridad de la información basado en análisis de riesgos.' },
  { term: 'ISO 45001', category: 'Normas', definition: 'Norma internacional de sistemas de gestión de la seguridad y salud en el trabajo. Reemplazó a OHSAS 18001. Ayuda a las organizaciones a prevenir lesiones y enfermedades laborales y a crear condiciones de trabajo seguras.' },
  { term: 'ISO 50001', category: 'Normas', definition: 'Norma internacional de sistemas de gestión de la energía. Proporciona un marco para que las organizaciones establezcan políticas, objetivos y planes de acción para mejorar la eficiencia energética.' },
  { term: 'ISO (Organización Internacional de Normalización)', category: 'Sistema de gestión', definition: 'Organismo internacional independiente, no gubernamental, con membresía de 167 organismos nacionales de normalización. Desarrolla y publica normas internacionales voluntarias en casi todos los sectores.' },
  // J
  { term: 'Jidoka', category: 'Mejora', definition: 'Principio del sistema de producción Toyota que consiste en dotar a las máquinas y operadores de la capacidad de detectar una anomalía y detener inmediatamente la producción para evitar la fabricación de defectos.' },
  { term: 'Just in Time (JIT)', category: 'Mejora', definition: 'Metodología de producción que consiste en producir y entregar los materiales exactamente cuando se necesitan, en la cantidad exacta. Busca eliminar desperdicios y reducir inventarios al mínimo.' },
  // K
  { term: 'Kaizen', category: 'Mejora', definition: 'Filosofía japonesa de mejora continua que involucra a todos los niveles de la organización. Busca mejorar los procesos de forma incremental y constante, eliminando desperdicios y optimizando el flujo de trabajo.' },
  { term: 'Kanban', category: 'Mejora', definition: 'Sistema visual de gestión de flujo de trabajo originado en Toyota. Usa tarjetas o señales para controlar el inventario y la producción en función de la demanda real, minimizando el exceso de producción.' },
  { term: 'KPI (Key Performance Indicator)', category: 'Medición', definition: 'Indicador Clave de Desempeño. Métrica cuantificable que permite evaluar el progreso hacia los objetivos estratégicos y operativos de la organización. Base del seguimiento en cualquier sistema de gestión.' },
  // L
  { term: 'Lean Manufacturing', category: 'Mejora', definition: 'Sistema de producción orientado a eliminar todo tipo de desperdicio (muda) en los procesos: sobreproducción, esperas, transportes innecesarios, defectos, inventario excesivo, movimientos y procesos inadecuados.' },
  { term: 'Liderazgo', category: 'Liderazgo', definition: 'Principio fundamental de las normas ISO que exige que la alta dirección demuestre compromiso y participación activa en el sistema de gestión, estableciendo dirección, creando condiciones y eliminando barreras.' },
  { term: 'Límite crítico', category: 'Inocuidad', definition: 'En HACCP, criterio que separa lo aceptable de lo inaceptable en un Punto Crítico de Control (PCC). Su superación indica que el proceso está fuera de control y el alimento puede no ser seguro.' },
  { term: 'Lista maestra de documentos', category: 'Documentación', definition: 'Registro que contiene el inventario de todos los documentos del sistema de gestión, indicando el código, título, versión vigente, responsable y estado de cada uno. Garantiza el control de versiones.' },
  // M
  { term: 'Manual de calidad', category: 'Documentación', definition: 'Documento que especifica el sistema de gestión de calidad de una organización. Aunque ISO 9001:2015 ya no lo exige formalmente, muchas organizaciones lo mantienen como referencia general del sistema.' },
  { term: 'Mapa de procesos', category: 'Sistema de gestión', definition: 'Representación gráfica de los procesos de una organización y sus interacciones. Permite visualizar cómo los procesos estratégicos, operativos y de apoyo se relacionan para generar valor al cliente.' },
  { term: 'Mejora continua', category: 'Mejora', definition: 'Actividad recurrente para mejorar el desempeño. En ISO 9001 se representa con el ciclo PHVA (Planificar-Hacer-Verificar-Actuar), también conocido como ciclo de Deming.' },
  { term: 'Metodología 8D', category: 'Mejora', definition: 'Proceso de resolución de problemas en 8 disciplinas desarrollado por Ford. Ampliamente usado en la industria automotriz para abordar no conformidades: desde la formación del equipo hasta la prevención de recurrencia.' },
  { term: 'MSA (Measurement System Analysis)', category: 'Automotriz', definition: 'Análisis del Sistema de Medición. Estudio estadístico que evalúa la variación del sistema de medición para determinar si es adecuado para controlar el proceso de manufactura.' },
  // N
  { term: 'No conformidad', category: 'Mejora', definition: 'Incumplimiento de un requisito. Puede referirse al incumplimiento de requisitos del cliente, legales, de la norma o del propio sistema de gestión de la organización.' },
  { term: 'Norma', category: 'Sistema de gestión', definition: 'Documento establecido por consenso y aprobado por un organismo reconocido que proporciona reglas, directrices o características para actividades o sus resultados.' },
  { term: 'Norma ISO de alto nivel (HLS)', category: 'Sistema de gestión', definition: 'Estructura armonizada que comparten todas las normas ISO de sistemas de gestión desde 2012. Facilita la integración de múltiples sistemas (calidad, ambiente, seguridad) en un único sistema de gestión.' },
  // O
  { term: 'Objetivo de calidad', category: 'Sistema de gestión', definition: 'Resultado a lograr relacionado con la calidad. Deben ser medibles, coherentes con la política de calidad, monitoreados y comunicados dentro de la organización.' },
  { term: 'OEM (Original Equipment Manufacturer)', category: 'Automotriz', definition: 'Fabricante de equipo original. En la industria automotriz, se refiere a las marcas de automóviles (GM, Ford, Toyota, Stellantis) que dictan los requisitos técnicos y de calidad a su cadena de proveedores.' },
  { term: 'OHSAS 18001', category: 'Normas', definition: 'Estándar anterior de sistemas de gestión de seguridad y salud en el trabajo, reemplazado por ISO 45001 en 2018. Muchas organizaciones migraron de OHSAS 18001 a ISO 45001 durante el período de transición.' },
  { term: 'Oportunidad de mejora', category: 'Auditoría', definition: 'Hallazgo de auditoría que no constituye una no conformidad pero que representa una posibilidad de mejorar el desempeño del sistema. No es obligatorio tratarla, pero se recomienda.' },
  { term: 'Organismo de certificación', category: 'Sistema de gestión', definition: 'Entidad acreditada por un organismo de acreditación para auditar y certificar sistemas de gestión conforme a normas internacionales. Ejemplos: Bureau Veritas, SGS, TÜV, LRQA.' },
  // P
  { term: 'Partes interesadas', category: 'Sistema de gestión', definition: 'Persona u organización que puede afectar, verse afectada, o percibirse como afectada por una decisión o actividad de la organización. Incluye clientes, empleados, proveedores, reguladores y comunidad.' },
  { term: 'PCC (Punto Crítico de Control)', category: 'Inocuidad', definition: 'En HACCP, etapa del proceso donde se puede aplicar un control para prevenir, eliminar o reducir a un nivel aceptable un peligro para la inocuidad alimentaria.' },
  { term: 'Pensamiento basado en riesgos', category: 'Riesgos', definition: 'Enfoque de la versión 2015 de las normas ISO que requiere que las organizaciones identifiquen los riesgos y oportunidades que pueden afectar sus objetivos, y planifiquen acciones para abordarlos.' },
  { term: 'PHVA', category: 'Mejora', definition: 'Ciclo de mejora continua: Planificar (establecer objetivos), Hacer (implementar acciones), Verificar (monitorear resultados) y Actuar (mejorar en base a los resultados). También conocido como ciclo de Deming o PDCA.' },
  { term: 'Plan de control', category: 'Automotriz', definition: 'Documento que describe los controles aplicados a las características del proceso y del producto para asegurar la calidad. Requerido por IATF 16949 y vinculado a las fases del APQP.' },
  { term: 'Política de calidad', category: 'Liderazgo', definition: 'Intenciones y dirección de una organización expresadas formalmente por la alta dirección en relación con la calidad. Debe ser coherente con el contexto y los objetivos estratégicos.' },
  { term: 'PPAP (Production Part Approval Process)', category: 'Automotriz', definition: 'Proceso de Aprobación de Partes de Producción. Proceso requerido en la industria automotriz para demostrar que el proveedor comprende los requisitos del cliente y puede producir partes que los cumplan consistentemente.' },
  { term: 'Procedimiento', category: 'Documentación', definition: 'Forma especificada de llevar a cabo una actividad o un proceso. Define el qué, quién, cuándo, dónde y cómo de una actividad. Puede estar documentado o no, aunque en sistemas de gestión se documenta para asegurar consistencia.' },
  { term: 'Proceso', category: 'Sistema de gestión', definition: 'Conjunto de actividades mutuamente relacionadas que transforman elementos de entrada en resultados. El enfoque basado en procesos es uno de los principios fundamentales de la gestión de calidad.' },
  { term: 'Producto no conforme', category: 'Mejora', definition: 'Producto o servicio que no cumple con los requisitos especificados. Su gestión incluye identificación, segregación, evaluación y disposición (reproceso, reclasificación, rechazo o concesión).' },
  { term: 'Proveedor', category: 'Sistema de gestión', definition: 'Organización o persona que proporciona un producto o servicio. En la cadena de valor puede ser externo (tercero) o interno (otro departamento). ISO 9001 exige evaluar y controlar los proveedores externos.' },
  // Q
  { term: 'QFD (Quality Function Deployment)', category: 'Mejora', definition: 'Despliegue de la Función de Calidad. Metodología para traducir los requisitos del cliente en características técnicas del producto a lo largo de las fases de diseño y desarrollo.' },
  // R
  { term: 'Registro', category: 'Documentación', definition: 'Documento que presenta resultados obtenidos o proporciona evidencia de actividades realizadas. Los registros no se modifican: documentan lo que ocurrió.' },
  { term: 'Reproceso', category: 'Mejora', definition: 'Acción tomada sobre un producto no conforme para que cumpla con los requisitos. A diferencia de la reparación, el reproceso lleva el producto a cumplir completamente con las especificaciones originales.' },
  { term: 'Requisito', category: 'Sistema de gestión', definition: 'Necesidad o expectativa establecida, generalmente implícita u obligatoria. Los requisitos pueden provenir de clientes, normas, regulaciones o de la propia organización.' },
  { term: 'Revisión por la dirección', category: 'Liderazgo', definition: 'Revisión periódica del sistema de gestión por parte de la alta dirección para asegurarse de su conveniencia, adecuación, eficacia y alineación con la dirección estratégica de la organización.' },
  { term: 'Riesgo', category: 'Riesgos', definition: 'Efecto de la incertidumbre sobre los objetivos. Un riesgo puede tener consecuencias positivas (oportunidades) o negativas (amenazas). El pensamiento basado en riesgos es central en ISO 9001:2015.' },
  { term: 'Riesgo residual', category: 'Riesgos', definition: 'Riesgo que permanece después de que se han aplicado los controles o tratamientos. La organización debe decidir si el riesgo residual es aceptable o si requiere controles adicionales.' },
  // S
  { term: 'Satisfacción del cliente', category: 'Sistema de gestión', definition: 'Percepción del cliente sobre el grado en que se han cumplido sus expectativas. Es el resultado que persigue todo sistema de gestión de calidad y un requisito explícito de ISO 9001.' },
  { term: 'Seguimiento y medición', category: 'Medición', definition: 'Actividades para determinar el estado de los procesos, productos y el sistema de gestión. El seguimiento es una determinación continua del estado, mientras que la medición implica determinar un valor.' },
  { term: 'Sistema de gestión', category: 'Sistema de gestión', definition: 'Conjunto de elementos interrelacionados de una organización para establecer políticas, objetivos y procesos para lograrlos. Puede aplicarse a calidad, ambiente, seguridad, energía, entre otros.' },
  { term: 'Sistema de gestión integrado (SGI)', category: 'Sistema de gestión', definition: 'Sistema que combina varios estándares de gestión (como ISO 9001, ISO 14001 e ISO 45001) en un único sistema coherente, aprovechando la estructura de alto nivel común y evitando duplicaciones.' },
  { term: 'SQF', category: 'Normas', definition: 'Safe Quality Food. Estándar de inocuidad y calidad alimentaria reconocido por GFSI, enfocado en el mercado norteamericano. Certifica tanto la inocuidad como la calidad del producto a lo largo de toda la cadena.' },
  // T
  { term: 'Trazabilidad', category: 'Documentación', definition: 'Capacidad para seguir el histórico, aplicación o localización de un objeto. En manufactura, permite rastrear el origen de materiales, el proceso de fabricación y la distribución de un producto.' },
  { term: 'Tratamiento del riesgo', category: 'Riesgos', definition: 'Proceso para modificar el riesgo. Las opciones incluyen: evitar el riesgo, aceptarlo, reducirlo mediante controles, transferirlo (seguros, contratos) o compartirlo con otras partes.' },
  // U
  { term: 'Umbral de riesgo', category: 'Riesgos', definition: 'Nivel de riesgo que una organización está dispuesta a aceptar o tolerar. Los riesgos por encima del umbral requieren tratamiento; los que están por debajo pueden aceptarse sin acción adicional.' },
  { term: 'Usuario final', category: 'Sistema de gestión', definition: 'Persona o entidad que utiliza el producto o servicio en su uso previsto. Diferente del cliente directo (quien compra), el usuario final es quien experimenta directamente el producto.' },
  // V
  { term: 'Validación', category: 'Medición', definition: 'Confirmación mediante evidencia objetiva de que se han cumplido los requisitos para una utilización o aplicación específica prevista. La validación pregunta "¿funciona para lo que se diseñó?".' },
  { term: 'Verificación', category: 'Medición', definition: 'Confirmación mediante evidencia objetiva de que se han cumplido los requisitos especificados. La verificación pregunta "¿cumple con las especificaciones?".' },
  { term: 'Vigilancia del mercado', category: 'Regulatorio', definition: 'Actividades realizadas por las autoridades competentes para verificar que los productos en el mercado cumplen con los requisitos legales y técnicos aplicables. Relevante en sectores como dispositivos médicos y alimentos.' },
  // W
  { term: 'Waste (Desperdicio)', category: 'Mejora', definition: 'Cualquier actividad que consume recursos sin agregar valor para el cliente. Lean Manufacturing identifica 7 tipos de desperdicio (muda): sobreproducción, espera, transporte, procesamiento, inventario, movimiento y defectos.' },
  // X
  { term: 'X-bar (Gráfica de control de medias)', category: 'Medición', definition: 'Herramienta estadística de control de proceso que monitorea la media de una característica de calidad a lo largo del tiempo. Se usa junto con la gráfica R para detectar variaciones en el proceso.' },
  // Y
  { term: 'Yield (Rendimiento de proceso)', category: 'Medición', definition: 'Porcentaje de unidades producidas correctamente sin requerir reproceso o reclasificación. El "First Time Yield" (FTY) mide la calidad a la primera pasada y es un indicador clave en manufactura.' },
  // Z
  { term: 'Zero defects (Cero defectos)', category: 'Mejora', definition: 'Filosofía de calidad promovida por Philip Crosby que establece que el estándar de desempeño debe ser producir sin defectos. Se basa en hacer las cosas bien a la primera, previniendo errores en lugar de corrigiéndolos.' },
]

const CATEGORIES = ['Todos', 'Auditoría', 'Automotriz', 'Documentación', 'Inocuidad', 'Liderazgo', 'Medición', 'Mejora', 'Normas', 'Regulatorio', 'Riesgos', 'Sistema de gestión']

const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

function GlosarioContent() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('Todos')
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({})

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim()
    return TERMINOS.filter(t => {
      const matchesSearch = !q || t.term.toLowerCase().includes(q) || t.definition.toLowerCase().includes(q)
      const matchesCategory = activeCategory === 'Todos' || t.category === activeCategory
      return matchesSearch && matchesCategory
    })
  }, [search, activeCategory])

  const byLetter = useMemo(() => {
    const map: Record<string, typeof TERMINOS> = {}
    for (const t of filtered) {
      const letter = t.term[0].toUpperCase()
      if (!map[letter]) map[letter] = []
      map[letter].push(t)
    }
    return map
  }, [filtered])

  const activeLetters = new Set(Object.keys(byLetter))

  const scrollToLetter = (letter: string) => {
    sectionRefs.current[letter]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <main>
      {/* Hero */}
      <section className="bg-[#fafafa] border-b border-[#f0f0f0] pt-32 pb-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Glosario</p>
          <h1 className="text-[#1f2020] text-4xl md:text-5xl font-light leading-tight mb-4">
            Términos de calidad y certificación
          </h1>
          <p className="text-[#3a3a3a]/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            Todas las definiciones que necesitas para entender las normas ISO, HACCP, IATF y más.
          </p>

          {/* Search */}
          <div className="relative max-w-lg mx-auto">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3a3a3a]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0z" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={e => setSearch(e.target.value)}
              placeholder="Buscar término o definición..."
              className="w-full bg-white border border-[#e0e0e0] focus:border-[#763d50]/40 focus:outline-none rounded-full pl-11 pr-5 py-3 text-sm text-[#1f2020] placeholder:text-[#3a3a3a]/35 transition-colors shadow-sm"
            />
            {search && (
              <button
                onClick={() => setSearch('')}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-[#3a3a3a]/30 hover:text-[#3a3a3a] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Alphabet index */}
      {!search && (
        <div className="sticky top-16 z-30 bg-white/95 backdrop-blur border-b border-[#f0f0f0]">
          <div className="max-w-5xl mx-auto px-6 py-3 flex flex-wrap gap-1 justify-center">
            {ALPHABET.map(letter => (
              <button
                key={letter}
                onClick={() => activeLetters.has(letter) && scrollToLetter(letter)}
                className={`w-7 h-7 rounded-md text-xs font-semibold transition-all ${
                  activeLetters.has(letter)
                    ? 'text-[#763d50] hover:bg-[#763d50]/8 cursor-pointer'
                    : 'text-[#3a3a3a]/20 cursor-default'
                }`}
              >
                {letter}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Category filter */}
      <div className="bg-white border-b border-[#f0f0f0] px-6 py-3 overflow-x-auto">
        <div className="max-w-5xl mx-auto flex gap-2 w-max mx-auto">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat
                  ? 'bg-[#763d50] text-white'
                  : 'bg-[#f4f4f4] text-[#3a3a3a]/60 hover:bg-[#763d50]/8 hover:text-[#763d50]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count when searching */}
      {search && (
        <div className="max-w-5xl mx-auto px-6 py-4">
          <p className="text-sm text-[#3a3a3a]/50">
            {filtered.length === 0 ? 'Sin resultados' : `${filtered.length} término${filtered.length !== 1 ? 's' : ''} encontrado${filtered.length !== 1 ? 's' : ''}`}
          </p>
        </div>
      )}

      {/* Terms */}
      <div className="max-w-5xl mx-auto px-6 py-12">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-[#3a3a3a]/40 text-lg">No se encontraron términos.</p>
            <button onClick={() => { setSearch(''); setActiveCategory('Todos') }} className="mt-4 text-[#763d50] text-sm hover:underline">
              Limpiar filtros
            </button>
          </div>
        ) : search ? (
          // Flat list when searching
          <div className="divide-y divide-[#f0f0f0]">
            {filtered.map(t => (
              <TermRow key={t.term} t={t} showCategory />
            ))}
          </div>
        ) : (
          // Grouped by letter
          <div className="space-y-12">
            {ALPHABET.filter(l => activeLetters.has(l)).map(letter => (
              <div
                key={letter}
                ref={el => { sectionRefs.current[letter] = el }}
                className="scroll-mt-32"
              >
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-[#763d50]/30 text-5xl font-light leading-none">{letter}</span>
                  <div className="flex-1 h-px bg-[#f0f0f0]" />
                </div>
                <div className="divide-y divide-[#f0f0f0]">
                  {byLetter[letter].map(t => (
                    <TermRow key={t.term} t={t} showCategory />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}

function TermRow({ t, showCategory }: { t: { term: string; category: string; definition: string }; showCategory: boolean }) {
  return (
    <div className="py-5 grid grid-cols-1 md:grid-cols-[220px_1fr] gap-2 md:gap-8">
      <div>
        <p className="text-[#1f2020] font-semibold text-sm">{t.term}</p>
        {showCategory && (
          <span className="inline-block mt-1 px-2 py-0.5 bg-[#763d50]/6 text-[#763d50] text-[10px] font-semibold uppercase tracking-wide rounded-full">
            {t.category}
          </span>
        )}
      </div>
      <p className="text-[#3a3a3a]/65 text-sm leading-relaxed">{t.definition}</p>
    </div>
  )
}

export default function GlosarioPage() {
  return (
    <LanguageProvider>
      <Navbar />
      <GlosarioContent />
      <Footer />
    </LanguageProvider>
  )
}
