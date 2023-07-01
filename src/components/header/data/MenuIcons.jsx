import React from "react";

import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import TvIcon from "@mui/icons-material/Tv";
import WatchIcon from "@mui/icons-material/Watch";
import LightIcon from "@mui/icons-material/Light";
import MicIcon from "@mui/icons-material/Mic";

function MenuIcons({ id, data }) {
  switch (id) {
    case "1":
      return <HouseOutlinedIcon sx={{ marginLeft: 1 }} />;
      break;
    case "2":
      return <DirectionsCarIcon sx={{ marginLeft: 1 }} />;
      break;
    case "3":
      return <TvIcon sx={{ marginLeft: 1 }} />;
      break;
    case "4":
      return <WatchIcon sx={{ marginLeft: 1 }} />;
      break;
    case "5":
      return <LightIcon sx={{ marginLeft: 1 }} />;
      break;
    case "6":
      return <MicIcon sx={{ marginLeft: 1 }} />;
      break;
  }
}

export default MenuIcons;
