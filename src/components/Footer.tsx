import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-bg border-t border-white/5 pt-20 pb-10 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-primary material-symbols-outlined">ac_unit</span>
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">Conservación</h4>
            </div>
            <p className="text-sm text-secondary leading-relaxed font-light">
              Mantener en refrigeración constante entre <strong className="text-primary">0-7°C</strong> para preservar todas sus propiedades organolépticas.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-primary material-symbols-outlined">timer</span>
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">Degustación</h4>
            </div>
            <p className="text-sm text-secondary leading-relaxed font-light">
              Para una experiencia sublime, abrir el sobre <strong className="text-primary">20 minutos antes</strong> de su consumo para atemperar.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-primary material-symbols-outlined">local_shipping</span>
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">Envío Gourmet</h4>
            </div>
            <p className="text-sm text-secondary leading-relaxed font-light">
              Entrega refrigerada en 24/48h. El lujo de la dehesa directamente en su mesa con máxima frescura.
            </p>
          </div>
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-primary material-symbols-outlined">verified</span>
              <h4 className="font-bold uppercase tracking-widest text-sm text-white">Garantía Zoilo</h4>
            </div>
            <p className="text-sm text-secondary leading-relaxed font-light">
              Cada pieza es seleccionada individualmente bajo los más estrictos estándares de la D.O.P.
            </p>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
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
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Instagram size={20} /></a>
            <a href="#" className="text-secondary hover:text-primary transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
