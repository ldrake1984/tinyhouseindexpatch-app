import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import FinancingCalculator from '../components/FinancingCalculator';
import ExitPopup from '../components/ExitPopup';
import { ShoppingCart } from 'lucide-react';

export default function FinancingCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tiny House Financing Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Calculate monthly payments and explore financing options for your tiny house investment.
              Make informed decisions about your tiny house financing with our comprehensive calculator.
            </p>
          </div>

          <FinancingCalculator />

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use The Tiny House Financing Calculator</h2>
            <div className="prose prose-teal max-w-none">
              <p>Our tiny house financing calculator helps you plan your tiny house purchase by estimating monthly payments and total costs. Here's how to use it effectively:</p>
              
              <ol>
                <li><strong>Enter Tiny House Price:</strong> Input the total cost of your desired tiny house.</li>
                <li><strong>Set Down Payment:</strong> Enter your planned down payment amount.</li>
                <li><strong>Adjust Interest Rate:</strong> Input the expected annual interest rate from your lender.</li>
                <li><strong>Choose Loan Term:</strong> Select the number of years for your loan (5-30 years).</li>
              </ol>

              <p>The calculator will instantly show you:</p>
              <ul>
                <li>Monthly payment amount</li>
                <li>Total cost including interest</li>
                <li>Loan amortization details</li>
              </ul>

              <p>Use these calculations to:</p>
              <ul>
                <li>Compare different loan terms</li>
                <li>Plan your budget effectively</li>
                <li>Determine affordable price ranges</li>
                <li>Evaluate down payment options</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-teal max-w-none">
              <h2>Exploring Loan Options for Your Dream Tiny House</h2>

              <p>Financing a tiny home has become a hot topic as the tiny house movement gains momentum. Whether you're looking for a loan calculator, exploring mortgage options, or considering a personal loan, understanding the best ways to finance a tiny home is key.</p>

              <h2>What Is Tiny Home Financing and Why Does It Matter?</h2>
              <p>Tiny home financing refers to the various methods used to secure funding for tiny houses, which are typically smaller and less expensive than traditional homes. Due to their unique nature, financing these homes requires specialized loan options.</p>
              <p>Unlike traditional mortgages, tiny house loans may not fit conventional criteria due to the smaller loan amount or the fact that many tiny homes are mobile. Choosing the right financing method ensures affordability and aligns with your financial goals.</p>

              <h2>Can You Get a Mortgage for a Tiny House?</h2>
              <p>A mortgage loan is a common way to finance traditional homes, but tiny homes often fall outside conventional mortgage criteria. Many tiny homes on wheels or DIY builds aren't considered real estate, making it harder to secure a traditional mortgage.</p>
              <p>Instead, specialized tiny house loan options or manufactured home financing might be available. For tiny homes classified as real property, a home mortgage might still be an option if they meet local regulations.</p>

              <h2>How Does a Tiny House Loan Work?</h2>
              <p>A tiny house loan is typically a personal or specialized loan designed for purchasing or building a tiny home. These loans may come with higher interest rates and shorter loan terms than mortgages.</p>

              <p><strong>Key Features:</strong></p>
              <ul>
                <li>Lower loan amounts than mortgages</li>
                <li>Flexible usage for tiny homes, including those on wheels</li>
                <li>Faster approval processes compared to traditional home loans</li>
              </ul>

              <h2>What Financing Options Are Available?</h2>
              <p>When looking to finance a tiny house, you have several financing options:</p>
              <ul>
                <li>RV Loans: Ideal for mobile tiny homes classified as recreational vehicles</li>
                <li>Personal Loans: Unsecured loans with flexible usage, though they often have higher interest rates</li>
                <li>Home Equity Loans: Use the equity in your existing home to fund your tiny house</li>
              </ul>

              <h2>Is a Personal Loan the Right Choice?</h2>
              <p>A personal loan can be a viable option for tiny home financing, particularly for smaller builds. These loans don't require collateral, making them a good fit for individuals who don't own property.</p>

              <p><strong>Pros:</strong></p>
              <ul>
                <li>Quick approval and funding</li>
                <li>No need for property appraisal</li>
              </ul>

              <p><strong>Cons:</strong></p>
              <ul>
                <li>Higher interest rates than secured loans</li>
                <li>Lower maximum loan amounts</li>
              </ul>

              <h2>Using Home Equity Loans</h2>
              <p>A home equity loan allows you to tap into the value of your current property to finance a tiny home. This option is ideal for homeowners looking to add a tiny house to their property.</p>

              <p><strong>Benefits:</strong></p>
              <ul>
                <li>Lower interest rates than personal loans</li>
                <li>Higher loan limits for larger projects</li>
              </ul>

              <p><strong>Drawbacks:</strong></p>
              <ul>
                <li>Requires an existing home with sufficient equity</li>
                <li>Risk of foreclosure if payments are missed</li>
              </ul>

              <h2>Financing a Tiny House on Wheels</h2>
              <p>Financing a tiny house on wheels often involves unique challenges. Since these homes are mobile, they're not always eligible for traditional loans. Consider:</p>
              <ul>
                <li>RV Loans: Designed for mobile homes, offering favorable terms</li>
                <li>Personal Loans: Flexible but may have higher costs</li>
                <li>Manufacturer Financing: Many builders offer in-house financing options</li>
              </ul>

              <h2>Average Costs and Loan Amounts</h2>
              <p>The cost of a tiny home varies widely based on size, materials, and customization. On average:</p>
              <ul>
                <li>DIY builds: $10,000–$30,000</li>
                <li>Professionally built tiny houses: $50,000–$100,000</li>
              </ul>

              <h2>Finding the Best Financing Solution</h2>
              <p>To find the best tiny home financing solution, consider:</p>
              <ul>
                <li>Use our calculator to evaluate different options</li>
                <li>Research loan products from multiple lenders</li>
                <li>Compare interest rates, terms, and fees</li>
                <li>Consider your tiny home's classification (mobile vs. permanent)</li>
                <li>Evaluate your current financial situation</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ExitPopup />
    </div>
  );
}