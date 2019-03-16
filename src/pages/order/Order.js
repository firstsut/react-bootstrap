import React,{Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';
import OrderList from '../../components/order/OrderList';
import { confirmAlert } from 'react-confirm-alert'; // Import
class Order extends Component{

    constructor(props){
        super(props);
        this.state = {
            orders : []
        }
        this.delOrder = this.delOrder.bind(this);
    }

    getList(){
        Axios.get('http://localhost:3001/orders').then(res=>{
            this.setState({
                orders:res.data
            });
        })
    }

    componentDidMount(){
      this.getList();
    }

    delOrder(order){
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                    Axios.delete('http://localhost:3001/orders/'+order.id).then(res=>{
                        this.getList();
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

    render(){
        return (
            <div>
               <Header/>
                <div className="container-fluid">
                    <h3 className="page-header">รายการสั่งซื้อ</h3>
                    <div className="panel panel-default">
                        <div className="panel-body">
                            <OrderList onDelOrder={this.delOrder} orders={this.state.orders} />
                        </div>
                    </div>
                </div>
              
               <Footer/>     
            </div>
        )
    }
}

export default Order;