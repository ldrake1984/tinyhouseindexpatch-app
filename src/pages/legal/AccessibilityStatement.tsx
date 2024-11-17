import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function AccessibilityStatement() {
  return (
    <LegalLayout title="Accessibility Statement">
      <h2>Our Commitment</h2>
      <p>Best Tiny House Calculators is committed to making our website accessible to all users, including those with disabilities.</p>

      <h2>Accessibility Standards</h2>
      <p>We strive to meet WCAG 2.1 Level AA standards through:</p>
      <ul>
        <li>Keyboard navigation support</li>
        <li>Screen reader compatibility</li>
        <li>Color contrast compliance</li>
        <li>Clear, consistent navigation</li>
        <li>Alternative text for images</li>
      </ul>

      <h2>Ongoing Improvements</h2>
      <p>We regularly review and improve our website's accessibility by:</p>
      <ul>
        <li>Testing with assistive technologies</li>
        <li>Updating our code and content</li>
        <li>Training our team on accessibility</li>
        <li>Responding to user feedback</li>
      </ul>

      <h2>Contact Us</h2>
      <p>If you encounter accessibility issues, please contact us at:</p>
      <p>Email: hello@fiftyknots.com</p>
    </LegalLayout>
  );
}