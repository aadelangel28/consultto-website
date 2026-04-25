'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { PaisData } from './data'
import { PAIS_PATHS } from './paisPaths'

interface Props {
  pais: PaisData
}

function MapCanvas({ slug }: { slug: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const pathData = PAIS_PATHS[slug]
    if (!pathData) return

    const isTouch = window.matchMedia('(pointer: coarse)').matches

    let W = 0, H = 0
    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W * window.devicePixelRatio
      canvas.height = H * window.devicePixelRatio
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
    }
    resize()
    window.addEventListener('resize', resize)

    // Parse viewBox to get original dimensions
    const [, , vbW, vbH] = pathData.viewBox.split(' ').map(Number)

    // Mouse
    const mouse = { x: -9999, y: -9999 }
    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    if (!isTouch) {
      window.addEventListener('mousemove', onMouseMove)
      window.addEventListener('mouseleave', onMouseLeave)
    }

    const SPOTLIGHT_RADIUS = 200
    const COLOR_R = 118, COLOR_G = 61, COLOR_B = 80

    let raf: number

    const tick = () => {
      ctx.clearRect(0, 0, W, H)

      // Scale and center the path within the canvas
      const padding = 80
      const scaleX = (W - padding * 2) / vbW
      const scaleY = (H - padding * 2) / vbH
      const scale = Math.min(scaleX, scaleY)
      const offsetX = (W - vbW * scale) / 2
      const offsetY = (H - vbH * scale) / 2

      ctx.save()
      ctx.translate(offsetX, offsetY)
      ctx.scale(scale, scale)

      const path2d = new Path2D(pathData.d)

      // Dim base layer — always visible
      ctx.fillStyle = `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.06)`
      ctx.fill(path2d)

      // Stroke outline — always visible
      ctx.strokeStyle = `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.10)`
      ctx.lineWidth = 1.5 / scale
      ctx.stroke(path2d)

      ctx.restore()

      // Spotlight fill — revealed only near cursor
      if (mouse.x > -100) {
        ctx.save()
        ctx.translate(offsetX, offsetY)
        ctx.scale(scale, scale)

        // Clip to country shape
        ctx.beginPath()
        ctx.clip(path2d)

        ctx.restore()

        // Now draw a radial gradient spotlight in screen coords
        ctx.save()

        // Re-clip in screen coords by rebuilding the transformed path
        ctx.translate(offsetX, offsetY)
        ctx.scale(scale, scale)
        const clipPath = new Path2D(pathData.d)
        ctx.beginPath()
        ctx.clip(clipPath)
        ctx.restore()

        // Draw spotlight inside clipped area
        ctx.save()
        ctx.translate(offsetX, offsetY)
        ctx.scale(scale, scale)
        ctx.clip(new Path2D(pathData.d))

        // Convert mouse to path coordinate space
        const mx = (mouse.x - offsetX) / scale
        const my = (mouse.y - offsetY) / scale
        const r = SPOTLIGHT_RADIUS / scale

        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, r)
        gradient.addColorStop(0,   `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.35)`)
        gradient.addColorStop(0.4, `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.18)`)
        gradient.addColorStop(1,   `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0)`)

        ctx.fillStyle = gradient
        ctx.fillRect(-padding / scale, -padding / scale, (W + padding * 2) / scale, (H + padding * 2) / scale)

        ctx.restore()
      }

      raf = requestAnimationFrame(tick)
    }

    tick()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      if (!isTouch) {
        window.removeEventListener('mousemove', onMouseMove)
        window.removeEventListener('mouseleave', onMouseLeave)
      }
    }
  }, [slug])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ pointerEvents: 'none' }}
    />
  )
}

export function PaisHero({ pais }: Props) {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#fafafa]">

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#763d50]/30 to-transparent" />

      {/* Map canvas — interactive spotlight */}
      <MapCanvas slug={pais.slug} />

      {/* Subtle glow center */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(118,61,80,0.05) 0%, rgba(118,61,80,0.02) 50%, transparent 72%)',
          filter: 'blur(50px)', flexShrink: 0,
        }} />
      </div>

      {/* Content — centered */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">

        {/* Organismo badge */}
        <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#e8e0e3] rounded-full px-4 py-1.5 mb-8 shadow-sm">
          <div className="w-1.5 h-1.5 rounded-full bg-[#763d50]" />
          <span className="text-[#763d50] text-xs font-semibold">{pais.organismoLocal}</span>
          <span className="text-[#3a3a3a]/40 text-xs hidden sm:inline">— {pais.organismoDesc}</span>
        </div>

        {/* Headline */}
        <h1 className="text-[#1f2020] text-4xl md:text-6xl font-light leading-[1.1] mb-6 max-w-3xl">
          {pais.heroTitle}
        </h1>

        {/* Subtitle */}
        <p className="text-[#3a3a3a]/55 text-lg leading-relaxed mb-12 max-w-xl">
          {pais.heroSubtitle}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/demo"
            className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3.5 rounded-full font-bold transition-all hover:scale-105 hover:shadow-md hover:shadow-[#763d50]/20 text-sm whitespace-nowrap text-center"
          >
            Agendar demo gratuita
          </Link>
          <Link
            href="/consultor"
            className="border border-[#d9d9d9] hover:border-[#763d50]/40 text-[#3a3a3a] hover:text-[#763d50] bg-white/80 px-8 py-3.5 rounded-full font-semibold transition-all text-sm whitespace-nowrap text-center"
          >
            Hablar con un consultor
          </Link>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none">
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#3a3a3a]/30 font-medium">
          Descubre más
        </p>
        <svg className="w-4 h-4 animate-bounce" style={{ color: 'rgba(118,61,80,0.35)' }}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10M4 9l4 4 4-4" />
        </svg>
      </div>

    </section>
  )
}
