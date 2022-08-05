import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained">
        <Link to={"/admin-verification"}>Login</Link>
      </Button>
    </Stack>
  );
}
