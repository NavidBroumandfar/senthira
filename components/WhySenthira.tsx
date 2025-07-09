export default function WhySenthira() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            Why Founders Choose Us
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We understand what keeps you up at night, and we've built solutions that actually work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {/* Usable by design */}
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">✨</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Usable by design
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              We build AI systems that your team can actually use. No complex interfaces, no steep learning curves—just powerful tools that feel natural.
            </p>
          </div>

          {/* Trust through clarity */}
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🔒</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Trust through clarity
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Complete transparency in how your AI works. No black boxes, no hidden costs. You always know what's happening and why.
            </p>
          </div>

          {/* Built in days, not months */}
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">⏱️</span>
            </div>
            <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Built in days, not months
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Your AI system is ready to use in days, not months. We focus on what works now, not what might work someday.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 