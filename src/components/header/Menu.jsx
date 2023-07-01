import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { KeyboardArrowUp } from "@mui/icons-material";
import { Grid } from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import "./menu.css";

import menuItem from "./data/menuItem.json";
import MenuIcons from "./data/MenuIcons";
import { Link } from "react-router-dom";

export default function CustomizedMenus() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [value, setValue] = React.useState("1");

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "account-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        disableElevation
        className="searchButton"
        onClick={handleClick}
        endIcon={open ? <KeyboardArrowUp /> : <KeyboardArrowDownIcon />}
      >
        دسته بندی
      </Button>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        // onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: "visible",
            filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
            mt: 1.5,
            "& .MuiAvatar-root": {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            "&:before": {
              content: '""',
              display: "block",
              position: "absolute",
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <Grid sx={{ display: "flex", flexDirection: "row" }}>
          {/* <Grid
            sx={{
              color: "#282735B2",
              backgroundColor: "#3BCFC026",
              padding: "20px 20px 20px 0",
            }}
          >
            {menuItem.main.map((items) => {
              return (
                <MenuItem onClick={editMenu(items.id)} className="mainMenu">
                  <MenuIcons id={items.id} /> {items.name}
                </MenuItem>
              );
            })}

          </Grid>
          <Grid></Grid> */}

          <TabContext value={value}>
            <Grid sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{
                  color: "#282735B2",
                  backgroundColor: "#3BCFC026",
                  padding: "20px 20px 20px 0",
                  display: "flex",
                  flexDirection: "column",
                }}
                aria-label="lab API tabs example"
              >
                {menuItem.main.map((items) => {
                  return (
                    <Tab
                      className="mainMenu"
                      label={items.name}
                      key={items.id}
                      icon={<MenuIcons id={items.id} />}
                      iconPosition="start"
                      value={items.id}
                    >
                      {/* <MenuIcons id={items.id} /> {items.name} */}
                    </Tab>
                  );
                })}
              </TabList>
            </Grid>

            {menuItem.main.map((x) => {
              return (
                <TabPanel value={x.id} key={x.id} sx={{ display: "flex" }}>
                  {x.detail.map((z) => {
                    return (
                      <div key={z.header} style={{ marginLeft: "20px" }}>
                        <p style={{ color: "#282735", textAlign: "center" }}>
                          {z.header}
                        </p>
                        <div className="menuBox">
                          {z.dependence.map((y) => {
                            return (
                              <Link
                                href={y.url}
                                className="menuLink"
                                style={{ color: "#282735B2" }}
                                key={y.url}
                              >
                                {y.name}
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
                </TabPanel>
              );
            })}
            {/* <TabPanel value="1">Item One</TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">Item Three</TabPanel> */}
          </TabContext>
        </Grid>
      </Menu>
    </div>
  );
}
