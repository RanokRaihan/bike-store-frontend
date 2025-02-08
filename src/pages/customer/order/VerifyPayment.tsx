import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useVerifyPaymentQuery } from "@/redux/features/order/order.api";
import { Order } from "@/types/order.type";
import { Loader } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

const VerifyPayment = () => {
  const [searchParams] = useSearchParams(); // ?order_id=SP67a1a9d684d49
  const order_id = searchParams.get("order_id");
  const { data, isLoading, isError } = useVerifyPaymentQuery(order_id);
  const finalOrder: Order = data?.data;

  return (
    <main className="p-4 min-h-[calc(100vh-4rem)]">
      {isLoading && (
        <p className="text-center text-xl flex items-center justify-center gap-2 mt-4">
          <Loader className="animate-spin" />
          Loading...
        </p>
      )}
      {isError && (
        <p className="text-red-500">Error occured! Something went wrong!</p>
      )}
      {finalOrder && (
        <div>
          <div>
            {finalOrder.transaction.bank_status === "Success" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mx-auto text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-24 w-24 mx-auto text-destructive"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </div>
          <div className="text-center mb-6">
            {finalOrder.transaction.bank_status === "Success" ? (
              <h2 className="text-primary text-2xl text-center font-semibold">
                Payment Verified!
              </h2>
            ) : (
              <h2 className="text-destructive text-2xl text-center font-semibold">
                Payment failed!
              </h2>
            )}

            <h3 className="text-lg text-primary text-gray-600 text-center">
              Order Summary
            </h3>
          </div>

          <div className="text-gray-600 max-w-lg mx-auto flex flex-col gap-4">
            <div className="flex justify-between gap-4  ">
              <p>Order ID</p>
              <p> {finalOrder._id}</p>
            </div>
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Payment Method</p>
              <p>{finalOrder.transaction.method}</p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Transaction ID</p>
              <p>{finalOrder.transaction.id}</p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Payment Status</p>
              <p
                className={cn({
                  "text-primary":
                    finalOrder?.transaction?.bank_status === "Success",
                  "text-destructive":
                    finalOrder?.transaction?.bank_status !== "Success",
                })}
              >
                {finalOrder.transaction.bank_status}
              </p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Payment Date</p>
              <p>{finalOrder.transaction.date_time}</p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Shipping Address</p>
              <p className="flex flex-col gap-1 items-end text-right">
                <span>{finalOrder.shippingAddress.fullName}</span>
                <span>{finalOrder.shippingAddress.address1}</span>
                <span>{finalOrder.shippingAddress.address2}</span>
                <span>
                  {finalOrder.shippingAddress.city},
                  {finalOrder.shippingAddress.country},{" "}
                  {finalOrder.shippingAddress.postalCode}
                </span>
              </p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 ">
              <p>Phone</p>
              <p>{finalOrder.shippingAddress.phone}</p>
            </div>{" "}
            <Separator />
            <div className="flex justify-between gap-4 font-bold text-gray-900">
              <p>Total Price</p>
              <p>{finalOrder.totalPrice}</p>
            </div>
          </div>
          <div>
            {finalOrder.transaction.bank_status === "Success" && (
              <h2 className="text-primary text-2xl text-center font-semibold my-8">
                Thank you for shopping with us!
              </h2>
            )}
          </div>
          <div className="w-full flex justify-center gap-4 my-10">
            <Button variant="secondary">
              <Link to="/products">Continue Shopping</Link>
            </Button>
            <Button variant="default">
              <Link to="/orders">View Orders</Link>
            </Button>
          </div>
        </div>
      )}
    </main>
  );
};

export default VerifyPayment;

/*

{
    "success": true,
    "message": "Payment verified successfully",
    "statusCode": 200,
    "data": {
        "transaction": {
            "id": "SP67a1af1886dfb",
            "transactionStatus": null,
            "bank_status": "Success",
            "date_time": "2025-02-04 12:09:43",
            "method": "Nagad",
            "sp_code": "1000",
            "sp_message": "Success"
        },
        "_id": "67a1af17fd74ac873e81bfb6",
        "user": "67a1a847c9690882f668ff6b",
        "products": [
            {
                "product": "67a032464e810ccabbea818a",
                "quantity": 1,
                "salePrice": 3100000,
                "_id": "67a1af17fd74ac873e81bfb7"
            }
        ],
        "totalPrice": 3100000,
        "shippingCharge": 0,
        "shippingAddress": {
            "fullName": "Ranok Raihan",
            "address1": "Village: Hemayetpur, Post: Jugirgofa",
            "address2": "Upazilla: Gangni, District:Meherpur",
            "city": "Meherpur",
            "country": "Bangladesh",
            "postalCode": "7110",
            "phone": "+8801783687070"
        },
        "status": "Paid",
        "createdAt": "2025-02-04T06:09:27.277Z",
        "updatedAt": "2025-02-04T06:13:28.328Z"
    }
}

*/
