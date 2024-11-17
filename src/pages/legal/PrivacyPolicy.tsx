import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function PrivacyPolicy() {
  return (
    <LegalLayout title="Privacy Policy">
      <h2>Introduction</h2>
      <p>This Privacy Policy describes how Best Tiny House Calculators (www.besttinyhousecalculators.com), owned and operated by Fiftyknots LLC, collects, uses, and shares your personal information.</p>

      <h2>Information We Collect</h2>
      <ul>
        <li>Usage Data: Information about how you use our calculators and website</li>
        <li>Device Information: Browser type, IP address, and device identifiers</li>
        <li>Cookies and Similar Technologies: See our Cookie Policy for details</li>
      </ul>

      <h2>How We Use Your Information</h2>
      <ul>
        <li>To provide and improve our calculator services</li>
        <li>To analyze website usage and optimize user experience</li>
        <li>To communicate with you about our services</li>
        <li>To protect our legal rights and prevent misuse</li>
      </ul>

      <h2>Information Sharing</h2>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul>
        <li>Service providers who assist in our operations</li>
        <li>Legal authorities when required by law</li>
        <li>Business partners with your consent</li>
      </ul>

      <h2>Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Access your personal information</li>
        <li>Correct inaccurate information</li>
        <li>Request deletion of your information</li>
        <li>Opt-out of marketing communications</li>
      </ul>

      <h2>Contact Us</h2>
      <p>For privacy-related questions, please contact us at:</p>
      <p>Email: hello@fiftyknots.com</p>
      <address>
        Tiny House Ventures<br />
        Innovation Plaza, SE Tech Lane<br />
        Portland, Oregon, USA
      </address>
    </LegalLayout>
  );
}