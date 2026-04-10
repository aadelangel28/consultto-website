'use client'

import Link from 'next/link'
import { useEffect, useRef, useState, type ReactNode } from 'react'
import type { NormaData } from './data'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import { NORMAS_EN, NORMAS_PT } from './data.translations'

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
      className={`reveal-n ${className}`}
      style={{ opacity: 0, transform: 'translateY(24px)', transition: `opacity 0.7s ease ${delay}ms, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${delay}ms` }}
    >
      {children}
      <style>{`.revealed { opacity: 1 !important; transform: none !important; }`}</style>
    </div>
  )
}

// ─── Hero ─────────────────────────────────────────────────────────────────────

function HeroSection({ norma }: { norma: NormaData }) {
  const { t } = useLanguage()
  const normaPageT = t.normaPage
  const chars = (norma.code + norma.version).split('')

  return (
    <section className="relative overflow-hidden bg-white">
      <style>{`
        @keyframes char-drop {
          0%   { opacity: 0; transform: translateY(-60px) rotateX(90deg); }
          60%  { transform: translateY(4px) rotateX(-6deg); }
          100% { opacity: 1; transform: translateY(0) rotateX(0deg); }
        }
        @keyframes line-out {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes fade-up-soft {
          from { opacity: 0; transform: translateY(18px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .nh-char    { display: inline-block; animation: char-drop 0.55s cubic-bezier(0.34,1.3,0.64,1) both; }
        .nh-line    { animation: line-out 1s cubic-bezier(0.16,1,0.3,1) both; transform-origin: center; }
        .nh-name    { animation: fade-up-soft 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .nh-sub     { animation: fade-up-soft 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .nh-cta     { animation: fade-up-soft 0.65s cubic-bezier(0.16,1,0.3,1) both; }
        .nh-badge   { animation: fade-up-soft 0.5s cubic-bezier(0.16,1,0.3,1) 0.05s both; }
      `}</style>

      {/* Top section — code as centrepiece */}
      <div className="relative pt-28 md:pt-40 pb-12 md:pb-16 text-center">
        {/* Category badge */}
        <span className="nh-badge inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#763d50] mb-8 block">
          <span className="w-1.5 h-1.5 rounded-full bg-[#763d50] inline-block" />
          {norma.categoria}
        </span>

        {/* Norm code — each character drops in */}
        <div className="perspective-[600px] mb-6 overflow-hidden" style={{ perspective: '600px' }}>
          <p
            className="font-black text-[#1f2020] leading-none tracking-tight whitespace-nowrap"
            style={{ fontSize: 'clamp(2.5rem, 10vw, 11rem)', letterSpacing: '-0.03em' }}
            aria-label={norma.code + norma.version}
          >
            {chars.map((ch, i) => (
              <span
                key={i}
                className="nh-char"
                style={{
                  animationDelay: `${i * 45}ms`,
                  color: ch === ':' || /[0-9]/.test(ch) ? 'rgba(118,61,80,0.35)' : '#1f2020',
                }}
              >
                {ch === ' ' ? '\u00A0' : ch}
              </span>
            ))}
          </p>
        </div>

        {/* Animated center line expanding outward */}
        <div className="flex justify-center mb-8">
          <div
            className="nh-line h-px w-48 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #763d50, transparent)',
              animationDelay: `${chars.length * 45 + 100}ms`,
            }}
          />
        </div>

        {/* Full name */}
        <h1
          className="nh-name text-2xl sm:text-3xl font-bold text-[#1f2020] mb-4 px-6"
          style={{ animationDelay: `${chars.length * 45 + 200}ms` }}
        >
          {norma.fullName}
        </h1>

        {/* Tagline */}
        <p
          className="nh-sub text-[#3a3a3a]/50 text-base leading-relaxed max-w-xl mx-auto px-6 mb-10"
          style={{ animationDelay: `${chars.length * 45 + 320}ms` }}
        >
          {norma.tagline}
        </p>

        {/* CTAs */}
        <div
          className="nh-cta flex flex-col sm:flex-row gap-3 justify-center px-6"
          style={{ animationDelay: `${chars.length * 45 + 430}ms` }}
        >
          <Link
            href="https://calendly.com/alan-consultto/30min" target="_blank" rel="noopener noreferrer"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
          >
            {normaPageT.cta.cta1}
          </Link>
          <Link
            href="/contacto"
            className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm text-center"
          >
            {normaPageT.cta.cta2}
          </Link>
        </div>
      </div>

      {/* Bottom divider */}
      <div className="h-px bg-[#efefef]" />
    </section>
  )
}

