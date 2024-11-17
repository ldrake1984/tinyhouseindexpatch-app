import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function CookiePolicy() {
  return (
    <LegalLayout title="Cookie Policy">
      <h2>What Are Cookies</h2>
      <p>Cookies are small text files stored on your device when you visit our website. They help us provide and improve our services.</p>

      <h2>Types of Cookies We Use</h2>
      <ul>
        <li><strong>Essential Cookies:</strong> Required for basic website functionality</li>
        <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our site</li>
        <li><strong>Preference Cookies:</strong> Remember your settings and choices</li>
        <li><strong>Marketing Cookies:</strong> Track effectiveness of our marketing efforts</li>
      </ul>

      <h2>Managing Cookies</h2>
      <p>You can control cookies through your browser settings. Note that disabling certain cookies may affect website functionality.</p>

      <h2>Third-Party Cookies</h2>
      <p>We use services that may set third-party cookies, including:</p>
      <ul>
        <li>Google Analytics</li>
        <li>Social media plugins</li>
        <li>Advertising partners</li>
      </ul>

      <h2>Updates to This Policy</h2>
      <p>We may update this Cookie Policy periodically. Check back regularly for changes.</p>
    </LegalLayout>
  );
}