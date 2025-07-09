"use client";

const avatarStyle =
  "w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-md";

function Avatar({ name, label }: { name: string; label: string }) {
  return (
    <div className={avatarStyle} aria-label={label} role="img">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="20" fill="currentColor" />
        <ellipse cx="20" cy="16" rx="7" ry="7" fill="#fff" fillOpacity="0.9" />
        <ellipse cx="20" cy="32" rx="12" ry="7" fill="#fff" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

export default function FounderStory() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-6 md:p-12 shadow-lg flex flex-col md:flex-row gap-8 md:gap-12 items-stretch">
          {/* Navid (left) */}
          <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start justify-center">
            <Avatar name="Navid" label="Navid avatar" />
            <blockquote className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-4">
              “AI should empower people — not overwhelm them. Senthira exists to replace chaos with clarity.”
            </blockquote>
            <div className="text-base font-semibold text-teal-700 dark:text-teal-300 mt-2">— Navid, <span className="font-normal text-gray-600 dark:text-gray-300">Founder</span></div>
          </div>
          {/* Hadi (right) */}
          <div className="flex-1 flex flex-col items-center text-center md:text-left md:items-start justify-center border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-8 md:pt-0 md:pl-8">
            <Avatar name="Hadi" label="Hadi avatar" />
            <blockquote className="mt-6 text-lg md:text-xl text-gray-800 dark:text-gray-100 font-medium leading-relaxed mb-4">
              “Navid had the vision. I knew I had to help him bring it to life.”
            </blockquote>
            <div className="text-base font-semibold text-teal-700 dark:text-teal-300 mt-2">Hadi, <span className="font-normal text-gray-600 dark:text-gray-300">Co‑founder</span></div>
          </div>
        </div>
      </div>
    </section>
  );
} 