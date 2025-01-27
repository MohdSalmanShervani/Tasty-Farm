'use client';

import React from "react";
const ProductCard = ({ image, name, description }) => {
  return (
    <div className="shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full object-cover mb-2"
      />
   {/*   <div className="relative group  mx-auto  bg-gray-800 flex items-center justify-center">
        <span className="absolute text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          Hovered Text
        </span>
      </div> */}
      {/* <h2 className="text-lg font-semibold mb-1 text-center">{name}</h2>
      <p className="text-sm text-gray-700 text-center">{description}</p> */}
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
      image: "/media/images/productImage4.svg",
      name: "Lemon Pickle",
      description: "Tangy and spicy lemon pickle."
    },
  ];

  return (
    <div className="w-full p-4 flex flex-col items-center">
      <h1 className="text-2xl font-bold text-black mb-4
      ">OUR PRODUCTS</h1>
      
        <div className="flex flex-row xl:px-2 xl:pt-0 justify-between mb-3 gap-4">
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
  );
};

export default ProductSlider;