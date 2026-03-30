'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'

// ─── Scroll-reveal hook ───────────────────────────────────────────────────────

function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed')
          observer.disconnect()
        }
      },
      { threshold }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])

  return ref
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────

function Reveal({
  children,
  className = '',
  delay = 0,
  from = 'bottom',
}: {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}) {
  const ref = useReveal()
  const translateMap = {
    bottom: 'translateY(48px)',
    left: 'translateX(-160px)',
    right: 'translateX(160px)',
  }

  return (
    <div
      ref={ref}
      className={`reveal-base ${className}`}
      style={{
        opacity: 0,
        transform: translateMap[from],
        transition: `opacity 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.9s cubic-bezier(0.16,1,0.3,1) ${delay}ms`,
      }}
    >
      {children}
      <style>{`.revealed { opacity: 1 !important; transform: none !important; }`}</style>
    </div>
  )
}

// ─── Use-case card icons ──────────────────────────────────────────────────────

const USE_CASES = [
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
      </svg>
    ),
    title: 'Preguntas sobre normas',
    description: 'Responde al instante cualquier duda sobre ISO 9001, ISO 14001, FSSC 22000 y más, en el contexto de tu empresa.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
      </svg>
    ),
    title: 'Generación de documentos',
    description: 'Redacta procedimientos, políticas y registros adaptados a tu empresa en minutos, no en semanas.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    ),
    title: 'Preparación de auditorías',
    description: 'Identifica brechas, organiza evidencias y prepara a tu equipo antes de que llegue el auditor.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
      </svg>
    ),
    title: 'Análisis de no conformidades',
    description: 'Apoya el análisis de causa raíz y sugiere acciones correctivas basadas en tu historial del sistema.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
      </svg>
    ),
    title: 'Recordatorios automáticos',
    description: 'Notifica a tu equipo de tareas pendientes, vencimientos de documentos y fechas críticas de auditoría.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 3.741-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
      </svg>
    ),
    title: 'Capacitación del equipo',
    description: 'Explica procesos y normas a nuevos integrantes del equipo de forma clara y consistente, siempre disponible.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
      </svg>
    ),
    title: 'Mejora continua',
    description: 'Analiza tendencias en tu sistema, detecta oportunidades de mejora y genera reportes para la revisión por la dirección.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
    ),
    title: 'Revisión de evidencias',
    description: 'Busca y recupera registros, documentos y evidencias específicas en segundos para responder a cualquier hallazgo.',
  },
]

// ─── Feature sections data ────────────────────────────────────────────────────

