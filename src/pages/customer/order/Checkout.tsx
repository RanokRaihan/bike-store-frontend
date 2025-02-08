import CheckoutSummary from "@/components/checkout/CheckoutSummary";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
import { useGetProductbyIdQuery } from "@/redux/features/product/product.api";
import { IProduct } from "@/types/product.types";
import { Loader } from "lucide-react";
import { useParams } from "react-router-dom";

const Checkout = () => {
  const { productId } = useParams();
  const { data, isLoading, isError } = useGetProductbyIdQuery(
    productId as string
  );
  const product: IProduct = data?.data;

  if (isLoading)
    return (
      <main className="h-content bg-gray-50">
        <p className="text-gray-500 text-lg flex gap-2 p-6">
          <Loader className="animate-spin" />
          Loading product details...
        </p>
      </main>
    );
  if (isError)
    return (
      <main className="h-content bg-gray-50">
        <p className="text-red-500 font-semibold text-xl p-6">
          Error Occured! Something went worng!
        </p>
      </main>
    );
  return (
    <main className="min-h-svh bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 p-4">
        <CheckoutSummary product={product} />
        <CheckoutForm productId={product?._id} />
      </div>
    </main>
  );
};

export default Checkout;
