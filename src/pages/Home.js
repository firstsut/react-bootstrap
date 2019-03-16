import React, { Component } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Monitor from '../components/monitor/Monitor';
import Axios from 'axios';

class Home extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      products : []
    }
  }
  
  componentDidMount(){
    Axios.get('http://localhost:3001/products').then(res=>{
        this.setState({
            products : res.data
          })
    });
  }

  render() {
    return (
      <div>
        <Header/>
         <Monitor products={this.state.products}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
