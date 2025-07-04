const founders = [
  {
    name: 'Navid Broumandfar',
    role: 'CEO & Co-Founder',
    description:
      'CEO & Co-Founder – Tech-driven strategist and hands-on data architect. Navid leads the product and AI development roadmap, from model design to deployment. He bridges business vision with deep technical execution.',
  },
  {
    name: 'Hadi Rahmanian',
    role: 'CTO & Co-founder',
    description:
      'CTO & Co-Founder – Frontend developer and UX strategist. Hadi focuses on delivering intuitive user experiences and robust interface architectures, collaborating on every technical decision.',
  },
];

export default function About() {
  return (
    <section id="about" className="w-full max-w-4xl mx-auto py-16 md:py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-900 dark:text-gray-100">Meet the Founders</h2>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center">
        {founders.map((f) => (
          <div
            key={f.name}
            className="flex flex-col items-center bg-white dark:bg-gray-900 rounded-xl shadow p-6 w-full md:w-1/2 max-w-sm border border-gray-100 dark:border-gray-800"
          >
            <div className="w-20 h-20 rounded-full bg-gray-200 dark:bg-gray-800 flex items-center justify-center mb-4">
              {/* Avatar placeholder */}
              <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-400 dark:text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12c2.7 0 4.5-1.8 4.5-4.5S14.7 3 12 3 7.5 4.8 7.5 7.5 9.3 12 12 12zm0 2c-3 0-9 1.5-9 4.5V21h18v-2.5c0-3-6-4.5-9-4.5z" />
              </svg>
            </div>
            <div className="text-xl font-semibold mb-1 text-gray-900 dark:text-gray-100">{f.name}</div>
            <div className="text-blue-600 dark:text-blue-400 font-medium mb-2">{f.role}</div>
            <div className="text-gray-600 dark:text-gray-300 text-center text-sm">{f.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
} 