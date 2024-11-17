import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SolarCalculator from '../components/SolarCalculator';
import ExitPopup from '../components/ExitPopup';
import { ShoppingCart } from 'lucide-react';

export default function SolarCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tiny Home Solar Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate the perfect solar system size and cost for your tiny home with our comprehensive solar calculator.
              Get accurate estimates for your tiny home solar power needs.
            </p>
          </div>

          <SolarCalculator />

          <div className="mt-8 mb-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://bit.ly/sinature_solar_tiny_house"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
            >
              Tiny House Solar Kits
            </a>
            <a
              href="https://bit.ly/truoba_plans"
              className="bg-gray-100 text-gray-900 px-8 py-4 rounded-lg hover:bg-gray-200 transition-colors font-medium text-lg"
            >
              View House Plans
            </a>
          </div>

          <div className="mb-16 text-center">
            <a
              href="https://amzn.to/3AKoQPT"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors font-medium text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="h-6 w-6" />
              Check Solar Pricing on Amazon
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use The Tiny Home Solar Calculator</h2>
            <div className="prose prose-teal max-w-none">
              <p>Our tiny home solar calculator helps you determine the right solar system size and estimated costs for your tiny house. Here's a detailed guide on how to use it effectively:</p>
              
              <h3>Understanding the Input Parameters</h3>
              <ol>
                <li><strong>Daily Energy Usage (kWh):</strong> Enter your estimated daily electricity consumption. For tiny homes, this typically ranges from 2-8 kWh per day.</li>
                <li><strong>Peak Sun Hours:</strong> Input the average number of peak sun hours in your location. This varies by geography and season.</li>
                <li><strong>System Type:</strong> Choose between grid-tied, hybrid, or off-grid systems based on your needs.</li>
                <li><strong>Battery Backup Days:</strong> For off-grid systems, specify how many days of backup power you want.</li>
                <li><strong>Roof Angle:</strong> Select how optimal your roof angle is for solar panel installation.</li>
              </ol>

              <h3>Interpreting the Results</h3>
              <ul>
                <li><strong>Solar Panel System Size:</strong> The recommended wattage for your solar panel system.</li>
                <li><strong>Battery Storage:</strong> For off-grid systems, the recommended battery capacity in kilowatt-hours.</li>
                <li><strong>Estimated Total Cost:</strong> A comprehensive cost estimate including equipment and installation.</li>
                <li><strong>Monthly Energy Offset:</strong> The estimated monthly savings on your electricity bill.</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-teal max-w-none">
              <h2>Tiny Home Solar Power Guide</h2>

              <p>Installing solar power in your tiny home is an excellent way to achieve energy independence and reduce your environmental impact. This comprehensive guide will help you understand the key aspects of tiny home solar systems.</p>

              <h3>Types of Solar Systems for Tiny Homes</h3>
              <ul>
                <li><strong>Grid-Tied Systems:</strong> Connect to the utility grid, allowing you to use grid power when needed and sell excess solar power back.</li>
                <li><strong>Hybrid Systems:</strong> Combine grid connection with battery storage for backup power during outages.</li>
                <li><strong>Off-Grid Systems:</strong> Completely independent systems with battery storage for full energy autonomy.</li>
              </ul>

              <h3>Key Components of a Tiny Home Solar System</h3>
              <ul>
                <li>Solar panels</li>
                <li>Inverter (converts DC to AC power)</li>
                <li>Charge controller</li>
                <li>Batteries (for hybrid and off-grid systems)</li>
                <li>Mounting hardware</li>
                <li>Monitoring system</li>
              </ul>

              <h3>Factors Affecting Solar System Performance</h3>
              <ul>
                <li>Geographic location and climate</li>
                <li>Roof angle and orientation</li>
                <li>Shading from trees or structures</li>
                <li>Seasonal variations</li>
                <li>Energy consumption patterns</li>
              </ul>

              <h3>Installation Considerations</h3>
              <ul>
                <li>Roof structural capacity</li>
                <li>Available space for panels</li>
                <li>Battery storage location</li>
                <li>Local building codes and permits</li>
                <li>Professional vs. DIY installation</li>
              </ul>

              <h3>Maintenance Requirements</h3>
              <p>Regular maintenance ensures optimal system performance:</p>
              <ul>
                <li>Clean panels periodically</li>
                <li>Check battery condition</li>
                <li>Monitor system performance</li>
                <li>Inspect wiring and connections</li>
                <li>Update monitoring software</li>
              </ul>

              <h3>Cost Considerations</h3>
              <p>Several factors influence the total cost of your solar system:</p>
              <ul>
                <li>System size and capacity</li>
                <li>Equipment quality and brand</li>
                <li>Installation complexity</li>
                <li>Battery storage requirements</li>
                <li>Local incentives and tax credits</li>
              </ul>

              <p>Use our tiny home solar calculator to get started with planning your solar power system. Remember to consult with solar professionals for detailed assessments and recommendations specific to your situation.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ExitPopup />
    </div>
  );
}