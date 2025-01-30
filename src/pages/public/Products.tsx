import AllProducts from "@/components/products/AllProducts";
import { ProductSidebar } from "@/components/products/ProductSidebar";

const Products = () => {
  return (
    <div className="bg-gray-50 p-4">
      <div className="container mx-auto flex gap-4">
        <ProductSidebar />
        <main className=" ">
          <div>
            <h1 className="text-4xl text-primary  font-semibold mb-6">
              All Products
            </h1>
            <AllProducts />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
