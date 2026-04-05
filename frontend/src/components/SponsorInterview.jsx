import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { ExternalLink, Quote } from 'lucide-react';

const SponsorInterview = () => {
  const highlights = [
    {
      question: 'What makes this project worthy of support?',
      answer: 'Supporting aspiring entrepreneurs, especially small brand owners who lack structured management systems. Supporting businesses at an early stage creates both economic and social value.',
      key: 'Empowering entrepreneurs with simple digital tools that reduce chaos and improve decision-making',
    },
    {
      question: 'Is paper-based tracking a critical barrier?',
      answer: 'When a business grows beyond 20–30 orders per day, manual tracking systems start to limit growth and become a serious bottleneck.',
      key: 'Paper systems create data loss risks, no analytics, and prevent scaling',
    },
    {
      question: 'What result would make this project successful?',
      answer: 'Helping small entrepreneurs move from chaotic manual management to structured, data-driven decision-making. Demonstrating reduced inventory errors, time savings of 30–40%, and improved visibility of real profit.',
      key: 'Clear measurable impact on business efficiency and profitability',
    },
    {
      question: 'What additional function is critically important?',
      answer: 'Cash flow tracking combined with simple financial insights. Businesses often fail because owners don\'t clearly understand their real profit, margins, and expenses versus income.',
      key: 'Answer the question: "How much did I really earn this month?"',
    },
  ];

  return (
    <section id="sponsor" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Sponsor Interview
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Key insights from our sponsor at Riviera International School
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Sponsor Info */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8">
            <div className="flex items-start space-x-4 mb-6">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold">
                G
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Gulmira Talgatovna
                </h3>
                <p className="text-blue-600 font-medium">
                  Coordinator at Riviera International School
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 mb-6">
              <Quote className="text-blue-600 mb-4" size={32} />
              <p className="text-gray-700 italic leading-relaxed">
                "The most valuable part of this project is supporting aspiring entrepreneurs. Empowering entrepreneurs with simple digital tools that reduce chaos, increase transparency, and improve decision-making has a much deeper long-term impact."
              </p>
            </div>

            <a
              href="https://youtu.be/Z9qEON57IkE"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold"
            >
              <ExternalLink size={20} />
              <span>Watch Full Interview</span>
            </a>

            <p className="text-sm text-gray-600 mt-4 text-center">
              Interview Date: February 22, 2026
            </p>
          </div>

          {/* Right: Key Highlights */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Key Highlights from Interview
            </h3>
            <Accordion type="single" collapsible className="space-y-4">
              {highlights.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white border border-gray-200 rounded-xl px-6"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-gray-900">
                      {item.question}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pt-2 pb-4">
                      <p className="text-gray-600 mb-3">
                        {item.answer}
                      </p>
                      <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
                        <p className="text-sm font-medium text-blue-900">
                          Key Insight: {item.key}
                        </p>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorInterview;
