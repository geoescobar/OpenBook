import {
  Drawer,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function MenuDropdown() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="logo"
        onClick={() => setIsDrawerOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        alignContent="center"
        anchor="top"
        justifyContent="center"
        alignItems="center"
        textAlign="center"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={6} textAlign="center" alignContent="center" role="presentation">
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText
                  sx={{
                    alignItems: "center",
                    textAlign: "center",
                    justifyContent: "center",
                    color: "black",
                    textDecoration: "none",
                    textDecorationColor: "none",
                  }}
                >
                  <Link to={"/dashboard"} className="menu-link">
                    Home
                  </Link>
                </ListItemText>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={"/data-tables"} className="menu-link">
                  Manage Appoinments
                </Link>
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={"/date-picker"} className="menu-link">
                  Send Invite
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                <Link to={"/subscription"} className="menu-link">
                  Manage Subscription
                </Link>
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  alignItems: "center",
                  textAlign: "center",
                  justifyContent: "center",
                }}
              >
                Log Out
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
}
