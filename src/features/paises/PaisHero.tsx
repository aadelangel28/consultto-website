'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import Link from 'next/link'
import { PaisData } from './data'
import { PAIS_PATHS } from './paisPaths'

interface Props {
  pais: PaisData
}

const DRAW_DURATION = 3800  // ms para dibujar el trazo
const PAUSE_AFTER   = 0     // ms de espera antes de mostrar texto

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
      const scaleX = (W - padding * 2) / vbW
      const scaleY = (H - padding * 2) / vbH
      const scale = Math.min(scaleX, scaleY)
      const offsetX = (W - vbW * scale) / 2
      const offsetY = (H - vbH * scale) / 2

      const path2d = new Path2D(pathData.d)

      // Base fill
      ctx.save()
      ctx.translate(offsetX, offsetY)
      ctx.scale(scale, scale)
      ctx.fillStyle = `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.07)`
      ctx.fill(path2d)
      ctx.restore()

      // Spotlight
      if (mouse.x > -100) {
        ctx.save()
        ctx.translate(offsetX, offsetY)
        ctx.scale(scale, scale)
        ctx.clip(new Path2D(pathData.d))
        const mx = (mouse.x - offsetX) / scale
        const my = (mouse.y - offsetY) / scale
        const r = SPOTLIGHT_RADIUS / scale
        const gradient = ctx.createRadialGradient(mx, my, 0, mx, my, r)
        gradient.addColorStop(0,   `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.35)`)
        gradient.addColorStop(0.5, `rgba(${COLOR_R},${COLOR_G},${COLOR_B},0.15)`)
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

function DrawingSVG({ slug, onDone }: { slug: string; onDone: () => void }) {
  const pathRef = useRef<SVGPathElement>(null)
  const [length, setLength] = useState<number | null>(null)
  const [strokeVisible, setStrokeVisible] = useState(true)

  useEffect(() => {
    if (!pathRef.current) return
    const l = pathRef.current.getTotalLength()
    setLength(l)
    pathRef.current.style.strokeDasharray = `${l}`
    pathRef.current.style.strokeDashoffset = `${l}`

    // Cuando termina el trazo, esperamos PAUSE_AFTER y avisamos
    const t1 = setTimeout(() => {
      setStrokeVisible(false) // eliminar contorno
      onDone()
    }, DRAW_DURATION + PAUSE_AFTER)

    return () => clearTimeout(t1)
  }, [onDone])

  const pathData = PAIS_PATHS[slug]
  if (!pathData) return null
  const [, , vbW, vbH] = pathData.viewBox.split(' ').map(Number)

  // Use only the first sub-path (main landmass) for the stroke animation
  // so it forms a single closed loop from start to end
  const mainPath = pathData.d.split(' M ')[0]

  return (
    <svg
      viewBox={`0 0 ${vbW} ${vbH}`}
      className="absolute inset-0 w-full h-full"
      style={{ padding: '80px', boxSizing: 'border-box' }}
      preserveAspectRatio="xMidYMid meet"
    >
      {length !== null && (
        <style>{`
          @keyframes draw-stroke {
            from { stroke-dashoffset: ${length}; }
            to   { stroke-dashoffset: 0; }
          }
          @keyframes fade-fill {
            from { opacity: 0; }
            to   { opacity: 0.07; }
          }
          @keyframes fade-out-stroke {
            from { opacity: 1; }
            to   { opacity: 0; }
          }
          .map-stroke {
            stroke-dasharray: ${length};
            stroke-dashoffset: ${length};
            animation: draw-stroke ${DRAW_DURATION}ms cubic-bezier(0.4, 0, 0.2, 1) forwards;
          }
          .map-stroke-fadeout {
            animation: fade-out-stroke 400ms ease forwards;
          }
          .map-fill {
            animation: fade-fill ${DRAW_DURATION}ms ease forwards;
          }
        `}</style>
      )}

      {/* Fill completo (todos los sub-paths) */}
      <path
        d={pathData.d}
        fill="rgba(118,61,80,1)"
        className="map-fill"
        style={{ opacity: 0 }}
      />

      {/* Trazo — solo el contorno principal para que forme un loop cerrado */}
      <path
        ref={pathRef}
        d={mainPath}
        fill="none"
        stroke="rgba(118,61,80,0.65)"
        strokeWidth="2"
        vectorEffect="non-scaling-stroke"
        className={length !== null ? `map-stroke${!strokeVisible ? ' map-stroke-fadeout' : ''}` : ''}
        style={length === null ? { opacity: 0 } : undefined}
      />
    </svg>
  )
}

export function PaisHero({ pais }: Props) {
  const [phase, setPhase] = useState<'drawing' | 'done'>('drawing')
  const [textVisible, setTextVisible] = useState(false)

  const handleDrawDone = useCallback(() => {
    setPhase('done')
    setTextVisible(true)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col items-center justify-center bg-[#fafafa]">

      {/* Accent line top */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-[#763d50]/30 to-transparent" />

      {/* Fase 1: trazo dibujándose */}
      {phase === 'drawing' && (
        <DrawingSVG slug={pais.slug} onDone={handleDrawDone} />
      )}

      {/* Fase 2: canvas con hover spotlight */}
      {phase === 'done' && (
        <MapCanvas slug={pais.slug} />
      )}

      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div style={{
          width: 700, height: 500,
          background: 'radial-gradient(ellipse, rgba(118,61,80,0.04) 0%, transparent 72%)',
          filter: 'blur(50px)', flexShrink: 0,
        }} />
      </div>

      {/* Texto */}
      <div
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 py-32 transition-all duration-300"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textVisible ? 'translateY(0)' : 'translateY(20px)',
          pointerEvents: textVisible ? 'auto' : 'none',
        }}
      >
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
      <div
        className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none transition-opacity duration-700"
        style={{ opacity: textVisible ? 1 : 0 }}
      >
        <p className="text-[10px] uppercase tracking-[0.25em] text-[#3a3a3a]/30 font-medium">Descubre más</p>
        <svg className="w-4 h-4 animate-bounce" style={{ color: 'rgba(118,61,80,0.35)' }}
          fill="none" viewBox="0 0 16 16" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 3v10M4 9l4 4 4-4" />
        </svg>
      </div>

    </section>
  )
}
