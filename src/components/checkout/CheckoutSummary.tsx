import { IProduct } from "@/types/product.types";
import { Separator } from "../ui/separator";

interface CheckoutProps {
  product: IProduct;
}

const CheckoutSummary = ({ product }: CheckoutProps) => {
  const { brand, model, image } = product || {};
  return (
    <div>
      <h1 className="py-4 text-2xl font-semibold text-primary">
        Checkout Summary
      </h1>
      {product ? (
        <div>
          <div className="w-full flex justify-center items-center rounded-md overflow-hidden">
            <img src={image} alt={`${brand} ${model}`} />
          </div>

          <h2 className="text-xl py-4">{`${brand} ${model}`}</h2>
          <div className="w-full sm:w-2/3 text-gray-700">
            <div className="flex items-center justify-between gap-2 my-2 ">
              <p>sale Price</p>
              <p>৳ {product.salePrice}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-2 my-2 ">
              <p>Quantity</p>
              <p>1</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-2 my-2 ">
              <p>Subtotal</p>
              <p>৳ {product.salePrice}</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-2 my-2">
              <p>Delivary Charge</p>
              <p className="text-primary font-semibold">Free</p>
            </div>
            <Separator />
            <div className="flex items-center justify-between gap-2 my-2">
              <p>Total</p>
              <p>৳ {product.salePrice}</p>
            </div>
          </div>
        </div>
      ) : (
        <p>Product not found</p>
      )}
    </div>
  );
};

export default CheckoutSummary;
