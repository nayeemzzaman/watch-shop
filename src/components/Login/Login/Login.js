import React, { useContext, useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import "firebase/auth";
import { getAuth, signInWithEmailAndPassword,signInWithPopup,GoogleAuthProvider,signOut } from "firebase/auth";


import firebaseConfig from '../firebase.config';
import { loginContext } from '../../../App';

import './Login.css';
import ReactModal from 'react-modal';
import Register from '../Register/Register';
import { FaGoogle } from 'react-icons/fa';
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // 
}

const Login = (props) => {
    // console.log(props)
    const [loggedInUser, setLoggedInUser] = useContext(loginContext);
    console.log(loggedInUser);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const auth = getAuth();
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
    });
    const handleGoogleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth,provider).then(function (result) {
            const { displayName,photoURL, email } = result.user;
            const signedInUser = {
                isSignedIn: true,
                name: displayName,
                email: email,
                photo: photoURL,
                success: true,
            }
            setLoggedInUser(signedInUser);
            props.closeModal();
            // storeAuthToken();
        }).catch(function (error) {
            const errorMessage = error.message;
            console.log(errorMessage);
        });
    }
    const handleSubmit = (event) => {
        // console.log(user.email, user.password);
        if (user.email && user.password) {
            signInWithEmailAndPassword(auth,user.email, user.password)
                .then(res => {
                    const { displayName, email } = res.user;
                    
                    const signInUser = {
                        isSignedIn: true,
                        name: displayName,
                        email: email,
                        photo: '',
                        success: true,
                    }
                    setUser(signInUser);
                    setLoggedInUser(signInUser);
                    console.log(signInUser);
                    history.replace(from);
                    
                })
                .catch((error) => {
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    console.log(errorMessage);
                    const newUserInfo = {}
                    newUserInfo.error = errorMessage;
                    newUserInfo.success = false;
                    alert(errorMessage);
                    setUser(newUserInfo);
                    setLoggedInUser(newUserInfo);
                    history.replace(from);
                });
                // alert(`Successfully logged in as ${user.name}`);
                props.closeModal();
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
    const handleSignOut =() => {
        signOut(auth)
        .then((res) => {
            const signOutUser ={
                isSignedIn: false,
                name: '',
                email: '',
                photo: '',
                success: false,
            }
            setLoggedInUser(signOutUser);
            console.log(signOutUser);
          }).catch((error) => {
            // An error happened.
          });
    }
    const [modalIsOpen, setIsOpen] = useState(false);
    const [openRegister, setOpenRegister] = useState(false);
    
    return (
        <>
            {
                loggedInUser.isSignedIn ?
                <div className='loggedIn-page'>
                    <h1>Hell0 <br /> {loggedInUser.name}</h1>
                    <button className="shopNowBtn loginBtn" onClick={handleSignOut}>Logout</button>
                </div>
                :
                <div className='login-page'>
                    <div >
                        <h2>Login</h2>
                        <form className='login-form' onSubmit={handleSubmit}>
                            <input type="text" name="email" onBlur={handleBlur} placeholder="Your email address" required />
                            <br />
                            <input className='password' type="password" name="password" onBlur={handleBlur} placeholder="Your password" required />
                            <br />
                            <button className=' loginBtn' type="submit">Log In</button>
                            <br />
                            
                        </form>
                        <button className=" googleBtn" onClick={handleGoogleSignIn}>
                            {/* <img src='../../../images/google.png' alt="" /> */}
                            Login with Google
                        </button>
                        <button className=' registerBtn' onClick={() =>  {props.setIsLoginPage(false)}}>
                            Create Account
                        </button>
                    </div>
                </div>
            }
        </>
    );
};

export default Login;