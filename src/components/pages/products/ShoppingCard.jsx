"use client";
import { removeFromCart, updatedQuantity } from "@/redux/features/cardSlice";
import Image from "next/image";
import React, { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { IoCloseOutline } from "react-icons/io5";
import Link from "next/link";

const ShoppingCard = () => {
  const { products, selectedItems } = useSelector((state) => state.card);
  const totalPrice =
    products?.length > 0 &&
    products.reduce((total, item) => {
      return total + parseInt(item?.stock) * parseFloat(item?.price);
    }, 0);

  const dispatch = useDispatch();

  const handleProductQuantity = (type, item) => {
    const newQuantity =
      type === "increment" ? item?.stock + 1 : item?.stock - 1;

    if (newQuantity > 0) {
      dispatch(updatedQuantity({ type, id: item?.id, value: newQuantity }));
    }
  };
  return (
    <div className=" container  mx-auto pt-20 pb-7 px-2">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold">
          Total items: {selectedItems}{" "}
        </h2>
        <h2 className="text-2xl font-semibold">Total Amount: {totalPrice} </h2>
      </div>
      <div className=" max-w-[850px] mx-auto py-5 mt-1.5 space-y-2">
        {products?.map((item, index) => (
          <div
            key={index}
            className="flex items-center relative justify-between border border-blue-500 p-4 rounded-xl shadow-sm gap-4"
          >
            <Image
              width={250}
              height={250}
              src={
                process.env.NEXT_PUBLIC_IMAGE_API_URL +
                "/storage/" +
                item?.photo
              }
              alt={item?.name}
              className="w-20 h-20 object-cover rounded-lg"
            />
            <div className="flex-1">
              <h3 className="text-lg font-semibold capitalize">{item?.name}</h3>
              <p className="text-gray-500">${item?.price} TK</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => handleProductQuantity("increment", item)}
                className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
              >
                <FaMinus size={16} />
              </button>
              <span className="w-8 text-center">{item.stock}</span>
              <button
                onClick={() => handleProductQuantity("decrement", item)}
                className="p-2 rounded-full bg-gray-200 cursor-pointer hover:bg-gray-300"
              >
                <FaPlus size={16} />
              </button>
            </div>
            <div
              onClick={() => dispatch(removeFromCart(item))}
              className="text-base font-semibold cursor-pointer absolute top-2.5 right-1"
            >
              <IoCloseOutline className="text-2xl  text-red-500 font-semibold" />
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-2 items-center justify-between my-2">
        <Link
          href={`/checkout-page`}
          className="bg-[#18604a] text-center w-full text-white hover:bg-[#518607] duration-300 px-8 py-2 cursor-pointer rounded-md"
        >
          <h1 className="text-white uppercase text-base md:text-md font-semibold">
            Go to checkout
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default ShoppingCard;
