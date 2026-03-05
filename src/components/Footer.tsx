import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
               <img 
                 src="https://i.postimg.cc/kXjSRdmn/image.png" 
                 alt="José Zoilo Logo" 
                 className="h-12 w-auto object-contain rounded-full border border-primary/20 opacity-90"
                 referrerPolicy="no-referrer"
               />
            </div>
            <p className="text-xs uppercase tracking-widest text-secondary mt-2 font-light">
              © {new Date().getFullYear()} Maestros del Ibérico. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/zoilopecellin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
