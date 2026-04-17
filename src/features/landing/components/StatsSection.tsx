'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const DURATIONS = [2000, 2000, 2500, 2200]

// ── Handle-style illustrations ────────────────────────────────────────────────

// Stat 0 — 98%: Certificado con sello de aprobación
function Illus0() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85%', maxWidth: 380 }}>
      {/* Document */}
      <rect x="80" y="30" width="200" height="260" rx="6" stroke="#1f2020" strokeWidth="1.2" strokeDasharray="5 3" />
      {/* Fold corner */}
      <path d="M240 30 L280 70 L240 70 Z" stroke="#1f2020" strokeWidth="1.2" fill="white" />
      <path d="M240 30 L280 70" stroke="#1f2020" strokeWidth="1.2" />
      {/* Text lines */}
      <line x1="108" y1="100" x2="232" y2="100" stroke="#1f2020" strokeWidth="1" opacity="0.3" />
      <line x1="108" y1="118" x2="210" y2="118" stroke="#1f2020" strokeWidth="1" opacity="0.3" />
      <line x1="108" y1="136" x2="220" y2="136" stroke="#1f2020" strokeWidth="1" opacity="0.3" />
      {/* Seal circle */}
      <circle cx="180" cy="220" r="44" stroke="#763d50" strokeWidth="1.2" />
      <circle cx="180" cy="220" r="36" stroke="#763d50" strokeWidth="0.8" strokeDasharray="3 2" />
      {/* Checkmark inside seal */}
      <path d="M162 220 L174 232 L200 208" stroke="#763d50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      {/* Corner dots */}
      <circle cx="80" cy="30" r="2.5" fill="#1f2020" opacity="0.4" />
      <circle cx="280" cy="290" r="2.5" fill="#1f2020" opacity="0.4" />
    </svg>
  )
}

// Stat 1 — 60%: Antes vs Ahora (comparación de tiempo)
function Illus1() {
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85%', maxWidth: 380 }}>
      {/* Grid lines */}
      {[60, 120, 180, 240, 300].map(y => (
        <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="#1f2020" strokeWidth="0.5" opacity="0.12" />
      ))}
      {/* Bar: Antes */}
      <rect x="90" y="60" width="72" height="220" rx="4" stroke="#1f2020" strokeWidth="1.2" strokeDasharray="4 3" opacity="0.5" />
      <text x="126" y="52" textAnchor="middle" fontSize="11" fill="#1f2020" opacity="0.45" fontFamily="system-ui">Antes</text>
      <text x="126" y="298" textAnchor="middle" fontSize="10" fill="#1f2020" opacity="0.35" fontFamily="system-ui">100%</text>
      {/* Bar: Ahora */}
      <rect x="238" y="148" width="72" height="132" rx="4" stroke="#763d50" strokeWidth="1.2" fill="rgba(118,61,80,0.04)" />
      <text x="274" y="140" textAnchor="middle" fontSize="11" fill="#763d50" fontFamily="system-ui" fontWeight="500">Ahora</text>
      <text x="274" y="298" textAnchor="middle" fontSize="10" fill="#763d50" fontFamily="system-ui">40%</text>
      {/* Arrow between */}
      <path d="M178 170 L222 170" stroke="#1f2020" strokeWidth="1" opacity="0.3" strokeDasharray="3 2" />
      <path d="M214 165 L222 170 L214 175" stroke="#1f2020" strokeWidth="1" opacity="0.3" />
      {/* Baseline */}
      <line x1="60" y1="280" x2="340" y2="280" stroke="#1f2020" strokeWidth="1" opacity="0.15" />
      {/* Dots */}
      <circle cx="90" cy="60" r="2.5" fill="#1f2020" opacity="0.3" />
      <circle cx="310" cy="148" r="2.5" fill="#763d50" opacity="0.6" />
    </svg>
  )
}

// Stat 2 — 5 días: Timeline de 5 días
function Illus2() {
  const days = [1, 2, 3, 4, 5]
  const R = 28
  const GAP = 70  // center-to-center
  const total = (days.length - 1) * GAP
  const startX = (400 - total) / 2
  const xs = days.map((_, i) => startX + i * GAP)
  const cy = 170
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '90%', maxWidth: 420 }}>
      {days.map((d, i) => {
        const x = xs[i]
        const done = i < 4
        return (
          <g key={d}>
            {/* Connector line between circles */}
            {i < 4 && (
              <line
                x1={x + R} y1={cy} x2={xs[i + 1] - R} y2={cy}
                stroke="#763d50" strokeWidth="1" opacity="0.3"
              />
            )}
            {/* Circle */}
            <circle cx={x} cy={cy} r={R}
              stroke={i === 4 ? '#763d50' : '#1f2020'}
              strokeWidth={i === 4 ? '1.5' : '1'}
              fill={i === 4 ? 'rgba(118,61,80,0.08)' : 'white'}
            />
            {/* Checkmark or number */}
            {done ? (
              <path d={`M${x - 9} ${cy} L${x - 3} ${cy + 7} L${x + 10} ${cy - 8}`}
                stroke="#1f2020" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.45" />
            ) : (
              <text x={x} y={cy + 5} textAnchor="middle" fontSize="15" fill="#763d50" fontFamily="system-ui" fontWeight="700">{d}</text>
            )}
            {/* Day label */}
            <text x={x} y={cy + R + 22} textAnchor="middle" fontSize="11" fill="#1f2020" opacity="0.35" fontFamily="system-ui">
              {`Día ${d}`}
            </text>
          </g>
        )
      })}
    </svg>
  )
}

