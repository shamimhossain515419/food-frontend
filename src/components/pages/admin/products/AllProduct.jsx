"use client";
import {
  useDeleteProductMutation,
  useGetAllProductQuery,
} from "@/redux/api/productApi";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AllProduct = () => {
  const { data } = useGetAllProductQuery();
  console.log(data, "data");
  const [deleteCategory] = useDeleteProductMutation();

  const handleDelete = async (item) => {
    try {
      const res = await deleteCategory(item?.id).unwrap();
      if (res.status == true) {
        toast.success("Deleted successfully");
      } else {
        toast.error("Failed to delete");
      }
    } catch (error) {
      toast.error("Failed to delete");
    }
  };
  return (
    <div>
      <div className=" mx-auto ">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl text-gray-800 font-bold">All Product</h1>
          <Link href="/products/create">
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Product
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border-collapse bg-white ">
            <thead>
              <tr className="bg-blue-400 text-white 0">
                <th className="px-4 py-3 text-left  cursor-pointer">Photo</th>
                <th className="px-4 py-3 text-left  cursor-pointer">Name</th>
                <th className="px-4 py-3 text-left  cursor-pointer">Price</th>
                <th className="px-4 py-3 text-left  cursor-pointer">
                  Quantity
                </th>
                <th className="px-4 py-3 text-left ">Date</th>
                <th className="px-4 py-3 text-left ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((product, index) => (
                <tr
                  key={product.id}
                  className={`border-t  border-gray-300  ${
                    index % 2 === 0 ? "bg-gray-50 " : "bg-white "
                  }`}
                >
                  <td className="px-4 py-3  capitalize">
                    <Image
                      width={80}
                      height={80}
                      src={`${process.env.NEXT_PUBLIC_IMAGE_API_URL}/storage/${product?.photo}`}
                      alt="image"
                    ></Image>
                  </td>
                  <td className="px-4 py-3  capitalize">{product?.name}</td>
                  <td className="px-4 py-3  capitalize">{product?.price}</td>
                  <td className="px-4 py-3  capitalize">
                    {product?.quantity || 0}
                  </td>

                  <td className="px-4 py-3">
                    {moment(product?.create_at).format("DD-MM-YYYY")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={"/products/edit/" + product?.id}
                        className=" text-blue-500 cursor-pointer"
                      >
                        <MdEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(product)}
                        className=" text-red-500 cursor-pointer "
                      >
                        <MdDelete size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
