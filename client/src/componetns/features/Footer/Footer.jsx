import React from 'react';
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full">
      {/* Main content section */}
      <div className="w-full bg-[#B88B6C] py-16">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
          {/* Logo section */}
          <div className="bg-white p-6 rounded-lg shadow-md w-48">
            <div className="flex flex-col items-center">
              <div className="relative">
                <div className="w-12 h-12 border-2 border-[#B88B6C] rounded-full flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#B88B6C] rounded-full flex items-center justify-center">
                    <div className="text-white text-xl">☺</div>
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#B88B6C]"></div>
              </div>
              <div className="mt-2 text-[#B88B6C] text-2xl font-script">captcharts</div>
            </div>
          </div>

          {/* Contact form section */}
          <div className="text-center text-white max-w-md">
            <h2 className="text-3xl font-semibold mb-3">Let's Connect!</h2>
            <p className="text-sm mb-6">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Type your Email..."
                className="flex-1 px-4 py-2 rounded-l-md text-gray-800 focus:outline-none"
              />
              <button className="bg-[#B88B6C] text-white px-6 py-2 rounded-r-md border-2 border-white font-medium hover:bg-[#A67B5B] transition-colors">
                Send
              </button>
            </div>
          </div>

          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <ArrowUp className="w-6 h-6 text-[#B88B6C]" />
          </button>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full border-t border-gray-200 py-4">
        <div className="max-w-6xl mx-auto px-4 flex items-center justify-between text-sm text-gray-600">
          <div className="flex items-center space-x-2">
            <span>Captcharts © 2023</span>
            <span>Powered by</span>
            <img src="/api/placeholder/20/20" alt="mit" className="h-4" />
            <span>mit</span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-gray-800">Terms</a>
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <a href="#" className="hover:text-gray-800">Support</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;