'use client'

import Link from 'next/link'
import React, { useEffect, useRef, useState, type ReactNode } from 'react'
import { ParticleBackground } from './components/ParticleBackground'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// ─── Scroll reveal ────────────────────────────────────────────────────────────

function useReveal() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.disconnect() } },
      { threshold: 0.1 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return ref
}

function Reveal({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useReveal()
  return (
    <div
      ref={ref}
      className={`reveal-ns ${className}`}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }}
    >
      {children}
      <style>{`.revealed { opacity: 1 !important; transform: none !important; }`}</style>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

// Posiciones X exactas extraídas del SVG del logo (font: Futura Medium 149.09px)
// "consul" empieza en x=0, "tt" en x=403.38, "o" en x=490.88 (coordenadas relativas al grupo)
// Las letras intermedias se calculan proporcionalmente al ancho total de "consul"=403.38px
const ANIM_LETTERS = [
  { char:'c', x:0,      ls:'-0.02em', delay:0,   dur:0.9,  anim:'lc',  bottom:false },
  { char:'o', x:66.2,   ls:'-0.02em', delay:95,  dur:0.85, anim:'lo1', bottom:false },
  { char:'n', x:144.8,  ls:'-0.02em', delay:180, dur:0.95, anim:'ln',  bottom:false },
  { char:'s', x:223.4,  ls:'-0.02em', delay:260, dur:0.75, anim:'ls',  bottom:false },
  { char:'u', x:289.6,  ls:'-0.02em', delay:335, dur:0.9,  anim:'lu',  bottom:false },
  { char:'l', x:368.2,  ls:'-0.02em', delay:415, dur:0.8,  anim:'ll',  bottom:true  },
  { char:'t', x:403.38, ls:'0.02em',  delay:490, dur:0.85, anim:'lt1', bottom:false },
  { char:'t', x:447.13, ls:'0.02em',  delay:578, dur:0.95, anim:'lt2', bottom:false },
  { char:'o', x:490.88, ls:'-0.02em', delay:668, dur:1.0,  anim:'lo2', bottom:false },
]

function HeroSection() {
  const { t } = useLanguage()
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center" style={{ background: '#fafafa' }}>
      <style>{`
        /* ── letter animations ── */
        @keyframes lc  {
          0%   { opacity:0; transform: translateX(-55px) rotate(-28deg); }
          60%  { transform: translateX(7px) rotate(4deg); }
          100% { opacity:1; transform: translateX(0) rotate(0deg); }
        }
        @keyframes lo1 {
          0%   { opacity:0; transform: scale(0.04) rotate(200deg); }
          55%  { transform: scale(1.22) rotate(-12deg); }
          78%  { transform: scale(0.93) rotate(3deg); }
          100% { opacity:1; transform: scale(1) rotate(0deg); }
        }
        @keyframes ln  {
          0%   { opacity:0; transform: translateY(-75px) skewX(-12deg); }
          58%  { transform: translateY(11px) skewX(4deg); }
          78%  { transform: translateY(-5px) skewX(-1deg); }
          100% { opacity:1; transform: translateY(0) skewX(0deg); }
        }
        @keyframes ls  {
          0%   { opacity:0; transform: perspective(500px) rotateY(-95deg) scaleX(0.4); }
          65%  { transform: perspective(500px) rotateY(12deg) scaleX(1.04); }
          100% { opacity:1; transform: perspective(500px) rotateY(0deg) scaleX(1); }
        }
        @keyframes lu  {
          0%   { opacity:0; transform: translateY(65px) rotate(22deg) scale(0.55); }
          62%  { transform: translateY(-9px) rotate(-4deg) scale(1.06); }
          82%  { transform: translateY(3px) rotate(1deg) scale(0.98); }
          100% { opacity:1; transform: translateY(0) rotate(0deg) scale(1); }
        }
        @keyframes ll  {
          0%   { opacity:0; transform: scaleY(0); }
          65%  { transform: scaleY(1.14); }
          85%  { transform: scaleY(0.96); }
          100% { opacity:1; transform: scaleY(1); }
        }
        @keyframes lt1 {
          0%   { opacity:0; transform: translateX(60px) skewX(-22deg) scale(0.65); }
          58%  { transform: translateX(-7px) skewX(6deg) scale(1.04); }
          80%  { transform: translateX(2px) skewX(-1deg) scale(0.99); }
          100% { opacity:1; transform: translateX(0) skewX(0deg) scale(1); }
        }
        @keyframes lt2 {
          0%   { opacity:0; transform: scale(3.8) rotate(-50deg); }
          50%  { transform: scale(0.85) rotate(10deg); }
          75%  { transform: scale(1.07) rotate(-3deg); }
          100% { opacity:1; transform: scale(1) rotate(0deg); }
        }
        @keyframes lo2 {
          0%   { opacity:0; filter:blur(16px); transform:scale(1.5); }
          60%  { filter:blur(3px); transform:scale(0.94); }
          100% { opacity:1; filter:blur(0px); transform:scale(1); }
        }
        /* ── hero support ── */
        @keyframes h-scroll-bounce {
          0%, 100% { transform: translateY(0); opacity:0.4; }
          50%       { transform: translateY(7px); opacity:0.85; }
        }
        .ll-span { display:inline-block; transform-origin: bottom center; }
        .hn-tagline { animation: h-tagline 0.8s cubic-bezier(0.16,1,0.3,1) 1.35s both; }
        .hn-scroll-ind { animation: h-tagline 0.7s cubic-bezier(0.16,1,0.3,1) 1.65s both; }
        .hn-arrow { animation: h-scroll-bounce 2.2s ease-in-out 2.4s infinite; }
        @keyframes h-tagline {
          from { opacity:0; transform: translateY(14px); }
          to   { opacity:1; transform: translateY(0); }
        }
        @keyframes clip-fadeout {
          from { opacity:1; }
          to   { opacity:0; }
        }
        @keyframes spacer-reveal {
          from { opacity:0; }
          to   { opacity:1; }
        }
      `}</style>

      <ParticleBackground />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 800, height: 500,
          background: 'radial-gradient(ellipse, rgba(118,61,80,0.08) 0%, rgba(118,61,80,0.03) 50%, transparent 72%)',
          filter: 'blur(50px)', flexShrink: 0,
        }} />
      </div>

      {/* Logo animado + tagline */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6">

        {/* SVG inline con cada letra animada individualmente → crossfade al PNG real */}
        <div style={{ position: 'relative', display: 'inline-block', marginBottom: '1.75rem' }}>

          {/* SVG con las letras exactas del logo (Futura Medium, mismas coords que el original) */}
          <svg
            viewBox="0 340 595.28 165"
            style={{ height: 'clamp(70px, 11vw, 118px)', width: 'auto', display: 'block', overflow: 'visible', animation: 'clip-fadeout 0.35s ease 1.9s both' }}
            aria-hidden="true"
          >
            <defs>
              <style>{`
                .svgl {
                  fill: #3a3a3a;
                  font-family: 'Futura', 'Century Gothic', 'Trebuchet MS', sans-serif;
                  font-size: 149.09px;
                  font-weight: 500;
                  transform-box: fill-box;
                  transform-origin: center center;
                }
                .svgl-b { transform-origin: center bottom; }
              `}</style>
            </defs>
            <g transform="translate(6.88 465.08)">
              {ANIM_LETTERS.map((l, i) => (
                <text
                  key={i}
                  className={`svgl${l.bottom ? ' svgl-b' : ''}`}
                  x={l.x}
                  y={0}
                  style={{
                    letterSpacing: l.ls,
                    animation: `${l.anim} ${l.dur}s cubic-bezier(0.16,1,0.3,1) ${l.delay}ms both`,
                  }}
                >
                  {l.char}
                </text>
              ))}
            </g>
          </svg>

          {/* PNG real — aparece al terminar la animación */}
          <img
            src="/logo.png"
            alt="Consultto"
            style={{
              position: 'absolute', top: 0, left: 0,
              height: '100%', width: '100%', objectFit: 'contain',
              animation: 'spacer-reveal 0.35s ease 1.9s both',
            }}
          />
        </div>

        {/* Tagline */}
        <p className="hn-tagline text-[#3a3a3a]/50 font-light tracking-wide"
          style={{ fontSize: 'clamp(0.82rem, 1.3vw, 1rem)', maxWidth: 440 }}>
          {t.nosotros.hero.tagline}
        </p>
      </div>

      {/* Scroll indicator */}
      <div className="hn-scroll-ind absolute bottom-10 left-0 right-0 z-10 flex flex-col items-center gap-2 pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#3a3a3a]/35 font-medium">
          {t.nosotros.hero.scrollLabel}
        </p>
        <svg className="hn-arrow w-4 h-4" style={{ color: 'rgba(118,61,80,0.4)' }}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10M4 9l4 4 4-4" />
        </svg>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,250,250,0.9))' }} />
    </section>
  )
}

