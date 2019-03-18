import React,{Component} from 'react';
import Item from './ProductItem';

class ProductList extends Component{

    showProducts(){
        if(this.props.products && Array.isArray(this.props.products)){
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
export default ProductList;
