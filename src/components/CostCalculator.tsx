import React, { useState } from 'react';
import { Calculator, Info } from 'lucide-react';

export default function CostCalculator() {
  const [sqft, setSqft] = useState<number>(200);
  const [quality, setQuality] = useState<string>('medium');
  const [location, setLocation] = useState<string>('rural');
  const [foundation, setFoundation] = useState<string>('trailer');
  const [roofStyle, setRoofStyle] = useState<string>('standard');
  const [utilities, setUtilities] = useState<string[]>([]);
  const [isDIY, setIsDIY] = useState<boolean>(false);
  const [showTooltip, setShowTooltip] = useState<string>('');

  const calculateCost = () => {
    // Base cost per square foot based on quality
    let baseCost = sqft * (
      quality === 'high' ? 400 :
      quality === 'medium' ? 300 :
      200
    );

    // Location multiplier
    const locationMultiplier = 
      location === 'urban' ? 1.25 :
      location === 'suburban' ? 1.15 :
      1;
    baseCost *= locationMultiplier;

    // Foundation cost
    const foundationCost = 
      foundation === 'concrete' ? sqft * 35 :
      foundation === 'pier' ? sqft * 25 :
      sqft * 20; // trailer
    baseCost += foundationCost;

    // Roof style adjustment
    const roofMultiplier = 
      roofStyle === 'loft' ? 1.2 :
      roofStyle === 'solar' ? 1.35 :
      1;
    baseCost *= roofMultiplier;

    // Utilities costs
    const utilitiesCost = utilities.reduce((acc, utility) => {
      switch(utility) {
        case 'solar':
          return acc + 8000;
        case 'water':
          return acc + 3500;
        case 'composting':
          return acc + 2000;
        case 'propane':
          return acc + 1500;
        default:
          return acc;
      }
    }, 0);
    baseCost += utilitiesCost;

    // DIY discount
    if (isDIY) {
      baseCost *= 0.65; // 35% savings for DIY
    }

    return Math.round(baseCost);
  };

  const tooltips = {
    quality: "Basic: Standard materials and finishes\nMedium: Better quality materials and some custom features\nHigh: Premium materials and fully custom design",
    foundation: "Trailer: Mobile tiny house\nPier: Elevated foundation\nConcrete: Permanent foundation",
    roof: "Standard: Traditional pitched roof\nLoft: Includes sleeping loft\nSolar: Prepared for solar panel installation",
    utilities: "Select multiple utility systems for your tiny house"
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">Advanced Tiny House Cost Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Footage
          </label>
          <input
            type="range"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="100"
            max="400"
            step="10"
          />
          <div className="text-center mt-2 text-gray-600">{sqft} sq ft</div>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Build Quality
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('quality')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'quality' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm whitespace-pre-line">
              {tooltips.quality}
            </div>
          )}
          <select
            value={quality}
            onChange={(e) => setQuality(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="basic">Basic</option>
            <option value="medium">Medium</option>
            <option value="high">High-End</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Location
          </label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="rural">Rural</option>
            <option value="suburban">Suburban</option>
            <option value="urban">Urban</option>
          </select>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Foundation Type
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('foundation')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'foundation' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm whitespace-pre-line">
              {tooltips.foundation}
            </div>
          )}
          <select
            value={foundation}
            onChange={(e) => setFoundation(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="trailer">Trailer</option>
            <option value="pier">Pier & Beam</option>
            <option value="concrete">Concrete Slab</option>
          </select>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Roof Style
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('roof')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'roof' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm whitespace-pre-line">
              {tooltips.roof}
            </div>
          )}
          <select
            value={roofStyle}
            onChange={(e) => setRoofStyle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="standard">Standard Pitch</option>
            <option value="loft">Loft Compatible</option>
            <option value="solar">Solar Ready</option>
          </select>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Utility Systems
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('utilities')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'utilities' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
              {tooltips.utilities}
            </div>
          )}
          <div className="space-y-2">
            {['solar', 'water', 'composting', 'propane'].map((utility) => (
              <label key={utility} className="flex items-center">
                <input
                  type="checkbox"
                  checked={utilities.includes(utility)}
                  onChange={(e) => {
                    if (e.target.checked) {
                      setUtilities([...utilities, utility]);
                    } else {
                      setUtilities(utilities.filter(u => u !== utility));
                    }
                  }}
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <span className="ml-2 text-sm text-gray-700 capitalize">
                  {utility === 'solar' ? 'Solar Power System' :
                   utility === 'water' ? 'Water Treatment System' :
                   utility === 'composting' ? 'Composting Toilet' :
                   'Propane System'}
                </span>
              </label>
            ))}
          </div>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="diy"
            checked={isDIY}
            onChange={(e) => setIsDIY(e.target.checked)}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label htmlFor="diy" className="ml-2 block text-sm text-gray-700">
            DIY Build (35% cost reduction)
          </label>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Estimated Cost
          </h3>
          <p className="text-3xl font-bold text-teal-600">
            ${calculateCost().toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Includes foundation, utilities, and all selected features
          </p>
        </div>
      </div>
    </div>
  );
}