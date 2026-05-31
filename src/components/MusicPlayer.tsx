import { useState, useRef, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="fixed bottom-20 right-6 z-50 flex items-center gap-3 backdrop-blur-md border border-white/10 p-2 rounded-full shadow-lg bg-black/50">
      <audio
        ref={audioRef}
        src="https://drive.google.com/uc?id=1d9-vKFW4Td7SDkwq3cyDqUi0h0DQ_71J&export=download"
        loop
      />
      <button
        onClick={togglePlayPause}
        className="text-primary hover:text-white transition-colors p-2 rounded-full bg-white/5"
      >
        {isPlaying ? <Pause size={20} /> : <Play size={20} />}
      </button>
    </div>
  );
}
