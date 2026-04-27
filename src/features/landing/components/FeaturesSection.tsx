'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

type FeatureCard = {
  tag: string
  title: string
  description: string
  bullets: string[]
}

// ── Illustrations ─────────────────────────────────────────────────────────────

function IllusAgenteIA() {
  const spokes: [number, number][] = [
    [68, 48], [252, 48], [40, 148], [280, 148], [68, 240], [252, 240],
  ]
  return (
    <svg viewBox="0 0 320 288" fill="none" className="w-full h-full">
      {spokes.map(([x, y], i) => (
        <line key={i} x1="160" y1="144" x2={x} y2={y}
          stroke="#1f2020" strokeWidth="0.8"
          className="opacity-[0.18] group-hover:opacity-40 transition-opacity duration-300" />
      ))}
      {spokes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="8"
          stroke="#1f2020" strokeWidth="0.9" fill="white"
          className="opacity-30 group-hover:opacity-65 transition-opacity duration-300" />
      ))}
      <circle cx="160" cy="144" r="56" stroke="#763d50" strokeWidth="0.5"
        className="opacity-10 group-hover:opacity-20 transition-opacity duration-500" />
      <circle cx="160" cy="144" r="36"
        stroke="#763d50" strokeWidth="1.2" fill="rgba(118,61,80,0.05)" />
      <circle cx="160" cy="144" r="22"
        stroke="#763d50" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.4" />
      <path d="M155 137 L160 128 L165 137 L174 142 L165 147 L160 156 L155 147 L146 142 Z"
        stroke="#763d50" strokeWidth="1.1" fill="rgba(118,61,80,0.14)"
        className="opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
    </svg>
  )
}

function IllusDocumentacion() {
  return (
    <svg viewBox="0 0 320 288" fill="none" className="w-full h-full">
      <rect x="104" y="40" width="148" height="188" rx="5"
        stroke="#1f2020" strokeWidth="1" strokeDasharray="4 3"
        transform="rotate(5 178 134)"
        className="opacity-[0.13] group-hover:opacity-30 transition-opacity duration-300" />
      <rect x="100" y="46" width="148" height="188" rx="5"
        stroke="#1f2020" strokeWidth="1" strokeDasharray="4 3"
        transform="rotate(2 174 140)"
        className="opacity-22 group-hover:opacity-40 transition-opacity duration-300" />
      <rect x="86" y="50" width="148" height="190" rx="5"
        stroke="#763d50" strokeWidth="1.2" fill="white" />
      <path d="M206 50 L234 78 L206 78 Z" stroke="#763d50" strokeWidth="1" fill="#f5f5f5" />
      <path d="M206 50 L234 78" stroke="#763d50" strokeWidth="1" />
      <line x1="106" y1="106" x2="206" y2="106" stroke="#1f2020" strokeWidth="1" opacity="0.18" />
      <line x1="106" y1="122" x2="194" y2="122" stroke="#1f2020" strokeWidth="1" opacity="0.18" />
      <line x1="106" y1="138" x2="200" y2="138" stroke="#1f2020" strokeWidth="1" opacity="0.18" />
      <line x1="106" y1="154" x2="184" y2="154" stroke="#1f2020" strokeWidth="1" opacity="0.18" />
      <rect x="98" y="214" width="48" height="20" rx="10"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.06)"
        className="opacity-55 group-hover:opacity-100 transition-opacity duration-300" />
      <text x="122" y="228" textAnchor="middle" fontSize="9" fill="#763d50" fontFamily="system-ui" fontWeight="600">v2.4</text>
      <circle cx="194" cy="224" r="12"
        stroke="#763d50" strokeWidth="0.9" fill="rgba(118,61,80,0.06)"
        className="opacity-55 group-hover:opacity-100 transition-opacity duration-300" />
      <path d="M188 224 L192 228 L200 220"
        stroke="#763d50" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"
        className="opacity-55 group-hover:opacity-100 transition-opacity duration-300" />
    </svg>
  )
}

function IllusAuditorias() {
  const cols = [96, 136, 176, 216]
  const rows = [104, 144, 184, 224]
  const checked = new Set([0, 1, 2, 4, 5, 6, 8, 9])
  const active = 10

  return (
    <svg viewBox="0 0 320 288" fill="none" className="w-full h-full">
      <rect x="70" y="60" width="180" height="194" rx="6"
        stroke="#1f2020" strokeWidth="0.9" strokeDasharray="4 3" opacity="0.18" />
      <rect x="70" y="60" width="180" height="28" rx="6" fill="rgba(118,61,80,0.06)" stroke="none" />
      <text x="160" y="78" textAnchor="middle" fontSize="9.5" fill="#763d50" fontFamily="system-ui" fontWeight="600">
        Programa de Auditorías
      </text>
      {cols.flatMap((cx, ci) =>
        rows.map((cy, ri) => {
          const idx = ri * 4 + ci
          const isActive = idx === active
          const isChecked = checked.has(idx)
          return (
            <g key={idx}>
              <rect x={cx - 14} y={cy - 14} width="28" height="28" rx="4"
                stroke={isActive ? '#763d50' : '#1f2020'}
                strokeWidth={isActive ? '1.2' : '0.7'}
                fill={isActive ? 'rgba(118,61,80,0.08)' : 'transparent'}
                opacity={isActive ? 1 : 0.45} />
              {isChecked && !isActive && (
                <path d={`M${cx - 6} ${cy} L${cx - 1} ${cy + 5} L${cx + 7} ${cy - 6}`}
                  stroke="#1f2020" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"
                  className="opacity-30 group-hover:opacity-60 transition-opacity duration-300" />
              )}
              {isActive && (
                <text x={cx} y={cy + 5} textAnchor="middle" fontSize="11"
                  fill="#763d50" fontFamily="system-ui" fontWeight="700">!</text>
              )}
            </g>
          )
        })
      )}
    </svg>
  )
}

