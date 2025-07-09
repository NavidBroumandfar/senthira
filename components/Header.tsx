import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-4 md:px-8 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur z-20">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <a
          href="/"
          className="text-3xl md:text-4xl font-extrabold tracking-tight text-teal-700 dark:text-teal-400 select-none transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-teal-400 rounded-sm hover:underline hover:underline-offset-4 hover:decoration-4 hover:decoration-teal-400"
          aria-label="Senthira homepage"
        >
          Senthira
        </a>
      </div>
      <ThemeToggle />
    </header>
  );
} 