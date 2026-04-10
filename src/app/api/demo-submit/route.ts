import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, norma, empleados, situacion, cuando } = body

    // Guardar en Supabase para cruzar con el webhook de Calendly
    const { error } = await supabase.from('demo_leads').upsert({
      nombre,
      empresa,
      email,
      norma,
      empleados,
      situacion,
      cuando,
      created_at: new Date().toISOString(),
    }, { onConflict: 'email' })

    if (error) {
      console.error('Supabase error:', error)
      // No falla si Supabase falla — igual dejamos pasar al usuario
    }

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('demo-submit error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
