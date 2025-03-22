"use client";
import {
  useDeleteCategoryMutation,
  useGetAllCategoryQuery,
} from "@/redux/api/categoryApi";
import moment from "moment";
import Link from "next/link";
import React from "react";
import toast from "react-hot-toast";
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

const AllCategory = () => {
  const { data } = useGetAllCategoryQuery();
  const [deleteCategory] = useDeleteCategoryMutation();

  const handleDelete = async (item) => {
    try {
      const res = await deleteCategory(item?.id).unwrap();
      console.log(res, "resresres");
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
          <h1 className="text-2xl text-gray-800 font-bold">All Categories</h1>
          <Link href="/category/create">
            <button className="bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Add New Category
            </button>
          </Link>
        </div>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border-collapse bg-white ">
            <thead>
              <tr className="bg-blue-400 text-white 0">
                <th className="px-4 py-3 text-left  cursor-pointer">Name</th>
                <th className="px-4 py-3 text-left ">Date</th>
                <th className="px-4 py-3 text-left ">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.data.map((user, index) => (
                <tr
                  key={user.id}
                  className={`border-t  border-gray-300  ${
                    index % 2 === 0 ? "bg-gray-50 " : "bg-white "
                  }`}
                >
                  <td className="px-4 py-3  capitalize">{user.name}</td>
                  <td className="px-4 py-3">
                    {moment(user?.create_at).format("DD-MM-YYYY")}
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center space-x-2">
                      <Link
                        href={"/category/edit/" + user?.id}
                        className=" text-blue-500 cursor-pointer"
                      >
                        <MdEdit />
                      </Link>
                      <button
                        onClick={() => handleDelete(user)}
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

export default AllCategory;
