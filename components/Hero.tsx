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
      {/* Soft SVG background */}
      <svg
        className="absolute inset-0 w-full h-full z-0 pointer-events-none opacity-40 dark:opacity-30"
        aria-hidden="true"
        viewBox="0 0 1440 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <ellipse cx="720" cy="300" rx="700" ry="220" fill="#14b8a6" fillOpacity="0.10" />
        <ellipse cx="720" cy="400" rx="500" ry="120" fill="#14b8a6" fillOpacity="0.08" />
        <ellipse cx="720" cy="200" rx="400" ry="100" fill="#14b8a6" fillOpacity="0.07" />
      </svg>
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
        <h1 className="text-5xl md:text-7xl lg:text-[4.5rem] font-extrabold mb-8 tracking-tight text-gray-900 dark:text-gray-100 leading-tight">
          Usable AI for Real Businesses.
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-200 mb-12 max-w-4xl leading-relaxed">
          You run the business. We build the AI.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
          <button
            onClick={scrollToContact}
            aria-label="Contact Senthira"
            className="px-8 py-4 rounded-lg bg-teal-600 text-white font-semibold text-lg shadow-lg transition-colors duration-300 hover:bg-teal-700 focus:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 cursor-pointer"
          >
            Let's Talk
          </button>
          <button
            onClick={scrollToDemo}
            aria-label="See how Senthira works"
            className="px-8 py-4 rounded-lg border-2 border-teal-400 text-teal-700 dark:text-teal-300 font-semibold text-lg transition-colors duration-300 hover:bg-teal-50 dark:hover:bg-teal-900 focus:bg-teal-100 dark:focus:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 cursor-pointer"
          >
            See how it works
          </button>
        </div>
      </div>
    </section>
  );
} 