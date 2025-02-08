import { AdminOrderTable } from "@/components/tables/AdminOrderTable";
import { Separator } from "@/components/ui/separator";

const ManageOrders = () => {
  return (
    <main>
      <div className="mb-4">
        <h1 className="text-4xl font-bold text-primary mb-2">Manage Order</h1>
        <Separator />
        <AdminOrderTable />
      </div>
    </main>
  );
};

export default ManageOrders;
