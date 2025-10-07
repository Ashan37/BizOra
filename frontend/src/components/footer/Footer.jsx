import React from "react";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 text-gray-300 bg-gradient-to-b from-gray-900 to-gray-950">

      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">

          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text">
              BizOra
            </h3>
            <p className="text-sm leading-relaxed text-gray-400">
              Your AI-powered business analytics platform. Transform data into actionable insights and make smarter decisions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400" aria-label="LinkedIn">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400" aria-label="Twitter">
                <FaTwitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400" aria-label="Facebook">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 transition-colors hover:text-cyan-400" aria-label="Instagram">
                <FaInstagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Blog
                </a>
              </li>
              <li>
                <a href="#careers" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Careers
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#help" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#docs" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#faq" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#api" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  API Documentation
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-semibold text-white">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <FaMapMarkerAlt className="w-4 h-4 mt-1 text-cyan-400" />
                <span className="text-sm text-gray-400">
                 Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <FaPhone className="w-4 h-4 text-cyan-400" />
                <a href="tel:+1234567890" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  +94 77 123 4567
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="w-4 h-4 text-cyan-400" />
                <a href="mailto:info@bizora.com" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                  info@bizora.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800">
        <div className="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
            <p className="text-sm text-gray-400">
              &copy; {currentYear} BizOra. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center space-x-6">
              <a href="#privacy" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                Terms of Service
              </a>
              <a href="#cookies" className="text-sm text-gray-400 transition-colors hover:text-cyan-400">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

