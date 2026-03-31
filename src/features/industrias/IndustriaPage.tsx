'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, type ReactNode } from 'react'
import type { IndustriaData } from './data'

const INDUSTRIA_IMAGES: Record<string, string> = {
  'manufactura':                  'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1600&q=80',
  'automotriz':                   'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=1600&q=80',
  'alimentos-y-bebidas':          'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&q=80',
  'construccion':                 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
  'tecnologia-y-software':        'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80',
  'salud-y-dispositivos-medicos': 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1600&q=80',
  'logistica-y-transporte':       'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1600&q=80',
  'servicios-profesionales':      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80',
  'educacion':                    'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1600&q=80',
  'farmaceutica':                 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1600&q=80',
}

// ─── Scroll reveal ────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); observer.disconnect() } },
      { threshold: 0.12 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal-base ${className}`}
      style={{ opacity: 0, transform: 'translateY(36px)', transition: `opacity 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.8s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }}
    >
      {children}
      <style>{`.revealed { opacity: 1 !important; transform: none !important; }`}</style>
    </div>
  )
}

// ─── Icons ────────────────────────────────────────────────────────────────────

function IconWarning() {
  return (
    <svg className="w-5 h-5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008z" />
    </svg>
  )
}

function IconCheck() {
  return (
    <svg className="w-5 h-5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z" />
    </svg>
  )
}

// ─── Sections ─────────────────────────────────────────────────────────────────

