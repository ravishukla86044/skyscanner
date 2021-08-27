import React, { useState } from "react";
import styles from "./Form.module.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FlightIcon from "@material-ui/icons/Flight";
import KingBedIcon from "@material-ui/icons/KingBed";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import TextField from '@material-ui/core/TextField';
import LSearch1 from "../HomePage/Components/FrontShow/LSearch1";
import Stdt from "../HomePage/Components/FrontShow/Stdt";
import Ledt from "../HomePage/Components/FrontShow/Ledt";
import GuestSelect from "../HomePage/Components/FrontShow/GuestSelect";
import cx from "classnames";
import CustBtn from "../HomePage/Components/FrontShow/CustBtn";
import { useHistory } from "react-router-dom";

const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    padding: "7px 7px",
    fontSize: "14px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "rgb(2,18,44)",
    borderColor: "rgb(2,18,44)",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "#162f57",
      borderColor: "#213a61",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "navy",
      borderColor: "navy",
    },
    "&:focus": {
      boxShadow: "0 0 0 1 #0063cc",
    },
  },
})(Button);

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    padding: "7px 7px",
    fontSize: "14px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "#0063cc",
    borderColor: "#0063cc",
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:hover": {
      backgroundColor: "rgb(2,18,44)",
      borderColor: "rgb(2,18,44)",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "navy",
      borderColor: "navy",
    },
    "&:focus": {
      boxShadow: "0 0 0 1 #0063cc",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: "5px 5px",
    marginLeft: "0px",
  },
}));

const Form = ({ formData }) => {
  const [form, setForm] = useState({
    location: formData.current.location,
    sDate: formData.current.sDate,
    lDate: formData.current.lDate,
    stays: formData.current.stays,
  });

  const history = useHistory();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((pre) => ({ ...pre, [name]: value }));
    formData.current[name] = value;
  };
  const classes = useStyles();
  return (
    <div>
      <div maxWidth="lg" className={styles.headBtn}>
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
        >
          <FlightIcon /> Flights
        </BootstrapButton>
        <BootstrapButton2
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
        >
          <KingBedIcon /> Hotels
        </BootstrapButton2>
        <BootstrapButton
          variant="contained"
          color="primary"
          disableRipple
          className={classes.margin}
        >
          <DriveEtaIcon /> Car Hire
        </BootstrapButton>
      </div>
      <div className={styles.frontBoxDiv}>
        <div className={styles.frontBoxDivCont}>
          <div className={styles.fBCBg}>
            <div className={styles.guest}>
              <p>Where do you want to stay ?</p>
              <input type="text" name="location" value={form.location} onChange={handleChange} />
            </div>
            <div>
              <div className={styles.insideBox}>
                <div className={styles.custom}>
                  <p>Check-in</p>
                  <Stdt formData={formData} />
                </div>
                <div className={styles.custom}>
                  <p>Check-out</p>
                  <Ledt formData={formData} />
                </div>
              </div>
            </div>
            <div className={styles.guest}>
              <p>Guest and rooms</p>
              <input type="text" name="stays" value={form.stays} onChange={handleChange} />
            </div>
            <div
              //   onClick={() => {
              //     history.push("/hotels");
              //   }}
              className={styles.button}
            >
              Search hotels
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Form };
