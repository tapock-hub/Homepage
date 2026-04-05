import React from 'react';
import { Calendar, TrendingUp, CheckCircle } from 'lucide-react';

const AdditionalInfo = () => {
  const timeline = [
    { phase: 'Research & Validation', status: 'completed' },
    { phase: 'System Design', status: 'completed' },
    { phase: 'Bot Development', status: 'in-progress' },
    { phase: 'Database Integration', status: 'upcoming' },
    { phase: 'AI Integration', status: 'upcoming' },
    { phase: 'Testing Phase', status: 'upcoming' },
    { phase: 'MVP Launch', status: 'upcoming' },
  ];

  const futureImprovements = [
    {
      title: 'Voice Commands',
      description: 'Enable hands-free interaction with voice messages',
      priority: 'high',
    },
    {
      title: 'Advanced Analytics',
      description: 'Detailed business insights and performance dashboards',
      priority: 'high',
    },
    {
      title: 'Google Calendar Integration',
      description: 'Sync appointments with Google Calendar automatically',
      priority: 'medium',
    },
    {
      title: 'Web Dashboard',
      description: 'Full-featured web interface for desktop users',
      priority: 'medium',
    },
    {
      title: 'Mobile App',
      description: 'Native mobile application for iOS and Android',
      priority: 'low',
    },
    {
      title: 'Multi-language Support',
      description: 'Support for multiple languages including Kazakh and Russian',
      priority: 'high',
    },
  ];

  const priorityColors = {
    high: 'bg-red-100 text-red-700 border-red-200',
    medium: 'bg-yellow-100 text-yellow-700 border-yellow-200',
    low: 'bg-green-100 text-green-700 border-green-200',
  };

  const statusStyles = {
    completed: 'bg-green-500',
    'in-progress': 'bg-blue-500',
    upcoming: 'bg-gray-300',
  };

  return (
    <section id="additional" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Additional Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Project timeline and future roadmap
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div>
            <div className="flex items-center mb-8">
              <Calendar className="text-blue-600 mr-3" size={32} />
              <h3 className="text-3xl font-bold text-gray-900">
                Development Timeline
              </h3>
            </div>

            <div className="space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="flex flex-col items-center mr-4">
                    <div
                      className={`w-4 h-4 rounded-full ${statusStyles[item.status]} ring-4 ring-opacity-20 ${
                        item.status === 'completed' ? 'ring-green-500' :
                        item.status === 'in-progress' ? 'ring-blue-500' :
                        'ring-gray-300'
                      }`}
                    ></div>
                    {index < timeline.length - 1 && (
                      <div className="w-0.5 h-16 bg-gray-200 mt-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="mb-2">
                      <h4 className="font-bold text-gray-900">{item.phase}</h4>
                    </div>
                    <div className="flex items-center space-x-2">
                      {item.status === 'completed' && (
                        <>
                          <CheckCircle className="text-green-500" size={16} />
                          <span className="text-sm text-green-600 font-medium">Completed</span>
                        </>
                      )}
                      {item.status === 'in-progress' && (
                        <span className="text-sm text-blue-600 font-medium">In Progress</span>
                      )}
                      {item.status === 'upcoming' && (
                        <span className="text-sm text-gray-500">Upcoming</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Future Improvements */}
          <div>
            <div className="flex items-center mb-8">
              <TrendingUp className="text-blue-600 mr-3" size={32} />
              <h3 className="text-3xl font-bold text-gray-900">
                Future Improvements
              </h3>
            </div>

            <div className="space-y-4">
              {futureImprovements.map((improvement, index) => (
                <div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:shadow-md transition-shadow"
                >
                  <h4 className="font-bold text-gray-900 text-lg mb-3">
                    {improvement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {improvement.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6">
              <p className="text-sm text-gray-700 leading-relaxed">
                <strong>Note:</strong> These improvements are based on sponsor feedback and user research. Priority levels reflect the potential impact on small business operations and user needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdditionalInfo;
