import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import styledd from "./Heading.module.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginGle from '../LoginWithGoogle/LoginGle';
import clsx from 'clsx';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  headBtn1: {
    width: "240px",
    height: "28px",
    textAlign: "center",
    fontFamily: "Skyscanner Relative",
    fontSize: "12px",
    padding: "16px 15px",
    marginTop: 25,
    backgroundColor: "white",
    boxShadow: "none",
    boxSizing: "border-box",
    border: "2px solid #d4d4d4",
    "&:hover": {
      border: "2px solid #0770e3",
      backgroundColor: "white",
      boxShadow: "none",
      boxSizing:"border-box",
    }
  },
  headBtn2: {
    width: "7%",
    height: "28px",
    textAlign: "center",
    fontFamily: "Skyscanner Relative",
    fontSize: "16px",
    fontWeight:"600",
    padding: "16px 10px",
    marginTop: 25,
    "lineHeight": 1.5,
    "letterSpacing": 0.1,
    backgroundColor: "white",
    boxShadow: "none",
    boxSizing: "border-box",
    color: "#0770e3",
    border: "2px solid #d4d4d4",
    "&:hover": {
      border: "2px solid #0770e3",
      backgroundColor: "white",
      boxShadow: "none",
      boxSizing:"border-box",
    }
  }
}));

