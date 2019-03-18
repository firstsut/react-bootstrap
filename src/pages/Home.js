import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import {connect} from 'react-redux';
import {productsFetch,productDelete} from '../actions';


class Home extends Component {
    
  componentDidMount(){

    setTimeout(
      function() {
        this.props.productsFetch();  
      }
      .bind(this),
      600
  );
    
       
  }

  render() {   
    return (
      <div>
        <Header/>        
        <Monitor  products={this.props.products}/>
        <Footer/>
      </div>
    );
  }
}

function mapStateToProps({products}){
  return {
    products
  }
}

export default connect(mapStateToProps,{productsFetch,productDelete})(Home);
