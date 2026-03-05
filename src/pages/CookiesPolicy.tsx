import { motion } from 'motion/react';

export default function CookiesPolicy() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Política de Cookies</h1>
        <div className="space-y-6 text-secondary font-light leading-relaxed">
          <p>
            Este sitio web utiliza cookies técnicas necesarias para el funcionamiento de la página y, en su caso, cookies de análisis de terceros (como Google Analytics) para medir la audiencia.
          </p>
          <p>
            El usuario puede configurar su navegador para aceptar o rechazar la instalación de cookies. No obstante, el titular no se responsabiliza de que la desactivación de las mismas impida el buen funcionamiento del sitio.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
