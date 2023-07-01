import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Google } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import "../../assets/css/loginSignUp.css";

function LoginPage() {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <div className="LoginSign">
      <div className="box login"></div>
      <div className="box d-flex align-items-center">
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "iranYekanText",
            }}
          >
            <Typography component="h1" variant="h5">
              ورود{" "}
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                fullWidth
                id="email"
                // label="پست الکترونیکی یا نام کاربری "
                label={
                  <>
                    <PersonOutlineOutlinedIcon />
                    پست الکترونیکی یا نام کاربری
                  </>
                }
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                fullWidth
                name="password"
                // label="رمز امنیتی"
                label={
                  <>
                    <LockOutlinedIcon />
                    رمز امنیتی
                  </>
                }
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="مرا به خاطر داشته باش"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#CF3B4A",
                  fontFamily: "iranYekanText",
                }}
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/home");
                }}
              >
                ورود
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{
                  mt: 1,
                  mb: 2,
                  fontFamily: "iranYekanText",
                  color: "#282735B2",
                  borderColor: "#282735B2",
                }}
              >
                <Google />
                ورود با حساب گوگل
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    {"فراموشی رمز عبور؟"}
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/signUp" variant="body2">
                    {"آیا شما حساب ندارید؟"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </div>
    </div>
  );
}

export default LoginPage;
