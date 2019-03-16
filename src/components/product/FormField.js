
import PriceInput from '../common/PriceInput';

export const productFormField = [
    {label : "ชื่อ",required:true,name:"name",type:"text"},
    {label : "ราคา",required:true,name:"price",type:"text",customInput:PriceInput},
]