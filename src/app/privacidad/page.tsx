import Link from 'next/link'

export const metadata = {
  title: 'Aviso de privacidad | Consultto',
  description: 'Aviso de privacidad y política de protección de datos personales de Consultto.',
}

export default function PrivacidadPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">

        <Link href="/" className="text-xs font-semibold uppercase tracking-widest text-[#763d50] hover:opacity-70 transition-opacity mb-10 inline-block">
          ← Volver al inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-light text-[#1f2020] leading-tight mb-3">
          Aviso de privacidad
        </h1>
        <p className="text-sm text-[#3a3a3a]/50 mb-12">Última actualización: abril 2025</p>

        <div className="prose prose-sm max-w-none text-[#3a3a3a]/75 leading-relaxed space-y-8">

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">1. Responsable del tratamiento</h2>
            <p>Consultto (en adelante, "Consultto" o "nosotros") es el responsable del tratamiento de los datos personales que usted nos proporcione. Para cualquier consulta relacionada con el tratamiento de sus datos, puede contactarnos en: <span className="text-[#763d50]">privacidad@consultto.com</span></p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">2. Datos personales que recopilamos</h2>
            <p>En el ejercicio de nuestras actividades podemos recopilar los siguientes datos personales:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><strong className="font-semibold text-[#1f2020]">Datos de identificación:</strong> nombre, apellidos, cargo y empresa.</li>
              <li><strong className="font-semibold text-[#1f2020]">Datos de contacto:</strong> correo electrónico, número de teléfono.</li>
              <li><strong className="font-semibold text-[#1f2020]">Datos de uso:</strong> información sobre cómo utiliza la Plataforma, incluyendo páginas visitadas, funcionalidades utilizadas y preferencias.</li>
              <li><strong className="font-semibold text-[#1f2020]">Datos técnicos:</strong> dirección IP, tipo de navegador, sistema operativo y datos de cookies.</li>
              <li><strong className="font-semibold text-[#1f2020]">Datos de facturación:</strong> información necesaria para procesar pagos (no almacenamos datos de tarjetas de crédito).</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">3. Finalidades del tratamiento</h2>
            <p>Sus datos personales son tratados para las siguientes finalidades:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Proveer y gestionar el acceso a la Plataforma y sus funcionalidades.</li>
              <li>Gestionar su cuenta de usuario y autenticar su identidad.</li>
              <li>Procesar pagos y emitir comprobantes fiscales cuando aplique.</li>
              <li>Brindar soporte técnico y atención al cliente.</li>
              <li>Enviar comunicaciones relacionadas con el servicio, actualizaciones y notificaciones relevantes.</li>
              <li>Mejorar la Plataforma mediante el análisis de patrones de uso (datos anonimizados o agregados).</li>
              <li>Cumplir con obligaciones legales y regulatorias aplicables.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">4. Base legal del tratamiento</h2>
            <p>El tratamiento de sus datos personales se sustenta en las siguientes bases legales:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><strong className="font-semibold text-[#1f2020]">Ejecución de un contrato:</strong> cuando el tratamiento es necesario para proveer los servicios contratados.</li>
              <li><strong className="font-semibold text-[#1f2020]">Consentimiento:</strong> cuando usted nos ha dado su consentimiento expreso para una finalidad específica.</li>
              <li><strong className="font-semibold text-[#1f2020]">Interés legítimo:</strong> cuando el tratamiento es necesario para nuestros intereses legítimos, siempre que no prevalezcan sus derechos y libertades.</li>
              <li><strong className="font-semibold text-[#1f2020]">Obligación legal:</strong> cuando el tratamiento es necesario para cumplir con una obligación legal aplicable.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">5. Transferencia de datos a terceros</h2>
            <p>Consultto no vende ni arrienda sus datos personales a terceros. Podemos compartir sus datos con:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li>Proveedores de servicios tecnológicos que nos ayudan a operar la Plataforma (alojamiento, procesamiento de pagos, análisis), bajo acuerdos de confidencialidad y protección de datos.</li>
              <li>Autoridades competentes cuando así lo exija la ley o una orden judicial.</li>
            </ul>
            <p className="mt-3">En todos los casos, exigimos a los terceros que traten sus datos con el mismo nivel de protección que nosotros.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">6. Cookies y tecnologías similares</h2>
            <p>La Plataforma utiliza cookies y tecnologías similares para mejorar su experiencia, analizar el uso del sitio y personalizar el contenido. Puede configurar su navegador para rechazar cookies, aunque esto puede afectar el funcionamiento de algunas funcionalidades.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">7. Retención de datos</h2>
            <p>Conservamos sus datos personales durante el tiempo que sea necesario para cumplir con las finalidades descritas en este aviso, o durante el período que exija la legislación aplicable. Una vez concluida la relación contractual, los datos serán eliminados o anonimizados salvo que exista una obligación legal de conservarlos.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">8. Sus derechos</h2>
            <p>De conformidad con la legislación aplicable en materia de protección de datos, usted tiene derecho a:</p>
            <ul className="list-disc pl-5 mt-3 space-y-1.5">
              <li><strong className="font-semibold text-[#1f2020]">Acceso:</strong> conocer qué datos personales tenemos sobre usted.</li>
              <li><strong className="font-semibold text-[#1f2020]">Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
              <li><strong className="font-semibold text-[#1f2020]">Cancelación:</strong> solicitar la eliminación de sus datos cuando ya no sean necesarios.</li>
              <li><strong className="font-semibold text-[#1f2020]">Oposición:</strong> oponerse al tratamiento de sus datos para determinadas finalidades.</li>
              <li><strong className="font-semibold text-[#1f2020]">Portabilidad:</strong> recibir sus datos en un formato estructurado y de uso común.</li>
              <li><strong className="font-semibold text-[#1f2020]">Revocación del consentimiento:</strong> retirar su consentimiento en cualquier momento, sin que ello afecte la licitud del tratamiento previo.</li>
            </ul>
            <p className="mt-3">Para ejercer cualquiera de estos derechos, puede enviarnos una solicitud a <span className="text-[#763d50]">privacidad@consultto.com</span>. Responderemos en un plazo máximo de 20 días hábiles.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">9. Seguridad de los datos</h2>
            <p>Implementamos medidas técnicas y organizativas adecuadas para proteger sus datos personales contra el acceso no autorizado, la alteración, divulgación o destrucción. Sin embargo, ningún sistema de transmisión o almacenamiento de datos es completamente seguro, por lo que no podemos garantizar la seguridad absoluta de su información.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">10. Cambios a este aviso</h2>
            <p>Podemos actualizar este Aviso de privacidad periódicamente. Cuando realicemos cambios significativos, se lo notificaremos a través de la Plataforma o por correo electrónico. Le recomendamos revisar este aviso de forma regular.</p>
          </section>

          <section>
            <h2 className="text-base font-semibold text-[#1f2020] mb-3">11. Contacto</h2>
            <p>Si tiene alguna pregunta o inquietud sobre el tratamiento de sus datos personales, puede contactarnos en: <span className="text-[#763d50]">privacidad@consultto.com</span></p>
          </section>

        </div>
      </div>
    </main>
  )
}
