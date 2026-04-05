import React, { useState, useEffect } from 'react';
import { Send } from 'lucide-react';

const PrototypeSection = () => {
  const [messages, setMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const chatSequence = [
    {
      type: 'user',
      text: 'Add client Ali tomorrow at 15:00',
      delay: 500,
    },
    {
      type: 'bot',
      text: '✓ Appointment added successfully!\n\n📅 Client: Ali\n🕐 Time: Tomorrow, 15:00',
      delay: 1500,
    },
    {
      type: 'user',
      text: 'Add 50 units of Product A to inventory',
      delay: 2000,
    },
    {
      type: 'bot',
      text: '✓ Inventory updated!\n\n📦 Product: Product A\n📊 New Stock: 50 units',
      delay: 1500,
    },
    {
      type: 'user',
      text: 'Record expense 5000 for supplies',
      delay: 2000,
    },
    {
      type: 'bot',
      text: '✓ Expense recorded!\n\n💰 Amount: 5,000\n📝 Category: Supplies\n📊 Updated balance available',
      delay: 1500,
    },
  ];

  useEffect(() => {
    if (currentIndex < chatSequence.length) {
      const timer = setTimeout(() => {
        setMessages((prev) => [...prev, chatSequence[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, chatSequence[currentIndex].delay);

      return () => clearTimeout(timer);
    } else {
      // Reset animation after all messages
      const resetTimer = setTimeout(() => {
        setMessages([]);
        setCurrentIndex(0);
      }, 5000);

      return () => clearTimeout(resetTimer);
    }
  }, [currentIndex]);

  return (
    <section id="prototype" className="py-20 px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Interactive Prototype
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See our AI assistant in action through this Telegram chat simulation
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Telegram Chat Mockup */}
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl shadow-2xl overflow-hidden">
            {/* Telegram Header */}
            <div className="bg-blue-600 px-6 py-4 flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold">
                AI
              </div>
              <div className="flex-1">
                <div className="text-white font-semibold">AI Business Assistant</div>
                <div className="text-blue-100 text-sm">online</div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="bg-gray-100 p-6 h-[500px] overflow-y-auto">
              <div className="space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-gray-500 mt-32">
                    <div className="text-4xl mb-4">💬</div>
                    <p>Chat animation starting...</p>
                  </div>
                )}

                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'} animate-fade-in`}
                  >
                    <div
                      className={`max-w-[75%] rounded-2xl px-4 py-3 ${
                        message.type === 'user'
                          ? 'bg-blue-600 text-white rounded-br-sm'
                          : 'bg-white text-gray-800 rounded-bl-sm shadow-md'
                      }`}
                    >
                      <p className="whitespace-pre-line text-sm leading-relaxed">
                        {message.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Input Area */}
            <div className="bg-white px-6 py-4 flex items-center space-x-3 border-t">
              <input
                type="text"
                placeholder="Type a message..."
                className="flex-1 bg-gray-100 rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled
              />
              <button className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors">
                <Send size={18} />
              </button>
            </div>
          </div>

          <p className="text-center text-gray-500 mt-6 text-sm">
            This is a simulated demonstration of how users interact with the bot
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
