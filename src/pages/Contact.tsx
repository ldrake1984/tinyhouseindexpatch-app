import React from 'react';
import { Mail, MapPin, Globe } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Contact Us</h1>
          
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-xl font-semibold mb-4">Get in Touch</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Business Address</h3>
                      <address className="not-italic text-gray-600">
                        Tiny House Ventures<br />
                        Innovation Plaza, SE Tech Lane<br />
                        Portland, Oregon, USA
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Email</h3>
                      <a href="mailto:hello@fiftyknots.com" className="text-teal-600 hover:text-teal-700">
                        hello@fiftyknots.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Globe className="h-6 w-6 text-teal-600 mt-1 mr-3" />
                    <div>
                      <h3 className="font-medium">Website</h3>
                      <a href="https://www.besttinyhousecalculators.com" className="text-teal-600 hover:text-teal-700">
                        www.besttinyhousecalculators.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-4">Send Us a Message</h2>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                    <textarea
                      id="message"
                      rows={4}
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500"
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-teal-600 text-white px-4 py-2 rounded-md hover:bg-teal-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}