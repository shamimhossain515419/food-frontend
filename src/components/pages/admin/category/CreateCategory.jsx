"use client";
import { useLoginMutation } from "@/redux/api/authApi";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateCategory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createCategory, { isLoading }] = useCreateCategoryMutation();
  const route = useRouter();
  const onSubmit = async (data) => {
    try {
      const res = await createCategory(data).unwrap();
      if (res?.status == true) {
        toast.success("Category Create successfully!");
        route.back();
      } else {
        toast.error(res?.message);
      }
      // Redirect to dashboard or home page
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <h1 className="text-2xl text-gray-800 font-bold">Create Category</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="mt-5">
          <div className="sm:col-span-4">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Category Name
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  id="username"
                  type="text"
                  placeholder="Category name"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
                {errors.name && (
                  <p className="text-red-500 text-sm">{errors.name.message}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-4">
          <button
            type="submit"
            className="rounded-md cursor-pointer bg-indigo-600 px-3 py-2 w-full text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            {isLoading ? "Loading..." : "Save"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
