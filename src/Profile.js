import React,{useState, useEffect} from 'react'
import './Profile.css'
import {useStateValue} from './ServiceProvider'

function Profile() {
    const [{userInfo}] = useStateValue()
    return (
        <div className='profile'>
            <h1>Personal Information</h1>
           <div className='profile__info'>
                <div className='profile__infoRow'>
                    <div className='profile__infoRowText'>
                        <h5>Name:</h5>
                        <p>{userInfo ? userInfo.name : "Please sign in or edit your name"}</p>
                    </div>
                    <button>Edit</button>
                </div>
                <div className='profile__infoRow'>
                    <div className='profile__infoRowText'>
                        <h5>Email:</h5>
                        <p>{userInfo ? userInfo.email : "Please sign in or edit your name"}</p>
                    </div>
                    <button>Edit</button>
                </div>
                <div className='profile__infoRow'>
                    <div className='profile__infoRowText'>
                        <h5>Phone Number:</h5>
                        <p>{userInfo ? userInfo.mobile : "Please sign in or edit your name"}</p>
                    </div>
                    <button>Edit</button>
                </div>
           </div>
        </div>
    )
}

export default Profile
