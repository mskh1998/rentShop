import React from "react";

import BreadCrumbs from "../../components/common/Breadcrumbs";

import "../../assets/css/itemInfo.css";
import MainInfo from "../../components/itemsInfo/MainInfo";

function ItemsInfo() {
  const breadCrumbsData = [
    { id: "1", URL: "home", title: "1" },
    { id: "1", URL: "home", title: "2" },
    { id: "1", URL: "home", title: "3" },
  ];

  return (
    <div className="itemInfo">
      <BreadCrumbs data={breadCrumbsData} />
      <MainInfo />
    </div>
  );
}

export default ItemsInfo;
