'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const MOTIVOS = [
  'Tengo dudas sobre qué norma me aplica',
  'Quiero cotizar una implementación o certificación',
  'Necesito ayuda urgente con una auditoría',
  'Quiero saber si Consultto es para mi empresa',
  'Otro motivo',
]

const CANALES = [
  { id: 'whatsapp', label: 'WhatsApp', icon: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.856L.057 23.882a.5.5 0 00.606.632l6.284-1.642A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.655-.502-5.19-1.38l-.374-.214-3.878 1.014 1.036-3.768-.228-.385A9.96 9.96 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/></svg>
  )},
  { id: 'llamada', label: 'Llamada', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>
  )},
  { id: 'email', label: 'Correo', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
  )},
  { id: 'videollamada', label: 'Videollamada', icon: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/></svg>
  )},
]

const HORARIOS = [
  'Ahora mismo',
  'Hoy en la mañana',
  'Hoy en la tarde',
  'Mañana',
  'Esta semana',
]

export default function ConsultorPage() {
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    motivo: '', canal: '', horario: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)
  const [done, setDone] = useState(false)

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  async function submit() {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.empresa.trim()) e.empresa = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Correo válido requerido'
    if (!form.telefono.trim()) e.telefono = 'Requerido'
    if (!form.motivo) e.motivo = 'Selecciona una opción'
    if (!form.canal) e.canal = 'Selecciona una opción'
    if (!form.horario) e.horario = 'Selecciona una opción'

    if (Object.keys(e).length > 0) { setErrors(e); return }

    setSending(true)
    await fetch('/api/consultor-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})
    setSending(false)
    setDone(true)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  if (done) {
    return (
      <main className="min-h-screen bg-[#faf9f8] flex flex-col items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <Link href="/"><Image src="/logo.png" alt="Consultto" width={120} height={28} className="mx-auto mb-12" /></Link>
          <div className="relative w-16 h-16 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-[#763d50]/10 animate-ping opacity-30" />
            <div className="relative w-16 h-16 rounded-full bg-[#763d50]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h1 className="text-2xl font-light text-[#1f2020] mb-3">Recibido, {form.nombre.split(' ')[0]}.</h1>
          <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-8">
            Un consultor de Consultto te contactará{' '}
            <span className="text-[#763d50] font-medium">{form.horario.toLowerCase()}</span>{' '}
            por <span className="text-[#763d50] font-medium">{form.canal}</span>.
          </p>
          <Link href="/" className="inline-block border border-[#e0e0e0] hover:border-[#763d50]/40 text-[#3a3a3a] hover:text-[#763d50] px-7 py-2.5 rounded-full text-sm font-medium transition-all">
            ← Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#faf9f8]">

      {/* Top bar */}
      <div className="flex items-center px-8 py-5 border-b border-[#efefef] bg-white">
        <Link href="/"><Image src="/logo.png" alt="Consultto" width={110} height={26} /></Link>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-14">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-3">Habla con nosotros</p>
          <h1 className="text-3xl font-light text-[#1f2020] mb-3 leading-snug">
            Un consultor real<br />te responde.
          </h1>
          <p className="text-[#3a3a3a]/50 text-sm leading-relaxed max-w-sm">
            Cuéntanos quién eres y qué necesitas. Nosotros nos comunicamos contigo — sin bots, sin formularios que nadie lee.
          </p>
        </div>

        {/* Card */}
        <div className="bg-white rounded-2xl border border-[#efefef] shadow-sm overflow-hidden">

          {/* Datos personales */}
          <div className="p-8 border-b border-[#f5f5f5]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-5">Tus datos</p>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <Field label="Nombre completo" error={errors.nombre}>
                <input autoFocus type="text" value={form.nombre} onChange={e => set('nombre', e.target.value)}
                  placeholder="Ana García" className={inputCls(errors.nombre)} />
              </Field>
              <Field label="Empresa" error={errors.empresa}>
                <input type="text" value={form.empresa} onChange={e => set('empresa', e.target.value)}
                  placeholder="Mi Empresa S.A." className={inputCls(errors.empresa)} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Field label="Correo electrónico" error={errors.email}>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)}
                  placeholder="ana@empresa.com" className={inputCls(errors.email)} />
              </Field>
              <Field label="Teléfono" error={errors.telefono}>
                <input type="tel" value={form.telefono} onChange={e => set('telefono', e.target.value)}
                  placeholder="+52 55 0000 0000" className={inputCls(errors.telefono)} />
              </Field>
            </div>
          </div>

          {/* Motivo */}
          <div className="p-8 border-b border-[#f5f5f5]">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-5">¿En qué te podemos ayudar?</p>
            <div className="flex flex-wrap gap-2">
              {MOTIVOS.map(m => (
                <button key={m} type="button" onClick={() => set('motivo', m)}
                  className={`px-4 py-2 rounded-full text-sm border transition-all ${
                    form.motivo === m
                      ? 'bg-[#763d50] border-[#763d50] text-white font-medium'
                      : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40 bg-white'
                  }`}>
                  {m}
                </button>
              ))}
            </div>
            {errors.motivo && <p className="text-xs text-red-500 mt-3">{errors.motivo}</p>}
          </div>

          {/* Canal + Horario */}
          <div className="p-8 border-b border-[#f5f5f5]">
            <div className="grid grid-cols-2 gap-8">

              {/* Canal */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-5">¿Cómo te contactamos?</p>
                <div className="grid grid-cols-2 gap-2">
                  {CANALES.map(c => (
                    <button key={c.id} type="button" onClick={() => set('canal', c.label)}
                      className={`flex flex-col items-center gap-2 py-4 px-2 rounded-xl border text-xs font-medium transition-all ${
                        form.canal === c.label
                          ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50]'
                          : 'border-[#e8e8e8] text-[#3a3a3a]/60 hover:border-[#763d50]/30 hover:bg-[#faf9f8]'
                      }`}>
                      {c.icon}
                      {c.label}
                    </button>
                  ))}
                </div>
                {errors.canal && <p className="text-xs text-red-500 mt-3">{errors.canal}</p>}
              </div>

              {/* Horario */}
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-[#999] mb-5">¿Cuándo te viene bien?</p>
                <div className="space-y-2">
                  {HORARIOS.map(h => (
                    <button key={h} type="button" onClick={() => set('horario', h)}
                      className={`w-full text-left px-4 py-2.5 rounded-xl border text-sm transition-all ${
                        form.horario === h
                          ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50] font-medium'
                          : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/30 hover:bg-[#faf9f8] bg-white'
                      }`}>
                      <span className="flex items-center justify-between">
                        {h}
                        {form.horario === h && (
                          <svg className="w-3.5 h-3.5 text-[#763d50] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        )}
                      </span>
                    </button>
                  ))}
                </div>
                {errors.horario && <p className="text-xs text-red-500 mt-3">{errors.horario}</p>}
              </div>

            </div>
          </div>

          {/* Submit */}
          <div className="px-8 py-6 flex items-center justify-between bg-[#faf9f8]">
            <p className="text-xs text-[#3a3a3a]/35">No compartimos tu información con terceros.</p>
            <button
              type="button" onClick={submit} disabled={sending}
              className="bg-[#763d50] hover:bg-[#8a4a5e] disabled:opacity-60 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 disabled:hover:scale-100"
            >
              {sending ? 'Enviando...' : 'Solicitar contacto →'}
            </button>
          </div>

        </div>
      </div>
    </main>
  )
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#1f2020] mb-1.5">{label}</label>
      {children}
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  )
}

function inputCls(error?: string) {
  return `w-full px-4 py-2.5 rounded-xl border text-sm bg-white text-[#1f2020] outline-none transition-colors focus:border-[#763d50] ${
    error ? 'border-red-400' : 'border-[#d9d9d9] hover:border-[#b0b0b0]'
  }`
}
