import { AdminProductTable } from "@/components/tables/AdminProductTable";
import { Separator } from "@/components/ui/separator";

const ManageProduct = () => {
  return (
    <div>
      <h1 className="text-4xl font-semibold text-primary">Manage Product</h1>
      <Separator className="mb-8 mt-4" />
      <AdminProductTable />
    </div>
  );
};

export default ManageProduct;
