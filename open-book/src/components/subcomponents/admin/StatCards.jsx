import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export default function StatCard() {
  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h1" component="div">
            6
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Approved
          </Typography>
        </CardContent>
      </Card>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h1" component="div">
            4
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Denied
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
