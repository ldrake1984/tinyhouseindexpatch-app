import React from 'react';
import { Menu, Home, Calculator, X, Menu as MenuIcon } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <a href="/" className="flex items-center space-x-2">
              <Home className="h-6 w-6 text-teal-600" />
              <span className="font-bold text-xl text-gray-800">Best Tiny House Calculators</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3 mr-6">
              <a href="https://bit.ly/craftsman_tiny_homes" 
                 className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium">
                Get Free Quote
              </a>
              <a href="https://bit.ly/truoba_plans"
                 className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium">
                House Plans
              </a>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                <span>General Calculators</span>
                <Menu className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/tiny-house-cost-calculator" 
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">
                  Cost Calculator
                </a>
                <a href="/diy-tiny-house-cost-calculator" 
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">
                  DIY Cost Calculator
                </a>
                <a href="/tiny-home-solar-calculator" 
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">
                  Solar Calculator
                </a>
              </div>
            </div>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md font-medium">
                <span>Finance Calculators</span>
                <Menu className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <a href="/tiny-house-financing-calculator" 
                   className="block px-4 py-2 text-sm text-gray-700 hover:bg-teal-50">
                  Financing Calculator
                </a>
              </div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <div className="flex flex-col space-y-2 px-3 py-2">
              <a href="https://bit.ly/craftsman_tiny_homes" 
                 className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors font-medium text-center">
                Get Free Quote
              </a>
              <a href="https://bit.ly/truoba_plans"
                 className="bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors font-medium text-center">
                House Plans
              </a>
            </div>
            <a href="/tiny-house-cost-calculator"
               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
              Cost Calculator
            </a>
            <a href="/diy-tiny-house-cost-calculator"
               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
              DIY Cost Calculator
            </a>
            <a href="/tiny-home-solar-calculator"
               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
              Solar Calculator
            </a>
            <a href="/tiny-house-financing-calculator"
               className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900">
              Financing Calculator
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}