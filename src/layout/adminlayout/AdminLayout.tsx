import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/admin/header/Header";
import Footer from "../../components/admin/footer/Footer";

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
