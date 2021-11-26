import React, { useContext, useEffect, useState } from 'react';
import './DailyEssentials.css';

import DailyEssentialWatch from '../DailyEssentialWatch/DailyEssentialWatch';
import fakeData from '../../../fakeData/fakedata';
import { addToDatabaseCart, getDatabaseCart, removeFromDatabaseCart } from '../../../utilities/databaseManager';
import CartContext, { CartState } from '../../../Context/Context';
const DailyEssentials = () => {
    
    const {cartItem } = useContext(CartContext);
    console.log(cartItem);
    //addToDatabaseCart(cartItem)
    const [cart, setCart] = useState([]);
    const [watchData, setWatchData] = useState([]);
    useEffect( ()=>{
        setWatchData(fakeData);
    },[watchData]);

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
    // const removeFromCart = (productKey) =>{
    //     //const newCart = cartItem.filter(item => item.key !== productKey);
    //     removeFromDatabaseCart(productKey)
    // }
    return (
        <section className="daily-essentials">
            <div>
                <h1>Daily Essentials</h1>
            </div>
            <div className="daily-essentials-watches">
                {
                    watchData.map(watch => <DailyEssentialWatch key={watch.key} handleAddToCart={handleAddToCart} watch={watch}/>)
                }
            </div>
        </section>
    );
};

export default DailyEssentials;