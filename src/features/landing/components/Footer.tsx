'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="bg-white border-t border-[#d9d9d9] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Image src="/logo.png" alt="Consultto" height={28} width={120} />
            </div>
            <p className="text-[#3a3a3a]/50 text-sm leading-relaxed">
              {t.footer.tagline}
            </p>
          </div>

          {/* Producto */}
          <div>
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.product}
            </h4>
            <ul className="space-y-3">
              {t.footer.productLinks.map((label) => (
                <li key={label}>
                  <Link href="#producto" className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.services}
            </h4>
            <ul className="space-y-3">
              {t.footer.serviceLinks.map((label) => (
                <li key={label}>
                  <Link href="#" className="text-[#3a3a3a]/60 hover:text-[#1f2020] transition-colors text-sm">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="text-[#3a3a3a]/40 text-xs font-semibold uppercase tracking-widest mb-4">
              {t.footer.company}
            </h4>
            <ul className="space-y-3">
              {t.footer.companyLinks.map((item) => (
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
            {t.footer.copyright}
          </p>
          <div className="flex items-center gap-6">
            <Link href="#" className="text-[#3a3a3a]/40 hover:text-[#3a3a3a] transition-colors text-sm">
              {t.footer.terms}
            </Link>
            <Link href="#" className="text-[#3a3a3a]/40 hover:text-[#3a3a3a] transition-colors text-sm">
              {t.footer.privacy}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
