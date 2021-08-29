import React from "react";
import styles from "./FrontBox.module.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import FlightIcon from "@material-ui/icons/Flight";
import KingBedIcon from "@material-ui/icons/KingBed";
import DriveEtaIcon from "@material-ui/icons/DriveEta";
import Container from "@material-ui/core/Container";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// import TextField from '@material-ui/core/TextField';
import LSearch1 from "./LSearch1";
import Stdt from "./Stdt";
import Ledt from "./Ledt";
import GuestSelect from "./GuestSelect";
import CheckB from "./CheckB";
import CustBtn from "./CustBtn";
import clsx from "clsx";
const BootstrapButton2 = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 16,
    padding: "6px 12px",
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
    fontSize: 16,
    padding: "6px 12px",
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
    margin: theme.spacing(1),
  },
}));

const FrontBox = ({ formData }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={styles.headBtn}>
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
          <DriveEtaIcon /> Car Rental
        </BootstrapButton>
      </div>
      <div className={styles.frontBoxDiv}>
        <div className={styles.frontBoxDivCont}>
          <Container maxWidth="lg" className={styles.headContFrnt}>
            <h1 className={styles.headingFrntB}>Find your place to stay</h1>
            <div className={styles.fBCBg}>
              <Grid container spacing={1}>
                <Grid item lg={4} xs={12}>
                  <Paper className={classes.paper}>
                    <div className={styles.heDivLab}>Where would you like to stay?</div>
                    <LSearch1 formData={formData} />
                  </Paper>
                </Grid>
                <Grid item lg={2} xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <div className={styles.heDivLab}>Check-in</div>
                    <div className={styles.customDates}>
                      <Stdt formData={formData} />
                    </div>
                  </Paper>
                </Grid>
                <Grid item lg={2} xs={6} sm={3}>
                  <Paper className={classes.paper}>
                    <div className={styles.heDivLab}>Check-out</div>
                    <div className={styles.customDates}>
                       <Ledt formData={formData} />
                    </div>
                  </Paper>
                </Grid>
                <Grid item lg={4} xs={12} sm={5}>
                  <Paper className={classes.paper}>
                    <div className={styles.heDivLab}>Guests and rooms</div>
                    <GuestSelect formData={formData} />
                  </Paper>
                </Grid>
                <Grid item lg={8} xs={12} sm={7}>
                  <Paper className={clsx(classes.paper, styles.customCheckBoxDiv)}>
                    <CheckB formData={formData} />
                  </Paper>
                </Grid>
                <Grid item lg={4} xs={12} sm={4}>
                  <CustBtn formData={formData} />
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FrontBox;
