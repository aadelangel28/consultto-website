'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { PaisData } from './data'
import { PaisSVG } from './PaisSVG'

interface Props {
  pais: PaisData
}

export function PaisHero({ pais }: Props) {
  const [fillProgress, setFillProgress] = useState(0)
  const [textVisible, setTextVisible] = useState(false)
  const animationRef = useRef<number | null>(null)
  const startTimeRef = useRef<number | null>(null)

  useEffect(() => {
    const FILL_DURATION = 2200 // ms to fill the map
    const TEXT_DELAY = 1800    // ms before text fades in

    const textTimer = setTimeout(() => setTextVisible(true), TEXT_DELAY)

    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp
      const elapsed = timestamp - startTimeRef.current
      const progress = Math.min(elapsed / FILL_DURATION, 1)

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setFillProgress(eased)

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate)
      }
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
      clearTimeout(textTimer)
    }
  }, [])

  // fillProgress goes 0→1, we reveal the fill from bottom to top
  // by moving a clipPath rect upward
  const fillPercent = fillProgress * 100
  const clipY = 100 - fillPercent // starts at 100 (hidden), goes to 0 (fully shown)

  const clipId = `fill-clip-${pais.slug}`

  return (
    <section className="relative bg-[#faf8f6] overflow-hidden min-h-screen flex items-center">

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, #763d50 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#763d50]/40 to-transparent" />

      {/* Map — centered right half */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 flex items-center justify-center pointer-events-none select-none">

        {/* Glow behind map */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full blur-[100px] transition-opacity duration-1000"
          style={{ backgroundColor: `rgba(118,61,80,${0.06 + fillProgress * 0.08})` }}
        />

        {/* SVG with two layers: outline + fill revealed bottom-to-top */}
        <div className="relative h-[580px] w-auto">
          <svg
            viewBox="0 0 1 1"
            className="absolute inset-0 w-full h-full"
            style={{ overflow: 'visible' }}
          >
            <defs>
              <clipPath id={clipId} clipPathUnits="objectBoundingBox">
                {/* rect starts at y=clipY/100, height covers the rest — reveals from bottom */}
                <rect
                  x="-0.5"
                  y={clipY / 100}
                  width="2"
                  height="2"
                />
              </clipPath>
            </defs>
          </svg>

          {/* Outline layer — always visible, low opacity */}
          <PaisSVG
            slug={pais.slug}
            className="absolute inset-0 h-full w-auto text-[#763d50] opacity-[0.12]"
          />

          {/* Fill layer — revealed bottom to top via clip */}
          <div
            className="absolute inset-0 h-full w-auto overflow-hidden"
            style={{
              clipPath: `inset(${clipY}% 0 0 0)`,
            }}
          >
            <PaisSVG
              slug={pais.slug}
              className="h-full w-auto text-[#763d50] opacity-[0.28]"
            />
          </div>

          {/* Shimmer line at the fill boundary */}
          {fillProgress > 0 && fillProgress < 1 && (
            <div
              className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#763d50]/60 to-transparent pointer-events-none"
              style={{ top: `${clipY}%` }}
            />
          )}
        </div>
      </div>

      {/* Content — left side */}
      <div className="relative max-w-6xl mx-auto px-6 w-full pt-32 pb-28">
        <div className="max-w-[520px]">

          {/* Breadcrumb */}
          <div
            className="flex items-center gap-2 mb-8 transition-all duration-700"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(12px)' }}
          >
            <span className="text-[#3a3a3a]/35 text-xs">Consultto</span>
            <span className="text-[#3a3a3a]/25 text-xs">›</span>
            <span className="text-[#763d50] text-xs font-semibold">{pais.nombre}</span>
          </div>

          {/* Organismo badge */}
          <div
            className="inline-flex items-center gap-2 bg-white border border-[#e8e0e3] rounded-full px-4 py-1.5 mb-7 shadow-sm transition-all duration-700 delay-100"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(12px)' }}
          >
            <div className="w-1.5 h-1.5 rounded-full bg-[#763d50]" />
            <span className="text-[#763d50] text-xs font-semibold">{pais.organismoLocal}</span>
            <span className="text-[#3a3a3a]/40 text-xs hidden sm:inline">— {pais.organismoDesc}</span>
          </div>

          {/* Headline */}
          <h1
            className="text-[#1f2020] text-4xl md:text-5xl font-light leading-[1.15] mb-5 transition-all duration-700 delay-150"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
          >
            {pais.heroTitle}
          </h1>

          {/* Subtitle */}
          <p
            className="text-[#3a3a3a]/60 text-lg leading-relaxed mb-10 transition-all duration-700 delay-200"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
          >
            {pais.heroSubtitle}
          </p>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-3 transition-all duration-700 delay-300"
            style={{ opacity: textVisible ? 1 : 0, transform: textVisible ? 'translateY(0)' : 'translateY(16px)' }}
          >
            <Link
              href="/demo"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm whitespace-nowrap text-center"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="/consultor"
              className="border border-[#d9d9d9] hover:border-[#763d50]/40 text-[#3a3a3a] hover:text-[#763d50] bg-white px-8 py-3.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap text-center"
            >
              Hablar con un consultor
            </Link>
          </div>

        </div>
      </div>

    </section>
  )
}
