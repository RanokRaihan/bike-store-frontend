import CustomerOrderCard from "@/components/order/CustomerOrderCard";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetOrdersQuery } from "@/redux/features/order/order.api";
import { Order } from "@/types/order.type";

const CustomerOrders = () => {
  const { data, isError, isLoading } = useGetOrdersQuery(undefined);
  const orders: Order[] = data?.data?.result;
  if (isLoading)
    return (
      <div className="container mx-auto p-4 flex  flex-col gap-4">
        <Skeleton className="h-[55px] w-[300px]" />
        <Skeleton className="h-[200px]" />
        <Skeleton className="h-[300px]" />
      </div>
    );
  if (isError)
    return (
      <div className="text-destructive text center my-4">
        <p>Something went wrong!</p>
      </div>
    );

  return (
    <main className="min-h-content bg-gray-50">
      <div className=" container mx-auto  p-4">
        <h1 className="text-primary font-semibold text-2xl py-4">All Order</h1>
        <Separator />
        <div className="grid grid-cols-1 gap-4">
          {orders?.length > 0 ? (
            orders?.map((order) => (
              <CustomerOrderCard key={order?._id} order={order} />
            ))
          ) : (
            <p className="text-center text-xl text-gray-600">No order found</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default CustomerOrders;
