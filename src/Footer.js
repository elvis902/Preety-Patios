import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

function Footer() {
    return (
        <div className='footer'>
            <div className='footer__inner'>
                <div className='footer__socialLinks'>
                    <Link to="#" className='footer__socialLink'>
                        <FacebookIcon color="secondary" fontSize="large"/>
                    </Link>
                    <Link to="#" className='footer__socialLink'>
                        <InstagramIcon/>
                    </Link>
                    <Link to="#" className='footer__socialLink'>
                        <YouTubeIcon/>
                    </Link>
                    <Link to="#" className='footer__socialLink'>
                        <LinkedInIcon/>
                    </Link>
                </div>
                <div className='footer__quickLinks'>
                     <Link to="#" className='footer__quickLink'>
                        Home
                    </Link>
                    <Link to="#" className='footer__quickLink'>
                        Services
                    </Link>
                    <Link to="#" className='footer__quickLink'>
                        About Us
                    </Link>
                    <Link to="#" className='footer__quickLink'>
                        Contact Us
                    </Link>
                </div>
            </div>
            <div className='footer__outer'>
                Copyright &copy; Preety Patios. All Rights Reserved
            </div>
            
        </div>
    )
}

export default Footer