function HeroSection({ industria }: { industria: IndustriaData }) {
  return (
    <section className="relative pt-32 pb-28 overflow-hidden" style={{ background: '#fafafa' }}>
      <style>{`
        @keyframes hero-in {
          from { opacity: 0; transform: translateY(22px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hi { animation: hero-in 0.75s cubic-bezier(0.16,1,0.3,1) both; }
      `}</style>

      {/* Soft wine radial glow from the top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 90% 55% at 50% -5%, rgba(118,61,80,0.09) 0%, transparent 68%)' }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span
          className="hi inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#763d50] mb-6"
          style={{ animationDelay: '0ms' }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#763d50] inline-block" />
          {industria.name}
        </span>

        <h1
          className="hi text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f2020] leading-tight mb-6 mt-3 block"
          style={{ animationDelay: '110ms' }}
        >
          {industria.heroTitle}
        </h1>

        <p
          className="hi text-[#3a3a3a]/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed block"
          style={{ animationDelay: '210ms' }}
        >
          {industria.heroSubtitle}
        </p>

        <div
          className="hi flex flex-col sm:flex-row gap-3 justify-center"
          style={{ animationDelay: '300ms' }}
        >
          <Link
            href="/signup"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
          >
            Agendar demo gratuita
          </Link>
          <Link
            href="/contacto"
            className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm"
          >
            Hablar con un consultor
          </Link>
        </div>
      </div>
    </section>
  )
}

function RetosSection({ industria }: { industria: IndustriaData }) {
  const image = INDUSTRIA_IMAGES[industria.slug]

  return (
    <section className="py-24 border-t border-[#efefef] relative overflow-hidden" style={{ background: '#f8f8f8' }}>
      {/* Background image with overlay */}
      {image && (
        <>
          <Image
            src={image}
            alt={industria.name}
            fill
            className="object-cover"
            style={{ opacity: 0.07 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/90 to-[#f8f8f8]/60 pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Los retos del sector</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-16 max-w-2xl">
            Lo que frena a las empresas de {industria.name.toLowerCase()}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {industria.retos.map((reto, i) => (
            <Reveal key={reto.title} delay={i * 80}>
              <div className="bg-white rounded-2xl p-6 border border-[#ebebeb]">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(118,61,80,0.08)' }}>
                    <IconWarning />
                  </div>
                  <div>
                    <h3 className="text-[#1f2020] font-semibold text-base mb-2">{reto.title}</h3>
                    <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">{reto.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function SolucionesSection({ industria }: { industria: IndustriaData }) {
  return (
    <section className="py-24 bg-white">
      <style>{`
        /* Separator line draws left → right */
        .sol-row .sol-sep {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1);
        }
        .sol-row.revealed .sol-sep { transform: scaleX(1); }

        /* Number slides up */
        .sol-row .sol-num {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.5s ease 0.15s, transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .sol-row.revealed .sol-num { opacity: 1; transform: translateY(0); }

        /* Title slides up, slightly delayed */
        .sol-row .sol-title {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.55s ease 0.25s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.25s;
        }
        .sol-row.revealed .sol-title { opacity: 1; transform: translateY(0); }

        /* Description slides up, most delayed */
        .sol-row .sol-desc {
          opacity: 0;
          transform: translateY(14px);
          transition: opacity 0.6s ease 0.38s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.38s;
        }
        .sol-row.revealed .sol-desc { opacity: 1; transform: translateY(0); }

        /* Hover: number brightens, dot pulses */
        .sol-row:hover .sol-dot {
          transform: scale(1.4);
          background: #763d50 !important;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Cómo Consultto ayuda</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-14 max-w-2xl">
            Todo lo que necesitas para gestionar {industria.name.toLowerCase()}, en un solo sistema
          </h2>
        </Reveal>

        <div>
          {industria.soluciones.map((sol, i) => (
            <SolRow key={sol.title} sol={sol} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function SolRow({ sol, index }: { sol: { title: string; description: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect() } },
      { threshold: 0.25 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="sol-row group">
      {/* Animated separator */}
      <div className="sol-sep h-px bg-[#e8e8e8]" />

      <div className="grid grid-cols-12 gap-6 py-8 items-start">
        {/* Number */}
        <div className="col-span-1 pt-0.5">
          <span className="sol-num text-xs font-bold tabular-nums text-[#3a3a3a]/25 group-hover:text-[#763d50] transition-colors duration-300">
            {String(index + 1).padStart(2, '0')}
          </span>
        </div>

        {/* Dot + Title */}
        <div className="col-span-12 sm:col-span-5">
          <div className="sol-title flex items-start gap-3">
            <span
              className="sol-dot w-1.5 h-1.5 rounded-full mt-2 shrink-0 transition-all duration-300"
              style={{ background: 'rgba(118,61,80,0.3)' }}
            />
            <h3 className="text-[#1f2020] font-semibold text-lg leading-snug">{sol.title}</h3>
          </div>
        </div>

        {/* Description */}
        <div className="col-span-12 sm:col-span-6 sm:pl-4">
          <p className="sol-desc text-[#3a3a3a]/55 text-sm leading-relaxed">{sol.description}</p>
        </div>
      </div>

      {/* Last row gets bottom line */}
      {index === 3 && <div className="sol-sep h-px bg-[#e8e8e8]" style={{ transform: 'scaleX(1)' }} />}
    </div>
  )
}

const NORM_META: Record<string, { description: string; scope: string }> = {
  'ISO 9001:2015':        { description: 'Gestión de la calidad',              scope: 'Requisitos del sistema' },
  'ISO 14001:2015':       { description: 'Gestión ambiental',                  scope: 'Impacto y cumplimiento' },
  'ISO 45001:2018':       { description: 'Seguridad y salud en el trabajo',    scope: 'Riesgos laborales' },
  'IATF 16949:2016':      { description: 'Calidad automotriz',                 scope: 'Cadena de suministro OEM' },
  'ISO 50001:2018':       { description: 'Gestión de energía',                 scope: 'Eficiencia energética' },
  'FSSC 22000 v6':        { description: 'Inocuidad alimentaria',              scope: 'Cadena alimentaria global' },
  'BRC Food Issue 9':     { description: 'Seguridad alimentaria BRC',          scope: 'Proveedores retail' },
  'IFS Food v8':          { description: 'Estándar IFS Food',                  scope: 'Industria alimentaria EU' },
  'SQF Edition 9':        { description: 'Calidad y seguridad SQF',            scope: 'Mercado norteamericano' },
  'ISO 22000:2018':       { description: 'Sistemas de inocuidad',              scope: 'Gestión de peligros' },
  'HACCP':                { description: 'Análisis de peligros y PCC',         scope: 'Control de puntos críticos' },
  'ISO 27001:2022':       { description: 'Seguridad de la información',        scope: 'Activos de información' },
  'ISO 20000-1:2018':     { description: 'Gestión de servicios TI',            scope: 'Provisión de servicios' },
  'SOC 2':                { description: 'Controles de seguridad y privacidad', scope: 'Servicios en la nube' },
  'ISO 13485:2016':       { description: 'Dispositivos médicos',               scope: 'Diseño y fabricación' },
  'ISO 14971:2019':       { description: 'Gestión de riesgos médicos',         scope: 'Análisis de riesgos' },
  'ISO 62304':            { description: 'Software para dispositivos médicos', scope: 'Ciclo de vida del software' },
  'FDA 21 CFR Part 820':  { description: 'Regulación de calidad FDA',          scope: 'Mercado estadounidense' },
  'FDA 21 CFR Part 211':  { description: 'Buenas prácticas farmacéuticas',     scope: 'Fabricación y control' },
  'ISO 19650':            { description: 'Gestión de información BIM',         scope: 'Activos construidos' },
  'CTPAT':                { description: 'Comercio exterior seguro',           scope: 'Frontera EE.UU.–México' },
  'ISO 21001:2018':       { description: 'Gestión educativa',                  scope: 'Organizaciones educativas' },
  'GMP Farmacéutica':     { description: 'Buenas prácticas de manufactura',    scope: 'Planta farmacéutica' },
  'ICH Q10':              { description: 'Sistema de calidad farmacéutico',    scope: 'Ciclo de vida del producto' },
  'ICH Q9':               { description: 'Gestión de riesgos de calidad',      scope: 'Toma de decisiones' },
  'NOM-059-SSA1':         { description: 'Regulación sanitaria mexicana',      scope: 'Autoridad COFEPRIS' },
  'AIAG FMEA':            { description: 'Análisis de modo y efecto de falla', scope: 'Prevención de defectos' },
}

function NormasSection({ industria }: { industria: IndustriaData }) {
  return (
    <section className="py-24 border-t border-[#efefef]" style={{ background: '#f8f8f8' }}>
      <style>{`
        .norm-card { transition: border-color 0.25s ease, background 0.25s ease; }
        .norm-card:hover { border-color: rgba(118,61,80,0.25) !important; background: white !important; }
        .norm-card .norm-bar {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s;
        }
        .norm-card.revealed .norm-bar { transform: scaleX(1); }
        .norm-card .norm-body {
          opacity: 0;
          transform: translateY(10px);
          transition: opacity 0.55s ease 0.25s, transform 0.55s cubic-bezier(0.16,1,0.3,1) 0.25s;
        }
        .norm-card.revealed .norm-body { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Normas aplicables</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-14 max-w-2xl">
            Certificaciones que gestionamos para {industria.name.toLowerCase()}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industria.normas.map((norma, i) => {
            const meta = NORM_META[norma] ?? { description: 'Norma internacional', scope: 'Certificación' }
            return <NormaCard key={norma} norma={norma} meta={meta} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}

function NormaCard({ norma, meta, index }: {
  norma: string
  meta: { description: string; scope: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { el.classList.add('revealed'); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className="norm-card relative bg-white rounded-2xl p-6 border border-[#ebebeb] overflow-hidden"
      style={{ transitionDelay: `${index * 40}ms` }}
    >
      {/* Animated top accent bar */}
      <div className="norm-bar absolute top-0 left-0 right-0 h-[2px]" style={{ background: '#763d50' }} />

      <div className="norm-body">
        {/* Index */}
        <span className="text-[10px] font-bold tabular-nums text-[#3a3a3a]/25 mb-4 block">
          {String(index + 1).padStart(2, '0')}
        </span>

        {/* Norm code */}
        <p className="text-[#1f2020] font-bold text-base leading-tight mb-1">{norma}</p>

        {/* Description */}
        <p className="text-[#763d50] text-xs font-semibold mb-3">{meta.description}</p>

        {/* Scope */}
        <div className="flex items-center gap-1.5 mt-auto pt-3 border-t border-[#f0f0f0]">
          <span className="w-1 h-1 rounded-full bg-[#3a3a3a]/20 shrink-0" />
          <span className="text-[#3a3a3a]/40 text-xs">{meta.scope}</span>
        </div>
      </div>
    </div>
  )
}

function AgenteIASection({ industria }: { industria: IndustriaData }) {
  const capabilities = [
    'Analiza no conformidades y sugiere causas raíz en segundos',
    'Redacta acciones correctivas basadas en el historial de tu operación',
    'Detecta patrones de riesgo antes de que llegue la auditoría',
    'Resume hallazgos y genera reportes ejecutivos automáticamente',
  ]

  return (
    <section className="py-24" style={{ background: '#1f2020' }}>
      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0; }
        }
        .cursor-blink { animation: blink 1s step-end infinite; }

        @keyframes msg-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .msg-1 { animation: msg-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.4s both; }
        .msg-2 { animation: msg-in 0.5s cubic-bezier(0.16,1,0.3,1) 0.9s both; }
        .msg-3 { animation: msg-in 0.5s cubic-bezier(0.16,1,0.3,1) 1.5s both; }

        @keyframes dot-pulse {
          0%, 80%, 100% { transform: scale(0.6); opacity: 0.3; }
          40%            { transform: scale(1);   opacity: 1; }
        }
        .dot-1 { animation: dot-pulse 1.2s ease-in-out 0s infinite; }
        .dot-2 { animation: dot-pulse 1.2s ease-in-out 0.2s infinite; }
        .dot-3 { animation: dot-pulse 1.2s ease-in-out 0.4s infinite; }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* ── Left: copy ── */}
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-5" style={{ color: '#c47a8f' }}>
                <span className="w-1.5 h-1.5 rounded-full inline-block" style={{ background: '#c47a8f' }} />
                Agente IA
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-5">
                Un agente que entiende {industria.name.toLowerCase()} y trabaja contigo 24/7
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-10">
                No es un chatbot genérico. El agente IA de Consultto conoce tus procesos, tu historial de no conformidades y los requisitos de tu industria para darte respuestas concretas, no genéricas.
              </p>
            </Reveal>

            <div className="space-y-3">
              {capabilities.map((cap, i) => (
                <Reveal key={cap} delay={i * 70}>
                  <div className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(118,61,80,0.4)' }}>
                      <svg className="w-3 h-3" style={{ color: '#c47a8f' }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-white/60 text-sm leading-relaxed">{cap}</span>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={350}>
              <Link
                href="/agente-ia"
                className="inline-flex items-center gap-2 mt-10 text-sm font-semibold transition-all"
                style={{ color: '#c47a8f' }}
              >
                Conoce el agente IA
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </Reveal>
          </div>

          {/* ── Right: AI chat mockup ── */}
          <Reveal delay={150}>
            <div className="rounded-2xl overflow-hidden border" style={{ background: '#161616', borderColor: 'rgba(255,255,255,0.08)' }}>
              {/* Window bar */}
              <div className="flex items-center gap-2 px-4 py-3 border-b" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <div className="w-2.5 h-2.5 rounded-full" style={{ background: 'rgba(255,255,255,0.1)' }} />
                <span className="text-xs ml-2" style={{ color: 'rgba(255,255,255,0.2)' }}>
                  Agente Consultto · {industria.name}
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-xs" style={{ color: '#4ade80' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  En línea
                </span>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-5 min-h-[300px]">
                {/* User message */}
                <div className="msg-1 flex justify-end">
                  <div className="text-white text-xs rounded-2xl rounded-br-sm px-4 py-2.5 max-w-[80%]" style={{ background: 'rgba(118,61,80,0.7)' }}>
                    {industria.agentChat.userMessage}
                  </div>
                </div>

                {/* AI response */}
                <div className="msg-2 flex items-start gap-2.5">
                  <div className="w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: 'rgba(118,61,80,0.35)' }}>
                    <span className="text-xs font-bold" style={{ color: '#c47a8f' }}>C</span>
                  </div>
                  <div className="space-y-3 flex-1">
                    <div className="rounded-2xl rounded-bl-sm px-4 py-3 text-xs leading-relaxed" style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.75)' }}>
                      <p className="mb-2">{industria.agentChat.aiIntro}</p>
                      <ul className="space-y-1 pl-3 border-l" style={{ borderColor: 'rgba(196,122,143,0.3)', color: 'rgba(255,255,255,0.5)' }}>
                        {industria.agentChat.aiPoints.map((point) => (
                          <li key={point}>{point}</li>
                        ))}
                      </ul>
                      <p className="mt-2" style={{ color: '#c47a8f' }}>{industria.agentChat.aiFollowUp}</p>
                    </div>
                  </div>
                </div>

                {/* Client typing indicator */}
                <div className="msg-3 flex justify-end">
                  <div className="rounded-2xl rounded-br-sm px-4 py-3" style={{ background: 'rgba(118,61,80,0.4)' }}>
                    <div className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full dot-1" style={{ background: 'rgba(255,255,255,0.7)' }} />
                      <span className="w-1.5 h-1.5 rounded-full dot-2" style={{ background: 'rgba(255,255,255,0.7)' }} />
                      <span className="w-1.5 h-1.5 rounded-full dot-3" style={{ background: 'rgba(255,255,255,0.7)' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function CTASection({ industria }: { industria: IndustriaData }) {
  return (
    <section className="py-24 bg-white border-t border-[#efefef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Empieza hoy</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
            {industria.ctaTitle}
          </h2>
          <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
            {industria.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="/contacto"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm"
            >
              Hablar con un consultor
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function IndustriaPage({ industria }: { industria: IndustriaData }) {
  return (
    <>
      <HeroSection industria={industria} />
      <NormasSection industria={industria} />
      <SolucionesSection industria={industria} />
      <RetosSection industria={industria} />
      <AgenteIASection industria={industria} />
      <CTASection industria={industria} />
    </>
  )
}
