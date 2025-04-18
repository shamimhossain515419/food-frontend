import ProductDetails from "@/components/pages/products/ProductDetails";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <ProductDetails id={params?.id} />
    </div>
  );
};

export default page;
