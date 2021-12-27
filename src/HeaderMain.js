import React from 'react'
import './HeaderMain.css'
import {Link, useHistory} from 'react-router-dom'
import logo from './logoMain.png'
import searchLogo from './logoSearch.png'
import basketLogo from './logoBasket.png'
import accountLogo  from './logoAccount.png'
import { useStateValue } from './ServiceProvider'
import { auth } from './firebase';
import {signOut } from '@firebase/auth'

function HeaderMain() {
    const [{basket, user}, dispatch] = useStateValue()
    const history = useHistory()
    const login = () => {
        if(user){
            signOut(auth).then(() => {
                console.log("You Have Signed Out")
                dispatch({
                    type: "EMPTY_BASKET",
                    basketProductsList: []
                })
                history.push('/')
                // Sign-out successful.
              }).catch((error) => {
                console.log(error)
              });
        }
    }
    return (
        <nav className='mainNav'>
        <Link to={"/"} className='mainNav__logo'>
            <img src={logo} alt='LoGo' />
        </Link>
        <div className='mainNav__inputSearch'>
            <input type="search" name='productName'/>
            <img src={searchLogo} alt="Search"/>
        </div>
        <div className='mainNav__links' >
            <div className='myAccount'>
                <img src={accountLogo} alt='acc Logo' />
                {
                    user ? 
                    (
                        <div className='myAccount__profile'>
                            <Link to={'/profile'} className='header_link'>
                                <span>My Account</span>
                            </Link>
                           
                            <span onClick={login} >Logout</span>
                            
                        </div>
                    ):
                    (
                        <div className='myAccount__login'>
                            <Link to={"/login"} className='header_link'>
                                 <span>Login</span>
                            </Link>
                        </div>
                    )
                }
               
            </div>
            <Link to={user ? '/checkout' : '/login'} className='header_link'>
                <div className='basket'>
                    <img src={basketLogo} alt='basket Logo' />
                    <span className='basket__number' >{basket.length}</span>
                </div>
            </Link>
        </div>
    </nav>
    )
}

export default HeaderMain
