"use client";

import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4 px-1 ">
    <div className="container mx-auto flex justify-between items-center">
      {/* Social Media Icons */}
      <div className="flex space-x-4 ml-4">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Facebook className="w-6 h-6 text-gray-300" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Twitter className="w-6 h-6 text-gray-300" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-80">
          <Instagram className="w-6 h-6 text-gray-300" />
        </a>
      </div>

      {/* Contact Information */}
      <div className="text-right mr-4">
        <p>contact@tastifarm.com</p>
        <p>+91 7217620172</p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
