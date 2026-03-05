import { motion } from 'motion/react';

export default function LegalNotice() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Aviso Legal</h1>
        <div className="space-y-6 text-secondary font-light leading-relaxed">
          <p>
            En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico (LSSI-CE), se exponen los siguientes datos identificativos del titular de este sitio web:
          </p>
          
          <div className="space-y-2">
            <p><strong className="text-white">Titular:</strong> José Zoilo Pecellin.</p>
            <p><strong className="text-white">NIF/CIF:</strong> 80055565V.</p>
            <p><strong className="text-white">Domicilio:</strong> Calle Huerta Murcia 42, Monesterio, Badajoz, 06260.</p>
            <p><strong className="text-white">Email de contacto:</strong> zoilocortador@gmail.com.</p>
            <p><strong className="text-white">Teléfono:</strong> +34 696 993 822.</p>
          </div>

          <h2 className="text-2xl font-serif text-white mt-8 mb-4">Propiedad Intelectual</h2>
          <p>
            El diseño, logotipos y fotografías (incluyendo las relativas a José Zoilo y su servicio de cortador profesional) están protegidos por derechos de propiedad intelectual. Queda prohibida su reproducción sin consentimiento.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