// Stat 3 — 100%: Gráfica de visibilidad / trazabilidad
function Illus3() {
  const pts = [[40,260],[90,220],[140,190],[180,150],[230,120],[280,90],[340,60]]
  const polyline = pts.map(p => p.join(',')).join(' ')
  return (
    <svg viewBox="0 0 400 340" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '85%', maxWidth: 380 }}>
      {/* Grid */}
      {[80,140,200,260].map(y => (
        <line key={y} x1="40" y1={y} x2="360" y2={y} stroke="#1f2020" strokeWidth="0.5" opacity="0.12" />
      ))}
      <line x1="40" y1="40" x2="40" y2="280" stroke="#1f2020" strokeWidth="0.8" opacity="0.2" />
      <line x1="40" y1="280" x2="360" y2="280" stroke="#1f2020" strokeWidth="0.8" opacity="0.2" />
      {/* Area fill */}
      <polygon
        points={`${polyline} 340,280 40,280`}
        fill="rgba(118,61,80,0.04)"
      />
      {/* Line */}
      <polyline points={polyline} stroke="#763d50" strokeWidth="1.5" strokeLinejoin="round" />
      {/* Dots on line */}
      {pts.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" fill="white" stroke="#763d50" strokeWidth="1.2" />
      ))}
      {/* Vertical dashed to last point */}
      <line x1="340" y1="60" x2="340" y2="280" stroke="#763d50" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.3" />
      {/* 100% label */}
      <text x="350" y="57" fontSize="10" fill="#763d50" fontFamily="system-ui" opacity="0.8">100%</text>
    </svg>
  )
}

const STAT_ILLUSTRATIONS = [Illus0, Illus1, Illus2, Illus3]

const NAV_ICONS = [
  'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6',
  'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H3a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-2',
  'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
  'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
  'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
]

