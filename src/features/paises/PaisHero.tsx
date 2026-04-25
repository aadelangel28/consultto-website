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

    const [, , vbW, vbH] = pathData.viewBox.split(' ').map(Number)
    const COLOR_R = 118, COLOR_G = 61, COLOR_B = 80

    // Chile es muy alargado verticalmente — rotamos 90° para que ocupe mejor el hero
    const rotate90 = slug === 'chile'
    // Tras rotar, el ancho lógico es vbH y el alto lógico es vbW
    const logW = rotate90 ? vbH : vbW
    const logH = rotate90 ? vbW : vbH

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
    let raf: number

    const tick = () => {
      ctx.clearRect(0, 0, W, H)

      const padding = 100
      const scaleX = (W - padding * 2) / logW
      const scaleY = (H - padding * 2) / logH
      const scale = Math.min(scaleX, scaleY)
      const offsetX = (W - logW * scale) / 2
      const offsetY = (H - logH * scale) / 2

      const path2d = new Path2D(pathData.d)

      // Aplicar rotación si es Chile
      const applyTransform = () => {
        ctx.translate(offsetX, offsetY)
        if (rotate90) {
          // Rotar 90° alrededor del centro del viewBox original
          ctx.translate(logW * scale / 2, logH * scale / 2)
          ctx.rotate(-Math.PI / 2)
          ctx.translate(-vbW * scale / 2, -vbH * scale / 2)
          ctx.scale(scale, scale)
        } else {
          ctx.scale(scale, scale)
        }
      }

      ctx.save()
      applyTransform()
      ctx.fillStyle = `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.07)`
      ctx.fill(path2d)
      ctx.restore()

      if (mouse.x > -100) {
        ctx.save()
        applyTransform()
        ctx.clip(new Path2D(pathData.d))
        // Convertir mouse a coordenadas del path (antes de rotar)
        let mx: number, my: number
        if (rotate90) {
          // Invertir la rotación para el spotlight
          const cx = logW * scale / 2 + offsetX
          const cy = logH * scale / 2 + offsetY
          const dx = mouse.x - cx
          const dy = mouse.y - cy
          mx = (cy - mouse.y + vbH * scale / 2) / scale
          my = (mouse.x - cx + vbW * scale / 2) / scale
          void dx; void dy
        } else {
          mx = (mouse.x - offsetX) / scale
          my = (mouse.y - offsetY) / scale
        }
        const r = SPOTLIGHT_RADIUS / scale
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, r)
        gradient.addColorStop(0,   `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.35)`)
        gradient.addColorStop(0.5, `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.15)`)
        gradient.addColorStop(1,   `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0)`)
        ctx.fillStyle = gradient
        ctx.fillRect(0, 0, vbW, vbH)
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

      {/* Mapa de fondo con hover spotlight */}
      <MapCanvas slug={pais.slug} />

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(118,61,80,0.04) 0%, transparent 72%)',
          filter: 'blur(50px)', flexShrink: 0,
        }} />
      </div>

      {/* Texto — visible de inmediato */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32">
        <h1 className="text-[#1f2020] text-4xl md:text-6xl font-light leading-[1.1] mb-6 max-w-3xl">
          {pais.heroTitle}
        </h1>
        <p className="text-[#3a3a3a]/55 text-lg leading-relaxed mb-12 max-w-xl">
          {pais.heroSubtitle}
        </p>
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
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#3a3a3a]/30 font-medium">Descubre más</p>
        <svg className="w-4 h-4 animate-bounce" style={{ color: 'rgba(118,61,80,0.35)' }}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10M4 9l4 4 4-4" />
        </svg>
      </div>

    </section>
  )
}
