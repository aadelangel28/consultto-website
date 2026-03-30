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
  vx: number
  vy: number
  label: string
  alphaDim: number
  alphaHigh: number
  ox: number
  oy: number
}

const N_BADGES = 50
const SPOTLIGHT_RADIUS = 200
const REPEL_RADIUS = 160

export function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Non-null refs for closures
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
    }

    function init() {
      badges.length = 0
      for (let i = 0; i < N_BADGES; i++) {
        badges.push({
          x: Math.random() * W,
          y: Math.random() * H,
          vx: (Math.random() - 0.5) * 0.25,
          vy: (Math.random() - 0.5) * 0.25,
          label: NORMS[i % NORMS.length],
          alphaDim: 0.05 + Math.random() * 0.04,
          alphaHigh: 0.85 + Math.random() * 0.15,
          ox: 0,
          oy: 0,
        })
      }
    }

    function roundRect(x: number, y: number, w: number, h: number, r: number) {
      c2d.beginPath()
      c2d.moveTo(x + r, y)
      c2d.lineTo(x + w - r, y)
      c2d.quadraticCurveTo(x + w, y, x + w, y + r)
      c2d.lineTo(x + w, y + h - r)
      c2d.quadraticCurveTo(x + w, y + h, x + w - r, y + h)
      c2d.lineTo(x + r, y + h)
      c2d.quadraticCurveTo(x, y + h, x, y + h - r)
      c2d.lineTo(x, y + r)
      c2d.quadraticCurveTo(x, y, x + r, y)
      c2d.closePath()
    }

    function draw() {
      c2d.clearRect(0, 0, W, H)

      for (const b of badges) {
        // Move
        b.x += b.vx
        b.y += b.vy
        if (b.x < -100) b.x = W + 100
        if (b.x > W + 100) b.x = -100
        if (b.y < -30) b.y = H + 30
        if (b.y > H + 30) b.y = -30

        // Mouse repulsion
        const rdx = (b.x + b.ox) - mouse.x
        const rdy = (b.y + b.oy) - mouse.y
        const rdist = Math.sqrt(rdx * rdx + rdy * rdy)
        if (rdist < REPEL_RADIUS && rdist > 0) {
          const force = (REPEL_RADIUS - rdist) / REPEL_RADIUS
          b.ox += (rdx / rdist) * force * 3.5
          b.oy += (rdy / rdist) * force * 3.5
        }
        b.ox *= 0.88
        b.oy *= 0.88

        const rx = b.x + b.ox
        const ry = b.y + b.oy

        // Spotlight alpha
        const sdx = rx - mouse.x
        const sdy = ry - mouse.y
        const sdist = Math.sqrt(sdx * sdx + sdy * sdy)
        const t = Math.max(0, 1 - sdist / SPOTLIGHT_RADIUS)
        const alpha = b.alphaDim + (b.alphaHigh - b.alphaDim) * t

        c2d.save()
        c2d.font = '600 11px ui-sans-serif, system-ui, sans-serif'
        c2d.textBaseline = 'middle'
        c2d.textAlign = 'center'

        const tw = c2d.measureText(b.label).width
        const padX = 9
        const padY = 5
        const bw = tw + padX * 2
        const bh = 22

        if (t > 0.05) {
          // Badge background (only near cursor)
          c2d.globalAlpha = alpha * 0.12
          c2d.fillStyle = '#763d50'
          roundRect(rx - bw / 2, ry - bh / 2, bw, bh, 5)
          c2d.fill()

          // Badge border
          c2d.globalAlpha = alpha * 0.35
          c2d.strokeStyle = '#763d50'
          c2d.lineWidth = 1
          roundRect(rx - bw / 2, ry - bh / 2, bw, bh, 5)
          c2d.stroke()
        }

        // Text
        c2d.globalAlpha = alpha
        c2d.fillStyle = '#763d50'
        c2d.fillText(b.label, rx, ry)

        c2d.restore()
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
