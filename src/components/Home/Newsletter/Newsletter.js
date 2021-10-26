import React from 'react';
import {BiEnvelope} from 'react-icons/bi';
import './Newsletter.css';
const Newsletter = () => {
    return (
        <div className="newsletter">
            <div className="join-newsletter">
                <div className='envelope-icon'>
                    <BiEnvelope />
                </div>
                <div className='newsletter-header'>
                    <h2>Join Our Newsletter</h2>
                    <p>Subscribe to our newsletter and get <br /> 10% off your first purchase</p>
                </div>
            </div>
            <div className='mail-box'>
                <input type="text" placeholder="Your email address" />
            </div>
        </div>
    );
};

export default Newsletter;