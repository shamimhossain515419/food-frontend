import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/product/products",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    updateProduct: builder.mutation({
      query: (data) => ({
        url: "/product/products",
        method: "PUT",
        contentType: "multipart/form-data",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getAllProduct: builder.query({
      query: () => ({
        url: `/product/products`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getSingleProduct: builder.query({
      query: (id) => ({
        url: `/product/products/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `/product/products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.product],
    }),
  }),
});
export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
} = productApi;
