import React,{Component} from 'react';
import NumberFormat from 'react-number-format';
class OrderList extends Component{

    showData(orders){
        if(orders && orders.length >0 ){
            return orders.map(order =>{
                const dateTime = new Date(order.date).toLocaleString();
                return (
                    <tr key={order.id}>
                        <td>{order.id}</td>
                        <td>{dateTime}</td>
                        <td>
                            <ul className="list-unstyled">
                                {
                                    order.orders && order.orders.map(row=>{
                                        return (
                                            <li key={"product_"+row.product.id}>{row.product.name} x {row.quantity} = <NumberFormat thousandSeparator={true} displayType={'text'} value={row.quantity * row.product.price} renderText={value => value }  /></li>
                                        )
                                    })
                                }
                            </ul>
                        </td>
                        <td><NumberFormat thousandSeparator={true} displayType={'text'} value={order.totalPrice} renderText={value => value }  /></td>                      
                       
                        <td className="text-center"><button className="btn btn-sm btn-danger" type="button" onClick={()=>this.props.onDelOrder(order)}>Delete</button></td>
                    </tr>
                )
            })    
        }
        return <tr><td className="text-center" colSpan="5">ไม่มีรายการ</td></tr>
    }

    render(){
        return (
            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-light">
                        <tr>
                            <th>
                                ID
                            </th>
                            <th>Date</th>
                            <th>
                                Products
                            </th>
                            <th>
                                Price
                            </th>
                            
                            <th className="text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.showData(this.props.orders)}
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default OrderList;