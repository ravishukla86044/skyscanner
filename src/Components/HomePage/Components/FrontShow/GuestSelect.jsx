import React from "react";
import TextField from "@material-ui/core/TextField";
import { useState, useEffect } from "react";

export default function GuestSelect({ formData }) {
  const [number, setNumber] = useState(1);
  useEffect(() => {
    formData.current = {
      ...formData.current,
      stays: number,
    };
  }, []);
  const handleChange = (e) => {
    setNumber(e.target.value);
    formData.current = {
      ...formData.current,
      stays: e.target.value,
    };
    //console.log(formData);
  };
  return (
    <TextField
      type="number"
      id="outlined-helperText"
      defaultValue=""
      variant="outlined"
      style={{ width: "100%" }}
      onChange={handleChange}
    />
  );
}
