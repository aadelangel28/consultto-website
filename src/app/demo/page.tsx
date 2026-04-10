'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const NORMAS = [
  'ISO 9001', 'ISO 14001', 'ISO 45001', 'ISO 13485',
  'IATF 16949', 'ISO 22000 / FSSC 22000', 'ISO 27001', 'ISO 50001',
  'GMP Farmacéutica', 'Otra',
]

const OBJETIVOS = [
  'Certificarme por primera vez',
  'Renovar o mantener una certificación',
  'Implementar gestión documental',
  'Mejorar mi sistema de gestión actual',
  'Cumplir requisito de cliente o licitación',
]

const EMPLEADOS = ['1 – 10', '11 – 50', '51 – 200', '201 – 500', 'Más de 500']

const CHECKS = [
  'Tengo intención real de certificarme o mejorar mi sistema en el corto plazo.',
  'Estaré presente en la reunión con capacidad de tomar decisiones.',
  'Entiendo que esta es una demo de la plataforma, no una cotización.',
  'Me comprometo a asistir puntual o a cancelar con al menos 24 horas de anticipación.',
]

type Step = 'datos' | 'objetivo' | 'norma' | 'empleados' | 'confirma' | 'done'
const STEPS: Step[] = ['datos', 'objetivo', 'norma', 'empleados', 'confirma']

