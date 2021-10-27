import React from 'react';
import { MdCopyright } from 'react-icons/md';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
            <div className='copy-right'>
                <MdCopyright className="icon"/>
                <h6>Lusion 2021</h6>
            </div>
            <div className="middle">
                <h6>Shipping</h6>
                <h6>Return</h6>
                <h6>Contact</h6>
            </div>
            <div>
                
            </div>
        </div>
    );
};

export default Footer;