import { RouteObject } from "react-router-dom";
import Login from "../page/auth/login/Login";
import Register from "../page/auth/register/Register";

export const routerAuth: RouteObject[] = [
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
];
