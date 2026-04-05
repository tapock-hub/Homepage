import React from 'react';
import { Target, AlertCircle, Star, Zap } from 'lucide-react';

const ProjectDescription = () => {
  const cards = [
    {
      icon: Target,
      title: 'What is our product?',
      description: 'An AI-powered digital assistant that works directly inside Telegram. It allows business owners to manage schedules, client records, inventory, and financial data through simple text messages.',
      color: 'blue',
    },
    {
      icon: AlertCircle,
      title: 'What problem does it solve?',
      description: 'Small businesses often rely on paper notebooks or unstructured methods, creating risks of data loss, no analytics, difficulty tracking performance, and increased human errors.',
      color: 'red',
    },
    {
      icon: Star,
      title: 'Why is this important?',
      description: 'Small businesses fail not due to lack of ideas, but poor management. Our bot helps entrepreneurs make better decisions, reduce stress, and improve efficiency for sustainable growth.',
      color: 'yellow',
    },
    {
      icon: Zap,
      title: 'What makes us unique?',
      description: 'Telegram-based interface (no new platforms), AI-powered natural interaction, fast minimal setup, integrated system (scheduling + inventory + finance), and focused on real entrepreneur needs.',
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-50 text-blue-600',
    red: 'bg-red-50 text-red-600',
    yellow: 'bg-yellow-50 text-yellow-600',
    green: 'bg-green-50 text-green-600',
  };

  return (
    <section id="description" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Project Description
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how AI Business Assistant transforms small business management
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`inline-flex p-4 rounded-xl ${colorClasses[card.color]} mb-6`}>
                <card.icon size={28} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {card.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectDescription;
