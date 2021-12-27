import React from 'react'
import facebookLogo  from './logoFacebook.png'
import instaLogo  from './logoInsta.png'
import linkedInLogo  from './logoLinked.png'
import youTubeLogo  from './logoYouTube.png'
import './HeaderTop.css'

function HeaderTop() {
    return (
        <nav className='nav0'>
            <div className='nav0__linksLeft' >
                <span>Help</span>
                <span>Orders</span>
                <span>Offers</span>
            </div>
            <div className='nav0__linksRight' >
                <a href="#" >
                    <img src={facebookLogo} alt="" />
                </a>
                <a href="#" >
                <img src={instaLogo} alt="" />
                </a>
                <a href="#" >
                <img src={linkedInLogo} alt="" />
                </a>
                <a href="#" >
                <img src={youTubeLogo} alt="" />
                </a>
            </div>
        </nav>
    )
}

export default HeaderTop
