import * as React from "react";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";

import Menu from "./Menu";
import LandingNav from "./pageType/LandingNav";

import "./navbar.css";
import LoginNav from "./pageType/LoginNav";

function Navbar({ pageUrl }) {
  return (
    <div className="navbar">
      <div className=" d-flex">
        <h1 className="logo">رنتو</h1>
        <div className="d-flex">
          <button className="locationSearch">
            <FmdGoodOutlinedIcon className="location" /> تهران
          </button>

          <Menu />
        </div>
      </div>

      {pageUrl == "/" ? <LandingNav /> : <LoginNav />}
    </div>
  );
}

export default Navbar;
