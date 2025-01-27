'use client';

import React, { useState, useEffect } from 'react';

const HeroPage = () => {
  const images = [
    '/media/images/heroImage1.svg',
    '/media/images/heroImage2.svg',
    '/media/images/heroImage3.svg',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFading(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFading(false);
      }, 1000);
    }, 10000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="bg-white h-[280px] overflow-hidden flex items-center justify-center">
      <img
        className={`w-full h-auto object-cover transition-opacity duration-1000 ease-in-out ${
          isFading ? 'opacity-0' : 'opacity-100'
        }`}
        src={images[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
      />
    </div>
  );
};

export default HeroPage;