import React from 'react'
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    return ( 
        <footer className='footer'>
            <h2 className='footer__heading'>Contact Me:</h2>
            <ul className='footer__ul'>
                <li className='footer__ul__li'><img src="/img/email_icon.svg" className='footer__ul__li__img' alt="" /><a href="mailto:tijohans@stud.ntnu.no">Mail</a></li>
                <li className='footer__ul__li'><img src="/img/githib_icon.svg" className='footer__ul__li__img' alt="" /><Link to={{pathname: "//www.github.com/tijohans"}} target="_blank" rel='noopener norefferer'>GitHub</Link></li>
                <li className='footer__ul__li'><img src="/img/linkedin_icon.svg" className='footer__ul__li__img' alt="" /><Link to={{pathname: "//www.linkedin.com/in/thor-ivar-nirisen-johansen-383934138/"}} target="_blank" rel='noopener norefferer'>LinkedIn</Link></li>
            </ul>
        </footer>
     );
}

export default Footer;