import { MoveRightIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import ProductCard from "../ui/ProductCard";

const Feature = () => {
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
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
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
