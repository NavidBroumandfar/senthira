import ThemeToggle from './ThemeToggle';

export default function Header() {
  return (
    <header className="w-full flex items-center justify-between py-4 px-4 md:px-8 border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur z-20">
      <div className="flex items-center">
        {/* Logo placeholder */}
        <span className="text-2xl font-bold tracking-tight text-blue-600 dark:text-blue-400 select-none">Senthira</span>
      </div>
      <ThemeToggle />
    </header>
  );
} 