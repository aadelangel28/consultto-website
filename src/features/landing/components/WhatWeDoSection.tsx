'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

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
        if (entry.isIntersecting && !started) {
          setStarted(true)
        }
      },
      { threshold: 0.4 }
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

  return (
    <section ref={sectionRef} className="bg-white py-32 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#763d50] text-xs font-semibold uppercase tracking-widest mb-12">
          {t.whatWeDo.eyebrow}
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1f2020] leading-[1.6] min-h-[8rem]">
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
        </h2>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-3" style={{ opacity: done ? 1 : 0, transition: 'opacity 500ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          {(t.whatWeDo.pills as unknown as string[]).map((pill) => (
            <span key={pill} className="px-5 py-2 rounded-full border border-[#e2e2e2] text-[#3a3a3a]/60 text-xs font-medium">
              {pill}
            </span>
          ))}
        </div>

        <div className="mt-8" style={{ opacity: done ? 1 : 0, transition: 'opacity 600ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <Link
            href="#como-funciona"
            className="inline-flex items-center gap-2 text-[#3a3a3a]/50 hover:text-[#1f2020] transition-colors text-sm font-medium"
          >
            {t.whatWeDo.learnMore}
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
