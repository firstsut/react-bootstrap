import React,{Component} from 'react';
import Calculate from './Calculate';
import ProductList from '../product/ProductList';
import Axios from 'axios';
import { confirmAlert } from 'react-confirm-alert'; // Import

class Monitor extends Component{

    constructor(props){
        super(props);
        this.state = {
            totalPrice : 0,
            orders : [],
            confirm : false,
            msg : ""  
        }
        this.addOrder = this.addOrder.bind(this);
        this.delOrder = this.delOrder.bind(this)
        this.cancelOrder = this.cancelOrder.bind(this);
        this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product){
        let findOrder = this.state.orders.find(order=> order.product.id === product.id);    
        if(findOrder){
            findOrder.quantity++;
        }else{
            this.state.orders.push({
                product : product,
                quantity : 1
            });
        }
        const totalPrice = this.state.totalPrice + product.price;
        this.setState({
            totalPrice : totalPrice,
            orders : this.state.orders,
            confirm : false 
        })
    }

    delOrder(product){
        let findOrder = this.state.orders.find(order => order.product.id === product.id );
        let resultOrder = this.state.orders.filter(order=> order.product.id !== product.id);
        const totalPrice = this.state.totalPrice - (findOrder.product.price * findOrder.quantity);
        this.setState({
            totalPrice : totalPrice,
            orders : resultOrder,
            confirm : false 
        })
    }

    cancelOrder(){
        confirmAlert({
            title: 'Confirm to cancel Order',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    this.setState({
                        totalPrice : 0,
                        orders : [],
                        confirm : false 
                    });
                }
              },
              {
                label: 'No',
                onClick: () => {}
              }
            ]
          });
    
    }

    confirmOrder(){
        confirmAlert({
            title: 'Confirm to Orders',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    const {totalPrice,orders} = this.state;
                    if(orders && orders.length > 0){
                        Axios.post('http://localhost:3001/orders',{
                            date : new Date(),
                            totalPrice : totalPrice,
                            orders : orders            
                        }).then(res=>{
                            this.setState({
                                totalPrice : 0,
                                orders : [],
                                confirm : true,
                                msg : "บันทึกรายการสั่งซื้อเรียบร้อย" 
                            })   
                        })
                    }else{
                        this.setState({
                            confirm : true,
                            msg : "กรุณาเลือกสินค้าก่อน"
                        })
                    }
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
            <div className="container-fluid">
            {this.state.confirm && 
                <div className="alert alert-warning text-right" role="alert"> {this.state.msg}</div>
            }
                
                <div className="row">
                    <div className="col-md-9">
                        <ProductList  onAddOrder={this.addOrder} products={this.props.products}/>
                    </div>
                    <div className="col-md-3">
                        <Calculate onConfirmOrder={this.confirmOrder} onCancelOrder={this.cancelOrder} onDelOrder={this.delOrder} totalPrice={this.state.totalPrice} orders={this.state.orders} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;