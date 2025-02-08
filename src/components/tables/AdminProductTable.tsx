import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { cn } from "@/lib/utils";
import { useGetAllProductsQuery } from "@/redux/features/product/product.api";
import { TFilter, TMeta } from "@/types/global.types";
import { IProduct } from "@/types/product.types";
import { useState } from "react";
import { Link } from "react-router-dom";
import DeleteProductButton from "../admin/productManagement/DeleteProductButton";
import TableSkeletons from "../skeletons/TableSkeletons";
import { Button } from "../ui/button";
import Pagination from "../ui/Pagination";

export function AdminProductTable() {
  const [paginate, setPaginate] = useState<TFilter[]>([]);
  const { data, isLoading, isFetching } = useGetAllProductsQuery(paginate);
  const products: IProduct[] = data?.data;
  const meta: TMeta = data?.meta;

  const tableData = products?.map((product) => {
    return {
      id: product._id,

      brand: product.brand,
      model: product.model,
      price: product.price,
      discount: product.discount,
      salePrice: product.salePrice,
      quantity: product.quantity,
      category: product.category,
    };
  });
  if (isLoading) {
    return <TableSkeletons />;
  }

  return (
    <div>
      <Table className={cn({ "opacity-50": isFetching })}>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Brand</TableHead>
            <TableHead>Model</TableHead>
            <TableHead>Category</TableHead>
            <TableHead className="text-right">Price</TableHead>
            <TableHead className="text-right">Discount</TableHead>
            <TableHead className="text-right">Sale Price</TableHead>
            <TableHead className="text-right">Quantity</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tableData?.map(
            ({
              id,
              brand,
              model,
              category,
              price,
              discount,
              salePrice,
              quantity,
            }) => (
              <TableRow key={id}>
                <TableCell className="font-medium">{brand}</TableCell>
                <TableCell>{model}</TableCell>
                <TableCell>{category}</TableCell>
                <TableCell className="text-right">{price}</TableCell>
                <TableCell className="text-right">{discount}</TableCell>
                <TableCell className="text-right">{salePrice}</TableCell>
                <TableCell className="text-right">{quantity}</TableCell>
                <TableCell className="text-right space-x-2">
                  <Button size="sm" asChild>
                    <Link to={`/admin/products/update/${id}`}>Update</Link>
                  </Button>
                  <DeleteProductButton id={id} />
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>

      <Pagination meta={meta} onPageChange={setPaginate} />
    </div>
  );
}
