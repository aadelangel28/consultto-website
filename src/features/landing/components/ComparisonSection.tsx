'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

export function ComparisonSection() {
  const { t } = useLanguage()
  const c = t.comparison
  const stages = c.stages as unknown as { label: string; consultto: string; traditional: string }[]

  // Desktop refs
  const nodeRefs    = useRef<(HTMLDivElement | null)[]>([])
  const trackRef    = useRef<HTMLDivElement>(null)
  const fillRef     = useRef<HTMLDivElement>(null)

  // Mobile refs
  const mobileNodeRefs  = useRef<(HTMLDivElement | null)[]>([])
  const mobileTrackRef  = useRef<HTMLDivElement>(null)
  const mobileFillRef   = useRef<HTMLDivElement>(null)

  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    const TRIGGER = 0.65

    function update() {
      const triggerY = window.innerHeight * TRIGGER
      const isMobile = window.innerWidth < 768

      const refs = isMobile ? mobileNodeRefs.current : nodeRefs.current
      const track = isMobile ? mobileTrackRef.current : trackRef.current
      const fill  = isMobile ? mobileFillRef.current  : fillRef.current

      let lastActive = -1
      refs.forEach((node) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        if (rect.top + rect.height / 2 < triggerY) lastActive++
      })

      setActiveCount(lastActive + 1)

      if (!track || !fill) return
      if (lastActive === -1) { fill.style.height = '0px'; return }
      const activeNode = refs[lastActive]
      if (!activeNode) return
      const trackTop = track.getBoundingClientRect().top
      const nodeMid  = activeNode.getBoundingClientRect().top + activeNode.getBoundingClientRect().height / 2
      fill.style.height = `${nodeMid - trackTop}px`
    }

    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update, { passive: true })
    update()
    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  return (
    <section className="bg-white py-16 md:py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12 md:mb-24">
          <p className="text-[#763d50] text-xs font-bold uppercase tracking-widest mb-4">
            {c.label}
          </p>
          <h2 className="text-[#1f2020] text-3xl md:text-4xl font-light leading-tight mb-4">
            {c.title}
          </h2>
          <p className="text-[#3a3a3a]/60 text-base leading-relaxed max-w-2xl mx-auto">
            {c.subtitle}
          </p>
        </div>

        {/* Column labels — desktop only */}
        <div className="hidden md:grid grid-cols-[1fr_200px_1fr] gap-8 mb-14 items-center max-w-4xl mx-auto">
          <div className="flex justify-end">
            <div className="flex items-center gap-2 bg-[#763d50]/8 border border-[#763d50]/20 rounded-xl py-2.5 px-5">
              <div className="w-2 h-2 rounded-full bg-[#763d50]" />
              <span className="text-[#763d50] font-bold text-sm">{c.colConsultto}</span>
            </div>
          </div>
          <div />
          <div className="flex justify-start">
            <div className="flex items-center gap-2 bg-[#f5f5f5] border border-[#e0e0e0] rounded-xl py-2.5 px-5">
              <div className="w-2 h-2 rounded-full bg-[#aaaaaa]" />
              <span className="text-[#888888] font-semibold text-sm">{c.colTraditional}</span>
            </div>
          </div>
        </div>

        {/* Timeline — desktop */}
        <div className="relative max-w-4xl mx-auto hidden md:block">
          <div
            ref={trackRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
            style={{ width: '2px', backgroundColor: '#e8e8e8' }}
          >
            <div
              ref={fillRef}
              className="absolute top-0 left-0 right-0"
              style={{ height: '0px', backgroundColor: '#763d50', transition: 'height 80ms linear' }}
            />
          </div>

          <div className="flex flex-col">
            {stages.map((stage, i) => {
              const isActive = i < activeCount
              return (
                <div
                  key={stage.label}
                  className="grid items-center"
                  style={{ gridTemplateColumns: '1fr 200px 1fr', gap: '2rem', paddingTop: i === 0 ? '0' : '5rem' }}
                >
                  <div className={`text-right transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-[#1f2020]' : 'text-[#cccccc]'}`}>
                      {stage.consultto}
                    </p>
                  </div>
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    <div className="bg-white px-3 py-1 text-center">
                      <span className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${isActive ? 'text-[#763d50]' : 'text-[#cccccc]'}`}>
                        {stage.label}
                      </span>
                    </div>
                    <div
                      ref={el => { nodeRefs.current[i] = el }}
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 bg-white ${
                        isActive ? 'border-[#763d50] bg-[#763d50] shadow-lg shadow-[#763d50]/40 scale-110' : 'border-[#dddddd]'
                      }`}
                    />
                  </div>
                  <div className={`transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-[#3a3a3a]/60' : 'text-[#cccccc]'}`}>
                      {stage.traditional}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Timeline — mobile */}
        <div className="md:hidden relative">
          {/* Track line */}
          <div ref={mobileTrackRef} className="absolute left-[31px] top-0 bottom-0 w-0.5 bg-[#e8e8e8]">
            <div
              ref={mobileFillRef}
              className="absolute top-0 left-0 right-0"
              style={{ height: '0px', backgroundColor: '#763d50', transition: 'height 80ms linear' }}
            />
          </div>

          <div className="flex flex-col gap-10">
            {stages.map((stage, i) => {
              const isActive = i < activeCount
              return (
                <div key={stage.label} className="relative pl-16">
                  {/* Node — centered on the line (left-[31px] - w-5/2 = 21px) */}
                  <div
                    ref={el => { mobileNodeRefs.current[i] = el }}
                    className={`absolute left-[22px] top-0.5 w-5 h-5 rounded-full border-2 bg-white transition-all duration-300 ${
                      isActive ? 'border-[#763d50] bg-[#763d50] shadow-lg shadow-[#763d50]/40' : 'border-[#dddddd]'
                    }`}
                  />

                  {/* Label */}
                  <p className={`text-xs font-bold uppercase tracking-widest mb-2 transition-colors duration-300 ${
                    isActive ? 'text-[#763d50]' : 'text-[#cccccc]'
                  }`}>
                    {stage.label}
                  </p>

                  {/* Consultto */}
                  <div className={`mb-1.5 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                    <span className="text-[10px] font-bold text-[#763d50] uppercase tracking-wide">{c.colConsultto}: </span>
                    <span className={`text-sm leading-relaxed ${isActive ? 'text-[#1f2020]' : 'text-[#cccccc]'}`}>{stage.consultto}</span>
                  </div>

                  {/* Traditional */}
                  <div className={`transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                    <span className="text-[10px] font-bold text-[#888] uppercase tracking-wide">{c.colTraditional}: </span>
                    <span className={`text-sm leading-relaxed ${isActive ? 'text-[#3a3a3a]/60' : 'text-[#cccccc]'}`}>{stage.traditional}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

      </div>
    </section>
  )
}
