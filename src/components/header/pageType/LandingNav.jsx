import React from "react";

import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function LandingNav() {
  const navigate = useNavigate();

  return (
    <div className="login-signUp">
      <Button
        variant="contained"
        style={{
          background: "#4629D3",
          padding: "8px 25px",
          fontFamily: "iranYekanText",
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("signUp");
        }}
      >
        ثبت نام
      </Button>
      <Button
        variant="outlined"
        style={{
          borderColor: "#4629D3",
          color: "#4629D3",
          padding: "8px 31px",
          fontFamily: "iranYekanText",
          marginRight: "18px",
        }}
        onClick={(e) => {
          e.preventDefault();
          navigate("login");
        }}
      >
        ورود
      </Button>
    </div>
  );
}

export default LandingNav;
