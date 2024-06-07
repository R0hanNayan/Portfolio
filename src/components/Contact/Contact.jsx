import React from 'react';
import './contact.css';
import Logo from '../../utils/Logo/Logo';
import Github from '../../assets/Github.png';
import LinkedIn from '../../assets/LinkedIn.png';
import Twitter from '../../assets/Twitter.png';
import AnchorLink from "react-anchor-link-smooth-scroll";

const Contact = () => {
    return (
        <div className='contact-container'>
            <div className='contact-headers'>
                <h1 className='contact-h1'>Lets Connect there</h1>
                <AnchorLink href="#resume">
                    <button className='contact-btn'>Hire me ↗</button>
                </AnchorLink>
            </div>
            <p className='contact-line'></p>
            <div className='contact-contents'>
                <div className='contact-logo'>
                    <Logo />
                    <div className='contact-icons'>
                        <a href="https://github.com/R0hanNayan"><img src={Github} alt="Github" /></a>
                        <a href="https://www.linkedin.com/in/rohan-nayan-83b7b1220/"><img src={LinkedIn} alt="Github" /></a>
                        <a href="https://x.com/nayan_rohan"><img src={Twitter} alt="Github" /></a>
                    </div>
                </div>
                <div className='contact-details'>
                    <h3 className='contact-details-header'>Contact</h3>
                    <p className='contact-options'>rohannayan405@gmail.com</p>
                    <a className='contact-options' href='nayanrohan.netlify.app'>nayanrohan.netlify.app</a>
                </div>
            </div>
            <p className='contact-line'></p>
            <p className='copyright'>Copyright© 2024 Rohan Nayan.</p>
        </div>
    )
}

export default Contact