import React,{Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/product/ProductForm';

class ProductAdd extends Component{
    render(){
        return (
            <div>
                <Header/>    
                <div className="container-fluid">
                    <h3 className="page-header">เพิ่มสินค้า</h3>
                    <div className="row">
                        <div className="offset-md-2 col-md-8">
                            <ProductForm/>
                        </div>
                    </div>                                        
                </div>
                <Footer/>
            </div>
        )
    }
}
export default ProductAdd;