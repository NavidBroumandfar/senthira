"use client";

export default function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="relative w-full mt-16 py-16 md:py-24 px-4">
      {/* Soft teal gradient background */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="w-full h-full bg-gradient-to-br from-teal-400/80 via-teal-500/60 to-teal-700/80 dark:from-teal-700/80 dark:via-teal-900/60 dark:to-gray-900/90 blur-xl opacity-80" />
      </div>
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-lg">
          Let’s build your AI system together.
        </h2>
        <p className="text-xl md:text-2xl text-teal-50 mb-12 max-w-3xl mx-auto drop-shadow">
          Ready to transform your business with AI? Let’s start the conversation.
        </p>
        <button
          onClick={scrollToContact}
          aria-label="Book a call with Senthira"
          className="px-12 py-4 rounded-lg bg-white text-teal-700 font-semibold text-lg shadow-lg transition-colors duration-300 hover:bg-teal-50 hover:text-teal-900 focus:bg-teal-100 focus:text-teal-900 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-600 cursor-pointer"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
} 