import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import {
  useChangeOrderStatusMutation,
  useGetAllOrderQuery,
} from "@/redux/features/admin/orderManagement.api";
import { TFilter, TMeta } from "@/types/global.types";
import { Order } from "@/types/order.type";

import { useState } from "react";
import TableSkeletons from "../skeletons/TableSkeletons";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuTrigger,
// } from "../ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import Pagination from "../ui/Pagination";

export function AdminOrderTable() {
  const [paginate, setPaginate] = useState<TFilter[]>([]);
  const { data, isLoading, isFetching } = useGetAllOrderQuery(paginate);
  const [changeStatus, { isLoading: isChangeLoading }] =
    useChangeOrderStatusMutation();
  const orders: Order[] = data?.data?.result;
  const meta: TMeta = data?.data?.meta;

  const tableData = orders?.map((order) => {
    return {
      id: order?._id,
      product:
        order?.products?.[0].product?.brand +
        " " +
        order?.products?.[0].product?.model,
      status: order?.status,
      totalPrice: order?.totalPrice,
      fullName: order?.shippingAddress?.fullName,
    };
  });

  const handleStatusChange = async (id: string, status: string) => {
    const data = { _id: id, status };
    try {
      await changeStatus(data);
      toast.success("Order status updated successfully");
    } catch (error) {
      console.log(error);

      toast.error("Failed to update order status");
    }
  };
  if (isLoading) {
    return <TableSkeletons />;
  }

  return (
    <div>
      <Table className={cn({ "opacity-50": isFetching })}>
        <TableHeader>
          <TableRow>
            <TableHead>Product</TableHead>
            <TableHead>Name</TableHead>

            <TableHead className="text-right">Total Price</TableHead>
            <TableHead className="text-right">Status</TableHead>
            <TableHead className="text-right">Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map(({ id, product, fullName, status, totalPrice }) => (
            <TableRow key={id}>
              <TableCell className="font-medium">{product}</TableCell>
              <TableCell>{fullName}</TableCell>
              <TableCell className="text-right">{totalPrice}</TableCell>
              <TableCell className="text-right">{status}</TableCell>
              <TableCell>
                <Select
                  onValueChange={(value) => handleStatusChange(id, value)}
                >
                  <SelectTrigger disabled={isChangeLoading}>
                    <SelectValue placeholder="Change Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Status</SelectLabel>
                      <SelectItem value="Processing">Processing</SelectItem>
                      <SelectItem value="Delivered">Delivered</SelectItem>
                      <SelectItem value="Cancelled">Cancelled</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
                {/* <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="outline">Change Status</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <Button variant="ghost" className="w-full">
                      Delivered
                    </Button>
                  </DropdownMenuContent>
                </DropdownMenu> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Pagination meta={meta} onPageChange={setPaginate} />
    </div>
  );
}
