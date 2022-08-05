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
  padding: theme.spacing(2),
  textAlign: "center",
  color: "black",
  elevation: 24,
  boxShadow: 3,
  height: "371px",
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid xs={12}>
          <Navbar />
        </Grid>
        <Grid item xs={4} sx={{ mb: "10px", textAlign: "center" }}>
          <Card
            sx={{ minWidth: 275, bgcolor: "background.paper", boxShadow: 3 }}
            elevation={24}
          >
            <CardContent>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#3F7D20",
                }}
              >
                6
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#232528" gutterBottom>
                Approved
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} sx={{ mb: "10px", textAlign: "center" }}>
          <Card
            className="status-card"
            sx={{
              minWidth: 275,
              bgcolor: "background.paper",
              boxShadow: 3,
            }}
            elevation={24}
          >
            <CardContent>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#F25757",
                }}
              >
                4
              </Typography>
              <Typography
                sx={{
                  fontSize: 14,
                }}
                color="#232528"
                gutterBottom
              >
                Denied
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={4} sx={{ mb: "10px", textAlign: "center" }}>
          <Card
            sx={{ minWidth: 275, bgcolor: "background.paper", boxShadow: 3 }}
            elevation={24}
          >
            <CardContent>
              <Typography
                variant="h1"
                component="div"
                sx={{
                  fontWeight: "bold",
                  color: "#6F73D2",
                }}
              >
                10
              </Typography>
              <Typography sx={{ fontSize: 14 }} color="#232528" gutterBottom>
                Pending
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid xs={12} sx={{ ml: "15px" }}>
          <Item sx={{ height: "50%", width: "auto", marginTop: "5px" }}>
            <Typography
              variant="h6"
              component="a"
              href="/"
              sx={{ color: "black", textDecoration: "underline" }}
            >
              OpenBook.com/book-appointment
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
