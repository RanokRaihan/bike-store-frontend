import baseApi from "@/redux/api/baseApi";
import { TFilter } from "@/types/global.types";

const orderManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllOrder: builder.query({
      query: (args: TFilter[]) => {
        const params = new URLSearchParams();
        args.forEach((arg) => {
          params.append(arg.key, arg.value);
        });
        params.append("sortBy", "_id");
        return {
          url: `orders`,
          method: "GET",
          params,
        };
      },
      providesTags: ["adminOrders"],
    }),
    changeOrderStatus: builder.mutation({
      query: (data) => ({
        url: `orders/update-order-status/${data._id}`,
        method: "PATCH",
        body: { status: data?.status },
      }),
      invalidatesTags: ["adminOrders"],
    }),
  }),
});

export const { useGetAllOrderQuery, useChangeOrderStatusMutation } =
  orderManagementApi;