function IllusNoConformidades() {
  return (
    <svg viewBox="0 0 320 288" fill="none" className="w-full h-full">
      <rect x="124" y="26" width="72" height="34" rx="6"
        stroke="#1f2020" strokeWidth="1" strokeDasharray="4 3" opacity="0.45" />
      <text x="160" y="48" textAnchor="middle" fontSize="9" fill="#1f2020" opacity="0.5" fontFamily="system-ui">Hallazgo</text>
      {([96, 160, 224] as number[]).map((x, i) => (
        <line key={i} x1="160" y1="60" x2={x} y2="106"
          stroke="#1f2020" strokeWidth="0.8"
          className="opacity-[0.17] group-hover:opacity-38 transition-opacity duration-300" />
      ))}
      {([96, 160, 224] as number[]).map((x, i) => (
        <g key={i}>
          <rect x={x - 26} y="106" width="52" height="26" rx="5"
            stroke="#1f2020" strokeWidth="0.8" fill="white" opacity="0.6" />
          <text x={x} y="123" textAnchor="middle" fontSize="8" fill="#1f2020" opacity="0.45" fontFamily="system-ui">
            Causa {i + 1}
          </text>
        </g>
      ))}
      {([96, 160, 224] as number[]).map((x, i) => (
        <line key={i} x1={x} y1="132" x2="160" y2="186"
          stroke="#763d50" strokeWidth="0.8"
          className="opacity-22 group-hover:opacity-55 transition-opacity duration-300" />
      ))}
      <circle cx="160" cy="212" r="30"
        stroke="#763d50" strokeWidth="1.2" fill="rgba(118,61,80,0.05)" />
      <circle cx="160" cy="212" r="19"
        stroke="#763d50" strokeWidth="0.8" strokeDasharray="3 2" opacity="0.38" />
      <path d="M150 212 L157 219 L172 204"
        stroke="#763d50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="opacity-60 group-hover:opacity-100 transition-opacity duration-300" />
    </svg>
  )
}

function IllusAcompanamiento() {
  return (
    <svg viewBox="0 0 320 288" fill="none" className="w-full h-full">
      <circle cx="120" cy="144" r="78"
        stroke="#1f2020" strokeWidth="1" strokeDasharray="5 3"
        className="opacity-20 group-hover:opacity-38 transition-opacity duration-300" />
      <circle cx="200" cy="144" r="78"
        stroke="#763d50" strokeWidth="1" strokeDasharray="5 3"
        className="opacity-25 group-hover:opacity-48 transition-opacity duration-300" />
      <text x="92" y="95" textAnchor="middle" fontSize="9" fill="#1f2020" opacity="0.38" fontFamily="system-ui">Consultor</text>
      <text x="228" y="95" textAnchor="middle" fontSize="9" fill="#763d50" opacity="0.48" fontFamily="system-ui">Plataforma</text>
      <path d="M160 80 Q200 80 200 144 Q200 208 160 208 Q120 208 120 144 Q120 80 160 80 Z"
        fill="rgba(118,61,80,0.04)"
        className="group-hover:opacity-[2] transition-opacity duration-300" />
      <circle cx="160" cy="144" r="24"
        stroke="#763d50" strokeWidth="1.2" fill="rgba(118,61,80,0.07)" />
      <path d="M151 144 L158 152 L171 136"
        stroke="#763d50" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"
        className="opacity-65 group-hover:opacity-100 transition-opacity duration-300" />
      <circle cx="88" cy="144" r="4" fill="#1f2020"
        className="opacity-15 group-hover:opacity-38 transition-opacity duration-300" />
      <circle cx="232" cy="144" r="4" fill="#763d50"
        className="opacity-20 group-hover:opacity-45 transition-opacity duration-300" />
    </svg>
  )
}

const ILLUSTRATIONS = [
  IllusAgenteIA,
  IllusDocumentacion,
  IllusAuditorias,
  IllusNoConformidades,
  IllusAcompanamiento,
]

function FeatureCard({ card, index }: { card: FeatureCard; index: number }) {
  const Illus = ILLUSTRATIONS[index]
  return (
    <div className="group bg-[#f7f7f7] rounded-2xl overflow-hidden flex flex-col border border-[#f0f0f0] hover:border-[#e2e2e2] transition-all duration-300">
      <div className="h-52 flex items-center justify-center px-6 pt-4">
        <Illus />
      </div>
      <div className="px-6 pb-7 pt-1">
        <p className="text-[#763d50] text-[10px] font-bold uppercase tracking-widest mb-2">{card.tag}</p>
        <h3 className="text-[#1f2020] text-base font-semibold leading-snug mb-2">{card.title}</h3>
        <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">{card.description}</p>
      </div>
    </div>
  )
}

export function FeaturesSection() {
  const { t } = useLanguage()
  const cards = t.features.cards as unknown as FeatureCard[]

  return (
    <section id="producto" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        <div className="mb-14">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
            {t.features.label}
          </p>
          <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-5 max-w-2xl">
            {t.features.title}
          </h2>
          <p className="text-[#3a3a3a]/55 text-sm leading-relaxed max-w-lg">
            {t.features.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.slice(0, 3).map((card, i) => (
            <FeatureCard key={card.tag} card={card} index={i} />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {cards.slice(3).map((card, i) => (
            <FeatureCard key={card.tag} card={card} index={i + 3} />
          ))}
        </div>

      </div>
    </section>
  )
}
