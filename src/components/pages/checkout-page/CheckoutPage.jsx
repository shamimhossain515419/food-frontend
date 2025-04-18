"use client";
import { useCreateOrdersMutation } from "@/redux/api/orderApi";
import { clearCart } from "@/redux/features/cardSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CheckoutPage = () => {
  const { products, selectedItems } = useSelector((state) => state.card);
  const [createOrders, { isLoading }] = useCreateOrdersMutation();
  const dispatch = useDispatch();
  const totalPrice =
    products?.length > 0 &&
    products.reduce((total, item) => {
      return total + parseInt(item?.stock) * parseFloat(item?.price);
    }, 0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = async (data) => {
    try {
      const formData = {
        ...data,
        products,
        quantity: selectedItems,
        total_price: totalPrice,
      };
      const res = await createOrders(formData).unwrap();
      if (res?.success === true) {
        toast.success("Order create successfully!");
        dispatch(clearCart());
        router.back();
      } else {
        toast.error(res?.message);
      }
    } catch (error) {
      console.log(error, "errorerror");
      toast.error(error?.message);
    }
  };
  return (
    <div>
      <div className=" max-w-[950px] mx-auto mt-10">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">
            Total items: {selectedItems}{" "}
          </h2>
          <h2 className="text-2xl font-semibold">
            Total Amount: {totalPrice}{" "}
          </h2>
        </div>
        <div className="  mx-auto py-5 mt-1.5 space-y-2">
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
                <h3 className="text-lg font-semibold capitalize">
                  {item?.name}
                </h3>
                <p className="text-gray-500">${item?.price} TK</p>
              </div>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="py-5">
          {/* Email Field */}
          <div className="mt-5 space-y-1.5">
            <div className="">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Name
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
                Mobile
              </label>
              <div className="pt-1">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    {...register("mobile", {
                      required: "Mobile is required",
                    })}
                    id="price"
                    type="number"
                    placeholder="012144"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
                {errors.mobile && (
                  <p className="text-red-500 text-sm">
                    {errors.mobile.message}
                  </p>
                )}
              </div>
            </div>
            <div className="">
              <label
                htmlFor="username"
                className="block text-sm/6 font-medium text-gray-900"
              >
                Address
              </label>
              <div className="pt-1">
                <div className="flex items-center rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                  <input
                    {...register("address", {
                      required: "address is required",
                    })}
                    id="address"
                    type="address"
                    placeholder="Dhaka"
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
                {errors.address && (
                  <p className="text-red-500 text-sm">
                    {errors.address.message}
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
    </div>
  );
};

export default CheckoutPage;
