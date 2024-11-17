import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import CostCalculator from '../components/CostCalculator';
import ExitPopup from '../components/ExitPopup';
import { ShoppingCart } from 'lucide-react';

export default function CostCalculatorPage() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tiny House Cost Calculator
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Estimate the cost of your dream tiny house with our comprehensive calculator.
              Get accurate cost projections based on size, quality, location, and build approach.
            </p>
          </div>

          <CostCalculator />

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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">How to Use The Tiny House Cost Calculator</h2>
            <div className="prose prose-teal max-w-none">
              <p>Our tiny house cost calculator is designed to help you estimate the total cost of building or buying a tiny house. Here's how to use it effectively:</p>
              
              <ol>
                <li><strong>Enter Square Footage:</strong> Input the desired size of your tiny house between 100-400 square feet.</li>
                <li><strong>Select Build Quality:</strong> Choose between basic, medium, or high-end finishes to match your vision.</li>
                <li><strong>Choose Location:</strong> Select rural, suburban, or urban to account for regional cost variations.</li>
                <li><strong>DIY Option:</strong> Toggle whether you plan to build it yourself to see potential savings.</li>
              </ol>

              <p>The calculator will instantly provide an estimated cost based on current market rates and building standards. Remember that this is an estimate, and actual costs may vary based on specific materials, labor rates, and local regulations.</p>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg shadow-sm p-8 md:p-12 max-w-4xl mx-auto">
            <div className="prose prose-teal max-w-none">
              <h2>More About Tiny House Costing</h2>

              <p>Building a tiny house has become a popular option for those seeking an affordable, minimalist lifestyle. With the rise of the tiny house movement, many people are curious about the actual cost of building a tiny home. This guide dives into the cost factors, compares them with traditional homes, and explores how a tiny house cost calculator can help estimate your expenses.</p>

              <h2>1. What Is a Tiny House and How Is It Different from a Traditional Home?</h2>

              <p>A tiny house is typically defined as a small home with 400 square feet or less of living space. Unlike a traditional home, tiny houses emphasize efficiency, mobility, and minimalism. Many tiny homes are built on wheels, making them portable, unlike permanent traditional homes.</p>

              <p>For those interested in a tiny home, these compact spaces are ideal for downsizing and simplifying life. Tiny houses aren't just about smaller square footage; they represent a conscious choice to live more sustainably.</p>

              <h2>2. Why Use a Tiny House Cost Calculator?</h2>

              <p>Estimating the cost to build a tiny house can be tricky. Using a tiny house cost calculator helps you evaluate expenses, including materials, labor, and permits. It simplifies planning and ensures you're prepared for unexpected costs like land acquisition or customization.</p>

              <h3>A calculator considers essential factors such as:</h3>
              <ul>
                <li>Size of the house</li>
                <li>Construction costs</li>
                <li>Square footage materials</li>
                <li>Permits and land preparation</li>
              </ul>

              <h2>3. How Much Does a Tiny House Cost to Build?</h2>

              <p>The average cost of a tiny house ranges between $30,000 and $60,000, but prices can fluctuate based on customization and size. For a DIY tiny house, costs can be as low as $15,000 if you build it yourself, while a professionally constructed custom tiny home might exceed $100,000.</p>

              <h3>Factors That Influence Costs:</h3>
              <ul>
                <li>Custom builds: Unique designs or high-end finishes increase costs.</li>
                <li>Tiny house kits: Pre-made kits cost less but offer fewer customization options.</li>
                <li>Location: Construction and permit fees vary by state.</li>
              </ul>

              <h2>4. DIY vs. Professional Tiny House Builders: Which Costs Less?</h2>

              <p>Building your tiny home offers cost savings, but professional builders deliver expertise. For a DIY tiny house, expect to invest in tools, time, and research. Professional tiny house builders streamline the process but charge for labor and expertise.</p>

              <h3>Key Considerations:</h3>
              <ul>
                <li>DIY Pros: Cheaper, more control, satisfaction of building your dream.</li>
                <li>DIY Cons: Time-intensive, potential for costly mistakes.</li>
                <li>Professional Builds: High-quality results but higher upfront costs.</li>
              </ul>

              <h2>5. What Factors Affect the Cost of a Tiny Home?</h2>

              <p>Several elements impact the total cost of a tiny home:</p>
              <ul>
                <li>Size: Smaller homes cost less to build.</li>
                <li>Permits: Local regulations may require costly permits.</li>
                <li>Customization: Unique features, like a loft or solar panels, add to expenses.</li>
                <li>Land to Build: Land prices can vary widely depending on location.</li>
              </ul>

              <p>A tiny house on wheels eliminates some land costs but may require additional vehicle permits.</p>

              <h2>6. Tiny House Costs vs. Traditional Homes: A Comparison</h2>

              <p>While traditional homes cost an average of $300,000 in the U.S., tiny homes are often a fraction of that price. For instance:</p>
              <ul>
                <li>Tiny house ranges: $30,000–$60,000.</li>
                <li>Cost per square foot: $300–$400 for a tiny home compared to $150–$250 for a traditional house.</li>
              </ul>

              <h3>Advantages of Tiny Homes:</h3>
              <ul>
                <li>Lower cost of living.</li>
                <li>Reduced maintenance costs.</li>
                <li>Eco-friendly materials and designs.</li>
              </ul>

              <h2>7. Is It More Expensive to Build a Tiny House?</h2>

              <p>While tiny homes cost less overall, the construction cost per square foot is often higher due to their small scale and high-quality materials. For example:</p>
              <ul>
                <li>Custom-built tiny houses average $400 per square foot.</li>
                <li>Pre-fabricated or tiny home shells reduce costs.</li>
              </ul>

              <h2>8. How to Calculate the Cost per Square Foot of Your Tiny House</h2>

              <p>To estimate the cost per square foot, divide the total cost by the size of your tiny home. For example:</p>
              <ul>
                <li>A $40,000 tiny house with 400 square feet = $100 per square foot.</li>
                <li>A custom-built tiny house with high-end finishes may exceed $400 per square foot.</li>
              </ul>

              <p>Using a tiny house cost calculator simplifies this process and accounts for variables like labor and material costs.</p>

              <h2>9. Are Tiny Homes on Wheels More Affordable?</h2>

              <p>Tiny homes on wheels are a popular choice for mobility and versatility. They're typically more affordable upfront since they don't require land purchases. However, they may include additional costs:</p>
              <ul>
                <li>Vehicle permits and towing equipment.</li>
                <li>Customization for mobility.</li>
              </ul>

              <p>Mobile tiny homes provide flexibility for homeowners who enjoy traveling.</p>

              <h2>10. Steps to Build Your Tiny House on a Budget</h2>
              <ol>
                <li>Decide to Build or Buy: Choose between a DIY tiny house or hiring a professional.</li>
                <li>Select a Floor Plan: Opt for a simple design to save costs.</li>
                <li>Purchase a Tiny House Kit: Kits reduce material costs and simplify construction.</li>
                <li>Research Permits: Ensure compliance with local regulations.</li>
                <li>Minimize Customization: Stick to essential features to reduce the overall cost.</li>
              </ol>

              <p>By following these steps, you can make your tiny home both affordable and functional.</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <ExitPopup />
    </div>
  );
}