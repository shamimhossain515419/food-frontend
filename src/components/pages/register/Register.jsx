"use client";

import { authKey } from "@/contents/authKey";
import { useCreateAccountMutation } from "@/redux/api/authApi";
import Cookies from "js-cookie";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [createAccount, { isLoading }] = useCreateAccountMutation();

  const onSubmit = async (data) => {
    try {
      const res = await createAccount(data).unwrap();

      if (res?.status == true) {
        Cookies.set(authKey, res?.data?.token?.access_token, {
          expires: 10, // Set the cookie to expire in 10 days
          secure: process.env.NODE_ENV === "production", // Secure flag for production
          path: "/",
        });
        toast.success("Registration in successfully!");
        window.location.replace("/");
      } else {
        toast.error(res?.message);
      }
      // Redirect to dashboard or home page
    } catch (error) {
      toast.error(error?.message);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-primary-color mb-6">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Full Name</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaUser className="text-gray-500 mr-2" />
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full outline-none"
                {...register("name", { required: "Name is required" })}
              />
            </div>
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Email</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaEnvelope className="text-gray-500 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none"
                {...register("email", { required: "Email is required" })}
              />
            </div>
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label className="block text-gray-700 font-medium">Password</label>
            <div className="flex items-center border rounded-lg p-2">
              <FaLock className="text-gray-500 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                })}
              />
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full cursor-pointer bg-primary-color text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
          >
            {isLoading ? "Loading..." : "Register"}
          </button>
        </form>
        <p className="text-center text-gray-600 mt-4">
          Already have an account?{" "}
          <a href="/login" className="text-primary-color font-semibold">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
