'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const FULL_TEXT = 'Somos una plataforma de certificación y cumplimiento normativo que combina software, Agente IA y humanos expertos para que tu empresa se certifique más rápido, gaste menos y nunca pierda su certificación.'
const WORDS = FULL_TEXT.split(' ')

export function WhatWeDoSection() {
  const [visibleCount, setVisibleCount] = useState(0)
  const [started, setStarted] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      if (i >= WORDS.length) clearInterval(interval)
    }, 30)
    return () => clearInterval(interval)
  }, [started])

  const done = visibleCount >= WORDS.length

  return (
    <section ref={sectionRef} className="bg-white py-32 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#763d50] text-xs font-semibold uppercase tracking-widest mb-12">
          Qué es Consultto
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1f2020] leading-[1.6] min-h-[8rem]">
          {WORDS.map((word, i) => (
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

        <div className="mt-16" style={{ opacity: done ? 1 : 0, transition: 'opacity 400ms cubic-bezier(0.16, 1, 0.3, 1)' }}>
          <Link
            href="#como-funciona"
            className="inline-flex items-center gap-2 text-[#3a3a3a]/50 hover:text-[#1f2020] transition-colors text-sm font-medium"
          >
            Conoce más
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
