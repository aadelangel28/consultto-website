interface SvgProps {
  className?: string
}

export function MexicoSVG({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 520 400" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 18,68 L 10,40 L 20,30 L 200,5 L 400,0 L 510,35 L 515,75 L 480,105 L 440,115 L 400,105 C 380,115 360,135 345,160 L 325,195 L 305,230 C 315,255 325,280 315,305 L 290,318 L 265,308 L 240,318 L 218,312 C 195,295 175,270 155,248 L 130,218 L 100,185 L 70,150 L 40,108 Z" />
      {/* Baja California */}
      <path d="M 18,68 L 10,105 L 8,145 L 5,185 L 10,210 L 20,220 L 28,215 L 30,190 L 25,160 L 22,130 L 20,100 Z" />
    </svg>
  )
}

export function ColombiaSVG({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 300 330" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 30,100 L 70,80 L 90,55 L 110,40 L 140,25 L 170,18 L 205,28 L 235,50 L 260,80 L 272,115 L 260,148 L 242,168 L 252,195 L 265,225 L 258,255 L 233,272 L 200,285 L 168,295 L 138,298 L 108,288 L 78,268 L 52,240 L 28,208 L 12,172 L 8,138 L 18,115 Z" />
    </svg>
  )
}

export function ArgentinaSVG({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 280 500" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 18,68 L 20,30 L 80,10 L 150,5 L 210,20 L 255,50 L 265,90 L 250,130 L 245,170 L 255,210 L 250,250 L 235,285 L 215,315 L 195,345 L 172,378 L 150,408 L 128,435 L 108,458 L 92,478 L 80,488 L 70,478 L 78,455 L 95,432 L 105,405 L 92,378 L 75,352 L 65,318 L 62,282 L 68,248 L 56,212 L 44,175 L 28,135 L 15,95 Z" />
    </svg>
  )
}

export function ChileSVG({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 110 510" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 48,8 L 65,12 L 80,28 L 88,52 L 84,82 L 79,118 L 76,158 L 73,198 L 68,238 L 63,278 L 58,318 L 52,358 L 44,392 L 34,425 L 22,455 L 12,482 L 8,495 L 5,485 L 14,462 L 22,435 L 26,402 L 30,368 L 33,330 L 37,290 L 40,250 L 42,210 L 43,168 L 41,126 L 38,86 L 34,52 L 38,25 Z" />
    </svg>
  )
}

export function PeruSVG({ className }: SvgProps) {
  return (
    <svg viewBox="0 0 300 305" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M 12,88 L 22,42 L 55,15 L 105,5 L 165,8 L 220,28 L 268,68 L 280,115 L 268,162 L 242,200 L 215,235 L 185,268 L 152,290 L 118,300 L 82,288 L 50,260 L 25,225 L 8,182 L 5,135 Z" />
    </svg>
  )
}

const SVG_MAP: Record<string, React.ComponentType<SvgProps>> = {
  mexico: MexicoSVG,
  colombia: ColombiaSVG,
  argentina: ArgentinaSVG,
  chile: ChileSVG,
  peru: PeruSVG,
}

export function PaisSVG({ slug, className }: { slug: string; className?: string }) {
  const Component = SVG_MAP[slug]
  if (!Component) return null
  return <Component className={className} />
}
