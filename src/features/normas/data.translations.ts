type NormaTranslation = {
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

// ---------------------------------------------------------------------------
// ENGLISH TRANSLATIONS
// ---------------------------------------------------------------------------

export const NORMAS_EN: Record<string, NormaTranslation> = {
  'iso-9001': {
    fullName: 'Quality Management Systems',
    categoria: 'Quality',
    tagline: 'The world\'s most recognized quality standard, implemented without paperwork or friction.',
    description:
      'ISO 9001:2015 establishes the requirements for a quality management system focused on customer satisfaction and continual improvement. It is the benchmark standard for any organization seeking to demonstrate the ability to consistently deliver conforming products and services.',
    scope: 'Any organization, regardless of size, sector, or type of product or service.',
    industrias: ['Manufacturing', 'Professional Services', 'Construction', 'Technology', 'Logistics'],
    stats: [
      { value: '1.1M+', label: 'companies certified worldwide' },
      { value: '170+', label: 'countries with certified organizations' },
      { value: '98%', label: 'of customers require ISO 9001 from their suppliers' },
    ],
    requisitos: [
      {
        clause: '§4.1',
        title: 'Context of the organization',
        description:
          'Identify internal and external factors that affect the ability to achieve the intended results of the QMS, including interested parties and their requirements.',
      },
      {
        clause: '§6.1',
        title: 'Actions to address risks and opportunities',
        description:
          'Plan actions to address identified risks and opportunities, ensuring the QMS achieves its intended results and promotes continual improvement.',
      },
      {
        clause: '§8.4',
        title: 'Control of externally provided processes',
        description:
          'Ensure that externally provided processes, products and services conform to specified requirements through supplier evaluation and monitoring.',
      },
      {
        clause: '§10.2',
        title: 'Nonconformity and corrective action',
        description:
          'Manage nonconformities, implement corrective actions, review their effectiveness, and document evidence to prevent recurrence.',
      },
    ],
    comoGestiona: [
      {
        title: 'Centralized document control',
        description:
          'All QMS documents live in Consultto with version control, approval workflows and automatic distribution. No more shared folders or outdated versions on the shop floor.',
      },
      {
        title: 'Nonconformity management with root cause analysis',
        description:
          'Log nonconformities, conduct root cause analysis with guided methodologies (5 Whys, Ishikawa) and track automatically through to verified closure with evidence.',
      },
      {
        title: 'Internal audits by clause',
        description:
          'Plan your annual program, run structured checklists organized by ISO 9001 clause and generate findings reports ready for management review.',
      },
      {
        title: 'Indicators and management review',
        description:
          'KPI dashboard covering customer satisfaction, corrective action effectiveness and quality objective compliance. Generate the management review report in one click.',
      },
    ],
    ctaTitle: 'Your ISO 9001 certification, without the document chaos.',
    ctaSubtitle:
      'Implement, get certified and keep your quality system running — all from one platform.',
  },

  'iso-14001': {
    fullName: 'Environmental Management Systems',
    categoria: 'Environment',
    tagline: 'Meet your environmental commitments and demonstrate them with solid evidence at any audit.',
    description:
      'ISO 14001:2015 sets the criteria for an environmental management system that enables organizations to improve their environmental performance through more efficient use of resources. It helps companies identify, manage, monitor and control their environmental impacts in a comprehensive way.',
    scope: 'Organizations of any type seeking to manage their environmental responsibilities.',
    industrias: ['Manufacturing', 'Construction', 'Mining', 'Energy', 'Logistics'],
    stats: [
      { value: '420K+', label: 'active ISO 14001 certificates globally' },
      { value: '60%', label: 'waste reduction reported by certified organizations' },
      { value: '40+', label: 'environmental legal requirements integrated' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Environmental aspects and impacts',
        description:
          'Identify the environmental aspects of the organization\'s activities, products and services that it can control, and determine which are significant.',
      },
      {
        clause: '§6.1.3',
        title: 'Compliance obligations',
        description:
          'Determine and have access to applicable legal and other environmental requirements, and assess how they apply to the organization.',
      },
      {
        clause: '§8.1',
        title: 'Operational planning and control',
        description:
          'Establish controls to manage significant environmental aspects, including emergency situations and response to spills or accidents.',
      },
      {
        clause: '§9.1',
        title: 'Monitoring and measurement',
        description:
          'Monitor, measure, analyze and evaluate environmental performance using defined indicators, ensuring calibrated measuring equipment and verifiable records.',
      },
    ],
    comoGestiona: [
      {
        title: 'Aspects and impacts matrix',
        description:
          'Identify, assess and prioritize environmental aspects with significance criteria. Automatic updates when processes change and alerts when applicable legislation is amended.',
      },
      {
        title: 'Legal requirements register',
        description:
          'Centralize all environmental compliance obligations — laws, permits, standards — with expiry tracking and compliance evidence per period.',
      },
      {
        title: 'Environmental objectives monitoring',
        description:
          'Set environmental footprint reduction targets, log periodic metrics and visualize progress on executive dashboards ready for audit.',
      },
      {
        title: 'Emergency plans and drills',
        description:
          'Manage environmental response plans, schedule drills and record evidence of staff preparedness and training.',
      },
    ],
    ctaTitle: 'Environmental management without bureaucracy, with real evidence.',
    ctaSubtitle:
      'Consultto turns your EMS into a living system that complies, improves and is ready for any audit.',
  },

  'iso-45001': {
    fullName: 'Occupational Health and Safety Management Systems',
    categoria: 'Occupational Safety',
    tagline: 'Protect your team and demonstrate a safety system that truly works.',
    description:
      'ISO 45001:2018 specifies requirements for an occupational health and safety management system, with the purpose of preventing work-related injuries and ill health. It is the international standard that replaced OHSAS 18001 and adopts a leadership and worker participation approach.',
    scope: 'All types of organizations, regardless of size, industry or nature of activities.',
    industrias: ['Manufacturing', 'Construction', 'Mining', 'Logistics', 'Chemical Industry'],
    stats: [
      { value: '2.78M', label: 'workers die annually from occupational accidents worldwide' },
      { value: '85%', label: 'of accidents preventable with an effective OH&S system' },
      { value: '50%+', label: 'incident reduction reported by certified organizations' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Hazard identification and risk assessment',
        description:
          'Establish, implement and maintain processes to proactively identify hazards, assess OH&S risks and determine necessary controls.',
      },
      {
        clause: '§7.4',
        title: 'Communication and worker participation',
        description:
          'Establish internal and external OH&S communication mechanisms and ensure the active participation and consultation of workers in system decisions.',
      },
      {
        clause: '§8.2',
        title: 'Emergency preparedness and response',
        description:
          'Prepare response plans for potential emergency situations, including evacuation, first aid and communication with authorities.',
      },
      {
        clause: '§10.1',
        title: 'Incidents, nonconformities and corrective actions',
        description:
          'Investigate OH&S incidents and nonconformities, implement corrective actions based on root cause analysis and evaluate their effectiveness.',
      },
    ],
    comoGestiona: [
      {
        title: 'Incident logging and tracking',
        description:
          'Capture accidents, incidents and near-misses in real time from any device. The system guides root cause investigation and automatically tracks actions through to closure.',
      },
      {
        title: 'Hazard identification and controls',
        description:
          'Manage the hazard/risk matrix with standardized criteria, link hazards to operational controls and generate alerts when periodic reviews are due.',
      },
      {
        title: 'Competency and training management',
        description:
          'Log risk profiles per job position, plan mandatory OH&S training and generate training evidence ready for authority inspections.',
      },
      {
        title: 'Safety inspections and audits',
        description:
          'Run field inspections with digital checklists, assign findings to responsible parties and consolidate the annual internal OH&S audit program.',
      },
    ],
    ctaTitle: 'A safety system that protects and certifies.',
    ctaSubtitle:
      'With Consultto, OH&S management stops being reactive. Prevent, record and demonstrate continual improvement.',
  },

  'iso-22000': {
    fullName: 'Food Safety Management Systems',
    categoria: 'Food Safety',
    tagline: 'Control food hazards at every stage of the chain and arrive at your audit with confidence.',
    description:
      'ISO 22000:2018 defines the requirements for a food safety management system that integrates HACCP principles with prerequisite programs. It applies to any organization in the food chain that needs to demonstrate its ability to control hazards and ensure that food is safe for consumption.',
    scope: 'Any organization in the food chain: producers, processors, distributors, transporters and retailers.',
    industrias: ['Food & Beverage', 'Agriculture', 'Food Logistics', 'Catering', 'Food Retail'],
    stats: [
      { value: '42K+', label: 'ISO 22000 certificates in more than 140 countries' },
      { value: '600M', label: 'people affected by foodborne illnesses every year' },
      { value: '3x', label: 'more exports to premium markets with certification' },
    ],
    requisitos: [
      {
        clause: '§6.1',
        title: 'Prerequisite programs (PRPs)',
        description:
          'Establish, implement, maintain and update the PRPs needed to control the likelihood of introducing food safety hazards into products and the processing environment.',
      },
      {
        clause: '§8.5',
        title: 'Hazard analysis',
        description:
          'Conduct hazard analysis based on preliminary information to determine which hazards are significant and what level of control is required.',
      },
      {
        clause: '§8.8',
        title: 'Verification of the hazard control plan',
        description:
          'Establish, implement and maintain verification activities confirming that the hazard control plan is being effectively applied.',
      },
      {
        clause: '§9.2',
        title: 'Internal audit of the FSMS',
        description:
          'Conduct internal audits at planned intervals to evaluate whether the food safety management system is implemented and maintained effectively.',
      },
    ],
    comoGestiona: [
      {
        title: 'HACCP plan and hazard analysis',
        description:
          'Build the digital HACCP plan with identification of biological, chemical and physical hazards, CCP determination, critical limits and integrated corrective actions.',
      },
      {
        title: 'Operational PRP control',
        description:
          'Log the daily monitoring of prerequisite programs (cleaning, pest control, cold chain) with automatic alerts upon deviations.',
      },
      {
        title: 'Process records organized by batch',
        description:
          'Centralize production, raw material and distribution records in a structured way so information is available and organized when an audit or contingency requires it.',
      },
      {
        title: 'Food nonconformity management',
        description:
          'Log nonconforming products, manage dispositions (rejection, rework, conditional release) and generate segregation evidence for audits.',
      },
    ],
    ctaTitle: 'Food safety managed with precision.',
    ctaSubtitle:
      'Control hazards, document evidence and get certified in ISO 22000 without the spreadsheet chaos.',
  },

  'iso-13485': {
    fullName: 'Quality Management Systems for Medical Devices',
    categoria: 'Medical Devices',
    tagline: 'Meet the most demanding regulatory requirements of the medical world without losing your innovation pace.',
    description:
      'ISO 13485:2016 specifies the requirements for a quality management system applied to the manufacture and commercialization of medical devices. It is an essential requirement for accessing European Union markets (CE marking) and largely satisfies the requirements of the FDA QSR in the United States.',
    scope: 'Manufacturers, distributors, importers and service providers in the medical device value chain.',
    industrias: ['Medical Devices', 'Pharmaceuticals', 'In Vitro Diagnostics', 'Digital Health', 'Medical Manufacturing'],
    stats: [
      { value: '28K+', label: 'ISO 13485 certified organizations globally' },
      { value: '€115B', label: 'value of the European medical device market' },
      { value: '100%', label: 'of MD manufacturers require ISO 13485 for CE marking' },
    ],
    requisitos: [
      {
        clause: '§4.2',
        title: 'Documentation and record requirements',
        description:
          'Maintain a rigorous documentation system that includes the device file, control procedures, manufacturing records and traceability by serial number or lot.',
      },
      {
        clause: '§7.3',
        title: 'Design and development',
        description:
          'Plan and control the medical device design with inputs, outputs, reviews, verification, validation and documented change control.',
      },
      {
        clause: '§8.2.1',
        title: 'Feedback and post-market surveillance',
        description:
          'Collect information on the post-production experience of the device, including complaints, incidents and post-market surveillance reports.',
      },
      {
        clause: '§8.5.2',
        title: 'Corrective and preventive actions (CAPA)',
        description:
          'Implement a robust CAPA process that identifies root causes, defines and implements actions, and verifies their effectiveness with objective evidence.',
      },
    ],
    comoGestiona: [
      {
        title: 'Medical device technical file',
        description:
          'Centralize all device technical documentation: design, specifications, validations, labeling and certificates. Controlled access with complete change audit trail.',
      },
      {
        title: 'Complaint management and post-market surveillance',
        description:
          'Capture customer complaints, classify by criticality, link to a nonconformity where applicable and generate regulatory reports for health authorities.',
      },
      {
        title: 'CAPA management with regulatory traceability',
        description:
          'Manage corrective and preventive actions with the fields required by ISO 13485, FDA and EU MDR. Evidence always available for inspections.',
      },
      {
        title: 'Critical supplier qualification',
        description:
          'Evaluate, qualify and periodically re-evaluate suppliers of critical components. Generate the approved supplier list and performance history.',
      },
    ],
    ctaTitle: 'Medical device quality management without regulatory friction.',
    ctaSubtitle:
      'Consultto gives you the document system and traceability that FDA, MDR and notified bodies require.',
  },

  'iatf-16949': {
    fullName: 'Quality Management System for the Automotive Industry',
    categoria: 'Automotive Quality',
    tagline: 'The standard that opens doors to global OEMs, managed without the complexity it is known for.',
    description:
      'IATF 16949:2016 is the quality management standard specific to the automotive industry, developed by the International Automotive Task Force. It incorporates the requirements of ISO 9001:2015 and adds automotive supply chain-specific requirements including core quality tools such as APQP, PPAP, FMEA, MSA and SPC.',
    scope: 'Manufacturers of components, systems and materials for the automotive supply chain (OEM and Tier 1/2).',
    industrias: ['Automotive', 'Component Manufacturing', 'Metal Stamping', 'Automotive Plastics', 'Automotive Electronics'],
    stats: [
      { value: '69K+', label: 'IATF 16949 certified sites worldwide' },
      { value: '4M+', label: 'employees in certified organizations' },
      { value: '100%', label: 'of global OEMs require IATF 16949 from Tier 1 suppliers' },
    ],
    requisitos: [
      {
        clause: '§8.3',
        title: 'Advanced product quality planning (APQP)',
        description:
          'Apply the advanced product quality planning process to manage the development of new products or changes, integrating customer inputs throughout.',
      },
      {
        clause: '§8.6.5',
        title: 'Production part approval process (PPAP)',
        description:
          'Obtain customer approval through the PPAP process before launching production of new or modified parts, with all required documentation in place.',
      },
      {
        clause: '§8.5.6',
        title: 'Change control',
        description:
          'Manage changes in manufacturing processes, facilities and equipment with customer notification and re-validation prior to implementation.',
      },
      {
        clause: '§10.2',
        title: 'Nonconformity management and returns',
        description:
          'Respond to field nonconformities and customer returns with documented root cause analysis and corrective actions within customer-defined timelines.',
      },
    ],
    comoGestiona: [
      {
        title: 'PPAP management and part approval',
        description:
          'Organize the 18 PPAP elements by part and part number, manage customer reviews and keep the approval file ready for OEM audits.',
      },
      {
        title: 'Process and product FMEA',
        description:
          'Build and maintain failure mode and effect analyses with RPN, risk reduction actions and re-assessment. Linked to change control.',
      },
      {
        title: 'Field problem response (8D)',
        description:
          'Manage customer problem reports in 8D format, track response deadlines and escalate automatically when penalty risk arises.',
      },
      {
        title: 'Statistical process control (SPC)',
        description:
          'Record SPC data by special characteristic, automatically calculate Cpk/Cp and alert when the process drifts outside control limits.',
      },
    ],
    ctaTitle: 'IATF 16949 managed with the precision OEMs demand.',
    ctaSubtitle:
      'Documentation, PPAP, FMEA and 8D centralized. Your automotive supply chain, always audit-ready.',
  },

  'iso-50001': {
    fullName: 'Energy Management Systems',
    categoria: 'Energy',
    tagline: 'Reduce your energy consumption with a system that measures, analyzes and improves in continuous cycles.',
    description:
      'ISO 50001:2018 establishes the requirements for establishing, implementing, maintaining and improving an energy management system. It helps organizations create energy efficiency policies, set measurable targets and make data-driven decisions to reduce consumption and energy costs.',
    scope: 'Organizations of any sector that use energy and seek to continuously improve their energy performance.',
    industrias: ['Energy-Intensive Manufacturing', 'Hospitals', 'Data Centers', 'Hotels', 'Commercial Buildings'],
    stats: [
      { value: '18K+', label: 'ISO 50001 certified organizations' },
      { value: '30%', label: 'average energy consumption reduction reported' },
      { value: '10x', label: 'typical return on investment in the first year of implementation' },
    ],
    requisitos: [
      {
        clause: '§6.3',
        title: 'Energy review and baseline',
        description:
          'Conduct an analysis of energy use and consumption, identify significant energy uses and establish an energy baseline against which improvements are measured.',
      },
      {
        clause: '§6.4',
        title: 'Energy performance indicators (EnPIs)',
        description:
          'Determine appropriate EnPIs to measure energy performance and establish methodologies for their periodic measurement, monitoring and analysis.',
      },
      {
        clause: '§8.1',
        title: 'Operational planning and control',
        description:
          'Establish operational criteria for significant energy uses and communicate them to those who influence the organization\'s energy performance.',
      },
      {
        clause: '§9.1',
        title: 'Monitoring, measurement and analysis',
        description:
          'Monitor and measure key characteristics that determine energy performance, including EnPIs, progress toward objectives and actual vs. expected consumption.',
      },
    ],
    comoGestiona: [
      {
        title: 'Energy policy and objectives documentation',
        description:
          'Structure and centralize the energy policy, period reduction objectives and action plans assigned to responsible parties, with progress tracking and audit evidence.',
      },
      {
        title: 'Energy improvement opportunities register',
        description:
          'Capture and track identified energy efficiency projects, documenting estimated savings, defined actions and implementation status.',
      },
      {
        title: 'Energy review and baseline management',
        description:
          'Organize energy review documentation, the defined baseline and performance indicators (EnPIs) so they are available and up to date at every audit.',
      },
      {
        title: 'Action plans and objective tracking',
        description:
          'Define reduction targets, assign responsible parties, schedule periodic reviews and generate energy performance reports for management review.',
      },
    ],
    ctaTitle: 'Lower energy consumption, greater competitiveness.',
    ctaSubtitle:
      'Implement ISO 50001 with a system that organizes, documents and tracks your energy management.',
  },

  'iso-27001': {
    fullName: 'Information Security Management Systems',
    categoria: 'Information Security',
    tagline: 'Protect your organization\'s information assets and demonstrate world-class cybersecurity.',
    description:
      'ISO 27001:2022 specifies the requirements for establishing, implementing, maintaining and improving an information security management system (ISMS). It includes 93 controls organized in four categories that protect the confidentiality, integrity and availability of information.',
    scope: 'Organizations of any sector managing sensitive information: customers, employees, intellectual property or financial data.',
    industrias: ['Technology & Software', 'Financial Services', 'Digital Health', 'Government', 'Consulting'],
    stats: [
      { value: '70K+', label: 'active ISO 27001 certificates worldwide' },
      { value: '$4.45M', label: 'average global cost of a data breach in 2023' },
      { value: '93', label: 'security controls in the 2022 version' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Information security risk assessment',
        description:
          'Define and apply an IS risk assessment process that identifies, analyzes and evaluates risks associated with the organization\'s information assets.',
      },
      {
        clause: '§6.1.3',
        title: 'Risk treatment',
        description:
          'Select appropriate risk treatment options, determine the required Annex A controls and prepare a Statement of Applicability (SoA).',
      },
      {
        clause: '§8.2',
        title: 'Periodic risk assessment',
        description:
          'Perform risk assessments at planned intervals or when significant changes occur in the organization or its security context.',
      },
      {
        clause: '§A.5',
        title: 'Organizational controls (Annex A)',
        description:
          'Implement the applicable 37 organizational controls from Annex A as defined in the Statement of Applicability, including policies, asset classification and threat intelligence.',
      },
    ],
    comoGestiona: [
      {
        title: 'Information asset inventory and classification',
        description:
          'Register all information assets with their owner, confidentiality classification and valuation — the foundation for rigorous, documented risk analysis.',
      },
      {
        title: 'IS risk assessment and treatment',
        description:
          'Run the ISO 27001 risk methodology with likelihood/impact matrices, treatment options and a Risk Treatment Plan (RTP) linked to controls.',
      },
      {
        title: 'Security incident management',
        description:
          'Log, classify and investigate information security incidents with timeline, impact assessment and corrective actions aligned with Annex A.',
      },
      {
        title: 'Updated Statement of Applicability (SoA)',
        description:
          'Maintain the SoA with the implementation status of each Annex A control, inclusion/exclusion justification and application evidence.',
      },
    ],
    ctaTitle: 'Information security certified and documented.',
    ctaSubtitle:
      'With Consultto, your ISMS is a competitive advantage — not a compliance burden.',
  },

  'fssc-22000': {
    fullName: 'Food Safety System Certification',
    categoria: 'Food Safety',
    tagline: 'The food safety certification most recognized by major global retailers, implemented without friction.',
    description:
      'FSSC 22000 v6 is a GFSI-recognized food safety certification scheme that combines ISO 22000, sector-specific requirements (ISO/TS) and additional FSSC requirements. It is required by leading global retailers such as Walmart, Carrefour and Tesco from their suppliers.',
    scope: 'Organizations in the food supply chain: manufacturers, packers, transporters and food service providers.',
    industrias: ['Food & Beverage', 'Food Packaging', 'Ingredients & Additives', 'Food Logistics', 'Agriculture'],
    stats: [
      { value: '37K+', label: 'FSSC 22000 certified sites worldwide' },
      { value: '180+', label: 'countries where the certification is present' },
      { value: '100%', label: 'GFSI recognition for access to global retailers' },
    ],
    requisitos: [
      {
        clause: 'ISO 22000 §8.5',
        title: 'Hazard management system (HACCP)',
        description:
          'Implement a complete HACCP system with hazard analysis, CCP determination, critical limits, monitoring and documented corrective actions.',
      },
      {
        clause: 'ISO/TS §2.1',
        title: 'Sector-specific prerequisite programs',
        description:
          'Implement the sector-specific PRPs (ISO/TS 22002-1 for food manufacturing) covering infrastructure, sanitation and allergen control.',
      },
      {
        clause: 'FSSC §2.5',
        title: 'Allergen control',
        description:
          'Document the allergen management program including risk assessment, cleaning validation, labeling and communication throughout the supply chain.',
      },
      {
        clause: 'FSSC §2.7',
        title: 'Purchasing and supplier supervision',
        description:
          'Manage approval and monitoring of suppliers of raw materials, packaging materials and services with impact on food safety.',
      },
    ],
    comoGestiona: [
      {
        title: 'HACCP plan and CCP monitoring',
        description:
          'Manage the digital HACCP plan with all hazards, CCPs, critical limits and corrective actions. Log daily monitoring and automatically alert on critical limit deviations.',
      },
      {
        title: 'Allergen control and documentation',
        description:
          'Structure the allergen management program: per-product declaration, validated cleaning procedures and supply chain communication records, ready for audit.',
      },
      {
        title: 'FSSC 22000 internal audits',
        description:
          'Structured audit checklists for ISO 22000, ISO/TS and additional FSSC v6 requirements. Generate reports comparable to those of a certification audit.',
      },
      {
        title: 'Food supplier management',
        description:
          'Approve, evaluate and re-evaluate suppliers with food safety criteria, manage supplier certificates and generate an up-to-date approved supplier list.',
      },
    ],
    ctaTitle: 'Get FSSC 22000 certified and open doors to major retailers.',
    ctaSubtitle:
      'Consultto organizes all FSSC 22000 requirements into a digital system your team can operate without relying on consultants.',
  },

  'brc-food': {
    fullName: 'Global Standard for Food Safety',
    categoria: 'Food Safety',
    tagline: 'The British retail standard that opens premium markets in Europe and the English-speaking world.',
    description:
      'BRC Food Issue 9 is the British Retail Consortium food safety standard, GFSI-recognized and required by the major UK and European retailers. It defines rigorous requirements for food safety, quality, legality and integrity of the production process for food suppliers.',
    scope: 'Food manufacturers and processors supplying retailers, especially in UK, European and English-speaking markets.',
    industrias: ['Food Processing', 'Bakery Products', 'Meat & Dairy', 'Beverages', 'Frozen Foods'],
    stats: [
      { value: '30K+', label: 'BRC Food certified sites worldwide' },
      { value: '130+', label: 'countries with BRC certified companies' },
      { value: '£180B', label: 'in retailer purchasing from companies requiring BRC certification' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Food safety plan (HACCP)',
        description:
          'Develop and implement a full HACCP plan based on Codex Alimentarius principles, with documented analysis of all significant hazards.',
      },
      {
        clause: '§3',
        title: 'Food safety management system',
        description:
          'Maintain an up-to-date document system covering policies, manuals, procedures and manufacturing records conforming to BRC Issue 9.',
      },
      {
        clause: '§5',
        title: 'Product control',
        description:
          'Implement allergen controls, product authenticity, complaints management, traceability and documented, tested product withdrawal procedures.',
      },
      {
        clause: '§6',
        title: 'Process control',
        description:
          'Establish documented controls for all stages of the production process, including critical parameters, work instructions and control records.',
      },
    ],
    comoGestiona: [
      {
        title: 'Structured BRC Issue 9 documentation',
        description:
          'Organize all BRC system documents by standard section. Version control, approvals and digitalized distribution for plant and offices.',
      },
      {
        title: 'BRC internal audit program',
        description:
          'Run internal audits with checklists specific to each BRC Issue 9 section. Findings automatically become nonconformities with tracking.',
      },
      {
        title: 'Customer complaints management',
        description:
          'Log, classify and analyze complaint trends. Generate the complaints KPIs that BRC auditors review during certification.',
      },
      {
        title: 'Allergen and authenticity control',
        description:
          'Manage the allergen program, ingredient authenticity declaration and verification testing required by BRC Issue 9.',
      },
    ],
    ctaTitle: 'BRC Food Issue 9 managed without the document chaos.',
    ctaSubtitle:
      'Arrive at your BRC audit with all evidence organized and your team ready to answer any question.',
  },

  'ifs-food': {
    fullName: 'International Featured Standards Food',
    categoria: 'Food Safety',
    tagline: 'The standard preferred by German and French retailers to ensure food quality.',
    description:
      'IFS Food v8 is a GFSI-recognized audit standard developed to assess the quality management and food safety system of private-label product manufacturers. It is an entry requirement for the major retailers in Germany, France and the rest of continental Europe.',
    scope: 'Food manufacturers producing own-label products for European retailers, especially in DACH and French-speaking markets.',
    industrias: ['Private Label Products', 'Snacks & Cookies', 'Sauces & Condiments', 'Dairy', 'Frozen Products'],
    stats: [
      { value: '14K+', label: 'IFS Food certified sites worldwide' },
      { value: '90+', label: 'countries with IFS Food presence' },
      { value: '€800B', label: 'European private-label product market' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Food safety and quality management system',
        description:
          'Implement and maintain an integrated management system covering HACCP requirements, document management and food quality and safety risk management.',
      },
      {
        clause: '§3',
        title: 'Resource management',
        description:
          'Ensure the competence, personal hygiene and training programs for personnel in contact with food, with up-to-date records.',
      },
      {
        clause: '§4',
        title: 'Production planning and process',
        description:
          'Control all production process parameters — raw materials, recipes, packaging, labeling, process conditions — with verifiable records.',
      },
      {
        clause: '§5',
        title: 'Measurement, analysis and improvement',
        description:
          'Conduct internal audits, manage nonconformities, customer complaints and defect analysis with documented trends and improvement actions.',
      },
    ],
    comoGestiona: [
      {
        title: 'HACCP plan adapted to IFS v8',
        description:
          'Structure the hazard analysis with IFS Food v8-specific criteria, including validated control measures and a digitalized monitoring program.',
      },
      {
        title: 'Product specification management',
        description:
          'Centralize technical specifications for all products, raw materials and packaging materials. Control versions and customer approvals.',
      },
      {
        title: 'Quality KPIs and IFS score tracking',
        description:
          'Monitor process quality indicators and estimate the expected IFS score by comparing your practices against the standard\'s criteria.',
      },
      {
        title: 'Nonconformity and defect management',
        description:
          'Log defects by type, analyze trends, manage corrective actions and generate the quality management report that IFS auditors evaluate.',
      },
    ],
    ctaTitle: 'IFS Food v8 without the last-minute document pressure.',
    ctaSubtitle:
      'With Consultto, your IFS system is always audit-ready. No last-minute scrambles.',
  },

  'sqf': {
    fullName: 'Safe Quality Food',
    categoria: 'Food Safety',
    tagline: 'The preferred GFSI standard for the North American market to ensure food safety and quality.',
    description:
      'SQF Edition 9 is a GFSI-recognized food quality and safety management certification program administered by the Food Marketing Institute (FMI) in the US. It covers the entire food supply chain with specific certification levels: SQF Fundamentals, SQF Quality and SQF Food Safety.',
    scope: 'The entire North American food supply chain: primary production, manufacturing, distribution and retail.',
    industrias: ['Processed Foods', 'Food Distribution', 'Fresh Produce', 'Seafood', 'Grains & Cereals'],
    stats: [
      { value: '5K+', label: 'SQF certified sites in North America' },
      { value: '35+', label: 'years of SQF program history' },
      { value: '3', label: 'certification levels based on business complexity' },
    ],
    requisitos: [
      {
        clause: '§2.1',
        title: 'Management commitment and system review',
        description:
          'Senior management must demonstrate visible commitment to food safety, designate a qualified SQF Practitioner and periodically review the system.',
      },
      {
        clause: '§2.4',
        title: 'Food safety system (HACCP)',
        description:
          'Develop a HACCP-based food safety plan that identifies and controls significant hazards to consumer health.',
      },
      {
        clause: '§2.6',
        title: 'Product identification, traceability and withdrawal',
        description:
          'Maintain a product identification and traceability system that enables a complete market withdrawal within 4 hours.',
      },
      {
        clause: '§11',
        title: 'Good manufacturing practices (cGMP)',
        description:
          'Implement cGMPs for manufacturing environment control, personal hygiene, pest control, cleaning and facility maintenance.',
      },
    ],
    comoGestiona: [
      {
        title: 'SQF food safety plan with HACCP flow',
        description:
          'Build the food safety plan with process flow, hazard analysis, CCPs and PRPs. Meets the format required for SQF Edition 9 certification.',
      },
      {
        title: 'cGMP records and daily verification',
        description:
          'Capture cGMP, cleaning and sanitation verification records from mobile devices. The system detects gaps and alerts the SQF Practitioner.',
      },
      {
        title: 'Product withdrawal mock recall',
        description:
          'Document and run product withdrawal exercises, record response times and generate evidence of 4-hour requirement compliance.',
      },
      {
        title: 'SQF Code document management',
        description:
          'Organize all SQF system documents with the module applicable to your product category, version control and digital distribution.',
      },
    ],
    ctaTitle: 'SQF Edition 9 managed with the rigor the American market demands.',
    ctaSubtitle:
      'A system that prepares you for the SQF audit from day one, without relying on external consultants.',
  },

  'haccp': {
    fullName: 'Hazard Analysis and Critical Control Points',
    categoria: 'Food Safety',
    tagline: 'The scientific food hazard control system at the foundation of every food safety certification.',
    description:
      'HACCP (Hazard Analysis and Critical Control Points) is the internationally recognized preventive food safety system endorsed by the Codex Alimentarius and required by regulations worldwide. The 7 HACCP principles are the foundation of all food safety certifications: FSSC 22000, BRC, IFS, SQF and ISO 22000.',
    scope: 'Any company that processes, transforms, transports or serves food to the final consumer or as an ingredient.',
    industrias: ['Food & Beverage', 'Food Service', 'Meat Processing', 'Dairy', 'Catering & Food Service'],
    stats: [
      { value: '50+', label: 'years of HACCP history since NASA' },
      { value: '7', label: 'principles that structure the complete system' },
      { value: '100%', label: 'of GFSI standards require a documented HACCP as their foundation' },
    ],
    requisitos: [
      {
        clause: 'Principle 1',
        title: 'Hazard analysis',
        description:
          'Identify and evaluate all biological, chemical and physical hazards that may occur at each stage of the production process and determine control measures.',
      },
      {
        clause: 'Principles 2–3',
        title: 'CCP determination and critical limits',
        description:
          'Identify Critical Control Points (CCPs) where control is essential to prevent or eliminate the hazard, and establish critical limits for each CCP.',
      },
      {
        clause: 'Principles 4–5',
        title: 'Monitoring and corrective actions',
        description:
          'Establish monitoring procedures for each CCP and define corrective actions to take when monitoring indicates a CCP is not under control.',
      },
      {
        clause: 'Principles 6–7',
        title: 'Verification and documentation',
        description:
          'Establish verification procedures to confirm the HACCP plan works effectively, and maintain complete system documentation and records.',
      },
    ],
    comoGestiona: [
      {
        title: 'Digital HACCP plan with all 7 principles',
        description:
          'Build the complete HACCP plan with process flow, hazard analysis, CCP determination, critical limits and corrective actions in a guided tool.',
      },
      {
        title: 'CCP monitoring records',
        description:
          'Capture CCP monitoring records from mobile devices or integrated equipment, with automatic alerts when a critical limit deviation is detected.',
      },
      {
        title: 'Deviation and corrective action management',
        description:
          'Log and manage every CCP deviation with the disposition of the affected product, the corrective action applied and verification evidence.',
      },
      {
        title: 'Plan verification and validation',
        description:
          'Schedule and record verification activities (audits, product testing, record review) and periodic validation of the complete HACCP plan.',
      },
    ],
    ctaTitle: 'Your HACCP plan, always current and audit-ready.',
    ctaSubtitle:
      'Stop managing HACCP in spreadsheets. With Consultto, it\'s live, monitored and evidence is always at hand.',
  },

  'gmp-farmaceutica': {
    fullName: 'Pharmaceutical Good Manufacturing Practices',
    categoria: 'Pharmaceutical',
    tagline: 'The regulatory standard that separates reliable pharmaceutical manufacturers from those who lose their licenses.',
    description:
      'Pharmaceutical GMPs (Good Manufacturing Practices) are the quality standards required by global regulatory authorities (FDA, EMA, COFEPRIS) to ensure that medicines are consistently produced and controlled according to quality standards. They apply throughout the entire product lifecycle.',
    scope: 'Manufacturers, packagers and distributors of medicines, active pharmaceutical ingredients (API) and biological products.',
    industrias: ['Pharmaceuticals', 'Biotechnology', 'Active Pharmaceutical Ingredients (API)', 'Quality Control Lab', 'Contract Manufacturing'],
    stats: [
      { value: '3K+', label: 'pharmaceutical plants inspected by the FDA annually' },
      { value: '483', label: 'average observations per plant in FDA inspections' },
      { value: '100%', label: 'of approved medicines require continuous GMP compliance' },
    ],
    requisitos: [
      {
        clause: '§211.68',
        title: 'Computerized systems and validation',
        description:
          'All computerized systems used in manufacturing, laboratory controls or records must be validated with documented evidence of suitability for their intended use.',
      },
      {
        clause: '§211.100',
        title: 'Written manufacturing procedures',
        description:
          'Maintain written, approved procedures for all manufacturing operations and process controls, with compliance records.',
      },
      {
        clause: '§211.192',
        title: 'Production and laboratory record review',
        description:
          'Review all production and laboratory control records before releasing each batch, including complete investigation of any deviations.',
      },
      {
        clause: '§211.198',
        title: 'Complaint management and market withdrawals',
        description:
          'Maintain a system for receiving, classifying and investigating complaints with impact on the quality and safety of the medicine.',
      },
    ],
    comoGestiona: [
      {
        title: 'Manufacturing records documentation and control',
        description:
          'Organize and control master manufacturing documents (BMR), process procedures, deviations and OOS/OOT investigations with role-based access and change traceability.',
      },
      {
        title: 'Change control and lifecycle management',
        description:
          'Manage changes to processes, formulas, equipment and facilities with regulatory impact assessment, multi-level approvals and authority notifications.',
      },
      {
        title: 'Qualification and validation program',
        description:
          'Administer the master validation plan, IQ/OQ/PQ protocols, periodic revalidation and computerized system validation packages.',
      },
      {
        title: 'Annual product review (APR)',
        description:
          'Structure and document the annual product review consolidating complaints, deviations, changes and stability results into an organized dossier for management and inspections.',
      },
    ],
    ctaTitle: 'Pharmaceutical GMP managed with the rigor authorities demand.',
    ctaSubtitle:
      'Documentation, validations, batches and nonconformities centralized. Your plant always inspection-ready.',
  },

  'as9100': {
    fullName: 'Quality Management System for Aerospace, Space and Defense',
    categoria: 'Aerospace and Defense',
    tagline: 'The most demanding quality standard in the aerospace industry, now without the document burden.',
    description:
      'AS9100 Rev D is the quality management standard developed by the International Aerospace Quality Group (IAQG) for the aerospace, space and defense industries. It is based on ISO 9001:2015 and adds more than 100 sector-specific additional requirements, including risk management, configuration control and product safety management.',
    scope: 'Manufacturers of components, systems and services for the aerospace, space and defense industries, including Tier 1, 2 and 3.',
    industrias: ['Aerospace', 'Defense', 'Engines & Turbines', 'Avionics', 'Aerospace MRO'],
    stats: [
      { value: '22K+', label: 'AS9100 certified organizations worldwide' },
      { value: '$838B', label: 'global aerospace market value in 2023' },
      { value: '100%', label: 'of aerospace integrators require AS9100 in their supply chain' },
    ],
    requisitos: [
      {
        clause: '§8.1.1',
        title: 'Operational risk management and planning',
        description:
          'Implement a formal risk management process during planning and execution of product processes, with defined acceptance criteria.',
      },
      {
        clause: '§8.4',
        title: 'Aerospace supply chain control',
        description:
          'Apply AS9100 requirements to external providers, including communication of end-customer requirements and managing requirements flow-down through the supply chain.',
      },
      {
        clause: '§8.5.5',
        title: 'Preservation and configuration control',
        description:
          'Maintain product configuration throughout production and service, controlling deviations, deviation permits and nonconformity dispositions.',
      },
      {
        clause: '§8.7.1',
        title: 'Nonconforming product control',
        description:
          'Rigorously manage nonconforming products with physical segregation, identification, Use As Is assessment and Material Review Board approval.',
      },
    ],
    comoGestiona: [
      {
        title: 'Aerospace program risk management',
        description:
          'Log and manage risks by program or product with probability, severity, mitigation plan and effectiveness tracking. Integrated with change control.',
      },
      {
        title: 'Nonconformity control and Material Review Board',
        description:
          'Manage the nonconformity disposition process with MRB participation, Use As Is / Repair / Scrap classification and customer notification where applicable.',
      },
      {
        title: 'First article inspection management (FAI)',
        description:
          'Administer first article inspection reports (AS9102) by part number, with evidence of dimensional, functional and process characteristics.',
      },
      {
        title: 'Configuration control and deviation records',
        description:
          'Manage deviation permits and customer waivers, ensuring full traceability between the approved configuration and the delivered product.',
      },
    ],
    ctaTitle: 'AS9100 Rev D without the complexity that holds aerospace suppliers back.',
    ctaSubtitle:
      'Meet the most demanding requirements of the aerospace sector with a digital system that works with you, not against you.',
  },

  'ctpat': {
    fullName: 'Customs Trade Partnership Against Terrorism',
    categoria: 'Supply Chain Security',
    tagline: 'The US customs security program that protects your access to the North American market.',
    description:
      'CTPAT is a voluntary program of the US Customs and Border Protection (CBP) that establishes minimum security criteria for the entire international supply chain. Certified companies obtain benefits such as fewer border inspections, priority processing and access to the FAST lane.',
    scope: 'Importers, exporters, carriers, logistics operators and manufacturers operating in the Mexico–US or Canada–US supply chain.',
    industrias: ['Logistics & Transportation', 'Manufacturing', 'International Trade', 'Maquiladora', 'Distribution'],
    stats: [
      { value: '11K+', label: 'active CTPAT partner companies at the border' },
      { value: '50%', label: 'fewer physical border inspections for certified partners' },
      { value: '$800B+', label: 'in Mexico–US bilateral trade protected by the program' },
    ],
    requisitos: [
      {
        clause: 'Criterion 1',
        title: 'Physical facility security',
        description:
          'Facilities must have secure perimeters, access control, adequate lighting and surveillance systems that prevent unauthorized access and the introduction of contraband.',
      },
      {
        clause: 'Criterion 2',
        title: 'Access control and personnel management',
        description:
          'Implement background check processes for employees, visitors and service providers. Includes identification controls and procedures for departing employees.',
      },
      {
        clause: 'Criterion 3',
        title: 'Transport security and seals',
        description:
          'Control the integrity of containers and trailers through ISO 17712 high-security seals, unit inspection records and 7-point verification procedures.',
      },
      {
        clause: 'Criterion 4',
        title: 'Information security and trade partners',
        description:
          'Protect IT systems processing customs information and periodically assess the security of trade partners throughout the international supply chain.',
      },
    ],
    comoGestiona: [
      {
        title: 'Security seal control program planning',
        description:
          'Plan and structure the ISO 17712 seal management program: application and removal procedures, responsible parties per unit and route, and records needed to demonstrate control during a CBP validation.',
      },
      {
        title: 'Vehicle inspection checklist standardization',
        description:
          'Plan and standardize digital vehicle inspection checklists (cab, chassis, compartments, etc.) with the fields required to capture photographic evidence and operator signature.',
      },
      {
        title: 'Border security incident management',
        description:
          'Log security incidents, coordinate investigation, document corrective actions and generate the reports CBP may request during a validation.',
      },
      {
        title: 'Trade partner and supplier evaluation',
        description:
          'Manage the CTPAT partner evaluation program, log security questionnaires and verification visits, and maintain up-to-date compliance status per supplier.',
      },
    ],
    ctaTitle: 'Maintain your CTPAT certification and your access to the North American market.',
    ctaSubtitle:
      'Manage customs security criteria without paperwork or manual processes that put you at risk.',
  },
}

// ---------------------------------------------------------------------------
// PORTUGUESE (BRAZILIAN) TRANSLATIONS
// ---------------------------------------------------------------------------

export const NORMAS_PT: Record<string, NormaTranslation> = {
  'iso-9001': {
    fullName: 'Sistemas de Gestão da Qualidade',
    categoria: 'Qualidade',
    tagline: 'A norma de qualidade mais reconhecida do mundo, implementada sem papelada nem fricção.',
    description:
      'A ISO 9001:2015 estabelece os requisitos para um sistema de gestão da qualidade orientado à satisfação do cliente e à melhoria contínua. É a norma de referência para qualquer organização que busca demonstrar capacidade de entregar produtos e serviços conformes de forma consistente.',
    scope: 'Qualquer organização, independentemente do tamanho, setor ou tipo de produto ou serviço.',
    industrias: ['Manufatura', 'Serviços Profissionais', 'Construção', 'Tecnologia', 'Logística'],
    stats: [
      { value: '1.1M+', label: 'empresas certificadas no mundo' },
      { value: '170+', label: 'países com organizações certificadas' },
      { value: '98%', label: 'dos clientes exigem ISO 9001 de seus fornecedores' },
    ],
    requisitos: [
      {
        clause: '§4.1',
        title: 'Contexto da organização',
        description:
          'Identificar fatores internos e externos que afetam a capacidade de alcançar os resultados pretendidos do SGQ, incluindo partes interessadas e seus requisitos.',
      },
      {
        clause: '§6.1',
        title: 'Ações para abordar riscos e oportunidades',
        description:
          'Planejar ações para abordar os riscos e oportunidades identificados, garantindo que o SGQ alcance seus resultados e promova a melhoria contínua.',
      },
      {
        clause: '§8.4',
        title: 'Controle de processos externos',
        description:
          'Garantir que processos, produtos e serviços fornecidos externamente atendam aos requisitos estabelecidos por meio de avaliação e acompanhamento de fornecedores.',
      },
      {
        clause: '§10.2',
        title: 'Não conformidade e ação corretiva',
        description:
          'Gerenciar não conformidades, implementar ações corretivas, revisar sua eficácia e documentar evidências para prevenir recorrências.',
      },
    ],
    comoGestiona: [
      {
        title: 'Controle documental centralizado',
        description:
          'Todos os documentos do SGQ residem no Consultto com controle de versões, fluxos de aprovação e distribuição automática. Sem pastas compartilhadas nem versões desatualizadas na planta.',
      },
      {
        title: 'Gestão de não conformidades com análise de causa raiz',
        description:
          'Registre não conformidades, realize análise de causa raiz com metodologias guiadas (5 Porquês, Ishikawa) e faça acompanhamento automático até o encerramento verificado com evidências.',
      },
      {
        title: 'Auditorias internas por cláusula',
        description:
          'Planeje o programa anual, execute checklists estruturados por cláusula da ISO 9001 e gere relatórios de achados prontos para a análise crítica pela direção.',
      },
      {
        title: 'Indicadores e análise crítica pela direção',
        description:
          'Painel de KPIs com satisfação do cliente, eficácia das ações corretivas e cumprimento dos objetivos da qualidade. Gere o relatório de análise crítica pela direção em um clique.',
      },
    ],
    ctaTitle: 'Sua certificação ISO 9001, sem o caos documental.',
    ctaSubtitle:
      'Implemente, certifique-se e mantenha seu sistema de qualidade em operação — tudo em uma única plataforma.',
  },

  'iso-14001': {
    fullName: 'Sistemas de Gestão Ambiental',
    categoria: 'Meio Ambiente',
    tagline: 'Cumpra seus compromissos ambientais e demonstre-os com evidências sólidas em qualquer auditoria.',
    description:
      'A ISO 14001:2015 estabelece os critérios para um sistema de gestão ambiental que permite às organizações melhorar seu desempenho ambiental por meio do uso mais eficiente dos recursos. Ajuda as empresas a identificar, gerenciar, monitorar e controlar seus impactos ambientais de forma abrangente.',
    scope: 'Organizações de qualquer tipo que buscam gerenciar suas responsabilidades ambientais.',
    industrias: ['Manufatura', 'Construção', 'Mineração', 'Energia', 'Logística'],
    stats: [
      { value: '420K+', label: 'certificados ISO 14001 ativos globalmente' },
      { value: '60%', label: 'de redução de resíduos reportada por certificados' },
      { value: '40+', label: 'requisitos legais ambientais integrados' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Aspectos e impactos ambientais',
        description:
          'Identificar os aspectos ambientais das atividades, produtos e serviços que a organização pode controlar e determinar quais são significativos.',
      },
      {
        clause: '§6.1.3',
        title: 'Obrigações de conformidade',
        description:
          'Determinar e ter acesso aos requisitos legais e outros requisitos ambientais aplicáveis, e avaliar como se aplicam à organização.',
      },
      {
        clause: '§8.1',
        title: 'Planejamento e controle operacional',
        description:
          'Estabelecer controles para gerenciar aspectos ambientais significativos, incluindo situações de emergência e resposta a derramamentos ou acidentes.',
      },
      {
        clause: '§9.1',
        title: 'Monitoramento e medição',
        description:
          'Monitorar, medir, analisar e avaliar o desempenho ambiental por meio de indicadores definidos, garantindo equipamentos de medição calibrados e registros verificáveis.',
      },
    ],
    comoGestiona: [
      {
        title: 'Matriz de aspectos e impactos',
        description:
          'Identifique, avalie e priorize aspectos ambientais com critérios de significância. Atualização automática ao alterar processos e alertas quando a legislação aplicável muda.',
      },
      {
        title: 'Registro de requisitos legais',
        description:
          'Centralize todas as obrigações de conformidade ambiental — leis, licenças, normas — com acompanhamento de vencimentos e evidências de conformidade por período.',
      },
      {
        title: 'Monitoramento de objetivos ambientais',
        description:
          'Defina metas de redução da pegada ambiental, registre métricas periódicas e visualize o progresso em dashboards executivos prontos para auditoria.',
      },
      {
        title: 'Planos de emergência e simulações',
        description:
          'Gerencie os planos de resposta ambiental, programe simulações e registre evidências de preparação e treinamento da equipe.',
      },
    ],
    ctaTitle: 'Gestão ambiental sem burocracia, com evidência real.',
    ctaSubtitle:
      'O Consultto transforma seu SGA em um sistema vivo que cumpre, melhora e se prepara para qualquer auditoria.',
  },

  'iso-45001': {
    fullName: 'Sistemas de Gestão de Segurança e Saúde no Trabalho',
    categoria: 'Segurança do Trabalho',
    tagline: 'Proteja sua equipe e demonstre um sistema de segurança que realmente funciona.',
    description:
      'A ISO 45001:2018 especifica os requisitos para um sistema de gestão de segurança e saúde no trabalho, com o objetivo de prevenir lesões e doenças relacionadas ao trabalho. É o padrão internacional que substituiu a OHSAS 18001 e adota uma abordagem de liderança e participação dos trabalhadores.',
    scope: 'Todo tipo de organização, independentemente do tamanho, setor ou natureza das atividades.',
    industrias: ['Manufatura', 'Construção', 'Mineração', 'Logística', 'Indústria Química'],
    stats: [
      { value: '2.78M', label: 'trabalhadores morrem anualmente por acidentes de trabalho no mundo' },
      { value: '85%', label: 'dos acidentes são evitáveis com um sistema de SST eficaz' },
      { value: '50%+', label: 'de redução de incidentes reportada por certificados' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Identificação de perigos e avaliação de riscos',
        description:
          'Estabelecer, implementar e manter processos para identificar perigos de forma proativa, avaliar riscos de SST e determinar os controles necessários.',
      },
      {
        clause: '§7.4',
        title: 'Comunicação e participação dos trabalhadores',
        description:
          'Estabelecer mecanismos de comunicação interna e externa sobre SST e garantir a participação e consulta ativa dos trabalhadores nas decisões do sistema.',
      },
      {
        clause: '§8.2',
        title: 'Preparação e resposta a emergências',
        description:
          'Preparar planos de resposta para situações de emergência potenciais, incluindo evacuação, primeiros socorros e comunicação com autoridades.',
      },
      {
        clause: '§10.1',
        title: 'Incidentes, não conformidades e ações corretivas',
        description:
          'Investigar incidentes e não conformidades de SST, implementar ações corretivas baseadas em análise de causa raiz e avaliar sua eficácia.',
      },
    ],
    comoGestiona: [
      {
        title: 'Registro e acompanhamento de incidentes',
        description:
          'Capture acidentes, incidentes e quase-acidentes em tempo real a partir de qualquer dispositivo. O sistema guia a investigação de causa raiz e faz acompanhamento automático das ações até o encerramento.',
      },
      {
        title: 'Identificação de perigos e controles',
        description:
          'Gerencie a matriz de perigos e riscos com critérios padronizados, vincule perigos a controles operacionais e gere alertas quando revisões periódicas estiverem vencendo.',
      },
      {
        title: 'Gestão de competências e treinamentos',
        description:
          'Registre perfis de risco por cargo, planeje treinamentos obrigatórios de SST e gere evidências de treinamento prontas para inspeções de autoridades.',
      },
      {
        title: 'Inspeções de segurança e auditorias',
        description:
          'Execute inspeções de campo com checklists digitais, atribua achados a responsáveis e consolide o programa anual de auditorias internas de SST.',
      },
    ],
    ctaTitle: 'Um sistema de segurança que protege e certifica.',
    ctaSubtitle:
      'Com o Consultto, a gestão de SST deixa de ser reativa. Previna, registre e demonstre melhoria contínua.',
  },

  'iso-22000': {
    fullName: 'Sistemas de Gestão da Segurança de Alimentos',
    categoria: 'Segurança Alimentar',
    tagline: 'Controle os perigos alimentares em cada etapa da cadeia e chegue à auditoria com confiança.',
    description:
      'A ISO 22000:2018 define os requisitos para um sistema de gestão da segurança de alimentos que integra os princípios HACCP com os programas de pré-requisitos. Aplica-se a qualquer organização na cadeia alimentar que precise demonstrar sua capacidade de controlar perigos e garantir que os alimentos são seguros para consumo.',
    scope: 'Toda organização na cadeia alimentar: produtores, processadores, distribuidores, transportadores e varejistas.',
    industrias: ['Alimentos e Bebidas', 'Agricultura', 'Logística Alimentar', 'Restauração', 'Varejo Alimentar'],
    stats: [
      { value: '42K+', label: 'certificados ISO 22000 em mais de 140 países' },
      { value: '600M', label: 'pessoas afetadas por doenças transmitidas por alimentos a cada ano' },
      { value: '3x', label: 'mais exportações para mercados premium com certificação' },
    ],
    requisitos: [
      {
        clause: '§6.1',
        title: 'Programas de pré-requisitos (PPR)',
        description:
          'Estabelecer, implementar, manter e atualizar os PPR necessários para controlar a probabilidade de introdução de perigos relacionados à segurança dos alimentos.',
      },
      {
        clause: '§8.5',
        title: 'Análise de perigos',
        description:
          'Realizar a análise de perigos com base nas informações preliminares para determinar quais são significativos e qual nível de controle é necessário.',
      },
      {
        clause: '§8.8',
        title: 'Verificação do plano de controle de perigos',
        description:
          'Estabelecer, implementar e manter atividades de verificação que confirmem que o plano de controle de perigos está sendo aplicado eficazmente.',
      },
      {
        clause: '§9.2',
        title: 'Auditoria interna do SGIA',
        description:
          'Realizar auditorias internas em intervalos planejados para avaliar se o sistema de gestão da segurança de alimentos está implementado e mantido eficazmente.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plano HACCP e análise de perigos',
        description:
          'Construa o plano HACCP digital com identificação de perigos biológicos, químicos e físicos, determinação de PCCs, limites críticos e ações corretivas integradas.',
      },
      {
        title: 'Controle de PPR operacionais',
        description:
          'Registre o acompanhamento diário dos programas de pré-requisitos (limpeza, controle de pragas, cadeia do frio) com alertas automáticos em caso de desvios.',
      },
      {
        title: 'Registros de processo organizados por lote',
        description:
          'Centralize os registros de produção, matérias-primas e distribuição de forma estruturada para que as informações estejam disponíveis quando a auditoria ou uma contingência exigir.',
      },
      {
        title: 'Gestão de não conformidades alimentares',
        description:
          'Registre produtos não conformes, gerencie disposições (rejeição, reprocessamento, liberação condicional) e gere evidências de segregação para auditorias.',
      },
    ],
    ctaTitle: 'Segurança alimentar gerenciada com precisão.',
    ctaSubtitle:
      'Controle perigos, documente evidências e certifique-se na ISO 22000 sem o caos das planilhas.',
  },

  'iso-13485': {
    fullName: 'Sistemas de Gestão da Qualidade para Dispositivos Médicos',
    categoria: 'Dispositivos Médicos',
    tagline: 'Atenda aos requisitos regulatórios mais exigentes do mundo médico sem perder o ritmo de inovação.',
    description:
      'A ISO 13485:2016 especifica os requisitos para um sistema de gestão da qualidade aplicado à fabricação e comercialização de dispositivos médicos. É um requisito essencial para acessar os mercados da União Europeia (marcação CE) e atende em grande parte aos requisitos do FDA QSR dos EUA.',
    scope: 'Fabricantes, distribuidores, importadores e prestadores de serviços na cadeia de valor de dispositivos médicos.',
    industrias: ['Dispositivos Médicos', 'Farmacêutica', 'Diagnóstico In Vitro', 'Saúde Digital', 'Manufatura Médica'],
    stats: [
      { value: '28K+', label: 'organizações certificadas ISO 13485 globalmente' },
      { value: '€115B', label: 'valor do mercado europeu de dispositivos médicos' },
      { value: '100%', label: 'dos fabricantes de DM requerem ISO 13485 para marcação CE' },
    ],
    requisitos: [
      {
        clause: '§4.2',
        title: 'Requisitos de documentação e arquivo',
        description:
          'Manter um sistema de documentação rigoroso que inclua o dossiê do dispositivo, procedimentos de controle, registros de fabricação e rastreabilidade por número de série ou lote.',
      },
      {
        clause: '§7.3',
        title: 'Projeto e desenvolvimento',
        description:
          'Planejar e controlar o projeto do dispositivo médico com entradas, saídas, revisões, verificação, validação e controle de alterações documentados.',
      },
      {
        clause: '§8.2.1',
        title: 'Retroalimentação e vigilância pós-mercado',
        description:
          'Coletar informações sobre a experiência pós-produção do dispositivo, incluindo reclamações, incidentes e relatórios de vigilância pós-comercialização.',
      },
      {
        clause: '§8.5.2',
        title: 'Ações corretivas e preventivas (CAPA)',
        description:
          'Implementar um processo robusto de não conformidades que identifique causas raiz, defina e implemente ações, e verifique sua eficácia com evidência objetiva.',
      },
    ],
    comoGestiona: [
      {
        title: 'Dossiê técnico do dispositivo médico',
        description:
          'Centralize toda a documentação técnica do dispositivo: projeto, especificações, validações, rotulagem e certificados. Acesso controlado com trilha de auditoria completa de alterações.',
      },
      {
        title: 'Gestão de reclamações e vigilância pós-mercado',
        description:
          'Capture reclamações de clientes, classifique por criticidade, vincule à não conformidade quando aplicável e gere relatórios regulatórios para autoridades sanitárias.',
      },
      {
        title: 'Controle de não conformidades com rastreabilidade regulatória',
        description:
          'Gerencie ações corretivas e preventivas com os campos exigidos pela ISO 13485, FDA e MDR europeu. Evidências sempre disponíveis para inspeções.',
      },
      {
        title: 'Qualificação de fornecedores críticos',
        description:
          'Avalie, qualifique e requalifique periodicamente fornecedores de componentes críticos. Gere a lista de fornecedores aprovados e o histórico de desempenho.',
      },
    ],
    ctaTitle: 'Gestão da qualidade para dispositivos médicos sem fricções regulatórias.',
    ctaSubtitle:
      'O Consultto fornece o sistema documental e a rastreabilidade que FDA, MDR e organismos notificados exigem.',
  },

  'iatf-16949': {
    fullName: 'Sistema de Gestão da Qualidade para a Indústria Automotiva',
    categoria: 'Qualidade Automotiva',
    tagline: 'O padrão que abre portas para OEMs globais, gerenciado sem a complexidade que o caracteriza.',
    description:
      'A IATF 16949:2016 é o padrão de gestão da qualidade específico para a indústria automotiva, desenvolvido pelo International Automotive Task Force. Incorpora os requisitos da ISO 9001:2015 e acrescenta requisitos específicos da cadeia de fornecimento automotivo, incluindo ferramentas de qualidade como APQP, PPAP, FMEA, MSA e CEP.',
    scope: 'Fabricantes de componentes, sistemas e materiais para a cadeia de fornecimento automotivo (OEM e Tier 1/2).',
    industrias: ['Automotivo', 'Fabricação de Componentes', 'Estampagem Metálica', 'Plásticos Automotivos', 'Eletrônica Automotiva'],
    stats: [
      { value: '69K+', label: 'sites certificados IATF 16949 no mundo' },
      { value: '4M+', label: 'funcionários em organizações certificadas' },
      { value: '100%', label: 'dos OEMs globais exigem IATF 16949 de fornecedores Tier 1' },
    ],
    requisitos: [
      {
        clause: '§8.3',
        title: 'Planejamento avançado da qualidade (APQP)',
        description:
          'Aplicar o processo de planejamento avançado da qualidade do produto para gerenciar o desenvolvimento de novos produtos ou alterações, integrando as entradas do cliente.',
      },
      {
        clause: '§8.6.5',
        title: 'Processo de aprovação de peças de produção (PPAP)',
        description:
          'Obter aprovação do cliente por meio do processo PPAP antes de lançar a produção de peças novas ou modificadas, com toda a documentação requerida.',
      },
      {
        clause: '§8.5.6',
        title: 'Controle de alterações',
        description:
          'Gerenciar alterações em processos de fabricação, instalações e equipamentos com notificação ao cliente e revalidação antes da implementação.',
      },
      {
        clause: '§10.2',
        title: 'Gestão de não conformidades e devoluções',
        description:
          'Responder a não conformidades de campo e devoluções de clientes com análise de causa raiz documentada e ações corretivas dentro dos prazos do cliente.',
      },
    ],
    comoGestiona: [
      {
        title: 'Gestão de PPAP e aprovação de peças',
        description:
          'Organize os 18 elementos do PPAP por peça e número, gerencie revisões do cliente e mantenha o arquivo de aprovações pronto para auditorias do OEM.',
      },
      {
        title: 'FMEA de processo e produto',
        description:
          'Construa e mantenha as análises de modo e efeito de falha com NPR, ações de redução de risco e reavaliação posterior. Vinculado ao controle de alterações.',
      },
      {
        title: 'Resposta a problemas de campo (8D)',
        description:
          'Gerencie relatórios de problemas do cliente no formato 8D, acompanhe prazos de resposta e escalone automaticamente diante de riscos de penalização.',
      },
      {
        title: 'Controle estatístico de processo (CEP)',
        description:
          'Registre dados de CEP por característica especial, calcule Cpk/Cp automaticamente e alerte quando o processo se desviar dos limites de controle.',
      },
    ],
    ctaTitle: 'IATF 16949 gerenciada com a precisão que os OEMs exigem.',
    ctaSubtitle:
      'Documentação, PPAP, FMEA e 8D centralizados. Sua cadeia automotiva sempre pronta para auditoria.',
  },

  'iso-50001': {
    fullName: 'Sistemas de Gestão de Energia',
    categoria: 'Energia',
    tagline: 'Reduza seu consumo energético com um sistema que mede, analisa e melhora em ciclos contínuos.',
    description:
      'A ISO 50001:2018 estabelece os requisitos para estabelecer, implementar, manter e melhorar um sistema de gestão de energia. Ajuda as organizações a criar políticas de eficiência energética, definir metas e objetivos mensuráveis e tomar decisões baseadas em dados para reduzir o consumo e os custos de energia.',
    scope: 'Organizações de qualquer setor que utilizam energia e buscam melhorar continuamente seu desempenho energético.',
    industrias: ['Manufatura Intensiva', 'Hospitais', 'Data Centers', 'Hotéis', 'Edifícios Comerciais'],
    stats: [
      { value: '18K+', label: 'organizações certificadas ISO 50001' },
      { value: '30%', label: 'de redução no consumo energético médio reportada' },
      { value: '10x', label: 'retorno sobre investimento típico no primeiro ano de implementação' },
    ],
    requisitos: [
      {
        clause: '§6.3',
        title: 'Revisão energética e linha de base',
        description:
          'Realizar uma análise do uso e consumo de energia, identificar as áreas de uso significativo e estabelecer uma linha de base energética para medir melhorias.',
      },
      {
        clause: '§6.4',
        title: 'Indicadores de desempenho energético (IDE)',
        description:
          'Determinar os IDEs apropriados para medir o desempenho energético e estabelecer metodologias para sua medição, monitoramento e análise periódicos.',
      },
      {
        clause: '§8.1',
        title: 'Planejamento e controle operacional energético',
        description:
          'Estabelecer critérios operacionais para usos significativos de energia e comunicá-los a quem influencia o desempenho energético da organização.',
      },
      {
        clause: '§9.1',
        title: 'Monitoramento, medição e análise',
        description:
          'Monitorar e medir as características-chave que determinam o desempenho energético, incluindo IDEs, progresso em direção aos objetivos e consumo real versus esperado.',
      },
    ],
    comoGestiona: [
      {
        title: 'Documentação da política e objetivos energéticos',
        description:
          'Estruture e centralize a política energética, os objetivos de redução por período e os planos de ação atribuídos a responsáveis, com acompanhamento de avanço e evidências para auditorias.',
      },
      {
        title: 'Registro de oportunidades de melhoria energética',
        description:
          'Capture e acompanhe projetos de eficiência energética identificados, documentando a economia estimada, as ações definidas e o status de implementação.',
      },
      {
        title: 'Gestão de revisões energéticas e linha de base',
        description:
          'Organize a documentação da revisão energética, a linha de base definida e os indicadores de desempenho (IDE) para que estejam disponíveis e atualizados em cada auditoria.',
      },
      {
        title: 'Planos de ação e acompanhamento de objetivos',
        description:
          'Defina metas de redução, atribua responsáveis, programe revisões periódicas e gere relatórios de desempenho energético para análise crítica pela direção.',
      },
    ],
    ctaTitle: 'Menos consumo energético, mais competitividade.',
    ctaSubtitle:
      'Implemente a ISO 50001 com um sistema que organiza, documenta e acompanha sua gestão energética.',
  },

  'iso-27001': {
    fullName: 'Sistemas de Gestão da Segurança da Informação',
    categoria: 'Segurança da Informação',
    tagline: 'Proteja os ativos de informação da sua organização e demonstre cibersegurança de classe mundial.',
    description:
      'A ISO 27001:2022 especifica os requisitos para estabelecer, implementar, manter e melhorar um sistema de gestão da segurança da informação (SGSI). Inclui 93 controles organizados em quatro categorias que protegem a confidencialidade, integridade e disponibilidade da informação.',
    scope: 'Organizações de qualquer setor que gerenciam informações sensíveis: clientes, funcionários, propriedade intelectual ou dados financeiros.',
    industrias: ['Tecnologia e Software', 'Serviços Financeiros', 'Saúde Digital', 'Governo', 'Consultoria'],
    stats: [
      { value: '70K+', label: 'certificados ISO 27001 ativos no mundo' },
      { value: '$4.45M', label: 'custo médio global de uma violação de dados em 2023' },
      { value: '93', label: 'controles de segurança na versão 2022' },
    ],
    requisitos: [
      {
        clause: '§6.1.2',
        title: 'Avaliação de riscos de segurança da informação',
        description:
          'Definir e aplicar um processo de avaliação de riscos de SI que identifique, analise e avalie os riscos associados aos ativos de informação da organização.',
      },
      {
        clause: '§6.1.3',
        title: 'Tratamento de riscos',
        description:
          'Selecionar opções de tratamento de riscos adequadas, determinar os controles do Anexo A necessários e preparar uma declaração de aplicabilidade (SoA).',
      },
      {
        clause: '§8.2',
        title: 'Avaliação periódica de riscos',
        description:
          'Realizar avaliações de riscos em intervalos planejados ou quando ocorrerem mudanças significativas na organização ou em seu contexto de segurança.',
      },
      {
        clause: '§A.5',
        title: 'Controles organizacionais (Anexo A)',
        description:
          'Implementar os 37 controles organizacionais do Anexo A que se aplicam conforme a declaração de aplicabilidade, incluindo políticas, classificação de ativos e inteligência de ameaças.',
      },
    ],
    comoGestiona: [
      {
        title: 'Inventário e classificação de ativos de informação',
        description:
          'Registre todos os ativos de informação com seu proprietário, classificação de confidencialidade e valoração. A base para uma análise de riscos rigorosa e documentada.',
      },
      {
        title: 'Avaliação e tratamento de riscos de SI',
        description:
          'Execute a metodologia de riscos da ISO 27001 com matrizes de probabilidade e impacto, opções de tratamento e Plano de Tratamento de Riscos (PTR) vinculado a controles.',
      },
      {
        title: 'Gestão de incidentes de segurança',
        description:
          'Registre, classifique e investigue incidentes de segurança da informação com linha do tempo, impacto avaliado e ações corretivas conforme o Anexo A.',
      },
      {
        title: 'Declaração de aplicabilidade (SoA) atualizada',
        description:
          'Mantenha a SoA com o status de implementação de cada controle do Anexo A, a justificativa de inclusão/exclusão e a evidência de aplicação.',
      },
    ],
    ctaTitle: 'Segurança da informação certificada e documentada.',
    ctaSubtitle:
      'Com o Consultto, seu SGSI é uma vantagem competitiva — não um fardo de conformidade.',
  },

  'fssc-22000': {
    fullName: 'Food Safety System Certification',
    categoria: 'Segurança Alimentar',
    tagline: 'A certificação de segurança alimentar mais reconhecida pelos grandes varejistas globais, implementada sem fricções.',
    description:
      'A FSSC 22000 v6 é um esquema de certificação de segurança alimentar reconhecido pelo GFSI que combina a ISO 22000, requisitos específicos do setor (ISO/TS) e requisitos adicionais FSSC. É exigida por varejistas líderes mundiais como Walmart, Carrefour e Tesco de seus fornecedores.',
    scope: 'Organizações na cadeia de suprimentos alimentar: fabricantes, embaladores, transportadores e prestadores de serviços alimentares.',
    industrias: ['Alimentos e Bebidas', 'Embalagens Alimentares', 'Ingredientes e Aditivos', 'Logística Alimentar', 'Agricultura'],
    stats: [
      { value: '37K+', label: 'sites certificados FSSC 22000 no mundo' },
      { value: '180+', label: 'países onde a certificação está presente' },
      { value: '100%', label: 'de reconhecimento GFSI para acesso a varejistas globais' },
    ],
    requisitos: [
      {
        clause: 'ISO 22000 §8.5',
        title: 'Sistema de gestão de perigos (HACCP)',
        description:
          'Implementar um sistema HACCP completo com análise de perigos, determinação de PCC, limites críticos, monitoramento e ações corretivas documentadas.',
      },
      {
        clause: 'ISO/TS §2.1',
        title: 'Programas de pré-requisitos específicos do setor',
        description:
          'Implementar os PPR específicos do setor alimentar (ISO/TS 22002-1 para fabricação de alimentos) que cubram infraestrutura, saneamento e controle de alérgenos.',
      },
      {
        clause: 'FSSC §2.5',
        title: 'Controle de alérgenos',
        description:
          'Documentar o programa de gestão de alérgenos, incluindo avaliação de riscos, validação de limpeza, rotulagem e comunicação na cadeia de suprimentos.',
      },
      {
        clause: 'FSSC §2.7',
        title: 'Supervisão de serviços e compras',
        description:
          'Gerenciar a aprovação e o acompanhamento de fornecedores de matérias-primas, materiais de embalagem e serviços com impacto na segurança alimentar.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plano HACCP e monitoramento de PCC',
        description:
          'Gerencie o plano HACCP digital com todos os perigos, PCCs, limites críticos e ações corretivas. Registre o monitoramento diário e alerte automaticamente em caso de desvios de limites críticos.',
      },
      {
        title: 'Controle e documentação de alérgenos',
        description:
          'Estruture o programa de gestão de alérgenos: declaração por produto, procedimentos de limpeza validados e registros de comunicação na cadeia de suprimentos, prontos para auditoria.',
      },
      {
        title: 'Auditorias internas FSSC 22000',
        description:
          'Checklists de auditoria estruturados para os requisitos da ISO 22000, ISO/TS e adicionais FSSC v6. Gere relatórios comparáveis aos de uma auditoria de certificação.',
      },
      {
        title: 'Gestão de fornecedores alimentares',
        description:
          'Aprove, avalie e reavalie fornecedores com critérios de segurança alimentar, gerencie certificados de fornecedor e gere a lista de fornecedores aprovados atualizada.',
      },
    ],
    ctaTitle: 'Certifique-se na FSSC 22000 e abra portas para os grandes varejistas.',
    ctaSubtitle:
      'O Consultto organiza todos os requisitos FSSC 22000 em um sistema digital que sua equipe pode operar sem depender de consultores.',
  },

  'brc-food': {
    fullName: 'Global Standard for Food Safety',
    categoria: 'Segurança Alimentar',
    tagline: 'O padrão britânico de varejo que abre mercados premium na Europa e no mundo anglófono.',
    description:
      'O BRC Food Issue 9 é o padrão de segurança alimentar do British Retail Consortium, reconhecido pelo GFSI e exigido pelos principais varejistas do Reino Unido e Europa. Define requisitos rigorosos de segurança alimentar, qualidade, legalidade e integridade do processo produtivo para fornecedores de alimentos.',
    scope: 'Fabricantes e processadores de alimentos que fornecem para varejistas, especialmente em mercados do Reino Unido, Europa e países anglófonos.',
    industrias: ['Processamento de Alimentos', 'Produtos de Padaria', 'Carnes e Laticínios', 'Bebidas', 'Congelados'],
    stats: [
      { value: '30K+', label: 'sites certificados BRC Food no mundo' },
      { value: '130+', label: 'países com empresas certificadas BRC' },
      { value: '£180B', label: 'em compras de varejistas que exigem BRC de seus fornecedores' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Plano de segurança alimentar (HACCP)',
        description:
          'Desenvolver e implementar um plano HACCP completo baseado nos princípios do Codex Alimentarius, com análise documentada de todos os perigos significativos.',
      },
      {
        clause: '§3',
        title: 'Sistema de gestão da segurança alimentar',
        description:
          'Manter um sistema documental atualizado que abranja políticas, manuais, procedimentos e registros do processo de fabricação conforme o BRC Issue 9.',
      },
      {
        clause: '§5',
        title: 'Controle de produtos',
        description:
          'Implementar controles de alérgenos, autenticidade de produtos, gestão de reclamações, rastreabilidade e procedimentos de recolhimento documentados e testados.',
      },
      {
        clause: '§6',
        title: 'Controle do processo',
        description:
          'Estabelecer controles documentados para todas as etapas do processo produtivo, incluindo parâmetros críticos, instruções de trabalho e registros de controle.',
      },
    ],
    comoGestiona: [
      {
        title: 'Documentação BRC Issue 9 estruturada',
        description:
          'Organize todos os documentos do sistema BRC por seção do padrão. Controle de versões, aprovações e distribuição digitalizada para planta e escritórios.',
      },
      {
        title: 'Programa de auditorias internas BRC',
        description:
          'Execute auditorias internas com checklists específicos para cada seção do BRC Issue 9. Os achados se convertem automaticamente em não conformidades com acompanhamento.',
      },
      {
        title: 'Gestão de reclamações de cliente',
        description:
          'Registre, classifique e analise tendências de reclamações. Gere os KPIs de reclamações que os auditores BRC revisam durante a certificação.',
      },
      {
        title: 'Controle de alérgenos e autenticidade',
        description:
          'Gerencie o programa de alérgenos, a declaração de autenticidade de ingredientes e os ensaios de verificação exigidos pelo BRC Issue 9.',
      },
    ],
    ctaTitle: 'BRC Food Issue 9 gerenciado sem o caos documental.',
    ctaSubtitle:
      'Chegue à sua auditoria BRC com toda a evidência organizada e sua equipe preparada para responder qualquer pergunta.',
  },

  'ifs-food': {
    fullName: 'International Featured Standards Food',
    categoria: 'Segurança Alimentar',
    tagline: 'O padrão preferido pelos varejistas alemães e franceses para garantir a qualidade alimentar.',
    description:
      'A IFS Food v8 é um padrão de auditoria reconhecido pelo GFSI desenvolvido para avaliar o sistema de gestão da qualidade e segurança alimentar de fabricantes de produtos de marca própria. É um requisito de entrada para os principais varejistas da Alemanha, França e demais países da Europa continental.',
    scope: 'Fabricantes de alimentos que produzem produtos de marca própria para varejistas europeus, especialmente nos mercados DACH e francófonos.',
    industrias: ['Produtos de Marca Própria', 'Salgadinhos e Biscoitos', 'Molhos e Condimentos', 'Laticínios', 'Produtos Congelados'],
    stats: [
      { value: '14K+', label: 'sites certificados IFS Food no mundo' },
      { value: '90+', label: 'países com presença IFS Food' },
      { value: '€800B', label: 'mercado europeu de produtos de marca própria' },
    ],
    requisitos: [
      {
        clause: '§2',
        title: 'Sistema de gestão da segurança e qualidade alimentar',
        description:
          'Implementar e manter um sistema de gestão integrado que abranja os requisitos de HACCP, gestão documental e gestão de riscos de qualidade e segurança alimentar.',
      },
      {
        clause: '§3',
        title: 'Gestão de recursos',
        description:
          'Garantir a competência, higiene pessoal e programas de treinamento do pessoal em contato com alimentos, com registros atualizados.',
      },
      {
        clause: '§4',
        title: 'Planejamento e processo produtivo',
        description:
          'Controlar todos os parâmetros do processo produtivo — matérias-primas, receitas, embalagem, rotulagem, condições do processo — com registros verificáveis.',
      },
      {
        clause: '§5',
        title: 'Medição, análise e melhoria',
        description:
          'Executar auditorias internas, gerenciar não conformidades, reclamações de clientes e análise de defeitos com tendências e ações de melhoria documentadas.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plano HACCP adaptado ao IFS v8',
        description:
          'Estruture a análise de perigos com os critérios específicos da IFS Food v8, incluindo medidas de controle validadas e o programa de monitoramento digitalizado.',
      },
      {
        title: 'Gestão de especificações de produto',
        description:
          'Centralize as especificações técnicas de todos os produtos, matérias-primas e materiais de embalagem. Controle versões e aprovações do cliente.',
      },
      {
        title: 'KPIs de qualidade e rastreamento de pontuação IFS',
        description:
          'Monitore os indicadores de qualidade do processo e estime a pontuação IFS esperada comparando suas práticas com os critérios do padrão.',
      },
      {
        title: 'Gestão de não conformidades e defeitos',
        description:
          'Registre defeitos por tipo, analise tendências, gerencie ações corretivas e gere o relatório de gestão da qualidade que os auditores IFS avaliam.',
      },
    ],
    ctaTitle: 'IFS Food v8 sem a pressão documental do dia anterior.',
    ctaSubtitle:
      'Com o Consultto, seu sistema IFS está sempre em estado de auditoria. Sem corridas de última hora.',
  },

  'sqf': {
    fullName: 'Safe Quality Food',
    categoria: 'Segurança Alimentar',
    tagline: 'O padrão GFSI preferido pelo mercado norte-americano para garantir segurança e qualidade em alimentos.',
    description:
      'O SQF Edition 9 é um programa de certificação de gestão da qualidade e segurança alimentar reconhecido pelo GFSI e administrado pela Food Marketing Institute (FMI) dos EUA. Cobre toda a cadeia de suprimentos alimentar com níveis de certificação específicos: SQF Fundamentos, Qualidade SQF e Segurança Alimentar SQF.',
    scope: 'Toda a cadeia de suprimentos alimentar na América do Norte: produção primária, fabricação, distribuição e varejo.',
    industrias: ['Alimentos Processados', 'Distribuição Alimentar', 'Frutas e Verduras Frescas', 'Frutos do Mar', 'Grãos e Cereais'],
    stats: [
      { value: '5K+', label: 'sites certificados SQF na América do Norte' },
      { value: '35+', label: 'anos de história do programa SQF' },
      { value: '3', label: 'níveis de certificação de acordo com a complexidade do negócio' },
    ],
    requisitos: [
      {
        clause: '§2.1',
        title: 'Comprometimento gerencial e revisão do sistema',
        description:
          'A alta gerência deve demonstrar comprometimento visível com a segurança alimentar, designar um SQF Practitioner qualificado e revisar o sistema periodicamente.',
      },
      {
        clause: '§2.4',
        title: 'Sistema de segurança alimentar (HACCP)',
        description:
          'Desenvolver um plano de segurança alimentar baseado em HACCP que identifique e controle os perigos significativos para a saúde do consumidor.',
      },
      {
        clause: '§2.6',
        title: 'Identificação do produto, rastreabilidade e recolhimento',
        description:
          'Manter um sistema de identificação e rastreabilidade de produto que permita executar um recolhimento completo do mercado em até 4 horas.',
      },
      {
        clause: '§11',
        title: 'Boas práticas de fabricação (cGMP)',
        description:
          'Implementar cGMPs para controle do ambiente de fabricação, higiene pessoal, controle de pragas, limpeza e manutenção das instalações.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plano de segurança alimentar SQF com fluxo HACCP',
        description:
          'Construa o plano de segurança alimentar com fluxo do processo, análise de perigos, PCCs e PPROs. Cumpre o formato exigido para a certificação SQF Edition 9.',
      },
      {
        title: 'Registros de cGMP e verificação diária',
        description:
          'Capture registros de verificação de cGMP, limpeza e desinfecção a partir de dispositivos móveis. O sistema detecta lacunas e alerta o SQF Practitioner.',
      },
      {
        title: 'Simulação de recolhimento do mercado',
        description:
          'Documente e execute exercícios de recolhimento do mercado, registre o tempo de resposta e gere evidências do cumprimento do requisito de 4 horas.',
      },
      {
        title: 'Gestão documental do Código SQF',
        description:
          'Organize todos os documentos do sistema SQF com o módulo aplicável à sua categoria de produto, controle de versões e distribuição digital.',
      },
    ],
    ctaTitle: 'SQF Edition 9 gerenciado com o rigor que o mercado americano exige.',
    ctaSubtitle:
      'Um sistema que prepara você para a auditoria SQF desde o primeiro dia, sem depender de consultores externos.',
  },

  'haccp': {
    fullName: 'Análise de Perigos e Pontos Críticos de Controle',
    categoria: 'Segurança Alimentar',
    tagline: 'O sistema científico de controle de perigos alimentares que está na base de toda certificação de segurança alimentar.',
    description:
      'O HACCP (Hazard Analysis and Critical Control Points) é o sistema preventivo de segurança alimentar reconhecido internacionalmente pelo Codex Alimentarius e exigido por regulamentações em todo o mundo. Os 7 princípios HACCP são a base de todas as certificações de segurança alimentar: FSSC 22000, BRC, IFS, SQF e ISO 22000.',
    scope: 'Toda empresa que processa, transforma, transporta ou serve alimentos ao consumidor final ou como ingrediente.',
    industrias: ['Alimentos e Bebidas', 'Restauração Coletiva', 'Processamento de Carnes', 'Laticínios', 'Catering e Serviço de Alimentos'],
    stats: [
      { value: '50+', label: 'anos de história do sistema HACCP desde a NASA' },
      { value: '7', label: 'princípios que estruturam o sistema completo' },
      { value: '100%', label: 'das normas GFSI requerem um HACCP documentado como base' },
    ],
    requisitos: [
      {
        clause: 'Princípio 1',
        title: 'Análise de perigos',
        description:
          'Identificar e avaliar todos os perigos biológicos, químicos e físicos que podem ocorrer em cada etapa do processo produtivo e determinar medidas de controle.',
      },
      {
        clause: 'Princípios 2–3',
        title: 'Determinação de PCC e limites críticos',
        description:
          'Identificar os Pontos de Controle Crítico (PCC) onde o controle é essencial para prevenir ou eliminar o perigo, e estabelecer limites críticos para cada PCC.',
      },
      {
        clause: 'Princípios 4–5',
        title: 'Monitoramento e ações corretivas',
        description:
          'Estabelecer procedimentos de monitoramento para cada PCC e definir as ações corretivas a serem tomadas quando o monitoramento indica que um PCC não está sob controle.',
      },
      {
        clause: 'Princípios 6–7',
        title: 'Verificação e documentação',
        description:
          'Estabelecer procedimentos de verificação para confirmar que o plano HACCP funciona eficazmente, e manter a documentação e os registros completos do sistema.',
      },
    ],
    comoGestiona: [
      {
        title: 'Plano HACCP digital com os 7 princípios',
        description:
          'Construa o plano HACCP completo com fluxo do processo, análise de perigos, determinação de PCC, limites críticos e ações corretivas em uma ferramenta guiada.',
      },
      {
        title: 'Registro de monitoramento de PCC',
        description:
          'Capture registros de monitoramento de PCC a partir de dispositivos móveis ou integrados a equipamentos, com alertas automáticos ao detectar um desvio de limite crítico.',
      },
      {
        title: 'Gestão de desvios e ações corretivas',
        description:
          'Registre e gerencie cada desvio detectado em um PCC com a disposição do produto afetado, a ação corretiva aplicada e a evidência de verificação.',
      },
      {
        title: 'Verificação e validação do plano',
        description:
          'Programe e registre as atividades de verificação (auditorias, análises de produto, revisão de registros) e a validação periódica do plano HACCP completo.',
      },
    ],
    ctaTitle: 'Seu plano HACCP, sempre atualizado e pronto para auditoria.',
    ctaSubtitle:
      'Pare de gerenciar o HACCP em planilhas. Com o Consultto, ele está vivo, monitorado e com evidências sempre disponíveis.',
  },

  'gmp-farmaceutica': {
    fullName: 'Boas Práticas de Fabricação Farmacêutica',
    categoria: 'Farmacêutica',
    tagline: 'O padrão regulatório que separa fabricantes farmacêuticos confiáveis dos que perdem licenças.',
    description:
      'As BPF Farmacêuticas (Boas Práticas de Fabricação) são os padrões de qualidade exigidos pelas autoridades regulatórias mundiais (FDA, EMA, ANVISA) para garantir que os medicamentos sejam produzidos e controlados de forma consistente, de acordo com os padrões de qualidade. Aplicam-se durante todo o ciclo de vida do produto.',
    scope: 'Fabricantes, acondicionadores e distribuidores de medicamentos, insumos farmacêuticos ativos (IFA) e produtos biológicos.',
    industrias: ['Farmacêutica', 'Biotecnologia', 'Ingredientes Farmacêuticos Ativos (IFA)', 'Laboratório de Controle de Qualidade', 'Contract Manufacturing'],
    stats: [
      { value: '3K+', label: 'plantas farmacêuticas inspecionadas pela FDA anualmente' },
      { value: '483', label: 'observações médias por planta em inspeções da FDA' },
      { value: '100%', label: 'dos medicamentos aprovados requerem BPF contínua' },
    ],
    requisitos: [
      {
        clause: '§211.68',
        title: 'Sistemas computadorizados e validação',
        description:
          'Todos os sistemas computadorizados utilizados em fabricação, controles de laboratório ou registros devem ser validados com evidências documentadas de adequação ao uso pretendido.',
      },
      {
        clause: '§211.100',
        title: 'Procedimentos escritos de fabricação',
        description:
          'Ter procedimentos escritos e aprovados para todas as operações de fabricação e controles de processo, com registros de seu cumprimento.',
      },
      {
        clause: '§211.192',
        title: 'Revisão de registros de produção e laboratório',
        description:
          'Revisar todos os registros de produção e controle de laboratório antes de liberar cada lote, incluindo investigação completa de desvios.',
      },
      {
        clause: '§211.198',
        title: 'Gestão de reclamações e recolhimentos do mercado',
        description:
          'Manter um sistema de recepção, classificação e investigação de reclamações com impacto na qualidade e segurança do medicamento.',
      },
    ],
    comoGestiona: [
      {
        title: 'Documentação e controle de registros de fabricação',
        description:
          'Organize e controle os documentos mestres de fabricação (BMR), os procedimentos de processo, os desvios e as investigações OOS/OOT com acesso por função e rastreabilidade de alterações.',
      },
      {
        title: 'Controle de alterações e gestão do ciclo de vida',
        description:
          'Gerencie alterações em processos, fórmulas, equipamentos e instalações com avaliação de impacto regulatório, aprovações multinível e notificações às autoridades.',
      },
      {
        title: 'Programa de qualificação e validação',
        description:
          'Administre o plano mestre de validação, os protocolos de IQ/OQ/PQ, a revalidação periódica e os pacotes de validação de sistemas computadorizados.',
      },
      {
        title: 'Revisão anual do produto (APR)',
        description:
          'Estruture e documente a revisão anual do produto consolidando reclamações, desvios, alterações e resultados de estabilidade em um dossiê organizado para a direção e para inspeções.',
      },
    ],
    ctaTitle: 'BPF Farmacêutica gerenciada com o rigor que as autoridades exigem.',
    ctaSubtitle:
      'Documentação, validações, lotes e não conformidades centralizados. Sua planta sempre em estado de inspeção.',
  },

  'as9100': {
    fullName: 'Sistema de Gestão da Qualidade para Aeroespacial, Espaço e Defesa',
    categoria: 'Aeroespacial e Defesa',
    tagline: 'A norma de qualidade da indústria aeroespacial mais exigente do mundo, agora sem o peso documental.',
    description:
      'A AS9100 Rev D é o padrão de gestão da qualidade desenvolvido pelo International Aerospace Quality Group (IAQG) para as indústrias aeroespacial, espacial e de defesa. Baseia-se na ISO 9001:2015 e acrescenta mais de 100 requisitos adicionais específicos do setor, incluindo gestão de riscos, controle de configuração e gestão da segurança do produto.',
    scope: 'Fabricantes de componentes, sistemas e serviços para as indústrias aeroespacial, espacial e de defesa, incluindo Tier 1, 2 e 3.',
    industrias: ['Aeroespacial', 'Defesa', 'Motores e Turbinas', 'Aviônica', 'MRO Aeroespacial'],
    stats: [
      { value: '22K+', label: 'organizações certificadas AS9100 no mundo' },
      { value: '$838B', label: 'valor do mercado aeroespacial global em 2023' },
      { value: '100%', label: 'dos integradores aeroespaciais exigem AS9100 em sua cadeia' },
    ],
    requisitos: [
      {
        clause: '§8.1.1',
        title: 'Planejamento e gestão de riscos operacionais',
        description:
          'Implementar um processo formal de gestão de riscos durante o planejamento e execução dos processos do produto, com critérios de aceitação definidos.',
      },
      {
        clause: '§8.4',
        title: 'Controle da cadeia de suprimentos aeroespacial',
        description:
          'Aplicar os requisitos da AS9100 aos provedores externos, incluindo a comunicação dos requisitos do cliente final e o gerenciamento do fluxo abaixo na cadeia.',
      },
      {
        clause: '§8.5.5',
        title: 'Preservação e controle de configuração',
        description:
          'Manter a configuração do produto ao longo da produção e do serviço, controlando desvios, permissões de desvio e disposições de não conformidades.',
      },
      {
        clause: '§8.7.1',
        title: 'Controle de produto não conforme',
        description:
          'Gerenciar rigorosamente os produtos não conformes com segregação física, identificação, avaliação de uso no estado atual (Use As Is) e aprovação do Material Review Board.',
      },
    ],
    comoGestiona: [
      {
        title: 'Gestão de riscos do programa aeroespacial',
        description:
          'Registre e gerencie os riscos por programa ou produto com probabilidade, severidade, plano de mitigação e acompanhamento da eficácia. Integrado ao controle de alterações.',
      },
      {
        title: 'Controle de não conformidades e Material Review Board',
        description:
          'Gerencie o processo de disposição de não conformidades com participação do MRB, classificação de Use As Is / Repair / Scrap e notificação ao cliente quando aplicável.',
      },
      {
        title: 'Gestão de primeiros artigos (FAI)',
        description:
          'Administre os relatórios de inspeção de primeiro artigo (AS9102) por número de peça, com evidências de características dimensionais, funcionais e de processo.',
      },
      {
        title: 'Controle de configuração e registro de desvios',
        description:
          'Gerencie as permissões de desvio e os waivers do cliente, garantindo rastreabilidade completa entre a configuração aprovada e o produto entregue.',
      },
    ],
    ctaTitle: 'AS9100 Rev D sem a complexidade que freia os fornecedores aeroespaciais.',
    ctaSubtitle:
      'Atenda aos requisitos mais exigentes do setor aeroespacial com um sistema digital que trabalha com você, não contra você.',
  },

  'ctpat': {
    fullName: 'Customs Trade Partnership Against Terrorism',
    categoria: 'Segurança da Cadeia de Suprimentos',
    tagline: 'O programa de segurança aduaneira dos EUA que protege seu acesso ao mercado norte-americano.',
    description:
      'O CTPAT é um programa voluntário da Alfândega e Proteção de Fronteiras dos EUA (CBP) que estabelece critérios mínimos de segurança para toda a cadeia de suprimentos internacional. As empresas certificadas obtêm benefícios como menor inspeção na fronteira, tramitação prioritária e acesso à faixa FAST.',
    scope: 'Importadores, exportadores, transportadores, operadores logísticos e fabricantes que operam na cadeia de suprimentos México–EUA ou Canadá–EUA.',
    industrias: ['Logística e Transporte', 'Manufatura', 'Comércio Internacional', 'Maquiladora', 'Distribuição'],
    stats: [
      { value: '11K+', label: 'empresas parceiras CTPAT ativas na fronteira' },
      { value: '50%', label: 'menos inspeções físicas na fronteira para parceiros certificados' },
      { value: '$800B+', label: 'em comércio bilateral México–EUA protegido pelo programa' },
    ],
    requisitos: [
      {
        clause: 'Critério 1',
        title: 'Segurança física das instalações',
        description:
          'As instalações devem ter perímetros seguros, controle de acesso, iluminação adequada e sistemas de vigilância que previnam o acesso não autorizado e a introdução de contrabando.',
      },
      {
        clause: 'Critério 2',
        title: 'Controle de acesso e gestão de pessoal',
        description:
          'Implementar processos de verificação de antecedentes para funcionários, visitantes e prestadores de serviços. Inclui controles de identificação e procedimentos para funcionários que encerram seu vínculo empregatício.',
      },
      {
        clause: 'Critério 3',
        title: 'Segurança do transporte e lacres',
        description:
          'Controlar a integridade dos contêineres e reboques por meio de lacres de alta segurança ISO 17712, registros de inspeção de unidades e procedimentos de verificação de 7 pontos.',
      },
      {
        clause: 'Critério 4',
        title: 'Segurança da informação e parceiros comerciais',
        description:
          'Proteger os sistemas de TI que processam informações aduaneiras e avaliar periodicamente a segurança dos parceiros comerciais na cadeia de suprimentos internacional.',
      },
    ],
    comoGestiona: [
      {
        title: 'Planejamento do controle de lacres de segurança',
        description:
          'Planeje e estruture o programa de gestão de lacres ISO 17712: procedimentos de aplicação e remoção, responsáveis por unidade e rota, e os registros necessários para demonstrar controle durante uma validação da CBP.',
      },
      {
        title: 'Padronização de checklists de inspeção de veículos',
        description:
          'Planeje e padronize os checklists digitais de inspeção de unidades (cabine, chassi, compartimentos, etc.) com os campos necessários para capturar evidências fotográficas e assinatura do operador.',
      },
      {
        title: 'Gestão de incidentes de segurança na fronteira',
        description:
          'Registre incidentes de segurança, coordene a investigação, documente as ações corretivas e gere os relatórios que a CBP pode solicitar durante uma validação.',
      },
      {
        title: 'Avaliação de parceiros comerciais e fornecedores',
        description:
          'Gerencie o programa de avaliação de parceiros CTPAT, registre questionários de segurança e visitas de verificação, e mantenha o status de conformidade atualizado por fornecedor.',
      },
    ],
    ctaTitle: 'Mantenha sua certificação CTPAT e seu acesso ao mercado norte-americano.',
    ctaSubtitle:
      'Gerencie os critérios de segurança aduaneira sem papelada nem processos manuais que coloquem você em risco.',
  },
}
