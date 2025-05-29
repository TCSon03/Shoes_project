import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ClientLayout from "../layout/clientlayout/ClientLayout";
import HomePage from "../page/client/home/HomePage";
import ShopPage from "../page/client/shop/ShopPage";
import AboutPage from "../page/client/about/AboutPage";
import BlogPage from "../page/client/blog/BlogPage";
import Dashboard from "../page/admin/dashboard/Dashboard";
import ProductPage from "../page/admin/product/ProductPage";
import CategoryPage from "../page/admin/category/CategoryPage";
import UserPage from "../page/admin/user/UserPage";
import NotFound from "../page/notfound/NotFound";
import AdminLayout from "../layout/adminlayout/AdminLayout";
import Login from "../page/auth/login/Login";
import Register from "../page/auth/register/Register";

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
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },

  //  Not found
  { path: "*", element: <NotFound /> },
]);

function Router() {
  return <RouterProvider router={routes} />;
}
export default Router;
