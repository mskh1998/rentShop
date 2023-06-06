import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/header/Navbar";

function NotFoundLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default NotFoundLayout;
