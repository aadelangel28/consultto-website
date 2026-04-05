'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// ─── Screen contents ────────────────────────────────────────────────────────

function DashboardScreen({ m }: { m: { welcome: string; company: string; badge: string; stats: readonly { value: string; label: string }[]; agentLabel: string; agentMessage: string; viewPlan: string; later: string } }) {
  return (
    <div className="flex-1 p-6 flex flex-col gap-4">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-[#1f2020] font-bold text-base">{m.welcome}</h3>
          <p className="text-[#3a3a3a]/50 text-xs">{m.company}</p>
        </div>
        <div className="bg-[#763d50] text-white text-xs px-3 py-1 rounded-full font-medium">{m.badge}</div>
      </div>
      <div className="grid grid-cols-3 gap-3">
        {m.stats.map((s) => (
          <div key={s.label} className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl p-3">
            <div className="text-[#1f2020] font-black text-xl">{s.value}</div>
            <div className="text-[#3a3a3a]/50 text-xs mt-0.5">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl p-4 flex-1">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-[#763d50] animate-pulse" />
          <span className="text-[#763d50] text-xs font-semibold uppercase tracking-widest">{m.agentLabel}</span>
        </div>
        <p className="text-[#3a3a3a]/70 text-xs leading-relaxed">
          {m.agentMessage}
        </p>
        <div className="flex gap-2 mt-3">
          <div className="bg-[#763d50]/10 border border-[#763d50]/30 text-[#763d50] text-xs px-3 py-1 rounded-full cursor-pointer">{m.viewPlan}</div>
          <div className="bg-white border border-[#e8e8e8] text-[#3a3a3a]/50 text-xs px-3 py-1 rounded-full cursor-pointer">{m.later}</div>
        </div>
      </div>
    </div>
  )
}

function AgenteIAScreen({ m }: { m: { title: string; subtitle: string; generating: string; messages: readonly { from: string; text: string }[] } }) {
  return (
    <div className="flex-1 p-5 flex flex-col gap-3">
      <div className="flex items-center justify-between mb-1">
        <div>
          <h3 className="text-[#1f2020] font-bold text-base">{m.title}</h3>
          <p className="text-[#3a3a3a]/50 text-xs">{m.subtitle}</p>
        </div>
        <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
      </div>
      <div className="flex-1 flex flex-col gap-2.5 overflow-hidden">
        {m.messages.map((msg, i) => (
          <div key={i} className={`bg-${msg.from === 'user' ? '[#f8f8f8] rounded-xl rounded-tr-sm px-4 py-3 max-w-[85%] self-end' : '[#763d50]/8 border border-[#763d50]/15 rounded-xl rounded-tl-sm px-4 py-3 max-w-[90%]'}`}>
            <p className={`text-xs leading-relaxed ${msg.from === 'user' ? 'text-[#3a3a3a]/80' : 'text-[#1f2020]'}`}>{msg.text}</p>
          </div>
        ))}
        {/* Typing indicator */}
        <div className="flex items-center gap-2 bg-[#763d50]/8 border border-[#763d50]/15 rounded-xl px-4 py-2.5 max-w-[70%]">
          <div className="flex gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-[#763d50] animate-bounce" style={{ animationDelay: '0ms' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#763d50] animate-bounce" style={{ animationDelay: '150ms' }} />
            <div className="w-1.5 h-1.5 rounded-full bg-[#763d50] animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <span className="text-xs text-[#763d50]/70">{m.generating}</span>
        </div>
      </div>
    </div>
  )
}

const AUDIT_COLORS = ['bg-blue-50 text-blue-600 border-blue-200', 'bg-amber-50 text-amber-600 border-amber-200', 'bg-[#f8f8f8] text-[#3a3a3a]/50 border-[#e8e8e8]', 'bg-green-50 text-green-600 border-green-200']

function AuditoriasScreen({ m }: { m: { title: string; newBtn: string; items: readonly { name: string; date: string; status: string }[]; upcomingLabel: string; completedLabel: string } }) {
  return (
    <div className="flex-1 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1f2020] font-bold text-base">{m.title}</h3>
        <button className="bg-[#763d50] text-white text-xs px-3 py-1.5 rounded-lg font-medium">{m.newBtn}</button>
      </div>
      <div className="flex flex-col gap-2">
        {m.items.map((a, i) => (
          <div key={i} className="flex items-center justify-between bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl px-4 py-2.5">
            <div>
              <div className="text-[#1f2020] text-xs font-semibold">{a.name}</div>
              <div className="text-[#3a3a3a]/40 text-xs">{a.date}</div>
            </div>
            <span className={`text-xs px-2.5 py-1 rounded-full border font-medium ${AUDIT_COLORS[i]}`}>{a.status}</span>
          </div>
        ))}
      </div>
      <div className="mt-auto flex items-center gap-4 pt-2 border-t border-[#e8e8e8]">
        <div className="text-xs text-[#3a3a3a]/50"><span className="font-bold text-[#763d50]">3</span> {m.upcomingLabel}</div>
        <div className="text-xs text-[#3a3a3a]/50"><span className="font-bold text-green-500">1</span> {m.completedLabel}</div>
      </div>
    </div>
  )
}

function DocumentacionScreen({ m }: { m: { title: string; newBtn: string; searchPlaceholder: string; docs: readonly { name: string; type: string; version: string; status: string; statusColor: string }[] } }) {
  return (
    <div className="flex-1 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1f2020] font-bold text-base">{m.title}</h3>
        <button className="bg-[#763d50] text-white text-xs px-3 py-1.5 rounded-lg font-medium">{m.newBtn}</button>
      </div>
      <div className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl px-3 py-2 flex items-center gap-2">
        <svg className="w-3.5 h-3.5 text-[#3a3a3a]/30" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><circle cx="11" cy="11" r="8" /><path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35" /></svg>
        <span className="text-xs text-[#3a3a3a]/30">{m.searchPlaceholder}</span>
      </div>
      <div className="flex flex-col gap-1.5">
        {m.docs.map((d) => (
          <div key={d.name} className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#f8f8f8] transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#763d50]/10 rounded-lg flex items-center justify-center">
                <svg className="w-3.5 h-3.5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
              </div>
              <div>
                <div className="text-[#1f2020] text-xs font-semibold">{d.name}</div>
                <div className="text-[#3a3a3a]/40 text-xs">{d.type} · {d.version}</div>
              </div>
            </div>
            <span className={`text-xs font-medium ${d.statusColor}`}>{d.status}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const CAPA_COLORS = ['bg-red-50 text-red-600 border-red-200', 'bg-amber-50 text-amber-600 border-amber-200', 'bg-blue-50 text-blue-600 border-blue-200']
const CAPA_STAT_COLORS = ['text-red-500', 'text-amber-500', 'text-green-500']

function CAPAScreen({ m }: { m: { title: string; newBtn: string; stats: readonly { label: string; value: string }[]; items: readonly { id: string; desc: string; priority: string }[] } }) {
  return (
    <div className="flex-1 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1f2020] font-bold text-base">{m.title}</h3>
        <button className="bg-[#763d50] text-white text-xs px-3 py-1.5 rounded-lg font-medium">{m.newBtn}</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {m.stats.map((s, i) => (
          <div key={i} className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl p-3 text-center">
            <div className={`font-black text-xl ${CAPA_STAT_COLORS[i]}`}>{s.value}</div>
            <div className="text-[#3a3a3a]/50 text-xs">{s.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        {m.items.map((c, i) => (
          <div key={c.id} className="flex items-center justify-between bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl px-4 py-2.5 gap-3">
            <div className="flex-1 min-w-0">
              <div className="text-[#3a3a3a]/40 text-xs font-mono">{c.id}</div>
              <div className="text-[#1f2020] text-xs font-semibold truncate">{c.desc}</div>
            </div>
            <span className={`text-xs px-2 py-0.5 rounded-full border font-medium shrink-0 ${CAPA_COLORS[i]}`}>{c.priority}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

const MC_STAT_COLORS = ['text-[#763d50]', 'text-amber-500', 'text-green-500']
const MC_OBJ_COLORS = ['bg-green-400', 'bg-amber-400', 'bg-[#763d50]']

function MejoraContinuaScreen({ m }: { m: { title: string; newBtn: string; stats: readonly { label: string; value: string }[]; metaLabel: string; objectives: readonly { title: string; progress: number; meta: string; actual: string }[] } }) {
  return (
    <div className="flex-1 p-5 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-[#1f2020] font-bold text-base">{m.title}</h3>
        <button className="bg-[#763d50] text-white text-xs px-3 py-1.5 rounded-lg font-medium">{m.newBtn}</button>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {m.stats.map((k, i) => (
          <div key={i} className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl p-3 text-center">
            <div className={`font-black text-xl ${MC_STAT_COLORS[i]}`}>{k.value}</div>
            <div className="text-[#3a3a3a]/50 text-xs leading-tight mt-0.5">{k.label}</div>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-3">
        {m.objectives.map((o, i) => (
          <div key={i} className="bg-[#f8f8f8] border border-[#e8e8e8] rounded-xl px-4 py-3">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[#1f2020] text-xs font-semibold truncate pr-2">{o.title}</span>
              <span className="text-[#3a3a3a]/40 text-xs shrink-0">{o.actual}</span>
            </div>
            <div className="w-full bg-[#e8e8e8] rounded-full h-1.5">
              <div className={`h-1.5 rounded-full ${MC_OBJ_COLORS[i]}`} style={{ width: `${o.progress}%` }} />
            </div>
            <div className="flex justify-between mt-1">
              <span className="text-[#3a3a3a]/30 text-xs">{o.progress}%</span>
              <span className="text-[#3a3a3a]/30 text-xs">{m.metaLabel} {o.meta}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SCREEN_COUNT = 6

// ─── Animated Mockup ─────────────────────────────────────────────────────────

function ProductMockup() {
  const { t } = useLanguage()
  const m = t.mockup
  const [activeIndex, setActiveIndex] = useState(0)
  const [fading, setFading] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  function goTo(index: number) {
    if (index === activeIndex) return
    setFading(true)
    setTimeout(() => {
      setActiveIndex(index)
      setFading(false)
    }, 200)
  }

  useEffect(() => {
    if (isHovered) return
    const interval = setInterval(() => {
      setFading(true)
      setTimeout(() => {
        setActiveIndex((prev) => (prev + 1) % SCREEN_COUNT)
        setFading(false)
      }, 200)
    }, 3000)
    return () => clearInterval(interval)
  }, [isHovered])

  const screens = [
    <DashboardScreen key="d" m={m.dashboard} />,
    <DocumentacionScreen key="doc" m={m.documentacion} />,
    <AuditoriasScreen key="au" m={m.auditorias} />,
    <CAPAScreen key="c" m={m.capa} />,
    <MejoraContinuaScreen key="mc" m={m.mejoraContinua} />,
    <AgenteIAScreen key="ia" m={m.agenteIA} />,
  ]

  return (
    <div
      className="w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Mockup shell */}
      <div className="rounded-2xl overflow-hidden border border-[#d9d9d9]/60 shadow-xl shadow-[#2e3e49]/8">
        {/* Window bar */}
        <div className="bg-[#2e3e49] px-4 py-2.5 flex items-center gap-2 border-b border-[#d9d9d9]/20">
          <div className="w-2.5 h-2.5 rounded-full bg-[#763d50]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#d9d9d9]/40" />
        </div>

        <div className="flex bg-[#f8f8f8]" style={{ height: '320px', overflow: 'hidden' }}>
          {/* Sidebar — hidden on very small screens */}
          <div className="hidden sm:flex w-36 bg-white border-r border-[#d9d9d9] p-3 flex-col gap-1 shrink-0">
            <div className="mb-2 px-2">
              <img src="/logo.png" alt="Consultto" className="h-5 w-auto" />
            </div>
            {m.sidebar.map((item, i) => (
              <div
                key={i}
                onClick={() => goTo(i)}
                className={`px-3 py-2 rounded-lg text-xs transition-all duration-300 cursor-pointer ${
                  i === activeIndex
                    ? 'bg-[#763d50]/10 text-[#763d50] font-semibold'
                    : 'text-[#3a3a3a]/50 hover:bg-[#f5f5f5] hover:text-[#1f2020]'
                }`}
              >
                {item}
              </div>
            ))}
          </div>

          {/* Content area with fade animation */}
          <div
            className={`flex flex-1 transition-all duration-200 ${
              fading ? 'opacity-0 translate-y-1' : 'opacity-100 translate-y-0'
            }`}
          >
            {screens[activeIndex]}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section className="relative bg-white min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#f4f4f4] via-white to-white" />
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-20 pt-28 sm:pt-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Left: text content */}
          <div className="flex flex-col items-start">
            {/* Badge */}
            <p
              className="text-[#763d50] text-sm font-semibold mb-3"
              style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 0ms both' }}
            >
              {t.hero.badge}
            </p>

            {/* H1 — each line animates individually */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#1f2020] leading-[1.05] mb-8 md:mb-10">
              <span
                className="block"
                style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 100ms both' }}
              >
                {t.hero.h1Line1}
              </span>
              <span
                className="block text-[#3a3a3a]/50 font-medium text-3xl md:text-4xl lg:text-5xl"
                style={{ animation: 'fadeInUp 600ms cubic-bezier(0.16, 1, 0.3, 1) 250ms both' }}
              >
                {t.hero.h1Line2}
              </span>
            </h1>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row gap-4"
              style={{ animation: 'fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 450ms both' }}
            >
              <Link
                href="/signup"
                className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-sm text-center"
              >
                {t.hero.cta1}
              </Link>
              <Link
                href="#como-funciona"
                className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] px-6 py-3 rounded-full font-semibold transition-all text-sm bg-white hover:bg-[#f8f8f8] text-center"
              >
                {t.hero.cta2}
              </Link>
            </div>

          </div>

          {/* Right: animated product mockup */}
          <div
            className="w-full"
            style={{ animation: 'fadeInUp 800ms cubic-bezier(0.16, 1, 0.3, 1) 650ms both' }}
          >
            <div style={{ animation: 'float 5s ease-in-out infinite' }}>
              <ProductMockup />
            </div>
          </div>

        </div>

        {/* Norm ticker — full width */}
        <div
          className="mt-16 overflow-hidden w-full"
          style={{ animation: 'fadeInUp 500ms cubic-bezier(0.16, 1, 0.3, 1) 700ms both', maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)' }}
        >
          <div
            className="flex gap-8 whitespace-nowrap"
            style={{ animation: 'ticker 30s linear infinite', width: 'max-content' }}
          >
            {['ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949', 'ISO 27001', 'ISO 22000', 'AS9100', 'ISO 13485', 'HACCP', 'FSSC 22000', 'ISO 50001', 'BRC', 'GMP', 'ISO 17025', 'VDA 6.3', 'ISO 31000', 'FDA 21 CFR', 'ISO 22301',
              'ISO 9001', 'ISO 14001', 'ISO 45001', 'IATF 16949', 'ISO 27001', 'ISO 22000', 'AS9100', 'ISO 13485', 'HACCP', 'FSSC 22000', 'ISO 50001', 'BRC', 'GMP', 'ISO 17025', 'VDA 6.3', 'ISO 31000', 'FDA 21 CFR', 'ISO 22301'].map((norm, i) => (
              <span key={i} className="text-xs text-[#3a3a3a]/30 font-medium tracking-widest uppercase">
                {norm}
                <span className="ml-8 text-[#d9d9d9]">·</span>
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
