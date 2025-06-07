
import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

const LoveMessage = () => {
  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-100 to-purple-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="w-8 h-8 text-pink-500" />
            <Heart className="w-10 h-10 text-pink-500 fill-current" />
            <Sparkles className="w-8 h-8 text-pink-500" />
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          A Message From My Heart
        </h2>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 md:p-12 shadow-xl max-w-3xl mx-auto">
          <div className="space-y-6 text-lg md:text-xl leading-relaxed text-muted-foreground">
            <p>
              My dearest love, every moment with you feels like a beautiful dream that I never want to wake up from. 
              You've filled my life with colors I never knew existed and melodies that make my heart dance.
            </p>
            
            <p>
              From our first laugh together to every adventure we've shared, you've been my constant source of joy, 
              my safe harbor in storms, and my greatest inspiration. You make the ordinary extraordinary just by being you.
            </p>
            
            <p>
              This little app is a small token of my endless love for you. Every photo here tells our story, 
              every second counted is a second I'm grateful to have you in my life, and every song reminds me 
              of the beautiful symphony we create together.
            </p>
            
            <div className="flex justify-center mt-8">
              <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-8 py-3 rounded-full font-semibold text-lg">
                I Love You Forever ❤️
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-muted-foreground">
          <p className="italic">
            "In all the world, there is no heart for me like yours. In all the world, there is no love for you like mine."
          </p>
          <p className="text-sm mt-2">- Maya Angelou</p>
        </div>
      </div>
    </section>
  );
};

export default LoveMessage;
