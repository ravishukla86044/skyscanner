import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import clsx from 'clsx';


const useStyles = makeStyles((theme) => ({
  root: {
        flexGrow: 1,
      '&:hover': {
      backgroundColor: 'transparent',
    },
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: "white",
    backgroundColor: "rgb(17, 18, 54)",
    },
  icon: {
    borderRadius: 3,
    width: 16,
    height: 16,
    boxShadow: 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
    backgroundColor: '#f5f8fa',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))',
    '$root.Mui-focusVisible &': {
      outline: '2px auto #4699cc99',
      outlineOffset: 2,
    },
    'input:hover ~ &': {
      backgroundColor: '#ebf1f5',
    },
    'input:disabled ~ &': {
      boxShadow: 'none',
      background: 'rgba(206,217,224,.5)',
    },
  },
  checkedIcon: {
    backgroundColor: '#137cbd',
    backgroundImage: 'linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))',
    '&:before': {
      display: 'block',
      width: 16,
      height: 16,
      backgroundImage:
        "url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath" +
        " fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 " +
        "1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",
      content: '""',
    },
    'input:hover ~ &': {
      backgroundColor: '#106ba3',
    },
  },
}));

function StyledCheckbox(props) {
    const classes = useStyles();
//      const [state, setState] = React.useState({
//         checkedB: false,
//         checkedB2: false,
//         checkedB3: false,
//         checkedB4: false
//     });

//     const handleChange = (event) => {
//         setState({ ...state, [event.target.name]: event.target.checked });
//   };

  return (
    <Checkbox
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      inputProps={{ 'aria-label': 'decorative checkbox' }}
      {...props}
    />
  );
}

 

export default function CheckB() {
   

  const classes = useStyles();

  return (
    <div className={classes.root} style={{color:"white"}}> 
      <Grid container spacing={3} >
        <Grid item lg={7} xs={12} sm={6} >
          <div>
              <Grid container spacing={2}>
                  <Grid item lg={6} xs={6} sm={12}>
                      <FormControlLabel control={<StyledCheckbox />} label="Free Cancelling"/> 
                  </Grid>
                  <Grid item lg={6} xs={6} sm={12}>
                      <FormControlLabel control={<StyledCheckbox />} label="Cleanliness 4.5+"/> 
                  </Grid>
              </Grid>
          </div>
        </Grid>
        <Grid item lg={4} xs={12} sm={6}>
          <div>
              <Grid container spacing={3}>
                  <Grid item lg={6} xs={6} sm={12}>
                      <FormControlLabel control={<StyledCheckbox />} label="4 stars"/> 
                  </Grid>
                  <Grid item lg={6} xs={6} sm={12}>
                      <FormControlLabel control={<StyledCheckbox />} label="3 stars"/> 
                  </Grid>
              </Grid>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
