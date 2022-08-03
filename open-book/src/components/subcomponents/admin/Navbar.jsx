import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import MenuDropdown from "./Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "#003049" }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            <Link to={"/"}>OpenBook</Link>
          </Typography>
          <Button color="inherit">
            <MenuDropdown />
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
