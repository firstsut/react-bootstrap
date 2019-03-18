import React,{Component} from 'react';
import Item from './ProductItem';
import ContentLoader from 'react-content-loader';

class ProductList extends Component{

    loader = false;
    constructor(props){
        super(props);        
    }

    componentWillMount(){
        this.loader = true;      
    }

    componentDidMount(){
      this.loader = false;  
    }


    contentPreload(length){
        let result = []
        for (let i = 0; i < length; i++) {
          result.push(i);
        }
        return result.map(index=>{
          return (
            <div className="col-md-3  mt-2" key={index}>
            <ContentLoader 
              width={250}  
              height={250}    
              speed={1}
                
            >
              <rect x="26" y="172" rx="4" ry="4" width="100" height="13" /> 
                <rect x="151" y="191" rx="4" ry="4" width="81" height="12.96" /> 
                <rect x="56" y="7.49" rx="5" ry="5" width="148" height="148" /> 
                <rect x="27.69" y="211" rx="4" ry="4" width="201" height="24.7" />
            </ContentLoader>
            </div>
          )
        })   
    }

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
                { this.loader &&
                     this.contentPreload(8)
                }
                {
                   !this.loader &&
                  this.showProducts()
                  }
            </div>
        )
    }
}
export default ProductList;
