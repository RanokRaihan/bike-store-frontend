import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Order } from "@/types/order.type";
import { IProduct } from "@/types/product.types";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

interface OrderCardProps {
  order: Order;
}
const CustomerOrderCard = ({ order }: OrderCardProps) => {
  const { createdAt, products, status, totalPrice, shippingAddress } =
    order || {};
  console.log({ order });
  return (
    <div className="bg-white shadow-md rounded-md overflow-hidden border">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-start bg-gray-100 p-4 ">
        <div className="flex justify-between items-center gap-10">
          <div className="flex flex-col ">
            <span className="text-sm">ORDER PLACED</span>
            <span>
              {new Date(createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-sm">TOTAL</span>
            <span>
              {totalPrice.toLocaleString("en-US", {
                style: "currency",
                currency: "BDT",
              })}
            </span>
          </div>
          <div className="flex flex-col ">
            <span className="text-sm">SHIP TO</span>
            <TooltipProvider>
              <Tooltip delayDuration={0}>
                <TooltipTrigger asChild>
                  <p className="flex items-center gap-1 cursor-pointer">
                    {shippingAddress?.fullName} <ChevronDown />
                  </p>
                </TooltipTrigger>
                <TooltipContent side="bottom">
                  <div className="flex flex-col gap-2 text-sm">
                    <p>{shippingAddress?.address1}</p>
                    <p>{shippingAddress?.address2}</p>
                    <p>{shippingAddress?.phone}</p>
                  </div>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        </div>
        <div>
          <p className="text-sm text-primary flex gap-2">
            <span className="text-sm">ORDER #</span>
            <span>{order?._id}</span>
          </p>
        </div>
      </div>
      <div className="p-4">
        <h2>
          Order Status:{" "}
          <span
            className={cn("font-semibold", {
              "text-yellow-500": ["Pending", "Processing"].includes(status),
              "text-primary": ["Shipped", "Delivered", "Paid"].includes(status),
              "text-red-500": status === "Cancelled",
            })}
          >
            {status}
          </span>
        </h2>
        <div>
          {products?.map((item) => (
            <SingleOrderItem key={item?.product?._id} product={item?.product} />
          ))}
        </div>
      </div>
    </div>
  );
};

const SingleOrderItem = ({ product }: { product: IProduct }) => {
  const { brand, model, salePrice, image, createdAt } = product || {};
  return (
    <div className="flex gap-4 p-4 border-b">
      <div className="max-w-[12rem]">
        <img src={image} alt={model} />
      </div>
      <div>
        <h3 className="text-lg text-primary font-semibold mb-2">
          {model} - {brand}
        </h3>
        <p>
          {salePrice.toLocaleString("en-US", {
            style: "currency",
            currency: "BDT",
          })}
        </p>
        <p className="text-gray-500 text-sm">
          Return item: eligible through{" "}
          {new Date(
            new Date(createdAt).setMonth(new Date(createdAt).getMonth() + 1)
          ).toLocaleDateString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <div className="flex gap-2 my-4">
          <Button variant="default" size="sm" asChild>
            <Link to={`/checkout/${product?._id}`}> Buy Again </Link>
          </Button>
          <Button variant="secondary" size="sm" asChild>
            <Link to={`/products/${product?._id}`}> View Product </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomerOrderCard;
