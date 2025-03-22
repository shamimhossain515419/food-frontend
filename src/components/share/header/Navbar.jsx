"use client";

import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary-color p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-2xl font-bold">
          Logo
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <IoMdClose size={28} /> : <FaBars size={28} />}
          </button>
        </div>
        <ul
          className={`absolute md:static bg-primary-color md:bg-transparent top-16 left-0 w-full md:w-auto md:flex space-y-4 md:space-y-0 md:space-x-6 p-4 md:p-0 text-white transition-all duration-300 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
        >
          <li>
            <Link href="/" className="hover:text-gray-200">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about-us" className="hover:text-gray-200">
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-gray-200">
              Services
            </Link>
          </li>
          <li>
            <Link href="/login" className="hover:text-gray-200">
              Signin/Signup
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
