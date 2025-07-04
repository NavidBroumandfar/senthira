import React from 'react';

export default function MissionVision() {
  return (
    <section className="w-full max-w-3xl mx-auto py-16 md:py-24 flex flex-col items-center text-center gap-10">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Our Mission</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          To deliver ethical, intelligent AI solutions that transform businesses, empower users, and push the boundaries of innovation.
        </p>
      </div>
      <div>
        <h3 className="text-xl md:text-2xl font-semibold mb-3 text-gray-900 dark:text-gray-100">Our Vision</h3>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          To become a global reference in AI-driven product excellence with a human-centered approach.
        </p>
      </div>
    </section>
  );
} 