"use client";

const avatarStyle =
  "w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 flex items-center justify-center text-white text-3xl font-bold shadow-md";

function Avatar({ label }: { label: string }) {
  return (
    <div className={avatarStyle} aria-label={label} role="img">
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="24" cy="24" r="24" fill="currentColor" />
        <ellipse cx="24" cy="19" rx="9" ry="9" fill="#fff" fillOpacity="0.9" />
        <ellipse cx="24" cy="38" rx="15" ry="9" fill="#fff" fillOpacity="0.7" />
      </svg>
    </div>
  );
}

export default function FounderStory() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white dark:bg-gray-800/90 rounded-2xl p-8 md:p-14 shadow-lg flex flex-col md:flex-row gap-10 md:gap-16 items-stretch justify-center">
          {/* Navid (left) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left md:items-start gap-5">
            <Avatar label="Navid avatar" />
            <blockquote className="mt-2 text-xl md:text-2xl text-gray-900 dark:text-gray-100 font-semibold leading-relaxed mb-2 md:mb-4 font-sans">
              “AI should empower people — not overwhelm them. Senthira exists to replace chaos with clarity.”
            </blockquote>
            <div className="text-lg font-semibold text-teal-700 dark:text-teal-300 mt-1 md:mt-2 font-sans">— Navid, <span className="font-normal text-gray-600 dark:text-gray-300">Founder</span></div>
          </div>
          {/* Hadi (right) */}
          <div className="flex-1 flex flex-col items-center justify-center text-center md:text-left md:items-start gap-5 border-t md:border-t-0 md:border-l border-gray-200 dark:border-gray-700 pt-10 md:pt-0 md:pl-10">
            <Avatar label="Hadi avatar" />
            <blockquote className="mt-2 text-xl md:text-2xl text-gray-900 dark:text-gray-100 font-semibold leading-relaxed mb-2 md:mb-4 font-sans">
              “Navid had the vision. I knew I had to help him bring it to life.”
            </blockquote>
            <div className="text-lg font-semibold text-teal-700 dark:text-teal-300 mt-1 md:mt-2 font-sans">— Hadi, <span className="font-normal text-gray-600 dark:text-gray-300">Co-founder</span></div>
          </div>
        </div>
      </div>
    </section>
  );
} 