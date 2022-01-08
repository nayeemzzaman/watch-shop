import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactModal from 'react-modal';
import { FiZoomIn, FiZoomOut } from 'react-icons/fi';
import { MdFavoriteBorder } from 'react-icons/md';
import { RiShoppingBasketLine } from 'react-icons/ri';
import { IconContext } from 'react-icons/lib';
import './DailyEssentialWatch.css';
import CartContext, { CartState } from '../../../Context/Context';
import { FaTimes } from 'react-icons/fa';
const DailyEssentialWatch = (props) => {
    //console.log(props);
    const {watch} = props;
    //console.log(watch);
    const { addToCart } = useContext(CartContext);
    const [modalIsOpen, setIsOpen] = useState(false);

    function openModal() {
        setIsOpen(true);
    }
    function closeModal() {
        setIsOpen(false);
    }
    return (
        <IconContext.Provider value={{ color: 'black', className: 'hoverOnWatchIcons' }}>
            <div className="dailyEssential-watch">
                <div className="image">
                    <img src={watch.image} alt="" />
                    <ul className="hoverOnWatch">

                        <li className="hoverOnWatch-item "
                        onClick={() =>{openModal();props.handleAddToCart(watch); addToCart(props.watch);}}
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
                <ReactModal
                    isOpen={modalIsOpen}
                    closeTimeoutMS={200}
                    onRequestClose={closeModal}
                    className='watch-modal'
                    overlayClassName="Overlay"
                >
                    
                    <div className ='modal-details'>
                        <div className='modal-heading'>
                            <p>1 Item added to your cart</p>
                            <FaTimes onClick={()=>closeModal()} className='icon'/>
                        </div>
                        <hr style={{margin: '0px'}}/>
                        <div className='modal-body'>
                            <img src={watch.image} alt="" />
                            <div>
                                <h5>{watch.name}</h5>
                                <h5>Quantity: {watch.quantity}</h5>
                                <h5>Price: {watch.price}</h5>
                            </div>
                        </div>
                        <hr style={{margin: '0px'}}/>
                        <div className='cart-btn'>
                            <Link onClick={()=>closeModal()}><button className="shopNowBtn viewCart">Continue Shopping</button></Link>
                            <br />
                            <Link to='/cart'><button className="shopNowBtn checkout">Proceed to cart</button></Link>
                        </div>
                    </div>
                        
                </ReactModal>
                <div className="details">
                    <p>{watch.name}</p>
                    <h5>${watch.price}</h5>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default DailyEssentialWatch;