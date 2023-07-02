import React from "react";

import RentList from "../../components/rentList/RentList";

import "../../assets/css/mainHome.css";

function MainHome() {
  return (
    <div className="mainHome">
      <div className="searchFilter"></div>
      <div className="rentItems">{/* <RentList /> */}</div>
    </div>
  );
}

export default MainHome;
