import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function TermsOfService() {
  return (
    <LegalLayout title="Terms of Service">
      <h2>Agreement to Terms</h2>
      <p>By accessing www.besttinyhousecalculators.com, you agree to these Terms of Service and all applicable laws and regulations.</p>

      <h2>Use License</h2>
      <p>Permission is granted to temporarily use our calculators and tools for personal, non-commercial use. This license does not include:</p>
      <ul>
        <li>Modifying or copying our calculator algorithms</li>
        <li>Using the calculators for commercial purposes</li>
        <li>Attempting to decompile or reverse engineer any software</li>
        <li>Removing any copyright or proprietary notations</li>
      </ul>

      <h2>Disclaimer</h2>
      <p>Our calculators provide estimates based on general data and assumptions. Results should be verified with professional consultation.</p>

      <h2>Limitations</h2>
      <p>We shall not be held liable for:</p>
      <ul>
        <li>Accuracy of calculator results</li>
        <li>Decisions made based on our tools</li>
        <li>Any damages arising from site use</li>
      </ul>

      <h2>Governing Law</h2>
      <p>These terms are governed by the laws of Oregon, United States.</p>

      <h2>Contact Information</h2>
      <p>Questions about these terms should be sent to:</p>
      <p>Email: hello@fiftyknots.com</p>
    </LegalLayout>
  );
}