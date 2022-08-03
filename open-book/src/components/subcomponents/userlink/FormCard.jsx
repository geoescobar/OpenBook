import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function RowAndColumnSpacing() {
  return (
    <Box
      sx={{ width: "100%", "& .MuiTextField-root": { m: 1, width: "10" } }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <Item>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid item xs={6}>
            <TextField required id="outlined-required" label="First Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField required id="outlined-required" label="Last Name" />
          </Grid>
          <Grid item xs={6}>
            <TextField required id="outlined-required" label="Email" />
          </Grid>
          <Grid item xs={6}>
            <TextField required id="outlined-required" label="Phone" />
          </Grid>
        </Grid>
      </Item>
    </Box>
  );
}
