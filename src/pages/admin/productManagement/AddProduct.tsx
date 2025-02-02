import ProductForm from "@/components/forms/ProductForm";
import { Separator } from "@/components/ui/separator";

const AddProduct = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primary">Add A New Product</h1>
      <Separator className="mb-8" />
      <ProductForm />
    </div>
  );
};

export default AddProduct;
