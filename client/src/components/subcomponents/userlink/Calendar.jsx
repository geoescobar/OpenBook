import * as React from "react";
import isWeekend from "date-fns/isWeekend";
import TextField from "@mui/material/TextField";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export default function StaticDatePickerLandscape({ date, setDate }) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="date-picker-wrapper">
        <StaticDatePicker
          orientation="landscape"
          openTo="day"
          value={date}
          shouldDisableDate={isWeekend}
          minDate={new Date()}
          maxDate={new Date("12/31/2024")}
          onChange={(newValue) => {
            console.log(newValue);
            setDate(newValue);
          }}
          disableOpenPicker
          renderInput={(params) => <TextField {...params} />}
        />
      </div>
    </LocalizationProvider>
  );
}
