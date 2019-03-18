import React,{Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import NumberFormat from 'react-number-format';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {productsFetch,productDelete} from '../../actions';

class Product extends Component{

    constructor(props){
        super(props);       
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentDidMount(){
      this.props.productsFetch();
    }

    showData(products){
        if(products && products.length >0 ){
            return products.map(product =>{
               
                return (
                    <tr key={product.id}>
                        
                        <td>{product.id}</td>
                        <td><img  src={product.img} style={{width:"100px",height:"100px"}} className="img-thumbnail"/></td>
                        <td>{product.name}</td>
            
                        <td><NumberFormat thousandSeparator={true} displayType={'text'} value={product.price} renderText={value => value }  /></td>                      
                       
                        <td className="text-center">
                            <button className="btn btn-sm ml-1 btn-success" type="button" onClick={()=>this.editProduct(product)}>Edit</button>
                            <button className="btn btn-sm ml-1 btn-danger" type="button" onClick={()=>this.delProduct(product)}>Delete</button>
                        </td>
                    </tr>
                )
            })    
        }
        return <tr><td className="text-center" colSpan="5">ไม่มีรายการ</td></tr>
    }

    editProduct(product){
        this.props.history.push('/products/edit/'+product.id);
    }

    addProduct(){
        this.props.history.push('/products/add');
    }

    delProduct(product){
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this.props.productDelete(product.id);
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    }

    render(){      
        return (
            <div>
               <Header/>
                <div className="container-fluid">
                    <h3 className="page-header">รายการสินค้า <button type="button" className="btn btn-sm btn-primary" onClick={()=>this.addProduct()}>เพิ่ม</button></h3>                 
                                              
                    <div className="panel panel-default">
                        <div className="panel-body">
                             <div className="table-responsive">
                        <table className="table table-hover">
                            <thead className="thead-light">
                                <tr>
                                    <th>
                                        ID
                                    </th>
                                    <th>
                                        Image
                                    </th>
                                    <th>Name</th>                                  
                                    <th>
                                        Price
                                    </th>
                                    
                                    <th className="text-center">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.showData(this.props.products)}
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                </div>
              
               <Footer/>     
            </div>
        )
    }
}

function mapStateToProps({products}){
    return {products};
}

export default withRouter(connect(mapStateToProps,{productsFetch,productDelete})(Product));