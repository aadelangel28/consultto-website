'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'
import type { Lang } from '@/lib/i18n/translations'

const langLabels: Record<Lang, string> = { es: 'ES', en: 'EN', pt: 'PT' }

export function Navbar() {
  const { lang, setLang, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [industriasOpen, setIndustriasOpen] = useState(false)
  const [normasOpen, setNormasOpen] = useState(false)
  const [recursosOpen, setRecursosOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const normasRef = useRef<HTMLDivElement>(null)
  const recursosRef = useRef<HTMLDivElement>(null)
  const langRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIndustriasOpen(false)
      }
      if (normasRef.current && !normasRef.current.contains(e.target as Node)) {
        setNormasOpen(false)
      }
      if (recursosRef.current && !recursosRef.current.contains(e.target as Node)) {
        setRecursosOpen(false)
      }
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? '' : ''
      }`}
    >
      {/* Main bar */}
      <div
        className={`transition-all duration-500 flex items-center justify-between ${
          scrolled
            ? 'max-w-6xl mx-auto mt-3 px-10 py-2.5 bg-white/95 backdrop-blur-md border border-[#d9d9d9] shadow-lg rounded-full'
            : 'max-w-7xl mx-auto px-6 py-4'
        }`}
      >
        <Link href="/">
          <Image src="/logo.png" alt="Consultto" height={scrolled ? 28 : 32} width={scrolled ? 120 : 140} />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/agente-ia" className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm font-medium">
            {t.nav.agentIA}
          </Link>

          <Link href="/plataforma" className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm font-medium">
            {t.nav.platform}
          </Link>

          {/* Industrias dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => { setIndustriasOpen(!industriasOpen); setNormasOpen(false); setRecursosOpen(false) }}
              className="flex items-center gap-1.5 text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm font-medium"
            >
              {t.nav.industries}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${industriasOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {industriasOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white border border-[#d9d9d9] rounded-2xl shadow-xl shadow-black/8 overflow-hidden animate-fade-in">
                <div className="p-2">
                  {t.industrias.map((industria) => (
                    <Link
                      key={industria.label}
                      href={industria.href}
                      className="block px-4 py-3 rounded-xl hover:bg-[#f8f8f8] transition-colors group"
                      onClick={() => setIndustriasOpen(false)}
                    >
                      <div className="text-[#1f2020] text-sm font-medium group-hover:text-[#763d50] transition-colors">
                        {industria.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Normas dropdown */}
          <div className="relative" ref={normasRef}>
            <button
              onClick={() => { setNormasOpen(!normasOpen); setIndustriasOpen(false); setRecursosOpen(false) }}
              className="flex items-center gap-1.5 text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm font-medium"
            >
              {t.nav.norms}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${normasOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {normasOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-80 bg-white border border-[#d9d9d9] rounded-2xl shadow-xl shadow-black/8 overflow-hidden animate-fade-in">
                <div className="p-2 grid grid-cols-2 gap-0.5">
                  {(t.normas as unknown as { label: string; href: string }[]).map((norma) => (
                    <Link
                      key={norma.label}
                      href={norma.href}
                      className="text-left px-3 py-2.5 rounded-xl hover:bg-[#f8f8f8] transition-colors"
                      onClick={() => setNormasOpen(false)}
                    >
                      <div className="text-[#1f2020] text-xs font-medium hover:text-[#763d50] transition-colors">
                        {norma.label}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Recursos dropdown */}
          <div className="relative" ref={recursosRef}>
            <button
              onClick={() => { setRecursosOpen(!recursosOpen); setIndustriasOpen(false); setNormasOpen(false) }}
              className="flex items-center gap-1.5 text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm font-medium"
            >
              {t.nav.resources}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${recursosOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {recursosOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-white border border-[#d9d9d9] rounded-2xl shadow-xl shadow-black/8 overflow-hidden animate-fade-in">
                <div className="p-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-3 rounded-xl hover:bg-[#f8f8f8] transition-colors group"
                    onClick={() => setRecursosOpen(false)}
                  >
                    <div className="text-[#1f2020] text-sm font-medium group-hover:text-[#763d50] transition-colors">{t.nav.blog}</div>
                  </Link>
                  <Link
                    href="/nosotros"
                    className="block px-4 py-3 rounded-xl hover:bg-[#f8f8f8] transition-colors group"
                    onClick={() => setRecursosOpen(false)}
                  >
                    <div className="text-[#1f2020] text-sm font-medium group-hover:text-[#763d50] transition-colors">{t.nav.about}</div>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center gap-3">
          {/* Language switcher */}
          <div className="relative" ref={langRef}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm font-medium px-2 py-1.5 rounded-lg hover:bg-[#f4f4f4]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
              </svg>
              {langLabels[lang]}
              <svg
                className={`w-3 h-3 transition-transform duration-200 ${langOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {langOpen && (
              <div className="absolute top-full right-0 mt-2 w-36 bg-white border border-[#d9d9d9] rounded-xl shadow-lg overflow-hidden animate-fade-in">
                {(['es', 'en', 'pt'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => { setLang(l); setLangOpen(false) }}
                    className={`w-full text-left px-4 py-2.5 text-sm transition-colors hover:bg-[#f8f8f8] ${
                      lang === l ? 'text-[#763d50] font-semibold' : 'text-[#3a3a3a]'
                    }`}
                  >
                    {l === 'es' ? 'Español' : l === 'en' ? 'English' : 'Português'}
                  </button>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://app.consultto.com"
            className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors text-sm px-4 py-2 font-medium"
          >
            {t.nav.login}
          </a>
          <Link
            href="/signup"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white text-sm px-5 py-2.5 rounded-full transition-all font-semibold hover:scale-105"
          >
            {t.nav.demo}
          </Link>
        </div>

        <button
          className="md:hidden text-[#3a3a3a] hover:text-[#1f2020] transition-colors"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current mb-1.5 transition-all" />
          <div className="w-6 h-0.5 bg-current transition-all" />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className={`md:hidden bg-white border border-[#d9d9d9] px-6 py-6 flex flex-col gap-4 ${
            scrolled ? 'max-w-5xl mx-auto mt-2 rounded-2xl shadow-lg' : 'border-t border-x-0 border-b-0'
          }`}
        >
          <Link href="/agente-ia" className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors font-medium" onClick={() => setMobileOpen(false)}>
            {t.nav.agentIA}
          </Link>

          <Link href="/plataforma" className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors font-medium" onClick={() => setMobileOpen(false)}>
            {t.nav.platform}
          </Link>

          <div>
            <button
              className="flex items-center gap-1.5 text-[#3a3a3a] font-medium w-full"
              onClick={() => setIndustriasOpen(!industriasOpen)}
            >
              {t.nav.industries}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${industriasOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {industriasOpen && (
              <div className="mt-2 pl-3 flex flex-col gap-1 border-l-2 border-[#d9d9d9]">
                {t.industrias.map((industria) => (
                  <Link
                    key={industria.label}
                    href={industria.href}
                    className="py-1.5 text-[#3a3a3a]/70 text-sm hover:text-[#763d50] transition-colors"
                    onClick={() => { setIndustriasOpen(false); setMobileOpen(false) }}
                  >
                    {industria.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              className="flex items-center gap-1.5 text-[#3a3a3a] font-medium w-full"
              onClick={() => setNormasOpen(!normasOpen)}
            >
              {t.nav.norms}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${normasOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {normasOpen && (
              <div className="mt-2 pl-3 flex flex-col gap-1 border-l-2 border-[#d9d9d9]">
                {(t.normas as unknown as { label: string; href: string }[]).map((norma) => (
                  <Link
                    key={norma.label}
                    href={norma.href}
                    className="py-1.5 text-[#3a3a3a]/70 text-sm hover:text-[#763d50] transition-colors"
                    onClick={() => { setNormasOpen(false); setMobileOpen(false) }}
                  >
                    {norma.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <div>
            <button
              className="flex items-center gap-1.5 text-[#3a3a3a] font-medium w-full"
              onClick={() => setRecursosOpen(!recursosOpen)}
            >
              {t.nav.resources}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-200 ${recursosOpen ? 'rotate-180' : ''}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {recursosOpen && (
              <div className="mt-2 pl-3 flex flex-col gap-1 border-l-2 border-[#d9d9d9]">
                <Link
                  href="/blog"
                  className="py-1.5 text-[#3a3a3a]/70 text-sm hover:text-[#763d50] transition-colors"
                  onClick={() => { setRecursosOpen(false); setMobileOpen(false) }}
                >
                  {t.nav.blog}
                </Link>
                <Link
                  href="/nosotros"
                  className="py-1.5 text-[#3a3a3a]/70 text-sm hover:text-[#763d50] transition-colors"
                  onClick={() => { setRecursosOpen(false); setMobileOpen(false) }}
                >
                  {t.nav.about}
                </Link>
              </div>
            )}
          </div>

          {/* Language switcher mobile */}
          <div className="flex items-center gap-2 pt-1">
            {(['es', 'en', 'pt'] as Lang[]).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`text-sm px-3 py-1.5 rounded-full border transition-colors ${
                  lang === l
                    ? 'border-[#763d50] text-[#763d50] font-semibold bg-[#763d50]/5'
                    : 'border-[#d9d9d9] text-[#3a3a3a]/60 hover:border-[#3a3a3a]/40'
                }`}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-[#d9d9d9] flex flex-col gap-3">
            <a href="https://app.consultto.com" className="text-[#3a3a3a] hover:text-[#1f2020] transition-colors font-medium" onClick={() => setMobileOpen(false)}>
              {t.nav.login}
            </a>
            <Link
              href="/signup"
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-5 py-3 rounded-full transition-colors font-semibold text-center"
              onClick={() => setMobileOpen(false)}
            >
              {t.nav.demo}
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
