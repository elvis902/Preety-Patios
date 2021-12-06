import React,{useState} from 'react'
import {Link, useHistory} from 'react-router-dom'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword  } from "firebase/auth";
import {auth} from './firebase'
import './Login.css'
import logo from './logo.jpeg'

function Login() {
    const history = useHistory()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const login = event => {
        event.preventDefault(); //this stops the refresh

        //Logic for Login

        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            //logged in, redirect to homepage
            history.push("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    // const register = event => {
    //     event.preventDefault(); //this stops the refresh

    //     //Logic for Register
    //     createUserWithEmailAndPassword(auth, email, password)
    //     .then((userCredential) => {
    //         // Signed in 
    //         const user = userCredential.user;
    //         // create a user and logged in, redirect to homepage
    //         history.push("/")
    //     })
    //     .catch((error) => {
    //         const errorCode = error.code;
    //         const errorMessage = error.message;
    //         alert(errorMessage)
    //     });
    // }
    return (
        <div className='login'>
            <Link to='/'>
                <img
                className='login__logo'
                  src={logo}
                  alt=''
                />
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>E-mail</h5>
                    <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
                    <h5>Password</h5>
                    <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                    <button onClick={login} type='submit' className='login__signInButton'>Sign In</button>
                </form>

                <p>
                By continuing, you agree 
                to Patios Conditions of Use and Privacy Notice.
                </p>

                <Link to='/register'>
                    <button  className='login__registerButton'>Create your Patios Account </button>
                </Link>
            </div>
        </div>
    )
}

export default Login