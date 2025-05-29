import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { routerClient } from "./routerClient";
import { routerAdmin } from "./routerAdmin";
import { routerAuth } from "./routerAuth";
import NotFound from "../page/notfound/NotFound";

const routes = createBrowserRouter([
  routerClient,
  routerAdmin,
  ...routerAuth,
  { path: "*", element: <NotFound /> },
]);

function Router() {
  return <RouterProvider router={routes} />;
}
export default Router;
