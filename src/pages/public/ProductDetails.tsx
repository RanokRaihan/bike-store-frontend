import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ui/ProductCard";
import { TruckIcon, Undo2 } from "lucide-react";
import bike from "../../assets/images/bike.png";
const ProductDetails = () => {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        <div className="w-full">
          <img src={bike} alt="bike" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-gray-400">Yamaha</span>
            <span className="bg-primary text-white rounded-full text-xs px-4 py-1">
              in Stock
            </span>
          </div>

          <h1 className="text-3xl text-primary font-semibold mb-6">
            Yamaha FZ-S V3
          </h1>
          <div className="flex items-stretch gap-8">
            <div className="flex flex-col ">
              <span className="text-gray-500 text-md line-through">
                BDT 200,000
              </span>
              <span className="font-bold text-xl">BDT 150,000</span>
            </div>
            <p className="bg-yellow-400 text-wite flex items-center px-4 rounded-md">
              20% Off
            </p>
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
            <p className="text-gray-500 text-md mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              voluptatibus, nemo, dolores, quidem quod quae quas quibusdam
              voluptatem iusto magnam dolorum. Quisquam voluptatibus, nemo,
              dolores, quidem quod quae quas quibusdam voluptatem iusto magnam
              dolorum.
            </p>
          </div>
          <div className="flex flex-wrap justify-between gap-2">
            <Button variant="default">Buy now</Button>
          </div>
        </div>
      </div>
      <div className="container mx-auto  p-4">
        {" "}
        <h2 className="text-2xl font-semibold mb-4">Related Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
