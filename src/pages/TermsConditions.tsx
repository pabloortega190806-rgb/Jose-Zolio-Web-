import { motion } from 'motion/react';

export default function TermsConditions() {
  return (
    <div className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto text-text">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-serif mb-8 text-primary">Términos y Condiciones</h1>
        <div className="space-y-6 text-secondary font-light leading-relaxed">
          <p>
            Las presentes Condiciones Generales de Contratación rigen la compra de productos a través del sitio web de José Zoilo, con NIF 80055565V y domicilio en Calle Huerta Murcia 42, Monesterio, Badajoz, 06260.
          </p>
          <h2 className="text-2xl font-serif text-white mt-8 mb-4">1. Objeto</h2>
          <p>
            Las presentes condiciones tienen por objeto regular la relación contractual de compra venta nacida entre el prestador y el usuario en el momento en que éste acepta durante el proceso de contratación online la casilla correspondiente.
          </p>
          <h2 className="text-2xl font-serif text-white mt-8 mb-4">2. Pedidos</h2>
          <p>
            El usuario podrá realizar pedidos a través de la página web seleccionando los productos deseados y siguiendo el proceso de compra establecido.
          </p>
          <h2 className="text-2xl font-serif text-white mt-8 mb-4">3. Precios y Pagos</h2>
          <p>
            Los precios de los productos se muestran en euros e incluyen el IVA aplicable. El pago se podrá realizar mediante los métodos indicados en el proceso de compra.
          </p>
          <h2 className="text-2xl font-serif text-white mt-8 mb-4">4. Envíos y Devoluciones</h2>
          <p>
            Los envíos se realizarán a la dirección indicada por el usuario. En caso de producto defectuoso, el usuario tendrá derecho a la devolución o sustitución del mismo.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
