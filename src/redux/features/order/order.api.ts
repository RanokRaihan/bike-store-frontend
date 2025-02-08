import baseApi from "@/redux/api/baseApi";

const orderApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createOrder: builder.mutation({
      query: (data) => ({
        url: `orders/place-order`,
        method: "POST",
        body: data,
      }),
    }),
    verifyPayment: builder.query({
      query: (order_id) => {
        const params = new URLSearchParams();
        params.append("order_id", order_id);
        return { url: `orders/verify-payment`, method: "GET", params };
      },
    }),

    getOrders: builder.query({
      query: () => ({
        url: `orders/my-orders`,
        method: "GET",
      }),
    }),
    updateOrder: builder.mutation({
      query: (data) => ({
        url: `orders/${data._id}`,
        method: "PATCH",
        body: { status: data.status },
      }),
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useVerifyPaymentQuery,
  useGetOrdersQuery,
} = orderApi;
