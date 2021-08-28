import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 24,
    padding: '6px 24px',
    border: '1px solid',
    lineHeight: 1.5,
    backgroundColor: 'rgb(0,136,125)',
    borderColor: 'rgb(0,136,125)',
    fontFamily: [
      "Skyscanner Relative", "-apple-system", "BlinkMacSystemFont", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "sans-serif"
    ].join(','),
    '&:hover': {
      backgroundColor: '#176962',
      borderColor: '#065750',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'rgb(0,136,125)',
      borderColor: 'rgb(0,136,125)',
    },
    '&:focus': {
      boxShadow: '0 0 0 0.2rem rgba(0,136,125,0.5)',
    },
  },
})(Button);



const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));



export default function CustBtn() {
  const classes = useStyles();

  return (
    <div>
      <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
        Search Hotels <NavigateNextIcon/>
      </BootstrapButton>
    </div>
  );
}
