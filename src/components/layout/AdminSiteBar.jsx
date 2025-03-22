"use client";
import { useState } from "react";
import Link from "next/link";
import { IoMdHome, IoMdSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";

const AdminSiteBar = ({ isOpen }) => {
  return (
    <aside
      className={`bg-blue-500 text-white w-64 min-h-screen p-5 fixed top-0 left-0 transform ${
        isOpen ? "translate-x-0" : "-translate-x-64"
      } transition-transform md:translate-x-0`}
    >
      <h2 className="text-xl font-bold mb-6">Menu</h2>
      <ul className="space-y-4">
        <li>
          <Link
            href="/"
            className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded"
          >
            <IoMdHome className="w-5 h-5" /> Dashboard
          </Link>
        </li>
        <li>
          <Link
            href="/category"
            className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded"
          >
            <FaUser className="w-5 h-5" /> Category
          </Link>
        </li>
        <li>
          <Link
            href="/products"
            className="flex items-center gap-2 p-2 hover:bg-blue-700 rounded"
          >
            <IoMdSettings className="w-5 h-5" /> Product
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSiteBar;
