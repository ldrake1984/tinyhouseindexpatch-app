import React, { useEffect, useState } from 'react';
import { X } from 'lucide-react';

export default function ExitPopup() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setIsVisible(true);
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button 
          onClick={() => setIsVisible(false)}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X className="h-6 w-6" />
        </button>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Wait! Don't Miss Out!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Get expert guidance for your tiny house project:
        </p>
        
        <div className="space-y-4">
          <a 
            href="https://bit.ly/craftsman_tiny_homes"
            className="block w-full bg-teal-600 text-white text-center py-3 rounded-lg hover:bg-teal-700 transition-colors"
          >
            Get a Free Quote
          </a>
          
          <a 
            href="https://bit.ly/truoba_plans"
            className="block w-full bg-gray-100 text-gray-900 text-center py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            View House Plans
          </a>
        </div>
      </div>
    </div>
  );
}