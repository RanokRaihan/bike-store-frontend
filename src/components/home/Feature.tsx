import { useGetFeaturedProductsQuery } from "@/redux/features/product/product.api";
import { IProduct } from "@/types/product.types";
import { MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProductCard from "../ui/ProductCard";

const Feature = () => {
  const { data, error, isLoading } = useGetFeaturedProductsQuery(undefined);
  const featuredProducts: IProduct[] = data?.data;
  console.log(featuredProducts);
  return (
    <div className="w-full bg-gray-50">
      <div className="container w-full mx-auto my-4 p-4 ">
        <div className="mt-10 mb-12 text-center">
          <h1 className="text-4xl text-primary  font-semibold ">
            Featured Bikes
          </h1>
          <p className="mt-2 text-gray-500">
            Bikes those are loved by our customer
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading && <div>Loading...</div>}
          {error && <div>Something went wrong</div>}
          {featuredProducts &&
            featuredProducts.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
        </div>
        <div className="py-8 flex justify-center">
          <Button variant="outlinePrimary" size="lg" asChild>
            <Link to="/products">
              view all products <MoveRightIcon />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Feature;
