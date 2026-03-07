import { motion } from 'motion/react';
import { ShoppingBag, ArrowRight } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Lomo de Bellota 100% Ibérico",
    description: "La nobleza del ibérico. Disponible en pieza entera para regalar distinción, o loncheado para disfrutar de la inmediatez de su sabor.",
    image: "https://i.postimg.cc/sgF8D44Z/image.png",
    price: "Consultar",
    formats: ["Pieza entera", "Loncheado"]
  },
  {
    id: 2,
    name: "Chorizo Ibérico de Bellota",
    description: "Tradición y carácter. Pieza entera para los amantes del corte clásico, o loncheado para un aperitivo gourmet instantáneo.",
    image: "https://i.postimg.cc/1zbVL4Qw/image.png",
    price: "Consultar",
    formats: ["Pieza entera", "Loncheado"]
  },
  {
    id: 3,
    name: "Salchichón Ibérico de Bellota",
    description: "Equilibrio y aroma. La pieza entera preserva su evolución en bodega; el formato loncheado ofrece la comodidad sin renunciar a la excelencia.",
    image: "https://i.postimg.cc/K8kZCfvz/image.png",
    price: "Consultar",
    formats: ["Pieza entera", "Loncheado"]
  },
  {
    id: 4,
    name: "Queso Curado de Oveja",
    description: "Intensidad y textura. Piezas enteras para una conservación prolongada o loncheado listo para servir en su mesa.",
    image: "https://i.postimg.cc/Prfbbpf4/image.png",
    price: "Consultar",
    formats: ["Pieza entera", "Loncheado"]
  },
  {
    id: 5,
    name: "Jamón de Bellota 100% Ibérico",
    description: "La joya de la corona. Procedente de cerdos criados en libertad y alimentados exclusivamente con bellotas.",
    image: "https://i.postimg.cc/6pw8BF1P/image.png",
    price: "Consultar",
    formats: ["Pieza entera", "Loncheado a cuchillo"]
  },
  {
    id: 6,
    name: "Servicio de Corte Profesional",
    description: "Servicio exclusivo de corte a cuchillo para eventos, bodas y celebraciones.",
    image: "https://i.postimg.cc/TPDFQHf0/image.png",
    price: "Desde 150€",
    formats: ["Eventos", "Bodas"]
  }
];

export default function Catalogue() {
  return (
    <div className="bg-bg min-h-screen pt-28 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-20">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Alta Gastronomía</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Nuestra <span className="text-primary italic">Selección</span>
            </h1>
            <div className="w-24 h-px bg-primary/50 mx-auto"></div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative w-full max-w-5xl mb-12"
          >
            <div className="relative z-10 overflow-hidden rounded-sm">
              <img 
                src="https://i.postimg.cc/h4d2FRR3/image.png" 
                alt="Catálogo Portada" 
                className="w-full h-auto shadow-2xl"
                referrerPolicy="no-referrer"
              />
              {/* Subtle gradient only at the very bottom to blend slightly */}
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-40"></div>
            </div>
            {/* Decorative background element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-primary/5 blur-[100px] -z-10 rounded-full" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-secondary text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
          >
            Descubra nuestra exclusiva selección de productos ibéricos. Calidad garantizada y el mejor servicio de corte, directamente desde la dehesa a su mesa.
          </motion.p>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-7xl mx-auto text-text pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group bg-white/5 border border-white/10 overflow-hidden hover:border-primary/50 transition-all duration-300"
          >
            <div className="aspect-[4/3] overflow-hidden relative">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-300" />
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-serif text-white mb-3 group-hover:text-primary transition-colors">{product.name}</h3>
              <p className="text-secondary text-sm font-light leading-relaxed mb-4 line-clamp-3">
                {product.description}
              </p>
              
              {product.formats && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {product.formats.map((format, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider border border-white/20 px-2 py-1 text-secondary rounded-sm">
                      {format}
                    </span>
                  ))}
                </div>
              )}
              
              <div className="flex items-center justify-between mt-auto">
                <span className="text-white font-medium">{product.price}</span>
                <a 
                  href={`https://wa.me/34696993822?text=Hola, estoy interesado en: ${product.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs uppercase tracking-widest text-primary hover:text-white transition-colors font-bold"
                >
                  Solicitar <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-20 text-center bg-white/5 p-12 border border-white/10"
      >
        <ShoppingBag className="w-12 h-12 text-primary mx-auto mb-6" />
        <h3 className="text-2xl font-serif text-white mb-4">¿Busca algo específico?</h3>
        <p className="text-secondary mb-8 max-w-xl mx-auto font-light">
          Realizamos encargos personalizados y preparamos lotes especiales para empresas y eventos.
        </p>
        <a 
          href="https://wa.me/34696993822"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-bg px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300"
        >
          Contactar Personalmente
        </a>
      </motion.div>
      </div>
    </div>
  );
}
