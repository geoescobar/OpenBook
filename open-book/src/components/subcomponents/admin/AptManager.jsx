import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import { Link } from "react-router-dom";

export default function AptManager() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",

        color: "black",
      }}
    >
      <Link to={"/data-tables?status=pending"}>
        <ListItem sx={{ marginTop: "60px" }}>
          <ListItemAvatar>
            <Avatar sx={{ color: "white", bgcolor: "#232528" }}>
              <WorkIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Pending"
            secondary="Manage Pending Appointments"
            sx={{
              color: "black",
              textDecoration: "none",
            }}
          />
        </ListItem>
      </Link>
      <Link to={"/data-tables?status=approved"}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: "white", bgcolor: "green" }}>
              <CheckCircleIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Approved"
            secondary="View Approved Appointments"
            sx={{
              color: "black",
              textDecoration: "none",
            }}
          />
        </ListItem>
      </Link>

      <Link to={"/data-tables?status=denied"}>
        <ListItem>
          <ListItemAvatar>
            <Avatar sx={{ color: "white", bgcolor: "red" }}>
              <CancelIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="Denied"
            sx={{
              color: "black",
              textDecoration: "none",
            }}
            secondary="View Denied Appointments"
          />
        </ListItem>
      </Link>
    </List>
  );
}
