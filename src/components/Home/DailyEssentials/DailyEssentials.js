import React, { useContext, useEffect, useState } from 'react';
import './DailyEssentials.css';

import DailyEssentialWatch from '../DailyEssentialWatch/DailyEssentialWatch';
import fakeData from '../../../fakeData/fakedata';
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager';
import CartContext from '../../../Context/CartContext';
const DailyEssentials = () => {
    
    const { cartItem } = useContext(CartContext);
    //console.log(cartItem);
    //addToDatabaseCart(cartItem)
    const [cart, setCart] = useState([]);
    const [watchData, setWatchData] = useState([]);
    useEffect( ()=>{
        setWatchData(fakeData);
    },[watchData]);
    // useEffect( ()=>{
    //     const savedCart = getDatabaseCart();
    //     const watchKeys = Object.keys(savedCart);
    //     //console.log(watchKeys);
    //     const cartWatches = watchKeys.map( key => {
    //         const watch = fakeData.find(pd => pd.key===key);
    //         watch.quantity = savedCart[key];
    //         return watch;
    //     })
    //     setCart(cartWatches);
    // },[]);
    //console.log(cart);
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