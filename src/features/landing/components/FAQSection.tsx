'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border-b border-[#e8e8e8]">
      <button
        className="w-full text-left py-4 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#1f2020] font-medium text-sm leading-snug group-hover:text-[#763d50] transition-colors">
          {question}
        </span>
        <svg
          className={`w-4 h-4 text-[#763d50]/60 shrink-0 transition-transform duration-200 ${open ? 'rotate-45' : ''}`}
          fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>

      <div className={`overflow-hidden transition-all duration-250 ease-in-out ${open ? 'max-h-48 opacity-100 pb-4' : 'max-h-0 opacity-0'}`}>
        <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { t } = useLanguage()

  const half = Math.ceil(t.faq.items.length / 2)
  const col1 = t.faq.items.slice(0, half)
  const col2 = t.faq.items.slice(half)

  return (
    <section id="faq" className="bg-[#f5f4f4] pt-16 pb-28 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-[#763d50] text-xs font-semibold uppercase tracking-widest mb-2">
              {t.faq.label}
            </p>
            <h2 className="text-[#1f2020] text-3xl font-light leading-tight">
              {t.faq.title}
            </h2>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-x-16">
          <div>
            {col1.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <div>
            {col2.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
