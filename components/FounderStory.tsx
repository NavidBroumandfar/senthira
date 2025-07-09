"use client";

export default function FounderStory() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-white dark:bg-gray-950">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center">
            <div className="w-20 h-20 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-3xl">👨‍💼</span>
            </div>
            {/* Navid's quote */}
            <blockquote className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed mb-6 italic">
              "I built Senthira because I saw brilliant people wasting hours on tools they hate. Our mission is to make AI usable, beautiful, and human."
            </blockquote>
            <div className="mb-8">
              <span className="font-bold text-gray-900 dark:text-gray-100">Navid Broumandfar</span>
              <span className="text-gray-600 dark:text-gray-400"> — Founder</span>
            </div>
            {/* Hadi's quote */}
            <blockquote className="text-lg md:text-xl text-gray-600 dark:text-gray-400 leading-relaxed mb-4 italic">
              “Working with Navid has completely changed how we power businesses with practical AI.”
              <span className="block mt-2 font-bold text-gray-900 dark:text-gray-100">— Hadi [LastName], <span className="font-normal text-gray-600 dark:text-gray-400">Co‑founder</span></span>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
} 