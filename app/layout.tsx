import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Senthira – AI Solutions Website',
  description: 'Cutting-edge AI solutions for ambitious businesses.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col items-center w-full px-4">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 