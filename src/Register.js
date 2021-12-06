import React,{useState} from 'react'
import './Register.css'
import {Link, useHistory} from 'react-router-dom'
import { createUserWithEmailAndPassword  } from "firebase/auth";
import {auth, database} from './firebase'
import { ref, set, push, child } from "firebase/database";
import { useStateValue } from './ServiceProvider'
import logo from './logo.jpeg'

function Register() {
    const history = useHistory()


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [address, setAddress] = useState('')

    const writeUserData = (user) => {
        const path = 'users/' + user.uid;
        console.log(path);
        const userListRef = ref(database, path);
        set(userListRef, {
            name: name,
            email: email,
            mobile : number,
            address : address

        });
    }

    const register = event => {
        event.preventDefault(); //this stops the refresh

        //Logic for Register
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            writeUserData(user);
            console.log(user.email);
            // create a user and logged in, redirect to homepage
            history.push("/")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage)
        });
    }

    return (
        <div className='register'>
        <Link to='/'>
            <img
            className='register__logo'
              src={logo}
              alt=''
            />
        </Link>

        <div className='register__container'>
            <h1>Sign Up</h1>
            <form>
                <h5>E-mail</h5>
                <input value={email} type="email" onChange={event => setEmail(event.target.value)}/>
                <h5>Password</h5>
                <input value={password} type="password" onChange={event => setPassword(event.target.value)}/>
                <h5>Name</h5>
                <input value={name} type="text" onChange={event => setName(event.target.value)}/>
                <h5>Mobile Number</h5>
                <input value={number} type="number" onChange={event => setNumber(event.target.value)}/>
                <h5>Address</h5>
                <input value={address} type="text" onChange={event => setAddress(event.target.value)}/>
                <button onClick={register}  type='submit' className='register__signUpButton'>Sign Up</button>
            </form>

            <p>
            By continuing, you agree 
            to Patios Conditions of Use and Privacy Notice.
            </p>
        </div>
    </div>
    )
}

export default Register
