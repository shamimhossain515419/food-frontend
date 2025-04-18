import React from "react";
import { FaRegUser } from "react-icons/fa";
import { LuPackageCheck } from "react-icons/lu";
import { IoIosLogOut } from "react-icons/io";
import Link from "next/link";

const layout = ({ children }) => {
  return (
    <>
      <div className="flex min-h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-white shadow-md p-6">
          <h2 className="text-xl font-bold mb-6">My Account</h2>
          <nav className="space-y-4">
            <Link
              href="/profile"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            >
              <FaRegUser className="w-5 h-5" />
              Profile
            </Link>
            <Link
              href="/profile/order-list"
              className="flex items-center gap-3 text-gray-700 hover:text-blue-600"
            >
              <LuPackageCheck className="w-5 h-5" />
              Orders
            </Link>
            <button className="flex items-center gap-3 text-gray-700 hover:text-red-500">
              <IoIosLogOut className="w-5 h-5" />
              Logout
            </button>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-8">{children}</main>
      </div>
    </>
  );
};

export default layout;
