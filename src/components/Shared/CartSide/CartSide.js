import React, { useContext, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import CartContext, { CartState } from '../../../Context/Context';
import CartSideItem from '../CartSideItem/CartSideItem';

import './CartSide.css';
const CartSide = (props) => {
    const {activeCart} = props;
    // const [click , setClick] = useState(false);
    // const handleClick = () => setClick(!click);
    // const closeMobileMenu = () => setClick(false);
    const { cartItem } = useContext(CartContext);
    console.log(cartItem);
    return (
        <div className={activeCart?'cart-sidebar-active': 'cart-sidebar-inactive'}>
            <div className='cartSidebar-background'
                onClick={() => props.handleCart(false)}>
            </div>
            <div className = 'cart-sidebar'>
                <div className = 'cart-bar'>
                    <h1>Shopping Cart</h1>
                    <div className='cart-menu-icon' onClick={()=>props.handleCart(false)}>
                    <FaTimes />
                    </div>
                </div>
                <div className = 'cart-sidebar-item'>
                    {
                        cartItem.map(item => <CartSideItem key={item.key} orderItem={item}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CartSide;