import React,{Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { confirmAlert } from 'react-confirm-alert'; // Import
import NumberFormat from 'react-number-format';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {productsFetch,productDelete} from '../../actions';
import ContentLoader from 'react-content-loader';

class Product extends Component{

    loader = false;
    constructor(props){
        super(props);           
        this.delProduct = this.delProduct.bind(this);
        this.editProduct = this.editProduct.bind(this);
    }

    componentWillMount(){
        this.loader = true;      
    }

    componentDidMount(){
         setTimeout(
            function() {
                this.props.productsFetch();
            }
            .bind(this),
            600
          ); 
          this.loader = false;      
    }

    showData(products){
        if(products && products.length >0 ){
            return products.map(product =>{
               
                return (
                    <tr key={product.id}>
                        
                        <td>{product.id}</td>
                        <td><img  src={product.img} alt="..." style={{width:"100px",height:"100px"}} className="img-thumbnail" /></td>
                        <td>{product.name}</td>
            
                        <td><NumberFormat thousandSeparator={true} displayType={'text'} value={product.price} renderText={value => value }  /></td>                      
                       
                        <td className="text-center">
                            <button className="btn btn-sm ml-1 btn-success" type="button" onClick={()=>this.editProduct(product)}>Edit</button>
                            <button className="btn btn-sm ml-1 btn-danger" type="button" onClick={()=>this.delProduct(product)}>Delete</button>
                        </td>
                    </tr>
                )
            })    
        }else if(!this.loader){
            return <tr><td className="text-center" colSpan="5">ไม่มีรายการ</td></tr>
        }
       
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

    contentPreload(length){
        let result = []
        for (let i = 0; i < length; i++) {
          result.push(i);
        }
        return result.map(index=>{
          return (
            <div key={index}>
                <ContentLoader                
                height={30}
                width={1060}
                speed={1}
                primaryColor="#f3f3f3"
                secondaryColor="#ecebeb"                
            >
                <circle cx="10" cy="20" r="8" /> 
                <rect x="40" y="15" rx="5" ry="5" width="200" height="10" /> 
                <rect x="320" y="15" rx="5" ry="5" width="200.4" height="10" /> 
                <rect x="560" y="15" rx="5" ry="5" width="200.2" height="10" /> 
                <rect x="900" y="15" rx="5" ry="5" width="100" height="10" />                  
            </ContentLoader>
            </div>
          )
        })   
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
                                {
                                this.loader &&
                                <tr>
                                    <td colSpan="5">
                                        { this.contentPreload(10)}
                                    </td>
                                </tr>
                                }                             
                                {
                                     !this.loader &&
                                    this.showData(this.props.products)
                                    }
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