import React,{useState} from 'react';
import GoogleLogin from 'react-google-login';
import { GoogleLogout } from 'react-google-login';


const LoginGle = ({props,prop2}) => {
    
    return (
        <div style={{display:"flex"}}>
            <GoogleLogin
            clientId="292415161840-sd8vk0i417lh7ajf6a20d39khreovq6o.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={props}
            onFailure={props}
            cookiePolicy={'single_host_origin'}
            />
            <div 
            style={{marginRight:"30px"}}></div>
             <GoogleLogout
        clientId="505650289319-lqsv4od0ti1onea47cir3e16gfispaq7.apps.googleusercontent.com"
        buttonText="Logout"
        onLogoutSuccess={prop2}
        onSuccess={prop2}
      ></GoogleLogout>
        </div>
    )
}

export default LoginGle
