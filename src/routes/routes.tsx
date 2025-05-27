import ProtectedRoute from "@/components/layout/ProtectedRoute";
import PublicRoute from "@/components/layout/PublicRoute";
import AdminLayout from "@/pages/admin/Layout/AdminLayout";
import Checkout from "@/pages/customer/order/Checkout";
import CustomerOrders from "@/pages/customer/order/CustomerOrders";
import VerifyPayment from "@/pages/customer/order/VerifyPayment";
import About from "@/pages/public/About";
import ChangePassword from "@/pages/public/ChangePassword";
import Contact from "@/pages/public/Contact";
import Home from "@/pages/public/Home";
import Login from "@/pages/public/Login";
import ProductDetails from "@/pages/public/ProductDetails";
import Products from "@/pages/public/Products";
import Register from "@/pages/public/Register";
import Services from "@/pages/public/Services";
import TestDrive from "@/pages/public/TestDrive";
import UserProfile from "@/pages/public/UserProfile";
import Videos from "@/pages/public/Videos";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { adminRoutes } from "./admin.routes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "videos",
        element: <Videos />,
      },
      { path: "test-drive", element: <TestDrive /> },
      {
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },
      // TODO: use cart system to checkout later
      {
        path: "checkout/:productId",
        element: (
          <ProtectedRoute role="customer">
            <Checkout />
          </ProtectedRoute>
        ),
      },
      {
        path: "verify-payment",
        element: (
          <ProtectedRoute role="customer">
            <VerifyPayment />
          </ProtectedRoute>
        ),
      },
      {
        path: "orders",
        element: (
          <ProtectedRoute role="customer">
            <CustomerOrders />
          </ProtectedRoute>
        ),
      },
      {
        path: "profile",
        element: (
          <ProtectedRoute>
            <UserProfile />
          </ProtectedRoute>
        ),
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },

      {
        path: "/login",
        element: (
          <PublicRoute>
            <Login />
          </PublicRoute>
        ),
      },
      {
        path: "/register",
        element: (
          <PublicRoute>
            <Register />
          </PublicRoute>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute role="admin">
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: adminRoutes,
  },
]);

export default router;

// ?order_id=SP67a1a9d684d49
