import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search'
import {Link, useHistory} from 'react-router-dom'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket'
import { useStateValue } from './ServiceProvider'
import { auth } from './firebase';
import {signOut } from '@firebase/auth'

function Header() {
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
        <nav className="header">
        <Link to='/'>
            <img 
             className ='header__logo'
             src='https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
             alt=''
             />
        </Link>
         
         
         <div className='header__search'>
             <input type='text' className='header__searchInput'/>
             <SearchIcon className='header__searchIcon'/>
         </div>
     
     
         <div className='header__nav'>
             <Link to= { !user && '/login'} className='header__link'>
                 <div onClick={login} className='header__option'>
                     <span className='header__optionLineOne'>Hello {user ? user.email : "stranger"}</span>
                     <span className='header__optionLineTwo'>{user ? "Sign Out" : "Sign In"}</span>
                 </div>
             </Link>

             <Link to='/' className='header__link'>
                 <div className='header__option'>
                     <span className='header__optionLineOne'>Returns</span>
                     <span className='header__optionLineTwo'>& Orders</span>
                 </div>
             </Link>

             <Link to= {user ? '/profile' : '/login'} className='header__link'>
                 <div className='header__option'>
                     <span className='header__optionLineOne'>Your</span>
                     <span className='header__optionLineTwo'>Profile</span>
                 </div>
             </Link>

             <Link to='/checkout' className='header__link'>
                 <div className='header__optionBasket'>
                     <ShoppingBasketIcon/>
                     <span className='header__optionLineTwo header__basketCount'>{basket.length}</span>
                 </div>
             </Link>
         </div>

     </nav>
    )
}

export default Header
