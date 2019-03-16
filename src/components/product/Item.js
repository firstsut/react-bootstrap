import React,{Component} from 'react';
import NumberFormat from 'react-number-format';

class Item extends Component{
    constructor(props){
        super(props);        
    }
    render(){
        const {name,price,img} = this.props.product;
        return (
            <div className="col-md-3">
                <div className="card"> 
                    <div className="text-center">
                    <img className="card-img-top" style={{width:'200px',height:'200px'}} src={img} />
                    </div>
                    
                    <div class="card-body">
                        <h4 className="card-title"><strong>{name}</strong></h4>
                        <NumberFormat thousandSeparator={true} displayType={'text'} value={price} renderText={value => <p className="card-text text-right">{value} THB</p>}  />                      
                        <hr/>
                        <button type="button" onClick={()=> this.props.onAddOrder(this.props.product)}  className="btn btn-dark btn-block">ซื้อ</button>  
                    </div>     
                </div>
            </div>
        )
    }
}
export default Item;