import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-3xl md:text-4xl font-extrabold tracking-tight text-teal-700 dark:text-teal-400 mb-2 font-sans">Senthira</span>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left font-sans">
              Usable AI for real businesses
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:hello@senthira.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-teal-600 dark:hover:text-teal-400 transition font-sans"
            >
              hello@senthira.com
            </a>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500 font-sans">
              <a
                href="#"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-teal-600 dark:hover:text-teal-400 transition"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-500 font-sans">
            © 2025 Senthira. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
} 