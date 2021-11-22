import React, { useEffect, useReducer} from 'react';
import fakeData from '../fakeData/fakedata';
import { getDatabaseCart } from '../utilities/databaseManager';
import CartContext from './CartContext';
import { CartReducer } from './Reducer';
import { ADD_TO_CART, REMOVE_FROM_CART } from './Type';

const CartState = ({ children }) => {
    const previousCart = () => {
        const savedCart = getDatabaseCart();
        const watchKeys = Object.keys(savedCart);
        const cartItems = watchKeys.map( key => {
            const watch = fakeData.find(pd => pd.key===key);
            console.log(watch);
            watch.quantity = savedCart[key];
            return watch;
        });
        
        return cartItems? cartItems: [];
    }
    const [state, dispatch] = useReducer(CartReducer,{
        cartItem: previousCart(),
    });
    const addToCart = item => {
        dispatch({type: ADD_TO_CART, payload: item, quantity: 1});
        //addToDatabaseCart()
    }

    const removeFromCart = id => {
        dispatch({type: REMOVE_FROM_CART, payload: id});
    }
    // useEffect( ()=>{
    //     const savedCart = getDatabaseCart();
    //     const watchKeys = Object.keys(savedCart);
    //     const cartWatches = watchKeys.map( key => {
    //         const watch = fakeData.find(pd => pd.key===key);
    //         console.log(watch);
    //         watch.quantity = savedCart[key];
    //         return watch;
    //     })
    //     state.cartItem = cartWatches;
    //     console.log(state.cartItem);
    // }, [state]);
    return (
        <CartContext.Provider value=
        {{ 
            cartItem: state.cartItem,
            addToCart,
            removeFromCart,
        }}>{children}</CartContext.Provider>
    );
};

export default CartState;