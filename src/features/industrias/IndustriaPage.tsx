'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useRef, type ReactNode } from 'react'
import type { IndustriaData } from './data'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { INDUSTRIAS_EN, INDUSTRIAS_PT } from './data.translations'

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
  const { t } = useLanguage()
  const ip = t.industriaPage
  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-28 overflow-hidden" style={{ background: '#fafafa' }}>
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
          className="hi text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2020] leading-tight mb-6 mt-3 block"
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
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
          >
            {ip.cta.cta1}
          </Link>
          <Link
            href="/contacto"
            className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm text-center"
          >
            {ip.cta.cta2}
          </Link>
        </div>
      </div>
    </section>
  )
}

function RetosSection({ industria }: { industria: IndustriaData }) {
  const { t } = useLanguage()
  const ip = t.industriaPage
  const image = INDUSTRIA_IMAGES[industria.slug]

  return (
    <section className="py-14 md:py-24 border-t border-[#efefef] relative overflow-hidden" style={{ background: '#f8f8f8' }}>
      {/* Background image with overlay */}
      {image && (
        <>
          <Image
            src={image}
            alt={industria.name}
            fill
            className="object-cover"
            style={{ opacity: 0.75 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#f8f8f8] via-[#f8f8f8]/60 to-[#f8f8f8]/10 pointer-events-none" />
        </>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{ip.retos.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-16 max-w-2xl">
            {ip.retos.title.replace('{name}', industria.name.toLowerCase())}
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
  const { t } = useLanguage()
  const ip = t.industriaPage
  return (
    <section className="py-14 md:py-24 bg-white">
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
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{ip.soluciones.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-14 max-w-2xl">
            {ip.soluciones.title.replace('{name}', industria.name.toLowerCase())}
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

const NORM_IMAGES: Record<string, string> = {
  'ISO 9001:2015':        'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
  'ISO 14001:2015':       'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  'ISO 45001:2018':       'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'IATF 16949:2016':      'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&q=80',
  'ISO 50001:2018':       'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  'FSSC 22000 v6':        'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&q=80',
  'BRC Food Issue 9':     'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&q=80',
  'IFS Food v8':          'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=800&q=80',
  'SQF Edition 9':        'https://images.unsplash.com/photo-1607349913338-fca6f7fc42d0?w=800&q=80',
  'ISO 22000:2018':       'https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?w=800&q=80',
  'HACCP':                'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
  'ISO 27001:2022':       'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  'ISO 20000-1:2018':     'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&q=80',
  'SOC 2':                'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80',
  'ISO 13485:2016':       'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80',
  'ISO 14971:2019':       'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=800&q=80',
  'ISO 62304':            'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800&q=80',
  'FDA 21 CFR Part 820':  'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
  'FDA 21 CFR Part 211':  'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
  'ISO 19650':            'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80',
  'CTPAT':                'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&q=80',
  'ISO 21001:2018':       'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80',
  'GMP Farmacéutica':     'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&q=80',
  'ICH Q10':              'https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?w=800&q=80',
  'ICH Q9':               'https://images.unsplash.com/photo-1532094349884-543559c5b656?w=800&q=80',
  'NOM-059-SSA1':         'https://images.unsplash.com/photo-1583947215259-38e31be8751f?w=800&q=80',
  'AIAG FMEA':            'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
}

const NORM_META_ES: Record<string, { description: string; scope: string; summary: string }> = {
  'ISO 9001:2015':        { description: 'Gestión de la calidad',               scope: 'Requisitos del sistema',       summary: 'El estándar global de calidad. Define cómo una organización debe controlar sus procesos para entregar productos y servicios consistentes que satisfagan al cliente.' },
  'ISO 14001:2015':       { description: 'Gestión ambiental',                   scope: 'Impacto y cumplimiento',       summary: 'Marco para identificar, controlar y mejorar el impacto ambiental de la organización. Exige cumplimiento legal y mejora continua del desempeño ambiental.' },
  'ISO 45001:2018':       { description: 'Seguridad y salud en el trabajo',     scope: 'Riesgos laborales',            summary: 'Sistema para prevenir accidentes y enfermedades laborales. Exige identificar peligros, evaluar riesgos y aplicar controles que protejan a los trabajadores.' },
  'IATF 16949:2016':      { description: 'Calidad automotriz',                  scope: 'Cadena de suministro OEM',     summary: 'Estándar de calidad para proveedores de la industria automotriz global. Incluye APQP, PPAP, SPC y MSA como herramientas obligatorias de control.' },
  'ISO 50001:2018':       { description: 'Gestión de energía',                  scope: 'Eficiencia energética',        summary: 'Ayuda a las organizaciones a establecer sistemas para reducir el consumo de energía, disminuir costos operativos y cumplir con objetivos de sostenibilidad.' },
  'FSSC 22000 v6':        { description: 'Inocuidad alimentaria',               scope: 'Cadena alimentaria global',    summary: 'Esquema de certificación de inocuidad reconocido por GFSI. Combina ISO 22000 con requisitos adicionales del sector para garantizar la seguridad de los alimentos.' },
  'BRC Food Issue 9':     { description: 'Seguridad alimentaria BRC',           scope: 'Proveedores retail',           summary: 'Estándar exigido por grandes cadenas de retail globales. Evalúa procesos de producción, higiene, trazabilidad y gestión de alérgenos en plantas de alimentos.' },
  'IFS Food v8':          { description: 'Estándar IFS Food',                   scope: 'Industria alimentaria EU',     summary: 'Certificación requerida por distribuidores europeos. Asegura que los procesos de fabricación de alimentos cumplen con altos estándares de calidad e inocuidad.' },
  'SQF Edition 9':        { description: 'Calidad y seguridad SQF',             scope: 'Mercado norteamericano',       summary: 'Estándar reconocido por GFSI enfocado en el mercado norteamericano. Certifica tanto la inocuidad como la calidad del producto a lo largo de toda la cadena.' },
  'ISO 22000:2018':       { description: 'Sistemas de inocuidad',               scope: 'Gestión de peligros',          summary: 'Norma internacional que integra los principios HACCP en un sistema de gestión completo para controlar los peligros relacionados con la inocuidad alimentaria.' },
  'HACCP':                { description: 'Análisis de peligros y PCC',          scope: 'Control de puntos críticos',   summary: 'Metodología preventiva para identificar, evaluar y controlar los peligros biológicos, químicos y físicos que representan un riesgo para la inocuidad de los alimentos.' },
  'ISO 27001:2022':       { description: 'Seguridad de la información',         scope: 'Activos de información',       summary: 'Marco de gestión para proteger la confidencialidad, integridad y disponibilidad de la información. Exige análisis de riesgos y controles documentados.' },
  'ISO 20000-1:2018':     { description: 'Gestión de servicios TI',             scope: 'Provisión de servicios',       summary: 'Define los requisitos para que una organización establezca, implemente y mejore un sistema de gestión de servicios de tecnología de información.' },
  'SOC 2':                { description: 'Controles de seguridad y privacidad', scope: 'Servicios en la nube',         summary: 'Marco de auditoría para empresas de servicios en la nube que demuestra controles sobre seguridad, disponibilidad, integridad, confidencialidad y privacidad.' },
  'ISO 13485:2016':       { description: 'Dispositivos médicos',                scope: 'Diseño y fabricación',         summary: 'Requisitos de calidad específicos para fabricantes de dispositivos médicos. Cubre diseño, producción, instalación y servicio con énfasis en la seguridad del paciente.' },
  'ISO 14971:2019':       { description: 'Gestión de riesgos médicos',          scope: 'Análisis de riesgos',          summary: 'Estándar para la gestión de riesgos en dispositivos médicos. Define el proceso de identificación, evaluación y control de riesgos durante todo el ciclo de vida.' },
  'ISO 62304':            { description: 'Software para dispositivos médicos',  scope: 'Ciclo de vida del software',   summary: 'Define los requisitos del ciclo de vida del software utilizado en dispositivos médicos, desde los requisitos hasta el mantenimiento y la gestión de problemas.' },
  'FDA 21 CFR Part 820':  { description: 'Regulación de calidad FDA',           scope: 'Mercado estadounidense',       summary: 'Regulación de la FDA para fabricantes de dispositivos médicos que quieran comercializar en EE.UU. Exige un sistema de calidad documentado y auditable.' },
  'FDA 21 CFR Part 211':  { description: 'Buenas prácticas farmacéuticas',      scope: 'Fabricación y control',        summary: 'Regulación de la FDA que establece las buenas prácticas de manufactura para productos farmacéuticos destinados al mercado de los Estados Unidos.' },
  'ISO 19650':            { description: 'Gestión de información BIM',          scope: 'Activos construidos',          summary: 'Define cómo gestionar la información de activos construidos usando metodología BIM. Aplica durante el diseño, construcción y operación de infraestructura.' },
  'CTPAT':                { description: 'Comercio exterior seguro',            scope: 'Frontera EE.UU.–México',       summary: 'Programa voluntario de la aduana estadounidense que certifica a las empresas que implementan controles de seguridad en su cadena de suministro internacional.' },
  'ISO 21001:2018':       { description: 'Gestión educativa',                   scope: 'Organizaciones educativas',    summary: 'Sistema de gestión diseñado para organizaciones educativas. Busca mejorar la satisfacción de estudiantes y otros beneficiarios a través de procesos estructurados.' },
  'GMP Farmacéutica':     { description: 'Buenas prácticas de manufactura',     scope: 'Planta farmacéutica',          summary: 'Conjunto de lineamientos que garantizan que los medicamentos se producen de forma consistente y controlada, minimizando riesgos de contaminación o error.' },
  'ICH Q10':              { description: 'Sistema de calidad farmacéutico',     scope: 'Ciclo de vida del producto',   summary: 'Modelo de sistema de calidad farmacéutico que cubre todo el ciclo de vida del producto: desarrollo, fabricación, distribución y discontinuación.' },
  'ICH Q9':               { description: 'Gestión de riesgos de calidad',       scope: 'Toma de decisiones',           summary: 'Guía para la gestión sistemática de riesgos de calidad en la industria farmacéutica, facilitando decisiones basadas en evidencia científica.' },
  'NOM-059-SSA1':         { description: 'Regulación sanitaria mexicana',       scope: 'Autoridad COFEPRIS',           summary: 'Norma oficial mexicana que establece los requisitos mínimos para la fabricación de medicamentos alopáticos, supervisada por COFEPRIS.' },
  'AIAG FMEA':            { description: 'Análisis de modo y efecto de falla',  scope: 'Prevención de defectos',       summary: 'Metodología estructurada para identificar modos de falla potenciales en productos y procesos, evaluando su severidad, ocurrencia y detectabilidad.' },
}

const NORM_META_EN: Record<string, { description: string; scope: string; summary: string }> = {
  'ISO 9001:2015':        { description: 'Quality management',                    scope: 'System requirements',          summary: 'The global quality standard. Defines how an organization must control its processes to consistently deliver products and services that satisfy customers.' },
  'ISO 14001:2015':       { description: 'Environmental management',              scope: 'Impact and compliance',        summary: 'Framework for identifying, controlling and improving an organization\'s environmental impact. Requires legal compliance and continuous improvement of environmental performance.' },
  'ISO 45001:2018':       { description: 'Occupational health and safety',        scope: 'Workplace risks',              summary: 'System to prevent accidents and occupational diseases. Requires identifying hazards, assessing risks and applying controls to protect workers.' },
  'IATF 16949:2016':      { description: 'Automotive quality',                    scope: 'OEM supply chain',             summary: 'Quality standard for suppliers in the global automotive industry. Includes APQP, PPAP, SPC and MSA as mandatory control tools.' },
  'ISO 50001:2018':       { description: 'Energy management',                     scope: 'Energy efficiency',            summary: 'Helps organizations establish systems to reduce energy consumption, lower operating costs and meet sustainability objectives.' },
  'FSSC 22000 v6':        { description: 'Food safety',                           scope: 'Global food chain',            summary: 'GFSI-recognized food safety certification scheme. Combines ISO 22000 with sector-specific requirements to ensure food safety.' },
  'BRC Food Issue 9':     { description: 'BRC food safety',                       scope: 'Retail suppliers',             summary: 'Standard required by major global retail chains. Evaluates production processes, hygiene, traceability and allergen management in food plants.' },
  'IFS Food v8':          { description: 'IFS Food standard',                     scope: 'EU food industry',             summary: 'Certification required by European distributors. Ensures food manufacturing processes meet high quality and safety standards.' },
  'SQF Edition 9':        { description: 'SQF quality and safety',                scope: 'North American market',        summary: 'GFSI-recognized standard focused on the North American market. Certifies both food safety and product quality throughout the supply chain.' },
  'ISO 22000:2018':       { description: 'Food safety systems',                   scope: 'Hazard management',            summary: 'International standard that integrates HACCP principles into a complete management system to control food safety hazards.' },
  'HACCP':                { description: 'Hazard analysis and CCPs',              scope: 'Critical point control',       summary: 'Preventive methodology for identifying, evaluating and controlling biological, chemical and physical hazards that pose a risk to food safety.' },
  'ISO 27001:2022':       { description: 'Information security',                  scope: 'Information assets',           summary: 'Management framework to protect the confidentiality, integrity and availability of information. Requires risk analysis and documented controls.' },
  'ISO 20000-1:2018':     { description: 'IT service management',                 scope: 'Service provision',            summary: 'Defines requirements for an organization to establish, implement and improve an IT service management system.' },
  'SOC 2':                { description: 'Security and privacy controls',         scope: 'Cloud services',               summary: 'Audit framework for cloud service companies demonstrating controls over security, availability, integrity, confidentiality and privacy.' },
  'ISO 13485:2016':       { description: 'Medical devices',                       scope: 'Design and manufacturing',     summary: 'Quality requirements specific to medical device manufacturers. Covers design, production, installation and service with emphasis on patient safety.' },
  'ISO 14971:2019':       { description: 'Medical risk management',               scope: 'Risk analysis',                summary: 'Standard for risk management in medical devices. Defines the process of identifying, evaluating and controlling risks throughout the product lifecycle.' },
  'ISO 62304':            { description: 'Software for medical devices',          scope: 'Software lifecycle',           summary: 'Defines software lifecycle requirements for software used in medical devices, from requirements through maintenance and problem management.' },
  'FDA 21 CFR Part 820':  { description: 'FDA quality regulation',                scope: 'US market',                    summary: 'FDA regulation for medical device manufacturers selling in the US. Requires a documented and auditable quality system.' },
  'FDA 21 CFR Part 211':  { description: 'Good pharmaceutical practices',         scope: 'Manufacturing and control',    summary: 'FDA regulation establishing good manufacturing practices for pharmaceutical products intended for the US market.' },
  'ISO 19650':            { description: 'BIM information management',            scope: 'Built assets',                 summary: 'Defines how to manage information of built assets using BIM methodology. Applies during design, construction and operation of infrastructure.' },
  'CTPAT':                { description: 'Secure foreign trade',                  scope: 'US–Mexico border',             summary: 'Voluntary US customs program certifying companies that implement security controls in their international supply chain.' },
  'ISO 21001:2018':       { description: 'Educational management',                scope: 'Educational organizations',    summary: 'Management system designed for educational organizations. Aims to improve student satisfaction through structured processes.' },
  'GMP Farmacéutica':     { description: 'Good manufacturing practices',          scope: 'Pharmaceutical plant',         summary: 'Guidelines ensuring medicines are produced consistently and under control, minimizing risks of contamination or error.' },
  'ICH Q10':              { description: 'Pharmaceutical quality system',         scope: 'Product lifecycle',            summary: 'Pharmaceutical quality system model covering the entire product lifecycle: development, manufacturing, distribution and discontinuation.' },
  'ICH Q9':               { description: 'Quality risk management',               scope: 'Decision making',              summary: 'Guide for systematic quality risk management in the pharmaceutical industry, facilitating evidence-based decisions.' },
  'NOM-059-SSA1':         { description: 'Mexican health regulation',             scope: 'COFEPRIS authority',           summary: 'Mexican official standard establishing minimum requirements for the manufacture of allopathic drugs, supervised by COFEPRIS.' },
  'AIAG FMEA':            { description: 'Failure mode and effect analysis',      scope: 'Defect prevention',            summary: 'Structured methodology to identify potential failure modes in products and processes, evaluating severity, occurrence and detectability.' },
}

const NORM_META_PT: Record<string, { description: string; scope: string; summary: string }> = {
  'ISO 9001:2015':        { description: 'Gestão da qualidade',                   scope: 'Requisitos do sistema',        summary: 'O padrão global de qualidade. Define como uma organização deve controlar seus processos para entregar produtos e serviços consistentes que satisfaçam o cliente.' },
  'ISO 14001:2015':       { description: 'Gestão ambiental',                      scope: 'Impacto e conformidade',       summary: 'Estrutura para identificar, controlar e melhorar o impacto ambiental da organização. Exige conformidade legal e melhoria contínua do desempenho ambiental.' },
  'ISO 45001:2018':       { description: 'Saúde e segurança ocupacional',         scope: 'Riscos laborais',              summary: 'Sistema para prevenir acidentes e doenças ocupacionais. Exige identificar perigos, avaliar riscos e aplicar controles que protejam os trabalhadores.' },
  'IATF 16949:2016':      { description: 'Qualidade automotiva',                  scope: 'Cadeia de suprimentos OEM',    summary: 'Padrão de qualidade para fornecedores da indústria automotiva global. Inclui APQP, PPAP, SPC e MSA como ferramentas obrigatórias de controle.' },
  'ISO 50001:2018':       { description: 'Gestão de energia',                     scope: 'Eficiência energética',        summary: 'Ajuda as organizações a estabelecer sistemas para reduzir o consumo de energia, diminuir custos operacionais e cumprir objetivos de sustentabilidade.' },
  'FSSC 22000 v6':        { description: 'Inocuidade alimentar',                  scope: 'Cadeia alimentar global',      summary: 'Esquema de certificação de inocuidade reconhecido pela GFSI. Combina ISO 22000 com requisitos adicionais do setor para garantir a segurança dos alimentos.' },
  'BRC Food Issue 9':     { description: 'Segurança alimentar BRC',               scope: 'Fornecedores de varejo',       summary: 'Padrão exigido por grandes redes de varejo globais. Avalia processos de produção, higiene, rastreabilidade e gestão de alérgenos em plantas de alimentos.' },
  'IFS Food v8':          { description: 'Padrão IFS Food',                       scope: 'Indústria alimentar da UE',    summary: 'Certificação exigida por distribuidores europeus. Garante que os processos de fabricação de alimentos atendem a altos padrões de qualidade e inocuidade.' },
  'SQF Edition 9':        { description: 'Qualidade e segurança SQF',             scope: 'Mercado norte-americano',      summary: 'Padrão reconhecido pela GFSI focado no mercado norte-americano. Certifica tanto a inocuidade quanto a qualidade do produto ao longo de toda a cadeia.' },
  'ISO 22000:2018':       { description: 'Sistemas de inocuidade',                scope: 'Gestão de perigos',            summary: 'Norma internacional que integra os princípios HACCP em um sistema de gestão completo para controlar os perigos relacionados à inocuidade alimentar.' },
  'HACCP':                { description: 'Análise de perigos e PCCs',             scope: 'Controle de pontos críticos',  summary: 'Metodologia preventiva para identificar, avaliar e controlar os perigos biológicos, químicos e físicos que representam risco para a inocuidade dos alimentos.' },
  'ISO 27001:2022':       { description: 'Segurança da informação',               scope: 'Ativos de informação',         summary: 'Estrutura de gestão para proteger a confidencialidade, integridade e disponibilidade da informação. Exige análise de riscos e controles documentados.' },
  'ISO 20000-1:2018':     { description: 'Gestão de serviços de TI',              scope: 'Prestação de serviços',        summary: 'Define os requisitos para que uma organização estabeleça, implemente e melhore um sistema de gestão de serviços de tecnologia da informação.' },
  'SOC 2':                { description: 'Controles de segurança e privacidade',  scope: 'Serviços em nuvem',            summary: 'Estrutura de auditoria para empresas de serviços em nuvem que demonstra controles sobre segurança, disponibilidade, integridade, confidencialidade e privacidade.' },
  'ISO 13485:2016':       { description: 'Dispositivos médicos',                  scope: 'Design e fabricação',          summary: 'Requisitos de qualidade específicos para fabricantes de dispositivos médicos. Cobre design, produção, instalação e serviço com ênfase na segurança do paciente.' },
  'ISO 14971:2019':       { description: 'Gestão de riscos médicos',              scope: 'Análise de riscos',            summary: 'Padrão para gestão de riscos em dispositivos médicos. Define o processo de identificação, avaliação e controle de riscos ao longo do ciclo de vida.' },
  'ISO 62304':            { description: 'Software para dispositivos médicos',    scope: 'Ciclo de vida do software',    summary: 'Define os requisitos do ciclo de vida do software utilizado em dispositivos médicos, desde os requisitos até a manutenção e gestão de problemas.' },
  'FDA 21 CFR Part 820':  { description: 'Regulamentação de qualidade FDA',       scope: 'Mercado dos EUA',              summary: 'Regulamentação da FDA para fabricantes de dispositivos médicos que comercializam nos EUA. Exige um sistema de qualidade documentado e auditável.' },
  'FDA 21 CFR Part 211':  { description: 'Boas práticas farmacêuticas',           scope: 'Fabricação e controle',        summary: 'Regulamentação da FDA que estabelece as boas práticas de fabricação para produtos farmacêuticos destinados ao mercado dos Estados Unidos.' },
  'ISO 19650':            { description: 'Gestão de informação BIM',              scope: 'Ativos construídos',           summary: 'Define como gerir a informação de ativos construídos usando metodologia BIM. Aplica-se durante o design, construção e operação de infraestrutura.' },
  'CTPAT':                { description: 'Comércio exterior seguro',              scope: 'Fronteira EUA–México',         summary: 'Programa voluntário da alfândega americana que certifica empresas que implementam controles de segurança em sua cadeia de suprimentos internacional.' },
  'ISO 21001:2018':       { description: 'Gestão educacional',                    scope: 'Organizações educacionais',    summary: 'Sistema de gestão projetado para organizações educacionais. Busca melhorar a satisfação de estudantes e outros beneficiários por meio de processos estruturados.' },
  'GMP Farmacéutica':     { description: 'Boas práticas de fabricação',           scope: 'Planta farmacêutica',          summary: 'Conjunto de diretrizes que garantem que os medicamentos são produzidos de forma consistente e controlada, minimizando riscos de contaminação ou erro.' },
  'ICH Q10':              { description: 'Sistema de qualidade farmacêutico',     scope: 'Ciclo de vida do produto',     summary: 'Modelo de sistema de qualidade farmacêutico que cobre todo o ciclo de vida do produto: desenvolvimento, fabricação, distribuição e descontinuação.' },
  'ICH Q9':               { description: 'Gestão de riscos de qualidade',         scope: 'Tomada de decisões',           summary: 'Guia para a gestão sistemática de riscos de qualidade na indústria farmacêutica, facilitando decisões baseadas em evidências científicas.' },
  'NOM-059-SSA1':         { description: 'Regulamentação sanitária mexicana',     scope: 'Autoridade COFEPRIS',          summary: 'Norma oficial mexicana que estabelece os requisitos mínimos para a fabricação de medicamentos alopáticos, supervisionada pela COFEPRIS.' },
  'AIAG FMEA':            { description: 'Análise de modo e efeito de falha',     scope: 'Prevenção de defeitos',        summary: 'Metodologia estruturada para identificar modos de falha potenciais em produtos e processos, avaliando sua severidade, ocorrência e detectabilidade.' },
}

// ─── Resúmenes contextualizados por industria ─────────────────────────────────
const NORM_INDUSTRY_SUMMARY: Record<string, Record<string, string>> = {
  'manufactura': {
    'ISO 9001:2015':   'Estandariza tus procesos productivos y reduce defectos en línea. Es la base para controlar variabilidad y entregar producto consistente a tus clientes sin reprocesos.',
    'ISO 14001:2015':  'Gestiona los residuos, emisiones y consumo de recursos en tu planta. Cumple con regulaciones ambientales antes de que se conviertan en multas o paros de producción.',
    'ISO 45001:2018':  'Previene accidentes en planta: caídas, atrapamientos, exposición a químicos. Protege a tu equipo operativo y reduce el ausentismo y los costos legales por siniestros.',
    'IATF 16949:2016': 'Cumple los requisitos de las armadoras y tier-1 automotrices. Incluye APQP, PPAP y control estadístico para garantizar que cada pieza que sale de planta es conforme.',
    'ISO 50001:2018':  'Monitorea y reduce el consumo energético de tus máquinas, hornos y sistemas de aire comprimido. Traduce eficiencia energética en ahorro real en tu factura eléctrica.',
  },
  'automotriz': {
    'IATF 16949:2016': 'El pasaporte de calidad para proveer a OEMs y tier-1. Sin esta certificación no puedes estar en la cadena de suministro de las grandes armadoras.',
    'ISO 9001:2015':   'La base del sistema de calidad que exige toda la industria automotriz. Documenta y controla cada proceso para que tu operación sea predecible y auditable.',
    'ISO 14001:2015':  'Las armadoras exigen a sus proveedores responsabilidad ambiental. Gestiona los residuos de pintura, metales y fluidos de proceso que genera tu operación.',
    'ISO 45001:2018':  'En plantas automotrices, los riesgos de atrapamiento, ruido y manejo de materiales son altos. Esta norma estructura la prevención de accidentes en toda tu operación.',
    'AIAG FMEA':       'Analiza qué puede fallar en tu producto o proceso antes de que llegue al cliente. En automotriz, es un requisito de los OEMs para aprobar nuevos diseños y cambios de proceso.',
  },
  'alimentos-y-bebidas': {
    'FSSC 22000 v6':   'Requisito de los grandes retailers globales para comprar tus productos. Certifica que tu planta controla los peligros de inocuidad desde materia prima hasta distribución.',
    'BRC Food Issue 9':'Abre las puertas a cadenas de retail en Europa y Norteamérica. Evalúa higiene, trazabilidad, alérgenos y control de cuerpos extraños en tu proceso productivo.',
    'IFS Food v8':     'Obligatorio para exportar a distribuidores alemanes, franceses e italianos. Revisa a fondo tus procesos de manufactura, higiene y calidad del producto terminado.',
    'SQF Edition 9':   'Certifica la inocuidad y calidad de tus productos para el mercado norteamericano. Muchos importadores y retailers de EE.UU. lo exigen como condición de compra.',
    'ISO 22000:2018':  'Integra el análisis HACCP en un sistema de gestión completo para identificar, prevenir y controlar peligros en cada etapa de tu proceso de alimentos.',
    'HACCP':           'Identifica los puntos críticos donde un peligro biológico, químico o físico puede contaminar tu producto y define los controles exactos para evitarlo.',
  },
  'construccion': {
    'ISO 9001:2015':   'Estandariza cómo se planean, ejecutan y entregan las obras. Reduce re-trabajos, quejas de clientes y sobrecostos por falta de control en los procesos de construcción.',
    'ISO 45001:2018':  'El sector con mayor tasa de accidentes graves. Estructura la prevención de caídas de altura, golpes, atrapamientos y riesgos eléctricos en cada obra.',
    'ISO 14001:2015':  'Gestiona el impacto ambiental de tus obras: residuos de construcción, ruido y contaminación de suelo. Cada vez más contratos públicos y privados lo exigen.',
    'ISO 19650':       'Define cómo producir y gestionar la información digital de tus proyectos con metodología BIM. Reduce errores de coordinación entre disciplinas y mejora la entrega al cliente.',
  },
  'tecnologia-y-software': {
    'ISO 27001:2022':    'El estándar de seguridad que tus clientes corporativos y enterprise te exigen. Demuestra que proteges sus datos con controles documentados y auditados.',
    'ISO 9001:2015':     'Estructura tus procesos de desarrollo, soporte y entrega. Reduce defectos, incumplimientos de SLA y quejas de clientes con procesos repetibles y controlados.',
    'ISO 20000-1:2018':  'Certifica la calidad de tu gestión de servicios de TI: incidentes, cambios, disponibilidad y capacidad. Diferencia tu empresa en licitaciones y contratos enterprise.',
    'SOC 2':             'Auditoría de seguridad que exigen los clientes corporativos en EE.UU. Verifica que tus controles protegen la seguridad, disponibilidad y confidencialidad de los datos que manejas.',
  },
  'salud-y-dispositivos-medicos': {
    'ISO 13485:2016':      'El sistema de calidad obligatorio para fabricar dispositivos médicos. Cubre diseño, producción, trazabilidad y servicio con foco total en la seguridad del paciente.',
    'ISO 9001:2015':       'Complementa el sistema de calidad médico con estructura de mejora continua. Controla los procesos administrativos, de compras y de atención que rodean la fabricación.',
    'ISO 14971:2019':      'Evalúa cada riesgo que tu dispositivo puede representar para el paciente. Es obligatorio antes de comercializar cualquier dispositivo médico en mercados regulados.',
    'ISO 62304':           'Define cómo desarrollar, probar y mantener el software que controla tu dispositivo. Los organismos reguladores exigen cumplir este estándar antes de aprobar el producto.',
    'FDA 21 CFR Part 820': 'El reglamento de calidad de la FDA para ingresar al mercado estadounidense. Exige un sistema documentado de control de diseño, trazabilidad y gestión de quejas de campo.',
  },
  'logistica-y-transporte': {
    'ISO 9001:2015':   'Estandariza los procesos de recolección, almacenaje y entrega para reducir errores, daños y retrasos. Clientes como manufactureras y retailers lo exigen a sus operadores.',
    'ISO 45001:2018':  'Protege a operadores, montacarguistas y personal de almacén frente a accidentes de carga, tráfico y manejo manual. Reduce siniestros y los costos que generan.',
    'ISO 14001:2015':  'Gestiona el impacto ambiental de tu flota: emisiones, derrames de combustible y manejo de residuos. Clientes con objetivos de sostenibilidad lo exigen a sus proveedores.',
    'CTPAT':           'Certificación de la aduana de EE.UU. que agiliza el cruce fronterizo de tus cargas. Reduce inspecciones y tiempos de espera en operaciones México–EE.UU.',
  },
  'servicios-profesionales': {
    'ISO 9001:2015':   'Demuestra que la calidad de tu firma no depende de una sola persona, sino de procesos. Reduce re-trabajos, disputas contractuales y diferencia tu empresa de la competencia.',
    'ISO 14001:2015':  'Gestiona el impacto ambiental de tus operaciones de servicio. Cada vez más contratos corporativos y públicos requieren proveedores con gestión ambiental certificada.',
    'ISO 45001:2018':  'Gestiona riesgos laborales propios de los servicios: estrés, ergonomía y visitas a instalaciones de clientes. Protege a tu equipo y cumple con la normativa laboral vigente.',
  },
  'educacion': {
    'ISO 21001:2018':  'Sistema de gestión diseñado para tu institución. Mejora la experiencia de estudiantes y familias estructurando los procesos académicos, administrativos y de mejora continua.',
    'ISO 9001:2015':   'Aplica la gestión de calidad a admisiones, programas académicos y atención a alumnos. Base reconocida para acreditaciones nacionales e internacionales del sector educativo.',
  },
  'farmaceutica': {
    'GMP Farmacéutica':    'Regula cómo se producen los medicamentos en tu planta. Garantiza que cada lote es idéntico, libre de contaminación y dentro de especificación para proteger al paciente.',
    'ISO 9001:2015':       'Estructura los procesos de soporte: compras, gestión de proveedores y mantenimiento. Complementa el sistema regulatorio BPM con mejora continua y control documentado.',
    'ICH Q10':             'Modelo de calidad para todo el ciclo de vida del medicamento. Integra las BPM con mejora continua para mantener tu operación en control regulatorio ante FDA y COFEPRIS.',
    'ICH Q9':              'Guía para aplicar análisis de riesgo en decisiones de calidad farmacéutica. Permite justificar ante reguladores qué controles aplicas y por qué en tu operación.',
    'NOM-059-SSA1':        'La norma que COFEPRIS revisa en cada inspección a tu planta. Define infraestructura, documentación y control de calidad mínimos para fabricar medicamentos en México.',
    'FDA 21 CFR Part 211': 'Regulación de manufactura de la FDA para exportar medicamentos a EE.UU. Cubre instalaciones, equipos, control de procesos, pruebas de laboratorio y registros de lote.',
  },
}

function NormasSection({ industria }: { industria: IndustriaData }) {
  const { t, lang } = useLanguage()
  const ip = t.industriaPage
  const NORM_META = lang === 'en' ? NORM_META_EN : lang === 'pt' ? NORM_META_PT : NORM_META_ES
  return (
    <section className="py-14 md:py-24 border-t border-[#efefef]" style={{ background: '#f8f8f8' }}>
      <style>{`
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

        /* Flip card */
        .norm-flip-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .norm-card:hover .norm-flip-inner {
          transform: rotateY(180deg);
        }
        .norm-flip-front, .norm-flip-back {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 16px;
          overflow: hidden;
        }
        .norm-flip-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{ip.normas.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-14 max-w-2xl">
            {ip.normas.title.replace('{name}', industria.name.toLowerCase())}
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {industria.normas.map((norma, i) => {
            const meta = NORM_META[norma] ?? { description: 'Norma internacional', scope: 'Certificación', summary: '' }
            const industrySummary = lang === 'es' ? NORM_INDUSTRY_SUMMARY[industria.slug]?.[norma] : undefined
            return <NormaCard key={norma} norma={norma} meta={{ ...meta, summary: industrySummary ?? meta.summary }} index={i} />
          })}
        </div>
      </div>
    </section>
  )
}

function NormaCard({ norma, meta, index }: {
  norma: string
  meta: { description: string; scope: string; summary?: string }
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)
  const image = NORM_IMAGES[norma]

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
      className="norm-card"
      style={{ transitionDelay: `${index * 40}ms`, perspective: '1000px', height: '180px' }}
      onMouseEnter={() => { if (innerRef.current) innerRef.current.style.transform = 'rotateY(180deg)' }}
      onMouseLeave={() => { if (innerRef.current) innerRef.current.style.transform = 'rotateY(0deg)' }}
    >
      <div ref={innerRef} className="norm-flip-inner" style={{ position: 'relative', width: '100%', height: '100%', transformStyle: 'preserve-3d', transition: 'transform 0.6s cubic-bezier(0.4,0,0.2,1)' }}>
        {/* Front — spotlight + norm name */}
        <div className="norm-flip-front border border-[#ebebeb] flex flex-col items-center justify-center p-6" style={{ background: '#fcfcfc', position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(0deg)' }}>
          {/* Spotlight from top, wine color */}
          <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 55% at 50% -10%, rgba(118,61,80,0.18) 0%, transparent 70%)' }} />
          <div className="norm-bar absolute top-0 left-0 right-0 h-[2px] rounded-t-2xl" style={{ background: 'linear-gradient(90deg, transparent, #763d50, transparent)' }} />
          <div className="norm-body flex flex-col items-center justify-center h-full text-center relative z-10">
            <p className="text-[#1f2020] font-medium text-2xl leading-tight tracking-tight">{norma}</p>
          </div>
        </div>

        {/* Back — image + overlay + norm name + summary */}
        <div className="norm-flip-back" style={{ position: 'absolute', inset: 0, borderRadius: 16, overflow: 'hidden', backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}>
          {image && (
            <Image
              src={image}
              alt={norma}
              fill
              className="object-cover"
            />
          )}
          <div className="absolute inset-0" style={{ background: 'linear-gradient(160deg, rgba(31,32,32,0.88) 0%, rgba(118,61,80,0.72) 100%)' }} />
          <div className="absolute inset-0 flex flex-col justify-between p-5">
            <p className="text-white font-bold text-sm leading-tight">{norma}</p>
            <p className="text-white/80 text-xs leading-relaxed">{meta.summary ?? meta.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function AgenteIASection({ industria }: { industria: IndustriaData }) {
  const { t } = useLanguage()
  const ip = t.industriaPage

  return (
    <section className="py-14 md:py-24" style={{ background: '#1f2020' }}>
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
                {ip.agenteIA.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-light text-white leading-tight mb-5">
                {ip.agenteIA.title.replace('{name}', industria.name.toLowerCase())}
              </h2>
              <p className="text-white/45 text-base leading-relaxed mb-10">
                {ip.agenteIA.description}
              </p>
            </Reveal>

            <div className="space-y-3">
              {ip.agenteIA.capabilities.map((cap, i) => (
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
                {ip.agenteIA.link}
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
                  {ip.agenteIA.tag} · {industria.name}
                </span>
                <span className="ml-auto flex items-center gap-1.5 text-xs" style={{ color: '#4ade80' }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
                  Online
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
  const { t } = useLanguage()
  const ip = t.industriaPage
  return (
    <section className="py-14 md:py-24 bg-white border-t border-[#efefef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{ip.cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
            {industria.ctaTitle}
          </h2>
          <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
            {industria.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
            >
              {ip.cta.cta1}
            </Link>
            <Link
              href="/contacto"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm text-center"
            >
              {ip.cta.cta2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function IndustriaPage({ industria }: { industria: IndustriaData }) {
  const { lang } = useLanguage()
  const overrides = lang === 'en' ? INDUSTRIAS_EN[industria.slug] : lang === 'pt' ? INDUSTRIAS_PT[industria.slug] : undefined
  const i = overrides ? { ...industria, ...overrides } : industria

  return (
    <>
      <HeroSection industria={i} />
      <NormasSection industria={i} />
      <SolucionesSection industria={i} />
      <RetosSection industria={i} />
      <AgenteIASection industria={i} />
      <CTASection industria={i} />
    </>
  )
}
