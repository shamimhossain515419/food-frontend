"use client";
import ProductCard from "@/components/ui/ProductCard";
import SectionTitle from "@/components/ui/SectionTitle";
import { useGetCategoryWisProductQuery } from "@/redux/api/productApi";
import React from "react";
const demoProducts = [
  {
    _id: "1",
    name: "Smartphone",
    description: "Latest model with powerful features",
    price: 15000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg",
  },
  {
    _id: "2",
    name: "Headphones",
    description: "Noise-canceling and high-quality sound",
    price: 5000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg",
  },
  {
    _id: "3",
    name: "Laptop",
    description: "Powerful laptop for work and gaming",
    price: 60000,
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Banana-Single.jpg/2324px-Banana-Single.jpg",
  },
];

const FeatureProduct = () => {
  const { data, error } = useGetCategoryWisProductQuery({
    category_id: "1",
  });
  console.log(data, "data");
  console.log(error, "error");
  return (
    <div className="container mx-auto mt-10">
      <SectionTitle title={"Popular product"}></SectionTitle>
      <div className=" py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.data?.map((product, index) => (
          <ProductCard key={index} card={product} />
        ))}
      </div>
    </div>
  );
};

export default FeatureProduct;
