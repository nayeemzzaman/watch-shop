import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import CartContext from '../../../Context/Context';
import Navbar from '../../Shared/Navbar/Navbar';
import Cartitem from '../Cartitem/Cartitem';
import './Cart.css';
const Cart = () => {
    const { cartItem, removeFromCart } = useContext(CartContext);
    const handleClearCart = () => {
        for(let i = 0; i < cartItem.length; i++) {
            const watchKey = cartItem[i].key;
            
            removeFromCart(watchKey);
        }
        
    }
    return (
        <section>
            <Navbar />
            <div className='cart-page'>
                <div className='shopping-cart-heading'>
                    <h2>Shopping Cart</h2>
                </div>
                {
                    cartItem.length ?
                    <div className='headings'>
                        <h4 className='product-details'>Product Details</h4>
                        <h4 className='unit-price'>Unit Price</h4>
                        <h4 className='quantity'>Quantity</h4>
                        <h4 className='amount'>Amount</h4>
                    </div> : ''
                }
                {
                    cartItem.map(item => <Cartitem key={item.key} watch={item} />)
                }
                {
                    cartItem.length ? 
                        <div className='cart-btn'>
                            <button className = 'clear-cart-btn'
                                    onClick = {() => handleClearCart()}
                            >Clear Cart</button>
                            <button className = 'update-cart-btn'>Update Cart</button>
                        </div> 
                        :
                        <div className = 'empty-cart'>
                            <h5>Your cart is currently empty.</h5>
                            <button className='con-shopping-btn'>
                                Continue Shopping<BsArrowRight className='right-icon'/>
                            </button>
                        </div>
                }
                
                
            </div>
            
        </section>
    );
};

export default Cart;