import React,{Component} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import {connect} from 'react-redux';
import {orderFetch,orderDelete} from '../../actions'
import OrderList from '../../components/order/OrderList';
import { confirmAlert } from 'react-confirm-alert'; // Import
class Order extends Component{

    loader = false;
    constructor(props){
        super(props);         
        this.delOrder = this.delOrder.bind(this);
    }

    componentWillMount(){
      this.loader = true;      
     
  }

    componentDidMount(){
      setTimeout(
        function() {
          this.props.orderFetch();
        }
        .bind(this),
        600
      ); 
      this.loader = false;      
     
     
    }

    delOrder(order){
        confirmAlert({
            title: 'Confirm to delete',
            message: 'Are you sure to do this.',
            buttons: [
              {
                label: 'Yes',
                onClick: () => {
                   this.props.orderDelete(order.id);
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
                            <OrderList loader={this.loader} onDelOrder={this.delOrder} orders={this.props.orders} />
                        </div>
                    </div>
                </div>
              
               <Footer/>     
            </div>
        )
    }
}

function mapStateToProps({orders}){
    return {orders};
}

export default connect(mapStateToProps,{orderDelete,orderFetch})(Order);