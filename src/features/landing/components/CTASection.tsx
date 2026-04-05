'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function CalendarMockup({ cal }: { cal: { title: string; days: readonly string[]; eventName: string; eventTime: string; confirmed: string; sent: string } }) {
  const dates = ['31', '1', '2', '3', '4']
  const eventDayIndex = 2

  return (
    <div className="rounded-xl overflow-hidden border border-[#d9d9d9]/50 shadow-lg shadow-[#2e3e49]/8 w-full">
      {/* Window bar */}
      <div className="bg-[#2e3e49] px-3 py-2 flex items-center gap-1.5">
        <div className="w-2 h-2 rounded-full bg-[#763d50]/80" />
        <div className="w-2 h-2 rounded-full bg-[#d9d9d9]/30" />
        <div className="w-2 h-2 rounded-full bg-[#d9d9d9]/30" />
        <span className="ml-2 text-[#d9d9d9]/35 text-[10px] font-mono">{cal.title}</span>
      </div>

      {/* Calendar body */}
      <div className="bg-white px-3 pt-3 pb-3 flex flex-col gap-2">
        {/* Day headers */}
        <div className="grid grid-cols-5 gap-1">
          {cal.days.map((d, i) => (
            <div key={d} className="flex flex-col items-center gap-0.5">
              <span className="text-[#3a3a3a]/35 text-[9px] font-semibold uppercase tracking-wide">{d}</span>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                i === eventDayIndex ? 'bg-[#763d50] text-white' : 'text-[#3a3a3a]/40'
              }`}>
                {dates[i]}
              </div>
            </div>
          ))}
        </div>

        {/* Time grid — 3 rows */}
        <div className="flex gap-2">
          <div className="flex flex-col w-7 shrink-0">
            {['9:00', '10:00', '11:00'].map(time => (
              <div key={time} className="h-8 flex items-start justify-end pr-1">
                <span className="text-[#3a3a3a]/25 text-[8px]">{time}</span>
              </div>
            ))}
          </div>
          <div className="flex-1 grid grid-cols-5 gap-1 relative">
            {cal.days.map((_, i) => (
              <div key={i} className="relative">
                {[0, 1, 2].map(h => (
                  <div key={h} className="h-8 border-t border-[#f2f2f2]" />
                ))}
                {i === eventDayIndex && (
                  <div className="absolute left-0 right-0 rounded-md overflow-hidden" style={{ top: '32px', height: '32px' }}>
                    <div className="h-full bg-[#763d50] px-1.5 py-1 flex flex-col justify-between">
                      <div className="flex items-center gap-1">
                        <div className="w-1 h-1 rounded-full bg-green-400 shrink-0" />
                        <span className="text-white text-[8px] font-bold leading-none truncate">{cal.eventName}</span>
                      </div>
                      <span className="text-white/60 text-[7px] leading-none">{cal.eventTime}</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Confirmation badge */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-200/60 rounded-lg px-2.5 py-2">
          <div className="w-4 h-4 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <svg className="w-2.5 h-2.5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-green-700 text-[11px] font-semibold leading-none">{cal.confirmed}</p>
            <p className="text-green-600/60 text-[9px] mt-0.5">{cal.sent}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="bg-[#faf5f6] rounded-2xl px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left: text + CTAs */}
          <div>
            <p className="text-[#763d50] text-[10px] font-bold uppercase tracking-widest mb-3">
              {t.cta.label}
            </p>
            <h2 className="text-[#1f2020] text-2xl md:text-3xl font-light leading-snug mb-3">
              {t.cta.title}
            </h2>
            <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-6">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-2.5">
              <Link
                href="/signup"
                className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm whitespace-nowrap text-center"
              >
                {t.cta.cta1}
              </Link>
              <Link
                href="#como-funciona"
                className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] bg-white hover:bg-[#f8f8f8] px-6 py-2.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap text-center"
              >
                {t.cta.cta2}
              </Link>
            </div>
          </div>

          {/* Right: calendar mockup */}
          <CalendarMockup cal={t.cta.calendar} />

        </div>
      </div>
    </section>
  )
}
