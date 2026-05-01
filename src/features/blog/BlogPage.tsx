'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { articles, categories } from './data'
import { useLanguage } from '@/lib/i18n/LanguageContext'

const PAGE_SIZE = 12

function FeaturedArticle({ readTime, readArticle }: { readTime: string; readArticle: string }) {
  const featured = articles[0]
  if (!featured) return null

  return (
    <div className="border-b border-[#e8e8e8] pb-16 mb-16">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div className="relative w-full h-72 lg:h-96 rounded-2xl overflow-hidden">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            className="object-cover"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col justify-center">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#763d50] text-xs font-bold uppercase tracking-widest">
              {featured.category}
            </span>
            <span className="text-[#3a3a3a]/30 text-xs">·</span>
            <span className="text-[#3a3a3a]/40 text-xs">{featured.readTime} {readTime}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-light text-[#1f2020] leading-[1.25] mb-5">
            {featured.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-sm leading-relaxed mb-8">
            {featured.excerpt}
          </p>
          <div className="flex items-center justify-start">
            <Link
              href={`/blog/${featured.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#1f2020] hover:text-[#763d50] transition-colors group"
            >
              {readArticle}
              <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

function ArticleCard({ article, readTime, readArticle }: { article: typeof articles[0]; readTime: string; readArticle: string }) {
  return (
    <Link href={`/blog/${article.slug}`} className="group flex flex-col">
      {/* Image */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden mb-5">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      {/* Content */}
      <div className="flex items-center gap-3 mb-3">
        <span className="text-[#763d50] text-xs font-bold uppercase tracking-widest">
          {article.category}
        </span>
        <span className="text-[#3a3a3a]/30 text-xs">·</span>
        <span className="text-[#3a3a3a]/40 text-xs">{article.readTime} {readTime}</span>
      </div>
      <h3 className="text-[#1f2020] text-base font-medium leading-snug group-hover:text-[#763d50] transition-colors mb-3">
        {article.title}
      </h3>
      <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-4">
        {article.excerpt}
      </p>
      <div className="flex items-center justify-start mt-auto pt-4 border-t border-[#f0f0f0]">
        <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#1f2020] group-hover:text-[#763d50] transition-colors">
          {readArticle}
          <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </span>
      </div>
    </Link>
  )
}

function BlogContent() {
  const { t } = useLanguage()
  const router = useRouter()
  const searchParams = useSearchParams()

  const page = Number(searchParams.get('page') ?? 1)
  const activeCategory = searchParams.get('category') ?? 'Todos'

  const rest = articles.slice(1)
  const filtered = activeCategory === 'Todos'
    ? rest
    : rest.filter((a) => a.category === activeCategory)

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  function goToPage(newPage: number, cat?: string) {
    const params = new URLSearchParams()
    const cat_ = cat ?? activeCategory
    if (cat_ !== 'Todos') params.set('category', cat_)
    if (newPage > 1) params.set('page', String(newPage))
    const query = params.toString()
    router.push(`/blog${query ? `?${query}` : ''}`)
  }

  function handleCategory(cat: string) {
    goToPage(1, cat)
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-[#e8e8e8]">
        <div className="max-w-6xl mx-auto px-6 pt-32 pb-12">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">{t.blog.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-light text-[#1f2020] leading-tight max-w-2xl">
            {t.blog.title}
          </h1>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-16">
        {/* Featured */}
        <FeaturedArticle readTime={t.blog.readTime} readArticle={t.blog.readArticle} />

        {/* Category filter */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleCategory(cat)}
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
          {paginated.map((article) => (
            <ArticleCard key={article.slug} article={article} readTime={t.blog.readTime} readArticle={t.blog.readArticle} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-16">
            <button
              onClick={() => goToPage(Math.max(1, page - 1))}
              disabled={page === 1}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] text-[#3a3a3a]/50 hover:border-[#1f2020]/40 hover:text-[#1f2020] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => goToPage(n)}
                className={`w-9 h-9 flex items-center justify-center rounded-full text-sm font-semibold transition-all ${
                  n === page
                    ? 'bg-[#1f2020] text-white'
                    : 'border border-[#e0e0e0] text-[#3a3a3a]/60 hover:border-[#1f2020]/40 hover:text-[#1f2020]'
                }`}
              >
                {n}
              </button>
            ))}

            <button
              onClick={() => goToPage(Math.min(totalPages, page + 1))}
              disabled={page === totalPages}
              className="w-9 h-9 flex items-center justify-center rounded-full border border-[#e0e0e0] text-[#3a3a3a]/50 hover:border-[#1f2020]/40 hover:text-[#1f2020] disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export function BlogPage() {
  return (
    <Suspense>
      <BlogContent />
    </Suspense>
  )
}
