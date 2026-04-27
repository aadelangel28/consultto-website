'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// ── Illustrations ─────────────────────────────────────────────────────────────

function IllusSoftware() {
  return (
    <svg viewBox="0 0 120 80" fill="none" className="w-full h-full">
      <rect x="10" y="8" width="100" height="64" rx="5"
        stroke="#1f2020" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.2" />
      <rect x="10" y="8" width="100" height="14" rx="5" fill="rgba(118,61,80,0.06)" stroke="none" />
      <circle cx="20" cy="15" r="2.5" fill="#1f2020" opacity="0.2" />
      <circle cx="28" cy="15" r="2.5" fill="#1f2020" opacity="0.2" />
      <circle cx="36" cy="15" r="2.5" fill="#1f2020" opacity="0.2" />
      <rect x="18" y="28" width="28" height="36" rx="3"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.04)" />
      {[34, 40, 46, 52, 58].map((y, i) => (
        <line key={i} x1="22" y1={y} x2={i % 2 === 0 ? "42" : "38"} y2={y}
          stroke="#1f2020" strokeWidth="0.7" opacity="0.2" />
      ))}
      <rect x="54" y="28" width="48" height="16" rx="3"
        stroke="#1f2020" strokeWidth="0.8" fill="white" opacity="0.6" />
      <line x1="58" y1="34" x2="94" y2="34" stroke="#1f2020" strokeWidth="0.7" opacity="0.18" />
      <line x1="58" y1="40" x2="86" y2="40" stroke="#1f2020" strokeWidth="0.7" opacity="0.18" />
      <rect x="54" y="50" width="48" height="16" rx="3"
        stroke="#763d50" strokeWidth="0.8" fill="rgba(118,61,80,0.05)" opacity="0.7" />
      <line x1="58" y1="56" x2="94" y2="56" stroke="#763d50" strokeWidth="0.7" opacity="0.25" />
      <line x1="58" y1="62" x2="80" y2="62" stroke="#763d50" strokeWidth="0.7" opacity="0.25" />
    </svg>
  )
}

function IllusAgenteIA() {
  const spokes: [number, number][] = [
    [30, 18], [90, 18], [15, 50], [105, 50], [30, 72], [90, 72],
  ]
  return (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      {spokes.map(([x, y], i) => (
        <line key={i} x1="60" y1="45" x2={x} y2={y}
          stroke="#1f2020" strokeWidth="0.7" opacity="0.15" />
      ))}
      {spokes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="5"
          stroke="#1f2020" strokeWidth="0.8" fill="white" opacity="0.5" />
      ))}
      <circle cx="60" cy="45" r="22"
        stroke="#763d50" strokeWidth="0.6" opacity="0.12" />
      <circle cx="60" cy="45" r="14"
        stroke="#763d50" strokeWidth="1" fill="rgba(118,61,80,0.06)" />
      <path d="M56 42 L60 36 L64 42 L70 45 L64 48 L60 54 L56 48 L50 45 Z"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.12)" opacity="0.7" />
    </svg>
  )
}

function IllusConsultoria() {
  return (
    <svg viewBox="0 0 120 90" fill="none" className="w-full h-full">
      <circle cx="40" cy="45" r="28"
        stroke="#1f2020" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.18" />
      <circle cx="80" cy="45" r="28"
        stroke="#763d50" strokeWidth="0.8" strokeDasharray="4 3" opacity="0.22" />
      <path d="M60 22 Q80 22 80 45 Q80 68 60 68 Q40 68 40 45 Q40 22 60 22 Z"
        fill="rgba(118,61,80,0.04)" />
      <circle cx="60" cy="45" r="12"
        stroke="#763d50" strokeWidth="1" fill="rgba(118,61,80,0.06)" />
      <path d="M55 45 L59 50 L67 40"
        stroke="#763d50" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" opacity="0.7" />
      <circle cx="22" cy="45" r="3" fill="#1f2020" opacity="0.15" />
      <circle cx="98" cy="45" r="3" fill="#763d50" opacity="0.2" />
    </svg>
  )
}

const CARD_ILLUSTS = [IllusSoftware, IllusAgenteIA, IllusConsultoria]

export function WhatWeDoSection() {
  const { t } = useLanguage()
  const words = t.whatWeDo.text.split(' ')
  const [visibleCount, setVisibleCount] = useState(0)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setVisibleCount(0)
    setStarted(false)
  }, [t.whatWeDo.text])

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true)
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setVisibleCount(i)
      if (i >= words.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started, words.length])

  const done = visibleCount >= words.length
  const pills = t.whatWeDo.pills as unknown as string[]

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-5xl mx-auto">

        {/* Eyebrow */}
        <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-10 text-center">
          {t.whatWeDo.eyebrow}
        </p>

        {/* Animated paragraph */}
        <p className="text-[#1f2020] text-xl md:text-2xl leading-relaxed font-light text-center max-w-3xl mx-auto min-h-[6rem]">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] transition-all duration-300"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Cards */}
        <div
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4"
          style={{ opacity: done ? 1 : 0, transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)' }}
        >
          {pills.map((pill, i) => {
            const Illus = CARD_ILLUSTS[i]
            return (
              <div key={pill}
                className="bg-[#f7f7f7] border border-[#f0f0f0] rounded-2xl px-6 pt-6 pb-5 flex flex-col gap-3 hover:border-[#e2e2e2] hover:shadow-sm transition-all duration-300"
              >
                <div className="h-16 flex items-center">
                  <Illus />
                </div>
                <p className="text-[#1f2020] text-sm font-semibold">{pill}</p>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
