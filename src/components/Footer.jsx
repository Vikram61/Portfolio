import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="flex items-center justify-center text-gray-300">
            Made with{' '}
            <Heart className="w-4 h-4 text-red-500 mx-2" />
            by Alex Johnson
          </p>
          <p className="text-gray-400 mt-2">
            © 2025 Alex Johnson. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;