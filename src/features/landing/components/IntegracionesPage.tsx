import Link from 'next/link'

const CATEGORIAS = [
  {
    titulo: 'ERP y gestión operativa',
    descripcion: 'Sincroniza datos maestros, órdenes y procesos con tu sistema central.',
    tools: ['SAP S/4HANA', 'SAP Business One', 'Oracle NetSuite', 'Microsoft Dynamics 365', 'Epicor', 'Infor', 'CONTPAQi', 'Odoo'],
  },
  {
    titulo: 'Gestión de proveedores y cadena de suministro',
    descripcion: 'Reporta cumplimiento directo a las plataformas que usan tus clientes corporativos.',
    tools: ['SAP Ariba', 'TraceGains', 'FoodLogiQ', 'JAGGAER'],
  },
  {
    titulo: 'Calidad y compliance',
    descripcion: 'Integra Consultto con plataformas de calidad enterprise si ya tienes una en operación.',
    tools: ['ETQ Reliance', 'MasterControl', 'Intelex', 'Veeva Vault Quality'],
  },
  {
    titulo: 'Contabilidad y facturación',
    descripcion: 'Conecta tu información financiera y de proveedores.',
    tools: ['CONTPAQi Comercial', 'Aspel COI/SAE', 'QuickBooks', 'Alegra'],
  },
  {
    titulo: 'RRHH y nómina',
    descripcion: 'Vincula competencias, capacitación y expedientes del personal.',
    tools: ['Workday', 'SAP SuccessFactors', 'Worky', 'Runa', 'BambooHR'],
  },
  {
    titulo: 'Business Intelligence y reporting',
    descripcion: 'Lleva los datos de tu SGC a dashboards ejecutivos.',
    tools: ['Power BI', 'Tableau', 'Looker'],
  },
  {
    titulo: 'Comunicación y productividad',
    descripcion: 'Recibe notificaciones de NCs, auditorías y tareas donde ya trabajas.',
    tools: ['Microsoft 365', 'Google Workspace', 'Slack', 'ServiceNow'],
  },
  {
    titulo: 'Metrología y SPC',
    descripcion: 'Para operaciones de manufactura que requieren control estadístico.',
    tools: ['Minitab', 'InfinityQS', 'GainSeeker'],
  },
  {
    titulo: 'Automatización y middleware',
    descripcion: 'Conecta Consultto con miles de aplicaciones sin escribir código.',
    tools: ['Zapier', 'Make', 'MuleSoft', 'Dell Boomi', 'n8n'],
  },
]

function ToolChip({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center px-3 py-1.5 rounded-lg border border-[#e8e8e8] bg-white text-[#3a3a3a]/60 text-xs font-medium hover:border-[#763d50]/30 hover:text-[#1f2020] transition-all duration-200 cursor-default">
      {name}
    </span>
  )
}

export function IntegracionesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="border-b border-[#f0f0f0] pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-5">
            Integraciones
          </p>
          <h1 className="text-[#1f2020] text-4xl md:text-5xl font-light leading-[1.15] mb-6 max-w-3xl mx-auto">
            Conecta Consultto con las herramientas que ya usas
          </h1>
          <p className="text-[#3a3a3a]/55 text-lg leading-relaxed max-w-2xl mx-auto mb-10">
            REST API abierto y compatible con cualquier sistema. Desde tu ERP hasta tu plataforma de gestión de proveedores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-7 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Agendar demo
            </Link>
            <Link
              href="/consultor"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-7 py-3 rounded-full font-semibold transition-all text-sm"
            >
              Hablar con nosotros
            </Link>
          </div>
        </div>
      </section>

      {/* Stat banner */}
      <section className="border-b border-[#f0f0f0] bg-[#fafafa] py-8 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <p className="text-[#1f2020] text-3xl font-light mb-1">+40</p>
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Plataformas compatibles</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e8e8e8]" />
          <div>
            <p className="text-[#1f2020] text-3xl font-light mb-1">+5,000</p>
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Apps vía Zapier y Make</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e8e8e8]" />
          <div>
            <p className="text-[#1f2020] text-3xl font-light mb-1">REST API</p>
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Completamente documentado</p>
          </div>
        </div>
      </section>

      {/* Categorías */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Categorías</p>
            <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-snug">
              Arquitectura abierta.<br />Se conecta con tu operación.
            </h2>
          </div>

          <div className="space-y-10">
            {CATEGORIAS.map((cat) => (
              <div key={cat.titulo} className="bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-8 hover:border-[#e2e2e2] transition-all duration-200">
                <div className="flex flex-col md:flex-row md:items-start md:gap-12">
                  <div className="md:w-56 shrink-0 mb-5 md:mb-0">
                    <h3 className="text-[#1f2020] text-sm font-semibold leading-snug mb-2">{cat.titulo}</h3>
                    <p className="text-[#3a3a3a]/50 text-xs leading-relaxed">{cat.descripcion}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.tools.map((tool) => (
                      <ToolChip key={tool} name={tool} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ¿No ves tu sistema? */}
      <section className="py-16 px-6 border-t border-[#f0f0f0] bg-[#fafafa]">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">API abierto</p>
          <h2 className="text-[#1f2020] text-2xl md:text-3xl font-light leading-snug mb-4">
            ¿No ves tu sistema?
          </h2>
          <p className="text-[#3a3a3a]/55 text-base leading-relaxed mb-8 max-w-xl mx-auto">
            Consultto tiene un REST API completamente documentado. Si tu sistema puede hacer llamadas HTTP, se puede conectar.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-7 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Contáctanos
            </Link>
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Cómo funciona</p>
            <h2 className="text-[#1f2020] text-3xl font-light">Tres pasos para integrarte</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                num: '01',
                titulo: 'Consulta el API',
                descripcion: 'Documentación completa con endpoints, autenticación y ejemplos listos para usar.',
              },
              {
                num: '02',
                titulo: 'Conecta tu sistema',
                descripcion: 'Directo vía REST API o a través de plataformas como Zapier o MuleSoft, sin código adicional.',
              },
              {
                num: '03',
                titulo: 'Opera integrado',
                descripcion: 'Datos sincronizados entre Consultto y tu operación en tiempo real.',
              },
            ].map((paso) => (
              <div key={paso.num} className="flex flex-col">
                <span className="text-[#763d50]/25 text-5xl font-light leading-none mb-5">{paso.num}</span>
                <h3 className="text-[#1f2020] text-base font-semibold mb-3">{paso.titulo}</h3>
                <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">{paso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}
