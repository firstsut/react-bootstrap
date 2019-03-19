import React,{Component} from 'react';
import NumberFormat from 'react-number-format';
import ContentLoader from 'react-content-loader';

class OrderList extends Component{

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
        }else if(!this.props.loader){
            return <tr><td className="text-center" colSpan="5">ไม่มีรายการ</td></tr>
        }       
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
                        {
                        this.props.loader &&
                        <tr>
                            <td colSpan="5">
                                { this.contentPreload(10)}
                            </td>
                        </tr>
                        }   
                        {
                            !this.props.loader &&
                            this.showData(this.props.orders)
                            }
                    </tbody>
                </table>
            </div>
        )
    }
    
}

export default OrderList;