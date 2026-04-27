'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

type SecurityItem = { num: string; title: string; description: string }

// ── Isometric security illustration ──────────────────────────────────────────
function SecurityIllus() {
  return (
    <svg viewBox="0 0 520 480" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">

      {/* ── Floor / base ── */}
      <path d="M260 420 L60 310 L260 200 L460 310 Z"
        stroke="#1f2020" strokeWidth="0.8" fill="rgba(247,247,247,0.6)" strokeDasharray="4 3" opacity="0.4" />

      {/* ── Outer ring wall - back left ── */}
      <path d="M60 310 L60 240 L260 130 L260 200 L60 310 Z"
        stroke="#1f2020" strokeWidth="0.9" fill="rgba(240,240,240,0.5)" opacity="0.55" />
      {/* ── Outer ring wall - back right ── */}
      <path d="M460 310 L460 240 L260 130 L260 200 L460 310 Z"
        stroke="#1f2020" strokeWidth="0.9" fill="rgba(234,234,234,0.5)" opacity="0.45" />
      {/* ── Outer ring top face ── */}
      <path d="M260 130 L60 240 L260 350 L460 240 Z"
        stroke="#1f2020" strokeWidth="0.9" fill="rgba(255,255,255,0.7)" opacity="0.6" />

      {/* ── Middle ring (inner wall) - left ── */}
      <path d="M130 310 L130 255 L260 175 L260 230 L130 310 Z"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.04)" opacity="0.7" />
      {/* ── Middle ring - right ── */}
      <path d="M390 310 L390 255 L260 175 L260 230 L390 310 Z"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.03)" opacity="0.6" />
      {/* ── Middle ring top ── */}
      <path d="M260 175 L130 255 L260 335 L390 255 Z"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.04)" opacity="0.6" />

      {/* ── Server box - left face ── */}
      <path d="M210 295 L210 248 L260 220 L260 267 Z"
        stroke="#1f2020" strokeWidth="1" fill="rgba(220,220,220,0.6)" />
      {/* ── Server box - right face ── */}
      <path d="M310 295 L310 248 L260 220 L260 267 Z"
        stroke="#1f2020" strokeWidth="1" fill="rgba(200,200,200,0.5)" />
      {/* ── Server box - top face ── */}
      <path d="M260 220 L210 248 L260 276 L310 248 Z"
        stroke="#1f2020" strokeWidth="1" fill="rgba(245,245,245,0.9)" />
      {/* Server rack lines */}
      {[234, 248, 262].map((y, i) => (
        <line key={i} x1="225" y1={y} x2="250" y2={y - 13} stroke="#1f2020" strokeWidth="0.6" opacity="0.3" />
      ))}

      {/* ── Lock on server top ── */}
      <rect x="248" y="229" width="24" height="18" rx="3"
        stroke="#763d50" strokeWidth="1.2" fill="rgba(118,61,80,0.08)" />
      <path d="M254 229 Q254 222 260 222 Q266 222 266 229"
        stroke="#763d50" strokeWidth="1.2" fill="none" />
      <circle cx="260" cy="239" r="3" fill="#763d50" opacity="0.6" />
      <line x1="260" y1="242" x2="260" y2="245" stroke="#763d50" strokeWidth="1.2" opacity="0.6" />

      {/* ── Document floating top-left ── */}
      <g transform="translate(98, 148) rotate(-8)">
        <rect width="52" height="66" rx="4" stroke="#1f2020" strokeWidth="1" strokeDasharray="3 2" fill="white" opacity="0.8" />
        <line x1="10" y1="18" x2="42" y2="18" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <line x1="10" y1="28" x2="38" y2="28" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <line x1="10" y1="38" x2="40" y2="38" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <path d="M10 52 L16 58 L28 46" stroke="#763d50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </g>

      {/* ── Document floating top-right ── */}
      <g transform="translate(368, 138) rotate(6)">
        <rect width="52" height="66" rx="4" stroke="#1f2020" strokeWidth="1" strokeDasharray="3 2" fill="white" opacity="0.8" />
        <line x1="10" y1="18" x2="42" y2="18" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <line x1="10" y1="28" x2="36" y2="28" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <line x1="10" y1="38" x2="40" y2="38" stroke="#1f2020" strokeWidth="0.8" opacity="0.25" />
        <path d="M10 52 L16 58 L28 46" stroke="#763d50" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6" />
      </g>

      {/* ── Arrows / flow lines ── */}
      <path d="M150 192 L200 252" stroke="#1f2020" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.28" />
      <path d="M196 249 L200 252 L196 256" stroke="#1f2020" strokeWidth="0.8" opacity="0.28" />

      <path d="M368 185 L320 245" stroke="#1f2020" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.28" />
      <path d="M322 249 L320 245 L324 242" stroke="#1f2020" strokeWidth="0.8" opacity="0.28" />


    </svg>
  )
}

export function SecuritySection() {
  const { t } = useLanguage()
  const s = t.security

  return (
    <section className="bg-white py-24 px-6 border-t border-[#f0f0f0]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-5">
              {s.label}
            </p>
            <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-5">
              {s.title}
            </h2>
            <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-10 max-w-md">
              {s.subtitle}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {(s.items as unknown as SecurityItem[]).map((item) => (
                <div key={item.num}>
                  <span className="text-[#763d50]/50 text-xs font-mono font-semibold">{item.num}</span>
                  <h3 className="text-[#1f2020] text-sm font-semibold mt-1 mb-1">{item.title}</h3>
                  <p className="text-[#3a3a3a]/50 text-xs leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — illustration */}
          <div className="flex items-center justify-center h-[420px]">
            <SecurityIllus />
          </div>

        </div>
      </div>
    </section>
  )
}
