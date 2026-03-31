'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()
  const f = t.footer as unknown as {
    tagline: string
    product: string
    industries: string
    norms: string
    company: string
    contact: string
    productLinks: { label: string; href: string }[]
    industryLinks: { label: string; href: string }[]
    normLinks: { label: string; href: string }[]
    companyLinks: { label: string; href: string }[]
    contactLinks: { label: string; href: string }[]
    copyright: string
    terms: string
    privacy: string
  }

  return (
    <footer className="bg-white border-t border-[#d9d9d9] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-[200px_repeat(5,1fr)] gap-10 mb-12">

          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="Consultto" height={28} width={120} />
            </div>
            <p className="text-[#3a3a3a]/50 text-sm leading-relaxed">
              {f.tagline}
            </p>
          </div>

          {/* Producto */}
          <div className="">
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {f.product}
            </h4>
            <ul className="space-y-3">
              {f.productLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industrias */}
          <div className="">
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {f.industries}
            </h4>
            <ul className="space-y-3">
              {f.industryLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Normas */}
          <div className="">
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {f.norms}
            </h4>
            <ul className="space-y-3">
              {f.normLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div className="">
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {f.company}
            </h4>
            <ul className="space-y-3">
              {f.companyLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div className="">
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {f.contact}
            </h4>
            <ul className="space-y-3">
              {f.contactLinks.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-[#d9d9d9] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#3a3a3a]/40 text-sm">
            {f.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#3a3a3a]/40 hover:text-[#3a3a3a] transition-colors text-sm">
              {f.terms}
            </Link>
            <Link href="#" className="text-[#3a3a3a]/40 hover:text-[#3a3a3a] transition-colors text-sm">
              {f.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
