import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { useFetchDashboardDataQuery } from "@/redux/features/admin/dashboard.api";
import {
  CheckCircle,
  Clock,
  CreditCard,
  LucideIcon,
  Package,
  PackageCheck,
  PackageX,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  UserCheck,
  Users,
  UserX,
  XCircle,
} from "lucide-react";

interface StatCardProps {
  title: string;
  value: number;
  icon: LucideIcon;
  color: string;
  lightColor: string;
  textColor: string;
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  color,
  lightColor,
  textColor,
}: StatCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-gray-600">
          {title}
        </CardTitle>
        <div className={`p-2 rounded-lg ${lightColor}`}>
          <Icon className={`h-5 w-5 ${textColor}`} />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-gray-900">
          {value.toLocaleString()}
        </div>
        <div className="flex items-center mt-2">
          <div className={`w-2 h-2 rounded-full ${color} mr-2`}></div>
          <span className="text-xs text-gray-500">Live data</span>
        </div>
      </CardContent>
    </Card>
  );
};

const AdminDashboard = () => {
  const { data, isLoading } = useFetchDashboardDataQuery(undefined);
  const { userInsight, productInsight, orderInsight } = data?.data || {};

  if (isLoading) {
    return (
      <div className="space-y-6">
        <div className="space-y-2">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-4 w-[300px]" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <Skeleton key={i} className="h-32" />
          ))}
        </div>
      </div>
    );
  }

  const userStats = [
    {
      title: "Total Users",
      value: userInsight?.totalUsers || 0,
      icon: Users,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Total Admins",
      value: userInsight?.totalAdmins || 0,
      icon: ShieldCheck,
      color: "bg-purple-500",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
    },
    {
      title: "Total Customers",
      value: userInsight?.totalCustomers || 0,
      icon: Users,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Active Users",
      value: userInsight?.totalActiveUsers || 0,
      icon: UserCheck,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
    {
      title: "Inactive Users",
      value: userInsight?.totalInactiveUsers || 0,
      icon: UserX,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-600",
    },
  ];

  const productStats = [
    {
      title: "Total Products",
      value: productInsight?.totalBikes || 0,
      icon: Package,
      color: "bg-indigo-500",
      lightColor: "bg-indigo-50",
      textColor: "text-indigo-600",
    },
    {
      title: "In Stock",
      value: productInsight?.totalInStock || 0,
      icon: PackageCheck,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Out of Stock",
      value: productInsight?.totalOutStock || 0,
      icon: PackageX,
      color: "bg-orange-500",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
    },
  ];

  const orderStats = [
    {
      title: "Total Orders",
      value: orderInsight?.totalOrders || 0,
      icon: ShoppingCart,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Pending Orders",
      value: orderInsight?.totalPendingOrders || 0,
      icon: Clock,
      color: "bg-yellow-500",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
    },
    {
      title: "Processing Orders",
      value: orderInsight?.totalProcessingOrders || 0,
      icon: TrendingUp,
      color: "bg-blue-500",
      lightColor: "bg-blue-50",
      textColor: "text-blue-600",
    },
    {
      title: "Delivered Orders",
      value: orderInsight?.totalDeliveredOrders || 0,
      icon: CheckCircle,
      color: "bg-green-500",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
    },
    {
      title: "Cancelled Orders",
      value: orderInsight?.totalCancelledOrders || 0,
      icon: XCircle,
      color: "bg-red-500",
      lightColor: "bg-red-50",
      textColor: "text-red-600",
    },
    {
      title: "Paid Orders",
      value: orderInsight?.totalPaidOrders || 0,
      icon: CreditCard,
      color: "bg-emerald-500",
      lightColor: "bg-emerald-50",
      textColor: "text-emerald-600",
    },
  ];

  return (
    <main className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="text-4xl font-bold text-gray-900">Dashboard Overview</h1>
        <p className="text-gray-600">
          Welcome back! Here's what's happening with your bike store.
        </p>
      </div>

      {/* User Analytics */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Users className="h-6 w-6 text-blue-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            User Analytics
          </h2>
          <Badge variant="secondary">Live Data</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {userStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      {/* Product Analytics */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Package className="h-6 w-6 text-indigo-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Product Analytics
          </h2>
          <Badge variant="secondary">Inventory</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {productStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>

      {/* Order Analytics */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <ShoppingCart className="h-6 w-6 text-green-600" />
          <h2 className="text-2xl font-semibold text-gray-900">
            Order Analytics
          </h2>
          <Badge variant="secondary">Sales</Badge>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {orderStats.map((stat) => (
            <StatCard key={stat.title} {...stat} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default AdminDashboard;
