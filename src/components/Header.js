import React from 'react';
import {Link} from 'react-router-dom';

const Header = ()=>{
    return (
        <div  style={{marginBottom:"5em"}}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <Link className="navbar-brand" to="/">Home</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                      <Link className="nav-link" to="/products">Product <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/orders">Order</Link>
                    </li>  
                    <li className="nav-item">
                      <Link className="nav-link" to="/about">About</Link>
                    </li>                  
                  </ul>
                  </div>
                </nav>
        </div> 
    )
} 
export default Header;