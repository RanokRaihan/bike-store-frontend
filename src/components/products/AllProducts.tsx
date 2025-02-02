import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { TMeta } from "@/types/global.types";
import { IProduct } from "@/types/product.types";
import ProductCard from "../ui/ProductCard";

const AllProducts = () => {
  const { data } = useGetAllProductsQuery([]);
  const products: IProduct[] = data?.data;
  const meta: TMeta = data?.meta;
  console.log({ meta });
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {products?.map((product) => (
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default AllProducts;
