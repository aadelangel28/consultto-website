'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'


export default function DemoPage() {
  const [step, setStep] = useState<'form' | 'calendly'>('form')
  const [form, setForm] = useState({
    nombre: '',
    empresa: '',
    email: '',
    norma: '',
    empleados: '',
    cuando: '',
    situacion: '',
  })
  const [errors, setErrors] = useState<Record<string, string>>({})

  function validate() {
    const e: Record<string, string> = {}
    if (!form.nombre.trim()) e.nombre = 'Requerido'
    if (!form.empresa.trim()) e.empresa = 'Requerido'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Email válido requerido'
    if (!form.norma) e.norma = 'Requerido'
    if (!form.empleados) e.empleados = 'Requerido'
    if (!form.cuando) e.cuando = 'Requerido'
    return e
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length > 0) {
      setErrors(errs)
      return
    }
    // Guardar datos del lead (no bloqueante — si falla igual pasa)
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

        {/* Logo */}
        <Link href="/" className="inline-block mb-12">
          <Image src="/logo.png" alt="Consultto" width={130} height={30} />
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left — copy */}
          <div className="lg:sticky lg:top-20">
            <p className="text-xs font-bold uppercase tracking-widest text-[#763d50] mb-4">Demo gratuita · 30 minutos</p>
            <h1 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-6">
              Antes de agendar,<br />cuéntanos un poco.
            </h1>
            <p className="text-[#3a3a3a]/60 leading-relaxed mb-10">
              Necesitamos 2 minutos de tu tiempo para entender tu situación. Así la demo será específica para tu industria y norma — no una presentación genérica.
            </p>

            <div className="space-y-5">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#3a3a3a]/70">Te mostramos la plataforma configurada para tu norma específica, no una demo de ventas.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#3a3a3a]/70">Respondemos tus preguntas con alguien que conoce tu sector — no un SDR leyendo un script.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-[#763d50]/10 flex items-center justify-center shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-[#763d50]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-sm text-[#3a3a3a]/70">30 minutos exactos. Respetamos tu tiempo.</p>
              </div>
            </div>

            {/* Warning */}
            <div className="mt-10 p-4 rounded-2xl border border-[#efefef] bg-[#f8f8f8]">
              <p className="text-xs font-semibold text-[#1f2020] mb-2">Esta demo no es para ti si…</p>
              <ul className="space-y-1.5">
                {[
                  'Solo estás explorando sin intención de avanzar pronto',
                  'Esperas que alguien más tome la decisión sin estar presente',
                  'Buscas una cotización sin ver la plataforma',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-[#3a3a3a]/55">
                    <span className="shrink-0 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right — form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <Field label="Nombre completo" error={errors.nombre}>
                <input
                  type="text"
                  placeholder=""
                  value={form.nombre}
                  onChange={e => set('nombre', e.target.value)}
                  className={inputCls(errors.nombre)}
                />
              </Field>
              <Field label="Empresa" error={errors.empresa}>
                <input
                  type="text"
                  placeholder=""
                  value={form.empresa}
                  onChange={e => set('empresa', e.target.value)}
                  className={inputCls(errors.empresa)}
                />
              </Field>
            </div>

            <Field label="Correo corporativo" error={errors.email}>
              <input
                type="email"
                placeholder=""
                value={form.email}
                onChange={e => set('email', e.target.value)}
                className={inputCls(errors.email)}
              />
            </Field>

            <Field label="¿En qué norma quieres certificarte o mantener?" error={errors.norma}>
              <input
                type="text"
                value={form.norma}
                onChange={e => set('norma', e.target.value)}
                className={inputCls(errors.norma)}
              />
            </Field>

            <Field label="¿Cuántos empleados tiene tu empresa?" error={errors.empleados}>
              <input
                type="text"
                value={form.empleados}
                onChange={e => set('empleados', e.target.value)}
                className={inputCls(errors.empleados)}
              />
            </Field>

            <Field label="¿Cuándo quieres certificarte?" error={errors.cuando}>
              <input
                type="text"
                value={form.cuando}
                onChange={e => set('cuando', e.target.value)}
                className={inputCls(errors.cuando)}
              />
            </Field>

            <button
              type="submit"
              className="w-full bg-[#763d50] hover:bg-[#8a4a5e] text-white py-3.5 rounded-full font-semibold transition-all hover:scale-[1.02] text-sm mt-2"
            >
              Continuar y elegir horario →
            </button>

            <p className="text-xs text-center text-[#3a3a3a]/40">
              No compartimos tu información con terceros.
            </p>

          </form>
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
