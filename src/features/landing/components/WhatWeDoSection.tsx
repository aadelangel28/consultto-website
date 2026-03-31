'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'

const FULL_TEXT = 'Somos una plataforma de certificación y cumplimiento normativo que combina software, Agente IA y humanos expertos para que tu empresa se certifique más rápido, gaste menos y nunca pierda su certificación.'

export function WhatWeDoSection() {
  const [displayed, setDisplayed] = useState('')
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
      setDisplayed(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(interval)
    }, 18)
    return () => clearInterval(interval)
  }, [started])

  return (
    <section ref={sectionRef} className="bg-white py-32 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-12">
          Qué es Consultto
        </p>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-[#1f2020] leading-[1.4] min-h-[8rem]">
          {displayed}
          {displayed.length < FULL_TEXT.length && (
            <span className="inline-block w-[2px] h-[1em] bg-[#763d50] ml-1 animate-pulse align-middle" />
          )}
        </h2>

        {displayed.length >= FULL_TEXT.length && (
          <div className="mt-16" style={{ animation: 'fadeInUp 400ms cubic-bezier(0.16, 1, 0.3, 1) both' }}>
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
        )}
      </div>
    </section>
  )
}
