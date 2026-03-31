'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const DURATIONS = [2000, 2000, 2500, 2200]

const STAT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=1200&q=80',
    alt: 'Auditoría aprobada, apretón de manos entre cliente y auditor',
  },
  {
    src: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200&q=80',
    alt: 'Ahorro y reducción de costos en consultoría',
  },
  {
    src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80',
    alt: 'Equipo trabajando en implementación rápida',
  },
  {
    src: '/monitor-green.jpg',
    alt: 'Plataforma Consultto con visibilidad organizacional completa',
  },
]

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (match) return { num: parseInt(match[1]), suffix: match[2] }
  return { num: 0, suffix: value }
}

function StatCard({
  stat,
  index,
  onHover,
}: {
  stat: { value: string; label: string; description: string }
  index: number
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
      className="flex flex-col gap-3 p-8 cursor-default transition-colors duration-200 hover:bg-[#faf5f6] rounded-xl"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
    >
      <div className="text-[#763d50] text-5xl font-semibold leading-none tabular-nums">
        {triggered ? count : 0}
        <span>{suffix}</span>
      </div>
      <div className="text-[#1f2020] font-semibold text-base leading-snug">{stat.label}</div>
      <div className="text-[#3a3a3a]/50 text-sm leading-relaxed">{stat.description}</div>
    </div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const activeIndex = hoveredIndex ?? 2
  const activeImage = STAT_IMAGES[activeIndex]

  return (
    <section id="como-funciona" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left: title + stats grid */}
          <div>
            <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-4">
              {t.stats.label}
            </p>
            <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-12">
              {t.stats.title}
            </h2>

            <div className="grid grid-cols-2 gap-0">
              {t.stats.items.map((stat, index) => (
                <div
                  key={index}
                  className={`
                    ${index === 0 ? 'border-b border-r' : ''}
                    ${index === 1 ? 'border-b' : ''}
                    ${index === 2 ? 'border-r' : ''}
                    border-[#e8e8e8]
                  `}
                >
                  <StatCard stat={stat} index={index} onHover={setHoveredIndex} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: image (changes on hover) */}
          {/* aspect ratio matches monitor-green.jpg (3293×1852) so overlay coords are always exact */}
          <div
            className="relative w-full rounded-2xl overflow-hidden"
            style={{ aspectRatio: '3293/1852' }}
          >
            {STAT_IMAGES.map((img, i) => (
              <Image
                key={i}
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-opacity duration-500"
                style={{ opacity: i === activeIndex ? 1 : 0 }}
              />
            ))}

            {/* Mockup overlay — fits exactly inside the green screen */}
            <div
              className="absolute transition-opacity duration-500 pointer-events-none"
              style={{
                opacity: activeIndex === 3 ? 1 : 0,
                left: '29%',
                top: '9%',
                width: '34%',
                height: '51%',
                overflow: 'hidden',
                borderRadius: '2px',
              }}
            >
              <div className="w-full h-full flex flex-col bg-white p-[4%] gap-[3%]">
                {/* Top bar */}
                <div className="flex items-center justify-between shrink-0">
                  <span className="text-[clamp(6px,1.2cqw,11px)] font-bold text-[#1f2020]">Consultto</span>
                  <span className="bg-[#763d50] text-white text-[clamp(5px,1cqw,9px)] px-[4%] py-[1.5%] rounded-full font-semibold">ISO 9001</span>
                </div>
                {/* Stats row */}
                <div className="flex gap-[3%] flex-1 min-h-0">
                  {[
                    { v: '24', l: 'Documentos' },
                    { v: '3', l: 'CAPAs abiertas' },
                    { v: '12d', l: 'Auditoría' },
                  ].map((s) => (
                    <div key={s.l} className="flex-1 bg-[#f8f8f8] border border-[#e8e8e8] rounded-[4px] p-[6%] flex flex-col justify-between">
                      <span className="text-[#1f2020] font-black text-[clamp(8px,2cqw,18px)] leading-none">{s.v}</span>
                      <span className="text-[#3a3a3a]/50 text-[clamp(5px,0.9cqw,8px)] leading-none">{s.l}</span>
                    </div>
                  ))}
                </div>
                {/* Agente IA bar */}
                <div className="bg-[#763d50]/10 border border-[#763d50]/20 rounded-[4px] px-[4%] py-[2.5%] flex items-center gap-[3%] shrink-0">
                  <div className="w-[6%] aspect-square rounded-full bg-[#763d50] animate-pulse shrink-0" />
                  <span className="text-[#763d50] text-[clamp(5px,0.9cqw,8px)] font-semibold truncate">Agente IA — 4 procedimientos pendientes de revisión</span>
                </div>
                {/* Progress bar */}
                <div className="shrink-0">
                  <div className="flex justify-between mb-[2%]">
                    <span className="text-[#3a3a3a]/40 text-[clamp(4px,0.8cqw,7px)]">Progreso certificación</span>
                    <span className="text-[#763d50] text-[clamp(4px,0.8cqw,7px)] font-bold">78%</span>
                  </div>
                  <div className="w-full bg-[#f0f0f0] rounded-full" style={{ height: '4px' }}>
                    <div className="bg-[#763d50] rounded-full h-full" style={{ width: '78%' }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-[#1f2020]/30 to-transparent" />
            {/* Badge */}
            <div className="absolute bottom-6 left-6 right-6">
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-5 py-4 flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0">
                  <svg className="w-5 h-5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1f2020] text-sm font-semibold">Soporte para más de 16 normas internacionales</p>
                  <p className="text-[#3a3a3a]/50 text-xs mt-0.5">ISO 9001, IATF, FSSC 22000, AS9100 y más — en un solo sistema</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
