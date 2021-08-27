import React,{useState} from 'react';
import Container from '@material-ui/core/Container';
import styledd from "./Heading.module.css"
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import LoginGle from '../LoginWithGoogle/LoginGle';
import FlagIcon from '@material-ui/icons/Flag';

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
                <div>
                    <img src="https://mma.prnewswire.com/media/1000129/Skyscanner_Logo.jpg?p=facebook" alt="Skyscanner" className={styledd.skyscanLogo} />
                </div>
                <Button variant="contained" className={styledd.headerBtns}>English(U.S)  INDIA ₹ INR</Button>
                {logg==="Login" ? 
                <Button variant="contained" className={styledd.headerBtns2} onClick={handleOpen}>LOG IN</Button>: 
                <img src={url} alt="Profile" className={styledd.avtarLogo} onClick={handleOpen}/>}
                <Modal open={open} onClose={handleClose} aria-labelledby="simple-modal-title" aria-describedby="simple-modal-description">{body}
                </Modal>
            </Container>
        </div>
    )
}

export default Heading
