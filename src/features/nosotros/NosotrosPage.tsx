'use client'

import Link from 'next/link'
import { useEffect, useRef, type ReactNode } from 'react'
import { ParticleBackground } from './components/ParticleBackground'

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

function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center" style={{ background: '#fafafa' }}>
      <style>{`
        @keyframes h-fade-up {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes h-line-x {
          from { transform: scaleX(0); }
          to   { transform: scaleX(1); }
        }
        @keyframes h-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes h-scroll-bounce {
          0%, 100% { transform: translateY(0); opacity: 0.4; }
          50%       { transform: translateY(6px); opacity: 0.8; }
        }
        .hn-pre  { animation: h-fade-up 0.5s cubic-bezier(0.16,1,0.3,1) 0.15s both; }
        .hn-l1   { animation: h-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.28s both; }
        .hn-l2   { animation: h-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.42s both; }
        .hn-l3   { animation: h-fade-up 0.7s cubic-bezier(0.16,1,0.3,1) 0.56s both; }
        .hn-line { animation: h-line-x  1s  cubic-bezier(0.16,1,0.3,1) 0.6s  both; transform-origin: center; }
        .hn-sub  { animation: h-fade-up 0.65s cubic-bezier(0.16,1,0.3,1) 0.72s both; }
        .hn-cta  { animation: h-fade-up 0.65s cubic-bezier(0.16,1,0.3,1) 0.88s both; }
        .hn-scroll { animation: h-scroll-bounce 2s ease-in-out 1.5s infinite; }
      `}</style>

      {/* ── Particle background ── */}
      <ParticleBackground />

      {/* ── Glow centrado ── */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 800, height: 500,
          background: 'radial-gradient(ellipse, rgba(118,61,80,0.08) 0%, rgba(118,61,80,0.03) 50%, transparent 72%)',
          filter: 'blur(50px)',
          flexShrink: 0,
        }} />
      </div>

      {/* ── Logo centrado ── */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <img
          src="/logo.png"
          alt="Consultto"
          className="hn-l1 w-auto mx-auto"
          style={{ height: 'clamp(60px, 10vw, 100px)' }}
        />
      </div>

{/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, rgba(250,250,250,0.9))' }} />
    </section>
  )
}

// ─── Misión ───────────────────────────────────────────────────────────────────

function MisionSection() {
  return (
    <section className="bg-white border-t border-[#efefef] py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-6">
            Nuestra visión
          </p>
          <h2 className="text-[#1f2020] leading-[1.4]"
            style={{ fontSize: 'clamp(1.25rem, 2.2vw, 1.75rem)', fontWeight: 400 }}>
            Ser la plataforma de referencia para implementar sistemas de gestión que realmente funcionen — con tecnología, criterio y acompañamiento humano.
          </h2>
        </Reveal>
      </div>
    </section>
  )
}
// ─── Visión ───────────────────────────────────────────────────────────────────

const VISION_PILLARS = [
  { label: 'Referente en Latinoamérica', desc: 'La plataforma que toda empresa de la región elige para crecer.' },
  { label: 'Accesible para todas', desc: 'Sin importar tamaño, industria ni punto de partida.' },
  { label: 'Mejora continua real', desc: 'No solo conformidad — sistemas que evolucionan con el negocio.' },
]

function VisionSection() {
  return (
    <section style={{ background: '#1f2020' }} className="py-28 md:py-36">
      <style>{`
        @keyframes vis-line {
          from { transform: scaleX(0); opacity: 0; }
          to   { transform: scaleX(1); opacity: 1; }
        }
        .vis-line { transform-origin: left; animation: vis-line 1s cubic-bezier(0.16,1,0.3,1) 0.3s both; }
        @keyframes vis-pill-in {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
      <div className="max-w-5xl mx-auto px-6 md:px-12">

        {/* Eyebrow + línea */}
        <Reveal>
          <div className="flex items-center gap-4 mb-12">
            <p className="text-xs font-medium uppercase tracking-[0.2em] shrink-0" style={{ color: '#c47a8f' }}>
              Nuestra misión
            </p>
            <div className="vis-line h-px flex-1" style={{ background: 'rgba(196,122,143,0.25)' }} />
          </div>
        </Reveal>

        {/* Texto principal */}
        <Reveal delay={80}>
          <p
            className="leading-[1.45] text-white/90 mb-16"
            style={{ fontSize: 'clamp(1.5rem, 3.2vw, 2.6rem)', fontWeight: 300 }}
          >
            Que cualquier empresa tenga las herramientas para certificarse sin estrés y mantener un sistema de gestión que genere valor real — no solo conformidad documental.
          </p>
        </Reveal>

        {/* Pilares */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-px" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          {VISION_PILLARS.map((p, i) => (
            <Reveal key={i} delay={i * 100}>
              <div className="pt-8 pr-6">
                <p className="text-sm font-medium text-white/80 mb-2">{p.label}</p>
                <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}

// ─── Principios ───────────────────────────────────────────────────────────────

const PRINCIPIOS = [
  {
    number: '01',
    title: 'Honestidad',
    description: 'Las normas ISO son exigentes por una razón. Nuestro trabajo es hacerlas accesibles sin restarles seriedad.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Pragmatismo',
    description: 'El objetivo es que tu sistema funcione y que la auditoría sea una confirmación, no una sorpresa.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Criterio',
    description: 'No pusimos IA en Consultto porque es tendencia. La pusimos porque es lo único que puede estar disponible 24/7 y darte una respuesta concreta en segundos.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
      </svg>
    ),
  },
  {
    number: '04',
    title: 'Acompañamiento',
    description: 'Si tu sistema tiene brechas, te lo decimos. Preferimos una conversación difícil hoy a una auditoría fallida mañana.',
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
  },
]

function PrincipioCard({ p, index }: { p: typeof PRINCIPIOS[number]; index: number }) {
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
  return (
    <section className="py-28 bg-white border-t border-[#efefef]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end gap-6 mb-16">
          <Reveal className="flex-1">
            <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Principios</p>
            <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight max-w-sm">
              Lo que guía cada decisión que tomamos
            </h2>
          </Reveal>
          <Reveal delay={100} className="md:max-w-xs">
            <p className="text-[#3a3a3a]/45 text-sm leading-relaxed">
              Cuatro ideas simples que definen cómo construimos Consultto y cómo trabajamos con cada cliente.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
          {PRINCIPIOS.map((p, i) => (
            <PrincipioCard key={p.number} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── CTA ──────────────────────────────────────────────────────────────────────

function CTASection() {
  return (
    <section className="py-24 border-t border-[#efefef]" style={{ background: '#f8f8f8' }}>
      <div className="max-w-3xl mx-auto px-6 text-center">
        <Reveal>
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Empieza hoy</p>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-5">
            ¿Lista tu empresa para certificarse sin el caos de siempre?
          </h2>
          <p className="text-[#3a3a3a]/55 text-lg mb-10 leading-relaxed">
            Agenda una demo y te mostramos cómo Consultto se adapta a tu industria, tu norma y tu momento actual.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm"
            >
              Agendar demo gratuita
            </Link>
            <Link
              href="/contacto"
              className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm"
            >
              Hablar con un consultor
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
