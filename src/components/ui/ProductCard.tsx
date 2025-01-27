import { Link } from "react-router-dom";
import bike from "../../assets/images/bike.png";
import { Button } from "./button";
const ProductCard = () => {
  return (
    <div className="shadow-lg p-6 rounded-lg flex flex-col gap-4 bg-white relative">
      <div className="size-12 bg-yellow-100 rounded-full absolute top-2 right-2 flex flex-col items-center justify-center p-2 z-10">
        <span className="text-xs">20%</span>
        <span className="text-xs">OFF</span>
      </div>
      <div>
        <img src={bike} alt="bike" />
      </div>
      <div className="flex justify-between">
        <div>
          <h2 className="flex flex-col ">
            <span className="text-gray-500 text-xs">Yamaha</span>
            <span className="text-lg font-semibold">FZ-S V3</span>
          </h2>
        </div>
        <div>
          <div className="flex flex-col items-end">
            <span className="text-gray-500 text-sm line-through">200,000</span>
            <span className="font-bold text-lg">150,000</span>
          </div>
        </div>
      </div>
      <div className="flex flex-wrap justify-between gap-2">
        <Button className="grow" variant="outline">
          Add to cart
        </Button>
        <Button className="grow" asChild variant="default">
          <Link to="/product/1">view details</Link>
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
