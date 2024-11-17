import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CostCalculatorPage from './pages/CostCalculatorPage';
import DIYCostCalculatorPage from './pages/DIYCostCalculatorPage';
import FinancingCalculatorPage from './pages/FinancingCalculatorPage';
import SolarCalculatorPage from './pages/SolarCalculatorPage';
import HomePage from './pages/HomePage';
import PrivacyPolicy from './pages/legal/PrivacyPolicy';
import TermsOfService from './pages/legal/TermsOfService';
import Disclaimer from './pages/legal/Disclaimer';
import CookiePolicy from './pages/legal/CookiePolicy';
import AffiliateDisclosure from './pages/legal/AffiliateDisclosure';
import AccessibilityStatement from './pages/legal/AccessibilityStatement';
import Contact from './pages/Contact';
import GoogleAnalytics from './components/GoogleAnalytics';

export default function App() {
  return (
    <Router>
      {/* Replace GA_MEASUREMENT_ID with your actual Google Analytics Measurement ID */}
      <GoogleAnalytics measurementId="GA_MEASUREMENT_ID" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tiny-house-cost-calculator" element={<CostCalculatorPage />} />
        <Route path="/diy-tiny-house-cost-calculator" element={<DIYCostCalculatorPage />} />
        <Route path="/tiny-house-financing-calculator" element={<FinancingCalculatorPage />} />
        <Route path="/tiny-home-solar-calculator" element={<SolarCalculatorPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/affiliate-disclosure" element={<AffiliateDisclosure />} />
        <Route path="/accessibility" element={<AccessibilityStatement />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Router>
  );
}