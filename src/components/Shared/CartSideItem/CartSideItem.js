import React, { useContext } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import Cart, { CartState } from '../../../Context/Context';

import './CartSideItem.css';
import { addToDatabaseCart, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import CartContext from '../../../Context/Context';
const CartSideItem = ({orderItem}) => {
    // console.log(orderItem);
    const { cartItem,removeFromCart,addToCart,removeSingleItemFromCart } = useContext(CartContext);
    //console.log(removeFromCart);
    const handleAddToCart = (watch) => {
        const watchKey = watch.key;
        const sameWatch = cartItem.find(item => item.key===watchKey);
        let count = 1;
        if(sameWatch){
            count = sameWatch.quantity+1;
            sameWatch.quantity = count;
        }
        else{
            watch.quantity = 1;
        }
        addToDatabaseCart(watchKey, count);
    }
    const handleRemoveFromCart = (watch) => {
        const watchKey = watch.key;
        const sameWatch = cartItem.find(item => item.key===watchKey);
        let count = 1;
        if(sameWatch.quantity>1){
            count = sameWatch.quantity-1;
            sameWatch.quantity = count;
            addToDatabaseCart(watchKey, count);
            removeSingleItemFromCart(orderItem)
        }
        else{
            removeFromCart(watchKey);
        }
        
    }
    
    return (
        <>
        <div className='order-items'>
            <div className='order-item-fist'>
                <img src={orderItem.image} alt="" />
            </div>
            <div className='order-item-second'>
                <p>{orderItem.name}</p>
                <div className='quantity'>
                    
                    <AiOutlineMinus className='icon'
                        onClick={()=>handleRemoveFromCart(orderItem)}
                    />
                    <span className='number'>{orderItem.quantity}</span>
                    <AiOutlinePlus className='icon'
                        onClick={() => {handleAddToCart(orderItem);addToCart(orderItem)}}
                    />
                </div>
            </div>
            <div className='order-item-third'>
                <p><FaTimes className='icon'
                    onClick={() => removeFromCart(orderItem.key)}/></p>
                <p className='amount'>${orderItem.price*orderItem.quantity}</p>
            </div>
        </div>
        <div><hr className='hr-line'/></div>
        </>
    );
};

export default CartSideItem;