import Link from 'next/link'
import { PaisData } from './data'
import { PaisSVG } from './PaisSVG'
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

        {/* Hero */}
        <section className="relative bg-[#faf8f6] overflow-hidden pt-28 pb-24 px-6 min-h-[600px] flex items-center">

          {/* Dot grid background */}
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, #763d50 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />

          {/* Accent line top */}
          <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#763d50]/40 to-transparent" />

          {/* Country silhouette — right side */}
          <div className="absolute right-4 md:right-16 top-1/2 -translate-y-1/2 pointer-events-none select-none">
            <PaisSVG
              slug={pais.slug}
              className="text-[#763d50] opacity-[0.16] h-[520px] w-auto max-w-[480px]"
            />
          </div>

          {/* Glowing orb behind silhouette */}
          <div className="absolute right-[8%] top-1/2 -translate-y-1/2 w-[480px] h-[480px] rounded-full bg-[#763d50]/8 blur-[60px] pointer-events-none" />

          {/* Content */}
          <div className="relative max-w-5xl mx-auto w-full">
            <div className="max-w-xl">

              {/* Breadcrumb */}
              <div className="flex items-center gap-2 mb-8">
                <span className="text-[#3a3a3a]/35 text-xs">Consultto</span>
                <span className="text-[#3a3a3a]/25 text-xs">›</span>
                <span className="text-[#763d50] text-xs font-semibold">{pais.nombre}</span>
              </div>

              {/* Organismo badge */}
              <div className="inline-flex items-center gap-2 bg-white border border-[#e8e0e3] rounded-full px-4 py-1.5 mb-6 shadow-sm">
                <div className="w-1.5 h-1.5 rounded-full bg-[#763d50]" />
                <span className="text-[#763d50] text-xs font-semibold">{pais.organismoLocal}</span>
                <span className="text-[#3a3a3a]/40 text-xs">— {pais.organismoDesc}</span>
              </div>

              <h1 className="text-[#1f2020] text-4xl md:text-5xl font-light leading-[1.15] mb-5">
                {pais.heroTitle}
              </h1>
              <p className="text-[#3a3a3a]/60 text-lg leading-relaxed mb-10">
                {pais.heroSubtitle}
              </p>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/demo"
                  className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm whitespace-nowrap text-center"
                >
                  Agendar demo gratuita
                </Link>
                <Link
                  href="/consultor"
                  className="border border-[#d9d9d9] hover:border-[#763d50]/40 text-[#3a3a3a] hover:text-[#763d50] bg-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap text-center"
                >
                  Hablar con un consultor
                </Link>
              </div>

            </div>
          </div>
        </section>

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
                    <div>
                      <p className="text-[#763d50] text-xs font-bold uppercase tracking-wide mb-1">{norma.codigo}</p>
                      <p className="text-[#1f2020] font-semibold text-sm mb-2">{norma.nombre}</p>
                      <p className="text-[#3a3a3a]/60 text-sm leading-relaxed">{norma.porQue}</p>
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
              {pais.sectores.map((sector) => (
                <span
                  key={sector}
                  className="px-4 py-2 bg-white border border-[#e8e8e8] rounded-full text-sm text-[#3a3a3a]/70"
                >
                  {sector}
                </span>
              ))}
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
