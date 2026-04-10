import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { nombre, empresa, email, telefono, motivo, canal } = body

    const resend = new Resend(process.env.RESEND_API_KEY)

    const html = `
      <div style="font-family: system-ui, sans-serif; max-width: 520px; margin: 0 auto; color: #1f2020;">
        <div style="background: #763d50; padding: 24px 28px; border-radius: 12px 12px 0 0;">
          <p style="color: white; font-size: 13px; font-weight: 600; letter-spacing: 0.08em; text-transform: uppercase; margin: 0;">Solicitud de contacto con consultor</p>
        </div>
        <div style="border: 1px solid #efefef; border-top: none; border-radius: 0 0 12px 12px; padding: 28px;">

          <div style="background: #f8f8f8; border-radius: 10px; padding: 14px 20px; margin-bottom: 24px;">
            <p style="margin: 0 0 2px 0; font-size: 12px; color: #999; font-weight: 600; text-transform: uppercase; letter-spacing: 0.06em;">Contactar por</p>
            <p style="margin: 0; font-size: 17px; font-weight: 600; color: #763d50;">${canal ?? '—'}</p>
          </div>

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
              <td style="padding: 8px 0; color: #999; vertical-align: top;">Motivo</td>
              <td style="padding: 8px 0;">${motivo ?? '—'}</td>
            </tr>
          </table>
        </div>
      </div>
    `

    await resend.emails.send({
      from: 'Consultto <notificaciones@consultto.com>',
      to: 'alan@consultto.com',
      subject: `Consultor solicitado — ${nombre} · ${empresa}`,
      html,
    })

    return NextResponse.json({ ok: true })
  } catch (err) {
    console.error('consultor-submit error:', err)
    return NextResponse.json({ ok: false }, { status: 500 })
  }
}
