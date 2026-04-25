/**
 * Generates accurate country SVG paths from GeoJSON data (Natural Earth)
 * Usage: npx tsx scripts/generate-country-svgs.ts
 */

const COUNTRIES = [
  { slug: 'mexico',    name: 'Mexico',    iso: 'MEX' },
  { slug: 'colombia',  name: 'Colombia',  iso: 'COL' },
  { slug: 'argentina', name: 'Argentina', iso: 'ARG' },
  { slug: 'chile',     name: 'Chile',     iso: 'CHL' },
  { slug: 'peru',      name: 'Peru',      iso: 'PER' },
]

// Fetch GeoJSON from a public source (Natural Earth via CDN)
const GEOJSON_URL = 'https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson'

type Coord = [number, number]
type Ring = Coord[]
type Polygon = Ring[]
type MultiPolygon = Polygon[]

interface Feature {
  properties: { ISO_A3: string; ADMIN: string }
  geometry: {
    type: 'Polygon' | 'MultiPolygon'
    coordinates: Polygon | MultiPolygon
  }
}

interface GeoJSON {
  features: Feature[]
}

function projectCoord(lon: number, lat: number, bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }, width: number, height: number): [number, number] {
  const x = ((lon - bounds.minLon) / (bounds.maxLon - bounds.minLon)) * width
  const y = height - ((lat - bounds.minLat) / (bounds.maxLat - bounds.minLat)) * height
  return [Math.round(x * 10) / 10, Math.round(y * 10) / 10]
}

function ringToPath(ring: Ring, bounds: { minLon: number; maxLon: number; minLat: number; maxLat: number }, w: number, h: number): string {
  return ring.map((coord, i) => {
    const [x, y] = projectCoord(coord[0], coord[1], bounds, w, h)
    return `${i === 0 ? 'M' : 'L'} ${x},${y}`
  }).join(' ') + ' Z'
}

function getBounds(coordinates: Polygon | MultiPolygon, type: string): { minLon: number; maxLon: number; minLat: number; maxLat: number } {
  const allCoords: Coord[] = []

  if (type === 'Polygon') {
    const poly = coordinates as Polygon
    poly.forEach(ring => ring.forEach(c => allCoords.push(c)))
  } else {
    const multi = coordinates as MultiPolygon
    multi.forEach(poly => poly.forEach(ring => ring.forEach(c => allCoords.push(c))))
  }

  return {
    minLon: Math.min(...allCoords.map(c => c[0])),
    maxLon: Math.max(...allCoords.map(c => c[0])),
    minLat: Math.min(...allCoords.map(c => c[1])),
    maxLat: Math.max(...allCoords.map(c => c[1])),
  }
}

function featureToSVGPath(feature: Feature, w: number, h: number): string {
  const { type, coordinates } = feature.geometry
  const bounds = getBounds(coordinates, type)

  // Add padding
  const lonPad = (bounds.maxLon - bounds.minLon) * 0.05
  const latPad = (bounds.maxLat - bounds.minLat) * 0.05
  const paddedBounds = {
    minLon: bounds.minLon - lonPad,
    maxLon: bounds.maxLon + lonPad,
    minLat: bounds.minLat - latPad,
    maxLat: bounds.maxLat + latPad,
  }

  const paths: string[] = []

  if (type === 'Polygon') {
    const poly = coordinates as Polygon
    // Use outer ring only
    paths.push(ringToPath(poly[0], paddedBounds, w, h))
  } else {
    const multi = coordinates as MultiPolygon
    // Find the largest polygon (main landmass)
    const sorted = multi.slice().sort((a, b) => b[0].length - a[0].length)
    // Take top 3 largest polygons (covers mainland + major islands)
    sorted.slice(0, 3).forEach(poly => {
      paths.push(ringToPath(poly[0], paddedBounds, w, h))
    })
  }

  return paths.join(' ')
}

async function main() {
  console.log('Fetching GeoJSON data...')
  const res = await fetch(GEOJSON_URL)
  const geojson = await res.json() as GeoJSON

  const results: Record<string, { path: string; viewBox: string }> = {}

  for (const country of COUNTRIES) {
    const feature = geojson.features.find(f => f.properties.ISO_A3 === country.iso)
    if (!feature) {
      console.error(`❌ Not found: ${country.name}`)
      continue
    }

    // Chile is very elongated — use different dimensions
    const w = country.slug === 'chile' ? 120 : country.slug === 'argentina' ? 260 : 400
    const h = country.slug === 'chile' ? 520 : country.slug === 'argentina' ? 500 : 380

    const path = featureToSVGPath(feature, w, h)
    results[country.slug] = { path, viewBox: `0 0 ${w} ${h}` }
    console.log(`✅ ${country.name}: ${path.length} chars`)
  }

  // Output the component
  const componentLines = [
    `// AUTO-GENERATED — do not edit manually`,
    `// Run: npx tsx scripts/generate-country-svgs.ts`,
    ``,
    `interface SvgProps { className?: string }`,
    ``,
  ]

  for (const [slug, { path, viewBox }] of Object.entries(results)) {
    const name = slug.charAt(0).toUpperCase() + slug.slice(1)
    componentLines.push(
      `export function ${name}SVG({ className }: SvgProps) {`,
      `  return (`,
      `    <svg viewBox="${viewBox}" fill="currentColor" className={className} xmlns="http://www.w3.org/2000/svg">`,
      `      <path d="${path}" />`,
      `    </svg>`,
      `  )`,
      `}`,
      ``,
    )
  }

  componentLines.push(
    `const SVG_MAP: Record<string, React.ComponentType<SvgProps>> = {`,
    ...Object.keys(results).map(slug => `  ${slug}: ${slug.charAt(0).toUpperCase() + slug.slice(1)}SVG,`),
    `}`,
    ``,
    `export function PaisSVG({ slug, className }: { slug: string; className?: string }) {`,
    `  const Component = SVG_MAP[slug]`,
    `  if (!Component) return null`,
    `  return <Component className={className} />`,
    `}`,
  )

  const output = componentLines.join('\n')

  const fs = await import('fs')
  const path = await import('path')
  const outPath = path.resolve('./src/features/paises/PaisSVG.tsx')
  fs.writeFileSync(outPath, output, 'utf-8')
  console.log(`\n✅ Written to ${outPath}`)
}

main().catch(console.error)
