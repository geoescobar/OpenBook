import * as React from "react";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function DashCal() {
  const [value] = React.useState(new Date());

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="date-picker-wrapper">
        <StaticDatePicker
          orientation="landscape"
          minDate={new Date()}
          openTo="day"
          value={value}
          maxDate={new Date("12/31/2024")}
          renderInput={(params) => <TextField {...params} />}
          // inputFormat="MMMM DD, YYYY"
        />
      </div>
    </LocalizationProvider>
  );
}
