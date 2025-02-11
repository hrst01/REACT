import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import React from "react";
import { Outlet } from "react-router";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
