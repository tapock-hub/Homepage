import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { Rocket, MessageSquare, ExternalLink, CheckCircle2, Lightbulb } from 'lucide-react';

const DevelopmentProcess = () => {
  const versions = [
    {
      version: 'Alpha Version',
      color: 'red',
      features: [
        'Works on simple AI gemma-3',
        'Works offline using LM Studio server',
        'Has 2 functions: "add client {name} {date} {time}" and "show clients"',
        'Slow performance',
        'Limited functionality',
      ],
      limitations: 'It was slow and did not have most of functionality.',
    },
    {
      version: 'Beta Version',
      color: 'yellow',
      improvements: [
        "Changed from LM Studio server to OpenAI's GPT-4o model",
        'Faster response times',
        'Conversation memory - remembers messages and context',
        'No command syntax required - makes decisions from natural language',
        'Added ability to delete customer records',
        'Added warehouse management commands',
        'Bot analyzes message context and uses special functions to interact with database',
      ],
      summary: 'Faster, smarter, more commands, remembers conversations.',
    },
    {
      version: 'Final Version',
      color: 'green',
      features: [
        {
          title: 'Editing Appointments',
          description: 'Reschedule clients to another date, change time, or change name - individually or all at once',
        },
        {
          title: 'Conflict Checking',
          description: 'Bot checks if time is available when making/rescheduling appointments. Alerts and asks what to do instead of silently overwriting',
        },
        {
          title: 'Reminders',
          description: 'Background process checks schedule every minute and sends notifications to all employees 60 and 30 minutes before appointments',
        },
        {
          title: 'Employee Registration',
          description: 'Everyone who types /start is saved in database and automatically begins receiving reminders',
        },
      ],
    },
  ];

  const feedback = [
    {
      version: 'Alpha Version',
      videoUrl: 'https://youtu.be/5H2J-nX4gZ8?si=6hdU9WqaGvCoArUH',
      sponsorFeedback: ['Make it faster', 'Easier to use for users'],
    },
    {
      version: 'Beta Version',
      videos: [
        { label: 'Sponsor Interview', url: 'https://youtu.be/qItWceCEgFc' },
        { label: 'User 1 Testing', url: 'https://youtu.be/77TLqNSKDD0' },
        { label: 'User 2 Testing', url: 'https://youtu.be/ljYgd7a_FL0' },
      ],
      summary: 'Better than was. More easier to use. Add more functions.',
    },
  ];

  const reflections = [
    {
      question: 'What improved the most from Alpha to Final?',
      answer: 'The most improved was the understanding of AI assistant of context, and added more tools, functions to work with database.',
    },
    {
      question: 'What feedback was most useful?',
      answer: 'The first one. Sponsor said to make it faster and more easier to use.',
    },
    {
      question: 'What would you still improve?',
      answer: 'We can add something like financial tracking. Bot will count income and losses.',
    },
  ];

  const colorClasses = {
    red: 'bg-red-50 border-red-200 text-red-700',
    yellow: 'bg-yellow-50 border-yellow-200 text-yellow-700',
    green: 'bg-green-50 border-green-200 text-green-700',
  };

  return (
    <section id="development-process" className="py-20 px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Development Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our journey from concept to a fully functional AI assistant
          </p>
        </div>

        {/* Part 1: Version Timeline */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <Rocket className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">Version Timeline</h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {versions.map((version, index) => (
              <div
                key={index}
                className={`border-2 rounded-2xl p-6 ${colorClasses[version.color]}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-2xl font-bold text-gray-900">
                    {version.version}
                  </h4>
                  {version.color === 'green' && (
                    <CheckCircle2 className="text-green-600" size={28} />
                  )}
                </div>

                {/* Alpha Version */}
                {version.features && version.limitations && (
                  <div>
                    <ul className="space-y-2 mb-4">
                      {version.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="mr-2">•</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm italic text-gray-600 bg-white bg-opacity-50 p-3 rounded-lg">
                      {version.limitations}
                    </p>
                  </div>
                )}

                {/* Beta Version */}
                {version.improvements && (
                  <div>
                    <ul className="space-y-2 mb-4">
                      {version.improvements.map((improvement, idx) => (
                        <li key={idx} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">→</span>
                          <span>{improvement}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm font-semibold text-gray-800 bg-white bg-opacity-50 p-3 rounded-lg">
                      {version.summary}
                    </p>
                  </div>
                )}

                {/* Final Version */}
                {version.color === 'green' && (
                  <div className="space-y-4">
                    {version.features.map((feature, idx) => (
                      <div key={idx} className="bg-white bg-opacity-70 p-4 rounded-lg">
                        <h5 className="font-bold text-gray-900 mb-2">{feature.title}</h5>
                        <p className="text-sm text-gray-700">{feature.description}</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: Feedback Evidence */}
        <div className="mb-16">
          <div className="flex items-center mb-8">
            <MessageSquare className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">Feedback Evidence</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {feedback.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  {item.version}
                </h4>

                {/* Alpha Feedback */}
                {item.videoUrl && (
                  <div>
                    <a
                      href={item.videoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 mb-4 font-medium"
                    >
                      <ExternalLink size={18} />
                      <span>Watch Alpha Demo</span>
                    </a>
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Sponsor Feedback:
                      </p>
                      <ul className="space-y-1">
                        {item.sponsorFeedback.map((fb, idx) => (
                          <li key={idx} className="text-sm text-gray-700">
                            - {fb}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Beta Feedback */}
                {item.videos && (
                  <div>
                    <div className="space-y-3 mb-4">
                      {item.videos.map((video, idx) => (
                        <a
                          key={idx}
                          href={video.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium"
                        >
                          <ExternalLink size={18} />
                          <span>{video.label}</span>
                        </a>
                      ))}
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm font-semibold text-gray-900 mb-2">
                        Summary:
                      </p>
                      <p className="text-sm text-gray-700">{item.summary}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Part 3: Final Reflection */}
        <div className="mb-12">
          <div className="flex items-center mb-8">
            <Lightbulb className="text-blue-600 mr-3" size={32} />
            <h3 className="text-3xl font-bold text-gray-900">Final Reflection</h3>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {reflections.map((item, index) => (
              <AccordionItem
                key={index}
                value={`reflection-${index}`}
                className="bg-white border border-gray-200 rounded-xl px-6"
              >
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold text-gray-900 text-lg">
                    {item.question}
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-2 pb-4">
                    <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Try It Button */}
        <div className="text-center">
          <a
            href="https://t.me/liemlbot"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-12 py-5 rounded-2xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 font-bold text-lg shadow-xl hover:shadow-2xl hover:-translate-y-1"
          >
            <MessageSquare size={24} />
            <span>Try It on Telegram</span>
            <ExternalLink size={20} />
          </a>
          <p className="text-gray-600 mt-4">
            Experience the AI Business Assistant yourself
          </p>
        </div>
      </div>
    </section>
  );
};

export default DevelopmentProcess;
