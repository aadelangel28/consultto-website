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

const VC_STRIPS = [
  { src: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', name: 'Ana García',    role: 'Directora de Calidad'   },
  { src: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80', name: 'Carlos Méndez',  role: 'Consultor Senior ISO'   },
  { src: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=800&q=80', name: 'Laura Torres',  role: 'Auditora Certificada'   },
  { src: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&q=80', name: 'Miguel Ruiz',   role: 'Especialista en SGC'    },
]

function VisionCollage() {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div style={{ display: 'flex', gap: 10, height: 420 }}>
      {VC_STRIPS.map((p, i) => {
        const isActive = hovered === i
        const isIdle   = hovered === null
        const flex     = isIdle ? 1 : isActive ? 4 : 0.55
        return (
          <div
            key={i}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              flex,
              transition: 'flex 0.55s cubic-bezier(0.25,1,0.5,1)',
              borderRadius: 14,
              overflow: 'hidden',
              position: 'relative',
              cursor: 'pointer',
              minWidth: 0,
            }}
          >
            <img
              src={p.src}
              alt={p.name}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
            />
            {/* gradient overlay */}
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)',
              pointerEvents: 'none',
            }} />
            {/* collapsed label — vertical text */}
            <div style={{
              position: 'absolute', bottom: 16, left: 0, right: 0,
              display: 'flex', justifyContent: 'center',
              opacity: isActive ? 0 : 1,
              transition: 'opacity 0.25s ease',
              pointerEvents: 'none',
            }}>
              <span style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)',
                color: 'white',
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: '0.05em',
                whiteSpace: 'nowrap',
                textShadow: '0 1px 4px rgba(0,0,0,0.4)',
              }}>
                {p.name}
              </span>
            </div>
            {/* expanded label */}
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              padding: '14px 16px',
              opacity: isActive ? 1 : 0,
              transform: isActive ? 'translateY(0)' : 'translateY(6px)',
              transition: 'opacity 0.3s ease 0.1s, transform 0.3s ease 0.1s',
              pointerEvents: 'none',
            }}>
              <div style={{ color: 'white', fontWeight: 700, fontSize: 15, lineHeight: 1.3 }}>{p.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: 13, marginTop: 2 }}>{p.role}</div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MisionSection() {
  const { t } = useLanguage()
  return (
    <section className="bg-white border-t border-[#efefef] py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Izquierda: collage — sólo en pantallas grandes ── */}
          <div className="hidden lg:block">
            <VisionCollage />
          </div>

          {/* ── Derecha: texto ── */}
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-6">
              {t.nosotros.vision.eyebrow}
            </p>
            <h2 className="text-[#1f2020] leading-[1.4]"
              style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)', fontWeight: 400 }}>
              {t.nosotros.vision.text}
            </h2>
          </Reveal>

        </div>
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

const PRINCIPIO_ICONS = [
  <svg key="0" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
  </svg>,
  <svg key="1" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>,
  <svg key="2" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
  </svg>,
  <svg key="3" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
  </svg>,
]

type PrincipioItem = { title: string; description: string; number: string; icon: React.ReactNode }

function PrincipioCard({ p, index }: { p: PrincipioItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add('revealed'); obs.disconnect() } },
      { threshold: 0.2 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <div ref={ref} className="prn-card group">
      <style>{`
        .prn-card .prn-bg {
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 80}ms;
        }
        .prn-card.revealed .prn-bg { transform: scaleY(1); }
        .prn-card .prn-icon {
          opacity: 0; transform: scale(0.5) rotate(-15deg);
          transition: opacity 0.5s ease ${index * 80 + 200}ms, transform 0.6s cubic-bezier(0.34,1.5,0.64,1) ${index * 80 + 200}ms;
        }
        .prn-card.revealed .prn-icon { opacity: 1; transform: scale(1) rotate(0deg); }
        .prn-card .prn-text {
          opacity: 0; transform: translateY(14px);
          transition: opacity 0.55s ease ${index * 80 + 320}ms, transform 0.55s cubic-bezier(0.16,1,0.3,1) ${index * 80 + 320}ms;
        }
        .prn-card.revealed .prn-text { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="relative rounded-3xl p-8 border border-[#ebebeb] bg-white overflow-hidden transition-shadow duration-300 group-hover:shadow-md group-hover:shadow-[#763d50]/8 h-full">
        {/* Animated bg fill on reveal */}
        <div className="prn-bg absolute inset-0 rounded-3xl" style={{ background: 'rgba(118,61,80,0.025)' }} />

        <div className="relative z-10">
          {/* Number + icon row */}
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-black tracking-widest text-[#3a3a3a]/20">{p.number}</span>
            <div
              className="prn-icon w-11 h-11 rounded-2xl flex items-center justify-center"
              style={{ background: 'rgba(118,61,80,0.08)', color: '#763d50' }}
            >
              {p.icon}
            </div>
          </div>

          <div className="prn-text">
            <h3 className="text-[#1f2020] font-semibold text-lg mb-3 leading-snug">{p.title}</h3>
            <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">{p.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function PrincipiosSection() {
  const { t } = useLanguage()
  const numbers = ['01', '02', '03', '04']
  const principios: PrincipioItem[] = t.nosotros.principios.items.map((item, i) => ({
    ...item,
    number: numbers[i],
    icon: PRINCIPIO_ICONS[i],
  }))

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

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {principios.map((p, i) => (
            <PrincipioCard key={p.number} p={p} index={i} />
          ))}
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
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
            >
              {t.nosotros.cta.cta1}
            </Link>
            <Link
              href="/contacto"
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
