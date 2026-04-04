import type { AgentChat } from './data'

type IndustriaTranslation = {
  name: string
  heroTitle: string
  heroSubtitle: string
  retos: { title: string; description: string }[]
  soluciones: { title: string; description: string }[]
  ctaTitle: string
  ctaSubtitle: string
  agentChat: AgentChat
}

export const INDUSTRIAS_EN: Record<string, IndustriaTranslation> = {
  manufactura: {
    name: 'Manufacturing',
    heroTitle: 'Manufacturing under control. No paperwork, no friction.',
    heroSubtitle:
      "Consultto centralizes your plant's management system so that nonconformities get closed, documents are always current, and audits arrive without surprises.",
    retos: [
      {
        title: 'Recurring nonconformities on the shop floor',
        description:
          'The same defects appear over and over because root cause analysis in manufacturing is done incompletely or is not documented where it should be.',
      },
      {
        title: 'Outdated document versions on the production line',
        description:
          'Plant operators work with obsolete procedures because document control is manual and no one is certain which version is currently in force.',
      },
      {
        title: 'Measuring equipment with no calibration traceability',
        description:
          'Instruments are used out of range because there is no system that alerts on expiring calibrations or records calibration evidence for each piece of manufacturing equipment.',
      },
      {
        title: 'Audits that generate no real improvements',
        description:
          'Internal plant audits are conducted to check a box, without a structured clause-by-clause plan or genuine follow-up on the findings detected.',
      },
    ],
    soluciones: [
      {
        title: 'Nonconformities with root cause analysis for the shop floor',
        description:
          'Record manufacturing nonconformities, guide the analysis with structured methodologies (5 Whys, Ishikawa), and track automatically until verified closure.',
      },
      {
        title: 'Document control on the production line',
        description:
          'Every procedure, technical instruction, and plant policy has its current, approved, and distributed version — no physical binders, no emails with old revisions.',
      },
      {
        title: 'Equipment calibration and preventive maintenance',
        description:
          'The system automatically alerts on upcoming calibration expirations for each piece of manufacturing equipment and records evidence with full traceability.',
      },
      {
        title: 'Internal audits by clause and area',
        description:
          'Plan the annual plant audit program, execute clause-by-clause checklists, and generate findings reports ready for management review.',
      },
    ],
    ctaTitle: 'Your manufacturing plant, certified and running.',
    ctaSubtitle: 'Stop fighting fires on the floor. With Consultto, your management system works for you.',
    agentChat: {
      userMessage:
        'We have a recurring nonconformity in welding. This is the third time this month and we cannot find the cause.',
      aiIntro:
        'I reviewed the plant history. All 3 NCs share the same probable root cause: variation in the night shift.',
      aiPoints: [
        '→ Work instruction outdated (v1.2 vs current v1.4)',
        '→ Welding equipment without calibration for 18 days',
        '→ No evidence of Operator B training in the last 60 days',
      ],
      aiFollowUp: 'Should I generate the nonconformity with the suggested corrective actions?',
    },
  },

  automotriz: {
    name: 'Automotive',
    heroTitle: 'IATF 16949 compliant. Your place in the supply chain secured.',
    heroSubtitle:
      'Automotive suppliers have no margin for error. Consultto gives you the system to manage CSRs, process changes, and nonconformities without improvisation.',
    retos: [
      {
        title: 'OEM-specific requirements without centralized control',
        description:
          'Each automotive customer has its own CSRs that layer on top of IATF requirements and must be documented, communicated, and controlled independently per OEM.',
      },
      {
        title: 'Process changes without customer notification',
        description:
          'In the automotive supply chain, any change to a process, material, or supplier requires OEM approval. Without a centralized system, changes get missed or communicated too late.',
      },
      {
        title: 'Critical suppliers evaluated in spreadsheets',
        description:
          'The automotive supply chain demands continuous evaluation, qualification, and monitoring of suppliers. Managing this in spreadsheets is a certification risk.',
      },
      {
        title: 'Customer contingency responses without structured records',
        description:
          'A field defect or deviation reported by the OEM requires immediate information on processes, materials, and changes. Without structured records, the response is improvised and arrives too late.',
      },
    ],
    soluciones: [
      {
        title: 'CSR management by OEM and IATF standard',
        description:
          'Record and control the specific requirements of each automotive customer alongside IATF 16949, with compliance evidence in a single place.',
      },
      {
        title: 'Change control with customer notification',
        description:
          'Every process or product change in automotive follows a formal approval workflow with automatic OEM notification and evidence records.',
      },
      {
        title: 'Automotive supplier evaluation and performance',
        description:
          'Rate your automotive supply chain suppliers, record second-party audits, and maintain an up-to-date performance dashboard.',
      },
      {
        title: 'Contingency files ready for the OEM',
        description:
          'Centralize process records, changes, and nonconformities by period so that when the OEM reports a deviation, you can build the response file from already-documented information.',
      },
    ],
    ctaTitle: 'Protect your IATF certification with a system that never fails.',
    ctaSubtitle: 'Fast implementation for automotive suppliers. Your place in the chain, protected.',
    agentChat: {
      userMessage: 'The OEM notified us of a deviation on lot 4821. They need full traceability before noon.',
      aiIntro: 'I located lot 4821. There is a process change from the 14th that was not communicated to the customer in time.',
      aiPoints: [
        '→ Torque parameter change recorded internally but without OEM approval',
        "→ 3 parts from the lot are already on the customer's assembly line",
        '→ Customer CSR requires notification within 24h of detection',
      ],
      aiFollowUp: 'Should I generate the deviation report and the containment file to send to the OEM?',
    },
  },

  'alimentos-y-bebidas': {
    name: 'Food & Beverage',
    heroTitle: 'Food safety managed, not improvised.',
    heroSubtitle:
      'In food and beverage, a food safety failure can cost a certification — or something far worse. Consultto gives you total control over HACCP, PRPs, and third-party audits.',
    retos: [
      {
        title: 'CCPs monitored on paper with no real visibility',
        description:
          'Critical control point monitoring records at the food plant are filled in on paper and no one has real-time visibility into whether critical limits are being met.',
      },
      {
        title: 'Prerequisite programs expiring without alerts',
        description:
          'Cleaning, pest control, and maintenance programs in the food industry have critical deadlines that get lost among spreadsheets and personal calendars.',
      },
      {
        title: 'Scattered production records that complicate audits',
        description:
          'BRC and IFS require demonstrating process traceability. Without organized, accessible records at your plant, gathering evidence for an audit becomes an emergency.',
      },
      {
        title: 'Product nonconformities without clear disposition',
        description:
          'Product deviations in food are recorded inconsistently, with no root cause analysis or follow-up through to the final disposition of the lot.',
      },
    ],
    soluciones: [
      {
        title: 'Digital HACCP with CCP monitoring',
        description:
          'Document your HACCP plan, record CCP monitoring at your food plant, and generate the evidence that FSSC, BRC, or IFS auditors require.',
      },
      {
        title: 'PRP control with automatic alerts',
        description:
          'Manage all your food prerequisite programs with expiration alerts, execution records, and centralized photographic evidence.',
      },
      {
        title: 'Process records organized for audits and contingencies',
        description:
          'Centralize raw material, input, and production records so information is available when you need it — no searching through folders or emails.',
      },
      {
        title: 'Product nonconformity management',
        description:
          'Record food product deviations, structure the disposition of nonconforming product, and document the actions taken with the evidence auditors require.',
      },
    ],
    ctaTitle: 'Your food safety certification, without audit surprises.',
    ctaSubtitle: 'Arrive at every food audit with all evidence ready, structured, and accessible.',
    agentChat: {
      userMessage: 'The BRC audit is in 15 days. Which PRPs are at risk and what evidence might we be missing?',
      aiIntro: 'I reviewed your PRP status. There are 2 programs with critical expiration dates before the audit.',
      aiPoints: [
        '→ Pest control: certified company visit expires in 4 days, no renewal scheduled',
        '→ CIP cleaning validation: last record 47 days ago, BRC requires a maximum of 30',
        '→ 3 temperature monitoring records missing for the week of the 18th to the 24th',
      ],
      aiFollowUp: 'Should I generate the action plan with deadlines to close these gaps before the audit?',
    },
  },

  construccion: {
    name: 'Construction',
    heroTitle: 'Quality and safety on-site. Everything in one system.',
    heroSubtitle:
      'In construction, scattered documentation and untracked incidents cost projects and contracts. Consultto centralizes quality management for every job site.',
    retos: [
      {
        title: 'Documentation scattered across individual projects',
        description:
          'Each job site manages its own documents, forms, and versions. When the construction project ends, the information is lost or becomes inaccessible.',
      },
      {
        title: 'On-site safety incidents without follow-up',
        description:
          'Construction incident reports are filed out of obligation but rarely generate corrective actions that prevent the next event.',
      },
      {
        title: 'Subcontractors operating outside of standards',
        description:
          'Subcontractors work on-site without any record showing they comply with the quality and safety standards of the construction project.',
      },
      {
        title: 'Punch lists with no owner or closing deadline',
        description:
          'Site inspection observations accumulate without assigned responsibility or closing dates, complicating the final delivery of the project.',
      },
    ],
    soluciones: [
      {
        title: 'Document management by construction project',
        description:
          'Centralize drawings, procedures, technical specifications, and records for each job site with version control and role-based access from any device.',
      },
      {
        title: 'Safety incidents with corrective actions',
        description:
          'Record construction incidents, analyze root causes, and track corrective actions through to verified effectiveness on-site.',
      },
      {
        title: 'Subcontractor control and qualification',
        description:
          'Evaluate and qualify your on-site subcontractors, record their compliance evidence, and build a performance history by company.',
      },
      {
        title: 'Field inspections and checklists',
        description:
          'Run site inspections from any device, record findings with photos, and assign responsible parties with a closing deadline.',
      },
    ],
    ctaTitle: 'Every project delivered on time, with documented quality.',
    ctaSubtitle: 'A management system built for the pace and demands of construction.',
    agentChat: {
      userMessage: 'We have 6 open safety observations from the last site inspection. The client is asking for status.',
      aiIntro: 'I reviewed the 6 observations. Only 1 is closed with complete evidence. The rest have issues.',
      aiPoints: [
        '→ Obs. 3 & 5: responsible party assigned but no photographic evidence of closure',
        '→ Obs. 4: deadline passed 3 days ago, no update in the system',
        '→ Obs. 6: requires verification from subcontractor Herrería Ramos, no response received',
      ],
      aiFollowUp: 'Should I send automatic reminders to the responsible parties and generate the status report for the client?',
    },
  },

  'tecnologia-y-software': {
    name: 'Technology & Software',
    heroTitle: 'ISO 27001 and software quality without slowing your team down.',
    heroSubtitle:
      'Technology companies face increasingly demanding security and ISO requirements. Consultto manages regulatory compliance without slowing down your operations.',
    retos: [
      {
        title: 'Security risks without ongoing management',
        description:
          'ISO 27001 requires continuous identification, assessment, and treatment of information security risks. Technology companies rarely have this systematized.',
      },
      {
        title: 'Software changes without a formal process',
        description:
          'Changes to systems and software products affect service quality. Without a documented change control process, incidents are inevitable.',
      },
      {
        title: 'Security incidents without regulatory traceability',
        description:
          'Security incidents at technology companies must be documented, analyzed, and resolved with full traceability to comply with regulations and standards.',
      },
      {
        title: 'Business continuity plans that have never been tested',
        description:
          'BCPs exist but no one tests them. When a real incident occurs at the technology company, the response is improvised and recovery time skyrockets.',
      },
    ],
    soluciones: [
      {
        title: 'Information security risk management',
        description:
          'Document your security risk matrix, record implemented controls, and generate the reports that ISO 27001 requires for your technology company.',
      },
      {
        title: 'Structured software change control',
        description:
          'Formalize the change management process with approvals, impact assessment, and evidence records for every change to your systems.',
      },
      {
        title: 'Security incident logging and analysis',
        description:
          "Centralize your technology company's security incidents, coordinate the response, and generate documentation for auditors and regulators.",
      },
      {
        title: 'Business continuity documentation and testing',
        description:
          'Keep your BCPs up to date, record drills performed, and manage lessons learned to improve incident response over time.',
      },
    ],
    ctaTitle: 'Regulatory compliance that does not slow down your development.',
    ctaSubtitle: 'Manage ISO 27001 and service quality at your technology company without unnecessary bureaucracy.',
    agentChat: {
      userMessage: 'We detected unauthorized access to a customer database. How do we start the incident protocol?',
      aiIntro: 'I activated the ISO 27001 A.16 protocol. This incident qualifies as High Severity. Immediate steps:',
      aiPoints: [
        '→ Containment: revoke compromised credentials and isolate the affected system',
        '→ Notification: you have 72h to report to the authority if personal data is involved (GDPR/local law)',
        '→ Evidence: preserve access logs before any modification to the system',
      ],
      aiFollowUp: 'Should I open the formal incident record and notify the designated response team?',
    },
  },

  'salud-y-dispositivos-medicos': {
    name: 'Health & Medical Devices',
    heroTitle: 'Medical regulation without gaps. Full traceability.',
    heroSubtitle:
      'Medical device manufacturers cannot afford documentary gaps. Consultto gives you the traceability, control, and documentation that ISO 13485 and regulators demand.',
    retos: [
      {
        title: 'Medical device traceability that is hard to demonstrate',
        description:
          'Every medical device must have full traceability from raw materials to the patient. Without a digital system, meeting this regulatory requirement is practically impossible.',
      },
      {
        title: 'Complaints and adverse events without a formal process',
        description:
          'Customer complaints and adverse events for medical devices must be recorded, analyzed, and reported to health authorities in a timely manner.',
      },
      {
        title: 'Process and software validations that are out of date',
        description:
          'ISO 13485 requires validating processes, equipment, and software in the medical device sector. The documentation for these validations is extensive and must remain current.',
      },
      {
        title: 'Changes with regulatory impact and no formal assessment',
        description:
          'Any change to the design, process, or materials of a medical device may require regulatory notification. Without a formal process, the risk of non-compliance is high.',
      },
    ],
    soluciones: [
      {
        title: 'Full device and component traceability',
        description:
          'Record the complete history of each medical device: materials, processes, equipment, personnel, and destination, with immediate access in case of recall or inspection.',
      },
      {
        title: 'Medical complaint and adverse event management',
        description:
          'Centralize medical device customer complaints, coordinate the investigation, generate root cause analysis, and prepare reports for regulatory authorities.',
      },
      {
        title: 'Process and software validation documentation',
        description:
          'Manage validation protocols and reports for medical processes, cleaning, sterilization, and software with version control and electronic approvals.',
      },
      {
        title: 'Change control with regulatory impact assessment',
        description:
          'Assess the regulatory impact of each medical device change, document the rationale, and coordinate the notifications required by each jurisdiction.',
      },
    ],
    ctaTitle: 'Your medical quality system, without regulatory gaps.',
    ctaSubtitle: 'Traceability and control for medical device manufacturers who cannot afford to fail.',
    agentChat: {
      userMessage: 'We received a field complaint about the device from lot M-2241. Possible failure in the closure mechanism.',
      aiIntro: 'I located lot M-2241. There is critical information you need to consider before acting.',
      aiPoints: [
        '→ Lot distributed to 4 hospitals: 38 units in the field, 12 still in own warehouse',
        '→ ISO 14971: the reported failure mode classifies as unacceptable risk per your matrix',
        '→ FDA MDR: if the failure is confirmed, you have 30 days to report to the regulator',
      ],
      aiFollowUp: 'Should I open the formal investigation and generate the MDR report draft while it progresses?',
    },
  },

  'logistica-y-transporte': {
    name: 'Logistics & Transportation',
    heroTitle: 'Certified logistics. Processes that scale.',
    heroSubtitle:
      'Logistics and transportation companies that standardize their processes retain contracts and reduce incidents. Consultto manages your end-to-end operational quality system.',
    retos: [
      {
        title: 'Logistics operations without standardized processes',
        description:
          'Each warehouse, route, or logistics terminal operates differently. Without standardized procedures, service quality varies and errors multiply.',
      },
      {
        title: 'Losses and incidents without root cause analysis',
        description:
          'Accidents, losses, and transport incidents are reported inconsistently, with no analysis to prevent the next event and reduce operational costs.',
      },
      {
        title: 'Customer-specific logistics requirements without central control',
        description:
          'Each logistics customer has its own KPIs, procedures, and quality requirements. Meeting all of them without a centralized system is practically impossible.',
      },
      {
        title: 'Transport indicators scattered across multiple systems',
        description:
          'OTIF, incident rate, and customer satisfaction data exist in separate systems, making real-time decision-making difficult.',
      },
    ],
    soluciones: [
      {
        title: 'Logistics process standardization',
        description:
          'Document and control procedures for each logistics operation, warehouse, or route with current versions accessible from any device in the field.',
      },
      {
        title: 'Transport incident management and follow-up',
        description:
          'Record transport losses and incidents, analyze root causes, and track corrective actions through to verified resolution.',
      },
      {
        title: 'Customer requirement control by logistics client',
        description:
          "Centralize each customer's specific requirements with compliance evidence, performance metrics, and second-party audit records.",
      },
      {
        title: 'Logistics KPI dashboard',
        description:
          'Consolidate your logistics and transport KPIs into a real-time panel to monitor performance and make decisions based on actual data.',
      },
    ],
    ctaTitle: 'Certified logistics operations, fully under control.',
    ctaSubtitle: 'Standardize, measure, and improve every link in your logistics chain with Consultto.',
    agentChat: {
      userMessage: 'We had an incident on route today. Cargo partially damaged. The client already contacted us. What do I do?',
      aiIntro: 'Understood. For this type of transport incident you need to act in the next 60 minutes.',
      aiPoints: [
        '→ Document: photos of the cargo, tracking number, license plate, and driver name in the system now',
        '→ Client: you have a 2h notification SLA per the service contract on record',
        '→ Analysis: the driver has 2 similar incidents in the last 90 days on the same route',
      ],
      aiFollowUp: 'Should I open the incident report, notify the client, and generate a risk pattern alert for that route?',
    },
  },

  'servicios-profesionales': {
    name: 'Professional Services',
    heroTitle: 'ISO 9001 for your firm, without complicating operations.',
    heroSubtitle:
      'Professional services firms that earn certification demonstrate that their quality lives in their processes, not just in their people. Consultto makes it possible.',
    retos: [
      {
        title: 'Services that depend on people, not processes',
        description:
          'Critical knowledge in professional services firms lives in the heads of senior staff. When one person leaves, service quality drops immediately.',
      },
      {
        title: 'Client satisfaction without formal measurement',
        description:
          'In professional services it is assumed that clients are satisfied because they do not complain. Without formal metrics, it is impossible to detect problems before losing a contract.',
      },
      {
        title: 'Client deliverables without documented review',
        description:
          'Professional services deliverables go through informal reviews without a documented approval process or defined acceptance criteria.',
      },
      {
        title: 'Team training without evidence or follow-up',
        description:
          'Staff development in services firms is handled informally. There are no competency records or evidence of the effectiveness of training conducted.',
      },
    ],
    soluciones: [
      {
        title: 'Documentation of key service processes',
        description:
          "Capture your firm's knowledge in procedures, work instructions, and policies that ensure service consistency regardless of who delivers it.",
      },
      {
        title: 'Formal client satisfaction measurement',
        description:
          'Record surveys, feedback, and complaints from professional services clients with trend analysis and documented improvement actions.',
      },
      {
        title: 'Deliverable control and client approvals',
        description:
          "Manage reviews and approvals of your firm's proposals and deliverables with full traceability through the quality process.",
      },
      {
        title: 'Team competency and training management',
        description:
          'Record required competencies by role in your services firm, log training completed, and evaluate the effectiveness of each program.',
      },
    ],
    ctaTitle: 'Your services firm certified in ISO 9001.',
    ctaSubtitle: 'Show your clients that the quality of your firm lives in its processes, not only in its people.',
    agentChat: {
      userMessage: 'A client rejected the final project deliverable. They say it does not meet what was agreed in the contract.',
      aiIntro: 'I reviewed the project file. The issue has a clear precedent in the process.',
      aiPoints: [
        '→ No record of scope approval at stage 2 — only an informal email from the client',
        '→ Deliverable acceptance criteria were never documented in the system',
        '→ This is the 2nd project with this client that ends with delivery observations',
      ],
      aiFollowUp: 'Should I generate the root cause analysis and the improvement plan to prevent this from recurring in future projects?',
    },
  },

  educacion: {
    name: 'Education',
    heroTitle: 'Educational quality that can be demonstrated and accredited.',
    heroSubtitle:
      'Educational institutions certified in ISO 21001 demonstrate a genuine commitment to continuous improvement. Consultto adapts quality management to the pace of the education sector.',
    retos: [
      {
        title: 'Educational processes without institutional standardization',
        description:
          'Each teacher or department in the institution applies its own criteria. Without shared procedures, the quality of the educational experience varies enormously.',
      },
      {
        title: 'Educational performance indicators that are never consolidated',
        description:
          'Academic performance data exists in different systems but is never consolidated into indicators that guide institutional decision-making.',
      },
      {
        title: 'Student and parent complaints without a formal process',
        description:
          'Complaints at educational institutions are handled reactively and without formal records, which prevents identifying patterns and improving the experience.',
      },
      {
        title: 'Accreditation evidence that is difficult to gather',
        description:
          'Accrediting bodies in the education sector require evidence of continuous improvement processes that are rarely documented in an organized way.',
      },
    ],
    soluciones: [
      {
        title: 'Academic and administrative process documentation',
        description:
          "Standardize your educational institution's key processes with procedures accessible to all teaching and administrative staff.",
      },
      {
        title: 'Educational quality indicators in a dashboard',
        description:
          "Consolidate your institution's academic, satisfaction, and operational metrics into a panel that supports leadership decision-making.",
      },
      {
        title: 'Formal complaint management for the educational community',
        description:
          'Record, analyze, and provide formal responses to complaints and suggestions from students, parents, and staff with full traceability.',
      },
      {
        title: 'Organized evidence for educational accreditation',
        description:
          'Centralize documentation required by accrediting bodies with organized access by criterion and evaluation cycle.',
      },
    ],
    ctaTitle: 'An educational institution that continuously improves.',
    ctaSubtitle: 'Quality management adapted to the pace and needs of the education sector.',
    agentChat: {
      userMessage:
        'The accrediting body is asking for evidence of continuous improvement from the last 2 cycles. We have 10 days.',
      aiIntro:
        'I found the improvement actions from both cycles in the system. There is enough evidence, but it needs to be organized.',
      aiPoints: [
        '→ Cycle 2022–2023: 8 actions recorded, 6 with complete evidence and verified closure',
        '→ Cycle 2023–2024: 11 actions, 3 still open that could look poorly to the accreditor',
        '→ Student satisfaction indicators still need to be consolidated into a single report per cycle',
      ],
      aiFollowUp:
        'Should I generate the continuous improvement report structured by cycle and accreditation criterion?',
    },
  },

  farmaceutica: {
    name: 'Pharmaceutical',
    heroTitle: 'GMP without deviations. Inspections without surprises.',
    heroSubtitle:
      'Pharmaceutical companies have no margin for error before regulators. Consultto manages deviations, validations, and changes with the traceability that GMP demands.',
    retos: [
      {
        title: 'Deviations and OOS without rigorous investigation',
        description:
          'Out-of-specification results and pharmaceutical process deviations must be investigated with scientific rigor and documented with complete evidence for the regulator.',
      },
      {
        title: 'Validation documentation that is out of date',
        description:
          'Pharmaceutical validation protocols and reports are extensive, require multiple approvals, and must be kept current throughout the entire life of the product.',
      },
      {
        title: 'Changes with regulatory variation and no formal process',
        description:
          'Any change in a pharmaceutical formulation, process, or equipment may require a regulatory variation filing. Without a formal system, the regulatory risk is high.',
      },
      {
        title: 'Raw material suppliers without active qualification',
        description:
          'GMP requires continuous qualification and monitoring of critical raw material suppliers. The documentation for this process is extensive and is audited at every inspection.',
      },
    ],
    soluciones: [
      {
        title: 'Pharmaceutical deviation management with impact analysis',
        description:
          'Record process deviations and OOS results, guide the root cause investigation, and document lot disposition with complete regulatory traceability.',
      },
      {
        title: 'GMP validation documentation control',
        description:
          'Manage pharmaceutical validation protocols, reports, and matrices with electronic approvals, version control, and auditable access at every inspection.',
      },
      {
        title: 'Change control with regulatory dossier',
        description:
          'Assess the regulatory impact of each pharmaceutical change, coordinate internal approvals, and generate support dossiers for regulatory variation submissions.',
      },
      {
        title: 'GMP supplier qualification and auditing',
        description:
          'Manage the pharmaceutical supplier qualification program, record second-party audits, and keep approved-status records current for every inspection.',
      },
    ],
    ctaTitle: 'GMP compliance without deviations that compromise your operation.',
    ctaSubtitle: 'A pharmaceutical quality system designed to pass regulatory inspections without surprises.',
    agentChat: {
      userMessage:
        'OOS result on lot FA-3301. Quality control needs to know the exact steps for the GMP investigation.',
      aiIntro:
        'Starting OOS protocol per ICH Q10 and GMP. The investigation has two mandatory phases.',
      aiPoints: [
        '→ Phase 1 (laboratory): verify sampling, equipment, and analyst errors before assuming lot failure',
        '→ Phase 2 (manufacturing): if Phase 1 is inconclusive, review manufacturing records for lot FA-3301',
        '→ Deadline: the regulator requires documented conclusion within a maximum of 30 business days from detection',
      ],
      aiFollowUp:
        'Should I open the OOS file, assign the investigation lead, and activate the preventive hold on the lot?',
    },
  },
}