function PlatformMockup() {
  const { t } = useLanguage()
  const m = t.mockup

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-xl overflow-hidden border border-[#e8e8e8] shadow-xl shadow-black/10">
      {/* Window bar */}
      <div className="bg-[#1f2020] px-4 py-2.5 flex items-center gap-1.5 shrink-0">
        <div className="w-2.5 h-2.5 rounded-full bg-[#763d50]/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/25" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/25" />
        <span className="ml-3 text-[#d9d9d9]/35 text-[10px] font-mono">consultto.app</span>
      </div>
      {/* Body */}
      <div className="flex flex-1 min-h-0">
        {/* Sidebar */}
        <div className="w-36 bg-[#fafafa] border-r border-[#e8e8e8] flex flex-col py-4 gap-0.5 shrink-0">
          <div className="px-4 mb-3">
            <span className="text-[#1f2020] font-bold text-sm">consultto</span>
          </div>
          {m.sidebar.slice(0, 5).map((label, i) => (
            <div
              key={i}
              className={`flex items-center gap-2.5 px-4 py-2 mx-2 rounded-lg text-xs font-medium transition-colors ${
                i === 0 ? 'bg-[#763d50] text-white' : 'text-[#3a3a3a]/50 hover:bg-[#f0f0f0]'
              }`}
            >
              <svg className="w-3.5 h-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d={NAV_ICONS[i]} />
              </svg>
              {label}
            </div>
          ))}
        </div>
        {/* Main content */}
        <div className="flex-1 flex flex-col p-4 gap-3 overflow-hidden">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-[#1f2020] font-bold text-sm">{m.dashboard.welcome}</h3>
              <p className="text-[#3a3a3a]/50 text-xs">{m.dashboard.company}</p>
            </div>
            <div className="bg-[#763d50] text-white text-xs px-2.5 py-1 rounded-full font-medium">{m.dashboard.badge}</div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {m.dashboard.stats.map((s) => (
              <div key={s.label} className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-lg p-2.5">
                <div className="text-[#1f2020] font-black text-base">{s.value}</div>
                <div className="text-[#3a3a3a]/50 text-xs mt-0.5">{s.label}</div>
              </div>
            ))}
          </div>
          <div className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-lg p-3 flex-1">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1.5 h-1.5 rounded-full bg-[#763d50] animate-pulse" />
              <span className="text-[#763d50] text-xs font-semibold uppercase tracking-widest">{m.dashboard.agentLabel}</span>
            </div>
            <p className="text-[#3a3a3a]/70 text-xs leading-relaxed">
              {m.dashboard.agentMessage}
            </p>
            <div className="flex gap-2 mt-2.5">
              <div className="bg-[#763d50]/10 border border-[#763d50]/30 text-[#763d50] text-xs px-2.5 py-1 rounded-full">{m.dashboard.viewPlan}</div>
              <div className="bg-white border border-[#e8e8e8] text-[#3a3a3a]/50 text-xs px-2.5 py-1 rounded-full">{m.dashboard.later}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (match) return { num: parseInt(match[1]), suffix: match[2] }
  return { num: 0, suffix: value }
}

const STAT_ICONS = [
  // 98% — checkmark shield
  'M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z',
  // 60% — lightning bolt
  'M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z',
  // 5 días — clock
  'M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z',
  // 100% — eye
  'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z M15 12a3 3 0 11-6 0 3 3 0 016 0z',
]

function StatCard({
  stat,
  index,
  isActive,
  onHover,
}: {
  stat: { value: string; label: string; description: string }
  index: number
  isActive: boolean
  onHover: (index: number | null) => void
}) {
  const { num, suffix } = parseValue(stat.value)
  const duration = DURATIONS[index] ?? 2000
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered) return
    let startTime: number | null = null
    let frame: number

    function animate(ts: number) {
      if (!startTime) startTime = ts
      const elapsed = ts - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * num))
      if (progress < 1) frame = requestAnimationFrame(animate)
    }

    frame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(frame)
  }, [triggered, num, duration])

  return (
    <div
      ref={ref}
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      className="relative flex flex-col gap-3 p-7 cursor-default rounded-2xl transition-all duration-300 overflow-hidden h-full"
      style={{
        background: 'white',
        boxShadow: isActive
          ? '0 0 0 1.5px #763d50, 0 8px 32px rgba(118,61,80,0.10)'
          : '0 0 0 1px rgba(0,0,0,0.06)',
        transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
      }}
    >

      {/* Icon */}
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors duration-300"
        style={{ background: 'rgba(118,61,80,0.08)' }}
      >
        <svg
          className="w-4 h-4"
          style={{ color: '#763d50' }}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={STAT_ICONS[index]} />
        </svg>
      </div>

      {/* Number */}
      <div
        className="text-5xl font-semibold leading-none tabular-nums"
        style={{ color: '#763d50' }}
      >
        {triggered ? count : 0}
        <span>{suffix}</span>
      </div>

      {/* Label */}
      <div className="font-semibold text-sm leading-snug text-[#1f2020]">
        {stat.label}
      </div>

      {/* Description */}
      <div className="text-xs leading-relaxed text-[#3a3a3a]/50">
        {stat.description}
      </div>
    </div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const activeIndex = hoveredIndex ?? 2


  return (
    <section id="como-funciona" className="bg-white py-16 md:py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Título fuera del grid */}
        <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-3">
          {t.stats.label}
        </p>
        <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-8">
          {t.stats.title}
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">

          {/* Left: stats grid only */}
          <div className="grid grid-cols-2 gap-3 lg:h-[480px]">
            {t.stats.items.map((stat, index) => (
              <StatCard
                key={index}
                stat={stat}
                index={index}
                isActive={hoveredIndex === index}
                onHover={setHoveredIndex}
              />
            ))}
          </div>

          {/* Right: Handle-style illustration (changes on hover) */}
          <div className="relative w-full h-64 sm:h-80 lg:h-[420px] rounded-2xl overflow-hidden hidden lg:block"
            style={{ background: '#f5f3f1', border: '1px solid #e8e4e1' }}>

            {STAT_ILLUSTRATIONS.map((Illus, i) => (
              <div
                key={i}
                className="absolute top-0 left-0 right-0 flex items-center justify-center transition-opacity duration-500"
                style={{ bottom: 100, opacity: i === activeIndex ? 1 : 0, padding: '0 24px' }}
              >
                <Illus />
              </div>
            ))}

            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-4"
                style={{ boxShadow: '0 1px 12px rgba(0,0,0,0.06)' }}>
                <div className="w-10 h-10 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1f2020] text-sm font-semibold">{t.stats.badge.title}</p>
                  <p className="text-[#3a3a3a]/50 text-xs mt-0.5">{t.stats.badge.subtitle}</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
