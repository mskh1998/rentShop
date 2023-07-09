import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import { Hidden, Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";

import josnData from "../../json/homepage.json";
import filterData from "../../json/filterItems.json";

import "../../assets/css/mainHome.css";
import ListCard from "../../components/card/ListCard";
import RangeSlider from "../../components/common/RangeSlider";

function MainHome() {
  const [alignment, setAlignment] = React.useState("new");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  return (
    <div className="mainHome">
      <div className="searchFilter">
        <Paper
          component="form"
          sx={{
            p: "5px 10px",
            display: "flex",
            alignItems: "center",
            width: "100%",
            marginBottom: "20px",
            boxShadow: "none",
            border: "1px solid #28273526",
          }}
        >
          <InputBase sx={{ ml: 1, flex: 1 }} placeholder="جستجو" />
          <IconButton sx={{ p: "10px" }} aria-label="search">
            <SearchIcon />
          </IconButton>
        </Paper>
        <div className="filterBox" style={{ overflow: "Hidden" }}>
          <p>محدوده قیمت</p>
          <Typography
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <RangeSlider />
          </Typography>
        </div>
        {filterData.map((x) => {
          return (
            <div key={x.title} className="filterBox">
              <p>{x.title}</p>

              <FormGroup
                sx={{
                  width: "100%",
                  flexDirection: "row",
                }}
                aria-label="position"
              >
                {x.items.map((y) => {
                  return (
                    <FormControlLabel
                      value="end"
                      control={
                        <Checkbox
                          sx={{ color: "#3BCFC0" }}
                          icon={<CircleOutlinedIcon />}
                        />
                      }
                      label={y}
                      labelPlacement="end"
                    />
                  );
                })}
              </FormGroup>
            </div>
          );
        })}
      </div>
      <div className="items">
        <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleAlignment}
          aria-label="text alignment"
          spacing={2}
        >
          <Typography>مرتب سازی بر اساس : </Typography>
          <ToggleButton value="new" aria-label="new">
            جدیدترین
          </ToggleButton>
          <ToggleButton value="expensive" aria-label="expensive">
            گرانترین
          </ToggleButton>
          <ToggleButton value="cheap" aria-label="cheap">
            ارزانترین
          </ToggleButton>
          <ToggleButton value="favorite" aria-label="favorite">
            محبوب ترین
          </ToggleButton>
        </ToggleButtonGroup>
        <div className="rentItems">
          {josnData.map((x) => {
            return <ListCard data={x} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default MainHome;
