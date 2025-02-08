import ProductForm from "@/components/forms/ProductForm";
import { Separator } from "@/components/ui/separator";
import { useGetProductbyIdQuery } from "@/redux/features/product/product.api";
import addProductSchema from "@/schemas/product.validation";
import { IProduct } from "@/types/product.types";
import { useParams } from "react-router-dom";
import { z } from "zod";

type TBikeCategory = "Mountain" | "Road" | "Hybrid" | "Electric";

const UpdateProduct = () => {
  const { productId } = useParams<{ productId: string }>();
  const { data, isLoading } = useGetProductbyIdQuery(productId as string);
  const product: IProduct = data?.data;
  const {
    _id,
    brand,
    model,
    category,
    description,
    price,
    discount,
    quantity,
  } = product || {};
  const initialValues: z.infer<typeof addProductSchema> = {
    brand,
    model,
    category: category as TBikeCategory,
    description,
    price: price?.toString(),
    discount: discount?.toString(),
    quantity: quantity?.toString(),
  };
  if (isLoading) {
    return <div>Hold on, Loading product data...</div>;
  }
  if (!product) {
    return <div>Product not found</div>;
  }
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primary">Update Product</h1>
      <Separator className="mb-8" />
      <ProductForm initialValues={initialValues} id={_id} />
    </div>
  );
};

export default UpdateProduct;