// ─── Misión ───────────────────────────────────────────────────────────────────

function MisionSection() {
  const { t } = useLanguage()
  return (
    <section className="bg-white border-t border-[#efefef] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-6">
            {t.nosotros.vision.eyebrow}
          </p>
          <p className="text-[#1f2020] leading-[1.4]"
            style={{ fontSize: 'clamp(1.4rem, 2.6vw, 2rem)', fontWeight: 300 }}>
            {t.nosotros.vision.text}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
// ─── Visión ───────────────────────────────────────────────────────────────────


function WordReveal({ text, className = '', style = {} }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return
      el.querySelectorAll<HTMLSpanElement>('.wr-word').forEach((span, i) => {
        setTimeout(() => {
          span.style.opacity = '1'
          span.style.transform = 'translateY(0)'
        }, i * 55)
      })
      obs.disconnect()
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  const words = text.split(' ')
  return (
    <p ref={ref} className={className} style={{ ...style, lineHeight: 1.45 }}>
      {words.map((word, i) => (
        <span key={i} className="wr-word inline-block"
          style={{ opacity: 0, transform: 'translateY(18px)', transition: `opacity 0.5s ease, transform 0.6s cubic-bezier(0.16,1,0.3,1)`, marginRight: '0.28em' }}>
          {word}
        </span>
      ))}
    </p>
  )
}

function VisionSection() {
  const { t } = useLanguage()
  return (
    <section style={{ background: '#1f2020' }} className="py-16 md:py-20">
      <style>{`
        @keyframes vis-line {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        .vis-line { transform-origin: left; animation: vis-line 1s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
      `}</style>
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Eyebrow + línea */}
        <Reveal>
          <div className="flex items-center gap-4 mb-10">
            <p className="text-xs font-medium uppercase tracking-[0.2em] shrink-0" style={{ color: '#c47a8f' }}>
              {t.nosotros.mision.eyebrow}
            </p>
            <div className="vis-line h-px flex-1" style={{ background: 'rgba(196,122,143,0.25)' }} />
          </div>
        </Reveal>

        {/* Texto con animación palabra por palabra */}
        <WordReveal
          text={t.nosotros.mision.text}
          className="text-white/90"
          style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)', fontWeight: 300 }}
        />

      </div>
    </section>
  )
}

