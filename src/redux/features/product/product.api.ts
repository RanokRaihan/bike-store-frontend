import baseApi from "@/redux/api/baseApi";
import { TFilter } from "@/types/global.types";

const productApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: (args: TFilter[]) => {
        const params = new URLSearchParams();
        if (!args.some((filter) => filter.key === "sortBy")) {
          params.append("sortBy", "_id");
        }
        if (!args.some((filter) => filter.key === "order")) {
          params.append("order", "desc");
        }
        if (args) {
          args.forEach((filter) => params.append(filter.key, filter.value));
        }
        return {
          url: `products`,
          method: "GET",
          params,
        };
      },
      providesTags: ["products"],
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
    getRelatedProducts: builder.query({
      query: (id: string) => ({
        url: `products/related/${id}`,
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
  useGetRelatedProductsQuery,
  useGetProductbyIdQuery,
} = productApi;
