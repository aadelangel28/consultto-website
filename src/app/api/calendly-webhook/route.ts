import { NextRequest, NextResponse } from 'next/server'
import { createClient } from '@supabase/supabase-js'
import { Resend } from 'resend'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
)

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Solo procesar eventos de invitee.created (reunión agendada)
    if (body.event !== 'invitee.created') {
      return NextResponse.json({ ok: true })
    }

    const payload = body.payload
    const email = payload?.email as string
    const nombre_calendly = payload?.name as string
    const start_time = payload?.scheduled_event?.start_time as string
    const end_time = payload?.scheduled_event?.end_time as string
    const meeting_url = payload?.scheduled_event?.location?.join_url as string | undefined

    // Buscar datos del formulario por email
    const { data: lead } = await supabase
      .from('demo_leads')
      .select('*')
      .eq('email', email)
      .single()

    // Formatear fecha
    const fecha = new Date(start_time).toLocaleDateString('es-MX', {
      weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
      timeZone: 'America/Mexico_City',
    })
    const hora = new Date(start_time).toLocaleTimeString('es-MX', {
      hour: '2-digit', minute: '2-digit', timeZone: 'America/Mexico_City',
    })
    const hora_fin = new Date(end_time).toLocaleTimeString('es-MX', {
      hour: '2-digit', minute: '2-digit', timeZone: 'America/Mexico_City',
    })

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; color: #1f2020;">
        <div style="background: #763d50; padding: 24px 28px; border-radius: 12px 12px 0 0;">
          <p style="color: white; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;">Nueva demo agendada</p>
        </div>
        <div style="border: 1px solid #efefef; border-top: none; border-radius: 0 0 12px 12px; padding: 28px;">

          <div style="background: #f8f8f8; border-radius: 10px; padding: 16px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 4px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Reunión</p>
            <p style="margin: 0; font-size: 18px; font-weight: 600; color: #1f2020;">${fecha}</p>
            <p style="margin: 4px 0 0 0; font-size: 15px; color: #763d50; font-weight: 500;">${hora} – ${hora_fin} (CDMX)</p>
            ${meeting_url ? `<a href="${meeting_url}" style="display: inline-block; margin-top: 10px; font-size: 12px; color: #763d50;">Ver link de reunión →</a>` : ''}
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 8px 0; color: #999; width: 140px; vertical-align: top;">Nombre</td>
              <td style="padding: 8px 0; font-weight: 500;">${lead?.nombre ?? nombre_calendly}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Empresa</td>
              <td style="padding: 8px 0; font-weight: 500;">${lead?.empresa ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Correo</td>
              <td style="padding: 8px 0;">${email}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Norma</td>
              <td style="padding: 8px 0;">${lead?.norma ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Empleados</td>
              <td style="padding: 8px 0;">${lead?.empleados ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Situación</td>
              <td style="padding: 8px 0;">${lead?.situacion ?? '—'}</td>
            </tr>
            <tr style="border-top: 1px solid #f0f0f0;">
              <td style="padding: 8px 0; color: #999; vertical-align: top;">¿Cuándo?</td>
              <td style="padding: 8px 0;">${lead?.cuando ?? '—'}</td>
            </tr>
          </table>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'Consultto <notificaciones@consultto.com>',
      to: 'alan@consultto.com',
      subject: `Demo agendada — ${lead?.nombre ?? nombre_calendly} · ${fecha} ${hora}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('calendly-webhook error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
