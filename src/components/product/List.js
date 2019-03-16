import React,{Component} from 'react';
import Item from './Item';

class List extends Component{

    showProducts(){
        if(this.props.products){
             return this.props.products.map(product=>(               
                    <Item  onAddOrder={this.props.onAddOrder} key={product.id} product={product}/>                               
             ))   
        }
    }

    render(){
        return (
            <div className="row">
                {this.showProducts()}
            </div>
        )
    }
}
export default List;
