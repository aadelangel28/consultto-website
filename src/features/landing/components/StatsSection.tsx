'use client'

import { useEffect, useRef, useState } from 'react'
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
    <div
      ref={ref}
      className="bg-white p-8 flex flex-col gap-3 hover:bg-[#f8f8f8] transition-colors duration-300"
    >
      <div className="text-[#763d50] text-5xl font-black leading-none tabular-nums">
        {triggered ? count : 0}
        <span>{suffix}</span>
      </div>
      <div className="text-[#1f2020] font-bold text-base leading-snug">{stat.label}</div>
      <div className="text-[#3a3a3a]/50 text-sm leading-relaxed">{stat.description}</div>
    </div>
  )
}

export function StatsSection() {
  const { t } = useLanguage()

  return (
    <section id="como-funciona" className="bg-white py-24 px-6 relative overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-4">
            {t.stats.label}
          </p>
          <h2 className="text-[#1f2020] text-4xl md:text-5xl font-black leading-tight">
            {t.stats.title}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[#d9d9d9] rounded-2xl overflow-hidden border border-[#d9d9d9]">
          {t.stats.items.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
