import React from "react";
import Header from "../../components/client/Header";
import { Outlet } from "react-router-dom";
import Footer from "../../components/client/Footer";

const ClientLayout = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default ClientLayout;
