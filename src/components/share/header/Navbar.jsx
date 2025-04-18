"use client";
import { PiShoppingCartLight } from "react-icons/pi";
import { useState } from "react";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { useSelector } from "react-redux";
import { useGetProfileQuery } from "@/redux/api/authApi";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { products } = useSelector((state) => state.card);
  const { data } = useGetProfileQuery();

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
            <Link href="/shops" className="hover:text-gray-200">
              Shops
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
          <div className=" relative">
            <Link
              href={"/shopping-card"}
              className={`md:bg-primary-base cursor-pointer rounded-full  w-[40px] h-[40px] flex justify-center items-center text-primary-base md:text-white`}
            >
              <PiShoppingCartLight className="text-[14px] md:text-[24px]" />
              <p className="bg-red-500  font-semibold absolute  left-[18px]  -top-[4px] w-[20px] h-[20px] flex justify-center items-center rounded-full text-white">
                <span className="text-[10px]"> {products?.length}</span>
              </p>
            </Link>
          </div>
          <li>
            {data?.data?.email ? (
              <Link href="/profile" className="hover:text-gray-200">
                Profile
              </Link>
            ) : (
              <Link href="/login" className="hover:text-gray-200">
                Signin/Signup
              </Link>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}
