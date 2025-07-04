export default function Hero() {
  return (
    <section className="w-full flex flex-col items-center justify-center text-center py-20 md:py-32">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-blue-700 dark:text-blue-300">Senthira</h1>
      <p className="text-lg md:text-2xl text-gray-700 dark:text-gray-200 mb-8 max-w-xl">
        Cutting-edge AI solutions for ambitious businesses.
      </p>
      <a
        href="#about"
        className="inline-block px-8 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
      >
        Get in Touch
      </a>
    </section>
  );
} 