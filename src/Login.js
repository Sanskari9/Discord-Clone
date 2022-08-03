import { Button } from '@material-ui/core';
import {auth, provider} from './firebase';
import React from 'react';
import "./Login.css";

function Login() {
    const signIn =() => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    };
    return (
        <div className='login'>
            <div className="login__logo">
                <img src="https://wiki.argonathrpg.eu/images//d/d0/Discord_logo.png" alt="" />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
