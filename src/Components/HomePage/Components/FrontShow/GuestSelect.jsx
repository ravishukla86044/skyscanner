import React from 'react';
import TextField from '@material-ui/core/TextField';


export default function GuestSelect() {
    return (
      <TextField
            id="outlined-helperText"
            defaultValue="2 Adults 1 Room"
            variant="outlined"
            style={{ width: "100%" }}
        />
  );
}
