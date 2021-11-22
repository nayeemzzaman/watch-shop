import fakeData from '../fakeData/fakedata';
import { getDatabaseCart } from '../utilities/databaseManager';
import { ADD_TO_CART, REMOVE_FROM_CART} from './Type';
export const CartReducer = (state, action) =>{
    console.log(state);
   
    // const savedCart = getDatabaseCart();
    // const watchKeys = Object.keys(savedCart);
    // console.log(watchKeys);
    // const cart = watchKeys.map( key => {
    //     const watch = fakeData.find(pd => pd.key===key);
    //     watch.quantity = savedCart[key];
    //     return watch;
    // })

    const watchKey = action.payload.key;
    const sameWatch = state.cartItem.find(item => item.key===watchKey);
    console.log(sameWatch);
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
                cartItem: state.cartItem.filter((c) => c.key !== action.payload.key)};
        default:
            return state;
    } 
}