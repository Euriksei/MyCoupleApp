import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const playlist = [
    { title: "Eu sei que vou te amar", artist: "Vinicius de Morais", src: "/music/Eu sei que vou te amar.mp3", duration: "4:23" },
    { title: "Palavras no Corpo", artist: "Gal Costa", src: "/music/Palavras no Corpo.mp3", duration: "4:29" },
    { title: "Quadro Verde", artist: "Rubel", src: "/music/Quadro Verde.mp3", duration: "4:41" },
    { title: "Só Nós Dois", artist: "Tim Bernardes", src: "/music/Só Nós Dois.mp3", duration: "3:32" },
    { title: "Tempo de Pipa", artist: "Cícero", src: "/music/Tempo de Pipa.mp3", duration: "3:45" }
  ];

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const nextSong = () => {
    const nextIndex = (currentSong + 1) % playlist.length;
    setCurrentSong(nextIndex);
    setIsPlaying(true);
  };

  const prevSong = () => {
    const prevIndex = (currentSong - 1 + playlist.length) % playlist.length;
    setCurrentSong(prevIndex);
    setIsPlaying(true);
  };

  const handleTimeUpdate = () => {
    const progressPercent =
      (audioRef.current.currentTime / audioRef.current.duration) * 100;
    setProgress(progressPercent);
  };

  const handleEnded = () => {
    nextSong();
  };

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [currentSong]);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground">
          Our Love Playlist
        </h2>

        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-2xl">
          {/* GIF acima do nome da música */}
          <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden shadow-lg">
            <img
              src="/music/gatinho.gif"
              alt="Gif fofo"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Informações da música */}
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-foreground mb-2">
              {playlist[currentSong].title}
            </h3>
            <p className="text-muted-foreground">
              {playlist[currentSong].artist}
            </p>
          </div>

          {/* Barra de progresso */}
          <div className="mb-8">
            <div className="flex justify-between text-sm text-muted-foreground mb-2">
              <span>{audioRef.current?.currentTime.toFixed(0) || "0:00"}</span>
              <span>{playlist[currentSong].duration}</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Controles */}
          <div className="flex items-center justify-center space-x-6 mb-8">
            <button
              onClick={prevSong}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <SkipBack className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={togglePlay}
              className="p-4 rounded-full bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-500 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {isPlaying ? (
                <Pause className="w-8 h-8 text-white" />
              ) : (
                <Play className="w-8 h-8 text-white ml-1" />
              )}
            </button>

            <button
              onClick={nextSong}
              className="p-3 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <SkipForward className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* Volume fake (visual apenas) */}
          <div className="flex items-center justify-center space-x-3">
            <Volume2 className="w-5 h-5 text-muted-foreground" />
            <div className="w-32 bg-gray-200 rounded-full h-2">
              <div className="bg-gradient-to-r from-pink-400 to-purple-500 h-2 rounded-full w-3/4" />
            </div>
          </div>

          {/* Áudio oculto */}
          <audio
            ref={audioRef}
            src={playlist[currentSong].src}
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
          />
        </div>

        {/* Lista de músicas */}
        <div className="mt-8 bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
          <h3 className="text-lg font-bold mb-4 text-foreground">Playlist</h3>
          <div className="space-y-3">
            {playlist.map((song, index) => (
              <div
                key={index}
                onClick={() => {
                  setCurrentSong(index);
                  setIsPlaying(true);
                }}
                className={`flex items-center justify-between p-3 rounded-lg cursor-pointer transition-colors ${
                  index === currentSong
                    ? 'bg-gradient-to-r from-pink-100 to-purple-100 border border-pink-200'
                    : 'hover:bg-gray-50'
                }`}
              >
                <div>
                  <div className="font-medium text-foreground">{song.title}</div>
                  <div className="text-sm text-muted-foreground">{song.artist}</div>
                </div>
                <div className="text-sm text-muted-foreground">{song.duration}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlayer;
