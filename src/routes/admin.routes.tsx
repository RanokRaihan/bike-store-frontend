import AdminDashboard from "@/pages/admin/AdminDashboard";
import ManageOrders from "@/pages/admin/orderManagement/ManageOrders";
import AddProduct from "@/pages/admin/productManagement/AddProduct";
import ManageProduct from "@/pages/admin/productManagement/ManageProduct";
import ManageUsers from "@/pages/admin/userManagement/ManageUsers";

export const adminRoutes = [
  { index: true, element: <AdminDashboard /> },
  {
    path: "dashboard",
    element: <AdminDashboard />,
  },
  {
    path: "users",
    element: <ManageUsers />,
  },
  {
    path: "products",
    element: <ManageProduct />,
  },
  {
    path: "products/add",
    element: <AddProduct />,
  },
  {
    path: "orders",
    element: <ManageOrders />,
  },
];
