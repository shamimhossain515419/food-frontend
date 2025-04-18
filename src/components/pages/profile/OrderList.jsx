"use client";
import { useGetSingleOrderQuery } from "@/redux/api/orderApi";
import moment from "moment";

// components/OrderList.jsx
const orders = [
  {
    id: "#ORD12345",
    date: "2025-04-10",
    total: "$89.99",
    status: "Delivered",
  },
  {
    id: "#ORD12346",
    date: "2025-04-15",
    total: "$129.50",
    status: "Processing",
  },
];

export default function OrderList() {
  const { data, error } = useGetSingleOrderQuery();
  console.log(data, "datadatadata");
  console.log(error, "error");
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-md mt-10 space-y-4">
      <h2 className="text-2xl font-bold mb-4">Order History</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr className="text-left text-gray-600">
            <th className="py-2">Order ID</th>
            <th className="py-2">Date</th>
            <th className="py-2">Quantity</th>
            <th className="py-2">Total</th>
            <th className="py-2">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {data?.data?.map((order) => (
            <tr key={order.id}>
              <td className="py-2">{order?.transaction_id}</td>
              <td className="py-2">
                {moment(order?.created_at).format("DD-M-Y")}
              </td>
              <td className="py-2">{order?.quantity}</td>
              <td className="py-2">{order?.total_price}</td>
              <td className="py-2">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    order.status === "0"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {order.status == "0" ? "Pending" : "Accept"}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
