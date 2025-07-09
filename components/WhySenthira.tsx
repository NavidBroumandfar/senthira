import FadeInSection from './FadeInSection';

const features = [
  {
    icon: (
      <svg className="w-10 h-10 text-teal-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M1.5 12s4-7.5 10.5-7.5S22.5 12 22.5 12s-4 7.5-10.5 7.5S1.5 12 1.5 12z" />
        <circle cx="12" cy="12" r="3" fill="currentColor" />
      </svg>
    ),
    title: 'Clarity',
    desc: 'We make AI simple and transparent.\nNo jargon, just results you understand.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-teal-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: 'Speed',
    desc: 'Launch in days, not months.\nWe move fast so you can too.'
  },
  {
    icon: (
      <svg className="w-10 h-10 text-teal-500 mb-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21C7 17 2 13.5 2 9.5A5.5 5.5 0 0 1 12 5.5a5.5 5.5 0 0 1 10 4c0 4-5 7.5-10 11.5z" />
      </svg>
    ),
    title: 'Human',
    desc: 'We build for people, not hype.\nSupport and empathy at every step.'
  },
];

export default function WhySenthira() {
  return (
    <section className="w-full py-20 md:py-28 px-4 bg-white dark:bg-gray-950">
      <FadeInSection>
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">Why Senthira</h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The three reasons founders trust us to deliver real, usable AI.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="flex flex-col items-center bg-gray-50 dark:bg-gray-900 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105"
            >
              {f.icon}
              <h3 className="text-2xl font-bold mb-2 text-gray-900 dark:text-gray-100">{f.title}</h3>
              <p className="text-gray-700 dark:text-gray-300 text-base whitespace-pre-line text-center">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </FadeInSection>
    </section>
  );
} 