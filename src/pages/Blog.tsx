import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Evento especial de corte",
    date: "27 Mayo 2026",
    summary: "Un evento increíble donde el arte del corte fue el verdadero protagonista. Gracias a todos los asistentes por hacerlo posible.",
    media: [
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779876657/6c635cc3-54a1-429c-aa45-fd0746e4789a_nqjilj.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779876665/4f41659d-5d66-42ab-ba18-04e7ea358c8c_tgvsl5.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/daom5jnck/video/upload/v1779876346/WhatsApp_Video_2026-05-24_at_11.50.10_hnahow.mp4' }
    ],
  }
];

export default function Blog() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: string; src: string } | null>(null);

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
            <span className="text-primary text-xs font-bold uppercase tracking-[0.2em] block mb-4">Crónica de Eventos</span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-6 leading-tight">
              Nuestro <span className="text-primary italic">Blog</span>
            </h1>
            <div className="w-24 h-px bg-primary/50 mx-auto"></div>
          </motion.div>
        </div>
      </div>

      <div className="px-6 md:px-12 max-w-5xl mx-auto pb-20">
        {blogPosts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="bg-white/5 border border-white/10 p-8 md:p-16 mb-12 hover:border-primary/30 transition-colors duration-500"
          >
            <span className="text-xs uppercase tracking-widest text-primary block mb-4">{post.date}</span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">{post.title}</h2>
            <p className="text-secondary text-lg font-light leading-relaxed mb-12 max-w-2xl">
              {post.summary}
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {post.media.map((item, idx) => (
                <motion.div 
                  key={idx} 
                  className={`overflow-hidden rounded-sm cursor-pointer ${idx === 2 ? 'md:col-span-2' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.4 }}
                  onClick={() => setSelectedMedia(item)}
                >
                  {item.type === 'image' ? (
                    <img 
                      src={item.src} 
                      alt={post.title} 
                      className="w-full h-80 object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" 
                    />
                  ) : (
                    <div className="relative w-full h-80 bg-black/20 flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity duration-500">
                      <video src={item.src} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-sm border border-primary flex items-center justify-center text-primary">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[16px] border-l-primary border-b-[8px] border-b-transparent"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setSelectedMedia(null)}
          >
            <button className="absolute top-6 right-6 text-white p-2 hover:text-primary transition-colors">
              <X size={36} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === 'image' ? (
                <img src={selectedMedia.src} className="w-full h-auto max-h-[80vh] object-contain" />
              ) : (
                <video src={selectedMedia.src} controls autoPlay className="w-full h-auto max-h-[80vh]" />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
