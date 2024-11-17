import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import DIYCostCalculator from '../components/DIYCostCalculator';
import ExitPopup from '../components/ExitPopup';
import { ShoppingCart } from 'lucide-react';

export default function DIYCostCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              DIY Tiny House Cost Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate the cost of building your own tiny house with our specialized DIY calculator.
              Get accurate estimates for your self-build tiny house project.
            </p>
          </div>

          <DIYCostCalculator />

          <div className="mt-8 mb-8 flex flex-wrap gap-4 justify-center">
            <a
              href="https://bit.ly/craftsman_tiny_homes"
              className="bg-teal-600 text-white px-8 py-4 rounded-lg hover:bg-teal-700 transition-colors font-medium text-lg"
            >
              Get a Professional Quote
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
              href="https://amzn.to/4fuJ4fJ"
              className="inline-flex items-center gap-2 bg-amber-400 text-gray-900 px-8 py-4 rounded-lg hover:bg-amber-500 transition-colors font-medium text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ShoppingCart className="h-6 w-6" />
              Check Tiny House Prices on Amazon
            </a>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use The DIY Tiny House Cost Calculator</h2>
            <div className="prose prose-teal max-w-none">
              <p>Our DIY tiny house cost calculator is designed to help you estimate the total cost of building your own tiny house. Here's how to use it effectively:</p>
              
              <ol>
                <li><strong>Enter Square Footage:</strong> Input your desired tiny house size (100-400 square feet).</li>
                <li><strong>Select Material Quality:</strong> Choose between basic, standard, or premium materials based on your budget and preferences.</li>
                <li><strong>Specify Location:</strong> Select your building location (rural, suburban, or urban) to account for regional cost variations.</li>
                <li><strong>Indicate Experience Level:</strong> Choose your DIY experience level to factor in potential learning curves and mistakes.</li>
                <li><strong>Tool Ownership:</strong> Indicate whether you already own basic construction tools to include or exclude tool costs.</li>
              </ol>

              <p>The calculator provides an estimated cost breakdown that includes:</p>
              <ul>
                <li>Material costs based on quality and square footage</li>
                <li>Tool costs (if needed)</li>
                <li>Location-based price adjustments</li>
                <li>Experience-based contingency for potential rework</li>
              </ul>

              <p>Remember that this calculator provides estimates based on average costs and typical DIY scenarios. Actual costs may vary based on specific materials, local prices, and individual circumstances.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-teal max-w-none">
              <h2>DIY Tiny House Building Guide</h2>

              <p>Building your own tiny house can be a rewarding and cost-effective way to achieve your dream home. This comprehensive guide will help you understand the DIY process, costs involved, and key considerations for your project.</p>

              <h3>Benefits of DIY Tiny House Construction</h3>
              <ul>
                <li>Significant cost savings compared to professional builds</li>
                <li>Complete control over design and materials</li>
                <li>Personal satisfaction and learning experience</li>
                <li>Ability to customize every detail</li>
              </ul>

              <h3>Essential Skills and Knowledge</h3>
              <p>Before starting your DIY tiny house project, consider developing these key skills:</p>
              <ul>
                <li>Basic carpentry and framing</li>
                <li>Electrical wiring fundamentals</li>
                <li>Plumbing basics</li>
                <li>Project planning and management</li>
                <li>Building code compliance</li>
              </ul>

              <h3>Required Tools and Equipment</h3>
              <p>Essential tools for DIY tiny house construction include:</p>
              <ul>
                <li>Power tools (circular saw, drill, etc.)</li>
                <li>Hand tools (hammer, measuring tape, level)</li>
                <li>Safety equipment</li>
                <li>Specialty tools for specific tasks</li>
              </ul>

              <h3>Cost-Saving Strategies</h3>
              <p>Maximize your budget with these tips:</p>
              <ul>
                <li>Source materials during sales and clearances</li>
                <li>Consider reclaimed or recycled materials</li>
                <li>Rent specialized tools instead of buying</li>
                <li>Plan carefully to minimize waste</li>
                <li>Build in phases to spread costs</li>
              </ul>

              <h3>Common DIY Challenges</h3>
              <p>Be prepared for these typical challenges:</p>
              <ul>
                <li>Time management and project delays</li>
                <li>Weather-related setbacks</li>
                <li>Learning curve for new skills</li>
                <li>Material storage and protection</li>
                <li>Building code compliance</li>
              </ul>

              <h3>Planning Your DIY Build</h3>
              <ol>
                <li>Research and gather information</li>
                <li>Create detailed plans and drawings</li>
                <li>Obtain necessary permits</li>
                <li>Set up a realistic timeline</li>
                <li>Establish a detailed budget</li>
                <li>Plan for contingencies</li>
              </ol>

              <h3>Safety Considerations</h3>
              <p>Prioritize safety throughout your build:</p>
              <ul>
                <li>Use proper safety equipment</li>
                <li>Follow building codes and regulations</li>
                <li>Work with a partner when possible</li>
                <li>Know your limitations</li>
                <li>Maintain insurance coverage</li>
              </ul>

              <h3>Final Tips for Success</h3>
              <ul>
                <li>Start with a detailed plan</li>
                <li>Document your progress</li>
                <li>Join DIY communities for support</li>
                <li>Take your time with critical steps</li>
                <li>Consider hiring professionals for complex systems</li>
              </ul>

              <p>Remember that while DIY construction can save money, it requires significant time, effort, and dedication. Use our DIY tiny house cost calculator to get started with accurate budget planning for your project.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ExitPopup />
    </div>
  );
}