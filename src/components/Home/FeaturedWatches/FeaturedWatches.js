import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import {FiZoomIn, FiZoomOut } from 'react-icons/fi';
import {  MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import Cart from '../../../Context/CartContext';

import './FeaturedWatches.css';

const FeaturedWatches = (props) => {
     const { watch } = props;
     // const { addToCart } = useContext(Cart);
     return (
          <>
      <IconContext.Provider value={{ color: 'black' ,className: 'hoverOnWatchIcons'}}>
          <div className="featuredWatches">
               <div className="watch-upperRow">
                    <div className="image">
                         <img src={watch.image1} alt="" />
                         <ul className="hoverOnWatch1">
                         
                              <li className="hoverOnWatch-item ">
                                   <Link
                                   ><RiShoppingBasketLine /></Link>
                                   <span className="tooltiptext">Add to cart</span>
                              </li>
                              
                              <li className="hoverOnWatch-item">
                                   <Link><MdFavoriteBorder /></Link>
                                   <span className="tooltiptext">Add to wishlist</span>
                              </li>
                              <li className="hoverOnWatch-item">
                                   <Link><FiZoomIn /></Link>
                                   <span className="tooltiptext">Quick view</span>
                              </li>
                         </ul>
                    </div>
                    <div className="details">
                         <p>{watch.name1}</p>
                         <h5>${watch.price}</h5>
                    </div>
               </div>
               <div className="watch-lowerRow">
                    <div className="image">
                         <img src={watch.image2} alt="" />
                         <ul className="hoverOnWatch2">
                         
                         <li className="hoverOnWatch-item ">
                                   <Link
                                   ><RiShoppingBasketLine /></Link>
                                   <span className="tooltiptext">Add to cart</span>
                              </li>
                              
                              <li className="hoverOnWatch-item">
                                   <Link><MdFavoriteBorder /></Link>
                                   <span className="tooltiptext">Add to wishlist</span>
                              </li>
                              <li className="hoverOnWatch-item">
                                   <Link><FiZoomIn /></Link>
                                   <span className="tooltiptext">Quick view</span>
                              </li>
                         
                         </ul>
                    </div>
                    <div className="details">
                         <p>{watch.name2}</p>
                         <h5>${watch.price}</h5>
                    </div>
               </div>
          </div>
          </IconContext.Provider>
    </>
     );
};

export default FeaturedWatches;