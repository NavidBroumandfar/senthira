import React from 'react';

const products = [
  {
    title: 'Senthira Insight',
    description: 'AI-powered analytics dashboard for decision-makers.',
  },
  {
    title: 'Senthira Flow',
    description: 'NLP engine for automating customer interactions.',
  },
  {
    title: 'Senthira Core',
    description: 'Scalable ML infrastructure with clean APIs.',
  },
];

export default function Products() {
  return (
    <section className="w-full max-w-5xl mx-auto py-16 md:py-24 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">What We're Building</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
        {products.map((p) => (
          <div
            key={p.title}
            className="bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-800 shadow-sm p-8 flex flex-col items-center text-center transition-all duration-200 hover:shadow-lg hover:border-blue-500 dark:hover:border-blue-400 cursor-pointer"
          >
            <div className="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-100">{p.title}</div>
            <div className="text-gray-600 dark:text-gray-300 text-sm">{p.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 