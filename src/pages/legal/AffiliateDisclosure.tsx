import React from 'react';
import LegalLayout from '../../components/LegalLayout';

export default function AffiliateDisclosure() {
  return (
    <LegalLayout title="Affiliate Disclosure">
      <h2>Affiliate Relationships</h2>
      <p>www.besttinyhousecalculators.com participates in affiliate programs. We may earn commissions from qualifying purchases through our links.</p>

      <h2>Our Partners</h2>
      <p>We maintain affiliate relationships with:</p>
      <ul>
        <li>Amazon Associates Program</li>
        <li>Tiny house manufacturers</li>
        <li>Solar equipment suppliers</li>
        <li>Building material providers</li>
      </ul>

      <h2>How It Works</h2>
      <p>When you click our affiliate links:</p>
      <ul>
        <li>A cookie is placed on your device</li>
        <li>We earn a commission if you make a purchase</li>
        <li>Your price remains the same</li>
        <li>Commissions help support our free calculators</li>
      </ul>

      <h2>Transparency</h2>
      <p>We disclose affiliate relationships by:</p>
      <ul>
        <li>Marking affiliate links clearly</li>
        <li>Providing this disclosure page</li>
        <li>Being transparent about commissions</li>
      </ul>
    </LegalLayout>
  );
}