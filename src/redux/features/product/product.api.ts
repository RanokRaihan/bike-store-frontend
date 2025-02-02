import baseApi from "@/redux/api/baseApi";
import { TFilter } from "@/types/global.types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args: TFilter[]) => {
        let query = "";
        if (args.length) {
          query = args.map((arg) => `${arg.key}=${arg.value}`).join("&");
        }
        return {
          url: `products?${query}`,
          method: "GET",
        };
      },
    }),
    getFeaturedProducts: builder.query({
      query: () => ({
        url: "products/featured",
        method: "GET",
      }),
    }),
    getLatestProducts: builder.query({
      query: () => ({
        url: "products?sort=-createdAt&limit=8",
        method: "GET",
      }),
    }),
    getProductbyId: builder.query({
      query: (id: string) => ({
        url: `products/${id}`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetFeaturedProductsQuery,
  useGetLatestProductsQuery,
  useGetProductbyIdQuery,
} = productApi;
