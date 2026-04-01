'use client'

import React, { useState } from 'react'
import Link from 'next/link'

// ---------------------------------------------------------------------------
// SVG icon paths (Heroicons outline style)
// ---------------------------------------------------------------------------
const ICON_PATHS = {
  document:
    'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9z',
  magnifier:
    'm21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607z',
  shieldCheck:
    'M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  chartBar:
    'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125z',
  users:
    'M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0z',
  calendar:
    'M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5',
  bell: 'M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0',
  warning:
    'M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008z',
  arrowCycle:
    'M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99',
} as const

type IconKey = keyof typeof ICON_PATHS

// Ordered list of icons for the background grid tiles
const TILE_ICONS: IconKey[] = [
  'document',
  'magnifier',
  'shieldCheck',
  'chartBar',
  'users',
  'calendar',
  'bell',
  'warning',
  'arrowCycle',
]

// ---------------------------------------------------------------------------
// Inline SVG icon helper
// ---------------------------------------------------------------------------
function Icon({
  name,
  className,
  style,
}: {
  name: IconKey
  className?: string
  style?: React.CSSProperties
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d={ICON_PATHS[name]} />
    </svg>
  )
}

// ---------------------------------------------------------------------------
// Section 1 — Hero
// ---------------------------------------------------------------------------
function HeroSection() {
  const COLS = 7
  const ROWS = 12          // 2× rows for seamless loop
  const TOTAL = COLS * ROWS // 84 tiles
  const LOGO_INDEX = 17    // row 2 col 3 (same visual position)

  const shimmerDurations = [3.2, 4.1, 3.7, 5.0, 4.5, 3.9, 4.8, 3.4, 5.2]
  const shimmerDelays = [0, 0.8, 1.6, 0.4, 1.2, 2.0, 0.6, 1.4, 2.4]

  const AGENT_ACTIONS = [
    'Analiza cláusulas ISO',
    'Genera plan de auditoría',
    'Detecta brechas',
    'Redacta procedimientos',
    'Cierra No conformidades',
    'Revisa evidencias',
    'Prepara auditoría',
    'Actualiza documentos',
    'Evalúa riesgos',
    'Verifica cumplimiento',
    'Genera registros',
    'Notifica vencimientos',
    'Analiza no conformidades',
    'Sugiere mejoras',
    'Revisa cláusula 7.2',
    'Monitorea indicadores',
    'Crea matriz de riesgos',
    'Valida evidencias',
  ]

  return (
    <section
      className="relative flex flex-col justify-end pb-20 overflow-hidden"
      style={{ backgroundColor: '#ffffff', minHeight: '100vh' }}
    >
      {/* Full-bleed background grid — drifts upward continuously */}
      <div className="absolute inset-0 overflow-hidden">
      <div
        style={{
          position: 'absolute',
          top: 0, left: 0, right: 0,
          height: '200%',
          display: 'grid',
          gridTemplateColumns: 'repeat(7, 1fr)',
          gridTemplateRows: 'repeat(12, 1fr)',
          animation: 'grid-drift 35s linear infinite',
        }}
      >
        {Array.from({ length: TOTAL }).map((_, i) => {
          const isLogo = i === LOGO_INDEX
          const iconKey = TILE_ICONS[i % TILE_ICONS.length]
          const durIdx = i % shimmerDurations.length
          const delIdx = i % shimmerDelays.length

          return (
            <div
              key={i}
              className="rounded-2xl flex items-center justify-center px-2"
              style={{
                backgroundColor: 'rgba(0,0,0,0.03)',
                animation: `tile-shimmer ${shimmerDurations[durIdx]}s ease-in-out ${shimmerDelays[delIdx]}s infinite`,
                margin: '4px',
              }}
            >
              <span
                className="text-center leading-tight select-none"
                style={{ color: 'rgba(0,0,0,0.18)', fontSize: '11px', fontWeight: 500 }}
              >
                {AGENT_ACTIONS[i % AGENT_ACTIONS.length]}
              </span>
            </div>
          )
        })}
      </div>
      </div>

      {/* Radial gradient overlay — fades edges, keeps center visible */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 35%, transparent 20%, rgba(255,255,255,0.6) 70%, rgba(255,255,255,0.95) 100%)',
        }}
      />

      {/* Strong bottom fade so content below flows naturally */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent, #ffffff)',
        }}
      />

      {/* Hero content — anchored to bottom */}
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        {/* Badge pill */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#1f2020] leading-tight mb-6">
          El sistema de gestión que{' '}
          <span className="text-[#763d50]">tu organización necesita</span>
        </h1>

        <p className="text-[#3a3a3a]/60 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Documentos, auditorías, riesgos, No conformidades e indicadores en una sola
          plataforma — respaldada por un Agente IA que entiende tu norma y
          acompaña a tu equipo en cada etapa.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/signup"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-7 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-sm whitespace-nowrap"
          >
            Agendar demo gratuita
          </Link>
          <Link
            href="#como-funciona"
            className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] bg-white hover:bg-[#f8f8f8] px-7 py-3 rounded-full font-semibold transition-all text-sm whitespace-nowrap"
          >
            Hablar con un consultor
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 2 — Product Showcase
// ---------------------------------------------------------------------------

function ProductShowcaseSection() {
  return (
    <section className="py-16 border-t border-b border-[#efefef]" style={{ background: '#f8f8f8' }}>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#e8e8e8]">
          {[
            { icon: 'document' as IconKey, title: 'Un solo sistema', desc: 'Documentos, auditorías, No conformidades e indicadores conectados. Sin módulos aislados.' },
            { icon: 'shieldCheck' as IconKey, title: 'IA integrada de fábrica', desc: 'El Agente IA conoce tu norma y tu sistema desde el primer día. No es un chatbot genérico.' },
            { icon: 'arrowCycle' as IconKey, title: 'Implementación en días', desc: 'Sin proyectos de meses. Tu SGC operativo en menos de una semana.' },
            { icon: 'users' as IconKey, title: 'Consultores incluidos', desc: 'Acceso a expertos certificados que complementan el software cuando los necesitas.' },
          ].map((item, i) => (
            <div key={i} className="px-8 py-2 first:pl-0 last:pr-0">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center mb-4" style={{ background: 'rgba(118,61,80,0.08)' }}>
                <Icon name={item.icon} className="w-4 h-4 text-[#763d50]" />
              </div>
              <div className="text-[#1f2020] font-semibold text-sm mb-2">{item.title}</div>
              <div className="text-[#3a3a3a]/55 text-sm leading-relaxed">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 3 — Built Different (Rippling style)
// ---------------------------------------------------------------------------

const NORM_ROWS = [
  {
    items: ['ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'ISO 22000:2018', 'ISO 13485:2016', 'IATF 16949:2016', 'ISO 50001:2018', 'ISO 27001:2022', 'ISO 17025:2017', 'ISO 15189:2022'],
    direction: 'left' as const,
    speed: 42,
    accent: false,
  },
  {
    items: ['FSSC 22000 v6', 'BRC Food Issue 9', 'IFS Food v8', 'SQF Edition 9', 'HACCP', 'GMP Farmacéutica', 'AS9100 Rev D', 'NADCAP', 'OHSAS 18001', 'GMP Cosméticos'],
    direction: 'right' as const,
    speed: 36,
    accent: true,
  },
]

const INDUSTRY_ROWS = [
  {
    items: ['Industria Alimentaria', 'Manufactura', 'Farmacéutico', 'Automotriz', 'Aeroespacial', 'Construcción', 'Salud y Hospitales', 'Logística', 'Tecnología', 'Energía y Gas'],
    direction: 'left' as const,
    speed: 38,
    accent: false,
  },
  {
    items: ['Minería', 'Petroquímica', 'Textil', 'Electrónica', 'Agroindustria', 'Servicios Financieros', 'Retail', 'Plásticos', 'Papel y Cartón', 'Bebidas'],
    direction: 'right' as const,
    speed: 44,
    accent: true,
  },
]

function PillRow({ items, direction, speed, accent }: { items: string[]; direction: 'left' | 'right'; speed: number; accent: boolean }) {
  const doubled = [...items, ...items]
  const anim = direction === 'left'
    ? `scroll-left ${speed}s linear infinite`
    : `scroll-right ${speed}s linear infinite`

  return (
    <div className="overflow-hidden py-1.5">
      <div className="flex gap-2.5 w-max" style={{ animation: anim }}>
        {doubled.map((item, i) => (
          <span
            key={i}
            className={`inline-flex items-center px-4 py-2 rounded-full text-sm whitespace-nowrap font-medium border ${
              accent
                ? 'bg-[#763d50]/6 border-[#763d50]/15 text-[#763d50]'
                : 'bg-white border-[#e8e8e8] text-[#3a3a3a]/65'
            }`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

function BuiltDifferentSection() {
  return (
    <section className="py-28 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Top: text content — left aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end mb-20">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-[#763d50] mb-4">
              Cobertura total
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#1f2020] leading-tight">
              Tu norma.<br />Tu industria.<br />Tu Consultto.
            </h2>
          </div>
          <div>
            <p className="text-[#3a3a3a]/60 text-lg leading-relaxed mb-10">
              Más de 20 normas internacionales, cualquier sector. Consultto se adapta
              a los requisitos de tu certificación desde el día uno — sin configuraciones
              complicadas ni implementaciones largas.
            </p>
            <div className="flex gap-10">
              <div>
                <div className="text-4xl font-bold text-[#1f2020]">20<span className="text-[#763d50]">+</span></div>
                <div className="text-sm text-[#3a3a3a]/50 mt-1 font-medium">Normas soportadas</div>
              </div>
              <div className="w-px bg-[#e8e8e8]" />
              <div>
                <div className="text-4xl font-bold text-[#1f2020]">30<span className="text-[#763d50]">+</span></div>
                <div className="text-sm text-[#3a3a3a]/50 mt-1 font-medium">Industrias cubiertas</div>
              </div>
            </div>
          </div>
        </div>

        {/* Pills grid — two labeled groups */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Normas */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebebeb] bg-[#f8f8f8] py-8">
            <div className="px-6 mb-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#763d50]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#763d50] inline-block" />
                Normas internacionales
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {NORM_ROWS.map((row, i) => (
                <PillRow key={i} {...row} />
              ))}
            </div>
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-10 pointer-events-none bg-gradient-to-r from-[#f8f8f8] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-10 pointer-events-none bg-gradient-to-l from-[#f8f8f8] to-transparent" />
          </div>

          {/* Industrias */}
          <div className="relative overflow-hidden rounded-3xl border border-[#ebebeb] bg-[#f8f8f8] py-8">
            <div className="px-6 mb-5">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#3a3a3a]/50">
                <span className="w-1.5 h-1.5 rounded-full bg-[#3a3a3a]/40 inline-block" />
                Industrias
              </span>
            </div>
            <div className="flex flex-col gap-2">
              {INDUSTRY_ROWS.map((row, i) => (
                <PillRow key={i} {...row} />
              ))}
            </div>
            {/* Edge fades */}
            <div className="absolute inset-y-0 left-0 w-10 pointer-events-none bg-gradient-to-r from-[#f8f8f8] to-transparent" />
            <div className="absolute inset-y-0 right-0 w-10 pointer-events-none bg-gradient-to-l from-[#f8f8f8] to-transparent" />
          </div>

        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 3 — Capabilities (interactive close-ups)
// ---------------------------------------------------------------------------

// --- Close-up mockups ---

function MockupAgenteIA() {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
      <div className="flex items-center gap-2.5 px-5 py-4 border-b border-[#f0f0f0]">
        <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white shrink-0" style={{ background: '#763d50' }}>IA</div>
        <div>
          <div className="text-[#1f2020] text-sm font-semibold">Agente IA · ISO 9001:2015</div>
          <div className="text-[#27c93f] text-[10px] font-medium">● En línea</div>
        </div>
      </div>
      <div className="flex-1 p-5 flex flex-col gap-3 overflow-hidden">
        {[
          { from: 'user', text: '¿Cuáles son las brechas más críticas en nuestro SGC?' },
          { from: 'ai', text: 'Analicé tu sistema. Encontré 3 brechas críticas: (1) Cláusula 7.2 — 4 puestos sin evaluación de competencia documentada. (2) Cláusula 9.1 — sin indicadores definidos para proceso de producción. (3) Cláusula 10.2 — NC-047 lleva 45 días sin cierre.' },
          { from: 'user', text: '¿Puedes generarme el plan de acción para la cláusula 7.2?' },
          { from: 'ai', text: 'Claro. Generé el plan: 1) Matriz de competencias por puesto (plazo: 7 días), 2) Evaluaciones pendientes — 4 personas (plazo: 15 días), 3) Evidencia documental en sistema (plazo: 20 días). ¿Lo asigno al responsable de RRHH?' },
        ].map((msg, i) => (
          <div key={i} className={`flex gap-2.5 ${msg.from === 'user' ? 'flex-row-reverse' : ''}`}>
            {msg.from === 'ai' && <div className="w-6 h-6 rounded-full shrink-0 mt-0.5" style={{ background: '#763d50' }} />}
            <div
              className="max-w-[80%] rounded-2xl px-4 py-3 text-[12px] leading-relaxed"
              style={msg.from === 'ai'
                ? { background: 'rgba(118,61,80,0.07)', color: '#1f2020', borderTopLeftRadius: 4 }
                : { background: '#f0f0f0', color: '#333', borderTopRightRadius: 4 }}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>
      <div className="px-5 py-4 border-t border-[#f0f0f0] flex items-center gap-3">
        <div className="flex-1 bg-[#f5f5f7] rounded-xl px-4 py-2.5 text-[11px] text-[#bbb]">Pregunta sobre tu norma o sistema…</div>
        <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: '#763d50' }}>
          <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" /></svg>
        </div>
      </div>
    </div>
  )
}

function MockupDocumentos() {
  const docs = [
    { name: 'Manual de Calidad', code: 'MC-001', ver: 'v12', vigencia: '15 dic 2025', status: 'Vigente', color: '#27c93f' },
    { name: 'Política de Calidad', code: 'PO-001', ver: 'v3', vigencia: '30 jun 2025', status: 'En revisión', color: '#ffbd2e' },
    { name: 'Proc. Control Documentos', code: 'PR-001', ver: 'v8', vigencia: '01 mar 2026', status: 'Vigente', color: '#27c93f' },
    { name: 'Proc. Auditorías Internas', code: 'PR-004', ver: 'v5', vigencia: '15 sep 2025', status: 'Aprobado', color: '#27c93f' },
    { name: 'Matriz de Riesgos', code: 'RE-007', ver: 'v6', vigencia: '10 abr 2025', status: 'Por vencer', color: '#ff5f56' },
    { name: 'Instructivo Calibración', code: 'IT-012', ver: 'v4', vigencia: '01 ene 2026', status: 'Vigente', color: '#27c93f' },
  ]
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0]">
        <span className="text-[#1f2020] font-semibold text-sm">Gestión Documental</span>
        <div className="flex items-center gap-2">
          <span className="text-[10px] bg-[#ff5f56]/10 text-[#ff5f56] font-semibold px-2.5 py-1 rounded-full">1 por vencer</span>
          <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-[#763d50] text-white text-[11px] font-bold cursor-default">+</div>
        </div>
      </div>
      <div className="flex items-center gap-3 px-5 py-3 border-b border-[#fafafa] bg-[#fafafa]">
        {['Código', 'Nombre', 'Versión', 'Vigencia', 'Estado'].map(h => (
          <div key={h} className={`text-[9px] font-bold uppercase tracking-wider text-[#bbb] ${h === 'Nombre' ? 'flex-1' : 'w-20 shrink-0'}`}>{h}</div>
        ))}
      </div>
      <div className="flex-1 overflow-hidden divide-y divide-[#fafafa]">
        {docs.map(doc => (
          <div key={doc.code} className="flex items-center gap-3 px-5 py-3 hover:bg-[#fafafa] transition-colors cursor-default">
            <div className="w-20 shrink-0 text-[11px] text-[#999] font-mono">{doc.code}</div>
            <div className="flex-1 text-[12px] font-medium text-[#1f2020]">{doc.name}</div>
            <div className="w-20 shrink-0 text-[11px] text-[#bbb]">{doc.ver}</div>
            <div className="w-20 shrink-0 text-[11px] text-[#999]">{doc.vigencia}</div>
            <div className="w-20 shrink-0">
              <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full" style={{ color: doc.color, background: `${doc.color}18` }}>{doc.status}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupAuditorias() {
  const clausulas = [
    { num: '4.1', name: 'Contexto de la organización', ok: true, findings: 0 },
    { num: '4.2', name: 'Partes interesadas', ok: true, findings: 0 },
    { num: '6.1', name: 'Riesgos y oportunidades', ok: true, findings: 1 },
    { num: '7.2', name: 'Competencia del personal', ok: false, findings: 2 },
    { num: '8.1', name: 'Planificación y control operacional', ok: false, findings: 0 },
    { num: '9.1', name: 'Seguimiento y medición', ok: false, findings: 0 },
    { num: '10.2', name: 'No conformidades', ok: false, findings: 0 },
  ]
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0]">
        <div>
          <div className="text-[#1f2020] font-semibold text-sm">Auditoría Interna Q2 · 2025</div>
          <div className="text-[#999] text-[10px] mt-0.5">ISO 9001:2015 · Auditor: M. García</div>
        </div>
        <span className="text-[10px] bg-[#ffbd2e]/15 text-[#b8860b] font-semibold px-2.5 py-1 rounded-full">En progreso</span>
      </div>
      <div className="px-5 py-3 border-b border-[#f5f5f5]">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-[10px] text-[#999]">Progreso general</span>
          <span className="text-[10px] font-bold text-[#763d50]">43%</span>
        </div>
        <div className="h-2 rounded-full bg-[#f0f0f0] overflow-hidden">
          <div className="h-full rounded-full" style={{ width: '43%', background: '#763d50' }} />
        </div>
      </div>
      <div className="flex-1 overflow-hidden divide-y divide-[#fafafa] px-5">
        {clausulas.map(c => (
          <div key={c.num} className="flex items-center gap-3 py-2.5">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[9px] font-bold shrink-0 ${c.ok ? 'bg-[#27c93f] text-white' : 'border-2 border-[#e0e0e0]'}`}>
              {c.ok ? '✓' : ''}
            </div>
            <div className="flex-1">
              <span className="text-[10px] font-semibold text-[#999] mr-2">{c.num}</span>
              <span className={`text-[11px] ${c.ok ? 'text-[#1f2020]' : 'text-[#bbb]'}`}>{c.name}</span>
            </div>
            {c.findings > 0 && (
              <span className="text-[9px] font-bold px-2 py-0.5 rounded-full bg-[#ff5f56]/10 text-[#ff5f56]">{c.findings} NC</span>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupCAPA() {
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0]">
        <div>
          <div className="text-[#1f2020] font-semibold text-sm">NC-047 · Desviación en sellado</div>
          <div className="text-[#999] text-[10px] mt-0.5">Abierta: 12 feb 2025 · Vence: 28 abr 2025</div>
        </div>
        <span className="text-[10px] bg-[#ffbd2e]/15 text-[#b8860b] font-semibold px-2.5 py-1 rounded-full">En progreso</span>
      </div>
      <div className="flex-1 overflow-hidden p-5 flex flex-col gap-4">
        {[
          { step: '1', label: 'Descripción del problema', done: true, content: 'Sellado deficiente en línea 3 detectado en auditoría de proceso. Afecta lotes del 10–14 feb.' },
          { step: '2', label: 'Análisis de causa raíz (5 Porqués)', done: true, content: 'Causa raíz: temperatura de selladora fuera de rango por sensor descalibrado. Calibración EQ-07 vencida.' },
          { step: '3', label: 'Plan de acción correctiva', done: true, content: '1) Recalibrar EQ-07 (hecho). 2) Revisar lotes afectados. 3) Actualizar frecuencia de calibración en procedimiento.' },
          { step: '4', label: 'Verificación de eficacia', done: false, content: 'Pendiente — Próxima auditoría: 28 abr 2025' },
        ].map(item => (
          <div key={item.step} className="flex gap-3">
            <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5 ${item.done ? 'bg-[#763d50] text-white' : 'border-2 border-[#e0e0e0] text-[#bbb]'}`}>
              {item.done ? '✓' : item.step}
            </div>
            <div className="flex-1">
              <div className={`text-[11px] font-semibold mb-1 ${item.done ? 'text-[#1f2020]' : 'text-[#ccc]'}`}>{item.label}</div>
              <div className={`text-[10px] leading-relaxed ${item.done ? 'text-[#888]' : 'text-[#ddd]'}`}>{item.content}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function MockupIndicadores() {
  const kpis = [
    { label: 'Índice CMS', value: '94%', change: '+3%', bars: [72, 78, 80, 85, 88, 91, 94] },
    { label: 'No conformidades cerradas / mes', value: '8', change: '+2', bars: [4, 5, 6, 5, 7, 6, 8] },
    { label: 'Documentos vigentes', value: '97%', change: '+1%', bars: [90, 91, 93, 93, 95, 96, 97] },
  ]
  const maxBar = 100
  return (
    <div className="h-full flex flex-col bg-white rounded-2xl overflow-hidden border border-[#e8e8e8]">
      <div className="flex items-center justify-between px-5 py-4 border-b border-[#f0f0f0]">
        <span className="text-[#1f2020] font-semibold text-sm">Indicadores del SGC</span>
        <span className="text-[10px] text-[#999]">Últimos 7 meses</span>
      </div>
      <div className="flex-1 overflow-hidden p-5 flex flex-col gap-5">
        {kpis.map(kpi => (
          <div key={kpi.label} className="bg-[#fafafa] rounded-2xl p-4 border border-[#f0f0f0]">
            <div className="flex items-end justify-between mb-3">
              <div>
                <div className="text-[10px] text-[#999] font-medium uppercase tracking-wide mb-1">{kpi.label}</div>
                <div className="text-2xl font-bold text-[#1f2020]">{kpi.value}</div>
              </div>
              <span className="text-[11px] font-semibold text-[#27c93f] bg-[#27c93f]/10 px-2 py-0.5 rounded-full">{kpi.change}</span>
            </div>
            <div className="flex items-end gap-1 h-10">
              {kpi.bars.map((v, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{
                  height: `${(v / maxBar) * 100}%`,
                  background: i === kpi.bars.length - 1 ? '#763d50' : 'rgba(118,61,80,0.15)',
                }} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

// --- Feature tabs ---

const FEATURES = [
  {
    id: 'agente',
    label: 'Agente IA',
    icon: 'shieldCheck' as IconKey,
    description: 'Tu experto 24/7 que conoce tu norma, detecta brechas y genera planes de acción.',
    mockup: <MockupAgenteIA />,
  },
  {
    id: 'documentos',
    label: 'Gestión documental',
    icon: 'document' as IconKey,
    description: 'Documentos versionados, aprobaciones digitales y alertas de vencimiento automáticas.',
    mockup: <MockupDocumentos />,
  },
  {
    id: 'auditorias',
    label: 'Auditorías',
    icon: 'magnifier' as IconKey,
    description: 'Planifica, ejecuta y da seguimiento a auditorías internas y externas por cláusula.',
    mockup: <MockupAuditorias />,
  },
  {
    id: 'capa',
    label: 'No conformidades',
    icon: 'arrowCycle' as IconKey,
    description: 'Acciones correctivas con análisis de causa raíz, seguimiento y cierre verificado.',
    mockup: <MockupCAPA />,
  },
  {
    id: 'indicadores',
    label: 'Indicadores',
    icon: 'chartBar' as IconKey,
    description: 'KPIs y dashboards en tiempo real para decisiones basadas en datos reales.',
    mockup: <MockupIndicadores />,
  },
]

function CapabilitiesSection() {
  const [active, setActive] = useState(0)

  return (
    <section id="funcionalidades" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#763d50] mb-4">Funcionalidades</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1f2020] leading-tight">
            Cada módulo,<br />diseñado para certificar.
          </h2>
        </div>

        {/* Split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">

          {/* Left: feature list */}
          <div className="lg:col-span-2 flex flex-col gap-1">
            {FEATURES.map((f, i) => (
              <button
                key={f.id}
                onClick={() => setActive(i)}
                className={`text-left rounded-2xl px-5 py-4 transition-all duration-200 group ${
                  active === i ? 'bg-[#f8f4f5] border border-[#e8d8dc]' : 'hover:bg-[#fafafa] border border-transparent'
                }`}
              >
                <div className="flex items-center gap-3 mb-1.5">
                  <div className={`w-7 h-7 rounded-lg flex items-center justify-center shrink-0 transition-colors ${active === i ? 'bg-[#763d50]' : 'bg-[#f0f0f0] group-hover:bg-[#ebebeb]'}`}>
                    <Icon name={f.icon} className={`w-3.5 h-3.5 ${active === i ? 'text-white' : 'text-[#999]'}`} />
                  </div>
                  <span className={`text-sm font-semibold transition-colors ${active === i ? 'text-[#763d50]' : 'text-[#1f2020]'}`}>{f.label}</span>
                </div>
                {active === i && (
                  <p className="text-[12px] text-[#3a3a3a]/60 leading-relaxed pl-10">{f.description}</p>
                )}
              </button>
            ))}
          </div>

          {/* Right: close-up mockup */}
          <div className="lg:col-span-3" style={{ height: '480px' }}>
            {FEATURES[active].mockup}
          </div>

        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Section 4 — CTA
// ---------------------------------------------------------------------------
function CTASection() {
  return (
    <section className="py-24 bg-white border-t border-[#efefef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-[#763d50] mb-4">
          Empieza hoy
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-[#1f2020] leading-tight mb-6">
          Tu primera auditoría aprobada te espera.
        </h2>
        <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
          Únete a las empresas que ya gestionan su calidad con inteligencia. Sin
          implementaciones largas, sin curva de aprendizaje interminable.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contacto"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm whitespace-nowrap"
          >
            Agendar demo gratuita
          </Link>
          <Link
            href="#funcionalidades"
            className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap"
          >
            Hablar con un consultor
          </Link>
        </div>
      </div>
    </section>
  )
}

// ---------------------------------------------------------------------------
// Main export
// ---------------------------------------------------------------------------
export function PlataformaPage() {
  return (
    <>
      <style>{`
        @keyframes tile-shimmer {
          0%, 100% { background-color: rgba(0,0,0,0.03); }
          50%       { background-color: rgba(0,0,0,0.08); }
        }
        @keyframes grid-drift {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes logo-glow {
          0%, 100% {
            box-shadow: 0 0 24px rgba(118,61,80,0.5), 0 0 48px rgba(118,61,80,0.2);
          }
          50% {
            box-shadow: 0 0 40px rgba(118,61,80,0.8), 0 0 80px rgba(118,61,80,0.3);
          }
        }
        @keyframes scroll-up {
          from { transform: translateY(0); }
          to   { transform: translateY(-50%); }
        }
        @keyframes scroll-down {
          from { transform: translateY(-50%); }
          to   { transform: translateY(0); }
        }
        @keyframes scroll-left {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes scroll-right {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
      `}</style>
      <HeroSection />
      <ProductShowcaseSection />
      <CapabilitiesSection />
      <BuiltDifferentSection />
      <CTASection />
    </>
  )
}
