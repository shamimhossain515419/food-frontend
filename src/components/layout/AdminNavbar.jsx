"use client";
import { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const AdminNavbar = ({ toggleSidebar }) => {
  return (
    <nav className="bg-blue-500 text-white p-4 flex items-center justify-between">
      <button onClick={toggleSidebar} className="md:hidden">
        <IoMdMenu className="w-6 h-6" />
      </button>
      <h1 className="text-xl font-bold">Admin Dashboard</h1>
    </nav>
  );
};

export default AdminNavbar;
