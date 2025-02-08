import { IProduct } from "@/types/product.types";
import { Link } from "react-router-dom";
import { Button } from "./button";

type ProductProps = {
  product: IProduct;
};
const ProductCard = ({ product }: ProductProps) => {
  const {
    _id,
    brand,
    model,
    price,
    salePrice,
    discount,
    image,
    category,
    inStock,
  } = product || {};
  return (
    <div className="shadow-lg p-6 rounded-lg flex flex-col gap-4 bg-white relative">
      {
        // Discount badge
        discount > 0 && (
          <div className="size-12 bg-yellow-100 rounded-full absolute top-2 right-2 flex flex-col items-center justify-center p-2 z-10">
            <span className="text-xs">{`${discount}%`}</span>
            <span className="text-xs">OFF</span>
          </div>
        )
      }
      <div className=" bg-white border  rounded-md absolute top-2 left-2 flex items-center justify-center px-2 py-1 z-10">
        <span className="text-xs">{category}</span>
      </div>
      <div className="flex justify-center items-center bg-white h-48 w-full rounded-lg overflow-hidden">
        <img src={image} alt={`${brand} ${model}`} />
      </div>
      <div className="flex justify-between gap-3">
        <div>
          <h2 className="flex flex-col ">
            <span className="text-gray-500 text-xs line-clamp-1">{brand}</span>
            <span className="text-lg line-clamp-2">{model}</span>
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-end">
            {discount > 0 && (
              <span className="text-xs text-red-500 line-through">
                ৳{price}
              </span>
            )}
            <span className="font-bold text-lg text-primary">৳{salePrice}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2 mt-auto">
        <Button className="grow" asChild variant="outline">
          <Link to={`/products/${_id}`}>view details</Link>
        </Button>
        {inStock ? (
          <Button className="grow" variant="default" asChild>
            <Link to={`/checkout/${_id}`}> Buy now</Link>
          </Button>
        ) : (
          <Button className="grow" variant="secondary" asChild disabled>
            <Link to={`/checkout/${_id}`}>stock out</Link>
          </Button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
