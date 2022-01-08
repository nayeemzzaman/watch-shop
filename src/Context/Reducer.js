import fakeData from '../fakeData/fakedata';
import { getDatabaseCart } from '../utilities/databaseManager';
import { ADD_TO_CART, REMOVE_FROM_CART, REMOVE_SINGLE_ITEM_FROM_CART} from './Type';
export const CartReducer = (state, action) =>{
    // console.log(action.payload);

    const watchKey = action.payload.key;
    const sameWatch = state.cartItem.find(item => item.key===watchKey);
    // console.log(sameWatch);
    switch(action.type){
        case ADD_TO_CART:
            return {
                ...state, 
                cartItem: sameWatch?[...state.cartItem]:
                        [...state.cartItem, {...action.payload, ...action.quantity}]
            };
        case REMOVE_FROM_CART:
            
            return {
                ...state, 
                cartItem: state.cartItem.filter(item => item.key !== action.payload)
            };
        case REMOVE_SINGLE_ITEM_FROM_CART:
            return{
                ...state,
                cartItem: [...state.cartItem]
            };
        default:
            return state;
    } 
}