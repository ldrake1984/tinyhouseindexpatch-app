import React, { useState } from 'react';
import { Calculator } from 'lucide-react';

export default function FinancingCalculator() {
  const [homePrice, setHomePrice] = useState<number>(50000);
  const [downPayment, setDownPayment] = useState<number>(10000);
  const [interestRate, setInterestRate] = useState<number>(4.5);
  const [loanTerm, setLoanTerm] = useState<number>(15);

  const calculateMonthlyPayment = () => {
    const principal = homePrice - downPayment;
    const monthlyRate = interestRate / 100 / 12;
    const numberOfPayments = loanTerm * 12;
    
    const monthlyPayment = 
      (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) /
      (Math.pow(1 + monthlyRate, numberOfPayments) - 1);
    
    return Math.round(monthlyPayment);
  };

  const totalCost = () => {
    return calculateMonthlyPayment() * loanTerm * 12;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
      <div className="flex items-center space-x-2 mb-6">
        <Calculator className="h-6 w-6 text-teal-600" />
        <h2 className="text-2xl font-bold text-gray-900">Tiny House Financing Calculator</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Tiny House Price ($)
          </label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            min="10000"
            max="200000"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Down Payment ($)
          </label>
          <input
            type="number"
            value={downPayment}
            onChange={(e) => setDownPayment(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            min="0"
            max={homePrice}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Interest Rate (%)
          </label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
            min="0"
            max="20"
            step="0.1"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Loan Term (Years)
          </label>
          <select
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-teal-500 focus:border-teal-500"
          >
            <option value="5">5 years</option>
            <option value="10">10 years</option>
            <option value="15">15 years</option>
            <option value="20">20 years</option>
            <option value="30">30 years</option>
          </select>
        </div>

        <div className="bg-gray-50 p-6 rounded-lg space-y-4">
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Monthly Payment
            </h3>
            <p className="text-3xl font-bold text-teal-600">
              ${calculateMonthlyPayment().toLocaleString()}
            </p>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              Total Cost
            </h3>
            <p className="text-2xl font-bold text-teal-600">
              ${totalCost().toLocaleString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}