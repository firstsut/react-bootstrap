import {PRODUCTS_FETCH,PRODUCT_FETCH,PRODUCT_UPDATE,PRODUCT_CREATE} from '../actions/types';

export default function(state=[],action){   
  
    switch(action.type){
        case PRODUCTS_FETCH:
            return [...action.payload];
        case PRODUCT_FETCH:
            return action.payload;
        case PRODUCT_CREATE:
            return action.payload;
         case PRODUCT_UPDATE:
            return {
                ...state,
                ...action.payload
            }              
        default :
            return state;
    }
}