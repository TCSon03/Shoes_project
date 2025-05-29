import { RouteObject } from "react-router-dom";
import AdminLayout from "../layout/adminlayout/AdminLayout";
import Dashboard from "../page/admin/dashboard/Dashboard";
import ProductPage from "../page/admin/product/ProductPage";
import CategoryPage from "../page/admin/category/CategoryPage";
import UserPage from "../page/admin/user/UserPage";

export const routerAdmin: RouteObject = {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <Dashboard /> },
      { path: "/admin/product", element: <ProductPage /> },
      { path: "/admin/category", element: <CategoryPage /> },
      { path: "/admin/user", element: <UserPage /> },
    ],
}