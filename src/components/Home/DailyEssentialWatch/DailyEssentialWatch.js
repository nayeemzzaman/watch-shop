import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import './DailyEssentialWatch.css';
import Cart from '../../../Context/CartContext';
const DailyEssentialWatch = (props) => {
    //console.log(props);
    const {watch} = props;
    //console.log(watch);
    const { addToCart } = useContext(Cart);
    return (
        <IconContext.Provider value={{ color: 'black', className: 'hoverOnWatchIcons' }}>
            <div className="dailyEssential-watch">
                <div className="image">
                    <img src={watch.image} alt="" />
                    <ul className="hoverOnWatch">

                        <li className="hoverOnWatch-item "
                        onClick={() =>{props.handleAddToCart(watch); addToCart(props.watch);}}
                        >
                            <Link><RiShoppingBasketLine /></Link>
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
                    <p>{watch.name}</p>
                    <h5>${watch.price}</h5>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default DailyEssentialWatch;