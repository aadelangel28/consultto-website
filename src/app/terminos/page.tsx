import Link from 'next/link'

export const metadata = {
  title: 'Términos y condiciones | Consultto',
  description: 'Términos y condiciones de uso de la plataforma Consultto.',
}

export default function TerminosPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-[#763d50] hover:opacity-70 transition-opacity mb-10 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-3">
          Términos y condiciones
        </h1>
        <p className="text-sm text-[#3a3a3a]/50 mb-12">Última actualización: abril 2025</p>

        <div className="prose prose-sm max-w-none text-[#3a3a3a]/75 leading-relaxed space-y-8">

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">1. Aceptación de los términos</h2>
            <p>Al acceder o utilizar la plataforma Consultto (en adelante, "la Plataforma"), usted acepta quedar vinculado por los presentes Términos y condiciones. Si no está de acuerdo con alguna de las condiciones aquí establecidas, le pedimos que no utilice nuestros servicios.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">2. Descripción del servicio</h2>
            <p>Consultto es una plataforma de software orientada a la implementación, gestión y mantenimiento de sistemas de gestión basados en normas internacionales ISO. Los servicios incluyen, entre otros, gestión documental, seguimiento de auditorías, control de no conformidades, indicadores de desempeño y acompañamiento con Agente IA especializado.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">3. Registro y cuenta de usuario</h2>
            <p>Para acceder a las funcionalidades de la Plataforma, el usuario deberá crear una cuenta proporcionando información veraz, completa y actualizada. El usuario es responsable de mantener la confidencialidad de sus credenciales de acceso y de todas las actividades que se realicen bajo su cuenta.</p>
            <p className="mt-3">Consultto se reserva el derecho de suspender o cancelar cuentas que incumplan los presentes términos, sin previo aviso y sin responsabilidad alguna.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">4. Uso aceptable</h2>
            <p>El usuario se compromete a utilizar la Plataforma únicamente con fines lícitos y de conformidad con la legislación aplicable. Queda expresamente prohibido:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Utilizar la Plataforma para actividades fraudulentas, ilegales o que puedan causar daño a terceros.</li>
              <li>Intentar acceder sin autorización a sistemas, datos o cuentas de otros usuarios.</li>
              <li>Reproducir, distribuir o comercializar el contenido de la Plataforma sin autorización expresa por escrito de Consultto.</li>
              <li>Introducir virus, malware o cualquier otro código malicioso en la Plataforma.</li>
              <li>Realizar ingeniería inversa o intentar extraer el código fuente de la Plataforma.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">5. Planes y pagos</h2>
            <p>El acceso a determinadas funcionalidades de la Plataforma está sujeto al pago de una suscripción. Los precios, condiciones y características de cada plan están disponibles en la página de precios y pueden estar sujetos a cambios con previo aviso al usuario.</p>
            <p className="mt-3">Los pagos son procesados por proveedores de servicios de pago terceros. Consultto no almacena datos de tarjetas de crédito ni información financiera sensible del usuario.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">6. Propiedad intelectual</h2>
            <p>Todo el contenido de la Plataforma —incluyendo, sin limitación, textos, gráficos, logotipos, iconos, imágenes, software y diseño— es propiedad de Consultto o de sus licenciantes y está protegido por las leyes de propiedad intelectual aplicables. Ninguna disposición de los presentes términos transfiere al usuario ningún derecho sobre dicho contenido.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">7. Limitación de responsabilidad</h2>
            <p>La Plataforma se proporciona "tal cual" y "según disponibilidad", sin garantías de ningún tipo, ya sean expresas o implícitas. Consultto no garantiza que la Plataforma esté libre de errores, interrupciones o vulnerabilidades de seguridad.</p>
            <p className="mt-3">En ningún caso Consultto será responsable por daños indirectos, incidentales, especiales, consecuentes o punitivos derivados del uso o la imposibilidad de uso de la Plataforma.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">8. Modificaciones</h2>
            <p>Consultto se reserva el derecho de modificar los presentes Términos y condiciones en cualquier momento. Las modificaciones entrarán en vigor en el momento de su publicación en la Plataforma. El uso continuado de la Plataforma tras la publicación de cambios constituye la aceptación de los nuevos términos.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">9. Ley aplicable y jurisdicción</h2>
            <p>Los presentes Términos y condiciones se rigen por las leyes aplicables en México. Cualquier controversia derivada de su interpretación o aplicación será sometida a los tribunales competentes de la Ciudad de México, con renuncia expresa a cualquier otro fuero que pudiera corresponder.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">10. Contacto</h2>
            <p>Para cualquier consulta relacionada con estos términos, puede contactarnos en: <span className="text-[#763d50]">legal@consultto.com</span></p>
          </section>

        </div>
      </div>
    </main>
  )
}
