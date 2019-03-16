import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import {connect} from 'react-redux';
import {productFetch,productDelete} from '../actions';

class Home extends Component {
  
  constructor(props){
    super(props);
  }
  
  componentDidMount(){
    this.props.productFetch();
  }

  render() {
    return (
      <div>
        <Header/>
         <Monitor products={this.props.products}/>
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

export default connect(mapStateToProps,{productFetch,productDelete})(Home);
