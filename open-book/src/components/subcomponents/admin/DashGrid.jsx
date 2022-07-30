import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import AptManager from "./AptManager";
import DashCal from "./DashCal";
import Navbar from "./Navbar";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={4}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h1" component="div">
                  6
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Approved
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h1" component="div">
                  4
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Denied
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>

        <Grid item xs={4}>
          <Item>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography variant="h1" component="div">
                  10
                </Typography>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  Pending
                </Typography>
              </CardContent>
            </Card>
          </Item>
        </Grid>

        <Grid xs={12}>
          <Item>
            <Typography variant="h6" component="a" href="/">
              Insert invite link here
            </Typography>
          </Item>
        </Grid>

        <Grid item xs={6}>
          <Item>
            <DashCal />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <AptManager />
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
