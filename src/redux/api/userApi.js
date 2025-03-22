import { baseApi } from "./baseApi";
const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    loginAdmin: builder.mutation({
      query: (data) => ({
        url: "/api/auth/admin-login",
        method: "POST",
        data,
      }),
      invalidatesTags: ["user"],
    }),
    // Query for fetching a single ... by its ID
    getById: builder.query({
      query: (data) => ({
        url: `/api/customers`,
        method: "GET",
      }),
      providesTags: ["customers"],
    }),
    // Query for fetching a all ...
    getAll: builder.query({
      query: (data) => ({
        url: `/api/customers`,
        method: "GET",
      }),
      providesTags: ["customers"],
    }),
    // Mutation for updating a single ... by its ID
    updates: builder.mutation({
      query: (data) => ({
        url: `/api/customers`,
        method: "PUT",
        data,
      }),
      invalidatesTags: ["customers"],
    }),

    // Mutation for deleting a services by its ID
    delete: builder.mutation({
      query: (id) => ({
        url: `/api/customers`,
        method: "DELETE",
      }),
      invalidatesTags: ["customers"],
    }),
  }),
});
export const {
  useLoginAdminMutation,
  useUpdatesMutation,
  useDeleteMutation,
  useGetAllQuery,
  useGetByIdQuery,
} = userApi;
