import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/product/ProductForm';
import {productCreate,productUpdate,productFetch} from '../../actions';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {withRouter} from 'react-router-dom';

class ProductEdit extends Component{
   

    componentDidMount(){
        if(this.props.match.params.id){
             this.props.productFetch(this.props.match.params.id);   
        }
        
      
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.products && nextProps.products.msg && !nextProps.products.error){
            nextProps.history.push({
                pathname: '/products',
                state : {
                    msg : nextProps.products.msg
                }               
              });
        }       
    }

    render(){

        const {match,formValues,products,productCreate,productUpdate } = this.props;       
        return (
            <div>
                <Header/>
                    <div className="container-fluid">
                    {match.path.indexOf("add") > 0 &&
                        
                        <div>
                            <h3 className="page-header">เพิ่มสินค้า  <Link to="/products" className="btn btn-sm btn-secondary">กลับ</Link></h3>
                           
                            {
                                     products && products.error &&
                                    <div className="alert alert-danger" role="alert">
                                        {products.error }
                                    </div>
                                }
                            <div className="row">
                            <div className="offset-md-2 col-md-8">
                                <ProductForm onProductSubmit={()=>productCreate(formValues)}/>
                            </div>
                            </div>  
                        </div>  
                             
                     }{
                        match.path.indexOf("edit") > 0 &&
                         <div>
                              <h3 className="page-header">แก้ไขสินค้า   <Link  to="/products" className="btn btn-sm btn-secondary">กลับ</Link></h3>                                

                                {
                                     products && products.error &&
                                    <div className="alert alert-danger" role="alert">
                                        {products.error }
                                    </div>
                                }
                                <div className="row">
                                <div className="offset-md-2 col-md-8">
                                    <ProductForm onProductSubmit={()=>productUpdate(products.id,formValues)}/>
                                </div>
                                </div>  
                         </div>
                     }
                        
                       
                    </div>
                <Footer/>
            </div>
        )
    }
}

function mapStateToProps({form,products}){  
    return {
        formValues: form.productForm ? form.productForm.values : null,products
    }
}

export default withRouter(connect(mapStateToProps,{productCreate,productFetch,productUpdate})(ProductEdit));