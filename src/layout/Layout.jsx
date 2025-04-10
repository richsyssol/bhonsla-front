import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SocialBar from "../components/SocialBar";

function Layout() {
  return (
    <>
      <Navbar />
      <SocialBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
