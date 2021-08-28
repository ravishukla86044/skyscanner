import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import axios from "axios";


const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: 400,
    },
    textfield: {
      display: "flex",
      flexDirection: "column",
    },
    details: {
      color: "#4A96FF",
    },
  },
  submitbtn: {
    backgroundColor:"#4A96FF",
    color: "white",
    width: "200px",
    textAlign: "center",
  },


}));

const MainGuest = () => {
  const [guest, setGuest] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [guestonefirstName, setguestoneFirstName] = useState("");
  const [guestonelastName, setguestoneLastName] = useState("");
  const [guesttwofirstName, setguesttwoFirstName] = useState("");
  const [guesttwolastName, setguesttwoLastName] = useState("");
  const [colors,setColor] =useState("#4A96FF")
  const payload = {
    name,
    email,
    phone,
    guestone: `${guestonefirstName} ${guestonelastName}`,
    guesttwo: `${guesttwofirstName} ${guesttwolastName}`,
  };
  const classes = useStyles(colors);

  const handlePlush = () => {
    setGuest(!guest);
  };

  const handleSubmit = (e)=>{
      e.preventDefault();
      axios.post("http://localhost:8000/userData",payload);
      console.log(payload)
     
      setName("")
      setEmail("")
      setPhone("")
      setguestoneFirstName("")
      setguestoneLastName("")
      setguesttwoFirstName("")
      setguesttwoLastName("")
    

  }

  const Guest = styled.div`
    display: flex;
    justify-content: space-between;
    width: 80%;
  `;
  const Underguest = styled.div`
    line-height: 20px;
  `;
  const Guestpara = styled.div`
    display: flex;
    gap: 5px;

    div {
      margin-top: 20px;
    }
  `;

  const Guestplush = styled.div`
    margin-top: 28px;
  `;

  const Namepara = styled.p`
    margin-left: 10px;
  `;
  return (
    <>
      <form className={classes.root} noValidate autoComplete="off" onSubmit={handleSubmit}>
        <Guest>
          <Underguest>
            <Guestpara>
              <h2>Main guest</h2>
              <div>
                {" "}
                <img height="20px" src="main guest.png" />
              </div>
            </Guestpara>

            <p>Please enter details for at least 1 guest.</p>
          </Underguest>

          <Guestplush onClick={handlePlush}>
            <img src="plush sign.png" />
          </Guestplush>
        </Guest>

        <div className={classes.textfield}>
          <div>
            <Namepara>First Name</Namepara>
            <TextField
              label="First Name"
              id="outlined-size-normal"
              placeholder="Enter first name using Roman Characters"
              variant="outlined"
              onChange={(e) => setguestoneFirstName(e.target.value)}
              value={guestonefirstName}
            />
          </div>

          <div>
            <Namepara>Last Name</Namepara>
            <TextField
            
              label="Last Name"
              id="outlined-size-normal"
              placeholder="Enter last name using Roman Characters"
              variant="outlined"
              onChange={(e) => setguestoneLastName(e.target.value)}
              value={guestonelastName}
            />
          </div>
        </div>

        {!guest ? (
          <div>
            <div className={classes.textfield}>
              <div>
                <Guest>
                  <Underguest>
                    <Guestpara>
                      <h2>Guest2</h2>
                      <div>
                        {" "}
                        <img height="20px" src="main guest.png" />
                      </div>
                    </Guestpara>
                  </Underguest>

                  <Guestplush onClick={handlePlush}>
                    <img src="minus sign.png" />
                  </Guestplush>
                </Guest>
                <Namepara>First Name</Namepara>
                <TextField
                  label="First Name"
                  id="outlined-size-normal"
                  placeholder="Enter first name using Roman Characters"
                  variant="outlined"
                  onChange={(e) => setguesttwoFirstName(e.target.value)}
                  value={guesttwofirstName}
                />
              </div>

              <div>
                <Namepara>Last Name</Namepara>
                <TextField
                  label="Last Name"
                  id="outlined-size-normal"
                  placeholder="Enter last name using Roman Characters"
                  variant="outlined"
                  onChange={(e) => setguesttwoLastName(e.target.value)}
                  value={guesttwolastName}
                />
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className={classes.textfield}>
          <h2 style={{ color: "#4A96FF" }}>Booking Contact</h2>
          <div>
            <TextField
              label="Name"
              id="outlined-size-normal"
              placeholder="Name"
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </div>

          <div>
            <TextField
              label="Email"
              id="outlined-size-normal"
              placeholder="Email"
              variant="outlined"
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              value={email}
            />
          </div>
          <div>
            <TextField
              label="Phone"
              id="outlined-size-normal"
              placeholder="Phone"
              variant="outlined"
              type="number"
              onChange={(e) => setPhone(e.target.value)}
              value={phone}
            />
          </div>
        </div>
      </form>

      <div style={{marginTop:"20px",marginLeft:"5px"}}>
        <Button className={classes.submitbtn} variant="contained" onClick={handleSubmit}>
          Add Details
        </Button>
      </div>
    </>
  );
};

export default MainGuest;
