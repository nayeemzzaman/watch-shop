import React from 'react';
import {BiEnvelope} from 'react-icons/bi';
import { BsArrowRight } from 'react-icons/bs';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="join-newsletter">
                <div className='envelope-icon'>
                    <BiEnvelope />
                </div>
                <div className='newsletter-header'>
                    <h4>Join Our Newsletter</h4>
                    <p>Subscribe to our newsletter and get <br />10% off your first purchase</p>
                </div>
            </div>
            <form className='mail-box'>
                <input className="email-form" type="text" placeholder="Your email address" />
                <span className="send-btn" ><BsArrowRight /></span>
            </form>
        </div>
    );
};

export default Newsletter;