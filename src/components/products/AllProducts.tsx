import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { TFilter, TMeta } from "@/types/global.types";
import { IProduct } from "@/types/product.types";
import { useState } from "react";
import Pagination from "../ui/Pagination";
import ProductCard from "../ui/ProductCard";

const AllProducts = ({ filters }: { filters: TFilter[] }) => {
  const [paginate, setPaginate] = useState<TFilter[]>([]);
  const { data } = useGetAllProductsQuery([...filters, ...paginate]);
  const products: IProduct[] = data?.data;
  const meta: TMeta = data?.meta;

  return (
    <>
      <div className="grid items-start justify-start grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 min-h-[calc(100vh-4rem)]">
        {products?.length ? (
          products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))
        ) : (
          <div className="text-center text-gray-500">No products found</div>
        )}
      </div>
      <Pagination meta={meta} onPageChange={setPaginate} />
    </>
  );
};

export default AllProducts;
