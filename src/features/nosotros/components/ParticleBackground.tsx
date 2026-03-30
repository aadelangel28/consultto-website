'use client'

import { useEffect, useRef } from 'react'

export function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const isTouch = window.matchMedia('(pointer: coarse)').matches

    // ── Sizing ──
    let W = 0, H = 0
    const resize = () => {
      W = canvas.offsetWidth
      H = canvas.offsetHeight
      canvas.width = W
      canvas.height = H
    }
    resize()
    window.addEventListener('resize', resize)

    // ── Mouse ──
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

    // ── Config ──
    const N = 1400                 // total particles
    const CONNECT_DIST = 80        // px to draw a connection line
    const REPEL_RADIUS = 180       // cursor repulsion radius
    const SPOTLIGHT_RADIUS = 160   // radius around cursor that lights up
    const MAX_SPEED = 0.4
    const COLOR = '139,46,74'      // #8B2E4A

    // Node "types" — mimics AI network layers: input, hidden, output
    // Larger hub nodes + many small ones
    type NodeKind = 'hub' | 'mid' | 'dot'
    type Particle = {
      x: number; y: number
      vx: number; vy: number
      ox: number; oy: number   // repulsion offset
      r: number
      alphaDim: number         // base opacity (subtle)
      alphaHigh: number        // opacity when near cursor
      kind: NodeKind
      pulseT: number
      pulseSpeed: number
    }

    const kindFor = (i: number): NodeKind => {
      if (i < 60) return 'hub'      // 60 large hub nodes
      if (i < 360) return 'mid'     // 300 medium nodes
      return 'dot'                  // 1040 tiny dots
    }

    const particles: Particle[] = Array.from({ length: N }, (_, i) => {
      const kind = kindFor(i)
      return {
        x: Math.random() * W,
        y: Math.random() * H,
        vx: (Math.random() - 0.5) * MAX_SPEED * (kind === 'hub' ? 0.4 : 1.8),
        vy: (Math.random() - 0.5) * MAX_SPEED * (kind === 'hub' ? 0.4 : 1.8),
        ox: 0,
        oy: 0,
        r: kind === 'hub' ? 5 + Math.random() * 3 : kind === 'mid' ? 3 + Math.random() * 1.5 : 1.5 + Math.random(),
        alphaDim:  kind === 'hub' ? 0.08 + Math.random() * 0.05 : kind === 'mid' ? 0.05 + Math.random() * 0.04 : 0.03 + Math.random() * 0.03,
        alphaHigh: kind === 'hub' ? 0.65 + Math.random() * 0.2  : kind === 'mid' ? 0.45 + Math.random() * 0.2  : 0.3  + Math.random() * 0.2,
        kind,
        pulseT: Math.random() * Math.PI * 2,
        pulseSpeed: 0.02 + Math.random() * 0.02,
      }
    })

    let raf: number

    const tick = () => {
      ctx.clearRect(0, 0, W, H)

      // ── Update positions ──
      for (const p of particles) {
        p.x += p.vx
        p.y += p.vy

        // bounce
        if (p.x < 0)  { p.x = 0;  p.vx =  Math.abs(p.vx) }
        if (p.x > W)  { p.x = W;  p.vx = -Math.abs(p.vx) }
        if (p.y < 0)  { p.y = 0;  p.vy =  Math.abs(p.vy) }
        if (p.y > H)  { p.y = H;  p.vy = -Math.abs(p.vy) }

        // cursor repulsion
        const dx = p.x - mouse.x
        const dy = p.y - mouse.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < REPEL_RADIUS && dist > 0) {
          const force = (1 - dist / REPEL_RADIUS) * 1.5
          p.ox += (dx / dist) * force
          p.oy += (dy / dist) * force
        }
        p.ox *= 0.88
        p.oy *= 0.88

        // pulse tick
        p.pulseT += p.pulseSpeed
      }

      // helper: spotlight factor 0..1 for a given position
      const spotFactor = (px: number, py: number) => {
        const ddx = px - mouse.x, ddy = py - mouse.y
        const d = Math.sqrt(ddx * ddx + ddy * ddy)
        return d < SPOTLIGHT_RADIUS ? 1 - d / SPOTLIGHT_RADIUS : 0
      }

      // ── Draw connections ──
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i]
        const ax = a.x + a.ox, ay = a.y + a.oy

        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j]
          const bx = b.x + b.ox, by = b.y + b.oy
          const ddx = ax - bx, ddy = ay - by
          const d = Math.sqrt(ddx * ddx + ddy * ddy)

          if (d < CONNECT_DIST) {
            const proximity = 1 - d / CONNECT_DIST
            const spot = Math.max(spotFactor(ax, ay), spotFactor(bx, by))
            const dimMax  = (a.kind === 'hub' && b.kind === 'hub') ? 0.05 : 0.025
            const highMax = (a.kind === 'hub' && b.kind === 'hub') ? 0.45  : 0.25
            const maxAlpha = dimMax + (highMax - dimMax) * spot
            ctx.beginPath()
            ctx.moveTo(ax, ay)
            ctx.lineTo(bx, by)
            ctx.strokeStyle = `rgba(${COLOR},${proximity * maxAlpha})`
            ctx.lineWidth = a.kind === 'hub' || b.kind === 'hub' ? 0.8 : 0.5
            ctx.stroke()
          }
        }
      }

      // ── Draw particles ──
      for (const p of particles) {
        const px = p.x + p.ox, py = p.y + p.oy
        const spot = spotFactor(px, py)
        const alpha = p.alphaDim + (p.alphaHigh - p.alphaDim) * spot

        if (p.kind === 'hub') {
          const pulseR = p.r + 3 + Math.sin(p.pulseT) * 2
          const pulseAlpha = (0.01 + spot * 0.08) * (0.5 + Math.sin(p.pulseT) * 0.5)
          ctx.beginPath()
          ctx.arc(px, py, pulseR, 0, Math.PI * 2)
          ctx.strokeStyle = `rgba(${COLOR},${pulseAlpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        ctx.beginPath()
        ctx.arc(px, py, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${COLOR},${alpha})`
        ctx.fill()
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
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ zIndex: 0, pointerEvents: 'none' }}
    />
  )
}
