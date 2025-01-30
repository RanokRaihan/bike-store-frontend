import baseApi from "@/redux/api/baseApi";

const userApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (data) => ({
        url: "/users/register",
        method: "POST",
        body: data,
      }),
    }),
    getUser: builder.query({
      query: () => ({
        url: "/user",
        method: "GET",
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: "/user",
        method: "PUT",
        body: data,
      }),
    }),
  }),
});

export const {
  useRegisterUserMutation,
  useGetUserQuery,
  useUpdateUserMutation,
} = userApi;
