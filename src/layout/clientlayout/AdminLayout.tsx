import React from "react";
import Header from "../../components/admin/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/client/Footer";

const AdminLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default AdminLayout;
