import Axios from 'axios';
import {PRODUCTS_FETCH,PRODUCT_CREATE,PRODUCT_UPDATE,PRODUCT_FETCH} from './types';

export const  productsFetch =  ()=>{
    return dispatch =>{
        Axios.get(process.env.REACT_APP_API+'/products').then(res=>{
            dispatch({type : PRODUCTS_FETCH,payload : res.data});
        })
    }
   
}

export const productDelete = (id)=>{
    return dispatch =>{
        Axios.delete(process.env.REACT_APP_API+'/products/'+id).then(res=>{
            Axios.get(process.env.REACT_APP_API+'/products').then(res=>{  
                res.data.msg = 'ลบข้อมูลสำเร็จ';
                dispatch({type : PRODUCTS_FETCH,payload : res.data});
            })      
        });
    }
}

export const productFetch = (id)=>{
    return dispatch =>{
        Axios.get(process.env.REACT_APP_API+'/products/'+id).then(res=>{
            dispatch({type: PRODUCT_FETCH,payload : res.data});
        })
    }
}

export const productCreate = (product)=>{
    return dispatch =>{
        const rand = 1 + Math.random() * (5 - 1);
        const img = "/images/product/"+Math.floor(rand)+".png";
        product.img = img;
        product.price = parseFloat(product.price.split(',').join(''));
        Axios.post(process.env.REACT_APP_API+'/products',product).then(res=>{
            res.data.msg = 'ลบข้อมูลสำเร็จ';
            dispatch({type:PRODUCT_CREATE,payload:res.data})
        }).catch(err=>{
            dispatch({type:PRODUCT_CREATE,payload:{error:err}})
        })
    }
}

export const productUpdate = (id,product)=>{
    return dispatch =>{      
        product.price = parseFloat(product.price.split(',').join(''));
        Axios.put(process.env.REACT_APP_API+'/products/'+id,product).then(res=>{
            res.data.msg = 'ลบข้อมูลสำเร็จ';
            dispatch({type:PRODUCT_UPDATE,payload:res.data});    
        }).catch(err=>{
            dispatch({type:PRODUCT_UPDATE,payload:{error:err}})
        })
    }
}