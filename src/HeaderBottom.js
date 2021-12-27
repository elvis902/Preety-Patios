import React from 'react'
import './HeaderBottom.css'

function HeaderBottom() {
    return (
        <nav className='nav1'>
            <div className='nav1__linksLeft'>
                <span>Plants</span>
                <span>Bulbs</span>
                <span>Seeds</span>
                <span>Pots</span>
                <span>Plants</span>
                <span>Soil & Fertilizers</span>
            </div>
            <div className='nav1__linksRight'>
                <span>Gardening Services</span>
                <span>Workshops</span>
                <span>Blogs</span>
            </div>
        </nav>
    )
}

export default HeaderBottom
