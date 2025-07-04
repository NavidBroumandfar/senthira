import React from 'react';

export default function Contact() {
  return (
    <section className="w-full max-w-xl mx-auto py-16 md:py-24 flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Let's Talk</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-8 text-center max-w-md">
        Interested in collaborating or learning more? Reach out and let's build something great together.
      </p>
      <form className="w-full flex flex-col gap-4">
        <input
          type="text"
          placeholder="Name"
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled
        />
        <input
          type="email"
          placeholder="Email"
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled
        />
        <textarea
          placeholder="Message"
          rows={4}
          className="px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled
        />
        <button
          type="submit"
          className="mt-2 px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition cursor-not-allowed opacity-60"
          disabled
        >
          Send Message
        </button>
      </form>
    </section>
  );
} 