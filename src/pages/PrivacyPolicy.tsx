import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Política de Privacidad</h1>
        <div className="space-y-6 text-secondary font-light leading-relaxed">
          <p>
            Este documento explica cómo tratas los datos que llegan por WhatsApp o formularios.
          </p>
          
          <div className="space-y-4">
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Responsable del Tratamiento</h3>
              <p>José Zoilo Pecellin.</p>
              <p>NIF: 80055565V</p>
              <p>Dirección: Calle Huerta Murcia 42, Monesterio, Badajoz, 06260</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Finalidad</h3>
              <p>Gestión de consultas, presupuestos para eventos de cortador profesional y pedidos del formato de 100g realizados a través de WhatsApp o email.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Legitimación</h3>
              <p>Consentimiento del usuario al contactar directamente con la empresa.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Destinatarios</h3>
              <p>No se cederán datos a terceros, salvo obligación legal.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Derechos</h3>
              <p>Usted tiene derecho a acceder, rectificar y suprimir sus datos personales escribiendo a zoilocortador@gmail.com.</p>
            </div>
            
            <div>
              <h3 className="text-lg font-serif text-white mb-2">Conservación</h3>
              <p>Los datos se conservarán mientras dure la relación comercial o durante los años necesarios para cumplir con las obligaciones legales.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
