'use client';

import React from "react";
const ProductCard = ({ image, name, description }) => {
  return (
    <div className="p-4 w-full sm:w-[280px] h-[180px] bg-yellow-300 shadow-md flex flex-col items-center">
      <img
        src={image}
        alt={name}
        className="w-full h-[100px] object-cover mb-2"
      />
      <h2 className="text-lg font-semibold mb-1 text-center">{name}</h2>
      <p className="text-sm text-gray-700 text-center">{description}</p>
    </div>
  );
};

const ProductSlider = () => {
  const ProductDetails = [
    {
      image: "/media/images/productImage1.svg",
      name: "Mixed Vegetable Pickle",
      description: "A medley of veggies soaked in spices."
    },
    {
      image: "/media/images/productImage2.svg",
      name: "Garlic Pickle",
      description: "Rich, aromatic, and full of flavor."
    },
    {
      image: "/media/images/productImage3.svg",
      name: "Stuffed Red Chili Pickle",
      description: "Bold chilies stuffed with rich spices."
    },
    {
      image: "/media/images/productImage1.svg",
      name: "Lemon Pickle",
      description: "Tangy and spicy lemon pickle."
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Our Products</h1>
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[116px]">
          {ProductDetails.map((product, index) => (
            <ProductCard
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductSlider;