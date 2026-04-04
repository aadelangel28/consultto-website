'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { pdf } from '@react-pdf/renderer'
import { Article } from './data'
import { ArticleContent, Section } from './content'
import { ArticlePDF } from './ArticlePDF'
import { CTASection } from '@/features/landing/components/CTASection'

function RenderSection({ section }: { section: Section }) {
  if (section.type === 'paragraph') {
    return (
      <p className="text-[#3a3a3a]/75 text-[17px] leading-[1.85] mb-6">
        {section.content as string}
      </p>
    )
  }
  if (section.type === 'heading') {
    return (
      <h2 className="text-[#1f2020] text-2xl font-semibold mt-12 mb-5 leading-snug">
        {section.content as string}
      </h2>
    )
  }
  if (section.type === 'subheading') {
    return (
      <h3 className="text-[#1f2020] text-lg font-semibold mt-8 mb-3">
        {section.content as string}
      </h3>
    )
  }
  if (section.type === 'quote') {
    return (
      <blockquote className="border-l-[3px] border-[#763d50] pl-6 my-10">
        <p className="text-[#763d50] text-xl font-light italic leading-relaxed">
          {section.content as string}
        </p>
      </blockquote>
    )
  }
  if (section.type === 'bullets') {
    return (
      <ul className="mb-6 space-y-3">
        {(section.content as string[]).map((item, i) => (
          <li key={i} className="flex gap-3 text-[#3a3a3a]/75 text-[17px] leading-relaxed">
            <span className="text-[#763d50] font-bold mt-0.5 shrink-0">—</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    )
  }
  return null
}

interface ArticleDetailPageProps {
  article: Article
  content: ArticleContent
}

export function ArticleDetailPage({ article, content }: ArticleDetailPageProps) {
  const [downloading, setDownloading] = useState(false)

  const handleDownloadPDF = async () => {
    setDownloading(true)
    try {
      const blob = await pdf(
        <ArticlePDF article={article} content={content} />
      ).toBlob()
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${article.slug}.pdf`
      a.click()
      URL.revokeObjectURL(url)
    } finally {
      setDownloading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative w-full h-[420px] md:h-[520px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1f2020]/90 via-[#1f2020]/40 to-transparent" />

        {/* Back link */}
        <div className="absolute top-8 left-0 right-0 max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            Volver al blog
          </Link>
        </div>

        {/* Title content */}
        <div className="absolute bottom-0 left-0 right-0 max-w-3xl mx-auto px-6 pb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#c97a8f] text-xs font-bold uppercase tracking-widest">
              {article.category}
            </span>
            <span className="text-white/30 text-xs">·</span>
            <span className="text-white/50 text-xs">{article.readTime} de lectura</span>
          </div>
          <h1 className="text-white text-3xl md:text-4xl font-light leading-[1.2] max-w-2xl">
            {article.title}
          </h1>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-3xl mx-auto px-6 py-14">
        {/* Meta + Download */}
        <div className="flex items-center justify-between pb-8 mb-10 border-b border-[#e8e8e8]">
          <div className="flex items-center gap-4">
            <div className="w-9 h-9 rounded-full bg-[#1f2020] flex items-center justify-center shrink-0">
              <span className="text-white text-xs font-bold">C</span>
            </div>
            <div>
              <p className="text-[#1f2020] text-sm font-semibold">{article.author}</p>
              <p className="text-[#3a3a3a]/40 text-xs">{article.date}</p>
            </div>
          </div>

          <button
            onClick={handleDownloadPDF}
            disabled={downloading}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#e0e0e0] text-sm text-[#3a3a3a]/70 hover:border-[#763d50] hover:text-[#763d50] transition-all disabled:opacity-50 disabled:cursor-wait"
          >
            {downloading ? (
              <>
                <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Generando PDF...
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                </svg>
                Descargar PDF
              </>
            )}
          </button>
        </div>

        {/* Sections */}
        <div>
          {content.body.map((section, i) => (
            <RenderSection key={i} section={section} />
          ))}
        </div>

      </div>

      <CTASection />
    </div>
  )
}
