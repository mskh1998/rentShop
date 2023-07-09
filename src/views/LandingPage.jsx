import React from "react";

import "../assets/css/textEdit.css";

import Search from "../components/search/Search";

function LandingPage() {
  return (
    <div className="">
      <div className="container">
        <div className="row ">
          <div className="col-md-7 main-box">
            <h2>
              هر چیزی را می تونی <span style={{ color: "#4629d3" }}>اجاره</span>{" "}
              کنی !
            </h2>
            <p style={{ width: "500px", margin: "20px 0" }}>
              با رنتو می‌تونی کالاهاتو به دیگران اجاره بدی و درآمد کسب کنی یا
              کالاهای دیگران را اجاره بگیری و پول صرفه‌جویی کنی.
            </p>
            <Search />
          </div>
          <div className="col-md-5">
            <div className="backGroundShape"></div>
            <div className="backGroundImage"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
