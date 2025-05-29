import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../layout/clientlayout/ClientLayout";
import HomePage from "../page/client/HomePage";
import ShopPage from "../page/client/ShopPage";
import AboutPage from "../page/client/AboutPage";
import BlogPage from "../page/client/BlogPage";
import AdminLayout from "../layout/clientlayout/AdminLayout";
import Dashboard from "../page/admin/Dashboard";
import ProductPage from "../page/admin/ProductPage";
import CategoryPage from "../page/admin/CategoryPage";
import UserPage from "../page/admin/UserPage";
import NotFound from "../page/NotFound";

const routes = createBrowserRouter([
  // Layout client
  {
    path: "/",
    element: <ClientLayout />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/shop", element: <ShopPage /> },
      { path: "/about", element: <AboutPage /> },
      { path: "/blog", element: <BlogPage /> },
    ],
  },

  //   Layout admin
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      { path: "/admin", element: <Dashboard /> },
      { path: "/admin/product", element: <ProductPage /> },
      { path: "/admin/category", element: <CategoryPage /> },
      { path: "/admin/user", element: <UserPage /> },
    ],
  },

  //   Layout auth

  //  Not found
  { path: "*", element: <NotFound /> },
]);

function Router() {
  return <RouterProvider router={routes} />;
}
export default Router;
