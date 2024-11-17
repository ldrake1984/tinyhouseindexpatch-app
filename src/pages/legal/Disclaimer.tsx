import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function Disclaimer() {
  return (
    <LegalLayout title="Disclaimer">
      <h2>Calculator Accuracy</h2>
      <p>The calculators provided on www.besttinyhousecalculators.com are for informational purposes only. While we strive for accuracy, results should be considered estimates and verified with professional consultation.</p>

      <h2>No Professional Advice</h2>
      <p>Our calculators and content do not constitute professional advice. Always consult with qualified professionals for:</p>
      <ul>
        <li>Construction planning</li>
        <li>Financial decisions</li>
        <li>Legal matters</li>
        <li>Building code compliance</li>
      </ul>

      <h2>External Links</h2>
      <p>Our website contains links to external sites. We are not responsible for their content or practices.</p>

      <h2>Accuracy of Information</h2>
      <p>While we make every effort to ensure accuracy, we make no guarantees about:</p>
      <ul>
        <li>Calculator results</li>
        <li>Cost estimates</li>
        <li>Technical specifications</li>
        <li>Market conditions</li>
      </ul>

      <h2>User Responsibility</h2>
      <p>Users are responsible for verifying all information and consulting professionals before making decisions based on our tools.</p>
    </LegalLayout>
  );
}