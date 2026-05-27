import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: "Evento especial de corte",
    date: "24 Mayo 2026",
    summary: "Un evento increíble donde el arte del corte fue el verdadero protagonista. Gracias a todos los asistentes por hacerlo posible.",
    media: [
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779876657/6c635cc3-54a1-429c-aa45-fd0746e4789a_nqjilj.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779876665/4f41659d-5d66-42ab-ba18-04e7ea358c8c_tgvsl5.jpg' },
      { type: 'video', src: 'https://res.cloudinary.com/daom5jnck/video/upload/v1779876346/WhatsApp_Video_2026-05-24_at_11.50.10_hnahow.mp4' }
    ],
  },
  {
    id: 2,
    title: "Comunión especial",
    date: "9 Mayo 2026",
    summary: "Una celebración familiar inolvidable donde el arte del corte de jamón brilló con luz propia.",
    media: [
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779880190/e9697ab0-78e0-4945-bdaf-fcd8e8489ac3_kefm9s.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779880183/dff84270-9219-4c6a-af1a-e84a9c20e40c_qradi9.jpg' },
      { type: 'image', src: 'https://res.cloudinary.com/daom5jnck/image/upload/v1779880175/c8940e0d-81c8-4cd5-acc4-783882ec0484_rhtfg3.jpg' }
    ]
  }
];

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

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

      <div className="px-6 md:px-12 max-w-7xl mx-auto pb-20">
        <div className="grid grid-cols-2 gap-4 md:gap-8">
          {blogPosts.map((post) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="cursor-pointer group bg-white/5 border border-white/10 hover:border-primary/50 transition-all duration-300 overflow-hidden"
              onClick={() => setSelectedPost(post)}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={post.media[0].src} 
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-4 md:p-6">
                <span className="text-xs uppercase text-primary mb-2 block">{post.date}</span>
                <h3 className="text-lg md:text-xl font-serif text-white truncate">{post.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedPost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-bg p-4 md:p-12 overflow-y-auto"
          >
            <button 
              className="absolute top-6 right-6 text-white p-2 hover:text-primary transition-colors z-50"
              onClick={() => setSelectedPost(null)}
            >
              <X size={36} />
            </button>
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              className="max-w-5xl w-full bg-gradient-to-br from-gray-950 via-gray-900 to-black p-8 md:p-16 border border-white/10 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
              
              <div className="relative z-10">
                <span className="text-xs uppercase tracking-widest text-primary block mb-4 font-semibold">{selectedPost.date}</span>
                <h2 className="text-4xl md:text-6xl font-serif text-white mb-8 leading-tight">{selectedPost.title}</h2>
                <p className="text-gray-300 text-lg font-light leading-relaxed mb-12 max-w-2xl border-l-2 border-primary pl-6">
                  {selectedPost.summary}
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {selectedPost.media.map((item, idx) => (
                    <motion.div 
                      key={idx} 
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: idx * 0.1 }}
                      className="overflow-hidden rounded-lg bg-black/40 border border-white/5 hover:border-primary/50 transition-colors duration-300"
                    >
                      {item.type === 'image' ? (
                        <img src={item.src} alt={selectedPost.title} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-500" />
                      ) : (
                        <video src={item.src} controls className="w-full h-64 object-cover" />
                      )}
                    </motion.div>
                  ))
                }
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
