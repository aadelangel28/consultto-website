import Link from 'next/link'
import { PaisData } from './data'
import { PaisHero } from './PaisHero'
import { CTASection } from '@/features/landing/components/CTASection'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'
import { Navbar } from '@/features/landing/components/Navbar'
import { Footer } from '@/features/landing/components/Footer'

interface Props {
  pais: PaisData
}

export function PaisLandingPage({ pais }: Props) {
  return (
    <LanguageProvider>
      <Navbar />
      <main>

        <PaisHero pais={pais} />

        {/* Stats */}
        <section className="bg-white border-b border-[#f0f0f0] py-12 px-6">
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            {pais.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-[#763d50] text-3xl font-light mb-1">{stat.value}</p>
                <p className="text-[#3a3a3a]/50 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contexto local */}
        <section className="bg-[#faf9f8] py-20 px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
              Contexto normativo en {pais.nombre}
            </p>
            <h2 className="text-[#1f2020] text-2xl font-light leading-snug mb-6">
              ¿Por qué certificarse en {pais.nombre}?
            </h2>
            <p className="text-[#3a3a3a]/70 text-[17px] leading-[1.85] mb-8">
              {pais.contexto}
            </p>
            <div className="inline-flex items-center gap-3 bg-white border border-[#e8e8e8] rounded-xl px-5 py-3.5">
              <div className="w-8 h-8 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0">
                <svg className="w-4 h-4 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-[#1f2020] text-sm font-semibold">{pais.organismoLocal}</p>
                <p className="text-[#3a3a3a]/50 text-xs">{pais.organismoDesc}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Normas destacadas */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
              Normas más demandadas
            </p>
            <h2 className="text-[#1f2020] text-2xl font-light leading-snug mb-10">
              Las certificaciones más solicitadas en {pais.nombre}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {pais.normasDestacadas.map((norma) => (
                <Link
                  key={norma.codigo}
                  href={norma.href}
                  className="group border border-[#e8e8e8] hover:border-[#763d50]/30 rounded-xl p-6 transition-all hover:shadow-sm"
                >
                  <div className="flex items-start gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-[#763d50]/8 flex items-center justify-center">
                      <svg className="w-4 h-4 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div className="flex-1">
                      <p className="text-[#763d50] text-xs font-bold uppercase tracking-wide mb-1">{norma.codigo}</p>
                      <p className="text-[#1f2020] font-semibold text-sm mb-2">{norma.nombre}</p>
                      <p className="text-[#3a3a3a]/60 text-sm leading-relaxed mb-3">{norma.porQue}</p>
                      <span className="text-[#763d50] text-xs font-semibold group-hover:underline inline-flex items-center gap-1">
                        Aprende más
                        <svg className="w-3 h-3 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Sectores */}
        <section className="bg-[#faf9f8] py-16 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
              Industrias
            </p>
            <h2 className="text-[#1f2020] text-2xl font-light leading-snug mb-8">
              Sectores que más se certifican en {pais.nombre}
            </h2>
            <div className="flex flex-wrap gap-3">
              {pais.sectores.map((sector) =>
                sector.href ? (
                  <Link
                    key={sector.nombre}
                    href={sector.href}
                    className="group px-4 py-2 bg-white border border-[#e8e8e8] hover:border-[#763d50]/40 rounded-full text-sm text-[#3a3a3a]/70 hover:text-[#763d50] transition-all inline-flex items-center gap-1.5"
                  >
                    {sector.nombre}
                    <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8h10M9 4l4 4-4 4" />
                    </svg>
                  </Link>
                ) : (
                  <span
                    key={sector.nombre}
                    className="px-4 py-2 bg-white border border-[#e8e8e8] rounded-full text-sm text-[#3a3a3a]/70"
                  >
                    {sector.nombre}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section className="bg-white py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
              Cómo funciona
            </p>
            <h2 className="text-[#1f2020] text-2xl font-light leading-snug mb-10">
              De cero a certificado en {pais.nombre}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  num: '01',
                  title: 'Implementa con IA',
                  desc: 'Consultto genera tu sistema de gestión completo — procedimientos, registros y documentación — adaptado a tu empresa y a la norma que necesitas.',
                },
                {
                  num: '02',
                  title: 'Prepara tu auditoría',
                  desc: 'El agente IA de Consultto simula preguntas de auditoría, identifica brechas y te ayuda a cerrarlas antes de que llegue el auditor.',
                },
                {
                  num: '03',
                  title: 'Mantén tu certificación',
                  desc: 'Una vez certificado, Consultto te ayuda a mantener el sistema activo, gestionar no conformidades y preparar las auditorías de seguimiento.',
                },
              ].map((step) => (
                <div key={step.num}>
                  <p className="text-[#763d50]/40 text-4xl font-light mb-4">{step.num}</p>
                  <p className="text-[#1f2020] font-semibold mb-2">{step.title}</p>
                  <p className="text-[#3a3a3a]/60 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />

      </main>
      <Footer />
    </LanguageProvider>
  )
}
