import React from 'react';
import "./Login.css";
import { Button } from '@mui/material';
import pic from "./images/whatsapp_logo.png";
import { auth, provider } from "./firebase";
import { actionTypes } from './reducer';
import { useStateValue } from "./StateProvider";

function Login() {
    const [{}, dispatch] = useStateValue();
    const signIn = () => {
        auth.signInWithPopup(provider).then((result) => {
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user,
            });
        }).catch((error) => alert(error.message));
    };
  return (
    <div className='login'>
        <div className='login__container'>
            <img src={pic} alt='WhatsApp logo' />
            <div className='login__text'>
                <h1>Sign in to WhatsApp</h1>
            </div>
            <Button onClick={signIn}>
                Sign in with Google
            </Button>
        </div>
    </div>
  )
}

export default Login