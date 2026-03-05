import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Star, Award, Clock, Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';
import { useRef } from 'react';

export default function Home() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <div className="bg-bg text-text overflow-hidden">
      {/* Hero Section */}
      <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/60 z-10"></div>
          <motion.img 
            style={{ y, scale: 1.1 }}
            src="https://i.postimg.cc/4NLtXpPY/image.png" 
            alt="Corte de Jamón" 
            className="w-full h-full object-cover"
          />
        </div>
        
        <motion.div 
          style={{ opacity }}
          className="relative z-20 flex flex-col items-center justify-center text-center px-6"
        >
          {/* 3D Rotating Logo */}
          <div className="relative w-32 h-32 md:w-40 md:h-40 perspective-1000 mb-8">
            <motion.div
              animate={{ rotateY: 360 }}
              transition={{ 
                duration: 15, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="w-full h-full preserve-3d relative"
            >
              {/* Volumetric Layers */}
              {Array.from({ length: 4 }).map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 flex items-center justify-center backface-visible rounded-full overflow-hidden"
                  style={{ 
                    transform: `translateZ(${i * 1}px)`,
                    opacity: i === 0 || i === 3 ? 1 : 0.8,
                    filter: i === 0 || i === 3 ? 'none' : 'brightness(0.7)'
                  }}
                >
                   <img 
                    src="https://i.postimg.cc/kXjSRdmn/image.png" 
                    alt="José Zoilo Logo" 
                    className="w-full h-full object-cover scale-105"
                  />
                </div>
              ))}
              
              <div 
                className="absolute inset-0 flex items-center justify-center backface-visible rounded-full overflow-hidden"
                style={{ transform: 'translateZ(-1px) rotateY(180deg)' }}
              >
                 <img 
                  src="https://i.postimg.cc/kXjSRdmn/image.png" 
                  alt="José Zoilo Logo" 
                  className="w-full h-full object-cover scale-105"
                  style={{ transform: 'scaleX(-1)' }}
                />
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-4"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight mb-6">
              José Zoilo
            </h1>
            <p className="text-primary uppercase tracking-[0.3em] text-sm md:text-base font-medium">
              Cortador de Jamón Profesional
            </p>
          </motion.div>
        </motion.div>


      </section>

      {/* About Section - "The Silent Poetry" */}
      <section id="sobre-mi" className="py-32 px-6 md:px-12 bg-bg relative scroll-mt-24">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Maestría & Tradición</span>
            <h2 className="text-4xl md:text-6xl font-serif leading-[1.1] text-text">
              El arte del <br/>
              <span className="italic text-primary inline-block mt-10">Cortador de Jamón Profesional</span>
            </h2>
            <p className="text-secondary font-light leading-relaxed text-lg">
              Cortar un Jamón Ibérico de Bellota es ejecutar un ritual de respeto. Cada loncha es un lienzo translúcido que revela el marmoleado intrincado y la esencia de la dehesa. No es simplemente cortar; es desvelar un sabor que ha madurado durante años.
            </p>
            <div className="grid grid-cols-2 gap-8 pt-4">
              <div>
                <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Precisión</h4>
                <p className="text-xs text-secondary leading-relaxed">Lonchas tan finas que se disuelven al contacto, liberando pura intensidad oleica.</p>
              </div>
              <div>
                <h4 className="text-primary text-sm font-bold uppercase tracking-widest mb-2">Temperatura</h4>
                <p className="text-xs text-secondary leading-relaxed">Manejado con cuidado quirúrgico para preservar las grasas delicadas.</p>
              </div>
            </div>
          </div>
          <div className="relative">
             <div className="aspect-[3/4] overflow-hidden transition-all duration-1000">
              <img 
                src="https://i.postimg.cc/MpWXhHVD/image.png" 
                alt="Arte del Corte" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 border border-primary/30 bg-bg p-6 max-w-[200px]">
              <p className="font-serif italic text-primary text-xl">"Un legado de origen."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 px-6 md:px-12 bg-surface scroll-mt-24">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Experiencias</span>
            <h2 className="text-4xl md:text-5xl font-serif text-text">Nuestros Servicios</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
            {[
              {
                title: "Eventos y Bodas",
                subtitle: "Corte en Vivo",
                desc: "Eleve su celebración con la presencia de un maestro cortador. Un espectáculo visual y gastronómico que cautiva a los invitados.",
                icon: <Award className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
              },
              {
                title: "Pack Gourmet",
                subtitle: "Sobres de 100g",
                desc: "La excelencia del ibérico, cortado a cuchillo y envasado al vacío para disfrutar en casa con la máxima frescura.",
                icon: <Star className="w-8 h-8 text-primary mb-6" strokeWidth={1} />
              }
            ].map((service, index) => (
              <div key={index} className="bg-bg p-12 hover:bg-white/5 transition-colors duration-500 group">
                {service.icon}
                <h3 className="text-2xl font-serif text-text mb-2">{service.title}</h3>
                <span className="text-xs uppercase tracking-widest text-primary block mb-6">{service.subtitle}</span>
                <p className="text-secondary font-light leading-relaxed text-sm">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Star Product - Pack Gourmet */}
      <section className="py-32 px-6 md:px-12 bg-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto grid md:grid-cols-[1.2fr_1fr] gap-12 items-center relative z-10">
          <div className="order-2 md:order-1 relative group flex justify-center">
            <img 
              src="https://i.postimg.cc/Ls5wXcrg/Diseno-sin-titulo-(2).png" 
              alt="Pack Gourmet 100g" 
              className="relative z-10 w-full md:w-[120%] h-auto object-cover transition-all duration-700 shadow-2xl rounded-lg transform md:scale-110"
              style={{
                maskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(circle at center, black 50%, transparent 100%)'
              }}
            />
          </div>
          <div className="order-1 md:order-2 space-y-8">
            <div className="inline-block border border-primary px-4 py-1 rounded-full">
              <span className="text-primary text-xs font-bold uppercase tracking-widest">Producto Estrella</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-serif text-text">Pack Gourmet <br/><span className="text-primary italic">100g</span></h2>
            <p className="text-secondary text-lg font-light leading-relaxed">
              La esencia pura del jamón, lista para consumir. Cortado a mano en el momento óptimo de curación y envasado para preservar cada matiz de sabor.
            </p>
            
            <div className="bg-surface p-8 border border-white/5 space-y-4">
              <h4 className="font-serif text-xl text-white">Ritual de Consumo</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 text-sm text-secondary">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <span>Abrir el sobre <strong>20 minutos antes</strong> de su degustación para oxigenar.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-secondary">
                  <div className="w-5 h-5 flex items-center justify-center text-primary shrink-0 font-serif font-bold">°C</div>
                  <span>Servir a una temperatura ideal entre <strong>0°C y 7°C</strong>.</span>
                </li>
              </ul>
            </div>
            
            <button 
              onClick={() => document.getElementById('contacto')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-primary text-bg px-8 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white transition-colors duration-300"
            >
              Solicitar Pedido
            </button>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section id="galeria" className="py-24 bg-bg scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6 md:px-12 mb-12 flex justify-between items-end">
          <div>
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-2">Galería</span>
            <h2 className="text-4xl font-serif text-text">El Arte del Corte</h2>
          </div>
          <a href="https://www.instagram.com/zoilopecellin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="hidden md:flex items-center gap-2 text-xs uppercase tracking-widest text-secondary hover:text-primary transition-colors">
            <Instagram size={16} />
            Síguenos en Instagram
          </a>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            "https://i.postimg.cc/6pw8BF1P/image.png",
            "https://i.postimg.cc/yNKcrvR0/image.png",
            "https://i.postimg.cc/4Nw5tCH1/image.png",
            "https://i.postimg.cc/TPDFQHf0/image.png"
          ].map((img, i) => (
            <div key={i} className={`aspect-[4/5] overflow-hidden group relative ${i === 0 ? 'bg-black' : ''}`}>
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 duration-500"></div>
              <img 
                src={img} 
                alt="Gallery" 
                className={`w-full h-full transition-transform duration-700 group-hover:scale-110 ${i === 0 ? 'object-contain p-4' : 'object-cover'}`} 
              />
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-32 px-6 md:px-12 bg-surface relative scroll-mt-24">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em]">Contacto</span>
            <h2 className="text-4xl md:text-6xl font-serif text-text">Reserve una Experiencia</h2>
            <p className="text-secondary font-light max-w-xl mx-auto">
              Estamos a su disposición para eventos privados, bodas y pedidos exclusivos.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6">
            <a 
              href="https://wa.me/34696993822" 
              className="flex items-center justify-center gap-3 border border-white/10 bg-bg px-8 py-4 text-white hover:border-primary hover:text-primary transition-all group"
            >
              <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
              <span className="uppercase tracking-widest text-xs font-bold">WhatsApp</span>
            </a>
            <a 
              href="mailto:zoilocortador@gmail.com" 
              className="flex items-center justify-center gap-3 border border-white/10 bg-bg px-8 py-4 text-white hover:border-primary hover:text-primary transition-all group"
            >
              <Mail size={20} className="group-hover:scale-110 transition-transform" />
              <span className="uppercase tracking-widest text-xs font-bold">Email</span>
            </a>
          </div>

          <form 
            action="mailto:zoilocortador@gmail.com" 
            method="post" 
            enctype="text/plain"
            className="space-y-6 text-left bg-bg p-8 md:p-12 border border-white/5 mt-12"
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary">Nombre</label>
                <input type="text" name="nombre" required className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 text-text transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-secondary">Teléfono</label>
                <input type="tel" name="telefono" required className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 text-text transition-colors" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-secondary">Mensaje</label>
              <textarea name="mensaje" rows={4} required className="w-full bg-transparent border-b border-white/10 focus:border-primary outline-none py-3 text-text transition-colors resize-none"></textarea>
            </div>
            <div className="pt-4">
              <button type="submit" className="w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-primary hover:text-white transition-colors duration-300">
                Enviar Solicitud
              </button>
            </div>
          </form>
          
          <div className="pt-12 text-secondary text-sm font-serif italic">
            "La calidad no es un acto, es un hábito."
          </div>
        </div>
      </section>
    </div>
  );
}
