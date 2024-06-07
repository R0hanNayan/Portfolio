import React from 'react';
import './discuss.css';
import mailBox from '../../assets/mail.png'

const Discuss = () => {
    return (
        <div className='discuss-container' id='contact'>
            <h2 className='discuss-header'>Have an Awsome Project Idea? <br /><span className='discuss-span'>Let's Discuss</span></h2>
            <form className='discuss-mailBox' action="mailto:rohannayan405@gmail.com" method="get" enctype="text/plain">
                <img className='mailbox' src={mailBox} alt="mailbox" />
                <input className='email' type="email" name="email" required="required" placeholder="Enter Email Address" />
                <button className='send-btn' type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Discuss