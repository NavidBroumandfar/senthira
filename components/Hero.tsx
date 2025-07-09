"use client";
import Player from "lottie-react";
import { useEffect, useState } from "react";

export default function Hero() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/lottie-hero-placeholder.json")
      .then((res) => res.json())
      .then(setAnimationData);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full flex flex-col items-center justify-center text-center py-20 md:py-32 px-4 overflow-hidden">
      {/* Lottie background animation */}
      <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-0 opacity-60 dark:opacity-40">
        {animationData && (
          <Player
            autoplay
            loop
            animationData={animationData}
            style={{ width: '100%', height: '100%' }}
            rendererSettings={{ preserveAspectRatio: 'xMidYMid slice' }}
            aria-label="Abstract technology animation"
          />
        )}
      </div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center w-full">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-gray-100">
          Usable AI for Real Businesses.
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl leading-relaxed">
          You run the business. We build the AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={scrollToContact}
            aria-label="Contact Senthira"
            className="px-8 py-4 rounded-lg bg-blue-600 text-white font-semibold text-lg shadow-lg transition-colors duration-300 hover:bg-blue-700 focus:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 cursor-pointer"
          >
            Let's Talk
          </button>
          <button
            onClick={scrollToDemo}
            aria-label="See how Senthira works"
            className="px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-lg transition-colors duration-300 hover:bg-gray-100 dark:hover:bg-gray-800 focus:bg-gray-200 dark:focus:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 cursor-pointer"
          >
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
} 