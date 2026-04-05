import React from 'react';
import { Code, Cpu, Database, Zap } from 'lucide-react';

const TechnicalRequirements = () => {
  const technologies = [
    {
      icon: Code,
      name: 'Python',
      category: 'Programming Language',
      description: 'Core backend development',
    },
    {
      icon: Cpu,
      name: 'aiogram',
      category: 'Framework',
      description: 'Telegram Bot API integration',
    },
    {
      icon: Database,
      name: 'PostgreSQL / SQLite',
      category: 'Database',
      description: 'Secure business data storage',
    },
    {
      icon: Zap,
      name: 'OpenAI API',
      category: 'AI Processing',
      description: 'Natural language understanding',
    },
  ];

  const systemFeatures = [
    {
      title: 'Schedule Management',
      features: ['Create, edit, delete appointments', 'Daily/weekly schedule views', 'Efficient time organization'],
    },
    {
      title: 'Client Records',
      features: ['Store customer details', 'Interaction history', 'Quick information access'],
    },
    {
      title: 'Inventory Management',
      features: ['Add/remove products', 'Track stock levels', 'Low-stock identification'],
    },
    {
      title: 'Financial Tracking',
      features: ['Record income & expenses', 'Profit/loss calculation', 'Basic financial insights'],
    },
    {
      title: 'AI Chat Interaction',
      features: ['Natural language commands', 'Structured data conversion', 'Clear confirmations'],
    },
  ];

  return (
    <section id="technical" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Technical & Functional Requirements
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Built with modern, reliable technologies for optimal performance
          </p>
        </div>

        {/* Technologies */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Technologies Used
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="bg-blue-50 text-blue-600 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <tech.icon size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  {tech.name}
                </h4>
                <p className="text-sm text-blue-600 font-medium mb-2">
                  {tech.category}
                </p>
                <p className="text-sm text-gray-600">
                  {tech.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white rounded-2xl p-6">
            <div className="grid md:grid-cols-3 gap-4 text-center">
              <div className="border-r border-gray-200 pr-4">
                <p className="text-sm text-gray-600 mb-1">Version Control</p>
                <p className="font-semibold text-gray-900">GitHub</p>
              </div>
              <div className="border-r border-gray-200 pr-4">
                <p className="text-sm text-gray-600 mb-1">Deployment</p>
                <p className="font-semibold text-gray-900">Railway Cloud</p>
              </div>
              <div>
                <p className="text-sm text-gray-600 mb-1">Frontend</p>
                <p className="font-semibold text-gray-900">HTML, CSS</p>
              </div>
            </div>
          </div>
        </div>

        {/* System Features */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            System Functionalities
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {systemFeatures.map((feature, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border-l-4 border-blue-600"
              >
                <h4 className="text-lg font-bold text-gray-900 mb-4">
                  {feature.title}
                </h4>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start">
                      <span className="text-blue-600 mr-2 mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalRequirements;
