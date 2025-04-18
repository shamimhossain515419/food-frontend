import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    createOrders: builder.mutation({
      query: (data) => ({
        url: "/orders/orders",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.order],
    }),
    getSingleOrder: builder.query({
      query: () => ({
        url: "/orders/get-single-user-order",
        method: "GET",
      }),
      invalidatesTags: [tagTypes.order],
    }),
  }),
});
export const { useCreateOrdersMutation, useGetSingleOrderQuery } = orderApi;
