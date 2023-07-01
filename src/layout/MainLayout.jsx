import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "../components/footer/Footer";

function MainLayout() {
  const location = useLocation();
  return (
    <div>
      <Navbar pageUrl={location.pathname} />
      <Outlet />
      {location.pathname !== "/" ? <Footer /> : null}
    </div>
  );
}

export default MainLayout;
