import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import WorkIcon from "@mui/icons-material/Work";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";

export default function AptManager() {
  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        bgcolor: "background.paper",
        height: "371px",
      }}
    >
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <WorkIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Pending"
          secondary="Manage Pending Appointments"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CheckCircleIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Approved"
          secondary="View Approved Appointments"
        />
      </ListItem>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <CancelIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Denied" secondary="View Denied Appointments" />
      </ListItem>
    </List>
  );
}
