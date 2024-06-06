import React from 'react';
import './discuss.css';
import mailBox from '../../assets/mail.png'

const Discuss = () => {
    return (
        <div className='discuss-container'>
            <h2 className='discuss-header'>Have an Awsome Project Idea? <br /><span className='discuss-span'>Let's Discuss</span></h2>
            <form className='discuss-mailBox' action="mailto:rohannayan405@gmail.com" method="get" enctype="text/plain">
                <img src={mailBox} alt="mailbox" />
                <input type="text" name="subject" placeholder="Your Email" />
                <button type='submit'>Send</button>
            </form>
        </div>
    )
}

export default Discuss