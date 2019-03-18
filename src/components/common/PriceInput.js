import React,{Component} from 'react';
import NumberFormat from 'react-number-format';

class PriceInput extends Component{

    render(){
        const { input,label,required,meta : {error,touched}} = this.props;       
        return (
            <div className="form-group">
                <label className="title">{label} {required && <span className="text-danger">*</span>}</label>
                <NumberFormat {...input} name={input.name} thousandSeparator={true} displayType={'input'} className="form-control" value={input.value || ""}
                /> 
                {
                    error && touched &&
                    <div className="mt-2 text-danger title"><strong>{error}</strong></div>
                }
            </div>      
        )
    }
}

export default PriceInput;