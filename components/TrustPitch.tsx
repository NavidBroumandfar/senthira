import React from 'react';
import FadeInSection from './FadeInSection';

export default function TrustPitch() {
  return (
    <section className="w-full py-16 md:py-24 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Main pitch */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl lg:text-3xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-5xl mx-auto">
            Senthira is the fastest way to turn your business into an AI-powered machine—without writing a single line of code.
          </p>
        </div>
        {/* Partner logos */}
        <FadeInSection>
          <div className="flex justify-center items-center mb-16">
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-60">
              {/* Placeholder partner logos */}
              <div className="w-16 h-16 md:w-20 md:h-20 min-w-[48px] min-h-[48px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600" aria-label="Client Logo 1" role="img">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Logo 1</span>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 min-w-[48px] min-h-[48px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600" aria-label="Client Logo 2" role="img">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Logo 2</span>
              </div>
              <div className="w-16 h-16 md:w-20 md:h-20 min-w-[48px] min-h-[48px] bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center border border-gray-300 dark:border-gray-600" aria-label="Client Logo 3" role="img">
                <span className="text-gray-500 dark:text-gray-400 text-sm font-medium">Logo 3</span>
              </div>
            </div>
          </div>
        </FadeInSection>
        {/* 3-column summary */}
        <FadeInSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🤖</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                GPT-powered Chatbots
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Intelligent conversations that understand your business and help your customers 24/7.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">🔁</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Automation Flows
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Streamline your operations with smart workflows that work while you sleep.
              </p>
            </div>
            <div className="text-center bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 transform hover:scale-105">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
                Custom Dashboards
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Real-time insights and analytics that help you make better decisions faster.
              </p>
            </div>
          </div>
        </FadeInSection>
      </div>
    </section>
  );
} 