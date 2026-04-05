'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

type FeatureCard = {
  tag: string
  title: string
  description: string
  bullets: string[]
}

function BulletIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="shrink-0">
      <circle cx="9" cy="9" r="9" fill="#763d50" fillOpacity="0.1" />
      <path d="M5.5 9l2.5 2.5 4.5-4.5" stroke="#763d50" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function FeaturesSection() {
  const { t } = useLanguage()
  const cards = t.features.cards as unknown as FeatureCard[]
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)

  function goTo(i: number) {
    if (i === activeIndex) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(i)
      setFading(false)
    }, 150)
  }

  const active = cards[activeIndex]

  return (
    <section id="producto" className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
            {t.features.label}
          </p>
          <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-4">
            {t.features.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-sm leading-relaxed max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Tab nav */}
        {/* Mobile: grid 2 cols */}
        <div className="mb-8 md:hidden">
          <div className="grid grid-cols-2 gap-2">
            {cards.map((card, i) => (
              <button
                key={card.tag}
                onClick={() => goTo(i)}
                className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 ${
                  i === activeIndex
                    ? 'bg-[#763d50] text-white font-semibold shadow-sm'
                    : 'bg-[#f0f0f0] text-[#3a3a3a]/55'
                }`}
              >
                {card.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: single row pill */}
        <div className="hidden md:flex mb-8 justify-center">
          <div className="flex gap-1 bg-[#f0f0f0] rounded-full p-1.5">
            {cards.map((card, i) => (
              <button
                key={card.tag}
                onClick={() => goTo(i)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  i === activeIndex
                    ? 'bg-[#763d50] text-white font-semibold shadow-sm'
                    : 'text-[#3a3a3a]/55 hover:text-[#1f2020]'
                }`}
              >
                {card.tag}
              </button>
            ))}
          </div>
        </div>

        {/* Content card */}
        <div className="bg-[#f7f7f7] rounded-3xl px-6 py-8 sm:px-10 sm:py-12 md:px-16 md:py-14">

          {/* Description */}
          <p
            className={`text-[#1f2020] text-lg md:text-xl leading-relaxed text-center max-w-3xl mx-auto mb-10 transition-opacity duration-150 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            <span className="font-bold">{active.title}</span>
            {' — '}
            <span className="text-[#3a3a3a]/70">{active.description}</span>
          </p>

          {/* Bullets as chips */}
          <div
            className={`grid grid-cols-1 sm:grid-cols-2 gap-3 transition-opacity duration-150 ${
              fading ? 'opacity-0' : 'opacity-100'
            }`}
          >
            {active.bullets.map((bullet) => (
              <div
                key={bullet}
                className="flex items-center gap-3 bg-white rounded-2xl px-5 py-4 border border-[#e8e8e8]"
              >
                <BulletIcon />
                <span className="text-[#1f2020] text-sm font-medium leading-snug">{bullet}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
