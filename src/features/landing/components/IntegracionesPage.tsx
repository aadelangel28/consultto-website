'use client'

import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

// ── Circuit board animation ───────────────────────────────────────────────────

interface Pad { x: number; y: number; r: number }

interface Trace {
  points: [number, number][]
  segLens: number[]
  total: number
}

interface Pulse {
  traceIdx: number
  t: number
  speed: number
  reversed: boolean
}

function buildTrace(
  ax: number, ay: number,
  bx: number, by: number,
  style: 0 | 1 | 2,
): [number, number][] {
  if (style === 0) return [[ax, ay], [bx, ay], [bx, by]]          // right → up/down
  if (style === 1) return [[ax, ay], [ax, by], [bx, by]]          // up/down → right
  const mx = Math.round((ax + bx) / 2)
  return [[ax, ay], [mx, ay], [mx, by], [bx, by]]                 // Z-shape
}

function segLengths(pts: [number, number][]): number[] {
  return pts.slice(1).map((p, i) =>
    Math.hypot(p[0] - pts[i][0], p[1] - pts[i][1])
  )
}

function pointOnTrace(pts: [number, number][], lens: number[], total: number, t: number): [number, number] {
  let rem = total * Math.min(1, Math.max(0, t))
  for (let i = 0; i < lens.length; i++) {
    if (rem <= lens[i] + 0.0001) {
      const r = lens[i] > 0 ? rem / lens[i] : 0
      return [
        pts[i][0] + (pts[i + 1][0] - pts[i][0]) * r,
        pts[i][1] + (pts[i + 1][1] - pts[i][1]) * r,
      ]
    }
    rem -= lens[i]
  }
  return pts[pts.length - 1]
}

function CircuitCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animId: number
    let pads: Pad[] = []
    let traces: Trace[] = []
    const pulses: Pulse[] = []

    const build = (W: number, H: number) => {
      pads = []
      traces = []

      // ── Pads ── many small ones, tightly packed
      const PAD_N = 320
      const MIN_GAP = 13
      for (let tries = 0; tries < 10000 && pads.length < PAD_N; tries++) {
        const x = 10 + Math.random() * (W - 20)
        const y = 10 + Math.random() * (H - 20)
        if (pads.every(p => Math.hypot(x - p.x, y - p.y) >= MIN_GAP)) {
          pads.push({ x, y, r: Math.random() < 0.2 ? 2 : 1.5 })
        }
      }

      // ── Traces (orthogonal) ──
      const MAX_DIST = 100
      const used = new Set<string>()
      for (let i = 0; i < pads.length; i++) {
        const near = pads
          .map((p, j) => ({ j, d: Math.hypot(pads[i].x - p.x, pads[i].y - p.y) }))
          .filter(({ j, d }) => j !== i && d > 10 && d < MAX_DIST)
          .sort((a, b) => a.d - b.d)
          .slice(0, Math.floor(Math.random() * 4) + 1)

        for (const { j } of near) {
          const key = `${Math.min(i, j)}-${Math.max(i, j)}`
          if (used.has(key)) continue
          used.add(key)
          const style = (Math.floor(Math.random() * 3)) as 0 | 1 | 2
          const pts = buildTrace(pads[i].x, pads[i].y, pads[j].x, pads[j].y, style)
          const lens = segLengths(pts)
          traces.push({ points: pts, segLens: lens, total: lens.reduce((a, b) => a + b, 0) })
        }
      }
    }

    const resize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
      pulses.length = 0
      build(canvas.width, canvas.height)
      // Pre-seed pulses so the canvas is alive from frame 1
      const seed = Math.min(6, Math.floor(traces.length * 0.015))
      for (let k = 0; k < seed; k++) {
        const idx = Math.floor(Math.random() * traces.length)
        if (pulses.some(p => p.traceIdx === idx)) continue
        pulses.push({ traceIdx: idx, t: Math.random(), speed: 0.005 + Math.random() * 0.012, reversed: Math.random() < 0.5 })
      }
    }
    resize()
    window.addEventListener('resize', resize)

    let frame = 0

    const spawnPulse = () => {
      if (pulses.length >= 10 || traces.length === 0) return
      const batch = 1
      for (let k = 0; k < batch; k++) {
        const idx = Math.floor(Math.random() * traces.length)
        if (pulses.some(p => p.traceIdx === idx)) continue
        pulses.push({ traceIdx: idx, t: Math.random() * 0.3, speed: 0.005 + Math.random() * 0.012, reversed: Math.random() < 0.5 })
      }
    }

    const WINE        = '#763d50'
    const LINE_IDLE   = 'rgba(118, 61, 80, 0.08)'
    const LINE_ACTIVE = 'rgba(118, 61, 80, 0.2)'
    const PAD_FILL    = 'rgba(118, 61, 80, 0.25)'
    const PAD_RING    = 'rgba(118, 61, 80, 0.06)'

    const draw = () => {
      animId = requestAnimationFrame(draw)
      frame++

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      const activeSet = new Set(pulses.map(p => p.traceIdx))

      // Traces
      for (let ti = 0; ti < traces.length; ti++) {
        const { points } = traces[ti]
        ctx.beginPath()
        ctx.moveTo(points[0][0], points[0][1])
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1])
        ctx.strokeStyle = activeSet.has(ti) ? LINE_ACTIVE : LINE_IDLE
        ctx.lineWidth = 0.6
        ctx.stroke()
      }

      // Pads
      for (const pad of pads) {
        ctx.beginPath()
        ctx.arc(pad.x, pad.y, pad.r + 3, 0, Math.PI * 2)
        ctx.fillStyle = PAD_RING
        ctx.fill()

        ctx.beginPath()
        ctx.arc(pad.x, pad.y, pad.r, 0, Math.PI * 2)
        ctx.fillStyle = PAD_FILL
        ctx.fill()
      }

      // Spawn
      if (frame % 8 === 0) spawnPulse()

      // Pulses
      for (let i = pulses.length - 1; i >= 0; i--) {
        const p = pulses[i]
        p.t += p.speed
        if (p.t >= 1) { pulses.splice(i, 1); continue }

        const tr = traces[p.traceIdx]
        const t = p.reversed ? 1 - p.t : p.t
        const [px, py] = pointOnTrace(tr.points, tr.segLens, tr.total, t)

        // Outer glow
        const g = ctx.createRadialGradient(px, py, 0, px, py, 6)
        g.addColorStop(0, 'rgba(118, 61, 80, 0.5)')
        g.addColorStop(1, 'rgba(118, 61, 80, 0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(px, py, 6, 0, Math.PI * 2)
        ctx.fill()

        // Dot
        ctx.beginPath()
        ctx.arc(px, py, 1.5, 0, Math.PI * 2)
        ctx.fillStyle = WINE
        ctx.fill()
      }
    }

    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
}

// ── Count-up animation ────────────────────────────────────────────────────────

function CountUp({ to, prefix = '', suffix = '', duration = 1800 }: {
  to: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [value, setValue] = useState(0)
  const ref = useRef<HTMLParagraphElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const start = performance.now()
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1)
          // ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3)
          setValue(Math.round(eased * to))
          if (progress < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.5 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [to, duration])

  return (
    <p ref={ref} className="text-[#1f2020] text-3xl font-light mb-1">
      {prefix}{value.toLocaleString('es-MX')}{suffix}
    </p>
  )
}

// ── Page ─────────────────────────────────────────────────────────────────────

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

