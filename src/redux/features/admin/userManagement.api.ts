import baseApi from "@/redux/api/baseApi";
import { TFilter } from "@/types/global.types";

const userManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsers: builder.query({
      query: (args: TFilter[]) => {
        const params = new URLSearchParams();
        args.forEach((arg) => {
          params.append(arg.key, arg.value);
        });
        params.append("sortBy", "_id");
        return {
          url: `users`,
          method: "GET",
          params,
        };
      },
      providesTags: ["users"],
    }),

    changeUserStatus: builder.mutation({
      query: (id: string) => ({
        url: `/users/toggle-status/${id}`,
        method: "PATCH",
      }),
      invalidatesTags: ["users"],
    }),
  }),
});

export const { useGetAllUsersQuery, useChangeUserStatusMutation } =
  userManagementApi;
