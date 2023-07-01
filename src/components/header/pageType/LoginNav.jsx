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
import PersonIcon from "@mui/icons-material/Person";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ListAltOutlinedIcon from "@mui/icons-material/ListAltOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import "./loginNav.css";
import { Link } from "react-router-dom";

function LoginNav() {
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
    <div className="login-signUp">
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
        رنتوی من
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
              left: 14,
              width: 10,
              height: 10,
              bgcolor: "background.paper",
              transform: "translateY(-50%) rotate(45deg)",
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: "left", vertical: "top" }}
        anchorOrigin={{ horizontal: "left", vertical: "bottom" }}
      >
        <Grid sx={{ display: "flex", flexDirection: "column" }}>
          <TabContext value={value}>
            <Grid sx={{ borderBottom: 1, borderColor: "divider" }}>
              <TabList
                onChange={handleChange}
                sx={{
                  color: "#282735B2",
                  backgroundColor: "#3BCFC026",
                  padding: "20px",
                  display: "flex",
                  flexDirection: "column",
                }}
                aria-label="lab API tabs example"
              >
                <Tab
                  label={
                    <>
                      <div
                        style={{
                          borderRadius: "50%",
                          border: "1px solid #282735b2",
                          width: "70px",
                          height: "70px",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <PersonIcon />
                      </div>
                      <Button endIcon={<ArrowBackIosIcon />}>
                        محمد سعیدی خادم
                      </Button>
                    </>
                  }
                ></Tab>
              </TabList>
            </Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: 10,
                lineHeight: 2.6,
              }}
            >
              <Link>
                <FavoriteBorderIcon />
                آگهی های من
              </Link>
              <Link>
                <ShoppingCartOutlinedIcon />
                نشان ها
              </Link>
              <Link>
                <ListAltOutlinedIcon />
                سبد خرید
              </Link>
              <Link>
                <LogoutOutlinedIcon />
                خروج از حساب کاربری
              </Link>
            </div>
          </TabContext>
        </Grid>
      </Menu>

      <Button
        style={{
          padding: "8px 25px",
          fontFamily: "iranYekanText",
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("");
        }}
      >
        پشتیبانی
      </Button>
      <Button
        variant="contained"
        style={{
          background: "#CF3B4A",
          padding: "8px 25px",
          fontFamily: "iranYekanText",
          marginRight: 10,
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("");
        }}
      >
        ثبت رنت
      </Button>
    </div>
  );
}

export default LoginNav;
