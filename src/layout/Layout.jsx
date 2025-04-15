import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
//import SocialBar from "../components/SocialBar";
import MobileSocialIcons from "../components/MobileAndSocialIcons/MobileSocialicons";

function Layout() {
  return (
    <>
      <MobileSocialIcons />
      <Navbar />
      {/* <SocialBar /> */}
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