const Heading = () => {
     const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    };
    const [url, setUrl] = useState("https://img.icons8.com/officel/2x/person-male.png");
    const [logg, setLogg] = useState("Login")
    
  const responseGoogle = (response) => {
    console.log(response, "response");
    setUrl(response.profileObj.imageUrl);
    console.log(response.profileObj.imageUrl)
      setLogg("Log Out")
  };
  const logout = (response) => {
      setUrl("https://img.icons8.com/officel/2x/person-male.png");
      setLogg("Login")
  };
  const body = (
    <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">{logg} With Google</h2>
          <LoginGle props={responseGoogle} prop2={logout}/>
    </div>
  );
    return (
        <div>
            <Container maxWidth="lg" className={styledd.containerHead}>
                <div className={styledd.skyscanLogo}>
                    <svg width="200px" height="80px" fill="#0063cc" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 910 149" class="bpk-logo_bpk-logo_ObHzO bpk-logo_bpk-logoinline2cepx SkyscannerHeader_SkyscannerHeaderlogo_3QOcu"><path d="M100.1 127c2.1 0 4.1-.5 6-1.6l21.9-12.6c4.4-2.5 9.5-3.6 14.6-3 26.6 3.1 45.2 8.1 50.7 9.7 1.1.3 2.4-.1 3.1-1 .9-1.1 2-2.9 2.9-5.5.8-2.5.9-4.6.8-6.1-.1-1.2-.9-2.3-2.1-2.6-8.6-2.5-46.7-12.8-97.9-12.8s-89.3 10.3-97.9 12.8c-1.2.3-2 1.4-2.1 2.6-.1 1.4 0 3.5.8 6.1.8 2.6 2 4.4 2.9 5.5.7.9 2 1.3 3.1 1 5.5-1.6 24.2-6.6 50.7-9.7 5.1-.6 10.2.5 14.6 3l21.9 12.6c1.9 1.1 4 1.6 6 1.6zM63.6 56.1c1.2 2.1 3.1 3.5 5.3 4.1 2.2.6 4.5.3 6.6-.9 2.1-1.2 3.5-3.1 4.1-5.3.6-2.2.3-4.5-.9-6.6L59 13.3c-.6-1.1-1.9-1.5-3.1-1.4-1.6.1-3.8.9-6.4 2.4-2.6 1.5-4.4 3-5.3 4.3-.7 1-.9 2.3-.3 3.4l19.7 34.1zm-18 24.4c2.1 1.2 4.5 1.4 6.6.9 2.2-.6 4.1-2 5.3-4.1 1.2-2.1 1.4-4.5.9-6.6-.5-2.1-2-4.1-4.1-5.3L20.2 45.7c-1.1-.6-2.4-.4-3.4.3-1.3.9-2.8 2.7-4.3 5.3-1.5 2.6-2.3 4.8-2.4 6.4-.1 1.3.4 2.5 1.4 3.1l34.1 19.7zM108.8 44c0 2.4-1 4.6-2.5 6.2-1.6 1.6-3.7 2.5-6.2 2.5-2.4 0-4.6-1-6.2-2.5-1.6-1.6-2.5-3.7-2.5-6.2V4.7c0-1.3.8-2.3 2-2.8 1.4-.7 3.7-1.1 6.7-1.1s5.3.4 6.7 1.1c1.1.6 2 1.5 2 2.8V44zm27.8 12.1c-1.2 2.1-3.1 3.5-5.3 4.1-2.2.6-4.5.3-6.6-.9-2.1-1.2-3.5-3.1-4.1-5.3-.6-2.2-.3-4.5.9-6.6l19.7-34.1c.6-1.1 1.9-1.5 3.1-1.4 1.6.1 3.8.9 6.4 2.4 2.6 1.5 4.4 3 5.3 4.3.7 1 .9 2.3.3 3.4l-19.7 34.1zm18 24.4c-2.1 1.2-4.5 1.4-6.6.9-2.2-.6-4.1-2-5.3-4.1-1.2-2.1-1.4-4.5-.9-6.6.6-2.2 2-4.1 4.1-5.3L180 45.7c1.1-.6 2.4-.4 3.4.3 1.3.9 2.8 2.7 4.3 5.3 1.5 2.6 2.3 4.8 2.4 6.4.1 1.3-.4 2.5-1.4 3.1l-34.1 19.7zm217.5-27.1h16.4c.6 0 1.1.4 1.4.9l16.3 41.8L422 54.3c.2-.6.8-.9 1.4-.9h16.1c1.1 0 1.8 1.1 1.3 2l-40 91.8c-.2.5-.8.9-1.3.9h-14.2c-1 0-1.8-1.1-1.3-2l13.7-32.1-26.8-58.6c-.6-.9.1-2 1.2-2zm242.1 9.3v-7.8c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v62.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5V109c-3.1 4.8-9.9 11.1-21 11.1-21.2 0-32.2-16.2-32.2-34.3 0-23.6 16.4-33.7 31.7-33.7 10.1-.1 17.1 4.7 21.5 10.6zm-35.7 23.2c0 11.2 6.9 19.8 18 19.8s18.2-7.5 18.2-19-6.9-20.3-18.7-20.3c-11.1 0-17.5 8.6-17.5 19.5zm66.3 31.3V54.9c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v8.5c3.4-5.9 9.8-11.3 20.7-11.3 11.2 0 23.7 5.5 23.7 30.8v34.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5v-34c0-6.1-1.5-16.6-12.3-16.6s-14.6 9.5-14.6 18.3v32.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.9-.1-1.5-.7-1.5-1.5zm74.3 0V54.9c0-.8.7-1.5 1.5-1.5h14.5c.8 0 1.5.7 1.5 1.5v8.5c3.4-5.9 9.8-11.3 20.7-11.3 11.2 0 23.7 5.5 23.7 30.8v34.3c0 .8-.7 1.5-1.5 1.5H765c-.8 0-1.5-.7-1.5-1.5v-34c0-6.1-1.5-16.6-12.3-16.6s-14.6 9.5-14.6 18.3v32.3c0 .8-.7 1.5-1.5 1.5h-14.5c-.8-.1-1.5-.7-1.5-1.5zm152.3-63.8h14.1c.8 0 1.5.7 1.5 1.5v12.9c2.8-12.8 13.8-17.2 21.8-15.3.7.1 1.1.7 1.1 1.4v14.2c0 .9-.8 1.6-1.8 1.4-14.8-2.9-20.8 5.1-20.8 16.3v31.4c0 .8-.7 1.5-1.5 1.5h-14.5c-.8 0-1.5-.7-1.5-1.5V54.9c.1-.8.8-1.5 1.6-1.5zM276 67.6c-4.5-1.5-6.9-2.4-10.5-3.6-3.7-1.3-10-4.9-10-10.7 0-5.8 4-9.5 12.1-9.5 7.4 0 11.5 3.6 14.2 9.4.4.8 1.3 1.1 2.1.7l11.9-6.9c.6-.4.9-1.2.6-1.9-3.6-7.9-12-17.4-28.6-17.4-18.5 0-30.1 11-30.1 25.5 0 14.4 9.5 21.9 22.4 26.3 4.7 1.6 6.6 2.3 10.6 3.6 7.6 2.6 11.1 6 11.1 10.7 0 4.7-3 10.3-14.8 10.3-10.8 0-14.6-5.7-16.8-11.1-.3-.8-1.3-1.2-2.1-.7l-12.5 7.2c-.6.4-.9 1.1-.6 1.8 4.8 11.8 17.9 18.8 32.6 18.8 17.3 0 31.9-8.8 31.9-26.6s-19-24.4-23.5-25.9zm95.5 34c-.4-.7-1.4-1-2.1-.5-5.6 4.1-12.2 4.2-17.2-3.5-4.2-6.5-9.3-14.5-9.3-14.5l22-27.3c.8-1 .1-2.4-1.1-2.4h-17.2c-.5 0-.9.2-1.2.6l-19 26.1V27.6c0-.8-.7-1.5-1.5-1.5h-14.5c-.8 0-1.5.7-1.5 1.5v89.6c0 .8.7 1.5 1.5 1.5H325c.8 0 1.5-.7 1.5-1.5V88.1s9.7 15.3 13.4 21c5 7.8 12 11 19.6 11 7.2 0 11.8-1.9 17.3-7.3.5-.5.6-1.2.3-1.8l-5.6-9.4zM475.6 81c-4.6-1.7-6.2-2.3-9.7-3.6-3.5-1.3-6.6-3.2-6.6-6s2.6-5.9 7.9-5.9c4.6 0 7.4 1.8 9 5 .4.8 1.3 1 2 .6l10.2-5.9c.7-.4.9-1.3.5-2-2.8-4.9-8.3-11.1-21.6-11.1-16.3 0-24.7 9.4-24.7 19.8s8.5 15.3 16.3 18.4c8.8 3.6 9.4 3.8 10.5 4.2 2.7 1.1 6 2.8 6 5.9 0 3.1-3.6 5.9-9.1 5.9-5.1 0-10.9-2.1-13.3-8-.3-.8-1.3-1.2-2.1-.7l-10.3 5.9c-.6.4-.9 1.1-.6 1.8 3 7.8 11.9 14.7 26.3 14.7 15.6 0 26-8.3 26-20s-8-15.8-16.7-19zm58.6-13.4c6.5 0 11.3 2 15.8 5.2.7.5 1.7.3 2.1-.4l6-10.4c.4-.7.2-1.5-.5-1.9-6.2-4.2-13.9-8.1-24.3-8.1-10.3 0-19.8 2.8-26.6 9.7-6.8 6.8-9.9 14.9-9.9 24.5 0 11.6 4.8 19 10 24.2 5.2 5.2 14.6 9.6 26.6 9.6 10.8 0 18.8-4.5 24.3-8.1.6-.4.8-1.3.4-1.9l-5.9-10.3c-.4-.7-1.4-1-2.1-.5-3.9 2.8-9.5 5.2-15.8 5.2-7.1 0-20-4-20-18.4 0-14.4 12.8-18.4 19.9-18.4zm294.2 38c-5.8 0-11.3-1.4-15.3-4.6-4-3.2-5.9-6.5-5.9-10.4H859c.8 0 1.5-.7 1.5-1.5-.3-15.4-5.3-22.6-10.1-27.5-5-5-13.5-9.6-24.7-9.6s-19.8 4.1-25.7 9.9c-5.8 5.8-10.2 13.2-10.2 24.4s4.5 18.6 10 24.1 14.5 9.6 27.4 9.6c12.2 0 22.5-4.3 29.9-12.8.6-.7.4-1.8-.4-2.2l-10.3-6c-.5-.3-1.2-.3-1.7.2-5.1 4.8-11.6 6.4-16.3 6.4zM825.6 66c8.3 0 15.9 5 17.1 14h-34.9c2.3-9.7 9.5-14 17.8-14z"></path></svg> 
                </div>
                <Button variant="contained" className={clsx(classes.headBtn1,styledd.hd1btn)}>English(U.S)  INDIA ₹ INR</Button>
                {logg==="Login" ? 
                <Button variant="contained" className={clsx(classes.headBtn2,styledd.hd2btn)} onClick={handleOpen}>Log in</Button>: 
                <img src={url} alt="Profile" className={styledd.avtarLogo} onClick={handleOpen}/>}
                <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}
                </Modal>
            </Container>
        </div>
    )
}

export default Heading