// ─── Requisitos — split layout ─────────────────────────────────────────────────

function RequisitosSection({ norma }: { norma: NormaData }) {
  const { t } = useLanguage()
  const np = t.normaPage
  return (
    <section className="py-14 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{np.requisitos.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-16 max-w-2xl">
            {np.requisitos.title.replace('{code}', norma.code)}
          </h2>
        </Reveal>

        <div className="space-y-0">
          {norma.requisitos.map((req, i) => (
            <ReqRow key={req.clause} req={req} index={i} total={norma.requisitos.length} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ReqRow({ req, index, total }: {
  req: { clause: string; title: string; description: string }
  index: number
  total: number
}) {
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
    <div ref={ref} className="req-row">
      <style>{`
        .req-row .rr-sep {
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1) ${index * 60}ms;
        }
        .req-row.revealed .rr-sep { transform: scaleX(1); }
        .req-row .rr-clause {
          opacity: 0; transform: translateX(-16px);
          transition: opacity 0.6s ease ${index * 60 + 150}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 60 + 150}ms;
        }
        .req-row.revealed .rr-clause { opacity: 1; transform: translateX(0); }
        .req-row .rr-content {
          opacity: 0; transform: translateY(10px);
          transition: opacity 0.6s ease ${index * 60 + 250}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 60 + 250}ms;
        }
        .req-row.revealed .rr-content { opacity: 1; transform: translateY(0); }
      `}</style>

      <div className="rr-sep h-px bg-[#ebebeb]" />

      <div className="grid grid-cols-12 gap-6 py-10 items-start group">
        {/* Clause — big visual anchor */}
        <div className="col-span-12 sm:col-span-3">
          <span
            className="rr-clause block font-black leading-none"
            style={{ fontSize: '2.5rem', color: 'rgba(118,61,80,0.18)' }}
          >
            {req.clause}
          </span>
        </div>

        {/* Content */}
        <div className="col-span-12 sm:col-span-9 rr-content">
          <h3 className="text-[#1f2020] font-semibold text-lg mb-3 leading-snug group-hover:text-[#763d50] transition-colors duration-300">
            {req.title}
          </h3>
          <p className="text-[#3a3a3a]/55 text-sm leading-relaxed max-w-2xl">
            {req.description}
          </p>
        </div>
      </div>

      {index === total - 1 && <div className="rr-sep h-px bg-[#ebebeb]" style={{ transform: 'scaleX(1)' }} />}
    </div>
  )
}

// ─── Stats band ────────────────────────────────────────────────────────────────

function StatsBand({ norma }: { norma: NormaData }) {
  return (
    <section style={{ background: '#763d50' }}>
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {norma.stats.map((stat, i) => (
            <StatItem key={i} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

function parseStatValue(value: string): { number: number; prefix: string; suffix: string } {
  // e.g. "1.1M+" → number=1.1, prefix="", suffix="M+"
  // e.g. "170+"  → number=170, prefix="", suffix="+"
  // e.g. "98%"   → number=98,  prefix="", suffix="%"
  // e.g. "5 días" → number=5, prefix="", suffix=" días"
  const match = value.match(/^([^0-9]*)([0-9]+(?:\.[0-9]+)?)(.*)$/)
  if (!match) return { number: 0, prefix: '', suffix: value }
  return { number: parseFloat(match[2]), prefix: match[1], suffix: match[3] }
}

function StatItem({ stat, index }: { stat: { value: string; label: string }; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [count, setCount] = useState(0)
  const { number, prefix, suffix } = parseStatValue(stat.value)
  const isDecimal = number % 1 !== 0

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!visible) return
    const delay = index * 120
    const duration = 1800
    const steps = 60
    let frame = 0
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        frame++
        // easeOutExpo
        const progress = frame / steps
        const eased = 1 - Math.pow(1 - progress, 4)
        setCount(parseFloat((eased * number).toFixed(isDecimal ? 1 : 0)))
        if (frame >= steps) { setCount(number); clearInterval(interval) }
      }, duration / steps)
      return () => clearInterval(interval)
    }, delay)
    return () => clearTimeout(timer)
  }, [visible, number, index, isDecimal])

  const displayValue = `${prefix}${isDecimal ? count.toFixed(1) : Math.round(count)}${suffix}`

  return (
    <div
      ref={ref}
      className="px-8 py-10 text-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(16px)',
        transition: `opacity 0.6s ease ${index * 120}ms, transform 0.6s cubic-bezier(0.16,1,0.3,1) ${index * 120}ms`,
      }}
    >
      <p className="text-4xl md:text-5xl font-black text-white mb-2 leading-none tabular-nums">
        {visible ? displayValue : `${prefix}0${suffix}`}
      </p>
      <p className="text-sm text-white/55 leading-snug">{stat.label}</p>
    </div>
  )
}

// ─── A quién aplica ───────────────────────────────────────────────────────────

function AplicaSection({ norma }: { norma: NormaData }) {
  const { t } = useLanguage()
  const np = t.normaPage
  return (
    <section className="py-14 md:py-20 border-t border-[#efefef]" style={{ background: '#f8f8f8' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{np.aplica.eyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
              {np.aplica.title.replace('{code}', norma.code)}
            </h2>
            <p className="text-[#3a3a3a]/55 text-base leading-relaxed">
              {norma.scope}
            </p>
          </Reveal>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-3">
            {norma.industrias.map((ind, i) => (
              <Reveal key={ind} delay={i * 60}>
                <div
                  className="rounded-2xl px-4 py-4 text-center border transition-all duration-300 hover:scale-[1.03]"
                  style={{ background: 'white', borderColor: 'rgba(118,61,80,0.12)' }}
                >
                  <div
                    className="w-8 h-8 rounded-xl mx-auto mb-3 flex items-center justify-center"
                    style={{ background: 'rgba(118,61,80,0.08)' }}
                  >
                    <span className="w-2 h-2 rounded-full" style={{ background: '#763d50' }} />
                  </div>
                  <p className="text-[#1f2020] text-xs font-semibold leading-snug">{ind}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Cómo Consultto gestiona — alternating layout ────────────────────────────

function GestionaItem({
  item, index,
}: { item: { title: string; description: string }; index: number }) {
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

  const isEven = index % 2 === 0

  const icons = [
    <svg key="a" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>,
    <svg key="b" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
    </svg>,
    <svg key="c" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>,
    <svg key="d" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
    </svg>,
  ]

  return (
    <div
      ref={ref}
      className={`gestiona-item grid grid-cols-1 lg:grid-cols-2 gap-0 border-b border-[#ebebeb] overflow-hidden`}
    >
      <style>{`
        /* Background wash sweeps in */
        .gestiona-item .gi-bg {
          transform: scaleX(0);
          transform-origin: ${isEven ? 'left' : 'right'};
          transition: transform 0.8s cubic-bezier(0.16,1,0.3,1) 0s;
        }
        .gestiona-item.revealed .gi-bg { transform: scaleX(1); }

        /* Number drops from above */
        .gestiona-item .gi-number {
          opacity: 0;
          transform: translateY(-40px) scale(0.8);
          transition: opacity 0.6s ease 0.35s, transform 0.7s cubic-bezier(0.34,1.4,0.64,1) 0.35s;
        }
        .gestiona-item.revealed .gi-number { opacity: 1; transform: translateY(0) scale(1); }

        /* Icon springs up */
        .gestiona-item .gi-icon {
          opacity: 0;
          transform: translateY(20px) scale(0.5);
          transition: opacity 0.5s ease 0.6s, transform 0.6s cubic-bezier(0.34,1.6,0.64,1) 0.6s;
        }
        .gestiona-item.revealed .gi-icon { opacity: 1; transform: translateY(0) scale(1); }

        /* Title slides in from opposite side */
        .gestiona-item .gi-title {
          opacity: 0;
          transform: translateX(${isEven ? '30px' : '-30px'});
          transition: opacity 0.6s ease 0.3s, transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.3s;
        }
        .gestiona-item.revealed .gi-title { opacity: 1; transform: translateX(0); }

        /* Description fades up */
        .gestiona-item .gi-desc {
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease 0.48s, transform 0.6s cubic-bezier(0.16,1,0.3,1) 0.48s;
        }
        .gestiona-item.revealed .gi-desc { opacity: 1; transform: translateY(0); }

        /* Underline draws left→right on reveal */
        .gestiona-item .gi-underline {
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.7s cubic-bezier(0.16,1,0.3,1) 0.65s;
        }
        .gestiona-item.revealed .gi-underline { transform: scaleX(1); }
      `}</style>

      {/* Number side */}
      <div
        className={`relative flex items-center justify-center py-20 px-12 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}
      >
        {/* Animated background wash */}
        <div
          className="gi-bg absolute inset-0"
          style={{ background: isEven ? 'rgba(118,61,80,0.05)' : '#fafafa' }}
        />

        <div className="relative z-10 text-center">
          <span
            className="gi-number block font-black leading-none mb-5"
            style={{ fontSize: 'clamp(6rem, 14vw, 10rem)', color: 'rgba(118,61,80,0.15)' }}
          >
            {String(index + 1).padStart(2, '0')}
          </span>
          <div
            className="gi-icon w-14 h-14 rounded-2xl flex items-center justify-center mx-auto shadow-sm"
            style={{ background: 'rgba(118,61,80,0.1)', color: '#763d50' }}
          >
            {icons[index % icons.length]}
          </div>
        </div>
      </div>

      {/* Text side */}
      <div
        className={`flex flex-col justify-center px-12 py-20 bg-white ${isEven ? 'lg:order-2' : 'lg:order-1'}`}
      >
        <h3 className="gi-title text-[#1f2020] font-semibold text-xl mb-4 leading-snug">
          {item.title}
        </h3>

        {/* Animated underline under title */}
        <div className="gi-underline h-[2px] w-12 mb-5 rounded-full" style={{ background: '#763d50' }} />

        <p className="gi-desc text-[#3a3a3a]/55 text-sm leading-relaxed">{item.description}</p>
      </div>
    </div>
  )
}

function ComoGestionaSection({ norma }: { norma: NormaData }) {
  const { t } = useLanguage()
  const np = t.normaPage
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto px-6 pt-14 md:pt-24 pb-0">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{np.gestiona.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-16 max-w-2xl">
            {np.gestiona.title.replace('{code}', norma.code)}
          </h2>
        </Reveal>
      </div>

      <div className="max-w-6xl mx-auto border-t border-[#ebebeb]">
        {norma.comoGestiona.map((item, i) => (
          <GestionaItem key={item.title} item={item} index={i} />
        ))}
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection({ norma }: { norma: NormaData }) {
  const { t } = useLanguage()
  const np = t.normaPage
  return (
    <section className="py-14 md:py-24 bg-white border-t border-[#efefef]">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">{np.cta.eyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
            {norma.ctaTitle}
          </h2>
          <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
            {norma.ctaSubtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="https://calendly.com/alan-consultto/30min" target="_blank" rel="noopener noreferrer"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm text-center"
            >
              {np.cta.cta1}
            </Link>
            <Link
              href="/contacto"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm text-center"
            >
              {np.cta.cta2}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function NormaPage({ norma }: { norma: NormaData }) {
  const { lang } = useLanguage()
  const overrides = lang === 'en' ? NORMAS_EN[norma.slug] : lang === 'pt' ? NORMAS_PT[norma.slug] : undefined
  const n = overrides ? { ...norma, ...overrides } : norma
  return (
    <>
      <HeroSection norma={n} />
      <StatsBand norma={n} />
      <RequisitosSection norma={n} />
      <AplicaSection norma={n} />
      <ComoGestionaSection norma={n} />
      <CTASection norma={n} />
    </>
  )
}
