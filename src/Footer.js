import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'
import facebookLogo  from './logoModifiedFacebook.png'
import instaLogo  from './logoModifiedInstagram.png'
import linkedInLogo  from './logoModifiedLinkedIn.png'
import youTubeLogo  from './logoModifiedYouTube.png'
import whatsappLogo  from './logoModifiedWhatsapp.png'
import twitterLogo  from './logoModifiedTwitter.png'

function Footer() {
    return (
        <div className='footer'>
           <div className='footer__links'>
                <div className='footer__container'>
                    <div className='footer__heading'>
                        <h2>Gardening Blogs</h2>
                        <div className='footer__lists'>
                            <ul className='list__1'> 
                                <li>Plant Talk</li>
                                <li>Top 10 Plants</li>
                                <li>Plant Styling</li>
                                <li>Kitchen Gardening</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__heading'>
                        <h2>Usefull Links</h2>
                        <div className='footer__lists'>
                            <ul className='list__1'> 
                                <li>Offers</li>
                                <li>FAQ's</li>
                                <li>Orders</li>
                                <li>Rewards</li>
                                <li>Affiliate</li>
                                <li>Track Order</li>
                            </ul>
                        </div>
                    </div>
                    <div className='footer__heading'>
                        <h2>About</h2>
                        <div className='footer__lists'>
                            <ul className='list__1'> 
                                <li>About Pretty Patios</li>
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Refund Policy</li>
                                <li>Shipping Policy</li>
                                <li>Terms Of Service</li>
                                <li>Careers</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className='footer__verticalRuler'></div> */}
                    <div className='footer__socialMediaLogos'>
                        <h2>Follow Us On:</h2>
                        <ul className='sm__links'>
                            <li>
                                <a href="#">
                                    <img src={facebookLogo} alt="facebook"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={instaLogo} alt="instagram"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={twitterLogo} alt="twitter"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={linkedInLogo} alt="linkedin"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={whatsappLogo} alt="whatsapp"/>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <img src={youTubeLogo} alt="youtube"/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="footer__copyright">
                    &copy;All rights are reserved by &OpenCurlyQuote;PrettyPetios&CloseCurlyQuote;, 2022
                </div>
           </div>
        </div>
    )
}

export default Footer
