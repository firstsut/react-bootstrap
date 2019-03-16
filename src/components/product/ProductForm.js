import React,{Component} from 'react';
import {reduxForm,Field} from 'redux-form';
import FormField from '../common/FormField';
import {productFormField} from '../product/FormField';


class ProductForm extends Component{

    renderFields(formFields){
        return formFields.map(({type,label,name,required,customInput})=>{
            return (
                <Field key={name}  label={label} name={name} required={required} type={type} component={customInput || FormField}/>
            )
        })
    }
    render(){
        return (
            <div>
                <form>
                    {this.renderFields(productFormField)}
                    <button type="submit" className="btn btn-sm btn-info">บันทึก</button>
                </form>
            </div>
        )
    }
}

function validate (values){
    const errors = {}
    productFormField.forEach(({name,required})=>{      
        if(!values[name] && required){
            errors[name] = "กรุณากรอกข้อมูล";
        }
    })
    return errors;
}

ProductForm = reduxForm({form : 'productForm',validate})(ProductForm);
export default ProductForm;