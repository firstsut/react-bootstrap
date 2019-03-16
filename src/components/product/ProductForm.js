import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import FormField from '../common/FormField';
import {productFormField} from '../product/FormField';

class ProductForm extends Component{

    renderFields(formFields){
        return formFields.map(({type,label,name,required,customInput})=>{
            return (
                <Field key={name} val="0" label={label} name={name} required={required} type={type} component={customInput || FormField}/>
            )
        })
    }
    render(){
        return (
            <div>
                <form>
                    {this.renderFields(productFormField)}
                    <button className="btn btn-sm btn-info">บันทึก</button>
                </form>
            </div>
        )
    }
}

ProductForm = reduxForm({form : 'product-form'})(ProductForm);
export default ProductForm;