export const INDUSTRIAS_PT: Record<string, IndustriaTranslation> = {
  manufactura: {
    name: 'Manufatura',
    heroTitle: 'Manufatura sob controle. Sem papéis, sem atritos.',
    heroSubtitle:
      'O Consultto centraliza o sistema de gestão da sua planta para que as não conformidades sejam encerradas, os documentos estejam sempre vigentes e as auditorias cheguem sem surpresas.',
    retos: [
      {
        title: 'Não conformidades recorrentes na linha de produção',
        description:
          'Os mesmos defeitos aparecem repetidamente porque a análise de causa raiz na manufatura é feita de forma incompleta ou não fica documentada onde deveria.',
      },
      {
        title: 'Versões desatualizadas de documentos na linha',
        description:
          'Os operadores trabalham com procedimentos obsoletos porque o controle documental é manual e ninguém tem certeza de qual versão está vigente.',
      },
      {
        title: 'Equipamentos de medição sem rastreabilidade de calibração',
        description:
          'Os instrumentos são usados fora do range porque não existe um sistema que alerte sobre vencimentos nem registre as evidências de calibração de cada equipamento.',
      },
      {
        title: 'Auditorias que não geram melhorias reais',
        description:
          'As auditorias internas são realizadas por obrigação, sem um plano estruturado por cláusula nem acompanhamento real das constatações detectadas.',
      },
    ],
    soluciones: [
      {
        title: 'Não conformidades com análise de causa raiz para a planta',
        description:
          'Registre não conformidades de manufatura, conduza a análise com metodologias estruturadas (5 Porquês, Ishikawa) e acompanhe automaticamente até o encerramento verificado.',
      },
      {
        title: 'Controle documental na linha de produção',
        description:
          'Cada procedimento, instrução técnica e política da planta tem sua versão vigente, aprovada e distribuída. Sem pastas físicas nem e-mails com versões antigas.',
      },
      {
        title: 'Calibração e manutenção preventiva de equipamentos',
        description:
          'O sistema alerta automaticamente sobre os vencimentos de calibração de cada equipamento e registra as evidências com rastreabilidade completa.',
      },
      {
        title: 'Auditorias internas por cláusula e área',
        description:
          'Planeje o programa anual de auditorias da planta, execute checklists por cláusula e gere relatórios de constatações prontos para a análise crítica pela direção.',
      },
    ],
    ctaTitle: 'Sua planta de manufatura, certificada e em pleno funcionamento.',
    ctaSubtitle: 'Pare de apagar incêndios na produção. Com o Consultto, seu sistema de gestão trabalha por você.',
    agentChat: {
      userMessage:
        'Temos uma não conformidade recorrente na soldagem. Já é a terceira vez neste mês e não encontramos a causa.',
      aiIntro:
        'Revisei o histórico da planta. As 3 NCs compartilham a mesma causa raiz provável: variação no turno noturno.',
      aiPoints: [
        '→ Instrução de trabalho desatualizada (v1.2 vs v1.4 vigente)',
        '→ Equipamento de soldagem sem calibração há 18 dias',
        '→ Sem evidência de treinamento do operador B nos últimos 60 dias',
      ],
      aiFollowUp: 'Devo gerar a Não Conformidade com as ações corretivas sugeridas?',
    },
  },

  automotriz: {
    name: 'Automotivo',
    heroTitle: 'IATF 16949 em conformidade. Seu lugar na cadeia garantido.',
    heroSubtitle:
      'Fornecedores automotivos não têm margem para erros. O Consultto fornece o sistema para gerenciar CSRs, mudanças de processo e não conformidades sem improvisações.',
    retos: [
      {
        title: 'Requisitos específicos de cada OEM sem controle centralizado',
        description:
          'Cada cliente automotivo tem seus próprios CSRs que se somam à IATF e devem ser documentados, comunicados e controlados de forma independente por OEM.',
      },
      {
        title: 'Mudanças de processo sem notificação ao cliente',
        description:
          'Na cadeia automotiva, qualquer mudança em processo, material ou fornecedor requer aprovação do OEM. Sem um sistema centralizado, as mudanças se perdem ou chegam tarde.',
      },
      {
        title: 'Fornecedores críticos avaliados em planilhas',
        description:
          'A cadeia de fornecimento automotiva exige avaliação, qualificação e monitoramento contínuo dos fornecedores. Fazer isso em planilhas é um risco de certificação.',
      },
      {
        title: 'Respostas a contingências do cliente sem registros estruturados',
        description:
          'Um defeito de campo ou desvio notificado pelo OEM exige informações imediatas sobre processos, materiais e mudanças. Sem registros estruturados, a resposta é improvisada e chega tarde.',
      },
    ],
    soluciones: [
      {
        title: 'Gestão de CSR por OEM e norma IATF',
        description:
          'Registre e controle os requisitos específicos de cada cliente automotivo junto aos da IATF 16949, com evidências de conformidade em um único lugar.',
      },
      {
        title: 'Controle de mudanças com notificação ao cliente',
        description:
          'Cada mudança em processo ou produto automotivo segue um fluxo formal de aprovação, com notificação automática ao OEM e registro de evidências.',
      },
      {
        title: 'Avaliação e desempenho de fornecedores automotivos',
        description:
          'Qualifique seus fornecedores da cadeia automotiva, registre auditorias de segunda parte e mantenha um painel de desempenho atualizado.',
      },
      {
        title: 'Dossiês de contingência prontos para o OEM',
        description:
          'Centralize registros de processo, mudanças e não conformidades por período para que, quando o OEM notificar um desvio, você possa construir o dossiê de resposta com informações já documentadas.',
      },
    ],
    ctaTitle: 'Proteja sua certificação IATF com um sistema que não falha.',
    ctaSubtitle: 'Implantação rápida para fornecedores automotivos. Seu lugar na cadeia, protegido.',
    agentChat: {
      userMessage:
        'O OEM nos notificou de um desvio no lote 4821. Precisam de rastreabilidade completa antes do meio-dia.',
      aiIntro:
        'Localizei o lote 4821. Há uma mudança de processo do dia 14 que não foi comunicada ao cliente a tempo.',
      aiPoints: [
        '→ Mudança no parâmetro de torque registrada internamente, mas sem aprovação do OEM',
        '→ 3 peças do lote já estão na linha de montagem do cliente',
        '→ CSR do cliente exige notificação em menos de 24h após a detecção',
      ],
      aiFollowUp: 'Devo gerar o relatório de desvio e o dossiê de contenção para enviar ao OEM?',
    },
  },

  'alimentos-y-bebidas': {
    name: 'Alimentos e Bebidas',
    heroTitle: 'Segurança de alimentos gerenciada, não improvisada.',
    heroSubtitle:
      'Em alimentos e bebidas, uma falha de segurança pode custar uma certificação — ou algo muito pior. O Consultto oferece controle total sobre HACCP, PPRs e auditorias de terceira parte.',
    retos: [
      {
        title: 'PCCs monitorados em papel sem visibilidade real',
        description:
          'Os registros de monitoramento dos pontos críticos de controle na planta são preenchidos em papel e ninguém tem visibilidade em tempo real sobre o cumprimento dos limites críticos.',
      },
      {
        title: 'Programas de pré-requisito vencendo sem alertas',
        description:
          'Os programas de limpeza, controle de pragas e manutenção na indústria alimentícia têm datas críticas que se perdem entre planilhas e agendas pessoais.',
      },
      {
        title: 'Registros de produção dispersos que complicam as auditorias',
        description:
          'BRC e IFS exigem demonstrar rastreabilidade do processo. Sem registros organizados e acessíveis na sua planta, reunir as evidências para uma auditoria se torna uma emergência.',
      },
      {
        title: 'Não conformidades de produto sem disposição clara',
        description:
          'Os desvios de produto em alimentos são registrados de forma inconsistente, sem análise de causa raiz nem acompanhamento até a disposição final do lote.',
      },
    ],
    soluciones: [
      {
        title: 'HACCP digital com monitoramento de PCC',
        description:
          'Documente seu plano HACCP, registre o monitoramento de cada PCC da sua planta e gere as evidências que auditores FSSC, BRC ou IFS exigem.',
      },
      {
        title: 'Controle de PPRs com alertas automáticos',
        description:
          'Gerencie todos os seus programas de pré-requisito alimentares com alertas de vencimento, registros de execução e evidências fotográficas centralizadas.',
      },
      {
        title: 'Registros de processo organizados para auditorias e contingências',
        description:
          'Centralize os registros de matérias-primas, insumos e produção para que as informações estejam disponíveis quando você precisar — sem buscar em pastas ou e-mails.',
      },
      {
        title: 'Gestão de não conformidades de produto',
        description:
          'Registre desvios de produto alimentar, estruture a disposição do produto não conforme e documente as ações tomadas com as evidências que os auditores exigem.',
      },
    ],
    ctaTitle: 'Sua certificação de segurança de alimentos, sem surpresas na auditoria.',
    ctaSubtitle: 'Chegue a cada auditoria alimentar com todas as evidências prontas, estruturadas e acessíveis.',
    agentChat: {
      userMessage:
        'A auditoria BRC é em 15 dias. Quais PPRs estão em risco e quais evidências podem estar faltando?',
      aiIntro:
        'Revisei o status dos seus PPRs. Há 2 programas com vencimento crítico antes da auditoria.',
      aiPoints: [
        '→ Controle de pragas: visita da empresa certificada vence em 4 dias, sem renovação agendada',
        '→ Validação de limpeza CIP: último registro há 47 dias, BRC exige no máximo 30',
        '→ 3 registros de monitoramento de temperatura faltando na semana do dia 18 ao 24',
      ],
      aiFollowUp: 'Devo gerar o plano de ação com prazos para fechar essas lacunas antes da auditoria?',
    },
  },

  construccion: {
    name: 'Construção',
    heroTitle: 'Qualidade e segurança na obra. Tudo em um só sistema.',
    heroSubtitle:
      'Na construção, documentação dispersa e incidentes sem acompanhamento custam projetos e contratos. O Consultto centraliza a gestão da qualidade de cada obra.',
    retos: [
      {
        title: 'Documentação dispersa por projeto de obra',
        description:
          'Cada obra gerencia seus próprios documentos, formulários e versões. Quando o projeto de construção termina, a informação se perde ou fica inacessível.',
      },
      {
        title: 'Incidentes de segurança na obra sem acompanhamento',
        description:
          'Os relatórios de incidentes na construção são elaborados por obrigação, mas raramente geram ações corretivas que previnam o próximo evento.',
      },
      {
        title: 'Subcontratados operando fora do padrão',
        description:
          'Os subcontratados trabalham na obra sem que haja registro de que cumprem os padrões de qualidade e segurança do projeto de construção.',
      },
      {
        title: 'Punch lists sem responsável nem prazo de fechamento',
        description:
          'As observações de inspeção de obra se acumulam sem responsável atribuído nem data de fechamento, complicando a entrega final do projeto.',
      },
    ],
    soluciones: [
      {
        title: 'Gestão documental por projeto de construção',
        description:
          'Centralize plantas, procedimentos, especificações técnicas e registros de cada obra com controle de versão e acesso por perfil a partir de qualquer dispositivo.',
      },
      {
        title: 'Incidentes de segurança com ações corretivas',
        description:
          'Registre incidentes na construção, analise as causas raiz e acompanhe as ações corretivas até verificar sua efetividade na obra.',
      },
      {
        title: 'Controle e qualificação de subcontratados',
        description:
          'Avalie e qualifique seus subcontratados de obra, registre suas evidências de conformidade e crie um histórico de desempenho por empresa.',
      },
      {
        title: 'Inspeções e checklists em campo',
        description:
          'Execute inspeções de obra a partir de qualquer dispositivo, registre constatações com fotos e atribua responsáveis com prazo de fechamento.',
      },
    ],
    ctaTitle: 'Cada obra entregue no prazo, com qualidade documentada.',
    ctaSubtitle: 'Um sistema de gestão construído para o ritmo e as exigências da construção civil.',
    agentChat: {
      userMessage:
        'Temos 6 observações de segurança abertas da última inspeção de obra. O cliente está perguntando sobre o status.',
      aiIntro:
        'Revisei as 6 observações. Apenas 1 está encerrada com evidência completa. As demais têm problemas.',
      aiPoints: [
        '→ Obs. 3 e 5: responsável atribuído, mas sem evidência fotográfica de encerramento',
        '→ Obs. 4: prazo venceu há 3 dias, sem atualização no sistema',
        '→ Obs. 6: requer verificação do subcontratado Herrería Ramos, sem resposta',
      ],
      aiFollowUp: 'Devo enviar lembretes automáticos aos responsáveis e gerar o relatório de status para o cliente?',
    },
  },

  'tecnologia-y-software': {
    name: 'Tecnologia e Software',
    heroTitle: 'ISO 27001 e qualidade de software sem travar sua equipe.',
    heroSubtitle:
      'As empresas de tecnologia enfrentam requisitos de segurança e ISO cada vez mais exigentes. O Consultto gerencia a conformidade regulatória sem desacelerar sua operação.',
    retos: [
      {
        title: 'Riscos de segurança sem gestão contínua',
        description:
          'A ISO 27001 exige identificar, avaliar e tratar continuamente os riscos de segurança da informação. As empresas de tecnologia raramente têm isso sistematizado.',
      },
      {
        title: 'Mudanças de software sem processo formal',
        description:
          'As mudanças em sistemas e produtos de software afetam a qualidade do serviço. Sem um processo documentado de controle de mudanças, os incidentes são inevitáveis.',
      },
      {
        title: 'Incidentes de segurança sem rastreabilidade regulatória',
        description:
          'Os incidentes de segurança em empresas de tecnologia devem ser documentados, analisados e resolvidos com rastreabilidade completa para cumprir regulamentações e padrões.',
      },
      {
        title: 'Planos de continuidade que nunca foram testados',
        description:
          'Os PCNs existem, mas ninguém os testa. Quando ocorre um incidente real na empresa de tecnologia, a resposta é improvisada e o tempo de recuperação dispara.',
      },
    ],
    soluciones: [
      {
        title: 'Gestão de riscos de segurança da informação',
        description:
          'Documente sua matriz de riscos de segurança, registre os controles implementados e gere os relatórios que a ISO 27001 exige para sua empresa de tecnologia.',
      },
      {
        title: 'Controle estruturado de mudanças de software',
        description:
          'Formalize o processo de gestão de mudanças com aprovações, avaliação de impacto e registro de evidências para cada alteração nos seus sistemas.',
      },
      {
        title: 'Registro e análise de incidentes de segurança',
        description:
          'Centralize os incidentes de segurança da sua empresa de tecnologia, coordene a resposta e gere a documentação para auditorias e reguladores.',
      },
      {
        title: 'Documentação e testes de continuidade do negócio',
        description:
          'Mantenha seus PCNs atualizados, registre os simulacros realizados e gerencie as lições aprendidas para aprimorar a resposta a incidentes.',
      },
    ],
    ctaTitle: 'Conformidade regulatória que não freia seu desenvolvimento.',
    ctaSubtitle: 'Gerencie ISO 27001 e qualidade de serviço na sua empresa de tecnologia sem burocracia desnecessária.',
    agentChat: {
      userMessage:
        'Detectamos acesso não autorizado a um banco de dados de clientes. Como iniciamos o protocolo de incidente?',
      aiIntro: 'Ativei o protocolo ISO 27001 A.16. Este incidente se qualifica como Severidade Alta. Passos imediatos:',
      aiPoints: [
        '→ Contenção: revogar credenciais comprometidas e isolar o sistema afetado',
        '→ Notificação: você tem 72h para reportar à autoridade se houver dados pessoais envolvidos (LGPD/GDPR)',
        '→ Evidência: preservar logs de acesso antes de qualquer modificação no sistema',
      ],
      aiFollowUp: 'Devo abrir o registro formal do incidente e notificar a equipe de resposta designada?',
    },
  },

  'salud-y-dispositivos-medicos': {
    name: 'Saúde e Dispositivos Médicos',
    heroTitle: 'Regulação médica sem lacunas. Rastreabilidade total.',
    heroSubtitle:
      'Os fabricantes de dispositivos médicos não podem se dar ao luxo de ter lacunas documentais. O Consultto oferece a rastreabilidade, o controle e a documentação que a ISO 13485 e os reguladores exigem.',
    retos: [
      {
        title: 'Rastreabilidade de dispositivos médicos difícil de demonstrar',
        description:
          'Cada dispositivo médico deve ter rastreabilidade completa desde as matérias-primas até o paciente. Sem um sistema digital, atender a esse requisito regulatório é praticamente impossível.',
      },
      {
        title: 'Reclamações e eventos adversos sem processo formal',
        description:
          'As reclamações de clientes e os eventos adversos de dispositivos médicos devem ser registrados, analisados e reportados às autoridades sanitárias em tempo hábil.',
      },
      {
        title: 'Validações de processo e software desatualizadas',
        description:
          'A ISO 13485 exige validar processos, equipamentos e software no setor de dispositivos médicos. A documentação dessas validações é extensa e deve ser mantida vigente.',
      },
      {
        title: 'Mudanças com impacto regulatório sem avaliação formal',
        description:
          'Qualquer mudança no design, processo ou material de um dispositivo médico pode exigir notificação regulatória. Sem um processo formal, o risco de não conformidade é alto.',
      },
    ],
    soluciones: [
      {
        title: 'Rastreabilidade completa de dispositivos e componentes',
        description:
          'Registre o histórico completo de cada dispositivo médico: materiais, processos, equipamentos, pessoal e destino, com acesso imediato em caso de recall ou inspeção.',
      },
      {
        title: 'Gestão de reclamações e eventos adversos médicos',
        description:
          'Centralize as reclamações de clientes de dispositivos médicos, coordene a investigação, gere a análise de causa raiz e prepare relatórios para as autoridades regulatórias.',
      },
      {
        title: 'Documentação de validações de processo e software',
        description:
          'Gerencie protocolos e relatórios de validação de processos médicos, limpeza, esterilização e software com controle de versão e aprovações eletrônicas.',
      },
      {
        title: 'Controle de mudanças com avaliação regulatória',
        description:
          'Avalie o impacto regulatório de cada mudança em dispositivos médicos, documente a justificativa e coordene as notificações exigidas por cada jurisdição.',
      },
    ],
    ctaTitle: 'Seu sistema de qualidade médico, sem lacunas regulatórias.',
    ctaSubtitle: 'Rastreabilidade e controle para fabricantes de dispositivos médicos que não podem falhar.',
    agentChat: {
      userMessage:
        'Recebemos uma reclamação de campo sobre o dispositivo do lote M-2241. Possível falha no mecanismo de fechamento.',
      aiIntro: 'Localizei o lote M-2241. Há informações críticas que você precisa considerar antes de agir.',
      aiPoints: [
        '→ Lote distribuído para 4 hospitais: 38 unidades em campo, 12 ainda em estoque próprio',
        '→ ISO 14971: o modo de falha reportado classifica como risco inaceitável conforme sua matriz',
        '→ FDA MDR: se a falha for confirmada, você tem 30 dias para reportar ao regulador',
      ],
      aiFollowUp: 'Devo abrir a investigação formal e gerar o rascunho do relatório MDR enquanto ela avança?',
    },
  },

  'logistica-y-transporte': {
    name: 'Logística e Transporte',
    heroTitle: 'Logística certificada. Processos que escalam.',
    heroSubtitle:
      'As empresas de logística e transporte que padronizam seus processos retêm contratos e reduzem incidentes. O Consultto gerencia seu sistema de qualidade operacional de ponta a ponta.',
    retos: [
      {
        title: 'Operações logísticas sem processos padronizados',
        description:
          'Cada armazém, rota ou terminal de logística opera de forma diferente. Sem procedimentos padronizados, a qualidade do serviço varia e os erros se multiplicam.',
      },
      {
        title: 'Sinistros e perdas sem análise de causa raiz',
        description:
          'Acidentes, perdas e sinistros de transporte são reportados de forma inconsistente, sem análise que previna os próximos eventos e reduza os custos operacionais.',
      },
      {
        title: 'Requisitos de cada cliente logístico sem controle',
        description:
          'Cada cliente de logística tem seus próprios KPIs, procedimentos e requisitos de qualidade. Cumprir todos sem um sistema centralizado é praticamente impossível.',
      },
      {
        title: 'Indicadores de transporte dispersos em múltiplos sistemas',
        description:
          'Os dados de OTIF, sinistralidade e satisfação do cliente de transporte existem em sistemas distintos, dificultando a tomada de decisões em tempo real.',
      },
    ],
    soluciones: [
      {
        title: 'Padronização de processos logísticos',
        description:
          'Documente e controle os procedimentos de cada operação logística, armazém ou rota com versões vigentes acessíveis a partir de qualquer dispositivo em campo.',
      },
      {
        title: 'Gestão de incidentes de transporte e acompanhamento',
        description:
          'Registre sinistros e perdas de transporte, analise as causas raiz e acompanhe as ações corretivas até verificar que foram resolvidas.',
      },
      {
        title: 'Controle de requisitos por cliente logístico',
        description:
          'Centralize os requisitos específicos de cada cliente com evidências de conformidade, métricas de desempenho e registros de auditorias de segunda parte.',
      },
      {
        title: 'Dashboard de indicadores logísticos',
        description:
          'Consolide seus KPIs de logística e transporte em um painel em tempo real para monitorar o desempenho e tomar decisões com base em dados reais.',
      },
    ],
    ctaTitle: 'Operações logísticas certificadas e sob controle.',
    ctaSubtitle: 'Padronize, meça e melhore cada elo da sua cadeia logística com o Consultto.',
    agentChat: {
      userMessage:
        'Tivemos um sinistro em rota hoje. Carga parcialmente danificada. O cliente já nos contatou. O que faço?',
      aiIntro: 'Entendido. Para este tipo de incidente de transporte você precisa agir nos próximos 60 minutos.',
      aiPoints: [
        '→ Documentar: fotos da carga, número de rastreio, placa e nome do motorista no sistema agora',
        '→ Cliente: você tem SLA de notificação de 2h conforme o contrato de serviço registrado',
        '→ Análise: o motorista tem 2 incidentes similares nos últimos 90 dias na mesma rota',
      ],
      aiFollowUp:
        'Devo abrir o relatório de incidente, notificar o cliente e gerar o alerta de padrão de risco nessa rota?',
    },
  },

  'servicios-profesionales': {
    name: 'Serviços Profissionais',
    heroTitle: 'ISO 9001 para o seu escritório, sem complicar a operação.',
    heroSubtitle:
      'As empresas de serviços profissionais que se certificam demonstram que sua qualidade está nos processos, não apenas nas pessoas. O Consultto torna isso possível.',
    retos: [
      {
        title: 'Serviços que dependem de pessoas, não de processos',
        description:
          'O conhecimento crítico em escritórios de serviços profissionais fica na cabeça dos colaboradores sênior. Quando um deles sai, a qualidade do serviço cai imediatamente.',
      },
      {
        title: 'Satisfação do cliente sem medição formal',
        description:
          'Em serviços profissionais presume-se que os clientes estão satisfeitos porque não reclamam. Sem métricas formais, é impossível detectar problemas antes de perder um contrato.',
      },
      {
        title: 'Entregas ao cliente sem revisão documentada',
        description:
          'Os entregáveis de serviços profissionais passam por revisões informais sem um processo documentado de aprovação nem critérios de aceite definidos.',
      },
      {
        title: 'Treinamento da equipe sem evidência nem acompanhamento',
        description:
          'A formação da equipe de serviços é feita de forma informal. Não há registro de competências nem da efetividade dos treinamentos realizados.',
      },
    ],
    soluciones: [
      {
        title: 'Documentação dos processos-chave de serviço',
        description:
          'Capture o conhecimento do seu escritório em procedimentos, instruções e políticas que garantam a consistência do serviço independentemente de quem o executa.',
      },
      {
        title: 'Medição formal da satisfação do cliente',
        description:
          'Registre pesquisas, feedbacks e reclamações de clientes de serviços profissionais com análise de tendências e ações de melhoria documentadas.',
      },
      {
        title: 'Controle de entregáveis e aprovações do cliente',
        description:
          'Gerencie as revisões e aprovações de propostas e entregáveis do seu escritório com rastreabilidade completa do processo de qualidade.',
      },
      {
        title: 'Gestão de competências e formação da equipe',
        description:
          'Registre as competências requeridas por função no seu escritório de serviços, os treinamentos realizados e avalie a efetividade de cada programa.',
      },
    ],
    ctaTitle: 'Seu escritório de serviços certificado na ISO 9001.',
    ctaSubtitle: 'Demonstre aos seus clientes que a qualidade do seu escritório está nos processos, não só nas pessoas.',
    agentChat: {
      userMessage:
        'Um cliente rejeitou o entregável final do projeto. Diz que não atende o acordado no contrato.',
      aiIntro: 'Revisei o dossiê do projeto. O problema tem um antecedente claro no processo.',
      aiPoints: [
        '→ Não há registro de aprovação do escopo na etapa 2 — apenas um e-mail informal do cliente',
        '→ Os critérios de aceite do entregável nunca foram documentados no sistema',
        '→ Este é o 2º projeto com este cliente que termina com observações na entrega',
      ],
      aiFollowUp:
        'Devo gerar a análise de causa raiz e o plano de melhoria para evitar que se repita em projetos futuros?',
    },
  },

  educacion: {
    name: 'Educação',
    heroTitle: 'Qualidade educacional que pode ser demonstrada e acreditada.',
    heroSubtitle:
      'As instituições educacionais certificadas na ISO 21001 demonstram um compromisso real com a melhoria contínua. O Consultto adapta a gestão da qualidade ao ritmo do setor educacional.',
    retos: [
      {
        title: 'Processos educacionais sem padronização institucional',
        description:
          'Cada docente ou departamento da instituição aplica seus próprios critérios. Sem procedimentos comuns, a qualidade da experiência educacional varia enormemente.',
      },
      {
        title: 'Indicadores de desempenho educacional não consolidados',
        description:
          'Os dados de desempenho acadêmico existem em sistemas distintos, mas nunca são consolidados em indicadores que orientem a tomada de decisões institucionais.',
      },
      {
        title: 'Reclamações de alunos e responsáveis sem processo formal',
        description:
          'As reclamações em instituições educacionais são atendidas de forma reativa e sem registro formal, o que impede identificar padrões e melhorar a experiência.',
      },
      {
        title: 'Evidências de acreditação difíceis de reunir',
        description:
          'Os organismos acreditadores do setor educacional exigem evidências de processos de melhoria contínua que raramente estão documentadas de forma organizada.',
      },
    ],
    soluciones: [
      {
        title: 'Documentação de processos acadêmicos e administrativos',
        description:
          'Padronize os processos-chave da sua instituição educacional com procedimentos acessíveis a todo o corpo docente e administrativo.',
      },
      {
        title: 'Indicadores de qualidade educacional em um dashboard',
        description:
          'Consolide métricas acadêmicas, de satisfação e operacionais da sua instituição em um painel que apoie a tomada de decisões da direção.',
      },
      {
        title: 'Gestão formal de reclamações da comunidade educacional',
        description:
          'Registre, analise e dê resposta formal às reclamações e sugestões de alunos, responsáveis e funcionários da instituição com rastreabilidade completa.',
      },
      {
        title: 'Evidências organizadas para acreditação educacional',
        description:
          'Centralize a documentação exigida pelos organismos acreditadores do setor educacional com acesso organizado por critério e ciclo de avaliação.',
      },
    ],
    ctaTitle: 'Uma instituição educacional que melhora continuamente.',
    ctaSubtitle: 'Gestão da qualidade adaptada ao ritmo e às necessidades do setor educacional.',
    agentChat: {
      userMessage:
        'O organismo acreditador nos pede evidência de melhoria contínua dos últimos 2 ciclos. Temos 10 dias.',
      aiIntro:
        'Encontrei as ações de melhoria de ambos os ciclos no sistema. Há evidência suficiente, mas precisa ser organizada.',
      aiPoints: [
        '→ Ciclo 2022–2023: 8 ações registradas, 6 com evidência completa e encerramento verificado',
        '→ Ciclo 2023–2024: 11 ações, 3 ainda abertas que podem ser vistas negativamente pelo acreditador',
        '→ Falta consolidar os indicadores de satisfação estudantil em um único relatório por ciclo',
      ],
      aiFollowUp:
        'Devo gerar o relatório de melhoria contínua estruturado por ciclo e critério de acreditação?',
    },
  },

  farmaceutica: {
    name: 'Farmacêutica',
    heroTitle: 'BPF sem desvios. Inspeções sem surpresas.',
    heroSubtitle:
      'As empresas farmacêuticas não têm margem de erro diante dos reguladores. O Consultto gerencia desvios, validações e mudanças com a rastreabilidade que as BPF exigem.',
    retos: [
      {
        title: 'Desvios e OOS sem investigação rigorosa',
        description:
          'Os resultados fora de especificação e os desvios de processo farmacêutico devem ser investigados com rigor científico e documentados com evidência completa para o regulador.',
      },
      {
        title: 'Documentação de validações desatualizada',
        description:
          'Os protocolos e relatórios de validação farmacêutica são extensos, exigem aprovações múltiplas e devem ser mantidos atualizados durante toda a vida útil do produto.',
      },
      {
        title: 'Mudanças com variação regulatória sem processo formal',
        description:
          'Qualquer mudança em formulação, processo ou equipamento farmacêutico pode exigir uma variação junto à autoridade sanitária. Sem um sistema formal, o risco regulatório é alto.',
      },
      {
        title: 'Fornecedores de matéria-prima sem qualificação ativa',
        description:
          'As BPF exigem qualificar e monitorar continuamente os fornecedores de matérias-primas críticas. A documentação desse processo é extensa e auditada em cada inspeção.',
      },
    ],
    soluciones: [
      {
        title: 'Gestão de desvios farmacêuticos com análise de impacto',
        description:
          'Registre desvios de processo e resultados OOS, conduza a investigação de causa raiz e documente a disposição do lote farmacêutico com rastreabilidade regulatória completa.',
      },
      {
        title: 'Controle de documentação de validação BPF',
        description:
          'Gerencie protocolos, relatórios e matrizes de validação farmacêutica com aprovações eletrônicas, controle de versão e acesso auditável em cada inspeção.',
      },
      {
        title: 'Controle de mudanças com dossiê regulatório',
        description:
          'Avalie o impacto regulatório de cada mudança farmacêutica, coordene as aprovações internas e gere os dossiês de suporte para variações junto às autoridades.',
      },
      {
        title: 'Qualificação e auditoria de fornecedores BPF',
        description:
          'Gerencie o programa de qualificação de fornecedores farmacêuticos, registre auditorias de segunda parte e mantenha o status de aprovado atualizado para cada inspeção.',
      },
    ],
    ctaTitle: 'Conformidade com BPF sem desvios que comprometam sua operação.',
    ctaSubtitle: 'Sistema de qualidade farmacêutica projetado para passar em inspeções regulatórias sem surpresas.',
    agentChat: {
      userMessage:
        'Resultado OOS no lote FA-3301. O controle de qualidade precisa saber os passos exatos da investigação BPF.',
      aiIntro:
        'Iniciando protocolo OOS conforme ICH Q10 e BPF. A investigação tem duas fases obrigatórias.',
      aiPoints: [
        '→ Fase 1 (laboratório): verificar erros de amostragem, equipamentos e analista antes de assumir falha do lote',
        '→ Fase 2 (produção): se a Fase 1 for inconclusiva, revisar os registros de manufatura do lote FA-3301',
        '→ Prazo: o regulador exige conclusão documentada em no máximo 30 dias úteis a partir da detecção',
      ],
      aiFollowUp:
        'Devo abrir o dossiê OOS, atribuir o responsável pela investigação e ativar o bloqueio preventivo do lote?',
    },
  },
}
