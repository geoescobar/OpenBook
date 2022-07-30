import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ bgcolor: "black" }} position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{ flexGrow: 1, color: "white", textDecoration: "none" }}
          >
            INSERT LOGO HERE
          </Typography>
          <Button color="inherit">Home</Button>
          <Button color="inherit">Pending</Button>
          <Button color="inherit">Approved</Button>
          <Button color="inherit">Denied</Button>
          <Button color="inherit">Logout</Button>
          <Button color="inherit">Send Invite</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
