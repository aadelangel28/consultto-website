'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

type TabCard = { tag: string; title: string; description: string }
type TabData = { label: string; left: TabCard; rightTop: TabCard; rightBottom: TabCard }

function SmallCard({ card }: { card: TabCard }) {
  return (
    <div className="bg-[#f8f6f6] rounded-2xl p-6 flex flex-col gap-2 border border-[#ede8e8] flex-1">
      <span className="text-[#763d50] text-xs font-bold uppercase tracking-wider leading-none">
        {card.tag}
      </span>
      <h3 className="text-[#1f2020] text-[17px] font-black leading-snug">
        {card.title}
      </h3>
      <p className="text-[#3a3a3a]/55 text-sm leading-relaxed">
        {card.description}
      </p>
    </div>
  )
}

export function FeaturesSection() {
  const { t } = useLanguage()
  const [activeTab, setActiveTab] = useState(0)
  const [visible, setVisible] = useState(true)

  function switchTab(i: number) {
    if (i === activeTab) return
    setVisible(false)
    setTimeout(() => {
      setActiveTab(i)
      setVisible(true)
    }, 150)
  }

  const tabs = t.features.tabs as unknown as TabData[]
  const tab = tabs[activeTab]

  return (
    <section id="producto" className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-[#763d50] text-sm font-semibold uppercase tracking-widest mb-4">
            {t.features.label}
          </p>
          <h2 className="text-[#1f2020] text-4xl md:text-5xl font-black leading-tight mb-4 max-w-3xl mx-auto">
            {t.features.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-base leading-relaxed max-w-xl mx-auto">
            {t.features.subtitle}
          </p>
        </div>

        {/* Nav bar: tabs + CTA buttons */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between border-b border-[#e0e0e0]">
          {/* Tabs */}
          <div className="flex overflow-x-auto scrollbar-hide -mb-px gap-0">
            {tabs.map((tabItem, i) => (
              <button
                key={tabItem.label}
                onClick={() => switchTab(i)}
                className={`px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors duration-200 ${
                  activeTab === i
                    ? 'border-[#1f2020] text-[#1f2020]'
                    : 'border-transparent text-[#3a3a3a]/40 hover:text-[#3a3a3a]/70'
                }`}
              >
                {tabItem.label}
              </button>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex items-center gap-3 pb-3 shrink-0">
            <button className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-lg hover:shadow-[#763d50]/25 text-sm whitespace-nowrap">
              {t.features.ctaPrimary}
            </button>
            <button className="border border-[#d9d9d9] hover:border-[#3a3a3a]/40 text-[#3a3a3a] hover:text-[#1f2020] px-6 py-2.5 rounded-full font-semibold transition-all text-sm bg-white hover:bg-[#f8f8f8] whitespace-nowrap">
              {t.features.ctaSecondary}
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          className={`pt-5 transition-opacity duration-150 ${visible ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-4 items-stretch">

            {/* Left large card */}
            <div className="bg-[#f8f6f6] rounded-2xl overflow-hidden flex flex-col border border-[#ede8e8]">
              <div className="p-7 flex flex-col gap-3">
                <span className="text-[#763d50] text-xs font-bold uppercase tracking-wider leading-none">
                  {tab.left.tag}
                </span>
                <h3 className="text-[#1f2020] text-2xl md:text-[28px] font-black leading-tight max-w-xs">
                  {tab.left.title}
                </h3>
                <p className="text-[#3a3a3a]/55 text-sm leading-relaxed max-w-sm">
                  {tab.left.description}
                </p>
              </div>
              {/* Mockup area */}
              <div className="flex-1 mx-5 mb-5 rounded-xl bg-white border border-[#e0e0e0] overflow-hidden min-h-[200px] flex items-center justify-center">
                <span className="text-[#3a3a3a]/15 text-xs font-medium uppercase tracking-widest">
                  Screenshot
                </span>
              </div>
            </div>

            {/* Right: 2 stacked cards */}
            <div className="flex flex-col gap-4">
              <SmallCard card={tab.rightTop} />
              <SmallCard card={tab.rightBottom} />
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
