import React, { Component} from 'react';
import NumberFormat from 'react-number-format';

class Calculate extends Component{
    showOrder(orders){
        if(orders && orders.length > 0 ){
            return orders.map(order =>{
                return (
                    <li key={order.product.id} className="text-success  mt-1"><strong>{order.product.name} x {order.quantity} =                     
                    <NumberFormat thousandSeparator={true} displayType={'text'} value={order.product.price * order.quantity} renderText={value => value}  />
                    </strong>
                    <button className="ml-1 btn btn-sm btn-secondary" type="button" onClick={()=>this.props.onDelOrder(order.product)}>X</button>
                    </li>
                )
            })
        }
        return <li>ไม่มีรายการ</li>
    }
    render(){
        const {totalPrice,orders} = this.props;
        return (
            <div className="well well-sm text-right">
                <NumberFormat thousandSeparator={true} displayType={'text'} value={totalPrice} renderText={value => <h3 className=""><strong>{value}</strong></h3>}  />                
                <hr/>
                <ul className="list-unstyled">
                    {this.showOrder(orders)}
                </ul>            
                <button onClick={()=>this.props.onConfirmOrder()} className="btn btn-success btn-block" type="button">ยืนยัน</button>
                <button onClick={()=>this.props.onCancelOrder()} className="btn btn-warning btn-block" type="button">ยกเลิก</button>
            </div>
        )
    }
}

export default Calculate;