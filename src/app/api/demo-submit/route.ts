import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

function getSupabase() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
  )
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, telefono, norma, empleados, situacion, cuando, objetivo } = body

    // Guardar en Supabase
    const { error } = await getSupabase().from('demo_leads').upsert({
      nombre,
      empresa,
      email,
      telefono,
      norma,
      empleados,
      situacion,
      cuando,
      objetivo,
      created_at: new Date().toISOString(),
    }, { onConflict: 'email' })

    if (error) {
      console.error('Supabase error:', error)
    }

    // Enviar correo con los datos del lead
    const resend = new Resend(process.env.RESEND_API_KEY)

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; color: #1f2020;">
        <div style="background: #763d50; padding: 24px 28px; border-radius: 12px 12px 0 0;">
          <p style="color: white; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;">Nuevo lead — Demo solicitada</p>
        </div>
        <div style="border: 1px solid #efefef; border-top: none; border-radius: 0 0 12px 12px; padding: 28px;">
          <p style="margin: 0 0 20px 0; font-size: 14px; color: #666;">El usuario completó el formulario y está a punto de agendar en Calendly.</p>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #999; width: 140px; vertical-align: top;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 500;">${nombre ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Empresa</td>
              <td style="padding: 8px 0; font-weight: 500;">${empresa ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Correo</td>
              <td style="padding: 8px 0;">${email ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Teléfono</td>
              <td style="padding: 8px 0;">${telefono ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Objetivo</td>
              <td style="padding: 8px 0;">${objetivo ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Norma</td>
              <td style="padding: 8px 0;">${norma ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Empleados</td>
              <td style="padding: 8px 0;">${empleados ?? '—'}</td>
            </tr>
          </table>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'Consultto <notificaciones@consultto.com>',
      to: 'alan@consultto.com',
      subject: `Nuevo lead — ${nombre} · ${empresa}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('demo-submit error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
