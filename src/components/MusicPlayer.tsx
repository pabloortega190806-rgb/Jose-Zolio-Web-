import { useState, useRef, useEffect, MouseEvent, ChangeEvent } from 'react';
import { Volume2, VolumeX, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const hasInteractedRef = useRef(false);

  // Sync volume state with HTMLAudioElement
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  // Handle first user interaction to start background loop (auto-play policy bypass)
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (hasInteractedRef.current) return;
      
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
            hasInteractedRef.current = true;
            cleanup();
          })
          .catch((error) => {
            console.log("Autoplay policy waiting for active gesture or file release:", error);
          });
      }
    };

    const cleanup = () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
      document.removeEventListener('keydown', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);
    document.addEventListener('keydown', handleFirstInteraction);

    return () => {
      cleanup();
    };
  }, []);

  const togglePlayPause = (e: MouseEvent) => {
    e.stopPropagation();
    // Mark as manually interacted so document-wide triggers are terminated instantly
    hasInteractedRef.current = true;

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch((err) => {
            console.error("Manual playback initiation failed:", err);
          });
      }
    }
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    if (audioRef.current) {
      audioRef.current.volume = newVolume;
      if (newVolume > 0 && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch((err) => console.log("Volume play trigger failed:", err));
      } else if (newVolume === 0 && isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="fixed bottom-[95px] right-[28px] z-50 flex flex-col items-end gap-2 group">
      <audio
        ref={audioRef}
        src="https://res.cloudinary.com/daom5jnck/video/upload/v1781185417/Vicente_Amigo_-_Tres_Notas_Para_Decir_Te_Quiero_Video_jl93ei.mp3"
        loop
      />

      {/* Vol popup (slides elegantly to the left of the control) */}
      <AnimatePresence>
        {showVolumeSlider && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-0 right-20 flex items-center gap-3 bg-black/80 backdrop-blur-md border border-white/10 p-3 rounded-full shadow-2xl mr-1"
          >
            <span className="text-[10px] uppercase text-gray-300 font-mono select-none tracking-wider whitespace-nowrap pl-2">
              Vol: {Math.round(volume * 100)}%
            </span>
            <input
              type="range"
              min="0"
              max="1"
              step="0.01"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-primary focus:outline-none"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-2">
        {/* Main Music Control Button */}
        <button
          onClick={togglePlayPause}
          className={`w-10 h-10 rounded-full flex items-center justify-center border transition-all duration-500 shadow-lg relative ${
            isPlaying 
              ? 'bg-primary/10 border-primary/40 text-primary hover:bg-primary/20 hover:border-primary' 
              : 'bg-black/60 border-white/10 text-gray-400 hover:border-primary/50 hover:text-white'
          }`}
          title={isPlaying ? "Silenciar música" : "Activar música"}
          aria-label="Control de música"
        >
          {isPlaying ? (
            <>
              <Volume2 size={16} className="relative z-100 animate-pulse" />
              {/* Soft pulsing halo to indicate playback state */}
              <span className="absolute inset-0 rounded-full bg-primary/20 animate-ping opacity-60"></span>
            </>
          ) : (
            <VolumeX size={16} className="relative z-10" />
          )}
        </button>

        {/* Toggle Volume adjustment bar */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setShowVolumeSlider(!showVolumeSlider);
          }}
          className={`w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 shadow-md ${
            showVolumeSlider 
              ? 'bg-primary border-primary text-black' 
              : 'bg-black/60 border-white/10 text-gray-400 hover:border-primary/45 hover:text-white'
          }`}
          title="Ajustar volumen"
          aria-label="Ajustar volumen"
        >
          <Sliders size={10} className={showVolumeSlider ? "animate-pulse" : ""} />
        </button>
      </div>

      <span className="text-[9px] uppercase tracking-widest text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none mt-1 mr-1 font-mono">
        Vicente Amigo
      </span>
    </div>
  );
}
