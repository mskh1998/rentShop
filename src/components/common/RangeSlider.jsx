import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

import "./css/rangeSlider.css";

export default function RangeSlider() {
  const [value, setValue] = React.useState([0, 1000000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Slider
        value={value}
        min={0}
        max={1000000}
        onChange={handleChange}
        valueLabelDisplay="on"
      />
    </Box>
  );
}
