import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 md:px-8 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 text-center text-sm flex flex-col md:flex-row items-center justify-between gap-2 mt-8">
      <span className="text-gray-600 dark:text-gray-400">© 2025 Senthira. All rights reserved.</span>
      <span className="flex gap-4 justify-center items-center">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          LinkedIn (Navid)
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          LinkedIn (Hadi)
        </a>
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-500 hover:text-blue-600 dark:hover:text-blue-400 transition"
        >
          GitHub
        </a>
        <ThemeToggle />
      </span>
    </footer>
  );
} 