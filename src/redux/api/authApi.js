import { tagTypes } from "../tag-types";
import { baseApi } from "./baseApi";
const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // Mutation for creating a new ....
    login: builder.mutation({
      query: (data) => ({
        url: "/auth/login",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),
    // Mutation for creating a new ....
    createAccount: builder.mutation({
      query: (data) => ({
        url: "/auth/register",
        method: "POST",
        data,
      }),
      invalidatesTags: [tagTypes.user],
    }),

    getProfile: builder.query({
      query: () => ({
        url: `/auth/profile`,
        method: "GET",
      }),
      providesTags: [tagTypes.user],
    }),
  }),
});
export const {
  useLoginMutation,
  useCreateAccountMutation,
  useGetProfileQuery,
} = authApi;
