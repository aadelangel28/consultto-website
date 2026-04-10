'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const CHECKS = [
  'Tengo intención real de certificarme o mejorar mi sistema de gestión en el corto plazo.',
  'Estaré presente en la reunión con capacidad de tomar decisiones.',
  'Entiendo que esta es una demo de la plataforma, no una cotización.',
  'Me comprometo a asistir puntual o a cancelar con al menos 24 horas de anticipación.',
]

export default function DemoPage() {
  const [step, setStep] = useState<'form' | 'calendly'>('form')
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    objetivo: '',
    norma: '',
    empleados: '',
    cuando: '',
  })
  const [checks, setChecks] = useState([false, false, false, false])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [checksError, setChecksError] = useState(false)

  function validate() {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.empresa.trim()) e.empresa = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email válido requerido'
    if (!form.objetivo.trim()) e.objetivo = 'Requerido'
    if (!form.norma.trim()) e.norma = 'Requerido'
    if (!form.empleados.trim()) e.empleados = 'Requerido'
    if (!form.cuando.trim()) e.cuando = 'Requerido'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    const allChecked = checks.every(Boolean)
    if (!allChecked) setChecksError(true)
    if (Object.keys(errs).length > 0 || !allChecked) {
      setErrors(errs)
      return
    }
    fetch('/api/demo-submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    }).catch(() => {})
    setStep('calendly')
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  function toggleCheck(i: number) {
    setChecks(c => {
      const next = [...c]
      next[i] = !next[i]
      return next
    })
    setChecksError(false)
  }

  if (step === 'calendly') {
    return (
      <main className="min-h-screen bg-white flex flex-col items-center justify-center px-6 py-20">
        <div className="max-w-xl w-full text-center">
          <Link href="/">
            <Image src="/logo.png" alt="Consultto" width={130} height={30} className="mx-auto mb-10" />
          </Link>
          <div className="w-10 h-10 rounded-full bg-[#763d50]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-5 h-5 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-[#1f2020] mb-3">Listo, {form.nombre.split(' ')[0]}.</h1>
          <p className="text-[#3a3a3a]/60 mb-8 leading-relaxed">
            Ahora elige el día y hora que mejor te funcione. La sesión dura 30 minutos — llega puntual y con tu equipo de calidad si es posible.
          </p>
          <a
            href="https://calendly.com/alan-consultto/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm"
          >
            Elegir fecha y hora →
          </a>
          <p className="text-xs text-[#3a3a3a]/40 mt-6">Recibirás una confirmación por correo con el link de la reunión.</p>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14 md:py-20">

        <Link href="/" className="inline-block mb-12">
          <Image src="/logo.png" alt="Consultto" width={130} height={30} />
        </Link>

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-3">Demo gratuita · 30 minutos</p>
          <h1 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight">
            Antes de agendar,<br />cuéntanos un poco.
          </h1>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

            {/* Left — campos */}
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <Field label="Nombre completo" error={errors.nombre}>
                  <input type="text" value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls(errors.nombre)} />
                </Field>
                <Field label="Empresa" error={errors.empresa}>
                  <input type="text" value={form.empresa} onChange={e => set('empresa', e.target.value)} className={inputCls(errors.empresa)} />
                </Field>
              </div>

              <Field label="Correo corporativo" error={errors.email}>
                <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls(errors.email)} />
              </Field>

              <Field label="¿Qué necesitas resolver?" error={errors.objetivo}>
                <input
                  type="text"
                  placeholder="Ej. certificarme en ISO 9001, gestión documental, mantener certificación…"
                  value={form.objetivo}
                  onChange={e => set('objetivo', e.target.value)}
                  className={inputCls(errors.objetivo)}
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="¿En qué norma?" error={errors.norma}>
                  <input type="text" value={form.norma} onChange={e => set('norma', e.target.value)} className={inputCls(errors.norma)} />
                </Field>
                <Field label="¿Cuántos empleados?" error={errors.empleados}>
                  <input type="text" value={form.empleados} onChange={e => set('empleados', e.target.value)} className={inputCls(errors.empleados)} />
                </Field>
              </div>

              <Field label="¿Cuándo quieres lograrlo?" error={errors.cuando}>
                <input type="text" value={form.cuando} onChange={e => set('cuando', e.target.value)} className={inputCls(errors.cuando)} />
              </Field>
            </div>

            {/* Right — checkboxes + botón */}
            <div className="flex flex-col gap-5">
              <div className={`rounded-2xl border p-5 space-y-3 ${checksError ? 'border-red-400 bg-red-50' : 'border-[#efefef] bg-[#f8f8f8]'}`}>
                <p className="text-xs font-semibold text-[#1f2020] mb-1">Antes de continuar, confirma:</p>
                {CHECKS.map((text, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group">
                    <div
                      onClick={() => toggleCheck(i)}
                      className={`mt-0.5 w-4 h-4 rounded shrink-0 border-2 flex items-center justify-center transition-colors ${
                        checks[i] ? 'bg-[#763d50] border-[#763d50]' : 'border-[#c0c0c0] bg-white'
                      }`}
                    >
                      {checks[i] && (
                        <svg className="w-2.5 h-2.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-xs text-[#3a3a3a]/70 leading-relaxed group-hover:text-[#3a3a3a] transition-colors" onClick={() => toggleCheck(i)}>
                      {text}
                    </span>
                  </label>
                ))}
                {checksError && <p className="text-xs text-red-500 pt-1">Debes confirmar todos los puntos para continuar.</p>}
              </div>

              <button
                type="submit"
                className="w-full bg-[#763d50] hover:bg-[#8a4a5e] text-white py-3.5 rounded-full font-semibold transition-all hover:scale-[1.02] text-sm"
              >
                Continuar y elegir horario →
              </button>

              <p className="text-xs text-center text-[#3a3a3a]/40">No compartimos tu información con terceros.</p>
            </div>

          </div>
        </form>
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
