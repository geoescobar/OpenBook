import React from "react";
import Particles from "./Particles";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="title-container">
      <Box
        sx={{ width: "100%", alignItems: "center", justifyContent: "center" }}
      >
        <Stack
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <img
            className="logo-title"
            src="./assets/light-logo.png"
            alt="Logo-light"
          />
        </Stack>
        <Stack spacing={2}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{
              zIndex: "100",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-150px",
            }}
            component="div"
          >
            Appointment Management System
          </Typography>
        </Stack>
        <Stack
          spacing={2}
          sx={{ alignItems: "center", justifyContent: "center" }}
        >
          <Button
            sx={{
              zIndex: "100",
              width: "200px",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "-50px",
              color: "white",
              textDecoration: "none",
              textDecorationColor: "none",
            }}
            variant="contained"
          >
            <Link className="button-title" to={"/admin-verification"}>
              Get Started
            </Link>
          </Button>
        </Stack>

        <Particles />
      </Box>
    </div>
  );
}

export default LandingPage;
