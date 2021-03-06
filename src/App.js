import './App.css';
import React,{useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useStateValue } from './ServiceProvider';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from './Login'
import {auth, database} from './firebase'
import {onAuthStateChanged} from '@firebase/auth'
import Footer from './Footer';
import Profile from './Profile';
import Register from './Register';
import { ref, onValue} from "firebase/database";
import HeaderTop from './HeaderTop'
import HeaderMain from './HeaderMain'
import HeaderBottom from './HeaderBottom'


function App() {
  const [{}, dispatch] = useStateValue()
  
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if(currentUser){
         //user is logged in
         dispatch({
          type: "SET_USER",
          user: currentUser
        })
      }
      else{
        //user is not logged in
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return ()=> {
      unsubscribe()
    }
  }, [])

  return (
    <Router>
       <div className="App">
        <Switch>
            <Route path = "/login">
               <Login/>
            </Route>
            <Route path = "/checkout">
              <HeaderTop/>
              <HeaderMain/>
              <HeaderBottom/>
               <Checkout/>
            </Route>
            <Route path = "/profile">
              <HeaderTop/>
              <HeaderMain/>
              <HeaderBottom/>
               <Profile/>
            </Route>
            <Route path = "/register">
               <Register/>
            </Route>
            <Route path = "/">
              <HeaderTop/>
              <HeaderMain/>
              <HeaderBottom/>
              <Home/>
              <Footer/>
            </Route>
         </Switch>
      </div>
    </Router>
  );
}

export default App;
