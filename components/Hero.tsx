"use client";

export default function Hero() {
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
    <section className="w-full flex flex-col items-center justify-center text-center py-20 md:py-32 px-4">
      <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight text-gray-900 dark:text-gray-100">
        Usable AI for Real Businesses.
      </h1>
      <p className="text-xl md:text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-12 max-w-4xl leading-relaxed">
        You run the business. We build the AI.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
        <button
          onClick={scrollToContact}
          className="px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
        >
          Let's Talk
        </button>
        <button
          onClick={scrollToDemo}
          className="px-8 py-4 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
        >
          See how it works
        </button>
      </div>
    </section>
  );
} 