import './globals.css';
import type { ReactNode } from 'react';
import { ThemeProvider } from '../components/ThemeProvider';
import Header from '../components/Header';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Senthira – Usable AI for Real Businesses',
  description: 'You run the business. We build the AI. Transform your business with AI-powered solutions that actually work.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="description" content="Usable AI for real businesses: we build GPT chatbots, workflows & dashboards in days." />
        <meta property="og:title" content="Senthira – Usable AI for Real Businesses" />
        <meta property="og:description" content="Usable AI for real businesses: we build GPT chatbots, workflows & dashboards in days." />
        <meta property="og:image" content="/senthira-og-placeholder.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Senthira – Usable AI for Real Businesses" />
        <meta name="twitter:description" content="Usable AI for real businesses: we build GPT chatbots, workflows & dashboards in days." />
        <meta name="twitter:image" content="/senthira-og-placeholder.png" />
      </head>
      <body className="bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 transition-colors duration-300 min-h-screen flex flex-col">
        <ThemeProvider>
          <Header />
          <main className="flex-1 flex flex-col items-center w-full">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
} 