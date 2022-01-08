import React, { useContext, useState } from 'react';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import firebaseConfig from '../firebase.config';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { useHistory, useLocation } from 'react-router';
import { loginContext } from '../../../App';
import './Register.css';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // 
}
const Register = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(loginContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const auth = getAuth();
    const [user, setUser] = useState({
        isSignedIn: false,
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        error: '',
        success: false,
    });
    const handleSubmit = (event) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
            createUserWithEmailAndPassword(auth,user.email, user.password)
                .then(res => {
                    console.log(res.user);
                    const newUserInfo = res.user;
                    newUserInfo.error = '';
                    newUserInfo.success = true;
                    // updateUserName(name);
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                })
                .catch((error) => {
                    console.log(error.message);
                    // var errorCode = error.code;
                    // var errorMessage = error.message;
                    // const newUserInfo = {};
                    // newUserInfo.error = errorMessage;
                    // newUserInfo.success = false;
                    // return newUserInfo;
                    // ..
                });
        }
        else {
            alert("Wrong password or email");
        }
        event.preventDefault();
    }

    const handleBlur = (event) => {
        let isFieldValid = true;
        if (event.target.name === 'email') {
            isFieldValid = /\S+@\S+\.\S+/.test(event.target.value);
        }
        else if (event.target.name === 'password') {
            const isPassValid = event.target.value.length > 6;
            const isPassHasNum = /\d{1}/.test(event.target.value);
            isFieldValid = isPassHasNum && isPassValid;
        }
        if (isFieldValid) {
            const newUserInfo = { ...user };
            newUserInfo[event.target.name] = event.target.value;
            setUser(newUserInfo);
        }
    }
    return (
        <div className='register-page'> 
            <h2>Create Account</h2>
            <div className='login-page'>
                
                <form className='login-form' onSubmit={handleSubmit}>
                    <input type="text" name="firstName" onBlur={handleBlur} placeholder="First Name" required />
                    <br />
                    <input className='' name="lastName" onBlur={handleBlur} placeholder="Last Name" required />
                    <br />
                    <input className='' name="email" onBlur={handleBlur} placeholder="Email" required />
                    <br />
                    <input className='password' type="password" name="password" onBlur={handleBlur} placeholder="Password" required />
                    <br />
                    <button className=' registerBtn' type ='submit'>Register</button>
                    <br />
                    <button className=' loginBtn' 
                    onClick={()=> {props.setIsLoginPage(true)}}>Log In</button>
                </form>
                {/* <button className='shopNowBtn loginBtn' 
                    onClick={()=> {props.setIsLoginPage(true)}}>Log In</button> */}
            </div>
        </div>
    );
};

export default Register;