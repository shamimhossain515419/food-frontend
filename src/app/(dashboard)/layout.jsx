import AdminLayout from "@/components/layout/AdminLayout";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      {" "}
      <AdminLayout> {children}</AdminLayout>
    </div>
  );
};

export default layout;
