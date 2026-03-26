'use client'

import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function CTASection() {
  const { t } = useLanguage()

  return (
    <section className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-[#faf5f6] rounded-3xl px-12 py-14 md:px-16 md:py-16">
          <div className="max-w-xl">
            <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-5">
              {t.cta.label}
            </p>
            <h2 className="text-[#1f2020] text-3xl md:text-4xl font-black leading-tight mb-4">
              {t.cta.title}
            </h2>
            <p className="text-[#3a3a3a]/60 text-base leading-relaxed mb-8">
              {t.cta.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/signup"
                className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-7 py-3 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-sm whitespace-nowrap"
              >
                {t.cta.cta1}
              </Link>
              <Link
                href="#como-funciona"
                className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] bg-white hover:bg-[#f8f8f8] px-7 py-3 rounded-full font-semibold transition-all text-sm whitespace-nowrap"
              >
                {t.cta.cta2}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
