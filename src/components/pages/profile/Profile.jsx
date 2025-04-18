"use client";
import { useGetProfileQuery } from "@/redux/api/authApi";
import React from "react";

const Profile = () => {
  const { data } = useGetProfileQuery();
  const user = data?.data || {};
  return (
    <div>
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-6 space-y-6">
        <h1 className="text-2xl font-bold mb-4">Customer Profile</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 font-semibold">Full Name</p>
            <p className="text-gray-900">{user?.name}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Email</p>
            <p className="text-gray-900">{user?.email}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Phone</p>
            <p className="text-gray-900">{user?.mobile}</p>
          </div>
          <div>
            <p className="text-gray-600 font-semibold">Shipping Address</p>
            <p className="text-gray-900">{data?.address}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
