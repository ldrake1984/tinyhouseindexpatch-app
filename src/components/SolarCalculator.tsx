import React, { useState } from 'react';
import { Sun, Battery, Info } from 'lucide-react';

export default function SolarCalculator() {
  const [dailyUsage, setDailyUsage] = useState<number>(3);
  const [sunHours, setSunHours] = useState<number>(5);
  const [systemType, setSystemType] = useState<string>('grid-tied');
  const [batteryDays, setBatteryDays] = useState<number>(3);
  const [roofAngle, setRoofAngle] = useState<string>('optimal');
  const [showTooltip, setShowTooltip] = useState<string>('');

  const calculateSystem = () => {
    // Convert daily usage to Watt-hours
    const dailyWattHours = dailyUsage * 1000;
    
    // Calculate required panel capacity with efficiency factors
    const efficiencyLoss = 0.2; // 20% system losses
    const angleEfficiency = roofAngle === 'optimal' ? 1 : roofAngle === 'slight' ? 0.9 : 0.75;
    
    const requiredPanelWatts = Math.ceil(
      (dailyWattHours / sunHours) * (1 + efficiencyLoss) / angleEfficiency
    );
    
    // Calculate battery capacity for off-grid/hybrid
    const batteryWattHours = systemType !== 'grid-tied' 
      ? dailyWattHours * batteryDays * 1.2 // 20% depth of discharge buffer
      : 0;
    
    // Calculate costs
    const panelCost = requiredPanelWatts * 1.2; // $1.20 per watt for panels
    const inverterCost = requiredPanelWatts * 0.7; // $0.70 per watt for inverter
    const batteryCost = batteryWattHours * 0.5; // $0.50 per watt-hour for batteries
    const mountingCost = requiredPanelWatts * 0.3; // $0.30 per watt for mounting
    const laborCost = systemType === 'off-grid' ? 3500 : 2500;
    
    const totalCost = panelCost + inverterCost + batteryCost + mountingCost + laborCost;
    
    return {
      panelSize: requiredPanelWatts,
      batterySize: Math.ceil(batteryWattHours / 1000), // Convert to kWh
      totalCost: Math.round(totalCost),
      monthlyOffset: Math.round(dailyWattHours * 30 * 0.12 / 1000) // $0.12/kWh average rate
    };
  };

  const tooltips = {
    usage: "Enter your estimated daily electricity usage in kilowatt-hours (kWh)",
    sunHours: "Average peak sun hours in your location (typically 4-6 hours)",
    systemType: "Grid-tied systems are connected to the power grid, while off-grid systems require batteries",
    batteryDays: "Number of days of battery backup desired",
    roofAngle: "How optimal is your roof angle for solar panels?"
  };

  const results = calculateSystem();

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Sun className="h-6 w-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">Tiny Home Solar Calculator</h2>
      </div>

      <div className="space-y-6">
        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Daily Energy Usage (kWh)
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('usage')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'usage' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
              {tooltips.usage}
            </div>
          )}
          <input
            type="range"
            value={dailyUsage}
            onChange={(e) => setDailyUsage(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="1"
            max="10"
            step="0.5"
          />
          <div className="text-center mt-2 text-gray-600">{dailyUsage} kWh/day</div>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Peak Sun Hours
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('sunHours')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'sunHours' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
              {tooltips.sunHours}
            </div>
          )}
          <input
            type="range"
            value={sunHours}
            onChange={(e) => setSunHours(Number(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            min="3"
            max="7"
            step="0.5"
          />
          <div className="text-center mt-2 text-gray-600">{sunHours} hours/day</div>
        </div>

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              System Type
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('systemType')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'systemType' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
              {tooltips.systemType}
            </div>
          )}
          <select
            value={systemType}
            onChange={(e) => setSystemType(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="grid-tied">Grid-Tied</option>
            <option value="hybrid">Hybrid</option>
            <option value="off-grid">Off-Grid</option>
          </select>
        </div>

        {systemType !== 'grid-tied' && (
          <div className="relative">
            <div className="flex items-center mb-2">
              <label className="block text-sm font-medium text-gray-700">
                Battery Backup Days
              </label>
              <Info
                className="ml-2 h-4 w-4 text-gray-400 cursor-help"
                onMouseEnter={() => setShowTooltip('batteryDays')}
                onMouseLeave={() => setShowTooltip('')}
              />
            </div>
            {showTooltip === 'batteryDays' && (
              <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
                {tooltips.batteryDays}
              </div>
            )}
            <input
              type="range"
              value={batteryDays}
              onChange={(e) => setBatteryDays(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              min="1"
              max="7"
              step="1"
            />
            <div className="text-center mt-2 text-gray-600">{batteryDays} days</div>
          </div>
        )}

        <div className="relative">
          <div className="flex items-center mb-2">
            <label className="block text-sm font-medium text-gray-700">
              Roof Angle
            </label>
            <Info
              className="ml-2 h-4 w-4 text-gray-400 cursor-help"
              onMouseEnter={() => setShowTooltip('roofAngle')}
              onMouseLeave={() => setShowTooltip('')}
            />
          </div>
          {showTooltip === 'roofAngle' && (
            <div className="absolute z-10 bg-gray-900 text-white p-2 rounded text-sm">
              {tooltips.roofAngle}
            </div>
          )}
          <select
            value={roofAngle}
            onChange={(e) => setRoofAngle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="optimal">Optimal (30-45 degrees)</option>
            <option value="slight">Slight Variation (15-30 degrees)</option>
            <option value="suboptimal">Suboptimal (0-15 degrees)</option>
          </select>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Recommended System
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Solar Panel System Size</p>
                <p className="text-2xl font-bold text-teal-600">{results.panelSize}W</p>
              </div>
              {systemType !== 'grid-tied' && (
                <div>
                  <p className="text-sm text-gray-600">Battery Storage</p>
                  <p className="text-2xl font-bold text-teal-600">{results.batterySize}kWh</p>
                </div>
              )}
              <div>
                <p className="text-sm text-gray-600">Estimated Total Cost</p>
                <p className="text-2xl font-bold text-teal-600">${results.totalCost.toLocaleString()}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Monthly Energy Offset</p>
                <p className="text-2xl font-bold text-teal-600">${results.monthlyOffset}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}