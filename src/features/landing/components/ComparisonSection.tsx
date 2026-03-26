'use client'

import { useLanguage } from '@/lib/i18n/LanguageContext'

function CheckCircle({ brand = true }: { brand?: boolean }) {
  return (
    <div className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 ${brand ? 'bg-[#763d50]' : 'bg-[#763d50]/70'}`}>
      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  )
}

function XCircle() {
  return (
    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0">
      <svg className="w-3 h-3 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
  )
}

export function ComparisonSection() {
  const { t } = useLanguage()
  const c = t.comparison

  return (
    <section className="bg-[#fafafa] py-16 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6">
          <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-4">
            {c.label}
          </p>
          <h2 className="text-[#1f2020] text-3xl md:text-4xl font-black leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-base leading-relaxed max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Table */}
        <div className="rounded-2xl overflow-hidden border border-[#e0e0e0] shadow-sm">
          {/* Column headers */}
          <div className="grid grid-cols-[2fr_1fr_1fr]">
            <div className="bg-white px-8 py-3 border-b border-[#e0e0e0]">
              <span className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest">Funcionalidad</span>
            </div>
            <div className="bg-[#763d50] px-6 py-3 border-b border-[#763d50]/20 flex flex-col items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-white/60" />
              <span className="text-white font-bold text-sm">{c.colConsultto}</span>
            </div>
            <div className="bg-[#f0f0f0] px-6 py-3 border-b border-[#e0e0e0] flex flex-col items-center justify-center gap-1">
              <div className="w-2 h-2 rounded-full bg-[#3a3a3a]/30" />
              <span className="text-[#3a3a3a]/50 font-semibold text-sm">{c.colTraditional}</span>
            </div>
          </div>

          {/* Rows */}
          {c.items.map((item, index) => {
            const isBoth = 'bothCheck' in item && item.bothCheck
            const isEven = index % 2 === 0
            return (
              <div
                key={item.feature}
                className={`grid grid-cols-[2fr_1fr_1fr] border-b border-[#e0e0e0] last:border-b-0 group transition-colors hover:bg-[#f5f0f1]/40`}
              >
                {/* Feature name */}
                <div className={`px-8 py-2.5 flex items-center gap-3 ${isEven ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  <span className="text-[#1f2020] font-medium text-sm leading-snug">
                    {item.feature}
                  </span>
                </div>

                {/* Consultto */}
                <div className={`px-6 py-2.5 flex items-center gap-3 border-l border-[#e0e0e0] ${isEven ? 'bg-[#763d50]/[0.04]' : 'bg-[#763d50]/[0.02]'}`}>
                  <CheckCircle brand={true} />
                  <span className="text-[#1f2020] text-sm leading-snug">{item.consultto}</span>
                </div>

                {/* Traditional */}
                <div className={`px-6 py-2.5 flex items-center gap-3 border-l border-[#e0e0e0] ${isEven ? 'bg-white' : 'bg-[#fafafa]'}`}>
                  {isBoth ? <CheckCircle brand={false} /> : <XCircle />}
                  <span className={`text-sm leading-snug ${isBoth ? 'text-[#3a3a3a]/70' : 'text-[#3a3a3a]/50'}`}>{item.traditional}</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
