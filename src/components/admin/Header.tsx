import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/admin">Dashboard</Link>
      </li>
      <li>
        <Link to="/admin/product">Product</Link>
      </li>
      <li>
        <Link to="/admin/category">Category</Link>
      </li>
      <li>
        <Link to="/admin/user">User</Link>
      </li>
    </ul>
  );
};

export default Header;
