import { Facebook, Instagram, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12 border-b border-white/5 pb-12">
          <div>
            <h4 className="font-serif text-lg mb-6 text-primary">Legal</h4>
            <ul className="space-y-3 text-sm text-secondary font-light">
              <li><Link to="/aviso-legal" className="hover:text-primary transition-colors">Aviso Legal</Link></li>
              <li><Link to="/politica-privacidad" className="hover:text-primary transition-colors">Política de Privacidad</Link></li>
              <li><Link to="/politica-cookies" className="hover:text-primary transition-colors">Política de Cookies</Link></li>
              <li><Link to="/terminos-condiciones" className="hover:text-primary transition-colors">Términos y Condiciones</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
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
              © {new Date().getFullYear()} José Zoilo. Todos los derechos reservados.
            </p>
          </div>
          
          <div className="flex gap-6">
            <a href="https://www.facebook.com/profile.php?id=100009924754590&locale=es_ES" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Facebook size={20} /></a>
            <a href="https://www.instagram.com/zoilopecellin?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="mailto:zoilocortador@gmail.com" className="text-secondary hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
