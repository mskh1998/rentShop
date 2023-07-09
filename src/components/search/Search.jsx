import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 550 }}
    >
      <IconButton sx={{ p: "10px" }} aria-label="menu">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="دوچرخه / دوربین عکاسی / تلویزیون"
        inputProps={{ "aria-label": "دوچرخه / دوربین عکاسی / تلویزیون" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
      ></IconButton>
      <IconButton color="primary" aria-label="directions">
        <span
          style={{
            backgroundColor: "#CF3B4A",
            borderRadius: "16px",
            color: "white",
            fontSize: "16px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "115px",
            height: "48px",
          }}
        >
          جستجو
        </span>
      </IconButton>
    </Paper>
  );
}
