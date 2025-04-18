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
      query: (data) => ({
        url: `/product/products/${data?.id}?category_id=${data?.category_id}`,
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
    getCategoryWisProduct: builder.query({
      query: (data) => ({
        url: `/product/category-wise-product`,
        method: "GET",
        params: data,
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});
export const {
  useCreateProductMutation,
  useUpdateProductMutation,
  useGetAllProductQuery,
  useGetSingleProductQuery,
  useDeleteProductMutation,
  useGetCategoryWisProductQuery,
} = productApi;
