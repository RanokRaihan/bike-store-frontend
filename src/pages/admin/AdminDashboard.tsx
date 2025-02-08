import { Skeleton } from "@/components/ui/skeleton";
import { useFetchDashboardDataQuery } from "@/redux/features/admin/dashboard.api";

const AdminDashboard = () => {
  const { data, isLoading } = useFetchDashboardDataQuery(undefined);
  const { userInsight, productInsight, orderInsight } = data?.data || {};
  console.log(data);

  if (isLoading) {
    return (
      <div className="container mx-auto flex flex-col gap-2">
        <Skeleton className="w-full h-24" />
        <Skeleton className="w-2/4 h-24" />
        <Skeleton className="w-3/4 h-24" />
      </div>
    );
  }

  return (
    <main>
      <h1 className="text-4xl text-primary font-bold">Admin dashboard</h1>
      <div className="my-4">
        <h2 className="text-2xl my-4">User Data</h2>
        <div className="flex gap-4 flex-wrap">
          <DataCard title="Total Users" data={userInsight?.totalUsers} />
          <DataCard title="Total Admins" data={userInsight?.totalAdmins} />
          <DataCard
            title="Total Customers"
            data={userInsight?.totalCustomers}
          />
          <DataCard title="Active User" data={userInsight?.totalActiveUsers} />
          <DataCard
            title="Inactive User"
            data={userInsight?.totalInactiveUsers}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl my-4">Product Data</h2>
        <div className="flex gap-4 flex-wrap">
          <DataCard title="Total Products" data={productInsight?.totalBikes} />
          <DataCard title="Total inStock" data={productInsight?.totalInStock} />
          <DataCard
            title="Total out of Stock"
            data={productInsight?.totalOutStock}
          />
        </div>
      </div>
      <div>
        <h2 className="text-2xl my-4">Order Data</h2>
        <div className="flex gap-4 flex-wrap">
          <DataCard title="Total Orders" data={orderInsight?.totalOrders} />
          <DataCard
            title="Total Pending Orders"
            data={orderInsight?.totalPendingOrders}
          />
          <DataCard
            title="Total Delivered Orders"
            data={orderInsight?.totalDeliveredOrders}
          />
          <DataCard
            title="Total Cancelled Orders"
            data={orderInsight?.totalCancelledOrders}
          />
          <DataCard
            title="Total Paid Orders"
            data={orderInsight?.totalPaidOrders}
          />
          <DataCard
            title="Total Processing Orders"
            data={orderInsight?.totalProcessingOrders}
          />
        </div>
      </div>
    </main>
  );
};

const DataCard = ({
  title,
  data,
}: {
  title: string;
  data: string | number;
}) => {
  return (
    <div className="flex gap-2 flex-col border rounded-md p-4 shadow-md bg-white ">
      <h3 className="text-gray-600 text-lg">{title}</h3>
      <p className="font-bold text-primary text-7xl">{data}</p>
    </div>
  );
};

export default AdminDashboard;
