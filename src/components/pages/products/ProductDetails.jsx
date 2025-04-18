"use client";

import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useGetSingleProductQuery } from "@/redux/api/productApi";
import { addToCart } from "@/redux/features/cardSlice";
import Image from "next/image";
import { useState } from "react";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";

const ProductDetails = ({ id }) => {
  const [quantity, setQuantity] = useState(1);
  const { data, error } = useGetSingleProductQuery({ category_id: true, id });
  const productInfo = data?.data?.products;
  const relatedProduct = data?.data?.categories;
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        ...data?.data?.products,
        stock: quantity,
      })
    );
  };

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="max-h-[350px]">
          <Image
            src={
              process.env.NEXT_PUBLIC_IMAGE_API_URL +
              "/storage/" +
              productInfo?.photo
            }
            width={500}
            height={350}
            alt="Product Image"
            className="w-full h-full object-fill rounded-lg shadow-lg"
          />
        </div>

        {/* Product Details */}
        <div>
          <h1 className="text-base md:text-3xl capitalize font-semibold text-gray-800">
            {productInfo?.name}
          </h1>
          <p className="text-gray-600 mt-2">{productInfo?.description}</p>
          <p className="text-xl font-bold text-primary-color mt-4">
            {productInfo?.price} TK
          </p>

          {/* Rating */}
          <div className="flex items-center mt-3">
            {[...Array(5)].map((_, i) => (
              <FaStar
                key={i}
                className={`text-yellow-500 ${
                  i < productInfo?.rating ? "" : "opacity-50"
                }`}
              />
            ))}
            <span className="text-gray-600 ml-2">({4})</span>
          </div>

          {/* Quantity Selector */}
          <div className="mt-4 flex items-center space-x-4">
            <button
              className="bg-gray-300 cursor-pointer px-3 py-1 rounded-md"
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              className="bg-gray-300 cursor-pointer px-3 py-1 rounded-md"
              onClick={() => setQuantity((prev) => prev + 1)}
            >
              +
            </button>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-6 bg-primary-color cursor-pointer text-white px-6 py-2 rounded-lg flex items-center gap-2 hover:bg-green-700 transition"
          >
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
      <div className="pt-25">
        <SectionTitle title={"Related products"}></SectionTitle>
        <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {relatedProduct?.map((product, index) => (
            <ProductCard key={index} card={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
