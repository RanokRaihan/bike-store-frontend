import { Button } from "@/components/ui/button";
import { useGetProductbyIdQuery } from "@/redux/features/product/product.api";
import { IProduct } from "@/types/product.types";
import { TruckIcon, Undo2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";

type ProductDetails = {
  id: string;
};
const ProductDetails = () => {
  const { productId } = useParams();
  const { data } = useGetProductbyIdQuery(productId as string);
  const product: IProduct = data?.data;
  const {
    _id,
    brand,
    model,
    price,
    salePrice,
    discount,
    description,
    image,
    inStock,
  } = product || {};
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="w-full flex justify-center items-center ">
          <img src={image} alt={`${brand} ${model}`} />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400">{brand}</span>
            {inStock ? (
              <span className="bg-primary text-white rounded-full text-xs px-4 py-1">
                in Stock
              </span>
            ) : (
              <span className="bg-red-500 text-white rounded-full text-xs px-4 py-1">
                out of Stock
              </span>
            )}
          </div>

          <h1 className="text-3xl text-primary font-semibold mb-6">{model}</h1>
          <div className="flex items-stretch gap-8">
            <div className="flex flex-col ">
              <span className="text-gray-500 text-md line-through">
                ৳{price}
              </span>
              <span className="font-bold text-xl">৳{salePrice}</span>
            </div>
            {discount && (
              <p className="bg-yellow-400 text-wite flex items-center px-4 rounded-md">
                {discount}% Off
              </p>
            )}
          </div>
          <div className="flex items-center gap-4 mt-8 text-lg ">
            <p className="flex items-center gap-2  bg-gray-100 py-2 px-4 rounded-md">
              <TruckIcon /> Free Delevery
            </p>

            <p className="flex items-center gap-2 bg-gray-100 py-2 px-4 rounded-md  ">
              <Undo2 /> Free return
            </p>
          </div>
          <div className="my-8">
            <p className="text-gray-500 text-md mt-4">{description}</p>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <Button variant="default" asChild disabled={!inStock}>
              <Link to={`/checkout/${_id}`}>Buy Now</Link>
            </Button>
          </div>
        </div>
      </div>
      {/* <div className="container mx-auto  p-4">
        {" "}
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div> */}
    </main>
  );
};

export default ProductDetails;
