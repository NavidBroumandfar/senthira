export default function UAIOffer() {
  return (
    <section id="demo" className="w-full py-16 md:py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-gray-100">
            What You Actually Get
          </h2>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Real tools that work with your existing workflow, not just promises.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Embedded Chatbot */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">💬</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Embedded Chatbot
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Seamlessly integrated AI assistant that learns your business and helps customers instantly.
            </p>
          </div>

          {/* Workflow Automation */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Workflow Automation
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Connect with Zapier, Make, and your favorite tools to automate repetitive tasks.
            </p>
          </div>

          {/* Client-facing Pages */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📄</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Client-facing Pages
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Beautiful Notion pages and landing pages that showcase your AI capabilities.
            </p>
          </div>

          {/* Reporting Dashboard */}
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-lg flex items-center justify-center mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-gray-100">
              Reporting Dashboard
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Real-time analytics and insights to track performance and optimize your AI systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
} 