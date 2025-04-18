"use client";
import ProductCard from "@/components/ui/ProductCard";
import { useGetAllProductQuery } from "@/redux/api/productApi";
import React from "react";

const Shops = () => {
  const { data, error } = useGetAllProductQuery();
  console.log(data, "data");
  console.log(error, "error");
  return (
    <>
      {/* Hero Section */}
      <section className="bg-primary-color text-white py-20 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold">Shopping</h1>
          <p className="mt-4 text-lg">
            Learn more about our company, values, and mission.
          </p>
        </div>
      </section>

      <div className="container mx-auto mt-10">
        <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data?.data?.map((product, index) => (
            <ProductCard key={index} card={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shops;
