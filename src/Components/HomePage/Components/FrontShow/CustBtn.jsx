import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import { useHistory } from "react-router-dom";
import axios from "axios";

const BootstrapButton = withStyles({
  root: {
    boxShadow: "none",
    textTransform: "none",
    fontSize: 24,
    padding: "6px 24px",
    border: "1px solid",
    lineHeight: 1.5,
    backgroundColor: "rgb(0,136,125)",
    borderColor: "rgb(0,136,125)",
    fontFamily: [
      "Skyscanner Relative",
      "-apple-system",
      "BlinkMacSystemFont",
      "Roboto",
      "Oxygen",
      "Ubuntu",
      "Cantarell",
      "Fira Sans",
      "Droid Sans",
      "Helvetica Neue",
      "sans-serif",
    ].join(","),
    "&:hover": {
      backgroundColor: "#176962",
      borderColor: "#065750",
      boxShadow: "none",
    },
    "&:active": {
      boxShadow: "none",
      backgroundColor: "rgb(0,136,125)",
      borderColor: "rgb(0,136,125)",
    },
    "&:focus": {
      boxShadow: "0 0 0 0.2rem rgba(0,136,125,0.5)",
    },
  },
})(Button);

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

export default function CustBtn({ formData }) {
  const classes = useStyles();
  const history = useHistory();
  const handleClick = () => {
    if (!formData.current.location) {
      alert("Please enter loaction");
      return;
    }
    axios
      .put("https://ravi-mock-server.herokuapp.com/userData/1", formData.current)
      .then((res) => {
        history.push("/hotels");
        //console.log(formData.current);
      })
      .catch((err) => {
        alert("something is worng please refresh the page");
      });
  };
  return (
    <div>
      <BootstrapButton
        variant="contained"
        onClick={() => {
          handleClick();
        }}
        color="primary"
        disableRipple
        className={classes.margin}
      >
        Search Hotels <NavigateNextIcon />
      </BootstrapButton>
    </div>
  );
}
