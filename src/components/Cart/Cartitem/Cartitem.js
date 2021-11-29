import React, { useContext } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { FaTimes } from 'react-icons/fa';
import CartContext from '../../../Context/Context';
import { addToDatabaseCart } from '../../../utilities/databaseManager';
import './Cartitem.css';
const Cartitem = (props) => {
    const {watch} = props;
    const { cartItem,removeFromCart,addToCart,removeSingleItemFromCart } = useContext(CartContext);
    //console.log(removeFromCart);
    const handleAddToCart = (watchItem) => {
        const watchKey = watchItem.key;
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
    const handleRemoveFromCart = (watchItem) => {
        
        const watchKey = watchItem.key;
        const sameWatch = cartItem.find(item => item.key===watchKey);
        let count = 1;
        if(sameWatch.quantity>1){
            count = sameWatch.quantity-1;
            sameWatch.quantity = count;
            addToDatabaseCart(watchKey, count);
            removeSingleItemFromCart(watchItem)
        }
        else{
            removeFromCart(watchKey);
        }
        
    }
    return (
        <div className='cart-item' onClick={()=>console.log('clicked item')}>
            <div className="product-details">
                <img src={watch.image} alt="" />
                <p>{watch.name}</p>
            </div>
            <div className="unit-price">
                
                <p>{watch.price}</p>
            </div>
            <div className="quantity">
                <div className="quantity-details">
                    <AiOutlineMinus className='icon'
                        onClick={()=>handleRemoveFromCart(watch)}
                    />
                    <span>{watch.quantity}</span>
                    <AiOutlinePlus className='icon'
                        onClick={() => {handleAddToCart(watch);addToCart(watch)}}
                    />
                </div>
                
            </div>
            <div className="amount">
                <p>{watch.quantity*watch.price}</p>
                <p>
                <FaTimes className='icon'
                    onClick={() => removeFromCart(watch.key)}/>
                </p>
            </div>
            
        </div>
    );
};

export default Cartitem;