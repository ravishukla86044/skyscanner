import "date-fns";
import React from "react";
import { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, KeyboardDatePicker } from "@material-ui/pickers";

export default function Ledt({ formData }) {
  useEffect(() => {
    formData.current = {
      ...formData.current,
      lDate: selectedDate,
    };
  }, []);

  var res = "";
  const neDate = new Date();
  let Monnt_2day = Number(neDate.getMonth());

  var monVals = 30;

  if (
    Monnt_2day === 0 ||
    Monnt_2day === 2 ||
    Monnt_2day === 4 ||
    Monnt_2day === 6 ||
    Monnt_2day === 7 ||
    Monnt_2day === 9 ||
    Monnt_2day === 11
  ) {
    monVals = 31;
  } else if (Monnt_2day === 1) {
    monVals = 28;
  } else {
    monVals = 30;
  }
  res += neDate;
  res = res.split(" ");
  if (res[2] > monVals) {
    res[2] = res[2] - monVals;
  }
  res[2] = Number(res[2]) + 1;
  res = res.join(" ");
  const [selectedDate, setSelectedDate] = React.useState(res);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    formData.current = {
      ...formData.current,
      lDate: date,
    };
    //console.log("lDate", formData);
  };

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container justifyContent="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="MM/dd/yyyy"
          margin="normal"
          id="date-picker-inline"
          value={selectedDate}
          onChange={handleDateChange}
          KeyboardButtonProps={{
            "aria-label": "change date",
          }}
        />
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
