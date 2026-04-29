'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

type Card = { title: string; description: string }

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
    }, 18)
    return () => clearInterval(interval)
  }, [started, words.length])

  const done = visibleCount >= words.length
  const cards = t.whatWeDo.cards as unknown as Card[]

  return (
    <section ref={sectionRef} className="bg-white py-24 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-5xl mx-auto">

        <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-10 text-center">
          {t.whatWeDo.eyebrow}
        </p>

        {/* Animated paragraph */}
        <p className="text-[#1f2020] text-xl md:text-2xl leading-relaxed font-light text-center max-w-3xl mx-auto min-h-[6rem]">
          {words.map((word, i) => (
            <span
              key={i}
              className="inline-block mr-[0.25em] transition-all duration-200"
              style={{
                opacity: i < visibleCount ? 1 : 0,
                transform: i < visibleCount ? 'translateY(0)' : 'translateY(6px)',
              }}
            >
              {word}
            </span>
          ))}
        </p>

        {/* Cards 2x2 — slide in from sides */}
        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {cards.map((card, idx) => {
            const fromLeft = idx % 2 === 0
            return (
              <div
                key={card.title}
                className="flex items-start gap-4 bg-[#f7f7f7] border border-[#f0f0f0] rounded-2xl px-6 py-5 hover:border-[#e2e2e2] transition-all duration-200"
                style={{
                  opacity: done ? 1 : 0,
                  transform: done ? 'translateX(0)' : `translateX(${fromLeft ? '-40px' : '40px'})`,
                  transition: done
                    ? `opacity 500ms cubic-bezier(0.16,1,0.3,1) ${idx * 80}ms, transform 500ms cubic-bezier(0.16,1,0.3,1) ${idx * 80}ms`
                    : 'none',
                }}
              >
                <div className="shrink-0 w-5 h-5 rounded-full bg-[#763d50]/10 flex items-center justify-center mt-0.5">
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="#763d50" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <div>
                  <p className="text-[#1f2020] text-sm font-semibold mb-1">{card.title}</p>
                  <p className="text-[#3a3a3a]/55 text-xs leading-relaxed">{card.description}</p>
                </div>
              </div>
            )
          })}
        </div>

      </div>
    </section>
  )
}
