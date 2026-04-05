import React from 'react';
import { Calendar, Users, Package, DollarSign, MessageCircle, Database } from 'lucide-react';

const FunctionalityPresentation = () => {
  const features = [
    {
      icon: Calendar,
      title: 'Schedule Management',
      description: 'Create, edit, and delete appointments with natural language commands',
      benefits: ['Daily & weekly views', 'Smart reminders', 'Time optimization'],
    },
    {
      icon: Users,
      title: 'Client Records',
      description: 'Store customer details and interaction history effortlessly',
      benefits: ['Quick access', 'Complete history', 'Easy search'],
    },
    {
      icon: Package,
      title: 'Inventory Management',
      description: 'Track stock levels and get alerts for low inventory',
      benefits: ['Add/remove products', 'Stock tracking', 'Low-stock alerts'],
    },
    {
      icon: DollarSign,
      title: 'Financial Tracking',
      description: 'Record income, expenses, and calculate profit automatically',
      benefits: ['Income/expense logs', 'Profit calculation', 'Financial insights'],
    },
  ];

  const steps = [
    {
      number: '01',
      title: 'User Interaction',
      description: 'Send a message to the bot using natural language',
      example: '"Add client Ali tomorrow at 15:00"',
    },
    {
      number: '02',
      title: 'AI Processing',
      description: 'Bot understands your request and extracts key information',
      example: 'Time, name, action are identified',
    },
    {
      number: '03',
      title: 'Data Structuring',
      description: 'System converts message into structured data',
      example: 'Creates appointment record',
    },
    {
      number: '04',
      title: 'Database Storage',
      description: 'Data is securely saved to your business database',
      example: 'Permanent record created',
    },
    {
      number: '05',
      title: 'Confirmation',
      description: 'Bot responds with confirmation message',
      example: '"✓ Appointment added successfully"',
    },
  ];

  return (
    <section id="functionality" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Full Functionality
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See how our AI assistant works and what it can do for your business
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <div className="bg-blue-50 text-blue-600 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
                <feature.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 text-sm">
                {feature.description}
              </p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, idx) => (
                  <li key={idx} className="text-sm text-gray-500 flex items-center">
                    <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-2"></span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* How It Works */}
        <div className="bg-white rounded-3xl p-8 lg:p-12">
          <div className="flex items-center justify-center mb-8">
            <MessageCircle className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">
              How It Works: Step-by-Step
            </h3>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="bg-blue-600 text-white text-2xl font-bold w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    {step.number}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {step.description}
                  </p>
                  <div className="bg-blue-50 text-blue-700 text-xs px-3 py-2 rounded-lg">
                    {step.example}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-blue-600 to-blue-300 transform -translate-x-1/2"></div>
                )}
              </div>
            ))}
          </div>

          {/* System Logic */}
          <div className="mt-12 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 text-center">
            <div className="flex items-center justify-center space-x-4 text-lg font-semibold text-gray-800">
              <span>User Input</span>
              <span className="text-blue-600">→</span>
              <span>AI Processing</span>
              <span className="text-blue-600">→</span>
              <span>Data Structuring</span>
              <span className="text-blue-600">→</span>
              <span>Database</span>
              <span className="text-blue-600">→</span>
              <span>Output</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FunctionalityPresentation;