export default function DemoPage() {
  const [step, setStep] = useState<Step>('datos')
  const [form, setForm] = useState({
    nombre: '', empresa: '', email: '', telefono: '',
    objetivo: '', norma: '', normaOtra: '', empleados: '',
  })
  const [checks, setChecks] = useState([false, false, false, false])
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [checksError, setChecksError] = useState(false)

  const stepIndex = STEPS.indexOf(step)
  const progress = step === 'done' ? 100 : Math.round((stepIndex / STEPS.length) * 100)

  function set(field: string, value: string) {
    setForm(f => ({ ...f, [field]: value }))
    setErrors(e => { const n = { ...e }; delete n[field]; return n })
  }

  function toggleCheck(i: number) {
    setChecks(c => { const n = [...c]; n[i] = !n[i]; return n })
    setChecksError(false)
  }

  function next() {
    const e: Record<string, string> = {}
    if (step === 'datos') {
      if (!form.nombre.trim()) e.nombre = 'Requerido'
      if (!form.empresa.trim()) e.empresa = 'Requerido'
      if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Correo válido requerido'
      if (!form.telefono.trim()) e.telefono = 'Requerido'
    }
    if (step === 'objetivo' && !form.objetivo) e.objetivo = 'Selecciona una opción'
    if (step === 'norma') {
      const normaFinal = form.norma === 'Otra' ? form.normaOtra : form.norma
      if (!normaFinal.trim()) e.norma = 'Requerido'
    }
    if (step === 'empleados' && !form.empleados) e.empleados = 'Selecciona una opción'

    if (step === 'confirma') {
      if (!checks.every(Boolean)) { setChecksError(true); return }
      // Submit
      const normaFinal = form.norma === 'Otra' ? form.normaOtra : form.norma
      fetch('/api/demo-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form, norma: normaFinal }),
      }).catch(() => {})
      setStep('done')
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    if (Object.keys(e).length > 0) { setErrors(e); return }
    const next = STEPS[stepIndex + 1]
    setStep(next)
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
          <div className="w-12 h-12 rounded-full bg-[#763d50]/10 flex items-center justify-center mx-auto mb-6">
            <svg className="w-6 h-6 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="text-2xl font-light text-[#1f2020] mb-3">Listo, {form.nombre.split(' ')[0]}.</h1>
          <p className="text-[#3a3a3a]/55 text-sm leading-relaxed mb-8">
            Ahora elige el día y hora que mejor te funcione. La sesión dura 30 minutos — llega puntual y con tu equipo si es posible.
          </p>
          <button
            onClick={() => {
              window.open('https://calendly.com/alan-consultto/30min', '_blank')
              window.location.href = '/'
            }}
            className="inline-block bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3 rounded-full font-semibold transition-all hover:scale-105 text-sm"
          >
            Elegir fecha y hora →
          </button>
          <p className="text-xs text-[#3a3a3a]/35 mt-5">Recibirás confirmación por correo.</p>
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
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 1 de 5</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-8">¿Con quién hablamos?</h2>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Nombre completo" error={errors.nombre}>
                    <input autoFocus type="text" value={form.nombre} onChange={e => set('nombre', e.target.value)} className={inputCls(errors.nombre)} />
                  </Field>
                  <Field label="Empresa" error={errors.empresa}>
                    <input type="text" value={form.empresa} onChange={e => set('empresa', e.target.value)} className={inputCls(errors.empresa)} />
                  </Field>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <Field label="Correo corporativo" error={errors.email}>
                    <input type="email" value={form.email} onChange={e => set('email', e.target.value)} className={inputCls(errors.email)} />
                  </Field>
                  <Field label="Teléfono" error={errors.telefono}>
                    <input type="tel" value={form.telefono} onChange={e => set('telefono', e.target.value)} className={inputCls(errors.telefono)} />
                  </Field>
                </div>
              </div>
            </div>
          )}

          {/* STEP: objetivo */}
          {step === 'objetivo' && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 2 de 5</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿Qué necesitas resolver?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Selecciona la que mejor describa tu situación.</p>
              <div className="space-y-2">
                {OBJETIVOS.map(o => (
                  <button
                    key={o} type="button" onClick={() => set('objetivo', o)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all ${
                      form.objetivo === o
                        ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50] font-medium'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40 hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {o}
                      {form.objetivo === o && (
                        <svg className="w-4 h-4 text-[#763d50] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              {errors.objetivo && <p className="text-xs text-red-500 mt-3">{errors.objetivo}</p>}
            </div>
          )}

          {/* STEP: norma */}
          {step === 'norma' && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 3 de 5</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿En qué norma?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Selecciona la norma de tu interés.</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {NORMAS.map(n => (
                  <button
                    key={n} type="button" onClick={() => set('norma', n)}
                    className={`px-4 py-2 rounded-full text-sm border transition-all ${
                      form.norma === n
                        ? 'bg-[#763d50] border-[#763d50] text-white font-medium'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40'
                    }`}
                  >
                    {n}
                  </button>
                ))}
              </div>
              {form.norma === 'Otra' && (
                <div className="mt-4">
                  <Field label="¿Cuál?" error={errors.norma}>
                    <input
                      autoFocus type="text" value={form.normaOtra}
                      onChange={e => set('normaOtra', e.target.value)}
                      placeholder="Escribe la norma"
                      className={inputCls(errors.norma)}
                    />
                  </Field>
                </div>
              )}
              {errors.norma && form.norma !== 'Otra' && <p className="text-xs text-red-500 mt-2">{errors.norma}</p>}
            </div>
          )}

          {/* STEP: empleados */}
          {step === 'empleados' && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 4 de 5</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">¿Cuántos empleados tiene tu empresa?</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Esto nos ayuda a preparar la demo correctamente.</p>
              <div className="space-y-2">
                {EMPLEADOS.map(e => (
                  <button
                    key={e} type="button" onClick={() => set('empleados', e)}
                    className={`w-full text-left px-5 py-3.5 rounded-xl border text-sm transition-all ${
                      form.empleados === e
                        ? 'border-[#763d50] bg-[#763d50]/5 text-[#763d50] font-medium'
                        : 'border-[#e8e8e8] text-[#3a3a3a] hover:border-[#763d50]/40 hover:bg-[#f8f8f8]'
                    }`}
                  >
                    <span className="flex items-center justify-between">
                      {e} empleados
                      {form.empleados === e && (
                        <svg className="w-4 h-4 text-[#763d50] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </span>
                  </button>
                ))}
              </div>
              {errors.empleados && <p className="text-xs text-red-500 mt-3">{errors.empleados}</p>}
            </div>
          )}

          {/* STEP: confirma */}
          {step === 'confirma' && (
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Paso 5 de 5</p>
              <h2 className="text-2xl font-light text-[#1f2020] mb-2">Antes de continuar, confirma.</h2>
              <p className="text-sm text-[#3a3a3a]/50 mb-8">Queremos asegurarnos de que la demo sea útil para ambas partes.</p>
              <div className={`rounded-2xl border p-5 space-y-4 ${checksError ? 'border-red-300 bg-red-50' : 'border-[#efefef] bg-[#f8f8f8]'}`}>
                {CHECKS.map((text, i) => (
                  <label key={i} className="flex items-start gap-3 cursor-pointer group" onClick={() => toggleCheck(i)}>
                    <div className={`mt-0.5 w-5 h-5 rounded-md shrink-0 border-2 flex items-center justify-center transition-all ${
                      checks[i] ? 'bg-[#763d50] border-[#763d50]' : 'border-[#c8c8c8] bg-white group-hover:border-[#763d50]/50'
                    }`}>
                      {checks[i] && (
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className="text-sm text-[#3a3a3a]/70 leading-relaxed group-hover:text-[#3a3a3a] transition-colors">{text}</span>
                  </label>
                ))}
              </div>
              {checksError && <p className="text-xs text-red-500 mt-3">Confirma todos los puntos para continuar.</p>}
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
              type="button" onClick={next}
              className="bg-[#763d50] hover:bg-[#8a4a5e] text-white px-8 py-3 rounded-full font-semibold text-sm transition-all hover:scale-105"
            >
              {step === 'confirma' ? 'Continuar y elegir horario →' : 'Siguiente →'}
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
