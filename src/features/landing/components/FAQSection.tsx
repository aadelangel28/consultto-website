'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-[#ebebeb] overflow-hidden">
      <button
        className="w-full text-left px-7 py-5 flex items-center justify-between gap-4 group"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-[#1f2020] font-semibold text-base leading-snug group-hover:text-[#763d50] transition-colors">
          {question}
        </span>
        <svg
          className={`w-5 h-5 text-[#763d50] shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="px-7 pb-6 text-[#3a3a3a]/60 text-sm leading-relaxed">
          {answer}
        </p>
      </div>
    </div>
  )
}

export function FAQSection() {
  const { t } = useLanguage()

  return (
    <section id="faq" className="bg-[#f5f4f4] py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-4">
            {t.faq.label}
          </p>
          <h2 className="text-[#1f2020] text-4xl md:text-5xl font-black leading-tight">
            {t.faq.title}
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {t.faq.items.map((faq) => (
            <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  )
}
