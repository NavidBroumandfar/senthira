"use client";

export default function CTASection() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="w-full py-16 md:py-24 px-4 bg-blue-600 dark:bg-blue-700">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
          Let's build your AI system together.
        </h2>
        <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto">
          Ready to transform your business with AI? Let's start the conversation.
        </p>
        <button
          onClick={scrollToContact}
          aria-label="Book a call with Senthira"
          className="px-12 py-4 rounded-lg bg-white text-blue-600 font-semibold text-lg shadow-lg transition-colors duration-300 hover:bg-blue-50 focus:bg-blue-100 hover:text-blue-700 focus:text-blue-800 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600 cursor-pointer"
        >
          Book a Call
        </button>
      </div>
    </section>
  );
} 