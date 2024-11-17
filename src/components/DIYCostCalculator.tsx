import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function DIYCostCalculator() {
  const [sqft, setSqft] = useState<number>(200);
  const [materialQuality, setMaterialQuality] = useState<string>('medium');
  const [hasTools, setHasTools] = useState<boolean>(false);
  const [location, setLocation] = useState<string>('rural');
  const [experience, setExperience] = useState<string>('beginner');

  const calculateCost = () => {
    let baseCost = sqft * (materialQuality === 'high' ? 250 : materialQuality === 'medium' ? 180 : 120);
    
    // Location adjustment
    baseCost *= location === 'urban' ? 1.2 : location === 'suburban' ? 1.1 : 1;
    
    // Tools cost if needed
    const toolsCost = hasTools ? 0 : 2500;
    
    // Experience factor (affects potential mistakes and rework)
    const experienceFactor = experience === 'expert' ? 1 : experience === 'intermediate' ? 1.1 : 1.2;
    
    return Math.round((baseCost * experienceFactor) + toolsCost);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">DIY Tiny House Cost Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Square Footage
          </label>
          <input
            type="number"
            value={sqft}
            onChange={(e) => setSqft(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            min="100"
            max="400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Material Quality
          </label>
          <select
            value={materialQuality}
            onChange={(e) => setMaterialQuality(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="basic">Basic Materials</option>
            <option value="medium">Standard Materials</option>
            <option value="high">Premium Materials</option>
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

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            DIY Experience Level
          </label>
          <select
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="beginner">Beginner</option>
            <option value="intermediate">Intermediate</option>
            <option value="expert">Expert</option>
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="tools"
            checked={hasTools}
            onChange={(e) => setHasTools(e.target.checked)}
            className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
          />
          <label htmlFor="tools" className="ml-2 block text-sm text-gray-700">
            I already own basic construction tools
          </label>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Estimated DIY Cost
          </h3>
          <p className="text-3xl font-bold text-teal-600">
            ${calculateCost().toLocaleString()}
          </p>
          <p className="text-sm text-gray-500 mt-2">
            {!hasTools && "Includes $2,500 for basic tools"}
          </p>
        </div>
      </div>
    </div>
  );
}