// ─── Principios ───────────────────────────────────────────────────────────────

function PrincipiosSection() {
  const { t } = useLanguage()
  const [hovered, setHovered] = useState<number | null>(null)
  const numbers = ['01', '02', '03', '04']

  return (
    <section className="py-16 md:py-28 bg-white border-t border-[#efefef]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-12 md:mb-16">
          <Reveal className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{t.nosotros.principios.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight max-w-sm">
              {t.nosotros.principios.title}
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:max-w-xs">
            <p className="text-[#3a3a3a]/45 text-sm leading-relaxed">
              {t.nosotros.principios.subtitle}
            </p>
          </Reveal>
        </div>

        {/* Pill accordion */}
        <div style={{ display: 'flex', gap: 12, height: 460 }}>
          {t.nosotros.principios.items.map((item, i) => {
            const isActive = hovered === i
            const flex     = hovered === null ? 0.3 : isActive ? 5 : 0.18
            return (
              <div
                key={i}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  flex,
                  transition: 'flex 0.55s cubic-bezier(0.25,1,0.5,1), background 0.4s ease, border-color 0.4s ease',
                  borderRadius: 24,
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'default',
                  minWidth: 0,
                  background: isActive ? '#faf8f8' : '#f5f2f3',
                  border: `1px solid ${isActive ? '#d4b8c0' : '#ebebeb'}`,
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  padding: '32px 28px',
                }}
              >
                {/* Number top-left */}
                <span style={{
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.18em',
                  color: '#763d50',
                  opacity: 0.6,
                }}>
                  {numbers[i]}
                </span>

                {/* Wine accent bar — bottom left, always visible */}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: isActive ? '100%' : 4,
                  height: isActive ? 3 : '100%',
                  background: '#763d50',
                  opacity: isActive ? 0.15 : 0.18,
                  borderRadius: isActive ? '0 0 24px 24px' : '24px 0 0 24px',
                  transition: 'width 0.55s cubic-bezier(0.25,1,0.5,1), height 0.55s cubic-bezier(0.25,1,0.5,1), border-radius 0.55s ease',
                }} />

                {/* Content — fades in when expanded */}
                <div style={{
                  opacity: isActive ? 1 : 0,
                  transition: 'opacity 0.25s ease 0.15s',
                  minWidth: 200,
                }}>
                  <h3 style={{
                    color: '#1f2020',
                    fontSize: 22,
                    fontWeight: 600,
                    marginBottom: 12,
                    lineHeight: 1.2,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'rgba(58,58,58,0.6)',
                    fontSize: 14,
                    lineHeight: 1.65,
                  }}>
                    {item.description}
                  </p>
                </div>

                {/* Title rotated when collapsed */}
                <div style={{
                  position: 'absolute',
                  bottom: 32,
                  left: 0,
                  right: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  opacity: isActive ? 0 : 1,
                  transition: isActive ? 'opacity 0.1s ease' : 'opacity 0.2s ease 0.1s',
                  pointerEvents: 'none',
                }}>
                  <span style={{
                    color: '#3a3a3a',
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    writingMode: 'vertical-rl',
                    transform: 'rotate(180deg)',
                    whiteSpace: 'nowrap',
                    opacity: 0.5,
                  }}>
                    {item.title}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  const { t } = useLanguage()
  return (
    <section className="py-14 md:py-24 border-t border-[#efefef]" style={{ background: '#f8f8f8' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{t.nosotros.cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
            {t.nosotros.cta.title}
          </h2>
          <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
            {t.nosotros.cta.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/demo"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
            >
              {t.nosotros.cta.cta1}
            </Link>
            <Link
              href="/consultor"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm text-center"
            >
              {t.nosotros.cta.cta2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function NosotrosPage() {
  return (
    <>
      <HeroSection />
      <VisionSection />
      <MisionSection />
      <PrincipiosSection />
      <CTASection />
    </>
  )
}
