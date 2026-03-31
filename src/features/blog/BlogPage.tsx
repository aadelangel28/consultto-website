'use client'

import Link from 'next/link'
import { useState } from 'react'
import { articles, categories } from './data'

function FeaturedArticle() {
  const featured = articles.find((a) => a.featured)
  if (!featured) return null

  return (
    <div className="border-b border-[#e8e8e8] pb-16 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-end">
        <div>
          <span className="text-[#763d50] text-xs font-bold uppercase tracking-widest">
            {featured.category}
          </span>
          <h2 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-[1.2] mt-4 mb-6">
            {featured.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-base leading-relaxed mb-8">
            {featured.excerpt}
          </p>
          <Link
            href={`/blog/${featured.slug}`}
            className="inline-flex items-center gap-2 text-[#1f2020] font-semibold text-sm hover:text-[#763d50] transition-colors group"
          >
            Leer artículo
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
        <div className="flex items-end justify-between border-t border-[#e8e8e8] pt-6 lg:border-t-0 lg:pt-0 lg:border-l lg:border-[#e8e8e8] lg:pl-16">
          <div>
            <p className="text-[#1f2020] text-sm font-semibold">{featured.author}</p>
            <p className="text-[#3a3a3a]/50 text-xs mt-0.5">{featured.authorRole}</p>
          </div>
          <div className="text-right">
            <p className="text-[#3a3a3a]/50 text-xs">{featured.date}</p>
            <p className="text-[#3a3a3a]/40 text-xs mt-0.5">{featured.readTime} de lectura</p>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArticleCard({ article }: { article: typeof articles[0] }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group flex flex-col gap-4 py-8 border-b border-[#e8e8e8] hover:border-[#1f2020]/20 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-[#763d50] text-xs font-bold uppercase tracking-widest">
          {article.category}
        </span>
        <span className="text-[#3a3a3a]/40 text-xs">{article.readTime} de lectura</span>
      </div>
      <h3 className="text-[#1f2020] text-lg font-medium leading-snug group-hover:text-[#763d50] transition-colors">
        {article.title}
      </h3>
      <p className="text-[#3a3a3a]/55 text-sm leading-relaxed line-clamp-2">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-between mt-auto pt-2">
        <span className="text-[#3a3a3a]/40 text-xs">{article.date}</span>
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f2020] group-hover:text-[#763d50] transition-colors">
          Leer
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

export function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('Todos')

  const filtered = activeCategory === 'Todos'
    ? articles.filter((a) => !a.featured)
    : articles.filter((a) => a.category === activeCategory && !a.featured)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">Blog</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1f2020] leading-tight max-w-2xl">
            Perspectivas sobre certificación y gestión normativa
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Featured */}
        <FeaturedArticle />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                activeCategory === cat
                  ? 'bg-[#1f2020] text-white'
                  : 'border border-[#e0e0e0] text-[#3a3a3a]/60 hover:border-[#1f2020]/40 hover:text-[#1f2020]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </div>
  )
}
