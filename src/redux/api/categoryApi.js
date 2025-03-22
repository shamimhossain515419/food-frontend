import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const categoryApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    createCategory: builder.mutation({
      query: (data) => ({
        url: "/product/product-category",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `/product/product-category/${data?.id}`,
        method: "PUT",
        data,
      }),
      invalidatesTags: [tagTypes.product],
    }),
    deleteCategory: builder.mutation({
      query: (id) => ({
        url: `/product/product-category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: [tagTypes.product],
    }),

    getAllCategory: builder.query({
      query: () => ({
        url: `/product/product-category`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
    getSingleCategory: builder.query({
      query: (id) => ({
        url: `/product/product-category/${id}`,
        method: "GET",
      }),
      providesTags: [tagTypes.product],
    }),
  }),
});
export const {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useGetSingleCategoryQuery,
} = categoryApi;
