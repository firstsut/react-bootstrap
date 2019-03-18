import Axios from 'axios';
import {ORDERS_FETCH,ORDERS_ADD} from './types';

export const orderFetch = ()=>{

    return dispatch => {
        Axios.get(process.env.REACT_APP_API+'/orders').then(res=>{
            dispatch({type : ORDERS_FETCH,payload : res.data});
        })
    }
   
}

export const orderDelete = (id)=>{
    return dispatch =>{
        Axios.delete(process.env.REACT_APP_API+'/orders/'+id).then(res=>{
            Axios.get(process.env.REACT_APP_API+'/orders').then(res=>{
                dispatch({type : ORDERS_FETCH,payload : res.data});
            })      
        });
    }
}

