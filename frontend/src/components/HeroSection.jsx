import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              <MessageSquare size={16} />
              <span>Telegram-Based AI Assistant</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Manage Your Business With
              <span className="text-blue-600"> AI Assistant</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              An intelligent Telegram bot designed to help small business owners manage and automate their daily operations in a simple and efficient way.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#functionality"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 font-semibold group"
              >
                See How It Works
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#prototype"
                className="inline-flex items-center justify-center border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-50 transition-all duration-200 font-semibold"
              >
                View Demo
              </a>
            </div>
            
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-600">100%</div>
                <div className="text-sm text-gray-600 mt-1">Telegram-Based</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">AI</div>
                <div className="text-sm text-gray-600 mt-1">Powered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600">24/7</div>
                <div className="text-sm text-gray-600 mt-1">Available</div>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-3xl transform rotate-3 opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1648747067003-0e4660db791f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njl8MHwxfHNlYXJjaHwzfHxzbWFsbCUyMGJ1c2luZXNzJTIwdGVjaG5vbG9neXxlbnwwfHx8fDE3NzUzODUwNDV8MA&ixlib=rb-4.1.0&q=85"
              alt="AI Business Assistant"
              className="relative rounded-3xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
