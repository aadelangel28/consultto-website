'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageContext'

// ─── Component ────────────────────────────────────────────────────────────────

export function ComparisonSection() {
  const { t } = useLanguage()
  const c = t.comparison
  const stages = c.stages as unknown as { label: string; consultto: string; traditional: string }[]

  const nodeRefs   = useRef<(HTMLDivElement | null)[]>([])
  const trackRef   = useRef<HTMLDivElement>(null)
  const fillRef    = useRef<HTMLDivElement>(null)
  const [activeCount, setActiveCount] = useState(0)

  useEffect(() => {
    // Trigger point: 65% down the viewport
    const TRIGGER = 0.65

    function update() {
      const triggerY = window.innerHeight * TRIGGER
      let lastActive = -1

      nodeRefs.current.forEach((node, i) => {
        if (!node) return
        const rect = node.getBoundingClientRect()
        if (rect.top + rect.height / 2 < triggerY) lastActive = i
      })

      setActiveCount(lastActive + 1)

      // Grow / shrink the fill to exactly reach the last active node center
      if (!trackRef.current || !fillRef.current) return
      if (lastActive === -1) {
        fillRef.current.style.height = '0px'
        return
      }
      const activeNode = nodeRefs.current[lastActive]
      if (!activeNode) return
      const trackTop  = trackRef.current.getBoundingClientRect().top
      const nodeMid   = activeNode.getBoundingClientRect().top + activeNode.getBoundingClientRect().height / 2
      fillRef.current.style.height = `${nodeMid - trackTop}px`
    }

    window.addEventListener('scroll', update, { passive: true })
    update() // set initial state on mount
    return () => window.removeEventListener('scroll', update)
  }, [])

  return (
    <section className="bg-white py-28 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-24">
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

        {/* Column labels */}
        <div className="grid grid-cols-[1fr_200px_1fr] gap-8 mb-14 items-center max-w-4xl mx-auto">
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

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">

          {/* Track (background line — full height, centered) */}
          <div
            ref={trackRef}
            className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0"
            style={{ width: '2px', backgroundColor: '#e8e8e8' }}
          >
            {/* Animated fill */}
            <div
              ref={fillRef}
              className="absolute top-0 left-0 right-0"
              style={{ height: '0px', backgroundColor: '#763d50', transition: 'height 80ms linear' }}
            />
          </div>

          {/* Stages */}
          <div className="flex flex-col">
            {stages.map((stage, i) => {
              const isActive = i < activeCount
              return (
                <div
                  key={stage.label}
                  className="grid items-center"
                  style={{ gridTemplateColumns: '1fr 200px 1fr', gap: '2rem', paddingTop: i === 0 ? '0' : '5rem' }}
                >
                  {/* Consultto text */}
                  <div className={`text-right transition-all duration-300 ${isActive ? 'opacity-100' : 'opacity-25'}`}>
                    <p className={`text-sm leading-relaxed ${isActive ? 'text-[#1f2020]' : 'text-[#cccccc]'}`}>
                      {stage.consultto}
                    </p>
                  </div>

                  {/* Center: label (breaks line) + node */}
                  <div className="flex flex-col items-center gap-3 relative z-10">
                    {/* Label — sits on the line with bg-white to cut through it */}
                    <div className="bg-white px-3 py-1 text-center">
                      <span
                        className={`text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                          isActive ? 'text-[#763d50]' : 'text-[#cccccc]'
                        }`}
                      >
                        {stage.label}
                      </span>
                    </div>

                    {/* Node */}
                    <div
                      ref={el => { nodeRefs.current[i] = el }}
                      className={`w-5 h-5 rounded-full border-2 transition-all duration-300 bg-white ${
                        isActive
                          ? 'border-[#763d50] bg-[#763d50] shadow-lg shadow-[#763d50]/40 scale-110'
                          : 'border-[#dddddd]'
                      }`}
                    />
                  </div>

                  {/* Traditional text */}
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
      </div>
    </section>
  )
}
