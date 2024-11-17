import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Instagram, Globe, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400">
              Best Tiny House Calculators provides expert guidance and tools for your tiny house journey.
              Owned and operated by Fiftyknots LLC.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://bit.ly/craftsman_tiny_homes" className="text-gray-400 hover:text-white">
                  Get Free Quote
                </a>
              </li>
              <li>
                <a href="https://bit.ly/truoba_plans" className="text-gray-400 hover:text-white">
                  House Plans
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy-policy" className="text-gray-400 hover:text-white">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-400 hover:text-white">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="text-gray-400 hover:text-white">
                  Disclaimer
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-gray-400 hover:text-white">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link to="/affiliate-disclosure" className="text-gray-400 hover:text-white">
                  Affiliate Disclosure
                </Link>
              </li>
              <li>
                <Link to="/accessibility" className="text-gray-400 hover:text-white">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-400">
                <MapPin className="h-5 w-5 mr-2" />
                <address className="not-italic">
                  Tiny House Ventures<br />
                  Innovation Plaza, SE Tech Lane<br />
                  Portland, Oregon, USA
                </address>
              </li>
              <li className="flex items-center text-gray-400">
                <Mail className="h-5 w-5 mr-2" />
                <a href="mailto:hello@fiftyknots.com" className="hover:text-white">
                  hello@fiftyknots.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.linkedin.com/company/fiftyknots/" 
                 className="text-gray-400 hover:text-white">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.instagram.com/fiftyknots_ventures/" 
                 className="text-gray-400 hover:text-white">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://fiftyknots.com/" 
                 className="text-gray-400 hover:text-white">
                <Globe className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-400 text-sm text-center">
            © {new Date().getFullYear()} Best Tiny House Calculators. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}