const FEATURES = [
  {
    tag: 'Disponibilidad 24/7',
    title: 'El consultor que nunca descansa',
    description:
      'A las 11pm antes de una auditoría, a las 7am cuando el turno empieza. Tu agente IA siempre está disponible para resolver dudas, guiar procedimientos y mantener tu sistema en orden. Sin horas facturadas, sin tiempos de espera.',
    stat: { value: '24/7', label: 'Disponibilidad garantizada' },
    mockupBg: '#faf5f6',
    mockupContent: (
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-center gap-2 mb-1">
          <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          <span className="text-[#763d50] text-xs font-semibold uppercase tracking-widest">Agente IA · En línea</span>
        </div>
        {[
          { from: 'user', text: '¿Cuántos registros de calibración necesito para ISO 9001?' },
          { from: 'ai', text: 'Para ISO 9001:2015 cláusula 7.1.5, necesitas registros de calibración que incluyan: identificación del equipo, fecha, método, criterios de aceptación y resultado. Te genero la plantilla ahora.' },
          { from: 'user', text: 'Perfecto, genérala.' },
        ].map((msg, i) => (
          <div
            key={i}
            className={`rounded-xl px-4 py-2.5 text-xs leading-relaxed max-w-[85%] ${
              msg.from === 'user'
                ? 'bg-[#f0f0f0] text-[#3a3a3a] self-start'
                : 'bg-[#763d50] text-white self-end'
            }`}
          >
            {msg.text}
          </div>
        ))}
        <div className="flex items-center gap-2 self-end mt-1">
          <div className="flex gap-1">
            {[0, 1, 2].map(i => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#763d50]/50 animate-bounce" style={{ animationDelay: `${i * 150}ms` }} />
            ))}
          </div>
          <span className="text-[10px] text-[#3a3a3a]/40">Generando...</span>
        </div>
      </div>
    ),
  },
  {
    tag: 'Contexto profundo',
    title: 'Entrenado en tu empresa, tu norma y tu sistema',
    description:
      'No es un chatbot genérico. Antes de responder, el agente IA procesa el contexto completo de tu empresa: qué norma llevas, en qué industria operas, qué documentos tienes activos y cuál es tu historial de auditorías.',
    stat: { value: '100%', label: 'Contextual a tu operación' },
    mockupBg: '#f0f3f5',
    mockupContent: (
      <div className="p-5 flex flex-col gap-3">
        <p className="text-[#2e3e49] text-xs font-semibold uppercase tracking-widest mb-1">Contexto activo</p>
        {[
          { label: 'Empresa', value: 'Manufactura del Norte S.A.' },
          { label: 'Norma', value: 'ISO 9001:2015' },
          { label: 'Industria', value: 'Manufactura' },
          { label: 'Próxima auditoría', value: '28 Abr 2025' },
          { label: 'Documentos activos', value: '24 documentos' },
          { label: 'CAPAs abiertas', value: '3 acciones' },
        ].map(item => (
          <div key={item.label} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-[#e8e8e8]">
            <span className="text-[#3a3a3a]/50 text-xs">{item.label}</span>
            <span className="text-[#1f2020] text-xs font-semibold">{item.value}</span>
          </div>
        ))}
      </div>
    ),
  },
  {
    tag: 'Generación de documentos',
    title: 'Procedimientos y políticas en minutos',
    description:
      'Describe el proceso y el agente IA genera el procedimiento completo: objetivo, alcance, responsables, descripción del proceso y registros asociados. Adaptado al lenguaje y estructura de tu empresa, listo para aprobar.',
    stat: { value: '−80%', label: 'Tiempo en documentación' },
    mockupBg: '#faf5f6',
    mockupContent: (
      <div className="p-5 flex flex-col gap-2.5">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#763d50] text-xs font-semibold uppercase tracking-widest">Documento generado</p>
          <span className="bg-green-100 text-green-700 text-[10px] font-semibold px-2 py-0.5 rounded-full">Listo para aprobar</span>
        </div>
        <div className="bg-white rounded-xl border border-[#e8e8e8] p-4 flex flex-col gap-2">
          <p className="text-[#1f2020] text-xs font-bold">PR-07 · Procedimiento de Auditorías Internas</p>
          <p className="text-[#3a3a3a]/50 text-[10px]">Versión 1.0 · Generado por Agente IA · Pendiente de aprobación</p>
          <div className="border-t border-[#f0f0f0] pt-2 mt-1 flex flex-col gap-1.5">
            {['1. Objetivo', '2. Alcance', '3. Responsables', '4. Descripción del proceso', '5. Registros asociados'].map(s => (
              <div key={s} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#763d50]" />
                <span className="text-[#3a3a3a]/70 text-[10px]">{s}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    tag: 'Preparación de auditorías',
    title: 'Llega a la auditoría sin sorpresas',
    description:
      'Semanas antes de tu auditoría, el agente IA analiza tu sistema completo: revisa cada cláusula de la norma, compara contra tu evidencia disponible e identifica exactamente qué falta corregir. Un plan de acción claro, con responsables y fechas.',
    stat: { value: '98%', label: 'De aprobación al primer intento' },
    mockupBg: '#f0f3f5',
    mockupContent: (
      <div className="p-5 flex flex-col gap-3">
        <div className="flex items-center justify-between mb-1">
          <p className="text-[#2e3e49] text-xs font-semibold uppercase tracking-widest">Análisis pre-auditoría</p>
          <span className="text-[10px] text-[#3a3a3a]/40">14 días restantes</span>
        </div>
        {[
          { clause: '4.1 Contexto', status: 'ok' },
          { clause: '6.1 Riesgos y oportunidades', status: 'ok' },
          { clause: '7.2 Competencia del personal', status: 'warn' },
          { clause: '8.4 Control de procesos externos', status: 'warn' },
          { clause: '9.1 Seguimiento y medición', status: 'ok' },
          { clause: '10.2 No conformidad y CAPA', status: 'err' },
        ].map(item => (
          <div key={item.clause} className="flex items-center justify-between bg-white rounded-lg px-3 py-2 border border-[#e8e8e8]">
            <span className="text-[#1f2020] text-xs">{item.clause}</span>
            <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${
              item.status === 'ok' ? 'bg-green-100 text-green-700' :
              item.status === 'warn' ? 'bg-amber-100 text-amber-700' :
              'bg-red-100 text-red-700'
            }`}>
              {item.status === 'ok' ? 'Completo' : item.status === 'warn' ? 'Revisar' : 'Faltante'}
            </span>
          </div>
        ))}
      </div>
    ),
  },
]

// ─── Demo Chat Section ────────────────────────────────────────────────────────

const CHAT_MESSAGES = [
  {
    from: 'ai' as const,
    label: 'Consultto · Agente IA',
    text: 'Buenos días, Carlos 👋 Te recuerdo que la versión 6 de la Matriz de riesgos (MR-006) vence en 3 días, el 30 Mar. Como responsable de calidad, necesitas aprobarla antes de esa fecha.\n\n¿Quieres revisarla ahora o la apruebas directamente desde aquí?',
  },
  { from: 'user' as const, text: 'Muéstrame qué cambió respecto a la versión anterior.' },
  {
    from: 'ai' as const,
    label: 'Consultto · Agente IA',
    text: 'La v6 agrega 3 riesgos nuevos de la auditoría de enero:\n• R-14: calibración de equipos\n• R-15: rotación de personal\n• R-16: proveedor único\n\n¿Apruebas aquí o abres el documento?',
  },
  { from: 'user' as const, text: 'La apruebo. Registra mi firma.' },
  {
    from: 'ai' as const,
    label: 'Consultto · Agente IA',
    text: '✅ Listo, Carlos. La versión 6 de la Matriz de riesgos quedó aprobada y firmada el 27 Mar a las 10:14 AM. El documento ya está vigente en el sistema.',
  },
]

const HEAT = [3,1,4,2,0,3,4, 2,3,1,4,3,2,1, 0,2,3,4,2,1,3, 4,3,2,1,4,3,2, 1,2,4,3,0,2,3]
const HEAT_COLORS = ['bg-white/[0.03]','bg-[#763d50]/20','bg-[#763d50]/40','bg-[#763d50]/60','bg-[#763d50]/80']

function DemoChatSection() {
  const sectionRef   = useRef<HTMLDivElement>(null)
  const msgsRef      = useRef<HTMLDivElement>(null)
  const [started, setStarted]         = useState(false)
  const [visibleCount, setVisibleCount] = useState(0)
  const [showTyping, setShowTyping]   = useState<null | 'ai' | 'user'>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
      { threshold: 0.35 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started) return
    const schedule = [
      { action: 'typing-ai',   t: 500   },  // agente empieza a escribir
      { action: 'msg0',        t: 2000  },  // agente envía
      { action: 'typing-user', t: 2100  },  // Carlos empieza a escribir inmediatamente
      { action: 'msg1',        t: 6000  },  // Carlos envía (4s para leer msg0)
      { action: 'typing-ai',   t: 6100  },  // agente empieza a escribir inmediatamente
      { action: 'msg2',        t: 9800  },  // agente envía
      { action: 'typing-user', t: 9900  },  // Carlos empieza a escribir inmediatamente
      { action: 'msg3',        t: 15500 },  // Carlos envía (5.5s para leer msg2)
      { action: 'typing-ai',   t: 15600 },  // agente empieza a escribir inmediatamente
      { action: 'msg4',        t: 18000 },  // agente confirma la aprobación
    ]
    const timers = schedule.map(({ action, t }) =>
      setTimeout(() => {
        if (action === 'typing-ai') {
          setShowTyping('ai')
        } else if (action === 'typing-user') {
          setShowTyping('user')
        } else {
          setVisibleCount(parseInt(action.replace('msg', '')) + 1)
          setShowTyping(null)
        }
      }, t)
    )
    return () => timers.forEach(clearTimeout)
  }, [started])

  // Auto-scroll chat to bottom — instant to avoid jump when typing→message transition
  useEffect(() => {
    const el = msgsRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [visibleCount, showTyping])

  const Panel = ({ children, className = '' }: { children: ReactNode; className?: string }) => (
    <div className={`bg-[#1a1d24] border border-white/[0.06] rounded-xl ${className}`}>{children}</div>
  )
  const Label = ({ children }: { children: ReactNode }) => (
    <p className="text-[7px] text-white/25 uppercase tracking-widest mb-2">{children}</p>
  )

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-[#0f1115]" style={{ height: '860px' }}>

      {/* ── Dashboard (fills entire section) ── */}
      <div className="absolute inset-0 flex gap-2 p-4 pointer-events-none select-none opacity-65">

        {/* ── Col 0 (extra left) ── */}
        <div className="flex flex-col gap-2 w-36 shrink-0 h-full overflow-hidden">
          <Panel className="p-3 shrink-0">
            <Label>Norma activa</Label>
            <p className="text-[10px] font-bold text-white/60 mb-1">ISO 9001:2015</p>
            <p className="text-[6px] text-white/20 mb-2">Sistemas de Gestión de Calidad</p>
            <div className="flex flex-col gap-1">
              {[{ k: 'CLÁUSULAS', v: '10' }, { k: 'REQUISITOS', v: '247' }, { k: 'EVIDENCIAS', v: '89' }].map(r => (
                <div key={r.k} className="flex justify-between">
                  <span className="text-[6px] text-white/20">{r.k}</span>
                  <span className="text-[7px] text-white/50 font-semibold">{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>
          <Panel className="p-3 shrink-0">
            <Label>Otras normas</Label>
            {[
              { n: 'ISO 14001', s: 'Activa' },
              { n: 'FSSC 22000', s: 'Activa' },
              { n: 'ISO 45001', s: 'Próxima' },
              { n: 'ISO 27001', s: 'Evaluando' },
            ].map((n, i) => (
              <div key={i} className="flex items-center justify-between mb-1.5">
                <span className="text-[7px] text-white/35">{n.n}</span>
                <span className={`text-[6px] px-1.5 py-0.5 rounded-full font-medium ${
                  n.s === 'Activa' ? 'bg-green-500/15 text-green-400/60' :
                  n.s === 'Próxima' ? 'bg-amber-500/15 text-amber-400/60' :
                  'bg-white/[0.05] text-white/25'
                }`}>{n.s}</span>
              </div>
            ))}
          </Panel>
          <Panel className="p-3 shrink-0">
            <Label>Próx. auditoría</Label>
            <p className="text-[11px] font-bold text-[#763d50]/80 mb-0.5">14 días</p>
            <p className="text-[6px] text-white/20 mb-2">28 Abr · ISO 9001:2015</p>
            <div className="h-1.5 bg-white/[0.05] rounded-full overflow-hidden">
              <div className="h-full bg-[#763d50]/60 rounded-full" style={{ width: '65%' }}/>
            </div>
            <p className="text-[6px] text-white/15 mt-1">Preparación: 65%</p>
          </Panel>
          <Panel className="p-3 shrink-0">
            <Label>Mini radar</Label>
            <svg viewBox="0 0 80 80" className="w-full h-16">
              {[0,1,2,3,4].map(i => {
                const r = 10 + i * 7
                const pts = [0,1,2,3,4,5].map(j => {
                  const a = (j * Math.PI * 2) / 6 - Math.PI / 2
                  return `${40 + r * Math.cos(a)},${40 + r * Math.sin(a)}`
                }).join(' ')
                return <polygon key={i} points={pts} fill="none" stroke="#ffffff08" strokeWidth="0.5"/>
              })}
              {[0,1,2,3,4,5].map(j => {
                const a = (j * Math.PI * 2) / 6 - Math.PI / 2
                return <line key={j} x1="40" y1="40" x2={40 + 45 * Math.cos(a)} y2={40 + 45 * Math.sin(a)} stroke="#ffffff08" strokeWidth="0.5"/>
              })}
              <polygon
                points={[92,78,85,61,74,88,96,70,83].map((v, i) => {
                  const r = (v / 100) * 35
                  const a = (i * Math.PI * 2) / 6 - Math.PI / 2
                  return `${40 + r * Math.cos(a)},${40 + r * Math.sin(a)}`
                }).join(' ')}
                fill="#763d50" fillOpacity="0.2" stroke="#763d50" strokeWidth="1"
              />
            </svg>
          </Panel>
          <Panel className="p-3">
            <Label>Agente activo</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { k: 'MODELO', v: 'GPT-4o' },
                { k: 'TOKENS HOY', v: '48,291' },
                { k: 'LATENCIA', v: '1.2s' },
                { k: 'UPTIME', v: '99.9%' },
                { k: 'VERSIÓN', v: '2.4.1' },
              ].map(r => (
                <div key={r.k} className="flex justify-between">
                  <span className="text-[6px] text-white/20">{r.k}</span>
                  <span className="text-[7px] text-white/45 font-mono">{r.v}</span>
                </div>
              ))}
              <div className="mt-2 h-px bg-white/[0.06]"/>
              <div className="flex items-center gap-1.5 mt-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                <span className="text-[6px] text-green-400/60">Sistema operativo</span>
              </div>
            </div>
          </Panel>
          <Panel className="p-3">
            <Label>Configuración IA</Label>
            {[
              { k: 'TEMPERATURA', v: '0.3' },
              { k: 'MAX TOKENS', v: '4,096' },
              { k: 'CONTEXTO', v: '128k' },
              { k: 'IDIOMA', v: 'ES/EN' },
            ].map(r => (
              <div key={r.k} className="flex justify-between mb-1">
                <span className="text-[6px] text-white/20">{r.k}</span>
                <span className="text-[7px] text-white/40 font-mono">{r.v}</span>
              </div>
            ))}
          </Panel>
          <Panel className="p-3 flex-1">
            <Label>Último análisis</Label>
            <p className="text-[7px] text-white/35 leading-relaxed">Sistema analizado el 27 Mar a las 11:47. Se detectaron 3 brechas críticas y 2 observaciones menores antes de la auditoría del 28 Abr.</p>
          </Panel>
        </div>

        {/* ── Col 1 ── */}
        <div className="flex flex-col gap-2 w-44 shrink-0 h-full overflow-hidden">
          {/* Donut */}
          <Panel className="p-4 flex flex-col items-center gap-3 shrink-0">
            <div className="relative w-20 h-20">
              <svg viewBox="0 0 36 36" className="w-full h-full -rotate-90">
                <circle cx="18" cy="18" r="13" fill="none" stroke="#ffffff08" strokeWidth="4"/>
                <circle cx="18" cy="18" r="13" fill="none" stroke="#763d50" strokeWidth="4" strokeDasharray="61 82" strokeLinecap="round"/>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center flex-col">
                <span className="text-white text-sm font-bold">75%</span>
                <span className="text-white/25 text-[7px]">cumplimiento</span>
              </div>
            </div>
            <div className="w-full flex flex-col gap-1.5">
              {[
                { label: 'CUMPLIMIENTO', value: '67.3%', color: '#763d50' },
                { label: 'OBSERVACIONES', value: '21.5%', color: '#d9d9d9' },
                { label: 'NO CONF.', value: '11.2%', color: '#ffffff20' },
              ].map(item => (
                <div key={item.label} className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }}/>
                    <span className="text-[7px] text-white/30">{item.label}</span>
                  </div>
                  <span className="text-[7px] text-white/55 font-semibold">{item.value}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Gestión */}
          <Panel className="p-3 shrink-0">
            <Label>Gestión de auditorías</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { k: 'TASA APROBACIÓN', v: '94%', hi: true },
                { k: 'REGISTROS', v: '1,247', hi: false },
                { k: 'CAPAs ABIERTAS', v: '3', hi: false },
                { k: 'DOCS ACTIVOS', v: '24', hi: false },
                { k: 'PRÓX. AUDITORÍA', v: '14 días', hi: false },
              ].map(r => (
                <div key={r.k} className="flex justify-between items-center">
                  <span className="text-[7px] text-white/28">{r.k}</span>
                  <span className={`text-[7px] font-semibold ${r.hi ? 'text-green-400/70' : 'text-white/55'}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Activity heatmap */}
          <Panel className="p-3 shrink-0">
            <Label>Actividad del sistema</Label>
            <div className="grid gap-0.5" style={{ gridTemplateColumns: 'repeat(7, 1fr)' }}>
              {HEAT.map((v, i) => (
                <div key={i} className={`rounded-sm aspect-square ${HEAT_COLORS[v]}`}/>
              ))}
            </div>
            <div className="flex justify-between mt-1.5">
              {['L','M','X','J','V','S','D'].map(d => (
                <span key={d} className="text-[6px] text-white/15 flex-1 text-center">{d}</span>
              ))}
            </div>
          </Panel>

          {/* Mini KPIs */}
          <Panel className="p-3 shrink-0">
            <div className="grid grid-cols-2 gap-2">
              {[
                { label: 'RESOLUCIÓN', v: '94%' },
                { label: 'SATISFAC.', v: '4.8★' },
                { label: 'RESP. PROM', v: '2.3s' },
                { label: 'CONSULTAS', v: '1,247' },
              ].map(m => (
                <div key={m.label} className="bg-white/[0.03] rounded-lg p-2">
                  <p className="text-[6px] text-white/25 mb-0.5">{m.label}</p>
                  <p className="text-[10px] font-bold text-white/60">{m.v}</p>
                </div>
              ))}
            </div>
          </Panel>

          {/* Tendencia cumplimiento */}
          <Panel className="p-3">
            <Label>Tendencia cumplimiento</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { mes: 'OCT', v: 51 }, { mes: 'NOV', v: 55 }, { mes: 'DIC', v: 58 },
                { mes: 'ENE', v: 63 }, { mes: 'FEB', v: 68 }, { mes: 'MAR', v: 71 },
                { mes: 'ABR', v: 75 }, { mes: 'MAY', v: 79 },
              ].map(r => (
                <div key={r.mes} className="flex items-center gap-2">
                  <span className="text-[6px] text-white/20 w-5 shrink-0">{r.mes}</span>
                  <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#763d50]/50 rounded-full" style={{ width: `${r.v}%` }}/>
                  </div>
                  <span className="text-[6px] text-white/35 w-5 text-right">{r.v}%</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>CAPAs por tipo</Label>
            <div className="flex items-end gap-1 h-10 mb-1">
              {[
                { l: 'Correc.', v: 70, c: 'bg-[#763d50]/50' },
                { l: 'Prev.', v: 45, c: 'bg-blue-400/30' },
                { l: 'Mejora', v: 30, c: 'bg-green-400/30' },
                { l: 'Externas', v: 55, c: 'bg-amber-400/30' },
              ].map(b => (
                <div key={b.l} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className={`w-full rounded-sm ${b.c}`} style={{ height: `${b.v}%` }}/>
                  <span className="text-[5px] text-white/15">{b.l}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3 flex-1">
            <Label>Eficiencia documental</Label>
            <div className="flex justify-between mb-2">
              <div className="text-center">
                <p className="text-[11px] font-bold text-white/60">89%</p>
                <p className="text-[6px] text-white/20">Vigentes</p>
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold text-amber-400/60">8%</p>
                <p className="text-[6px] text-white/20">Por revisar</p>
              </div>
              <div className="text-center">
                <p className="text-[11px] font-bold text-red-400/50">3%</p>
                <p className="text-[6px] text-white/20">Vencidos</p>
              </div>
            </div>
            <div className="flex h-1.5 rounded-full overflow-hidden gap-0.5">
              <div className="bg-[#763d50]/50 rounded-full" style={{ width: '89%' }}/>
              <div className="bg-amber-400/40 rounded-full" style={{ width: '8%' }}/>
              <div className="bg-red-400/40 rounded-full" style={{ width: '3%' }}/>
            </div>
          </Panel>
        </div>

        {/* ── Col 2 ── */}
        <div className="flex flex-col gap-2 w-48 shrink-0 h-full overflow-hidden">
          {/* Instrucciones */}
          <Panel className="p-3 shrink-0">
            <Label>Instrucciones de contexto</Label>
            <ol className="flex flex-col gap-1.5">
              {[
                <><span className="bg-[#763d50]/25 text-[#763d50] text-[6px] px-1 py-0.5 rounded font-mono">USAR: OBTENER_DATOS</span> para historial de auditorías.</>,
                'Confirmar norma y cláusulas aplicables al caso.',
                'Generar plan de acción con responsables y fechas.',
              ].map((step, i) => (
                <li key={i} className="flex gap-1.5 text-[8px] text-white/35">
                  <span className="text-white/20 shrink-0">{i + 1}.</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </Panel>

          {/* Actions */}
          <Panel className="p-3 shrink-0">
            <Label>Acciones disponibles</Label>
            {[
              { code: 'REVISAR_CLAUSULA', desc: 'Verifica requisitos ISO' },
              { code: 'GENERAR_CAPA', desc: 'Crea acción correctiva' },
              { code: 'BUSCAR_EVIDENCIA', desc: 'Recupera registros' },
            ].map(a => (
              <div key={a.code} className="flex items-center gap-2 mb-1.5">
                <div className="w-4 h-4 rounded bg-[#763d50]/20 flex items-center justify-center shrink-0">
                  <span className="text-[6px] text-[#763d50] font-bold">›</span>
                </div>
                <div>
                  <p className="text-[7px] text-white/55 font-medium font-mono">{a.code}</p>
                  <p className="text-[6px] text-white/25">{a.desc}</p>
                </div>
              </div>
            ))}
          </Panel>

          {/* Empresa info */}
          <Panel className="p-3 shrink-0">
            <Label>Información de empresa</Label>
            {[
              { k: 'EMPRESA', v: 'Manufactura del Norte' },
              { k: 'NORMA', v: 'ISO 9001:2015' },
              { k: 'INDUSTRIA', v: 'MANUFACTURA' },
              { k: 'PAÍS', v: 'MÉXICO' },
              { k: 'PLAN', v: 'BÁSICO' },
            ].map(r => (
              <div key={r.k} className="flex justify-between mb-1">
                <span className="text-[7px] text-white/25">{r.k}</span>
                <span className="text-[7px] text-white/55">{r.v}</span>
              </div>
            ))}
          </Panel>

          {/* Log de actividad */}
          <Panel className="p-3">
            <Label>Log de actividad IA</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { t: '11:47', a: 'Cláusula 7.1.5 verificada', s: 'ok' },
                { t: '11:45', a: 'Documento PR-07 generado', s: 'ok' },
                { t: '11:42', a: 'CAPA-003 analizada', s: 'warn' },
                { t: '11:38', a: 'Calibración: 4 equipos sin registro', s: 'err' },
                { t: '11:30', a: 'Contexto empresa cargado', s: 'ok' },
                { t: '11:25', a: 'Pre-análisis auditoría iniciado', s: 'ok' },
                { t: '11:10', a: 'RE-12 competencia actualizada', s: 'warn' },
                { t: '11:02', a: 'Indicadores 9.1 calculados', s: 'ok' },
                { t: '10:55', a: 'Riesgo R-04 identificado', s: 'warn' },
                { t: '10:48', a: 'Sesión iniciada · empresa cargada', s: 'ok' },
              ].map((l, i) => (
                <div key={i} className="flex items-start gap-2">
                  <span className="text-[6px] text-white/20 shrink-0 mt-0.5">{l.t}</span>
                  <div className={`w-1 h-1 rounded-full shrink-0 mt-1 ${l.s === 'ok' ? 'bg-green-400/60' : l.s === 'warn' ? 'bg-amber-400/60' : 'bg-red-400/60'}`}/>
                  <span className="text-[7px] text-white/35 leading-tight">{l.a}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>Canales activos</Label>
            <div className="flex gap-1.5 flex-wrap">
              {[
                { icon: '📄', label: 'Docs' }, { icon: '📧', label: 'Email' },
                { icon: '🔔', label: 'Alertas' }, { icon: '📊', label: 'KPIs' },
                { icon: '🔍', label: 'Buscar' }, { icon: '📅', label: 'Cal.' },
              ].map((c) => (
                <div key={c.label} className="flex flex-col items-center gap-0.5">
                  <div className="w-7 h-7 rounded-lg bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-[11px]">{c.icon}</div>
                  <span className="text-[5px] text-white/15">{c.label}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3 flex-1">
            <Label>Aprendizaje continuo</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { l: 'Consultas procesadas', v: '1,247', c: 'text-white/50' },
                { l: 'Precisión respuestas', v: '97.4%', c: 'text-green-400/60' },
                { l: 'Feedback positivo', v: '94.1%', c: 'text-green-400/60' },
                { l: 'Correcciones', v: '31', c: 'text-amber-400/50' },
                { l: 'Reentrenamientos', v: '4', c: 'text-white/40' },
              ].map(r => (
                <div key={r.l} className="flex justify-between">
                  <span className="text-[6px] text-white/22">{r.l}</span>
                  <span className={`text-[7px] font-semibold ${r.c}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* ── Col 3 (behind chat) ── */}
        <div className="flex-1 flex flex-col gap-2 min-w-0 h-full overflow-hidden">
          {/* Bar chart */}
          <Panel className="p-3 shrink-0">
            <Label>Documentos activos por mes</Label>
            <div className="h-14 flex items-end gap-1">
              {[40,65,45,80,55,75,60,90,70,85,50,95].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#763d50]/25" style={{ height:`${h}%` }}/>
              ))}
            </div>
            <div className="flex justify-between text-[6px] text-white/15 mt-1">
              <span>MAR 1</span><span>MAR 7</span><span>MAR 14</span><span>MAR 21</span><span>MAR 28</span>
            </div>
          </Panel>

          {/* Status */}
          <Panel className="p-3 flex items-center justify-between shrink-0">
            <span className="text-[7px] text-white/35">¿EXISTEN PENALIZACIONES POR INCUMPLIMIENTO?</span>
            <span className="bg-amber-500/15 text-amber-400/70 text-[6px] font-semibold px-2 py-0.5 rounded-full shrink-0 ml-2">REVISAR</span>
          </Panel>

          {/* Cobertura cláusulas */}
          <Panel className="p-3 shrink-0">
            <Label>Cobertura ISO 9001:2015</Label>
            <div className="flex flex-col gap-2">
              {[
                { c: '4. Contexto de la org.', p: 92 },
                { c: '5. Liderazgo', p: 78 },
                { c: '6. Planificación', p: 85 },
                { c: '7. Apoyo', p: 61 },
                { c: '8. Operación', p: 74 },
                { c: '9. Evaluación del desempeño', p: 88 },
                { c: '10. Mejora', p: 55 },
              ].map(item => (
                <div key={item.c}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[7px] text-white/30 truncate">{item.c}</span>
                    <span className="text-[7px] text-white/50 font-semibold ml-2">{item.p}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.06] rounded-full overflow-hidden">
                    <div className="h-full rounded-full bg-[#763d50]/60" style={{ width: `${item.p}%` }}/>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          {/* Alertas recientes */}
          <Panel className="p-3 shrink-0">
            <Label>Alertas recientes</Label>
            {[
              { msg: '7.2 Competencia: 3 registros faltantes', c: 'warn' },
              { msg: '10.2 CAPA-003 vence en 5 días', c: 'err' },
              { msg: 'Calibración equipo EQ-04 vencida', c: 'err' },
              { msg: '9.1 Indicadores del mes listos', c: 'ok' },
            ].map((a, i) => (
              <div key={i} className="flex items-start gap-2 mb-1.5">
                <div className={`w-1 h-1 rounded-full shrink-0 mt-1 ${a.c === 'ok' ? 'bg-green-400/60' : a.c === 'warn' ? 'bg-amber-400/60' : 'bg-red-400/60'}`}/>
                <span className="text-[7px] text-white/30 leading-tight">{a.msg}</span>
              </div>
            ))}
          </Panel>

          {/* Próximas tareas */}
          <Panel className="p-3 shrink-0">
            <Label>Próximas tareas</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { task: 'Actualizar competencia personal cláusula 7.2', due: 'Hoy', c: 'err' },
                { task: 'Cerrar CAPA-003 acción correctiva', due: '5 días', c: 'warn' },
                { task: 'Registrar calibración EQ-04 y EQ-07', due: '7 días', c: 'warn' },
                { task: 'Revisión indicadores 9.1 por dirección', due: '10 días', c: 'ok' },
                { task: 'Preparar evidencias auditoría interna', due: '14 días', c: 'ok' },
              ].map((t, i) => (
                <div key={i} className="flex items-start justify-between gap-2">
                  <div className={`w-1 h-1 rounded-full shrink-0 mt-1 ${t.c === 'ok' ? 'bg-green-400/50' : t.c === 'warn' ? 'bg-amber-400/50' : 'bg-red-400/50'}`}/>
                  <span className="text-[7px] text-white/30 leading-tight flex-1">{t.task}</span>
                  <span className={`text-[6px] shrink-0 font-medium ${t.c === 'err' ? 'text-red-400/60' : t.c === 'warn' ? 'text-amber-400/60' : 'text-white/20'}`}>{t.due}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Área apilada: conformidades vs no conformidades */}
          <Panel className="p-3">
            <Label>Conformidades vs No conformidades</Label>
            <svg viewBox="0 0 100 50" className="w-full h-16" preserveAspectRatio="none">
              <defs>
                <linearGradient id="gconf" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#763d50" stopOpacity="0.35"/>
                  <stop offset="100%" stopColor="#763d50" stopOpacity="0.05"/>
                </linearGradient>
                <linearGradient id="gnc" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.02"/>
                </linearGradient>
              </defs>
              <path d="M0,42 C10,40 20,38 30,35 C40,32 50,30 60,27 C70,24 80,22 90,19 C95,17 98,16 100,15 L100,50 L0,50Z" fill="url(#gconf)"/>
              <path d="M0,42 C10,40 20,38 30,35 C40,32 50,30 60,27 C70,24 80,22 90,19 C95,17 98,16 100,15" fill="none" stroke="#763d50" strokeWidth="1"/>
              <path d="M0,48 C10,47 20,46 30,45 C40,44 50,43 60,41 C70,39 80,37 90,35 C95,33 98,32 100,31 L100,50 L0,50Z" fill="url(#gnc)"/>
              <path d="M0,48 C10,47 20,46 30,45 C40,44 50,43 60,41 C70,39 80,37 90,35 C95,33 98,32 100,31" fill="none" stroke="#ef4444" strokeWidth="1" opacity="0.5"/>
            </svg>
            <div className="flex gap-3 mt-1">
              <div className="flex items-center gap-1"><div className="w-2 h-1 rounded bg-[#763d50]/60"/><span className="text-[6px] text-white/20">Conformes</span></div>
              <div className="flex items-center gap-1"><div className="w-2 h-1 rounded bg-red-400/40"/><span className="text-[6px] text-white/20">No conformes</span></div>
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>Indicadores de gestión</Label>
            <div className="grid grid-cols-2 gap-1.5">
              {[
                { l: 'OEE', v: '84%' }, { l: 'DPMO', v: '3,200' },
                { l: 'Cpk', v: '1.38' }, { l: 'PPM', v: '150' },
                { l: 'OTIF', v: '96%' }, { l: 'Devoluc.', v: '0.4%' },
              ].map(m => (
                <div key={m.l} className="bg-white/[0.03] rounded p-1.5">
                  <p className="text-[5px] text-white/20">{m.l}</p>
                  <p className="text-[9px] font-bold text-white/55">{m.v}</p>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>Satisfacción del cliente</Label>
            <div className="flex items-end gap-1 h-10 mb-1">
              {[72,78,74,82,79,85,83,88,86,91,89,94].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height:`${h}%`, backgroundColor: `rgba(118,61,80,${0.2 + (h/100)*0.4})` }}/>
              ))}
            </div>
            <div className="flex justify-between text-[5px] text-white/15">
              <span>ABR</span><span>JUN</span><span>AGO</span><span>OCT</span><span>DIC</span><span>MAR</span>
            </div>
          </Panel>

          <Panel className="p-3 flex-1">
            <Label>Progreso certificación</Label>
            {[
              { fase: 'Diagnóstico inicial', p: 100 },
              { fase: 'Documentación', p: 87 },
              { fase: 'Implementación', p: 74 },
              { fase: 'Auditoría interna', p: 60 },
              { fase: 'Pre-auditoría', p: 35 },
              { fase: 'Certificación', p: 0 },
            ].map(f => (
              <div key={f.fase} className="mb-1.5">
                <div className="flex justify-between mb-0.5">
                  <span className="text-[6px] text-white/28">{f.fase}</span>
                  <span className="text-[6px] text-white/40">{f.p}%</span>
                </div>
                <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width:`${f.p}%`, backgroundColor: f.p === 100 ? 'rgba(74,222,128,0.4)' : 'rgba(118,61,80,0.5)' }}/>
                </div>
              </div>
            ))}
          </Panel>
        </div>

        {/* ── Col 4 ── */}
        <div className="flex flex-col gap-2 w-48 shrink-0 h-full overflow-hidden">
          {/* Normativa */}
          <Panel className="p-3 shrink-0">
            <Label>Aplicando normativa</Label>
            <div className="flex flex-col gap-1 border-b border-white/[0.04] pb-2 mb-2">
              <div className="flex justify-between"><span className="text-[7px] text-white/30">TONO DE VOZ</span><span className="text-[7px] text-white/50">PROFESIONAL ▾</span></div>
              <div className="flex justify-between"><span className="text-[7px] text-white/30">RESPUESTA</span><span className="text-[7px] text-white/50">DETALLADA ▾</span></div>
              <div className="flex justify-between"><span className="text-[7px] text-white/30">IDIOMA</span><span className="text-[7px] text-white/50">ESPAÑOL ▾</span></div>
            </div>
            {['Seguir nomenclatura ISO','Citar cláusulas específicas','Generar planes accionables','Priorizar no conformidades'].map((item, i) => (
              <div key={i} className="flex items-center justify-between mb-1">
                <span className="text-[7px] text-white/28 truncate max-w-[120px]">{item}</span>
                <span className="text-white/15 text-[8px]">›</span>
              </div>
            ))}
          </Panel>

          {/* Performance chart */}
          <Panel className="p-3 shrink-0">
            <Label>Mejora del sistema IA</Label>
            <svg viewBox="0 0 100 40" className="w-full h-12" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#763d50" stopOpacity="0.3"/>
                  <stop offset="100%" stopColor="#763d50" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,36 C15,32 25,28 38,23 C50,18 62,14 72,10 C82,6 90,4 100,2 L100,40 L0,40Z" fill="url(#g1)"/>
              <path d="M0,36 C15,32 25,28 38,23 C50,18 62,14 72,10 C82,6 90,4 100,2" fill="none" stroke="#763d50" strokeWidth="1.5"/>
              <path d="M0,39 C15,36 25,33 38,30 C50,27 62,24 72,20 C82,16 90,13 100,10" fill="none" stroke="#ffffff10" strokeWidth="1"/>
            </svg>
            <div className="flex justify-between text-[6px] text-white/15 mt-1">
              <span>ENE</span><span>FEB</span><span>MAR</span><span>ABR</span>
            </div>
          </Panel>

          {/* Docs pendientes */}
          <Panel className="p-3 flex-1">
            <Label>Documentos pendientes</Label>
            <div className="flex flex-col gap-2">
              {[
                { name: 'PR-07 Auditorías Internas', tag: 'Aprobación', c: 'amber' },
                { name: 'PL-03 Política de Calidad', tag: 'Revisión', c: 'blue' },
                { name: 'RE-12 Competencia Personal', tag: 'Borrador', c: 'gray' },
                { name: 'PR-04 Control Documentos', tag: 'Aprobación', c: 'amber' },
                { name: 'IN-02 Instructivo Calibración', tag: 'Revisión', c: 'blue' },
              ].map((d, i) => (
                <div key={i} className="flex items-start justify-between gap-1">
                  <span className="text-[7px] text-white/35 leading-tight flex-1">{d.name}</span>
                  <span className={`text-[6px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${
                    d.c === 'amber' ? 'bg-amber-500/15 text-amber-400/70' :
                    d.c === 'blue'  ? 'bg-blue-500/15 text-blue-400/70' :
                    'bg-white/[0.06] text-white/30'
                  }`}>{d.tag}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Normas cubiertas */}
          <Panel className="p-3 shrink-0">
            <Label>Normas habilitadas</Label>
            {['ISO 9001:2015','ISO 14001:2015','FSSC 22000','ISO 45001','ISO 27001'].map((n, i) => (
              <div key={n} className="flex items-center justify-between mb-1">
                <span className="text-[7px] text-white/35">{n}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${i < 3 ? 'bg-green-400/60' : 'bg-white/15'}`}/>
              </div>
            ))}
          </Panel>

          {/* Historial auditorías */}
          <Panel className="p-3">
            <Label>Historial de auditorías</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { d: 'Mar 2025', r: 'Certificación', s: 'ok' },
                { d: 'Sep 2024', r: 'Seguimiento', s: 'ok' },
                { d: 'Mar 2024', r: 'Renovación', s: 'ok' },
                { d: 'Sep 2023', r: 'Seguimiento', s: 'warn' },
                { d: 'Mar 2023', r: 'Certificación', s: 'ok' },
              ].map((a, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div className={`w-1 h-1 rounded-full shrink-0 ${a.s === 'ok' ? 'bg-green-400/60' : 'bg-amber-400/60'}`}/>
                  <span className="text-[6px] text-white/20 w-14 shrink-0">{a.d}</span>
                  <span className="text-[7px] text-white/35">{a.r}</span>
                  <span className={`ml-auto text-[6px] font-medium ${a.s === 'ok' ? 'text-green-400/50' : 'text-amber-400/50'}`}>{a.s === 'ok' ? 'Aprobado' : 'Observ.'}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>Equipo de calidad</Label>
            {[
              { n: 'M. González', rol: 'Dir. Calidad', s: 'ok' },
              { n: 'L. Martínez', rol: 'Auditor Interno', s: 'ok' },
              { n: 'P. Rodríguez', rol: 'Doc. Control', s: 'busy' },
              { n: 'A. López', rol: 'Operaciones', s: 'ok' },
            ].map((p, i) => (
              <div key={i} className="flex items-center gap-2 mb-1.5">
                <div className="w-5 h-5 rounded-full bg-[#763d50]/30 flex items-center justify-center shrink-0">
                  <span className="text-[6px] text-white/50 font-bold">{p.n[0]}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[7px] text-white/40 truncate">{p.n}</p>
                  <p className="text-[5px] text-white/20 truncate">{p.rol}</p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full shrink-0 ${p.s === 'ok' ? 'bg-green-400/60' : 'bg-amber-400/60'}`}/>
              </div>
            ))}
          </Panel>

          <Panel className="p-3 flex-1">
            <Label>Costo calidad estimado</Label>
            <div className="flex items-end gap-1 h-10 mb-1">
              {[
                { l: 'Prev.', v: 40, c: 'bg-green-400/30' },
                { l: 'Eval.', v: 25, c: 'bg-blue-400/25' },
                { l: 'Fallas int.', v: 75, c: 'bg-amber-400/30' },
                { l: 'Fallas ext.', v: 60, c: 'bg-red-400/25' },
              ].map(b => (
                <div key={b.l} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className={`w-full rounded-sm ${b.c}`} style={{ height:`${b.v}%`}}/>
                  <span className="text-[5px] text-white/12">{b.l}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>

        {/* ── Col 5 ── */}
        <div className="flex flex-col gap-2 w-40 shrink-0 h-full overflow-hidden">
          {/* Rendimiento IA */}
          <Panel className="p-3 shrink-0">
            <Label>Rendimiento IA</Label>
            <svg viewBox="0 0 100 35" className="w-full h-10" preserveAspectRatio="none">
              <defs>
                <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#763d50" stopOpacity="0.25"/>
                  <stop offset="100%" stopColor="#763d50" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0,30 C10,26 20,22 30,18 C40,14 50,16 60,11 C70,6 80,8 90,4 C95,2 97,3 100,1 L100,35 L0,35Z" fill="url(#g2)"/>
              <path d="M0,30 C10,26 20,22 30,18 C40,14 50,16 60,11 C70,6 80,8 90,4 C95,2 97,3 100,1" fill="none" stroke="#763d50" strokeWidth="1.5"/>
            </svg>
            <div className="flex justify-between text-[6px] text-white/15 mt-0.5">
              <span>ENE</span><span>MAR</span><span>MAY</span>
            </div>
          </Panel>

          {/* Chat conversions */}
          <Panel className="p-3 shrink-0">
            <Label>Conversaciones</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { k: 'HOY', v: '47', hi: true },
                { k: 'SEMANA', v: '312', hi: false },
                { k: 'MES', v: '1,247', hi: false },
                { k: 'RESUELTAS', v: '94%', hi: true },
              ].map(r => (
                <div key={r.k} className="flex justify-between">
                  <span className="text-[6px] text-white/20">{r.k}</span>
                  <span className={`text-[7px] font-semibold ${r.hi ? 'text-[#763d50]/70' : 'text-white/45'}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>

          {/* Sparklines CAPAs */}
          <Panel className="p-3 shrink-0">
            <Label>Evolución CAPAs</Label>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Abiertas', vals: [8,6,9,5,7,4,3] },
                { label: 'Cerradas', vals: [2,4,3,6,5,8,9] },
              ].map(s => (
                <div key={s.label}>
                  <span className="text-[6px] text-white/20 block mb-1">{s.label}</span>
                  <svg viewBox={`0 0 ${s.vals.length * 14} 20`} className="w-full h-4" preserveAspectRatio="none">
                    <polyline
                      points={s.vals.map((v, i) => `${i * 14 + 7},${20 - v * 1.8}`).join(' ')}
                      fill="none" stroke="#763d50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                    {s.vals.map((v, i) => <circle key={i} cx={i * 14 + 7} cy={20 - v * 1.8} r="1.5" fill="#763d50" opacity="0.6"/>)}
                  </svg>
                </div>
              ))}
            </div>
          </Panel>

          {/* Revisiones pendientes */}
          <Panel className="p-3 shrink-0">
            <Label>Revisiones pendientes</Label>
            {[
              { doc: 'PL-03 Política', rev: 'Dirección', due: '3d' },
              { doc: 'PR-07 Auditorías', rev: 'Calidad', due: '5d' },
              { doc: 'IN-02 Calibración', rev: 'Operaciones', due: '8d' },
            ].map((r, i) => (
              <div key={i} className="mb-2">
                <div className="flex justify-between">
                  <span className="text-[7px] text-white/35 font-medium">{r.doc}</span>
                  <span className="text-[6px] text-amber-400/50">{r.due}</span>
                </div>
                <span className="text-[6px] text-white/20">{r.rev}</span>
              </div>
            ))}
          </Panel>

          {/* Indicadores clave */}
          <Panel className="p-3">
            <Label>Indicadores clave</Label>
            <div className="flex flex-col gap-2">
              {[
                { label: 'Satisfacción cliente', v: 96, color: 'bg-green-400/50' },
                { label: 'Eficiencia procesos', v: 84, color: 'bg-[#763d50]/60' },
                { label: 'Control documentos', v: 71, color: 'bg-blue-400/40' },
                { label: 'Gestión riesgos', v: 63, color: 'bg-amber-400/40' },
                { label: 'Mejora continua', v: 55, color: 'bg-purple-400/40' },
              ].map(ind => (
                <div key={ind.label}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[6px] text-white/25 truncate">{ind.label}</span>
                    <span className="text-[6px] text-white/40 ml-1">{ind.v}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className={`h-full rounded-full ${ind.color}`} style={{ width: `${ind.v}%` }}/>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3">
            <Label>Benchmarking normas</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { n: 'ISO 9001', sector: 'Manufactura', v: 78 },
                { n: 'ISO 14001', sector: 'Ambiental', v: 65 },
                { n: 'ISO 45001', sector: 'SST', v: 52 },
              ].map(b => (
                <div key={b.n}>
                  <div className="flex justify-between mb-0.5">
                    <span className="text-[6px] text-white/28">{b.n} · {b.sector}</span>
                    <span className="text-[6px] text-white/40">{b.v}%</span>
                  </div>
                  <div className="h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#763d50]/40 rounded-full" style={{ width: `${b.v}%` }}/>
                  </div>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3 flex-1">
            <Label>Próximos vencimientos</Label>
            {[
              { doc: 'Calibración EQ-04', d: '2 días', c: 'err' },
              { doc: 'Revisión PL-01', d: '5 días', c: 'warn' },
              { doc: 'Cert. personal J.C.', d: '12 días', c: 'ok' },
              { doc: 'Auditoría interna', d: '14 días', c: 'ok' },
            ].map((v, i) => (
              <div key={i} className="flex justify-between mb-1.5">
                <span className="text-[6px] text-white/30 truncate flex-1">{v.doc}</span>
                <span className={`text-[6px] font-semibold ml-2 shrink-0 ${v.c === 'err' ? 'text-red-400/60' : v.c === 'warn' ? 'text-amber-400/60' : 'text-white/25'}`}>{v.d}</span>
              </div>
            ))}
          </Panel>
        </div>

        {/* ── Col 6 (far right, partially off-screen) ── */}
        <div className="flex flex-col gap-2 w-36 shrink-0 h-full overflow-hidden">
          <Panel className="p-3 shrink-0">
            <Label>Chat conv.</Label>
            <p className="text-xl font-bold text-white/60 mb-0.5">47</p>
            <p className="text-[6px] text-white/20 mb-2">conversaciones hoy</p>
            <div className="h-8 flex items-end gap-0.5">
              {[30,50,35,70,45,65,90,55,80,47].map((h,i) => (
                <div key={i} className="flex-1 rounded-sm bg-[#763d50]/30" style={{ height:`${h}%` }}/>
              ))}
            </div>
          </Panel>

          <Panel className="p-3 shrink-0">
            <Label>Tiempo respuesta</Label>
            <div className="flex items-end gap-0.5 h-10 mb-1">
              {[2.8,2.4,3.1,1.9,2.3,1.7,2.1,1.5,2.3,1.2].map((v,i) => (
                <div key={i} className="flex-1 rounded-sm bg-blue-400/25" style={{ height:`${(v/3.5)*100}%` }}/>
              ))}
            </div>
            <div className="flex justify-between text-[6px] text-white/15">
              <span>2.8s</span><span className="text-white/35 font-semibold">1.2s</span>
            </div>
          </Panel>

          <Panel className="p-3 shrink-0">
            <Label>Estado del sistema</Label>
            {[
              { s: 'Agente IA', ok: true },
              { s: 'Base de datos', ok: true },
              { s: 'Procesador docs', ok: true },
              { s: 'Sync normas', ok: false },
              { s: 'Notificaciones', ok: true },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between mb-1.5">
                <span className="text-[7px] text-white/30">{item.s}</span>
                <div className={`w-1.5 h-1.5 rounded-full ${item.ok ? 'bg-green-400/60' : 'bg-amber-400/60 animate-pulse'}`}/>
              </div>
            ))}
          </Panel>

          <Panel className="p-3 shrink-0">
            <Label>Distribución docs</Label>
            <div className="flex gap-1 items-end h-10">
              {[
                { l: 'Proc.', v: 85 },
                { l: 'Pol.', v: 60 },
                { l: 'Reg.', v: 95 },
                { l: 'Inst.', v: 45 },
                { l: 'Form.', v: 70 },
              ].map(b => (
                <div key={b.l} className="flex-1 flex flex-col items-center gap-0.5">
                  <div className="w-full rounded-sm bg-[#763d50]/35" style={{ height:`${b.v}%`}}/>
                  <span className="text-[5px] text-white/15">{b.l}</span>
                </div>
              ))}
            </div>
          </Panel>

          <Panel className="p-3 shrink-0">
            <Label>Riesgos activos</Label>
            {[
              { r: 'Incumplimiento 7.2', nivel: 'Alto', c: 'err' },
              { r: 'Equipo sin calibrar', nivel: 'Alto', c: 'err' },
              { r: 'CAPA vencida', nivel: 'Medio', c: 'warn' },
              { r: 'Política desactualizada', nivel: 'Bajo', c: 'ok' },
            ].map((r, i) => (
              <div key={i} className="flex items-start justify-between gap-1 mb-1.5">
                <span className="text-[6px] text-white/28 leading-tight flex-1">{r.r}</span>
                <span className={`text-[5px] font-semibold shrink-0 ${r.c === 'err' ? 'text-red-400/60' : r.c === 'warn' ? 'text-amber-400/60' : 'text-green-400/50'}`}>{r.nivel}</span>
              </div>
            ))}
          </Panel>

          <Panel className="p-3 flex-1 overflow-hidden">
            <Label>Historial tokens IA</Label>
            <div className="flex flex-col gap-1.5">
              {[
                { d: 'Hoy', v: '48,291' },
                { d: 'Ayer', v: '52,104' },
                { d: 'Lun', v: '39,820' },
                { d: 'Dom', v: '12,450' },
                { d: 'Sab', v: '18,720' },
                { d: 'Vie', v: '61,390' },
                { d: 'Jue', v: '44,810' },
              ].map(r => (
                <div key={r.d} className="flex items-center gap-2">
                  <span className="text-[6px] text-white/18 w-5 shrink-0">{r.d}</span>
                  <div className="flex-1 h-1 bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#763d50]/40 rounded-full" style={{ width: `${(parseInt(r.v.replace(/,/g,'')) / 65000) * 100}%` }}/>
                  </div>
                  <span className="text-[6px] text-white/25 font-mono w-12 text-right">{r.v}</span>
                </div>
              ))}
            </div>
          </Panel>
        </div>
      </div>

      {/* ── Edge fades ── */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0f1115] to-transparent z-10 pointer-events-none"/>
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0f1115] to-transparent z-10 pointer-events-none"/>
      <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0f1115] to-transparent z-10 pointer-events-none"/>
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#0f1115] to-transparent z-10 pointer-events-none"/>

      {/* ── Chat widget ── */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="w-full max-w-[360px] rounded-2xl overflow-hidden shadow-2xl shadow-black/70" style={{ border: '1px solid rgba(255,255,255,0.09)' }}>

          {/* Header */}
          <div className="bg-[#1a1d24] px-4 py-3 flex items-center justify-between border-b border-white/[0.06]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#763d50] flex items-center justify-center">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                </svg>
              </div>
              <div>
                <p className="text-white text-sm font-semibold leading-none">Consultto</p>
                <div className="flex items-center gap-1 mt-0.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"/>
                  <p className="text-white/40 text-[10px]">Agente IA · En línea</p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button className="text-white/25">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM18.75 12a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
                </svg>
              </button>
              <button className="text-white/25">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Messages — fixed height, internal scroll */}
          <div
            ref={msgsRef}
            className="bg-white px-4 pt-4 pb-3 flex flex-col gap-3 overflow-y-auto"
            style={{ height: '360px' }}
          >
            {CHAT_MESSAGES.slice(0, visibleCount).map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}
                style={{ animation: 'fadeInUp 350ms cubic-bezier(0.16,1,0.3,1) both' }}
              >
                {msg.from === 'user' ? (
                  <div className="bg-[#763d50] text-white text-sm px-4 py-2.5 rounded-2xl rounded-br-sm max-w-[85%] leading-relaxed">
                    {msg.text}
                  </div>
                ) : (
                  <div className="max-w-[90%]">
                    {msg.label && (
                      <div className="flex items-center gap-1.5 mb-1.5">
                        <div className="w-4 h-4 rounded-full bg-[#763d50] flex items-center justify-center">
                          <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"/>
                          </svg>
                        </div>
                        <span className="text-[10px] text-[#3a3a3a]/45 font-medium">{msg.label}</span>
                      </div>
                    )}
                    <div className="bg-[#f4f4f4] text-[#1f2020] text-sm px-4 py-2.5 rounded-2xl rounded-bl-sm leading-relaxed whitespace-pre-line">
                      {msg.text}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {showTyping && (
              <div className={`flex ${showTyping === 'user' ? 'justify-end' : 'justify-start'}`} style={{ animation: 'fadeInUp 300ms cubic-bezier(0.16,1,0.3,1) both' }}>
                <div className={`px-4 py-3.5 rounded-2xl flex gap-1 items-center ${showTyping === 'user' ? 'bg-[#763d50] rounded-br-sm' : 'bg-[#f4f4f4] rounded-bl-sm'}`}>
                  {[0,1,2].map(i => (
                    <div key={i} className={`w-1.5 h-1.5 rounded-full animate-bounce ${showTyping === 'user' ? 'bg-white/60' : 'bg-[#3a3a3a]/30'}`} style={{ animationDelay:`${i*150}ms`}}/>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="bg-white border-t border-[#f0f0f0] px-4 py-3 flex items-center gap-2">
            <input readOnly placeholder="Escribe un mensaje..." className="flex-1 text-sm text-[#3a3a3a]/35 placeholder-[#3a3a3a]/25 bg-transparent outline-none cursor-default"/>
            <button className="text-[#3a3a3a]/20">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"/>
              </svg>
            </button>
            <button className="w-8 h-8 bg-[#763d50] rounded-full flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Main component ───────────────────────────────────────────────────────────

export function AgenteIAPage() {
  return (
    <main className="bg-white pt-24">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-white px-6 pt-20 pb-28">
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(circle, #d9d9d9 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white/60 to-white" />

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <p
            className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-6"
            style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16,1,0.3,1) 0ms both' }}
          >
            Agente IA
          </p>
          <h1
            className="text-4xl md:text-6xl font-bold text-[#1f2020] leading-[1.1] mb-6"
            style={{ animation: 'fadeInUp 700ms cubic-bezier(0.16,1,0.3,1) 100ms both' }}
          >
            El experto en tu norma,{' '}
            <span className="text-[#763d50]">disponible 24/7</span>
          </h1>
          <p
            className="text-[#3a3a3a]/60 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-10"
            style={{ animation: 'fadeInUp 700ms cubic-bezier(0.16,1,0.3,1) 220ms both' }}
          >
            Un agente de IA entrenado en tu norma, tu industria y tu sistema. Responde preguntas, genera documentación y te prepara para cualquier auditoría — sin esperar al consultor.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16,1,0.3,1) 350ms both' }}
          >
            <Link
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-base"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="#como-funciona"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] px-8 py-4 rounded-full font-semibold transition-all text-base bg-white hover:bg-[#f8f8f8]"
            >
              Hablar con un consultor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Demo Chat ─────────────────────────────────────────────────────── */}
      <DemoChatSection />

      {/* ── Feature sections ──────────────────────────────────────────────── */}
      {FEATURES.map((feature, i) => {
        const isEven = i % 2 === 0
        return (
          <section key={feature.tag} className="py-24 px-6 overflow-hidden" style={{ backgroundColor: i % 2 === 0 ? '#fff' : '#fafafa' }}>
            <div className="max-w-6xl mx-auto">
              <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>

                {/* Text */}
                <Reveal className="flex-1" from={isEven ? 'left' : 'right'}>
                  <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">{feature.tag}</p>
                  <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
                    {feature.title}
                  </h2>
                  <p className="text-[#3a3a3a]/60 text-base leading-relaxed mb-8 max-w-lg">
                    {feature.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <span className="text-4xl font-semibold text-[#763d50]">{feature.stat.value}</span>
                    <span className="text-sm text-[#3a3a3a]/50 leading-snug max-w-[120px]">{feature.stat.label}</span>
                  </div>
                </Reveal>

                {/* Mockup */}
                <Reveal className="flex-1 w-full" from={isEven ? 'right' : 'left'} delay={150}>
                  <div
                    className="rounded-2xl overflow-hidden border border-black/[0.06] shadow-xl shadow-black/[0.06]"
                    style={{ backgroundColor: feature.mockupBg }}
                  >
                    {/* Window bar */}
                    <div className="bg-[#2e3e49] px-4 py-2.5 flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#763d50]/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/40" />
                      <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/40" />
                      <span className="ml-3 text-[#d9d9d9]/40 text-xs font-mono">Consultto · Agente IA</span>
                    </div>
                    {feature.mockupContent}
                  </div>
                </Reveal>

              </div>
            </div>
          </section>
        )
      })}

      {/* ── Use cases grid ────────────────────────────────────────────────── */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <Reveal className="text-center mb-16">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Casos de uso</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-4">
              Trabaja junto al Agente IA
            </h2>
            <p className="text-[#3a3a3a]/60 text-base leading-relaxed max-w-2xl mx-auto">
              Desde la documentación inicial hasta la auditoría de renovación, el agente IA participa en cada etapa de tu sistema de gestión.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {USE_CASES.map((uc, i) => (
              <Reveal key={uc.title} delay={i * 60} from="bottom">
                <div className="bg-[#fafafa] border border-[#f0f0f0] rounded-2xl p-6 h-full hover:border-[#763d50]/20 hover:bg-[#fdf8f9] transition-all duration-300">
                  <div className="mb-4">{uc.icon}</div>
                  <h3 className="text-[#1f2020] font-semibold text-sm mb-2">{uc.title}</h3>
                  <p className="text-[#3a3a3a]/55 text-xs leading-relaxed">{uc.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-[#faf5f6] py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Reveal>
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-6">Empieza hoy</p>
            <h2 className="text-3xl md:text-5xl font-light text-[#1f2020] leading-tight mb-6">
              ¿Listo para tener tu propio<br />
              <span className="font-bold">Agente IA para tu sistema de gestión?</span>
            </h2>
            <p className="text-[#3a3a3a]/60 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
              Sin compromisos. Una conversación para entender tu empresa y mostrarte cómo el Agente IA puede transformar tu sistema.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-4 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-base"
              >
                Agendar demo gratuita
              </Link>
              <Link
                href="#como-funciona"
                className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] px-8 py-4 rounded-full font-semibold transition-all text-base bg-white hover:bg-[#f8f8f8]"
              >
                Hablar con un consultor
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  )
}
