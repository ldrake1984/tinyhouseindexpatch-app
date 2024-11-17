import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Home as HomeIcon, DollarSign, Wrench, Wallet } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import ExitPopup from '../components/ExitPopup';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 bg-gradient-to-br from-teal-600 to-teal-800">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Best Tiny House Calculators
          </h1>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Professional tools to plan and budget your tiny house project with confidence
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="https://bit.ly/craftsman_tiny_homes"
              className="bg-white text-teal-800 px-6 py-3 rounded-lg hover:bg-teal-50 transition-colors font-medium"
            >
              Get Free Quote
            </a>
            <a
              href="https://bit.ly/truoba_plans"
              className="bg-teal-700 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors font-medium"
            >
              View House Plans
            </a>
          </div>
        </div>
      </section>

      {/* Calculators Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Our Calculator Suite
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link 
              to="/tiny-house-cost-calculator"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <DollarSign className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Cost Calculator
              </h3>
              <p className="text-gray-600">
                Estimate the total cost of your tiny house based on size, materials, and location.
              </p>
            </Link>

            <Link 
              to="/diy-tiny-house-cost-calculator"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Wrench className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                DIY Cost Calculator
              </h3>
              <p className="text-gray-600">
                Calculate costs for building your own tiny house, including materials and tools.
              </p>
            </Link>

            <Link 
              to="/tiny-house-financing-calculator"
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <Wallet className="h-8 w-8 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Financing Calculator
              </h3>
              <p className="text-gray-600">
                Plan your tiny house financing with monthly payment estimates and loan terms.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Why Use Our Calculators?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center">
              <Calculator className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Accurate Estimates
              </h3>
              <p className="text-gray-600">
                Get precise calculations based on real market data and industry expertise.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <HomeIcon className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Professional Guidance
              </h3>
              <p className="text-gray-600">
                Access expert insights and recommendations throughout your planning process.
              </p>
            </div>
            <div className="flex flex-col items-center text-center">
              <Wrench className="h-12 w-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Easy to Use
              </h3>
              <p className="text-gray-600">
                Simple, intuitive interfaces designed for both beginners and experts.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ExitPopup />
    </div>
  );
}