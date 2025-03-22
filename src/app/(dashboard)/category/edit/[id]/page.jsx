import EditCategory from "@/components/pages/admin/category/EditCategory";
import React from "react";

const page = ({ params }) => {
  return (
    <div>
      <EditCategory id={params?.id} />
    </div>
  );
};

export default page;
