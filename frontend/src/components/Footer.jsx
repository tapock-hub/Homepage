import React from 'react';
import { Github, Mail, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">AI Business Assistant</h3>
            <p className="text-gray-400 leading-relaxed">
              Empowering small businesses through intelligent automation and simple digital tools.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#description" className="text-gray-400 hover:text-white transition-colors">
                  About Project
                </a>
              </li>
              <li>
                <a href="#functionality" className="text-gray-400 hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#prototype" className="text-gray-400 hover:text-white transition-colors">
                  Prototype
                </a>
              </li>
              <li>
                <a href="#authors" className="text-gray-400 hover:text-white transition-colors">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="space-y-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Github size={20} />
                <span>GitHub Repository</span>
              </a>
              <a
                href="mailto:contact@aibusinessassistant.com"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <Mail size={20} />
                <span>contact@aibusinessassistant.com</span>
              </a>
              <a
                href="https://youtu.be/Z9qEON57IkE"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink size={20} />
                <span>Sponsor Interview</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2026 AI Business Assistant. Created by Asain & Bayet.
          </p>
          <p className="text-gray-400 text-sm">
            Riviera International School Project
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
