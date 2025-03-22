import Footer from "@/components/share/footer/Footer";
import Navbar from "@/components/share/header/Navbar";
import React from "react";

const layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default layout;
