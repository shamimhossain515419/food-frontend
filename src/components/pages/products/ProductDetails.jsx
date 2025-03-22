"use client";

import { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetails = () => {
  const [quantity, setQuantity] = useState(1);

  // Dummy product data (Replace with actual API data)
  const product = {
    id: 1,
    name: "Wireless Headphones",
    description:
      "High-quality wireless headphones with noise cancellation and long battery life.",
    price: 120.99,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg", // Replace with actual image URL
    rating: 4.5,
    reviews: [
      { id: 1, user: "John Doe", comment: "Amazing sound quality!", rating: 5 },
      {
        id: 2,
        user: "Jane Smith",
        comment: "Very comfortable to wear.",
        rating: 4,
      },
    ],
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-3xl font-semibold text-gray-800">
            {product.name}
          </h1>
          <p className="text-gray-600 mt-2">{product.description}</p>
          <p className="text-xl font-bold text-primary-color mt-4">
            ${product.price}
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-500 ${
                  i < product.rating ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="text-gray-600 ml-2">({product.rating})</span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center space-x-4">
            <button
              className="bg-gray-300 px-3 py-1 rounded-md"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="bg-gray-300 px-3 py-1 rounded-md"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-primary-color text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
