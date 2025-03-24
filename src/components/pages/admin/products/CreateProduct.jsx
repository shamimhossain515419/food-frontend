"use client";
import { useGetAllCategoryQuery } from "@/redux/api/categoryApi";
import { useCreateProductMutation } from "@/redux/api/productApi";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createProduct, { isLoading }] = useCreateProductMutation();
  const { data: allCategory } = useGetAllCategoryQuery();
  const router = useRouter();
  const onSubmit = async (data) => {
    const formData = new FormData();
    formData.append("category_id", data.category);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("quantity", data.quantity);
    formData.append("description", data.description);
    formData.append("photo", data.photo[0]); // File input

    try {
      const res = await createProduct(formData).unwrap();
      console.log(res, "resres");
      if (res?.status === true) {
        toast.success("Product created successfully!");
        router.back();
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      toast.error(error?.message);
    }
  };
  return (
    <div className="shadow-md p-5 bg-white rounded-md">
      <h1 className="text-2xl text-gray-800 font-bold">Create Product</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <div className="mt-5 space-y-1.5">
          <div className="">
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-900"
            >
              Select Category
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <select
                  {...register("category", {
                    required: "Category is required",
                  })}
                  id="category"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm"
                >
                  <option value="">Select a category</option>
                  {allCategory?.data?.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            {errors.category && (
              <p className="text-red-500 text-sm">{errors.category.message}</p>
            )}
          </div>

          <div className="">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Product Name
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  {...register("name", {
                    required: "Name is required",
                  })}
                  id="name"
                  type="text"
                  placeholder="Product name"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Price
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  {...register("price", {
                    required: "Price is required",
                  })}
                  id="price"
                  type="number"
                  placeholder="1000$"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              {errors.price && (
                <p className="text-red-500 text-sm">{errors.price.message}</p>
              )}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Photo
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  {...register("photo", {
                    required: "Photo is required",
                  })}
                  id="file"
                  type="file"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              {errors.photo && (
                <p className="text-red-500 text-sm">{errors.photo.message}</p>
              )}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Quantity
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <input
                  {...register("quantity", {
                    required: "Quantity is required",
                  })}
                  id="quantity"
                  type="number"
                  placeholder="1"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                />
              </div>
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}
            </div>
          </div>
          <div className="">
            <label
              htmlFor="username"
              className="block text-sm/6 font-medium text-gray-900"
            >
              Description
            </label>
            <div className="pt-1">
              <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                <textarea
                  {...register("description")}
                  type="text"
                  placeholder="1"
                  rows="5"
                  className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                ></textarea>
              </div>
              {errors.quantity && (
                <p className="text-red-500 text-sm">
                  {errors.quantity.message}
                </p>
              )}
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

export default CreateProduct;
