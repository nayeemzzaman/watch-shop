import React from 'react';
import { Link } from 'react-router-dom';

import './Blackedition.css';
const Blackedition = () => {
    return (
        <div className="black-edition">
             <div className="black-edition-background">
                <div className="texts">
                    <h1>All Black Edition</h1>
                    <h3>For cool people like</h3>
                    <Link ><button className="shopNowBtn">Shop Now</button></Link>
                </div>
             </div>
             <div className="discount">
                
             </div>
        </div>
    );
};

export default Blackedition;