import React from "react";

import { Box, Button, Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Container maxWidth="md">
        <Grid container>
          <Grid
            xs={12}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <img
              src="/images/notFoundPage.png"
              alt="notFoundPage"
              width="80%"
            />
            <Button
              variant="contained"
              size="large"
              color="warning"
              onClick={() => {
                navigate("/");
              }}
            >
              Back to dashboard
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default NotFound;
