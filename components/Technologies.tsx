import React from 'react';

const techs = [
  { name: 'Next.js', logo: '/tech/nextjs.svg' },
  { name: 'TypeScript', logo: '/tech/typescript.svg' },
  { name: 'TailwindCSS', logo: '/tech/tailwindcss.svg' },
  { name: 'Python', logo: '/tech/python.svg' },
  { name: 'FastAPI', logo: '/tech/fastapi.svg' },
  { name: 'PostgreSQL', logo: '/tech/postgresql.svg' },
  { name: 'Vercel', logo: '/tech/vercel.svg' },
];

export default function Technologies() {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 md:py-24 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">Built with Modern Tools</h2>
      <div className="grid grid-cols-3 md:grid-cols-7 gap-6 w-full items-center justify-center">
        {techs.map((t) => (
          <div
            key={t.name}
            className="flex flex-col items-center group cursor-pointer"
          >
            <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800 transition-all group-hover:scale-110 group-hover:shadow-lg">
              {/* Placeholder for logo */}
              <img src={t.logo} alt={t.name} className="w-8 h-8 object-contain" />
            </div>
            <span className="mt-2 text-xs text-gray-500 dark:text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity">{t.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
} 