'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// Durations per stat index (language-independent)
const DURATIONS = [2000, 2000, 2500, 2200]

function parseValue(value: string): { num: number; suffix: string } {
  const match = value.match(/^(\d+)(.*)$/)
  if (match) return { num: parseInt(match[1]), suffix: match[2] }
  return { num: 0, suffix: value }
}

function StatCard({
  stat,
  index,
}: {
  stat: { value: string; label: string; description: string }
  index: number
}) {
  const { num, suffix } = parseValue(stat.value)
  const duration = DURATIONS[index] ?? 2000
  const [count, setCount] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Trigger on scroll into view
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

  // Count-up animation with ease-out
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
    <div ref={ref} className="flex flex-col gap-3 p-8">
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
                  <StatCard stat={stat} index={index} />
                </div>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className="relative w-full h-[480px] rounded-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=80"
              alt="Equipo revisando documentos de auditoría"
              fill
              className="object-cover"
            />
            {/* Subtle overlay */}
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
                  <p className="text-[#1f2020] text-sm font-semibold">Más de 200 organizaciones certificadas</p>
                  <p className="text-[#3a3a3a]/50 text-xs mt-0.5">en ISO 9001, ISO 14001, ISO 45001 e IATF 16949</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
