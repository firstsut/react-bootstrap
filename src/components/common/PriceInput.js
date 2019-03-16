import React,{Component} from 'react';
import NumberFormat from 'react-number-format';

class PriceInput extends Component{

    render(){
        const { input: {  value,onChange,name },label,val,required } = this.props;       
        return (
            <div className="form-group">
                <label className="title">{label} {required && <span className="text-danger">*</span>}</label>
                <NumberFormat name={name} thousandSeparator={true} displayType={'input'} className="form-control" value={val}/>                                                             
            </div>      
        )
    }
}

export default PriceInput;