function CategoriasLista() {
  return (
    <div className="flex flex-col gap-8">
      {CATEGORIAS.map((cat) => (
        <div
          key={cat.titulo}
          className="flex flex-col md:flex-row md:items-center gap-6 md:gap-0 py-8 group hover:bg-[#fafafa] transition-colors duration-200"
        >
          {/* Acento + meta */}
          <div className="flex items-center gap-5 md:w-72 shrink-0 px-8">
            <div className="w-[3px] self-stretch rounded-full bg-[#763d50]/20 group-hover:bg-[#763d50]/50 transition-colors duration-300 shrink-0" />
            <div>
              <p className="text-[#1f2020] text-sm font-semibold leading-snug mb-1.5">
                {cat.titulo}
              </p>
              <p className="text-[#3a3a3a]/45 text-xs leading-relaxed">
                {cat.descripcion}
              </p>
            </div>
          </div>

          {/* Tools — grid estilo Handle */}
          <div className="px-8 md:px-6 flex-1">
            <div className="flex flex-wrap overflow-hidden rounded-lg">
              {cat.tools.map((tool, ti) => {
                const cols = Math.min(cat.tools.length, 4)
                const showR = ti % 4 < cols - 1
                const showB = ti + 4 < cat.tools.length
                return (
                <div
                  key={tool}
                  className={`w-1/4 px-5 py-3.5 cursor-default hover:bg-[#fafafa] transition-colors duration-150
                    ${showR ? 'border-r border-[#ebebeb]' : ''}
                    ${showB ? 'border-b border-[#ebebeb]' : ''}
                  `}
                >
                  <p className="text-[#1f2020] text-xs font-medium leading-snug text-center">
                    {tool}
                  </p>
                </div>
                )
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export function IntegracionesPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-white min-h-[88vh] flex items-center">
        <CircuitCanvas />

        {/* Soft radial vignette so text area stays clean */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 50% 50%, rgba(255,255,255,0.82) 0%, rgba(255,255,255,0.3) 70%, transparent 100%)',
          }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-6 py-44 text-center w-full">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-[0.2em] mb-6">
            Integraciones
          </p>
          <h1 className="text-[#1f2020] text-4xl md:text-5xl font-light leading-[1.12] mb-6 max-w-3xl mx-auto">
            Conecta Consultto con las herramientas que ya usas
          </h1>
          <p className="text-[#3a3a3a]/50 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            REST API abierto y compatible con cualquier sistema. Desde tu ERP hasta tu plataforma de gestión de proveedores.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="/consultor"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white/70 hover:bg-[#f8f8f8] px-8 py-3.5 rounded-full font-semibold transition-all text-sm"
            >
              Hablar con un consultor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stat banner ── */}
      <section className="border-y border-[#f0f0f0] bg-[#fafafa] py-10 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 text-center">
          <div>
            <CountUp to={40} prefix="+" duration={1600} />
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Plataformas compatibles</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e8e8e8]" />
          <div>
            <CountUp to={5000} prefix="+" duration={2000} />
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Apps vía Zapier y Make</p>
          </div>
          <div className="hidden sm:block w-px h-10 bg-[#e8e8e8]" />
          <div>
            <p className="text-[#1f2020] text-3xl font-light mb-1">REST API</p>
            <p className="text-[#3a3a3a]/45 text-xs uppercase tracking-widest font-semibold">Completamente documentado</p>
          </div>
        </div>
      </section>

      {/* ── Categorías ── */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Categorías</p>
            <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-snug">
              Arquitectura abierta.<br />Se conecta con tu operación.
            </h2>
          </div>
          <CategoriasLista />
        </div>
      </section>

      {/* ── ¿No ves tu sistema? ── */}
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
              className="inline-flex bg-[#763d50] hover:bg-[#8a4a5e] text-white px-7 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="/consultor"
              className="inline-flex border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-7 py-3 rounded-full font-semibold transition-all text-sm"
            >
              Hablar con un consultor
            </Link>
          </div>
        </div>
      </section>

      {/* ── Cómo funciona ── */}
      <section className="py-20 px-6 border-t border-[#f0f0f0]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Cómo funciona</p>
            <h2 className="text-[#1f2020] text-3xl font-light">Tres pasos para integrarte</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: '01', titulo: 'Consulta el API', descripcion: 'Documentación completa con endpoints, autenticación y ejemplos listos para usar.' },
              { num: '02', titulo: 'Conecta tu sistema', descripcion: 'Directo vía REST API o a través de plataformas como Zapier o MuleSoft, sin código adicional.' },
              { num: '03', titulo: 'Opera integrado', descripcion: 'Datos sincronizados entre Consultto y tu operación en tiempo real.' },
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
