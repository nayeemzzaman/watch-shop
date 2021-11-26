import React, { useReducer } from 'react';
import fakeData from '../fakeData/fakedata';
import { getDatabaseCart, removeFromDatabaseCart } from '../utilities/databaseManager';
import CartContext from './Context';
import { CartReducer } from './Reducer';
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SINGLE_ITEM_FROM_CART } from './Type';
const CartState = ({children}) => {
    const previousCart = () => {
        const savedCart = getDatabaseCart();
        const watchKeys = Object.keys(savedCart);
        const cartItems = watchKeys.map( key => {
            const watch = fakeData.find(pd => pd.key===key);
            console.log(watch);
            watch.quantity = savedCart[key];
            return watch;
        });
        console.log(cartItems);
        return cartItems? cartItems: [];
    }
    const [state, dispatch] = useReducer(CartReducer,{
        cartItem: previousCart(),
    });
    const addToCart = item => {
        
        dispatch({type: ADD_TO_CART, payload: item, quantity: 1});
        //addToDatabaseCart()
    }

    const removeFromCart = key => {
        removeFromDatabaseCart(key);
        dispatch({type: REMOVE_FROM_CART, payload: key});
        //console.log(state.cartItem);
    }
    const removeSingleItemFromCart = item => {
        dispatch({type: REMOVE_SINGLE_ITEM_FROM_CART, payload: item})
        console.log(state.cartItem);
    }
    return (
        <CartContext.Provider value=
        {{ 
            cartItem: state.cartItem,
            addToCart,
            removeFromCart,
            removeSingleItemFromCart,
        }}>{children}</CartContext.Provider>
    );
};

export default CartState;