import React, { useContext } from 'react';
import CartContext from '../../../Context/Context';
import Navbar from '../../Shared/Navbar/Navbar';
import Cartitem from '../Cartitem/Cartitem';
import './Cart.css';
const Cart = () => {
    const { cartItem } = useContext(CartContext);
    return (
        <section>
            <Navbar />
            <div className='cart-page'>
                <div className='shopping-cart-heading'>
                    <h2>Shopping Cart</h2>
                </div>
                <div className='headings'>
                    <h4 className='product-details'>Product Details</h4>
                    <h4 className='unit-price'>Unit Price</h4>
                    <h4 className='quantity'>Quantity</h4>
                    <h4 className='amount'>Amount</h4>
                </div>
                {
                    cartItem.map(item => <Cartitem key={item.key} watch={item} />)
                }
            </div>
            
        </section>
    );
};

export default Cart;