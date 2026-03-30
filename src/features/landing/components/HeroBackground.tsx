'use client'

import { useEffect, useRef } from 'react'

const NORMS = [
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'ISO 22000',
  'ISO 13485', 'ISO 50001', 'IATF 16949', 'AS9100', 'HACCP',
  'GMP', 'BRC', 'SQF', 'ISO 17025', 'ISO 31000',
  'ISO 9001:2015', 'ISO 14001:2015', 'ISO 45001:2018', 'FDA 21 CFR',
  'ISO 22301', 'ISO 20000', 'FSSC 22000', 'VDA 6.3', 'OHSAS 18001',
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 27001', 'IATF 16949',
  'ISO 22000', 'AS9100', 'ISO 13485', 'HACCP', 'GMP',
  'ISO 50001', 'BRC', 'ISO 17025', 'FSSC 22000', 'ISO 31000',
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 22000', 'ISO 27001',
  'IATF 16949', 'ISO 13485', 'AS9100', 'HACCP', 'GMP',
]

interface Badge {
  x: number
  y: number
  label: string
  alphaDim: number
  alphaHigh: number
  currentAlpha: number
}

const N_BADGES = 50
const SPOTLIGHT_RADIUS = 220

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const cvs = canvas
    const c2d = ctx

    let W = 0, H = 0
    let mouse = { x: -9999, y: -9999 }
    let rafId = 0
    const badges: Badge[] = []

    function resize() {
      W = cvs.offsetWidth
      H = cvs.offsetHeight
      cvs.width = W * devicePixelRatio
      cvs.height = H * devicePixelRatio
      c2d.scale(devicePixelRatio, devicePixelRatio)
      // Redistribute badges on resize
      badges.forEach((b, i) => {
        b.x = (i % 10) / 10 * W + (Math.random() - 0.5) * (W / 10)
        b.y = Math.floor(i / 10) / Math.ceil(N_BADGES / 10) * H + (Math.random() - 0.5) * 60
      })
    }

    function init() {
      badges.length = 0
      for (let i = 0; i < N_BADGES; i++) {
        const alphaDim = 0.1 + Math.random() * 0.08
        badges.push({
          x: Math.random() * W,
          y: Math.random() * H,
          label: NORMS[i % NORMS.length],
          alphaDim,
          alphaHigh: 0.9,
          currentAlpha: alphaDim,
        })
      }
    }

    function draw() {
      c2d.clearRect(0, 0, W, H)
      c2d.font = '500 11px ui-sans-serif, system-ui, sans-serif'
      c2d.textBaseline = 'middle'
      c2d.textAlign = 'center'

      for (const b of badges) {
        const dx = b.x - mouse.x
        const dy = b.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        const t = Math.max(0, 1 - dist / SPOTLIGHT_RADIUS)
        const target = b.alphaDim + (b.alphaHigh - b.alphaDim) * t
        // Smooth interpolation
        b.currentAlpha += (target - b.currentAlpha) * 0.08

        c2d.globalAlpha = b.currentAlpha
        c2d.fillStyle = '#888888'
        c2d.fillText(b.label, b.x, b.y)
      }

      rafId = requestAnimationFrame(draw)
    }

    resize()
    init()
    draw()

    const ro = new ResizeObserver(resize)
    ro.observe(canvas)

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect()
      mouse = { x: e.clientX - rect.left, y: e.clientY - rect.top }
    }
    const onLeave = () => { mouse = { x: -9999, y: -9999 } }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseleave', onLeave)

    return () => {
      cancelAnimationFrame(rafId)
      ro.disconnect()
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseleave', onLeave)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  )
}
