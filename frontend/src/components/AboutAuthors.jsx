import React from 'react';
import { Users, Heart } from 'lucide-react';

const AboutAuthors = () => {
  const authors = [
    {
      name: 'Asain',
      role: 'Development and Social Impact Manager',
      initial: 'A',
      color: 'blue',
      photo: 'https://customer-assets.emergentagent.com/job_ai-biz-assistant-3/artifacts/papniroq_WhatsApp%20Image%202026-03-30%20at%2013.03.59.jpeg',
      responsibilities: [
        'Strategic development of AI Assistant',
        'Integration into real business environment',
        'Conducting sponsor and user interviews',
        'Ensuring ethical and social expectations are met',
      ],
      motivation: [
        'Personal connection to family businesses using paper notebooks',
        'Concern about data security and loss of paper records',
        'Desire to support local entrepreneurs in scaling their brands',
        'Making digital tools accessible to people of all ages',
      ],
    },
    {
      name: 'Bayet',
      role: 'Programmer and AI Training',
      initial: 'B',
      color: 'green',
      photo: 'https://customer-assets.emergentagent.com/job_ai-biz-assistant-3/artifacts/t7k8xmtb_photo_2026-04-05_15-01-24.jpg',
      responsibilities: [
        'Developing user-friendly and functional interface',
        'Application development for end users',
        'Training AI for better context extraction',
        'Database management and optimization',
      ],
      motivation: [
        'Personal connection to family businesses using manual methods',
        'Personal interest in programming and development',
        'Gaining valuable experience for studies',
        'Creating practical solutions for real-world problems',
      ],
    },
  ];

  const colorClasses = {
    blue: 'bg-blue-600',
    green: 'bg-green-600',
  };

  return (
    <section id="authors" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Users className="text-blue-600 mr-3" size={40} />
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              About the Authors
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the passionate team behind AI Business Assistant
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {authors.map((author, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header with gradient */}
              <div className={`${colorClasses[author.color]} px-8 py-12 text-center relative overflow-hidden`}>
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 left-0 w-40 h-40 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="absolute bottom-0 right-0 w-40 h-40 bg-white rounded-full translate-x-1/2 translate-y-1/2"></div>
                </div>
                <div className="relative">
                  {author.photo ? (
                    <img
                      src={author.photo}
                      alt={author.name}
                      className="w-36 h-36 rounded-full mx-auto mb-4 object-cover border-4 border-white shadow-lg"
                    />
                  ) : (
                    <div className="w-36 h-36 bg-white text-gray-900 rounded-full flex items-center justify-center text-5xl font-bold mx-auto mb-4">
                      {author.initial}
                    </div>
                  )}
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {author.name}
                  </h3>
                  <p className="text-white opacity-90 font-medium">
                    {author.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <div className="mb-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-4">
                    Role & Responsibilities:
                  </h4>
                  <ul className="space-y-2">
                    {author.responsibilities.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className={`${colorClasses[author.color]} w-1.5 h-1.5 rounded-full mr-3 mt-1.5`}></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <div className="flex items-center mb-4">
                    <Heart className="text-red-500 mr-2" size={20} />
                    <h4 className="text-lg font-bold text-gray-900">
                      Why This Project:
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {author.motivation.map((item, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start">
                        <span className="text-red-500 mr-2">♥</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Mission */}
        <div className="mt-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-3xl p-8 lg:p-12 text-center text-white">
          <h3 className="text-3xl font-bold mb-4">Our Shared Mission</h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            We are united by a common goal: to help small business owners transition from chaotic manual systems to structured, efficient digital management. Our personal connections to family businesses drive our passion to create accessible, simple, and powerful tools that make a real difference.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutAuthors;
