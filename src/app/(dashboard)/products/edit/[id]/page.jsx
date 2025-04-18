import EditProduct from "@/components/pages/admin/products/EditProduct";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <EditProduct id={params?.id} />
    </div>
  );
};

export default page;
