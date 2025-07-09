import React from 'react';
import ThemeToggle from './ThemeToggle';

export default function Footer() {
  return (
    <footer className="w-full py-8 px-4 md:px-8 border-t border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Company info */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-xl font-bold text-blue-600 dark:text-blue-400 mb-2">Senthira</span>
            <p className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-left">
              Usable AI for real businesses
            </p>
          </div>

          {/* Contact info */}
          <div className="flex flex-col items-center md:items-end gap-2">
            <a
              href="mailto:hello@senthira.com"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              hello@senthira.com
            </a>
            <div className="flex gap-4 text-sm text-gray-500 dark:text-gray-500">
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Privacy
              </a>
              <a
                href="#"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition"
              >
                Terms
              </a>
            </div>
          </div>

          {/* Theme toggle */}
          <ThemeToggle />
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-800 text-center">
          <span className="text-xs text-gray-500 dark:text-gray-500">
            © 2025 Senthira. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
} 