
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';
import PhotoGallery from '../components/PhotoGallery';
import TimeCounter from '../components/TimeCounter';
import MusicPlayer from '../components/MusicPlayer';
import LoveMessage from '../components/LoveMessage';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden">
        {/* Background decorations */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-20 h-20 bg-pink-200 rounded-full opacity-50 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-purple-200 rounded-full opacity-50 animate-pulse delay-1000"></div>
          <div className="absolute bottom-32 left-1/4 w-12 h-12 bg-pink-300 rounded-full opacity-50 animate-pulse delay-500"></div>
          <div className="absolute bottom-20 right-1/3 w-24 h-24 bg-purple-300 rounded-full opacity-50 animate-pulse delay-700"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Main couple photo */}
          <div className="mb-8">
            <div className="relative inline-block">
              <div className="w-64 h-64 md:w-80 md:h-80 mx-auto rounded-full overflow-hidden shadow-2xl border-8 border-white/50 backdrop-blur-sm">
                <img
                  src="/photos/nos.jpeg"
                  alt="Fotinha nossa juntos"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center shadow-lg animate-bounce">
                <Heart className="w-8 h-8 text-white fill-current" />
              </div>
            </div>
          </div>

          {/* Title and subtitle */}
          <div className="space-y-6 mb-12">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
              Para o amor da minha vida
            </h1>
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Sparkles className="w-6 h-6 text-pink-500" />
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Um lembrete digital do quanto eu te amo 
              </p>
              <Sparkles className="w-6 h-6 text-pink-500" />
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Bem vinda ao nosso lugar especial, onde cada pixel guarda uma lembrança, cada segundo ao
              seu lado conta e cada melodia fala do nosso amor. Que esse presentinho guarde um cadinho
              da nossa história. Este é meu presente para você meu benzinho.
            </p>
          </div>

        </div>
      </section>
      {/* Time Counter Section */}
      <TimeCounter />

      {/* Photo Gallery Section */}
      <PhotoGallery />

      {/* Music Player Section */}
      <MusicPlayer />

      {/* Love Message Section */}
      <LoveMessage />

      {/* Footer */}
      <footer className="py-12 px-6 bg-gradient-to-r from-pink-500 to-purple-500 text-white text-center">
        <div className="max-w-2xl mx-auto">
          <Heart className="w-12 h-12 mx-auto mb-4 fill-current" />
          <p className="text-lg mb-2">Feito por mim com muito amor</p>
          <p className="text-pink-100">Para a pessoa mais incrível do meu mundo ✨</p>
          <div className="mt-6 text-sm text-pink-100">
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
