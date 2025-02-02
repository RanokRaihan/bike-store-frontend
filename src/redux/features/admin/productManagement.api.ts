import baseApi from "@/redux/api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    createProduct: builder.mutation({
      query: (data) => ({
        url: "/products/create-product",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useCreateProductMutation } = productManagementApi;
