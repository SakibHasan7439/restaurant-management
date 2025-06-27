import React from 'react';
import { Send, MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import ImageFooter from './ImageFooter';

const RestaurantFooter = () => {

  return (
    <footer className="bg-red-800 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Restaurant Info & Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">RESTAURANT</h3>
            <p className="text-red-100 mb-6">
              Subscribe our newsletter and get discount 25%off
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex mb-6">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 bg-white rounded-l-md text-gray-800 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              <button className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-r-md transition-colors">
                <Send size={20} />
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-red-700 hover:bg-red-600 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-500 hover:bg-blue-600 rounded-full flex items-center justify-center transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-500 hover:bg-orange-600 rounded-full flex items-center justify-center transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-red-600 hover:bg-red-700 rounded-full flex items-center justify-center transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Contact us</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin size={20} className="text-red-300 mt-1 flex-shrink-0" />
                <span className="text-red-100">3517 W. Gray St. Utica, Pennsylvania 57867</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={20} className="text-red-300 flex-shrink-0" />
                <span className="text-red-100">(480) 555 0103</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={20} className="text-red-300 flex-shrink-0" />
                <span className="text-red-100">M.Alyaqout@4house.Co</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock size={20} className="text-red-300 flex-shrink-0" />
                <span className="text-red-100">Sun - Sat / 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Links</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">About us</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Our Menu</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">Team</a></li>
              <li><a href="#" className="text-red-100 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Instagram Gallery */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Instagram Gallery</h3>
                <ImageFooter />
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-red-700">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-red-200 text-sm">
              Copyright © 2025. All rights reserved
            </p>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-red-200 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-red-200 hover:text-white transition-colors">Term of Use</a>
              <a href="#" className="text-red-200 hover:text-white transition-colors">Partner</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default RestaurantFooter;