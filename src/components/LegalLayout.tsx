import React, { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LegalLayoutProps {
  children: ReactNode;
  title: string;
}

export default function LegalLayout({ children, title }: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">{title}</h1>
          <div className="prose prose-teal max-w-none bg-white p-8 rounded-lg shadow-sm">
            {children}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}