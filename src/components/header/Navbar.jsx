import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import Badge from "@mui/material/Badge";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import Avatar from "@mui/material/Avatar";

import "./navbar.css";

import { useContext, useState } from "react";

import { storeContext } from "../../context/storeContext";
import NestedModal from "../modal/NestedModal";
import Modal from "../modal/Modal";
import { Link } from "react-router-dom";

let pages = [
  { name: "خانه", SiteUrl: "/" },
  { name: "فروشگاه", SiteUrl: "/storeItems" },
  { name: "درباره ما", SiteUrl: "/aboutUs" },
  { name: "تماس ما", SiteUrl: "/contactUs" },
];
function Navbar() {
  const { handleOpen, counter } = useContext(storeContext);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <Avatar alt="Remy Sharp" src="./images/logo.png" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, marginRight: 1 }}
          >
            اجاره
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                fontSize: "5rem",
              }}
            >
              {pages.map((page) => (
                <Link
                  key={page.name}
                  to={page.SiteUrl}
                  onClick={handleCloseNavMenu}
                >
                  <MenuItem>
                    <Typography textAlign="center">{page.name}</Typography>
                  </MenuItem>
                </Link>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Link key={page.name} to={page.SiteUrl}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
                  {page.name}
                </Button>
              </Link>
            ))}
          </Box>
          <div>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpen}
              color="inherit"
            >
              <Badge badgeContent={counter} color="error">
                <ShoppingBasketIcon />
              </Badge>
            </IconButton>
            {/* <NestedModal /> */}
            <Modal />
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Navbar;
