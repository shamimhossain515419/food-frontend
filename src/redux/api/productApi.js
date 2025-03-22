import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/auth/product/products",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: "/auth/product/products",
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getProfile: builder.query({
      query: () => ({
        url: `/auth/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});
export const {
  useLoginMutation,
  useCreateAccountMutation,
  useGetProfileQuery,
} = productApi;
