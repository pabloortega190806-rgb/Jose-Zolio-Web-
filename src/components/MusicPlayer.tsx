import { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }

    // Function to handle the very first user interaction to trigger autoplay
    const handleFirstInteraction = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            // Remove listeners once playing successfully
            cleanupListeners();
          })
          .catch((error) => {
            console.log("Autoplay waiting for user gesture or source link adjustment:", error);
          });
      }
    };

    const cleanupListeners = () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    // Add listeners for bypass of browser autoplay policies
    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      cleanupListeners();
    };
  }, [isPlaying]);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.error("Error starting playback:", err));
      }
    }
  };

  return (
    <div className="fixed bottom-[80px] right-[28px] z-50 flex flex-col items-center group">
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/daom5jnck/video/upload/v1781185417/Vicente_Amigo_-_Tres_Notas_Para_Decir_Te_Quiero_Video_jl93ei.mp3"
        loop
      />
      
      {/* Subtle indicator text that appears on hover */}
      <div className="absolute right-12 bg-black/80 text-white text-[9px] uppercase tracking-widest px-3 py-1.5 rounded-md border border-white/10 whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        Música ambiente
      </div>

      <button
        onClick={togglePlayPause}
        className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 shadow-lg group relative ${
          isPlaying 
            ? 'bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary' 
            : 'bg-black/60 border-white/10 text-gray-400 hover:border-primary/40 hover:text-white'
        }`}
        title={isPlaying ? "Silenciar música" : "Activar música"}
        aria-label="Control de música de fondo"
      >
        {isPlaying ? (
          <>
            <Volume2 size={16} className="relative z-10" />
            {/* Soft pulsing halo to show current active music */}
            <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-60"></span>
          </>
        ) : (
          <VolumeX size={16} className="relative z-10" />
        )}
      </button>
    </div>
  );
}

