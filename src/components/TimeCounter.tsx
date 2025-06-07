
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const TimeCounter = () => {
  const [timeSpent, setTimeSpent] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your relationship start date here
  const relationshipStart = new Date('2023-01-01'); // Change this to your actual start date

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const difference = now.getTime() - relationshipStart.getTime();

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeSpent({ days, hours, minutes, seconds });
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-6 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Heart className="w-12 h-12 text-pink-500 fill-current animate-pulse" />
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
          Time We've Spent Together
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
          {[
            { label: 'Days', value: timeSpent.days },
            { label: 'Hours', value: timeSpent.hours },
            { label: 'Minutes', value: timeSpent.minutes },
            { label: 'Seconds', value: timeSpent.seconds }
          ].map((item) => (
            <div
              key={item.label}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-pink-600 mb-2">
                {item.value.toLocaleString()}
              </div>
              <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                {item.label}
              </div>
            </div>
          ))}
        </div>
        <p className="text-lg text-muted-foreground">
          Every second with you feels like a beautiful eternity ✨
        </p>
      </div>
    </section>
  );
};

export default TimeCounter;
