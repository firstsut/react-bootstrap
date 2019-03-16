import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Order from './pages/order/Order';
import Product from './pages/product/Product';
import ProductAdd from './pages/product/ProductAdd';
import ProductUpdate from './pages/product/ProductUpdate';
import NotFound from './pages/NotFound';
import 'react-confirm-alert/src/react-confirm-alert.css' // Import css

import {BrowserRouter,Route,Switch} from 'react-router-dom';

class App extends Component {

 renderRouter(){
   return (
     <Switch>
       <Route exact path="/" component={Home} />
       <Route exact path="/about" component={About} />
       <Route exact path="/orders" component={Order} />
       <Route exact path="/products/add" component={ProductAdd} />
       <Route exact path="/products/edit/:id" component={ProductUpdate} />
       <Route exact path="/products" component={Product} />
       <Route  component={NotFound} />       
     </Switch>
   )
 }
  render() {
    return (
      <BrowserRouter>
         {this.renderRouter()}
      </BrowserRouter>
    );
  }
}

export default App;
