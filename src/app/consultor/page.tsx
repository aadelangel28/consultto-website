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
  { id: 'whatsapp', label: 'WhatsApp', icon: '💬' },
  { id: 'llamada', label: 'Llamada telefónica', icon: '📞' },
  { id: 'email', label: 'Correo electrónico', icon: '✉️' },
  { id: 'videollamada', label: 'Videollamada', icon: '🎥' },
]

const HORARIOS = [
  'Ahora mismo (lo antes posible)',
  'Hoy en la mañana (9:00 – 12:00)',
  'Hoy en la tarde (13:00 – 18:00)',
  'Mañana en la mañana',
  'Mañana en la tarde',
  'Esta semana, cuando puedan',
]

type Step = 'datos' | 'motivo' | 'canal' | 'horario' | 'done'
const STEPS: Step[] = ['datos', 'motivo', 'canal', 'horario']

export default function ConsultorPage() {
  const [step, setStep] = useState<Step>('datos')
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    motivo: '', canal: '', horario: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sending, setSending] = useState(false)

  const stepIndex = STEPS.indexOf(step)
  const progress = step === 'done' ? 100 : Math.round(((stepIndex) / STEPS.length) * 100)

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  async function next() {
    const e: Record<string, string> = {}

    if (step === 'datos') {
      if (!form.nombre.trim()) e.nombre = 'Requerido'
      if (!form.empresa.trim()) e.empresa = 'Requerido'
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Correo válido requerido'
      if (!form.telefono.trim()) e.telefono = 'Requerido'
    }
    if (step === 'motivo' && !form.motivo) e.motivo = 'Selecciona una opción'
    if (step === 'canal' && !form.canal) e.canal = 'Selecciona una opción'
    if (step === 'horario') {
      if (!form.horario) e.horario = 'Selecciona una opción'
      else {
        setSending(true)
        await fetch('/api/consultor-submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(form),
        }).catch(() => {})
        setSending(false)
        setStep('done')
        window.scrollTo({ top: 0, behavior: 'smooth' })
        return
      }
    }

    if (Object.keys(e).length > 0) { setErrors(e); return }
    setStep(STEPS[stepIndex + 1])
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function back() {
    if (stepIndex > 0) setStep(STEPS[stepIndex - 1])
  }

  if (step === 'done') {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <Link href="/"><Image src="/logo.png" alt="Consultto" width={120} height={28} className="mx-auto mb-12" /></Link>

          {/* Checkmark animado */}
          <div className="relative w-16 h-16 mx-auto mb-8">
            <div className="absolute inset-0 rounded-full bg-[#763d50]/10 animate-ping opacity-30" />
            <div className="relative w-16 h-16 rounded-full bg-[#763d50]/10 flex items-center justify-center">
              <svg className="w-8 h-8 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>

          <h1 className="text-2xl font-light text-[#1f2020] mb-3">Recibido, {form.nombre.split(' ')[0]}.</h1>
          <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-3">
            Un consultor de Consultto se pondrá en contacto contigo{' '}
            <span className="text-[#763d50] font-medium">
              {form.horario.toLowerCase().includes('ahora') ? 'lo antes posible' : 'en el horario que indicaste'}
            </span>{' '}
            por{' '}
            <span className="text-[#763d50] font-medium">{form.canal}</span>.
          </p>
          <p className="text-[#3a3a3a]/40 text-xs mb-10">Si tienes alguna urgencia, escríbenos directamente.</p>

          <Link
            href="/"
            className="inline-block border border-[#e0e0e0] hover:border-[#763d50]/40 text-[#3a3a3a] hover:text-[#763d50] px-7 py-2.5 rounded-full text-sm font-medium transition-all"
          >
            ← Volver al inicio
          </Link>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white flex flex-col">

      {/* Top bar */}
      <div className="flex items-center justify-between px-8 py-5 border-b border-[#f0f0f0]">
        <Link href="/"><Image src="/logo.png" alt="Consultto" width={110} height={26} /></Link>
      </div>

      {/* Content */}
      <div className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-lg">

          {/* STEP: datos */}
          {step === 'datos' && (
            <div style={{ animation: 'fadeInUp 350ms cubic-bezier(0.16,1,0.3,1) both' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 1 de 4</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿Con quién hablamos?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Un consultor real revisará esto y te contactará personalmente.</p>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nombre completo" error={errors.nombre}>
                    <input autoFocus type="text" value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls(errors.nombre)} placeholder="Ana García" />
                  </Field>
                  <Field label="Empresa" error={errors.empresa}>
                    <input type="text" value={form.empresa} onChange={e => set('empresa', e.target.value)} className={inputCls(errors.empresa)} placeholder="Mi Empresa S.A." />
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Correo electrónico" error={errors.email}>
                    <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls(errors.email)} placeholder="ana@empresa.com" />
                  </Field>
                  <Field label="Teléfono" error={errors.telefono}>
                    <input type="tel" value={form.telefono} onChange={e => set('telefono', e.target.value)} className={inputCls(errors.telefono)} placeholder="+52 55 0000 0000" />
                  </Field>
                </div>
              </div>
            </div>
          )}

          {/* STEP: motivo */}
          {step === 'motivo' && (
            <div style={{ animation: 'fadeInUp 350ms cubic-bezier(0.16,1,0.3,1) both' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 2 de 4</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿En qué te podemos ayudar?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Elige lo que mejor describe tu situación.</p>
              <div className="space-y-2">
                {MOTIVOS.map(m => (
                  <button
                    key={m} type="button" onClick={() => set('motivo', m)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all ${
                      form.motivo === m
                        ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50] font-medium'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40 hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {m}
                      {form.motivo === m && (
                        <svg className="w-4 h-4 text-[#763d50] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              {errors.motivo && <p className="text-xs text-red-500 mt-3">{errors.motivo}</p>}
            </div>
          )}

          {/* STEP: canal */}
          {step === 'canal' && (
            <div style={{ animation: 'fadeInUp 350ms cubic-bezier(0.16,1,0.3,1) both' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 3 de 4</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿Cómo prefieres que te contactemos?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Nosotros nos comunicamos contigo.</p>
              <div className="grid grid-cols-2 gap-3">
                {CANALES.map(c => (
                  <button
                    key={c.id} type="button" onClick={() => set('canal', c.label)}
                    className={`flex flex-col items-center gap-3 px-4 py-6 rounded-2xl border text-sm font-medium transition-all ${
                      form.canal === c.label
                        ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50]'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/30 hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="text-2xl">{c.icon}</span>
                    <span>{c.label}</span>
                    {form.canal === c.label && (
                      <div className="w-5 h-5 rounded-full bg-[#763d50] flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>
              {errors.canal && <p className="text-xs text-red-500 mt-3">{errors.canal}</p>}
            </div>
          )}

          {/* STEP: horario */}
          {step === 'horario' && (
            <div style={{ animation: 'fadeInUp 350ms cubic-bezier(0.16,1,0.3,1) both' }}>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 4 de 4</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿Cuándo te viene bien?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Haremos lo posible por contactarte en ese horario.</p>
              <div className="space-y-2">
                {HORARIOS.map(h => (
                  <button
                    key={h} type="button" onClick={() => set('horario', h)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all ${
                      form.horario === h
                        ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50] font-medium'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40 hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {h}
                      {form.horario === h && (
                        <svg className="w-4 h-4 text-[#763d50] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              {errors.horario && <p className="text-xs text-red-500 mt-3">{errors.horario}</p>}
            </div>
          )}

          {/* Nav buttons */}
          <div className="flex items-center justify-between mt-10">
            {stepIndex > 0 ? (
              <button type="button" onClick={back} className="text-sm text-[#3a3a3a]/40 hover:text-[#3a3a3a] transition-colors">
                ← Atrás
              </button>
            ) : <div />}
            <button
              type="button" onClick={next} disabled={sending}
              className="bg-[#763d50] hover:bg-[#8a4a5e] disabled:opacity-60 text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105 disabled:hover:scale-100"
            >
              {sending ? 'Enviando...' : step === 'horario' ? 'Solicitar contacto →' : 'Siguiente →'}
            </button>
          </div>

          {/* Progress bar */}
          <div className="mt-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-[#3a3a3a]/40">Paso {stepIndex + 1} de {STEPS.length}</span>
              <span className="text-xs text-[#3a3a3a]/40">{progress}%</span>
            </div>
            <div className="w-full h-1 rounded-full bg-[#f0f0f0] overflow-hidden">
              <div className="h-full bg-[#763d50] rounded-full transition-all duration-500" style={{ width: `${progress}%` }} />
            </div>
          </div>

          <p className="text-xs text-center text-[#3a3a3a]/30 mt-14">No compartimos tu información con terceros.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
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
