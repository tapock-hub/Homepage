import React from 'react';
import { Calendar, CheckCircle } from 'lucide-react';

const AdditionalInfo = () => {
  const timeline = [
    { phase: 'Research & Validation', status: 'completed' },
    { phase: 'System Design', status: 'completed' },
    { phase: 'Bot Development', status: 'completed' },
    { phase: 'Database Integration', status: 'completed' },
    { phase: 'AI Integration', status: 'completed' },
    { phase: 'Testing Phase', status: 'completed' },
    { phase: 'MVP Launch', status: 'completed' },
  ];

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
            Development Timeline
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our project journey from concept to completion
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="flex items-center mb-8">
            <Calendar className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">
              Project Phases
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
      </div>
    </section>
  );
};

export default AdditionalInfo;
