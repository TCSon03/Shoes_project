import { RouteObject } from "react-router-dom";
import ClientLayout from "../layout/clientlayout/ClientLayout";
import HomePage from "../page/client/home/HomePage";
import ShopPage from "../page/client/shop/ShopPage";
import AboutPage from "../page/client/about/AboutPage";
import BlogPage from "../page/client/blog/BlogPage";

export const routerClient: RouteObject = {
  path: "/",
  element: <ClientLayout />,
  children: [
    { path: "/", element: <HomePage /> },
    { path: "/shop", element: <ShopPage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/blog", element: <BlogPage /> },
  ],
};
