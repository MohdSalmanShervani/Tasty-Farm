'use client';

import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-screen-xl mx-auto text-center">
        <div className="flex flex-col items-center space-y-2">
          <p className="text-xl font-semibold">Contact Us</p>
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-x-4 sm:space-y-0">
            <p className="text-md">Tasty Farm</p>
            <p className="text-md">+91 7217620172</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;