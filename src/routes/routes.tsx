import AdminLayout from "@/pages/admin/Layout/AdminLayout";
import About from "@/pages/public/About";
import Home from "@/pages/public/Home";
import Login from "@/pages/public/Login";
import ProductDetails from "@/pages/public/ProductDetails";
import Products from "@/pages/public/Products";
import Register from "@/pages/public/Register";
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
        path: "products",
        element: <Products />,
      },
      {
        path: "products/:productId",
        element: <ProductDetails />,
      },

      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: adminRoutes,
  },
]);

export default router;
