import React, { useEffect, useState } from 'react'
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  AOS.init({
    once: true,
    offset: 120,
    easing: "ease-out",
    duration: "700",
  });
  
  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout