import * as React from "react";
import { styled } from "@mui/material/styles";
import MuiGrid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import SignIn from "./Login";
import SignUp from "./Signup";

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: "100%",
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

export default function AdminVerification() {
  return (
    <Grid container>
      <Grid item xs>
        <SignIn />
      </Grid>
      <Divider orientation="vertical" flexItem>
        <img className="logo" src="./assets/logo-dark.png" alt="Logo" />
      </Divider>
      <Grid item xs>
        <SignUp />
      </Grid>
    </Grid>
  );
}
