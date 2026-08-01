"use client";

import { useEffect, useRef, useState } from "react";
import { Music2, Volume2 } from "lucide-react";
import { story } from "@/content/story";

export default function MusicToggle() {
  const [available, setAvailable] = useState<boolean | null>(null);
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio(story.music.src);
    audio.loop = true;
    audio.preload = "metadata";
    audioRef.current = audio;

    const onReady = () => setAvailable(true);
    const onError = () => setAvailable(false);
    audio.addEventListener("loadedmetadata", onReady);
    audio.addEventListener("error", onError);

    return () => {
      audio.removeEventListener("loadedmetadata", onReady);
      audio.removeEventListener("error", onError);
      audio.pause();
    };
  }, []);

  if (available === false) return null;

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio
        .play()
        .then(() => setPlaying(true))
        .catch(() => setPlaying(false));
    }
  };

  return (
    <button
      type="button"
      onClick={toggle}
      title={playing ? "Pausar música" : "Reproducir música"}
      aria-label={playing ? "Pausar música" : "Reproducir música"}
      className="glass fixed bottom-5 right-5 z-[70] flex h-12 w-12 items-center justify-center rounded-full text-cream transition-colors hover:border-gold/40 hover:text-gold"
    >
      {playing ? (
        <Volume2 className="h-5 w-5 text-gold" />
      ) : (
        <Music2 className="h-5 w-5" />
      )}
    </button>
  );
}
